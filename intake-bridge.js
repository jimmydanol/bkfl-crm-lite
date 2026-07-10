(function attachIntakeBridge(root, factory) {
  const api = factory()
  if (typeof module === 'object' && module.exports) module.exports = api
  root.BKFLIntakeBridge = api
})(typeof globalThis !== 'undefined' ? globalThis : this, function createIntakeBridge() {
  'use strict'

  const HANDOFF_STORAGE_KEY = 'bkfl_intake_handoffs_v1'
  const ORGANIZATION_EVENT = 'bkfl:organization-change'
  const ORGANIZATION_STORAGE_KEY = 'bkfl_lite_org_v1'
  const PACKAGE_SCHEMA_VERSION = 1
  const DEFAULT_ORGANIZATION = Object.freeze({
    city: 'Boulder',
    country: 'United States',
    logo: null,
    name: 'McCune Legal',
    phone: '(303) 759-0728',
    state: 'CO',
    street: '2101 Pearl St.',
    website: '',
    zip: '80302',
  })

  const clean = (value) => (typeof value === 'string' ? value.trim() : '')
  const asArray = (value) => (Array.isArray(value) ? value : [])
  const dateOnly = (value) => clean(value).slice(0, 10)
  const numberValue = (value) => {
    const parsed = Number(value)
    return Number.isFinite(parsed) ? parsed : 0
  }

  const normalizeOrganization = (candidate) => {
    const source = candidate && typeof candidate === 'object' ? candidate : {}
    return {
      city: clean(source.city) || DEFAULT_ORGANIZATION.city,
      country: clean(source.country) || DEFAULT_ORGANIZATION.country,
      logo: typeof source.logo === 'string' && source.logo ? source.logo : null,
      name: clean(source.name) || DEFAULT_ORGANIZATION.name,
      phone: clean(source.phone) || DEFAULT_ORGANIZATION.phone,
      state: clean(source.state) || DEFAULT_ORGANIZATION.state,
      street: clean(source.street) || DEFAULT_ORGANIZATION.street,
      website: clean(source.website),
      zip: clean(source.zip) || DEFAULT_ORGANIZATION.zip,
    }
  }

  const readOrganization = (storage) => {
    try {
      return normalizeOrganization(
        JSON.parse(storage?.getItem(ORGANIZATION_STORAGE_KEY) || 'null'),
      )
    } catch {
      return normalizeOrganization()
    }
  }

  const writeOrganization = (storage, candidate) => {
    const organization = normalizeOrganization(candidate)
    storage.setItem(ORGANIZATION_STORAGE_KEY, JSON.stringify(organization))
    return organization
  }

  const debtorName = (debtor) =>
    [debtor?.firstName, debtor?.middleName, debtor?.lastName]
      .map(clean)
      .filter(Boolean)
      .join(' ')

  const matterClientName = (matter) =>
    asArray(matter?.debtors).map(debtorName).filter(Boolean).join(' & ') ||
    clean(matter?.title) ||
    'Unnamed intake'

  const formatAddress = (debtor) =>
    [debtor?.address, debtor?.city, debtor?.state, debtor?.zipCode]
      .map(clean)
      .filter(Boolean)
      .join(', ')

  const total = (items, key) =>
    asArray(items).reduce((sum, item) => sum + numberValue(item?.[key]), 0)

  const validatePackage = (candidate) => {
    const errors = []
    const matter = candidate?.matter

    if (!candidate || typeof candidate !== 'object') errors.push('Package is missing.')
    if (candidate?.schemaVersion !== PACKAGE_SCHEMA_VERSION) errors.push('Unsupported package schema.')
    if (candidate?.demo !== true) errors.push('Only fake demo packages are accepted on this branch.')
    if (!clean(candidate?.packageId)) errors.push('Package ID is required.')
    if (clean(candidate?.source?.system) !== 'BK FastLane Intake') errors.push('Unexpected package source.')
    if (!matter || typeof matter !== 'object') errors.push('Canonical Matter payload is required.')
    if (!clean(matter?.id)) errors.push('Matter ID is required.')
    if (matter?.status !== 'ready-for-attorney') errors.push('Matter is not ready for attorney review.')
    if (!['7', '13'].includes(String(matter?.chapter))) errors.push('Bankruptcy chapter is invalid.')
    if (!asArray(matter?.debtors).length || !debtorName(matter?.debtors?.[0])) {
      errors.push('Primary debtor identity is incomplete.')
    }
    if (!clean(candidate?.submittedAt)) errors.push('Submission timestamp is required.')

    const readiness = candidate?.readiness || {}
    if (readiness.fieldsFilled !== readiness.fieldsRequired) errors.push('Required field coverage is incomplete.')
    if (readiness.documentsReady !== readiness.documentsRequired) errors.push('Required documents are incomplete.')

    return { errors, valid: errors.length === 0 }
  }

  const normalizePackage = (candidate) => {
    const result = validatePackage(candidate)
    if (!result.valid) throw new Error(result.errors.join(' '))
    return JSON.parse(JSON.stringify(candidate))
  }

  const checklistStatus = (status) => {
    if (status === 'reviewed') return 'approved'
    if (status === 'received') return 'ai_accepted'
    return 'open'
  }

  const packageToLead = (candidate) => {
    const intakePackage = normalizePackage(candidate)
    const matter = intakePackage.matter
    const debtors = asArray(matter.debtors)
    const primary = debtors[0]
    const submittedDate = dateOnly(intakePackage.submittedAt)
    const stableId = `intake-${intakePackage.packageId}`
    const clientName = matterClientName(matter)
    const nextDay = new Date(`${submittedDate}T12:00:00Z`)
    nextDay.setUTCDate(nextDay.getUTCDate() + 1)

    return {
      bankruptcyType: `Chapter ${matter.chapter}`,
      calendarEvents: [],
      clientFullName: clientName,
      communications: [],
      contacts: debtors.map((debtor, index) => ({
        address: formatAddress(debtor),
        email: clean(debtor.email),
        firstName: clean(debtor.firstName),
        id: index + 1,
        lastName: clean(debtor.lastName),
        middleName: clean(debtor.middleName),
        name: debtorName(debtor),
        phone: clean(debtor.phone),
        role: index === 0 ? 'Lead' : 'Lead (Spouse)',
      })),
      createdDate: dateOnly(matter.createdAt) || submittedDate,
      customFields: {
        intakePackageId: intakePackage.packageId,
        intakeReadiness: 'Ready for attorney',
        intakeSubmittedDate: submittedDate,
      },
      docChecklist: asArray(matter.documents).map((document, index) => ({
        aiNote: clean(document.notes),
        date: dateOnly(document.receivedAt) || submittedDate,
        docId: clean(document.id) || `intake-document-${index + 1}`,
        fileName: `${clean(document.name) || `Intake document ${index + 1}`} (fake demo)`,
        id: index + 1,
        status: checklistStatus(document.status),
      })),
      documents: [],
      email: clean(primary.email),
      firstName: clean(primary.firstName),
      id: stableId,
      intakePackage,
      intakeSubmittedDate: submittedDate,
      intakeSentDate: submittedDate,
      lastName: clean(primary.lastName),
      leadNotes: [clean(matter.clientGoals), clean(matter.urgentConcerns)]
        .filter(Boolean)
        .join(' Urgent: '),
      leadStage: 'Intake Submitted',
      notes: [],
      phone: clean(primary.phone),
      tasks: [
        {
          assignee: 'Matt McCune',
          description: `Review the complete BK FastLane Intake package for ${clientName}.`,
          due: nextDay.toISOString().slice(0, 10),
          id: `${stableId}-attorney-review`,
          priority: clean(matter.urgentConcerns) ? 'High' : 'Medium',
          stage: 'Intake Submitted',
          status: 'Pending',
          title: 'Review completed Intake package',
        },
      ],
      timeEntries: [],
      timeline: [
        {
          action: 'Complete Intake package received',
          date: submittedDate,
          detail: `${intakePackage.readiness.fieldsFilled}/${intakePackage.readiness.fieldsRequired} required field groups and ${intakePackage.readiness.documentsReady}/${intakePackage.readiness.documentsRequired} documents received.`,
          id: `${stableId}-received`,
          user: 'BK FastLane Intake',
        },
      ],
    }
  }

  const mergePackageIntoLeads = (leads, candidate) => {
    const incoming = packageToLead(candidate)
    const list = asArray(leads)
    const existingIndex = list.findIndex(
      (lead) =>
        lead?.id === incoming.id ||
        lead?.intakePackage?.packageId === incoming.intakePackage.packageId,
    )

    if (existingIndex < 0) return [incoming, ...list]

    return list.map((lead, index) =>
      index === existingIndex
        ? {
            ...incoming,
            ...lead,
            bankruptcyType: incoming.bankruptcyType,
            contacts: incoming.contacts,
            docChecklist: incoming.docChecklist,
            email: incoming.email,
            firstName: incoming.firstName,
            intakePackage: incoming.intakePackage,
            intakeSubmittedDate: incoming.intakeSubmittedDate,
            lastName: incoming.lastName,
            leadStage: incoming.leadStage,
            phone: incoming.phone,
          }
        : lead,
    )
  }

  const mergePackagesIntoLeads = (leads, packages) =>
    asArray(packages).reduce((current, candidate) => {
      try {
        return mergePackageIntoLeads(current, candidate)
      } catch {
        return current
      }
    }, asArray(leads))

  const readQueuedPackages = (storage) => {
    try {
      const parsed = JSON.parse(storage?.getItem(HANDOFF_STORAGE_KEY) || '[]')
      return asArray(parsed).filter((item) => validatePackage(item).valid)
    } catch {
      return []
    }
  }

  const enqueuePackage = (storage, candidate) => {
    const intakePackage = normalizePackage(candidate)
    const existing = readQueuedPackages(storage).filter(
      (item) => item.packageId !== intakePackage.packageId,
    )
    storage.setItem(
      HANDOFF_STORAGE_KEY,
      JSON.stringify([intakePackage, ...existing].slice(0, 25)),
    )
    return intakePackage
  }

  return {
    DEFAULT_ORGANIZATION,
    HANDOFF_STORAGE_KEY,
    ORGANIZATION_EVENT,
    ORGANIZATION_STORAGE_KEY,
    PACKAGE_SCHEMA_VERSION,
    debtorName,
    enqueuePackage,
    formatAddress,
    matterClientName,
    mergePackageIntoLeads,
    mergePackagesIntoLeads,
    normalizePackage,
    packageToLead,
    readOrganization,
    readQueuedPackages,
    total,
    validatePackage,
    writeOrganization,
  }
})
