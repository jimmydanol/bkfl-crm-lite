(function attachBKFLPrototypeCase(global) {
  'use strict'

  const SCHEMA_VERSION = 'bkfl.intake-package.v1'
  const FIXTURE_ENGINE_VERSION = 'bkfl.synthetic-fixture-engine.v1'
  const EVALUATION_ID = 'bkfl-50x-2026-07-13'
  const FIRST_NAMES = [
    'Alex', 'Bailey', 'Casey', 'Devon', 'Emery', 'Finley', 'Gray', 'Harper', 'Indigo', 'Jamie',
    'Kai', 'Logan', 'Morgan', 'Nico', 'Oakley', 'Parker', 'Quinn', 'Reese', 'Sage', 'Taylor',
  ]

  const DOCUMENT_RULES = [
    rule('id_license', "Driver's license or photo ID", 'required', false, 'high', () => true, 'Identity is required for the synthetic intake review.', ['personal.identity']),
    rule('ssn_proof', 'Social Security card, W-2, or 1099', 'required', false, 'high', () => true, 'Identity-number evidence is required for the synthetic intake review.', ['personal.ssn']),
    rule('bank_statements', 'Bank statements - last 6 months', 'required', false, 'medium', p => p.bankAccount, 'The debtor reported at least one bank account.', ['assets.bankAccount']),
    rule('unsecured_statements', 'Statements for unsecured debts and collection letters', 'required', false, 'low', () => true, 'The intake includes consumer-debt review.', ['debts.unsecured']),
    rule('tax_return_y1', 'Tax return - last year', 'conditional', true, 'high', () => true, 'Tax-return availability must be reviewed for the synthetic case.', ['financialAffairs.taxReturns']),
    rule('tax_return_y2', 'Tax return - two years ago', 'conditional', true, 'high', () => true, 'Two-year tax history is part of the synthetic attorney review.', ['financialAffairs.taxReturns']),
    rule('counseling_certificate', 'Credit counseling certificate', 'deferred', false, 'high', () => true, 'Counseling status is tracked separately from filing readiness.', ['counseling.status']),
    rule('pay_stubs', 'Pay stubs - last 6 months', 'conditional', false, 'medium', p => p.employed, 'Employment income was reported.', ['income.employment']),
    rule('other_income_proof', 'Proof of other income - last 6 months', 'conditional', false, 'medium', p => p.otherIncome, 'Other income was reported.', ['income.other']),
    rule('zillow_valuation', 'Real-estate valuation', 'conditional', true, 'high', p => p.homeowner, 'Real property was reported and needs valuation review.', ['assets.realEstate']),
    rule('mortgage_statements', 'Mortgage statements', 'conditional', false, 'high', p => p.homeowner, 'The reported real property has a synthetic mortgage.', ['assets.realEstate', 'debts.mortgage']),
    rule('kbb_valuation', 'Vehicle valuation', 'conditional', true, 'medium', p => p.vehicle, 'A vehicle was reported and needs valuation support.', ['assets.vehicle']),
    rule('vehicle_loan_statements', 'Vehicle loan or lease statements', 'conditional', false, 'medium', p => p.vehicle, 'The synthetic vehicle is modeled with a lien.', ['assets.vehicle', 'debts.vehicle']),
    rule('tax_notices', 'Tax notices or balance statements', 'conditional', false, 'high', p => p.taxDebt, 'Tax debt was reported.', ['debts.tax']),
    rule('student_loan_statements', 'Student loan statements', 'conditional', true, 'medium', p => p.studentLoans, 'Student loans were reported.', ['debts.studentLoans']),
    rule('business_debt_statements', 'Business debt statements', 'conditional', false, 'high', p => p.businessDebt, 'Business debt was reported.', ['debts.business']),
    rule('prior_bankruptcy_records', 'Prior bankruptcy discharge or dismissal records', 'conditional', false, 'high', p => p.priorBankruptcy, 'A prior bankruptcy was reported.', ['personal.priorBankruptcy']),
    rule('sp_id_license', "Spouse's photo ID", 'conditional', false, 'high', p => p.jointHousehold, 'The synthetic case is a joint filing.', ['personal.jointFiling']),
    rule('sp_income_proof', "Spouse's income proof", 'conditional', false, 'medium', p => p.jointHousehold, 'A joint household requires spouse income review.', ['personal.jointFiling', 'income.spouse']),
  ]

  function rule(id, name, requirementClass, waivable, riskLevel, applies, whyRequired, sourcePaths) {
    return {
      id,
      name,
      requirementClass,
      waivable,
      riskLevel,
      requiresAttorneyReview: riskLevel === 'high' && waivable,
      applies,
      whyRequired,
      sourcePaths,
    }
  }

  function pad(value, width) {
    return String(value).padStart(width || 2, '0')
  }

  function stableId(prefix, scenarioId, suffix) {
    return [prefix, scenarioId, suffix].filter(Boolean).join(':')
  }

  function source(path, label, section) {
    return { path, label, section, syntheticOnly: true }
  }

  function generateScenarios(count) {
    const total = count == null ? 50 : count
    return Array.from({ length: total }, (_, index) => {
      const number = index + 1
      const firstName = FIRST_NAMES[index % FIRST_NAMES.length]
      const lastName = `Synthetic${pad(number, 3)}`
      const completionTarget = Number((0.76 + ((number * 7) % 25) / 100).toFixed(2))
      return {
        scenarioId: `${EVALUATION_ID}-${pad(number, 3)}`,
        number,
        firstName,
        lastName,
        fullName: `${firstName} ${lastName}`,
        email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.test`,
        phone: `(303) 555-${pad(1000 + number, 4)}`,
        password: `SyntheticOnly!${pad(number, 2)}`,
        completionTarget,
        tier2Uploads: completionTarget >= 0.96 ? 3 : completionTarget >= 0.86 ? 2 : 1,
        profile: {
          employed: number % 5 !== 0,
          otherIncome: number % 4 === 0,
          dependents: number % 3 === 0,
          priorBankruptcy: number % 11 === 0,
          homeowner: number % 6 === 0,
          vehicle: number % 3 !== 1,
          cashOnHand: number % 2 === 0,
          bankAccount: number % 7 !== 0,
          taxDebt: number % 7 === 0,
          studentLoans: number % 5 === 0,
          businessDebt: number % 9 === 0,
          jointHousehold: number % 8 === 0,
          urgentDeadline: number % 13 === 0,
          unreadableDocument: number % 10 === 0,
        },
        syntheticOnly: true,
      }
    })
  }

  function scenarioForLead(lead) {
    const scenarios = generateScenarios(50)
    const exact = scenarios.find(item => item.email === lead.email)
    const fallback = scenarios[Math.abs(Number(lead.id) || 1) % scenarios.length]
    const base = exact || fallback
    return {
      ...base,
      firstName: lead.firstName || base.firstName,
      lastName: lead.lastName || base.lastName,
      fullName: `${lead.firstName || base.firstName} ${lead.lastName || base.lastName}`,
      email: lead.email || base.email,
      phone: lead.phone || base.phone,
      scenarioId: exact ? base.scenarioId : `${base.scenarioId}-lead-${lead.id}`,
    }
  }

  function buildIntakePackage(scenario) {
    const p = scenario.profile
    const n = scenario.number
    const submittedAt = `2026-07-${pad((n % 12) + 1, 2)}T15:${pad((n * 7) % 60, 2)}:00.000Z`
    const missingAnswers = []
    if (scenario.completionTarget < 0.82) {
      missingAnswers.push(reviewItem('missing', scenario, 'financialAffairs.transferDetails', 'Transfer details are incomplete.', 'Financial Affairs'))
    }
    if (n % 12 === 0) {
      missingAnswers.push(reviewItem('missing', scenario, 'income.frequency', 'Income frequency needs confirmation.', 'Income'))
    }
    const contradictions = n % 14 === 0
      ? [reviewItem('conflict', scenario, 'assets.vehicleLien', 'Vehicle was marked paid off while a lien balance was also entered.', 'Assets')]
      : []
    const urgentDeadlines = p.urgentDeadline
      ? [{ id: stableId('deadline', scenario.scenarioId, 'garnishment'), label: 'Synthetic garnishment review deadline', date: '2026-07-20', source: source('financialAffairs.garnishment', 'Garnishment answer', 'Financial Affairs') }]
      : []
    const reviewFlags = buildReviewFlags(scenario)
    const packageBase = {
      schemaVersion: SCHEMA_VERSION,
      fixtureEngineVersion: FIXTURE_ENGINE_VERSION,
      submissionId: stableId('submission', scenario.scenarioId),
      scenarioId: scenario.scenarioId,
      scenarioNumber: scenario.number,
      syntheticOnly: true,
      submittedAt,
      submitted: new Date(submittedAt).toLocaleString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit', timeZone: 'UTC' }),
      completionPercentage: Math.round(scenario.completionTarget * 100),
      court: 'Synthetic Colorado bankruptcy venue - attorney confirmation required',
      goals: p.homeowner ? 'Evaluate options while protecting the synthetic residence.' : 'Evaluate relief from synthetic consumer debt.',
      concerns: urgentDeadlines.length ? 'A synthetic deadline needs prompt attorney review.' : 'No deadline represented as legally confirmed.',
      household: {
        maritalStatus: p.jointHousehold ? 'Married' : 'Single',
        jointFiling: p.jointHousehold ? 'Yes' : 'No',
        dependents: p.dependents ? 2 : 0,
        debtors: [
          { name: scenario.fullName, dob: `${pad((n % 12) + 1, 2)}/${pad((n % 27) + 1, 2)}/${1972 + n % 25}`, ssn: `***-**-${pad(1000 + n, 4)}`, email: scenario.email, phone: scenario.phone, address: `${1000 + n} Test Loop, Denver, CO 80202` },
          ...(p.jointHousehold ? [{ name: `Jordan Joint${pad(n, 3)}`, dob: '02/14/1985', ssn: `***-**-${pad(3000 + n, 4)}`, email: `joint.${scenario.email}`, phone: `(303) 555-${pad(3000 + n, 4)}`, address: `${1000 + n} Test Loop, Denver, CO 80202` }] : []),
        ],
      },
      income: [
        ...(p.employed ? [{ source: 'Employment', employer: `Synthetic Employer ${1 + n % 5}`, frequency: 'Biweekly', monthly: 3200 + n * 37, sixMonth: (3200 + n * 37) * 6 }] : []),
        ...(p.otherIncome ? [{ source: 'Other income', employer: 'Synthetic side work', frequency: 'Monthly', monthly: 400 + n * 9, sixMonth: (400 + n * 9) * 6 }] : []),
        ...(p.jointHousehold ? [{ source: 'Spouse employment', employer: 'Synthetic Joint Employer', frequency: 'Monthly', monthly: 2800 + n * 11, sixMonth: (2800 + n * 11) * 6 }] : []),
      ],
      expenses: [
        { name: p.homeowner ? 'Mortgage' : 'Rent', monthly: p.homeowner ? 1850 + n * 5 : 1450 + n * 3, notes: 'Synthetic fixture amount.' },
        { name: 'Utilities and household', monthly: 520 + n, notes: 'Synthetic fixture amount.' },
      ],
      assets: [
        ...(p.homeowner ? [{ name: `${1000 + n} Test Loop`, category: 'Real estate', value: 310000 + n * 1200, lien: 245000 + n * 900, intent: 'Attorney review required' }] : []),
        ...(p.vehicle ? [{ name: `${2014 + n % 10} Synthetic Vehicle`, category: 'Vehicle', value: 9000 + n * 170, lien: 4500 + n * 90, intent: 'Retain - not a legal conclusion' }] : []),
        ...(p.bankAccount ? [{ name: 'Synthetic checking account', category: 'Bank account', value: 800 + n * 31, lien: 0, intent: 'Disclose' }] : []),
      ],
      debts: [
        { creditor: 'Synthetic Card Issuer', type: 'unsecured', balance: 12000 + n * 211, arrears: 0, collateral: '' },
        ...(p.homeowner ? [{ creditor: 'Synthetic Mortgage Servicer', type: 'secured', balance: 245000 + n * 900, arrears: 1300 + n * 20, collateral: 'Synthetic residence' }] : []),
        ...(p.vehicle ? [{ creditor: 'Synthetic Auto Finance', type: 'secured', balance: 4500 + n * 90, arrears: n % 4 === 0 ? 420 : 0, collateral: 'Synthetic vehicle' }] : []),
        ...(p.taxDebt ? [{ creditor: 'Synthetic Tax Authority', type: 'priority', balance: 2600 + n * 43, arrears: 0, collateral: '' }] : []),
        ...(p.studentLoans ? [{ creditor: 'Synthetic Student Loan Servicer', type: 'unsecured', balance: 17000 + n * 101, arrears: 0, collateral: '' }] : []),
        ...(p.businessDebt ? [{ creditor: 'Synthetic Business Vendor', type: 'unsecured', balance: 7200 + n * 87, arrears: 0, collateral: '' }] : []),
      ],
      counseling: n % 6 === 0 ? 'Not taken yet - unresolved' : 'Synthetic certificate represented in fixture',
      sofa: { answers: {}, events: p.priorBankruptcy ? [{ event: 'Prior bankruptcy', date: '2021', amount: 0, desc: 'Synthetic prior-case disclosure for attorney review.' }] : [] },
      missingAnswers,
      contradictions,
      urgentDeadlines,
      reviewFlags,
      flags: reviewFlags.map(flag => ({ severity: flag.severity, flag: flag.label, section: flag.source.section, detail: flag.detail })),
      sectionCompleteness: {
        Personal: Math.max(0, Math.round(scenario.completionTarget * 100)),
        Income: Math.max(0, Math.round((scenario.completionTarget - (p.employed ? 0 : 0.02)) * 100)),
        Assets: Math.max(0, Math.round((scenario.completionTarget - (p.homeowner ? 0.03 : 0)) * 100)),
        Debts: Math.max(0, Math.round(scenario.completionTarget * 100)),
        Expenses: Math.max(0, Math.round(scenario.completionTarget * 100)),
        'Financial Affairs': Math.max(0, Math.round((scenario.completionTarget - (missingAnswers.length ? 0.08 : 0)) * 100)),
        Documents: Math.max(0, Math.round((0.62 + scenario.tier2Uploads * 0.11) * 100)),
      },
      sourceReferences: buildSourceReferences(scenario),
      reviewState: {
        resolvedMissingAnswerIds: [],
        resolvedContradictionIds: [],
        staffReviewComplete: false,
        attorneyReviewComplete: false,
      },
    }
    packageBase.documentRequirements = deriveDocumentRequirements(packageBase, scenario)
    packageBase.triage = buildTriage(packageBase)
    return packageBase
  }

  function reviewItem(type, scenario, path, label, section) {
    return { id: stableId(type, scenario.scenarioId, path), label, source: source(path, label, section) }
  }

  function buildSourceReferences(scenario) {
    return {
      identity: source('personal.identity', 'Debtor identity', 'Personal'),
      employment: source('income.employment', scenario.profile.employed ? 'Employment reported' : 'No employment reported', 'Income'),
      realEstate: source('assets.realEstate', scenario.profile.homeowner ? 'Real estate reported' : 'No real estate reported', 'Assets'),
      vehicle: source('assets.vehicle', scenario.profile.vehicle ? 'Vehicle reported' : 'No vehicle reported', 'Assets'),
      taxDebt: source('debts.tax', scenario.profile.taxDebt ? 'Tax debt reported' : 'No tax debt reported', 'Debts'),
      priorBankruptcy: source('personal.priorBankruptcy', scenario.profile.priorBankruptcy ? 'Prior bankruptcy reported' : 'No prior bankruptcy reported', 'Personal'),
    }
  }

  function buildReviewFlags(scenario) {
    const p = scenario.profile
    const flags = []
    if (p.homeowner) flags.push(flag(scenario, 'exemption', 'Exemption review candidate', 'MEDIUM', 'Property facts require attorney exemption review.', 'assets.realEstate', 'Assets'))
    if (p.taxDebt) flags.push(flag(scenario, 'tax', 'Priority debt review candidate', 'HIGH', 'Tax debt was reported; priority treatment is not determined by this prototype.', 'debts.tax', 'Debts'))
    if (p.priorBankruptcy) flags.push(flag(scenario, 'prior-bk', 'Prior bankruptcy review candidate', 'HIGH', 'A prior bankruptcy was reported and needs attorney review.', 'personal.priorBankruptcy', 'Personal'))
    if (p.businessDebt) flags.push(flag(scenario, 'business', 'Business-debt review candidate', 'MEDIUM', 'Business debt was reported.', 'debts.business', 'Debts'))
    if (p.urgentDeadline) flags.push(flag(scenario, 'deadline', 'Deadline review candidate', 'HIGH', 'A synthetic deadline was reported; verify before action.', 'financialAffairs.garnishment', 'Financial Affairs'))
    if (scenario.number % 9 === 0) flags.push(flag(scenario, 'means', 'Means-test review candidate', 'INFO', 'Income pattern should be reviewed; no eligibility conclusion is made.', 'income.employment', 'Income'))
    return flags
  }

  function flag(scenario, suffix, label, severity, detail, path, section) {
    return { id: stableId('flag', scenario.scenarioId, suffix), label, severity, detail, status: 'open', source: source(path, label, section), uncertainty: 'Candidate only - attorney confirmation required.' }
  }

  function deriveDocumentRequirements(pkg, scenario) {
    const applicable = DOCUMENT_RULES.filter(item => item.applies(scenario.profile))
    const availableCount = Math.max(2, Math.ceil(applicable.length * scenario.completionTarget))
    return applicable.map((item, index) => {
      const uploaded = index < availableCount
      const forcedFlag = (item.id === 'bank_statements' && scenario.profile.unreadableDocument) || ((scenario.number + index) % 11 === 0)
      const reasonCode = item.id === 'counseling_certificate' && scenario.number % 6 === 0
        ? 'not_taken_yet'
        : item.id.indexOf('tax_return') >= 0 && scenario.number % 7 === 0
          ? 'didnt_file'
          : 'will_send_later'
      const status = uploaded ? (forcedFlag ? 'ai_flagged' : 'ai_accepted') : (item.waivable || item.requirementClass === 'deferred' ? 'reason_given' : 'open')
      const sourceRefs = item.sourcePaths.map(path => source(path, item.whyRequired, sourceSection(path)))
      return {
        id: stableId('document', scenario.scenarioId, item.id),
        requirementId: item.id,
        docId: item.id,
        name: item.name,
        requirementClass: item.requirementClass,
        waivable: item.waivable,
        riskLevel: item.riskLevel,
        requiresAttorneyReview: item.requiresAttorneyReview,
        whyRequired: item.whyRequired,
        sourceRefs,
        status,
        reason: uploaded ? undefined : reasonCode,
        fileName: uploaded ? `${scenario.scenarioId}-${item.id}.pdf` : undefined,
        fileMetadata: uploaded ? { syntheticOnly: true, bytesStored: false, mimeType: 'application/pdf', mockChecksum: stableId('fixture', scenario.scenarioId, item.id), sizeLabel: `${90 + ((scenario.number + index) * 17) % 900} KB simulated` } : undefined,
        ai: uploaded ? { provider: 'synthetic-rule-engine', model: 'fixture-only-no-model', promptVersion: FIXTURE_ENGINE_VERSION, confidence: forcedFlag ? 0.58 : 0.91, uncertainty: forcedFlag ? 'Synthetic fixture marks this item for human review.' : 'Synthetic fixture only; no document bytes were analyzed.', sourceRefs } : undefined,
        aiNote: uploaded ? (forcedFlag ? 'Synthetic fixture flag - human review required' : 'Synthetic fixture recommendation - no file bytes analyzed') : undefined,
        date: uploaded ? pkg.submittedAt.slice(0, 10) : undefined,
        decision: null,
      }
    })
  }

  function sourceSection(path) {
    if (path.startsWith('personal')) return 'Personal'
    if (path.startsWith('income')) return 'Income'
    if (path.startsWith('assets')) return 'Assets'
    if (path.startsWith('debts')) return 'Debts'
    if (path.startsWith('counseling')) return 'Counseling'
    return 'Financial Affairs'
  }

  function buildTriage(pkg) {
    const complexityLabels = []
    if ((pkg.household.debtors || []).length > 1) complexityLabels.push('Joint filing')
    if (pkg.assets.some(item => item.category === 'Real estate')) complexityLabels.push('Real estate')
    if (pkg.debts.some(item => item.type === 'priority')) complexityLabels.push('Priority debt')
    if (pkg.reviewFlags.some(item => item.id.includes('prior-bk'))) complexityLabels.push('Prior bankruptcy')
    if (pkg.reviewFlags.some(item => item.id.includes('business'))) complexityLabels.push('Business debt')
    const documentBlockers = pkg.documentRequirements.filter(item => !['approved', 'excused', 'deferred'].includes(item.status)).length
    const highFlags = pkg.reviewFlags.filter(item => item.severity === 'HIGH').length
    const nextAction = pkg.missingAnswers.length
      ? 'Resolve missing Intake answers'
      : pkg.contradictions.length
        ? 'Resolve contradictory Intake answers'
        : documentBlockers
          ? 'Review and chase case-specific documents'
          : highFlags
            ? 'Complete attorney review of high-priority candidates'
            : 'Complete staff review'
    return {
      completionPercentage: pkg.completionPercentage,
      complexity: complexityLabels.length ? complexityLabels : ['Consumer debt'],
      missingAnswerCount: pkg.missingAnswers.length,
      contradictionCount: pkg.contradictions.length,
      urgentDeadlineCount: pkg.urgentDeadlines.length,
      highFlagCount: highFlags,
      documentBlockerCount: documentBlockers,
      nextAction,
      responsibleRole: pkg.urgentDeadlines.length || highFlags ? 'Attorney' : 'Staff',
      sourceRefs: Object.values(pkg.sourceReferences || {}),
      uncertainty: 'Synthetic triage summary only; staff and attorney review remain required.',
    }
  }

  function checklistFromPackage(pkg, previousChecklist) {
    const priorByRequirement = new Map((previousChecklist || []).map(item => [item.requirementId || item.docId, item]))
    return pkg.documentRequirements.map(item => {
      const prior = priorByRequirement.get(item.requirementId)
      const preserve = prior && (['approved', 'excused', 'exception_pending_attorney'].includes(prior.status) || !!prior.decision)
      return preserve ? { ...item, ...prior, id: item.id, requirementId: item.requirementId, sourceRefs: item.sourceRefs, whyRequired: item.whyRequired } : { ...item }
    })
  }

  function importPackageToLead(lead, pkg) {
    const checklist = checklistFromPackage(pkg, lead.docChecklist)
    return {
      ...lead,
      leadStage: 'Intake Submitted',
      intakeSubmittedDate: pkg.submittedAt.slice(0, 10),
      submissionId: pkg.submissionId,
      schemaVersion: pkg.schemaVersion,
      syntheticOnly: true,
      intakePackage: pkg,
      docChecklist: checklist,
      caseReview: {
        ...pkg.reviewState,
        ...(lead.caseReview || {}),
        importedSubmissionId: pkg.submissionId,
        importedAt: pkg.submittedAt,
      },
      triage: buildTriage({ ...pkg, documentRequirements: checklist }),
    }
  }

  function upsertLeadBySubmission(leads, pkg) {
    const index = leads.findIndex(item => item.submissionId === pkg.submissionId)
    if (index >= 0) {
      const next = leads.slice()
      next[index] = importPackageToLead(next[index], pkg)
      return next
    }
    const debtor = pkg.household.debtors[0]
    const names = debtor.name.split(' ')
    const created = importPackageToLead({
      id: stableId('lead', pkg.scenarioId),
      firstName: names[0],
      lastName: names.slice(1).join(' '),
      email: debtor.email,
      phone: debtor.phone,
      bankruptcyType: 'Attorney review required',
      leadStage: 'Intake Submitted',
      createdDate: pkg.submittedAt.slice(0, 10),
      leadNotes: `SYNTHETIC PROTOTYPE - ${pkg.scenarioId}`,
      contacts: [{ id: 1, name: debtor.name, role: 'Lead', email: debtor.email, phone: debtor.phone }],
      communications: [], notes: [], documents: [], tasks: [], timeline: [], customFields: {},
    }, pkg)
    return [...leads, created]
  }

  function evaluateReadiness(lead) {
    const pkg = lead && lead.intakePackage
    const checklist = (lead && lead.docChecklist) || []
    if (!pkg || pkg.schemaVersion !== SCHEMA_VERSION) {
      return readinessResult(false, [{ key: 'contract', label: 'Versioned Intake Package', passed: false, detail: 'Legacy or missing Intake Package contract.' }])
    }
    const review = { ...pkg.reviewState, ...((lead && lead.caseReview) || {}) }
    const resolvedMissing = new Set(review.resolvedMissingAnswerIds || [])
    const resolvedConflicts = new Set(review.resolvedContradictionIds || [])
    const unresolvedRequiredAnswers = (pkg.missingAnswers || []).filter(item => !resolvedMissing.has(item.id))
    const unresolvedContradictions = (pkg.contradictions || []).filter(item => !resolvedConflicts.has(item.id))
    const unresolvedDocuments = checklist.filter(item => !isDocumentResolved(item))
    const flaggedDocuments = checklist.filter(item => item.status === 'ai_flagged')
    const pendingExceptions = checklist.filter(item => item.status === 'exception_pending_attorney')
    const attorneyItems = checklist.filter(item => item.requiresAttorneyReview && !['approved', 'excused'].includes(item.status))
    const gates = [
      gate('answers', 'Required Intake answers', unresolvedRequiredAnswers.length === 0, unresolvedRequiredAnswers.length ? `${unresolvedRequiredAnswers.length} unresolved` : 'Complete'),
      gate('contradictions', 'Contradictions', unresolvedContradictions.length === 0, unresolvedContradictions.length ? `${unresolvedContradictions.length} unresolved` : 'Resolved'),
      gate('documents', 'Applicable documents', unresolvedDocuments.length === 0, unresolvedDocuments.length ? `${unresolvedDocuments.length} unresolved` : 'Resolved under allowed rules'),
      gate('ai-flags', 'AI-flagged documents', flaggedDocuments.length === 0, flaggedDocuments.length ? `${flaggedDocuments.length} needs human disposition` : 'Dispositioned'),
      gate('exceptions', 'High-risk exceptions', pendingExceptions.length === 0, pendingExceptions.length ? `${pendingExceptions.length} awaiting attorney approval` : 'Resolved'),
      gate('staff', 'Staff review', !!review.staffReviewComplete, review.staffReviewComplete ? 'Complete' : 'Pending'),
      gate('attorney', 'Attorney review items', !!review.attorneyReviewComplete && attorneyItems.length === 0, review.attorneyReviewComplete && attorneyItems.length === 0 ? 'Complete' : `${attorneyItems.length} document item(s); review ${review.attorneyReviewComplete ? 'marked complete' : 'pending'}`),
    ]
    return readinessResult(gates.every(item => item.passed), gates)
  }

  function gate(key, label, passed, detail) {
    return { key, label, passed, detail }
  }

  function readinessResult(ready, gates) {
    return { ready, gates, blockerCount: gates.filter(item => !item.passed).length, blockers: gates.filter(item => !item.passed).map(item => item.label) }
  }

  function isDocumentResolved(item) {
    if (item.status === 'approved') return true
    if (item.status === 'excused') return !!item.waivable && !!(item.decision && item.decision.reason)
    if (item.status === 'deferred') return item.requirementClass === 'deferred' && !!(item.decision && item.decision.reason)
    return false
  }

  function applyDocumentDecision(lead, requirementId, action, options) {
    const detail = options || {}
    const checklist = (lead.docChecklist || []).map(item => {
      if ((item.requirementId || item.docId) !== requirementId) return item
      const decisionBase = { action, reason: detail.reason || '', reviewer: detail.reviewer || 'Synthetic reviewer', role: detail.role || 'Staff', decidedAt: detail.decidedAt || '2026-07-13T18:00:00.000Z' }
      if (action === 'excuse') {
        if (!item.waivable) throw new Error(`${requirementId} is non-waivable in the prototype contract.`)
        if (!detail.reason) throw new Error('Excuse requires a reason.')
        if (item.requiresAttorneyReview && detail.role !== 'Attorney') return { ...item, status: 'exception_pending_attorney', decision: decisionBase }
        return { ...item, status: 'excused', decision: decisionBase, reason: detail.reason, excusedDate: decisionBase.decidedAt.slice(0, 10) }
      }
      if (action === 'approve_exception') {
        if (item.status !== 'exception_pending_attorney') throw new Error('Only a pending exception can receive attorney approval.')
        if (detail.role !== 'Attorney') throw new Error('Attorney role is required to approve a high-risk exception.')
        if (!detail.reason && !(item.decision && item.decision.reason)) throw new Error('Exception approval requires a reason.')
        return { ...item, status: 'excused', decision: { ...decisionBase, reason: detail.reason || item.decision.reason }, reason: detail.reason || item.decision.reason, excusedDate: decisionBase.decidedAt.slice(0, 10) }
      }
      if (action === 'approve_anyway') {
        if (item.status !== 'ai_flagged') throw new Error('Approve Anyway is only available for AI-flagged items.')
        if (!detail.reason) throw new Error('Approve Anyway requires a rationale.')
        return { ...item, status: 'approved', decision: decisionBase, approvedDate: decisionBase.decidedAt.slice(0, 10) }
      }
      if (action === 'approve') return { ...item, status: 'approved', decision: decisionBase, approvedDate: decisionBase.decidedAt.slice(0, 10) }
      if (action === 'reject') {
        if (!detail.reason) throw new Error('Reject requires a debtor-facing reason.')
        return { ...item, status: 'open', reason: 'rejected', note: detail.reason, rejectedFile: item.fileName, fileName: undefined, decision: decisionBase }
      }
      if (action === 'upload') {
        return { ...item, status: 'ai_accepted', reason: undefined, fileName: detail.fileName || `${requirementId}-synthetic.pdf`, fileMetadata: { syntheticOnly: true, bytesStored: false, mimeType: 'application/pdf', mockChecksum: stableId('manual-fixture', lead.submissionId, requirementId) }, ai: { provider: 'synthetic-rule-engine', model: 'fixture-only-no-model', confidence: 0.9, uncertainty: 'No file bytes were analyzed.', sourceRefs: item.sourceRefs }, decision: null }
      }
      throw new Error(`Unsupported document action: ${action}`)
    })
    return { ...lead, docChecklist: checklist, leadStage: 'Intake Submitted', prepReadyDate: undefined }
  }

  function bulkApprovableDocuments(checklist) {
    return (checklist || []).filter(item => item.status === 'ai_accepted' && item.riskLevel === 'low' && !item.requiresAttorneyReview)
  }

  function resolveForAcceptance(lead) {
    let next = { ...lead, caseReview: { ...(lead.caseReview || {}), resolvedMissingAnswerIds: (lead.intakePackage.missingAnswers || []).map(item => item.id), resolvedContradictionIds: (lead.intakePackage.contradictions || []).map(item => item.id) } }
    for (const item of next.docChecklist || []) {
      const id = item.requirementId || item.docId
      if (item.status === 'ai_accepted') next = applyDocumentDecision(next, id, 'approve', { reviewer: 'Synthetic Staff', role: 'Staff', reason: 'Fixture acceptance review.' })
      else if (item.status === 'ai_flagged') next = applyDocumentDecision(next, id, 'approve_anyway', { reviewer: 'Synthetic Attorney', role: 'Attorney', reason: 'Synthetic rationale after fixture review.' })
      else if (item.waivable) {
        next = applyDocumentDecision(next, id, 'excuse', { reviewer: 'Synthetic Staff', role: 'Staff', reason: 'Synthetic case-specific exception reason.' })
        const pending = next.docChecklist.find(doc => (doc.requirementId || doc.docId) === id)
        if (pending.status === 'exception_pending_attorney') next = applyDocumentDecision(next, id, 'approve_exception', { reviewer: 'Synthetic Attorney', role: 'Attorney', reason: pending.decision.reason })
      } else {
        next = applyDocumentDecision(next, id, 'upload', { fileName: `${id}-synthetic.pdf` })
        next = applyDocumentDecision(next, id, 'approve', { reviewer: 'Synthetic Staff', role: 'Staff', reason: 'Synthetic uploaded fixture approved.' })
      }
    }
    next = { ...next, caseReview: { ...next.caseReview, staffReviewComplete: true, attorneyReviewComplete: true } }
    const readiness = evaluateReadiness(next)
    return { ...next, leadStage: readiness.ready ? 'Ready for Petition Prep' : 'Intake Submitted', prepReadyDate: readiness.ready ? '2026-07-13' : undefined, readiness }
  }

  global.BKFLPrototypeCase = Object.freeze({
    SCHEMA_VERSION,
    FIXTURE_ENGINE_VERSION,
    EVALUATION_ID,
    DOCUMENT_RULES,
    generateScenarios,
    scenarioForLead,
    buildIntakePackage,
    deriveDocumentRequirements,
    buildTriage,
    checklistFromPackage,
    importPackageToLead,
    upsertLeadBySubmission,
    evaluateReadiness,
    applyDocumentDecision,
    bulkApprovableDocuments,
    resolveForAcceptance,
    isDocumentResolved,
  })
})(typeof window !== 'undefined' ? window : globalThis)
