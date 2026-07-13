(function initIntakeCompletionPortal() {
  'use strict';

  const bridge = window.BKFLIntakeBridge;
  const packages = (window.BKFL_INTAKE_SUBMISSIONS && window.BKFL_INTAKE_SUBMISSIONS.packages) || [];
  const query = new URLSearchParams(window.location.search);
  const requestedPackageId = query.get('packageId');
  const requestedItemId = query.get('itemId');
  const requestedIndex = packages.findIndex((item) => item.packageId === requestedPackageId);
  let selectedIndex = requestedIndex >= 0 ? requestedIndex : 0;
  let current = null;
  let initialFocusApplied = false;

  const clone = (value) => JSON.parse(JSON.stringify(value));
  const escapeHtml = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[char]);
  const money = (value) => new Intl.NumberFormat('en-US', {
    style: 'currency', currency: 'USD', maximumFractionDigits: 0,
  }).format(Number(value) || 0);
  const portalStorageKey = (packageId) => `bkfl_intake_completion_portal_v2:${packageId}`;
  const idForPath = (path) => `field-${String(path).replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '')}`;
  const getPath = (object, path) => path.split('.').reduce((value, key) => (value == null ? undefined : value[key]), object);
  const setPath = (object, path, value) => {
    const parts = path.split('.');
    const last = parts.pop();
    const parent = parts.reduce((item, key) => item[key], object);
    parent[last] = value;
  };
  const hasClientResponse = (item) => !['open', 'unsupported_file'].includes(item.resolutionStatus);
  const isCompletionResolved = (item) => [
    'answered', 'uploaded', 'replaced', 'unavailable', 'not_applicable',
  ].includes(item.resolutionStatus);
  const completionItems = () => current?.completion?.bundle?.items || [];
  const activeItems = () => completionItems().filter((item) =>
    item.clientActionable
    && item.applicability === 'essential_now'
    && !isCompletionResolved(item));
  const sessionResponseIds = () => current?.portalSessionResponseIds || [];

  const readPersisted = (sourcePackage) => {
    try {
      const saved = JSON.parse(window.localStorage.getItem(portalStorageKey(sourcePackage.packageId)) || 'null');
      const queued = bridge.readQueuedPackages(window.localStorage)
        .find((item) => item.packageId === sourcePackage.packageId);
      const candidates = [sourcePackage, queued, saved]
        .filter((item) => item?.packageId === sourcePackage.packageId)
        .map((item, index) => ({ index, item }));
      candidates.sort((left, right) =>
        Number(right.item.completion?.revision || 0) - Number(left.item.completion?.revision || 0)
        || right.index - left.index);
      return clone(candidates[0].item);
    } catch {
      return clone(sourcePackage);
    }
  };

  const persist = () => {
    if (current) window.localStorage.setItem(portalStorageKey(current.packageId), JSON.stringify(current));
  };

  const renderOrganizationBrand = () => {
    const organization = bridge.readOrganization(window.localStorage);
    const name = organization.name;
    const initials = name.split(/\s+/).filter(Boolean).map((part) => part[0]).join('').slice(0, 2).toUpperCase() || 'BK';
    const initialsElement = document.getElementById('organizationInitials');
    const logoElement = document.getElementById('organizationLogo');
    document.getElementById('organizationName').textContent = name;
    initialsElement.textContent = initials;
    if (organization.logo) {
      logoElement.alt = `${name} logo`;
      logoElement.hidden = false;
      initialsElement.hidden = true;
      logoElement.onerror = () => { logoElement.hidden = true; initialsElement.hidden = false; };
      logoElement.src = organization.logo;
    } else {
      logoElement.hidden = true;
      logoElement.removeAttribute('src');
      logoElement.alt = '';
      initialsElement.hidden = false;
    }
    document.title = `${name} Intake Completion - Jimmy Branch`;
  };

  const normalizeCanonicalPath = (item) => {
    const path = String(item.canonicalPath || '').split(' + ')[0];
    if (item.kind === 'document') {
      const documentId = item.id.replace(/^document-/, '');
      let index = current.matter.documents.findIndex((document) => document.id === documentId);
      if (index < 0) {
        const match = path.match(/^matter\.documents\[name='(.+)'\]$/);
        index = match ? current.matter.documents.findIndex((document) => document.name === match[1]) : -1;
      }
      return index >= 0 ? `matter.documents.${index}` : '';
    }
    const debtMatch = path.match(/^matter\.debts\[id='(.+)'\](\..+)$/);
    if (debtMatch) {
      const index = current.matter.debts.findIndex((debt) => debt.id === debtMatch[1]);
      return index >= 0 ? `matter.debts.${index}${debtMatch[2]}` : '';
    }
    return path.replace(/\[(\d+)\]/g, '.$1');
  };

  const findDocument = (item) => {
    const normalized = normalizeCanonicalPath(item);
    const match = normalized.match(/^matter\.documents\.(\d+)$/);
    return match ? current.matter.documents[Number(match[1])] : null;
  };

  const baselinePackage = () => packages.find((item) => item.packageId === current.packageId) || current;
  const updateDerivedState = () => {
    const bundle = current.completion.bundle;
    const baseline = baselinePackage();
    const baselineBundle = baseline.completion.bundle;
    const unresolved = activeItems();
    const clientItems = completionItems().filter((item) => item.clientActionable && item.applicability === 'essential_now');
    const resolvedClientItems = clientItems.filter(isCompletionResolved);
    const answeredRequiredFields = completionItems().filter((item) => item.kind === 'field'
      && item.applicability === 'essential_now'
      && ['answered', 'not_applicable'].includes(item.resolutionStatus)).length;
    const fieldApplicable = baselineBundle.metrics.fieldCompletion.applicable;
    const fieldEntered = Math.min(fieldApplicable, baselineBundle.metrics.fieldCompletion.entered + answeredRequiredFields);
    const documentApplicable = baselineBundle.metrics.documentCollection.applicable;
    const documentCollected = current.matter.documents.filter((document) => ['received', 'reviewed'].includes(document.status)).length;
    const blockingRequired = baselineBundle.metrics.blockingReadiness.required;
    const initiallyBlocking = baselineBundle.reminderItems.length;
    const unresolvedBlocking = completionItems().filter((item) => item.clientActionable
      && item.applicability === 'essential_now' && !isCompletionResolved(item)).length;
    const blockingComplete = Math.min(blockingRequired,
      baselineBundle.metrics.blockingReadiness.complete + (initiallyBlocking - unresolvedBlocking));
    const baselineChecklistPercent = baselineBundle.metrics.intakeChecklistCompletion;
    const checklistPercent = clientItems.length
      ? Math.round(
          baselineChecklistPercent
          + ((100 - baselineChecklistPercent) * (resolvedClientItems.length / clientItems.length)),
        )
      : 100;
    const intakeCompletion = unresolved.length ? 'needs_client_action' : 'complete';

    bundle.items = completionItems();
    bundle.reminderItems = unresolved.filter((item) => !hasClientResponse(item));
    bundle.metrics = {
      blockingReadiness: {
        complete: blockingComplete,
        percent: blockingRequired ? Math.round((blockingComplete / blockingRequired) * 100) : 100,
        required: blockingRequired,
      },
      documentCollection: {
        applicable: documentApplicable,
        collected: documentCollected,
        percent: documentApplicable ? Math.round((documentCollected / documentApplicable) * 100) : 100,
      },
      fieldCompletion: {
        applicable: fieldApplicable,
        entered: fieldEntered,
        percent: fieldApplicable ? Math.round((fieldEntered / fieldApplicable) * 100) : 100,
      },
      intakeChecklistCompletion: checklistPercent,
    };
    bundle.states.intakeCompletion = intakeCompletion;
    current.completion.items = clone(bundle.items);
    current.completion.missingItems = clone(unresolved);
    current.completion.percent = checklistPercent;
    current.completion.status = intakeCompletion;
    current.completion.states = clone(bundle.states);
    current.completion.fieldCompletion = {
      applicableRequired: fieldApplicable,
      enteredRequired: fieldEntered,
      percent: bundle.metrics.fieldCompletion.percent,
    };
    current.completion.documentCompletion = {
      applicableRequired: documentApplicable,
      receivedRequired: documentCollected,
    };
    current.completion.blockingReadiness = clone(bundle.metrics.blockingReadiness);
    current.completion.intakeChecklistCompletion = checklistPercent;
    current.readiness.fieldsRequired = fieldApplicable;
    current.readiness.fieldsFilled = fieldEntered;
    current.readiness.documentsRequired = documentApplicable;
    current.readiness.documentsReady = documentCollected;
    current.readiness.status = intakeCompletion === 'complete' ? 'intake-complete-pending-review' : 'needs-client-action';
  };

  const setItemResolution = (itemId, resolutionStatus, responseNote = '') => {
    const item = completionItems().find((candidate) => candidate.id === itemId);
    if (!item) return;
    item.resolutionStatus = resolutionStatus;
    item.responseNote = responseNote;
    item.respondedAt = new Date().toISOString();
    const ids = new Set(sessionResponseIds());
    if (hasClientResponse(item)) ids.add(itemId); else ids.delete(itemId);
    current.portalSessionResponseIds = [...ids];
    updateDerivedState();
    persist();
    renderStatus();
    renderMissingList();
  };

  const input = (label, path, type = 'text', wide = '') => {
    const id = idForPath(path);
    return `<div class="field ${wide}"><label for="${id}">${escapeHtml(label)}</label><input id="${id}" data-path="${escapeHtml(path)}" ${type === 'number' ? 'data-number="true"' : ''} type="${type}" value="${escapeHtml(getPath(current, path) ?? '')}"></div>`;
  };
  const textarea = (label, path) => {
    const id = idForPath(path);
    return `<div class="field full"><label for="${id}">${escapeHtml(label)}</label><textarea id="${id}" data-path="${escapeHtml(path)}">${escapeHtml(getPath(current, path) ?? '')}</textarea></div>`;
  };
  const select = (label, path, options) => {
    const id = idForPath(path);
    return `<div class="field"><label for="${id}">${escapeHtml(label)}</label><select id="${id}" data-path="${escapeHtml(path)}">${options.map((option) => `<option ${String(getPath(current, path)) === option ? 'selected' : ''}>${escapeHtml(option)}</option>`).join('')}</select></div>`;
  };
  const cell = (path, value, type = 'text') => `<input aria-label="${escapeHtml(path)}" data-path="${escapeHtml(path)}" ${type === 'number' ? 'data-number="true"' : ''} type="${type}" value="${escapeHtml(value ?? '')}">`;
  const table = (headers, rows, emptyLabel) => rows.length
    ? `<div class="table-wrap"><table class="data-table"><thead><tr>${headers.map((header) => `<th>${escapeHtml(header)}</th>`).join('')}</tr></thead><tbody>${rows.join('')}</tbody></table></div>`
    : `<div class="empty">${escapeHtml(emptyLabel)}</div>`;
  const section = (id, title, count, body) => `<section class="section" id="${id}"><div class="section-header"><h2>${escapeHtml(title)}</h2><span class="section-count">${escapeHtml(count || '')}</span></div>${body}</section>`;

  const renderProfiles = () => {
    document.getElementById('profileStrip').innerHTML = `<span class="profile-strip-label">Incomplete fake debtor</span>${packages.map((item, index) => `<button class="profile-button ${index === selectedIndex ? 'active' : ''}" type="button" data-profile="${index}">${escapeHtml(bridge.matterClientName(item.matter))}</button>`).join('')}`;
  };

  const resolutionLabel = (item) => ({
    answered: 'Answer added', uploaded: 'File selected', replaced: 'Replacement selected',
    unavailable: 'Marked unavailable', not_applicable: 'Marked not applicable', help_requested: 'Help requested',
    unsupported_file: 'Unsupported file type',
  })[item.resolutionStatus] || 'Still needed';

  const renderMissingList = () => {
    const container = document.getElementById('missingList');
    const active = activeItems();
    const sessionResolved = completionItems().filter((item) => sessionResponseIds().includes(item.id) && hasClientResponse(item));
    const shown = [...active, ...sessionResolved.filter((item) => !active.some((activeItem) => activeItem.id === item.id))];
    document.getElementById('missingSummary').textContent = active.length
      ? `${active.length} applicable item${active.length === 1 ? '' : 's'} still need a response. You can send a partial update at any time.`
      : 'Every applicable Intake Completion item has a response. Attorney and document review remain separate.';
    container.innerHTML = shown.length ? shown.map((item) => {
      const resolved = isCompletionResolved(item);
      const document = item.kind === 'document' ? findDocument(item) : null;
      return `<article class="missing-card ${resolved ? 'resolved' : ''}" data-missing-item-id="${escapeHtml(item.id)}">
        <div class="missing-card-header"><div><strong>${escapeHtml(item.label)}</strong><div class="missing-meta">${escapeHtml(item.whyNeeded)}<br>${escapeHtml(item.applicabilityReason)} Deadline: ${escapeHtml(item.caseStageDeadline)}.</div></div><span class="demo-badge">${escapeHtml(item.priority)} · ${escapeHtml(item.applicability.replace(/_/g, ' '))}</span></div>
        <div class="missing-actions">
          <button type="button" data-go-item="${escapeHtml(item.id)}">Go to exact item</button>
          ${item.kind === 'document' ? `<label class="upload-label">${document?.qualityIssue || document?.fileName ? 'Replace file' : 'Choose file'}<input type="file" accept=".pdf,.png,.jpg,.jpeg" data-upload-item="${escapeHtml(item.id)}"></label>` : ''}
          <button type="button" data-resolution="unavailable" data-item-id="${escapeHtml(item.id)}">Unavailable</button>
          <button type="button" data-resolution="not_applicable" data-item-id="${escapeHtml(item.id)}">Not applicable</button>
          <button type="button" data-resolution="help_requested" data-item-id="${escapeHtml(item.id)}">Need help</button>
        </div>
        <label class="response-reason-label">Short explanation<input data-response-reason="${escapeHtml(item.id)}" value="${escapeHtml(item.responseReason || '')}" placeholder="Tell the firm why or what help you need"></label>
        <div class="resolution-note ${item.resolutionStatus === 'unsupported_file' ? 'upload-error' : ''}" aria-live="polite">${escapeHtml(resolutionLabel(item))}${item.responseNote ? ` — ${escapeHtml(item.responseNote)}` : ''}</div>
      </article>`;
    }).join('') : '<div class="empty">No applicable missing items remain.</div>';
  };

  const renderStatus = () => {
    const metrics = current.completion.bundle.metrics;
    const pendingResponses = sessionResponseIds().length;
    const active = activeItems();
    document.getElementById('readiness').innerHTML = `<div class="metric"><div class="metric-label">Field completion</div><div class="metric-value">${metrics.fieldCompletion.entered}/${metrics.fieldCompletion.applicable}</div></div><div class="metric"><div class="metric-label">Document collection</div><div class="metric-value">${metrics.documentCollection.collected}/${metrics.documentCollection.applicable}</div></div><div class="metric"><div class="metric-label">Intake checklist</div><div class="metric-value">${metrics.intakeChecklistCompletion}%</div></div>`;
    document.getElementById('railStatus').textContent = `${active.length} applicable Intake Completion item${active.length === 1 ? '' : 's'} still open`;
    const state = document.getElementById('submitState');
    state.className = `submit-state ${pendingResponses ? 'ready' : (active.length ? 'error' : 'ready')}`;
    state.textContent = pendingResponses
      ? `${pendingResponses} response${pendingResponses === 1 ? '' : 's'} ready for partial resubmission. No email will be sent.`
      : active.length
        ? 'Add an answer or document, or choose unavailable, not applicable, or need help.'
        : 'Intake Completion responses are collected. Document Review and Attorney Review are still pending.';
    const button = document.getElementById('submitButton');
    button.disabled = pendingResponses === 0;
    button.textContent = active.length ? 'Send partial update to CRM' : 'Send final Intake update to CRM';
  };

  const renderForm = () => {
    const matter = current.matter;
    const debtorFields = matter.debtors.map((debtor, index) => `<div class="subsection"><div class="subsection-title">${index === 0 ? 'Primary debtor' : 'Joint debtor'}</div><div class="field-grid">${input('First name', `matter.debtors.${index}.firstName`)}${input('Middle name', `matter.debtors.${index}.middleName`)}${input('Last name', `matter.debtors.${index}.lastName`)}${input('Other names used', `matter.debtors.${index}.otherNames`, 'text', 'wide')}${input('Date of birth', `matter.debtors.${index}.dateOfBirth`)}${input('Social Security number', `matter.debtors.${index}.socialSecurityNumber`)}${input('Email', `matter.debtors.${index}.email`, 'email')}${input('Phone', `matter.debtors.${index}.phone`)}${input('Street address', `matter.debtors.${index}.address`, 'text', 'wide')}${input('City', `matter.debtors.${index}.city`)}${input('County', `matter.debtors.${index}.county`)}${input('State', `matter.debtors.${index}.state`)}${input('ZIP code', `matter.debtors.${index}.zipCode`)}</div></div>`).join('');
    const incomes = matter.income.map((item, index) => `<tr><td>${cell(`matter.income.${index}.source`, item.source)}</td><td>${cell(`matter.income.${index}.employer`, item.employer)}</td><td>${cell(`matter.income.${index}.frequency`, item.frequency)}</td><td>${cell(`matter.income.${index}.amount`, item.amount, 'number')}</td><td>${cell(`matter.income.${index}.sixMonthTotal`, item.sixMonthTotal, 'number')}</td></tr>`);
    const expenses = matter.expenses.map((item, index) => `<tr><td>${cell(`matter.expenses.${index}.category`, item.category)}</td><td>${cell(`matter.expenses.${index}.monthlyAmount`, item.monthlyAmount, 'number')}</td><td>${cell(`matter.expenses.${index}.notes`, item.notes)}</td></tr>`);
    const assets = matter.assets.map((item, index) => `<tr><td>${cell(`matter.assets.${index}.description`, item.description)}</td><td>${cell(`matter.assets.${index}.category`, item.category)}</td><td>${cell(`matter.assets.${index}.estimatedValue`, item.estimatedValue, 'number')}</td><td>${cell(`matter.assets.${index}.lienAmount`, item.lienAmount, 'number')}</td><td>${cell(`matter.assets.${index}.keepIntent`, item.keepIntent)}</td></tr>`);
    const debts = matter.debts.map((item, index) => `<tr><td>${cell(`matter.debts.${index}.creditor`, item.creditor)}</td><td>${cell(`matter.debts.${index}.type`, item.type)}</td><td>${cell(`matter.debts.${index}.amount`, item.amount, 'number')}</td><td>${cell(`matter.debts.${index}.arrears`, item.arrears, 'number')}</td><td>${cell(`matter.debts.${index}.collateral`, item.collateral)}</td></tr>`);
    const affairs = Object.entries(matter.financialAffairs || {}).map(([key, item]) => `<tr><td>${escapeHtml(key.replace(/-/g, ' '))}</td><td><select aria-label="${escapeHtml(key)} answer" data-path="matter.financialAffairs.${escapeHtml(key)}.answer"><option ${item.answer === 'No' ? 'selected' : ''}>No</option><option ${item.answer === 'Yes' ? 'selected' : ''}>Yes</option><option ${item.answer === 'Unsure' ? 'selected' : ''}>Unsure</option></select></td><td>${escapeHtml((item.entries || []).length)}</td><td>${escapeHtml(Object.values(item.selections || {}).flat().join(', '))}</td></tr>`);
    const sofa = matter.sofaEvents.map((item, index) => `<tr><td>${cell(`matter.sofaEvents.${index}.eventType`, item.eventType)}</td><td>${cell(`matter.sofaEvents.${index}.date`, item.date)}</td><td>${cell(`matter.sofaEvents.${index}.amount`, item.amount, 'number')}</td><td>${cell(`matter.sofaEvents.${index}.description`, item.description)}</td></tr>`);
    const documents = matter.documents.map((item, index) => `<tr data-document-index="${index}" data-document-id="${escapeHtml(item.id)}" tabindex="-1"><td>${escapeHtml(item.name)}</td><td>${escapeHtml(item.category)}</td><td>${escapeHtml(item.status.replace(/_/g, ' '))}</td><td>${escapeHtml(item.fileName || item.notes || 'No file selected')}</td></tr>`);
    const chapter = matter.chapter === '13' ? matter.chapter13 : matter.chapter7;
    const chapterRows = Object.entries(chapter || {}).map(([key, value]) => `<tr><td>${escapeHtml(key.replace(/([A-Z])/g, ' $1'))}</td><td>${cell(`matter.${matter.chapter === '13' ? 'chapter13' : 'chapter7'}.${key}`, value, typeof value === 'number' ? 'number' : 'text')}</td></tr>`);
    document.getElementById('intakeForm').innerHTML = [
      section('identity', 'Identity and contact', `${matter.debtors.length} debtor${matter.debtors.length === 1 ? '' : 's'}`, debtorFields),
      section('case', 'Case basics', 'Canonical Matter', `<div class="field-grid">${input('Matter title', 'matter.title', 'text', 'wide')}${select('Chapter', 'matter.chapter', ['7', '13'])}${input('Filing state', 'matter.filingState')}${input('District', 'matter.district', 'text', 'wide')}${textarea('Client goals', 'matter.clientGoals')}${textarea('Urgent concerns', 'matter.urgentConcerns')}${select('Prior bankruptcy filed', 'matter.priorBankruptcyFiled', ['No', 'Yes', 'Unsure'])}${input('Prior bankruptcy details', 'matter.priorBankruptcyDetails', 'text', 'wide')}</div>`),
      section('household', 'Household', `${matter.household.householdSize} people`, `<div class="field-grid">${select('Marital status', 'matter.household.maritalStatus', ['Single', 'Married', 'Divorced', 'Separated', 'Widowed'])}${input('Household size', 'matter.household.householdSize', 'number')}${select('Spouse filing jointly', 'matter.spouseFilingJointly', ['No', 'Yes', 'Unsure'])}${select('Employed', 'matter.isEmployed', ['No', 'Yes'])}${select('Other household income', 'matter.hasOtherHouseholdIncome', ['No', 'Yes'])}${select('Has dependents', 'matter.hasDependents', ['No', 'Yes'])}</div>`),
      section('income', 'Income and expenses', `${money(bridge.total(matter.income, 'amount'))} income / ${money(bridge.total(matter.expenses, 'monthlyAmount'))} expenses`, `<div class="subsection"><div class="subsection-title">Income</div>${table(['Source', 'Employer', 'Frequency', 'Monthly amount', 'Six-month total'], incomes, 'No income entered.')}</div><div class="subsection"><div class="subsection-title">Monthly expenses</div>${table(['Category', 'Amount', 'Notes'], expenses, 'No expenses entered.')}</div>`),
      section('property', 'Property and debts', `${money(bridge.total(matter.assets, 'estimatedValue'))} assets / ${money(bridge.total(matter.debts, 'amount'))} debt`, `<div class="subsection"><div class="subsection-title">Assets</div>${table(['Description', 'Category', 'Value', 'Lien', 'Intent'], assets, 'No assets entered.')}</div><div class="subsection"><div class="subsection-title">Debts</div>${table(['Creditor', 'Type', 'Balance', 'Arrears', 'Collateral'], debts, 'No debts entered.')}</div>`),
      section('affairs', 'Financial affairs', `${affairs.length} answers`, `<div class="subsection">${table(['Question', 'Answer', 'Entries', 'Selections'], affairs, 'No financial affairs answers entered.')}</div><div class="subsection"><div class="subsection-title">SOFA events</div>${table(['Type', 'Date', 'Amount', 'Description'], sofa, 'No SOFA events entered.')}</div><div class="subsection"><div class="subsection-title">Chapter ${matter.chapter} details</div>${table(['Field', 'Value'], chapterRows, 'No chapter details entered.')}</div>`),
      section('documents', 'Documents', `${current.readiness.documentsReady} of ${current.readiness.documentsRequired} collected`, table(['Document', 'Category', 'Collection status', 'Selected file or note'], documents, 'No applicable documents.')),
    ].join('');
  };

  const goToItem = (itemId, smooth = true) => {
    const item = completionItems().find((candidate) => candidate.id === itemId);
    if (!item) return;
    const path = normalizeCanonicalPath(item);
    let target = null;
    if (item.kind === 'document') {
      const document = findDocument(item);
      target = document ? window.document.querySelector(`[data-document-id="${CSS.escape(document.id)}"]`) : null;
    } else {
      target = window.document.querySelector(`[data-path="${CSS.escape(path)}"]`);
    }
    if (!target) return;
    window.document.querySelectorAll('.target-highlight').forEach((element) => element.classList.remove('target-highlight'));
    target.classList.add('target-highlight');
    target.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block: 'center' });
    target.focus({ preventScroll: true });
    window.setTimeout(() => target.classList.remove('target-highlight'), 2200);
  };

  const render = () => {
    if (!current) {
      document.getElementById('intakeForm').innerHTML = '<div class="empty">No fake Intake packages found.</div>';
      return;
    }
    updateDerivedState();
    document.getElementById('clientHeading').textContent = bridge.matterClientName(current.matter);
    document.getElementById('clientSubtitle').textContent = `Chapter ${current.matter.chapter} · ${current.matter.filingState} · ${current.matter.district} · fake data only`;
    renderMissingList();
    renderStatus();
    renderForm();
    if (!initialFocusApplied) {
      initialFocusApplied = true;
      const focusItem = requestedItemId || (window.matchMedia('(max-width: 600px)').matches ? activeItems()[0]?.id : '');
      if (focusItem) window.setTimeout(() => goToItem(focusItem, false), 80);
    }
  };

  const loadSelected = () => {
    current = packages.length ? readPersisted(packages[selectedIndex]) : null;
    if (current) {
      current.portalSessionResponseIds = current.portalSessionResponseIds || [];
      current.completion.bundle.states.attorneyReview = current.completion.bundle.states.attorneyReview || 'not_started';
      current.completion.bundle.states.documentReview = current.completion.bundle.states.documentReview || 'pending';
    }
  };

  document.getElementById('profileStrip').addEventListener('click', (event) => {
    const button = event.target.closest('[data-profile]');
    if (!button) return;
    selectedIndex = Number(button.dataset.profile);
    initialFocusApplied = true;
    loadSelected();
    const url = new URL(window.location.href);
    url.searchParams.set('packageId', current.packageId);
    url.searchParams.delete('itemId');
    window.history.replaceState({}, '', url);
    renderProfiles();
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  document.getElementById('intakeForm').addEventListener('input', (event) => {
    const path = event.target.dataset.path;
    if (!path) return;
    const rawValue = event.target.value;
    setPath(current, path, event.target.dataset.number === 'true' ? Number(rawValue || 0) : rawValue);
    const item = completionItems().find((candidate) => candidate.kind === 'field' && normalizeCanonicalPath(candidate) === path);
    if (item) setItemResolution(item.id, rawValue.trim() ? 'answered' : 'open', rawValue.trim() ? 'Answer added in the fake debtor portal.' : '');
    else persist();
  });

  document.getElementById('intakeForm').addEventListener('change', (event) => {
    const path = event.target.dataset.path;
    if (!path) return;
    const rawValue = event.target.value;
    setPath(current, path, event.target.dataset.number === 'true' ? Number(rawValue || 0) : rawValue);
    const item = completionItems().find((candidate) => candidate.kind === 'field' && normalizeCanonicalPath(candidate) === path);
    if (item) setItemResolution(item.id, rawValue.trim() ? 'answered' : 'open', rawValue.trim() ? 'Answer added in the fake debtor portal.' : '');
    else persist();
  });

  document.getElementById('missingList').addEventListener('click', (event) => {
    const goButton = event.target.closest('[data-go-item]');
    if (goButton) { goToItem(goButton.dataset.goItem); return; }
    const resolutionButton = event.target.closest('[data-resolution]');
    if (resolutionButton) {
      const label = resolutionButton.dataset.resolution.replace(/_/g, ' ');
      const reasonInput = resolutionButton.closest('[data-missing-item-id]')?.querySelector('[data-response-reason]');
      const reason = String(reasonInput?.value || '').trim();
      if (!reason) {
        reasonInput?.setCustomValidity('Add a short explanation for the pilot reviewer.');
        reasonInput?.reportValidity();
        reasonInput?.focus();
        return;
      }
      reasonInput.setCustomValidity('');
      const item = completionItems().find((candidate) => candidate.id === resolutionButton.dataset.itemId);
      if (item) item.responseReason = reason;
      setItemResolution(resolutionButton.dataset.itemId, resolutionButton.dataset.resolution, `Client response: ${label}. ${reason}`);
    }
  });

  document.getElementById('missingList').addEventListener('change', (event) => {
    const upload = event.target.closest('[data-upload-item]');
    if (!upload || !upload.files?.[0]) return;
    const item = completionItems().find((candidate) => candidate.id === upload.dataset.uploadItem);
    const file = upload.files[0];
    if (!/\.(pdf|png|jpe?g)$/i.test(file.name)) {
      setItemResolution(item.id, 'unsupported_file', `${file.name} is not supported. Choose PDF, PNG, JPG, or JPEG.`);
      return;
    }
    const document = findDocument(item);
    const replacing = Boolean(document?.qualityIssue || document?.fileName);
    if (document) {
      document.fileName = file.name;
      document.status = 'received';
      document.receivedAt = new Date().toISOString();
      document.notes = `${replacing ? 'Replacement' : 'Document'} selected in the fake portal; no production upload occurred.`;
      delete document.qualityIssue;
    }
    setItemResolution(item.id, replacing ? 'replaced' : 'uploaded', `${file.name} selected for simulated CRM collection.`);
    current.completion.bundle.states.documentReview = 'pending';
    current.completion.states.documentReview = 'pending';
    persist();
    renderForm();
    renderStatus();
  });

  document.getElementById('submitButton').addEventListener('click', () => {
    if (!current || sessionResponseIds().length === 0) return;
    const submittedAt = new Date().toISOString();
    const responseCount = sessionResponseIds().length;
    current.submittedAt = submittedAt;
    current.generatedAt = submittedAt;
    current.matter.updatedAt = submittedAt;
    current.matter.status = activeItems().length ? 'client-response-received' : 'intake-complete-pending-review';
    current.completion.revision = Number(current.completion.revision || 1) + 1;
    current.completion.bundle.matterRevision = current.completion.revision;
    current.completion.bundle.generatedAt = submittedAt;
    current.completion.bundle.states.submission = 'resubmitted';
    current.completion.states.submission = 'resubmitted';
    current.completion.suppressionReason = 'client_response';
    current.completion.emailDraft = { ...current.completion.emailDraft, status: 'canceled' };
    current.completion.events = [
      ...(current.completion.events || []),
      { action: 'client_response_received', actor: 'Fake debtor', date: submittedAt, id: `client-response-${current.packageId}-${current.completion.revision}` },
    ];
    updateDerivedState();
    const accepted = bridge.enqueuePackage(window.localStorage, current);
    if (accepted.completion.revision !== current.completion.revision || JSON.stringify(accepted) !== JSON.stringify(current)) {
      current = accepted;
      current.portalSessionResponseIds = [];
      persist();
      render();
      const state = document.getElementById('submitState');
      state.className = 'submit-state error';
      state.textContent = 'A newer or simultaneous fake Intake update was already saved. This page reloaded the accepted version so your response is not silently overwritten.';
      return;
    }
    current.portalSessionResponseIds = [];
    persist();
    renderMissingList();
    renderStatus();
    const state = document.getElementById('submitState');
    state.className = 'submit-state ready';
    state.textContent = `${responseCount} fake response${responseCount === 1 ? '' : 's'} saved to the CRM queue. Pending reminders were suppressed; no email was sent.`;
  });

  window.addEventListener('storage', (event) => {
    if (event.key === bridge.ORGANIZATION_STORAGE_KEY) renderOrganizationBrand();
    if (current && event.key === portalStorageKey(current.packageId) && event.newValue) {
      try {
        const next = JSON.parse(event.newValue);
        if (Number(next?.completion?.revision || 0) >= Number(current.completion.revision || 0)) {
          current = next;
          render();
        }
      } catch { /* A malformed browser-local value is ignored. */ }
    }
    if (current && event.key === bridge.HANDOFF_STORAGE_KEY) {
      const queued = bridge.readQueuedPackages(window.localStorage)
        .find((item) => item.packageId === current.packageId);
      if (Number(queued?.completion?.revision || 0) > Number(current.completion.revision || 0)) {
        current = clone(queued);
        current.portalSessionResponseIds = [];
        persist();
        render();
      }
    }
  });

  renderOrganizationBrand();
  loadSelected();
  renderProfiles();
  render();
})();
