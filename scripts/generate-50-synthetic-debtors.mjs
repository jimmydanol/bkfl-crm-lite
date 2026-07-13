import { mkdir, rm, writeFile } from 'node:fs/promises'
import { basename, dirname, join, relative, resolve, sep } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const fixturesRoot = resolve(root, 'fixtures', 'synthetic-intake-2026-07-13')
const expectedFixturesParent = resolve(root, 'fixtures') + sep

if (!fixturesRoot.startsWith(expectedFixturesParent) || basename(fixturesRoot) !== 'synthetic-intake-2026-07-13') {
  throw new Error(`Refusing to replace unexpected fixture path: ${fixturesRoot}`)
}

const INTAKE_COMMIT = 'e3fc6348f04d3d839c0a7d3a3048773a279f1f0d'
const CRM_BASE_COMMIT = 'ddc40ff'
const GENERATED_AT = '2026-07-13T23:45:00.000Z'

const profiles = [
  ['Alicia Moreno', 'Long Beach', 'CA', '90810', 'Harborview Medical Group', 'medical billing specialist'],
  ['Brandon Ellis', 'Aurora', 'CO', '80012', 'Front Range Distribution', 'warehouse lead'],
  ['Camille Nguyen', 'Burbank', 'CA', '91505', 'Pacific Crest Dental', 'dental assistant'],
  ['Dante Brooks', 'Lakewood', 'CO', '80226', 'Mile High HVAC Services', 'service technician'],
  ['Elena Ramirez', 'Santa Ana', 'CA', '92704', 'Orange County Senior Living', 'care coordinator'],
  ['Farah Haddad', 'Arvada', 'CO', '80003', 'Aspen Grove Pharmacy', 'pharmacy technician'],
  ['Gabriel Soto', 'Riverside', 'CA', '92507', 'Inland Courier Network', 'delivery driver'],
  ['Hannah Price', 'Thornton', 'CO', '80229', 'Northstar Child Development', 'preschool teacher'],
  ['Isaiah Coleman', 'Pasadena', 'CA', '91104', 'San Gabriel Transit', 'bus operator'],
  ['Jasmine Patel', 'Centennial', 'CO', '80122', 'Summit Family Clinic', 'office manager'],
  ['Kelvin Wright', 'Compton', 'CA', '90221', 'South Bay Auto Parts', 'parts specialist'],
  ['Leah Fischer', 'Westminster', 'CO', '80031', 'Clear Creek Credit Union', 'member services representative'],
  ['Miguel Alvarez', 'Pomona', 'CA', '91767', 'Valley Fresh Foods', 'shift supervisor'],
  ['Naomi Turner', 'Commerce City', 'CO', '80022', 'Prairie View Schools', 'cafeteria manager'],
  ['Omar Reed', 'Inglewood', 'CA', '90303', 'LAX Hospitality Partners', 'hotel maintenance worker'],
  ['Priya Shah', 'Littleton', 'CO', '80120', 'Foothills Imaging Center', 'radiology scheduler'],
  ['Quentin Wallace', 'Torrance', 'CA', '90501', 'Coastal Packaging Works', 'machine operator'],
  ['Rosa Delgado', 'Englewood', 'CO', '80110', 'Cherry Creek Cleaning Co', 'self-employed cleaner'],
  ['Samuel Kim', 'Glendale', 'CA', '91205', 'Verdugo Market', 'department manager'],
  ['Tiana Johnson', 'Denver', 'CO', '80219', 'Rocky Mountain Home Care', 'home health aide'],
  ['Uriel Martinez', 'Anaheim', 'CA', '92804', 'Canyon Electrical Supply', 'counter sales associate'],
  ['Vanessa Chen', 'Broomfield', 'CO', '80020', 'Flatiron Veterinary Center', 'veterinary assistant'],
  ['Wyatt Simmons', 'Lancaster', 'CA', '93535', 'Antelope Valley Fabrication', 'welder'],
  ['Ximena Torres', 'Wheat Ridge', 'CO', '80033', 'West Line Bakery', 'self-employed baker'],
  ['Yusuf Khan', 'Norwalk', 'CA', '90650', 'Gateway Security Services', 'security officer'],
  ['Zoe Bennett', 'Golden', 'CO', '80401', 'Table Mountain Outdoor Gear', 'retail supervisor'],
  ['Andre Mitchell', 'Carson', 'CA', '90745', 'Pacific Container Terminal', 'yard coordinator'],
  ['Bianca Flores', 'Northglenn', 'CO', '80233', 'Horizon Dental Lab', 'lab technician'],
  ['Carlos Bennett', 'Ontario', 'CA', '91762', 'Empire Appliance Repair', 'self-employed repair technician'],
  ['Denise Harper', 'Sheridan', 'CO', '80110', 'Bear Creek Assisted Living', 'medication aide'],
  ['Ethan Morales', 'Whittier', 'CA', '90605', 'Uptown Printing House', 'press operator'],
  ['Felicia Grant', 'Parker', 'CO', '80134', 'Pine Lane Pediatrics', 'medical receptionist'],
  ['Hector Ruiz', 'El Monte', 'CA', '91732', 'Mission Produce Logistics', 'forklift operator'],
  ['Irene Park', 'Lafayette', 'CO', '80026', 'Coal Creek Accounting', 'bookkeeping assistant'],
  ['Jamal Bryant', 'Gardena', 'CA', '90247', 'Southwest Building Supply', 'route dispatcher'],
  ['Kendra Collins', 'Brighton', 'CO', '80601', 'Platte Valley Animal Hospital', 'kennel manager'],
  ['Luis Mendoza', 'San Bernardino', 'CA', '92404', 'Arrowhead Landscape Services', 'self-employed landscaper'],
  ['Monica Gray', 'Castle Rock', 'CO', '80104', 'Douglas County Fitness', 'membership coordinator'],
  ['Nolan Pierce', 'Hawthorne', 'CA', '90250', 'Aviation Ground Support', 'equipment mechanic'],
  ['Olivia Sandoval', 'Federal Heights', 'CO', '80260', 'North Metro Laundry', 'shift manager'],
  ['Pedro Rivera', 'Downey', 'CA', '90241', 'Stonewood Restaurant Group', 'kitchen manager'],
  ['Renee Watson', 'Greenwood Village', 'CO', '80111', 'Orchard Road Insurance', 'claims assistant'],
  ['Sergio Chavez', 'Fontana', 'CA', '92335', 'Sierra Concrete Pumping', 'pump operator'],
  ['Teresa Williams', 'Edgewater', 'CO', '80214', 'Sloan Lake Community Center', 'program coordinator'],
  ['Victor James', 'Bellflower', 'CA', '90706', 'Artesia Cable Services', 'field installer'],
  ['Wendy Lopez', 'Lakewood', 'CO', '80215', 'Colfax Community Pharmacy', 'inventory clerk'],
  ['Xavier Owens', 'Redlands', 'CA', '92374', 'Citrus Valley Ambulance', 'emergency medical technician'],
  ['Yara Ibrahim', 'Superior', 'CO', '80027', 'Boulder Valley Optometry', 'optical assistant'],
  ['Zachary Long', 'Fullerton', 'CA', '92833', 'North Orange Machine Works', 'quality inspector'],
  ['Adriana Cruz', 'Loveland', 'CO', '80537', 'Frontier Mobility Services', 'transportation coordinator'],
]

const streets = ['Fresh Start Way', 'Cedar Ridge Avenue', 'Juniper Court', 'Willow Bend Road', 'Sunrise Terrace', 'Meadow Run Drive', 'Pine Hollow Lane', 'Orchard View Street', 'Aspen Trail', 'Riverstone Place']
const banks = ['Community Horizon Bank', 'Pioneer Federal Credit Union', 'Western Valley Bank', 'Neighborhood Trust Bank', 'Summit Community Credit Union']
const vehicles = [
  [2018, 'Honda', 'Civic'], [2020, 'Toyota', 'RAV4'], [2017, 'Ford', 'Escape'], [2021, 'Hyundai', 'Elantra'],
  [2019, 'Nissan', 'Rogue'], [2016, 'Chevrolet', 'Malibu'], [2022, 'Kia', 'Seltos'], [2015, 'Subaru', 'Outback'],
]
const creditors = ['Capital One', 'Discover', 'Synchrony Bank', 'Citi', 'Mission Medical Center', 'Regional Collections LLC', 'Chase Card Services', 'CareCredit']
const missingFieldPool = [
  'Prior address move-out date', 'Employer street address', 'Vehicle mileage', 'Second tax-year explanation',
  'Dependent age', 'Monthly medical expense', 'Creditor mailing address', 'Spouse phone number',
  'Property purchase month', 'Other-income start date', 'HOA account number', 'Business closure date',
]

const scenarioTypes = [
  { key: 'garnishment', chapter: 'Chapter 7', goal: 'Stop a wage garnishment and discharge credit-card and medical debt.', concern: 'A payroll garnishment is scheduled to increase on the next pay period.', flag: ['HIGH', 'Active wage garnishment', 'Financial Affairs'] },
  { key: 'foreclosure', chapter: 'Chapter 13', goal: 'Keep the family home and cure mortgage arrears through a repayment plan.', concern: 'A foreclosure notice was received and the sale date has not been confirmed.', flag: ['HIGH', 'Foreclosure timeline needs confirmation', 'Property'] },
  { key: 'medical', chapter: 'Chapter 7', goal: 'Discharge medical bills and credit cards while keeping basic household property.', concern: 'Collection calls are reaching family members and the workplace.', flag: ['MEDIUM', 'Large medical debt balance', 'Debts'] },
  { key: 'business', chapter: 'Chapter 7', goal: 'Address personal guarantees from a closed small business and obtain a fresh start.', concern: 'The debtor is unsure which vendor accounts were personally guaranteed.', flag: ['HIGH', 'Business-debt classification review', 'Debts'] },
  { key: 'vehicle', chapter: 'Chapter 13', goal: 'Keep a needed vehicle and catch up on the loan while resolving unsecured debt.', concern: 'The lender sent a repossession warning after two missed payments.', flag: ['HIGH', 'Vehicle repossession risk', 'Property'] },
  { key: 'tax', chapter: 'Chapter 13', goal: 'Create a manageable plan for tax balances and other debt.', concern: 'State and federal notices list different payoff amounts.', flag: ['HIGH', 'Tax debt requires year-by-year review', 'Debts'] },
  { key: 'support', chapter: 'Chapter 7', goal: 'Resolve consumer debt after a divorce without disrupting current support payments.', concern: 'The debtor is unclear about the amount of support arrears shown in the order.', flag: ['MEDIUM', 'Domestic-support documents incomplete', 'Debts'] },
  { key: 'student', chapter: 'Chapter 7', goal: 'Discharge eligible consumer debt and stabilize the monthly budget.', concern: 'Student-loan payments are restarting while medical bills remain in collection.', flag: ['INFO', 'Student loans listed for treatment review', 'Debts'] },
  { key: 'lawsuit', chapter: 'Chapter 7', goal: 'Stop a collection lawsuit and address unsecured debt before a judgment enters.', concern: 'An answer deadline appears on court papers uploaded with the intake.', flag: ['HIGH', 'Pending collection lawsuit', 'Financial Affairs'] },
  { key: 'mortgage', chapter: 'Chapter 13', goal: 'Catch up on the mortgage, keep the home, and consolidate other debts into a plan.', concern: 'The monthly mortgage statement and arrears letter do not agree.', flag: ['HIGH', 'Mortgage arrears discrepancy', 'Property'] },
]

const documentRules = [
  ['id_license', "Driver's license or photo ID", 'T1'],
  ['ssn_proof', 'Social Security card, W-2, or 1099', 'T1'],
  ['bank_statements', 'Bank statements - last 6 months (all accounts)', 'T1'],
  ['unsecured_statements', 'Statements for credit cards, medical bills and other debts', 'T1'],
  ['tax_return_y1', 'Tax return - last year', 'T2'],
  ['tax_return_y2', 'Tax return - two years ago', 'T2'],
  ['counseling_certificate', 'Counseling class certificate', 'T2'],
  ['pay_stubs', 'Pay stubs - last 6 months', 'T2', p => p.employed],
  ['other_income_proof', 'Proof of other income - last 6 months', 'T2', p => p.otherIncome],
  ['zillow_valuation', 'Zillow value report for the home', 'T2', p => p.realEstate],
  ['foreclosure_docs', 'Foreclosure paperwork', 'T2', p => p.behindMortgage],
  ['kbb_valuation', 'KBB value report for the vehicle', 'T2', p => p.vehicle],
  ['vehicle_title', 'Vehicle title', 'T2', p => p.vehicle && !p.vehicleFinanced],
  ['repo_docs', 'Vehicle repossession paperwork', 'T2', p => p.vehicleFinanced && p.behindVehicle],
  ['investment_statements', 'Investment or retirement account statements', 'T2', p => p.investments],
  ['mortgage_statements', 'Mortgage statements', 'T2', p => p.realEstate],
  ['hoa_statements', 'HOA statements', 'T2', p => p.hoa],
  ['other_secured_statements', 'Statements for other secured debts', 'T2', p => p.otherSecured],
  ['vehicle_loan_statements', 'Vehicle loan or lease statements', 'T2', p => p.vehicleFinanced],
  ['dso_docs', 'Support order or court paperwork for support', 'T2', p => p.dso],
  ['tax_notices', 'Tax notices or balance statements', 'T2', p => p.backTaxes],
  ['student_loan_statements', 'Student loan statements', 'T2', p => p.studentLoans],
  ['business_debt_statements', 'Business debt statements', 'T2', p => p.businessDebt],
  ['court_paperwork', 'Court paperwork', 'T2', p => p.lawsuit],
  ['other_docs', "Anything else you'd like us to have", 'T3', p => p.index % 7 === 0],
  ['sp_id_license', "Spouse's driver's license or photo ID", 'T1', p => p.joint],
  ['sp_ssn_proof', "Spouse's Social Security card, W-2, or 1099", 'T1', p => p.joint],
  ['sp_tax_return_y1', "Spouse's tax return - last year", 'T2', p => p.joint && p.spouseFiledSeparately],
  ['sp_tax_return_y2', "Spouse's tax return - two years ago", 'T2', p => p.joint && p.spouseFiledSeparately],
  ['sp_pay_stubs', "Spouse's pay stubs - last 6 months", 'T2', p => p.married && p.spouseEmployed],
  ['sp_other_income_proof', "Spouse's proof of other income - last 6 months", 'T2', p => p.married && p.spouseOtherIncome],
  ['sp_bank_statements', "Spouse's bank statements - last 6 months", 'T2', p => p.married && !p.joint],
]

const docLabel = Object.fromEntries(documentRules.map(([id, label]) => [id, label]))

const slugify = value => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
const isoDate = offset => new Date(Date.UTC(2026, 6, 13 - offset)).toISOString().slice(0, 10)
const money = value => `$${Math.round(value).toLocaleString('en-US')}`

function escapePdf(value) {
  return String(value).replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)')
}

function makePdf(lines) {
  const text = lines.slice(0, 34).map((line, index) => `${index === 0 ? '' : '0 -18 Td '}(${escapePdf(line)}) Tj`).join('\n')
  const stream = `BT\n/F1 11 Tf\n72 742 Td\n${text}\nET\n`
  const objects = [
    '<< /Type /Catalog /Pages 2 0 R >>',
    '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
    '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 5 0 R >> >> /Contents 4 0 R >>',
    `<< /Length ${Buffer.byteLength(stream)} >>\nstream\n${stream}endstream`,
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
  ]
  let pdf = '%PDF-1.4\n'
  const offsets = [0]
  objects.forEach((object, index) => {
    offsets.push(Buffer.byteLength(pdf))
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`
  })
  const xrefOffset = Buffer.byteLength(pdf)
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`
  offsets.slice(1).forEach(offset => { pdf += `${String(offset).padStart(10, '0')} 00000 n \n` })
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`
  return Buffer.from(pdf, 'ascii')
}

function profileFacts(index) {
  const [fullName, city, state, zip, employer, occupation] = profiles[index]
  const [firstName, ...lastParts] = fullName.split(' ')
  const lastName = lastParts.join(' ')
  const scenario = scenarioTypes[index % scenarioTypes.length]
  const married = index % 3 === 0 || index % 7 === 0
  const joint = married && index % 4 === 0
  const vehicle = index % 5 !== 2
  const vehicleFinanced = vehicle && index % 3 !== 0
  const realEstate = ['foreclosure', 'mortgage', 'tax'].includes(scenario.key) || index % 6 === 0
  const employed = scenario.key !== 'business' && (scenario.key === 'garnishment' || index % 11 !== 0)
  const spouseEmployed = married && index % 5 !== 0
  const slug = `${String(index + 1).padStart(2, '0')}-${slugify(fullName)}`
  return {
    index, fixtureId: `BKFL-SYN-${String(index + 1).padStart(3, '0')}`, slug, fullName, firstName, lastName,
    city, state, zip, employer, occupation, scenario,
    email: `${slugify(fullName)}@example.test`,
    phone: `(${state === 'CA' ? ['310', '562', '626', '714', '818'][index % 5] : ['303', '720', '970'][index % 3]}) 555-${String(100 + index).padStart(4, '0')}`,
    address: `${1100 + index * 17} ${streets[index % streets.length]}, ${city}, ${state} ${zip}`,
    dob: `${String((index % 12) + 1).padStart(2, '0')}/${String((index * 3 % 27) + 1).padStart(2, '0')}/${1972 + index % 25}`,
    married, joint, spouseFiledSeparately: joint && index % 3 === 0, spouseEmployed,
    spouseOtherIncome: married && index % 6 === 0,
    employed, otherIncome: index % 4 === 1 || !employed,
    realEstate, behindMortgage: realEstate && ['foreclosure', 'mortgage'].includes(scenario.key), hoa: realEstate && index % 2 === 0,
    vehicle, vehicleFinanced, behindVehicle: vehicleFinanced && scenario.key === 'vehicle', investments: index % 6 === 0,
    otherSecured: index % 13 === 0,
    dso: scenario.key === 'support', backTaxes: scenario.key === 'tax', studentLoans: scenario.key === 'student',
    businessDebt: scenario.key === 'business', lawsuit: ['lawsuit', 'garnishment'].includes(scenario.key),
  }
}

function buildPackage(p) {
  const completionMissing = 2 + (p.index % 5)
  const missingFields = Array.from({ length: completionMissing }, (_, offset) => missingFieldPool[(p.index * 3 + offset * 2) % missingFieldPool.length])
  const completionPercent = 96 - completionMissing * 6 - (p.index % 3)
  const bank = banks[p.index % banks.length]
  const [vehicleYear, vehicleMake, vehicleModel] = vehicles[p.index % vehicles.length]
  const monthlyIncome = p.employed ? 3200 + p.index * 63 : 1750 + p.index * 31
  const spouseIncome = p.spouseEmployed ? 2100 + p.index * 29 : 0
  const homeValue = 285000 + p.index * 4700
  const mortgage = Math.round(homeValue * (0.72 + (p.index % 4) * 0.03))
  const vehicleValue = 7200 + p.index * 310
  const vehicleLoan = p.vehicleFinanced ? Math.round(vehicleValue * 0.58) : 0
  const unsecured = 18500 + p.index * 725
  const spouseName = p.married ? `${['Morgan', 'Taylor', 'Jordan', 'Casey', 'Alex'][p.index % 5]} ${p.lastName}` : null
  const debtEntries = [
    { creditor: creditors[p.index % creditors.length], type: 'unsecured', balance: unsecured, arrears: 0, collateral: '' },
    { creditor: creditors[(p.index + 3) % creditors.length], type: 'unsecured', balance: 4200 + p.index * 193, arrears: 0, collateral: '' },
  ]
  if (p.realEstate) debtEntries.unshift({ creditor: 'Community Home Lending', type: 'secured', balance: mortgage, arrears: p.behindMortgage ? 6400 + p.index * 210 : 0, collateral: 'Primary residence' })
  if (p.vehicleFinanced) debtEntries.unshift({ creditor: 'Regional Auto Finance', type: 'secured', balance: vehicleLoan, arrears: p.behindVehicle ? 980 + p.index * 21 : 0, collateral: `${vehicleYear} ${vehicleMake} ${vehicleModel}` })
  if (p.backTaxes) debtEntries.push({ creditor: 'IRS and state revenue agency', type: 'priority', balance: 7800 + p.index * 140, arrears: 0, collateral: '' })
  if (p.studentLoans) debtEntries.push({ creditor: 'Federal student loan servicer', type: 'unsecured', balance: 22400 + p.index * 210, arrears: 0, collateral: '' })
  if (p.dso) debtEntries.push({ creditor: 'Domestic support obligation', type: 'priority', balance: 2400 + p.index * 90, arrears: 2400 + p.index * 90, collateral: '' })

  const assets = [
    { name: `Checking at ${bank}`, category: 'Bank or financial account', value: 240 + p.index * 37, lien: 0, intent: '' },
    { name: 'Household goods and furnishings', category: 'Household goods', value: 2600 + p.index * 45, lien: 0, intent: 'Keep' },
  ]
  if (p.realEstate) assets.unshift({ name: `Primary residence - ${p.address}`, category: 'Real estate', value: homeValue, lien: mortgage, intent: 'Keep' })
  if (p.vehicle) assets.push({ name: `${vehicleYear} ${vehicleMake} ${vehicleModel}`, category: 'Vehicle', value: vehicleValue, lien: vehicleLoan, intent: 'Keep for work and household transportation' })
  if (p.investments) assets.push({ name: 'Employer retirement plan', category: 'Retirement', value: 8900 + p.index * 415, lien: 0, intent: 'Claim available exemption' })

  const debtors = [{ name: p.fullName, dob: p.dob, ssn: `***-**-${String(4100 + p.index).slice(-4)}`, email: p.email, phone: p.phone, address: p.address }]
  if (p.joint) debtors.push({ name: spouseName, dob: `${String(((p.index + 5) % 12) + 1).padStart(2, '0')}/15/${1974 + p.index % 22}`, ssn: `***-**-${String(6100 + p.index).slice(-4)}`, email: `spouse.${p.email}`, phone: p.phone.replace(/\d{4}$/, String(150 + p.index).padStart(4, '0')), address: p.address })

  const sofaAnswers = { job_income: p.employed || p.businessDebt ? 'Yes' : 'No' }
  if (p.lawsuit) sofaAnswers.lawsuits = { a: 'Yes', entries: 1 }
  if (p.behindMortgage || p.behindVehicle) sofaAnswers.property_taken = { a: 'Yes', entries: 1 }
  if (p.businessDebt) sofaAnswers.business_connections = { a: 'Yes', entries: 1 }
  if (p.index % 8 === 0) sofaAnswers.creditor_payments_90 = { a: 'Yes', entries: 1 }
  if (p.index % 9 === 0) sofaAnswers.closed_accounts = { a: 'Yes', entries: 1 }

  return {
    schemaVersion: 'bkfl.intake-package.v1',
    fixtureId: p.fixtureId,
    synthetic: true,
    submitted: `${7}/${String(1 + p.index % 12).padStart(2, '0')}/2026, ${8 + p.index % 9}:${String((p.index * 7) % 60).padStart(2, '0')} ${p.index % 2 ? 'PM' : 'AM'}`,
    court: p.state === 'CO' ? 'District of Colorado' : 'Central District of California',
    goals: p.scenario.goal,
    concerns: p.scenario.concern,
    household: { maritalStatus: p.married ? 'Married' : ['Single', 'Divorced', 'Separated'][p.index % 3], jointFiling: p.joint ? 'Yes' : 'No', dependents: p.index % 4, debtors },
    income: [
      { source: p.employed ? 'Employment' : p.businessDebt ? 'Self-employment' : 'Benefits / temporary income', employer: p.employed ? p.employer : p.businessDebt ? `${p.lastName} Services` : 'Not currently employed', frequency: p.employed ? 'Bi-weekly' : 'Monthly', monthly: monthlyIncome, sixMonth: monthlyIncome * 6 },
      ...(p.otherIncome ? [{ source: p.index % 2 ? 'Child support / household contribution' : 'Seasonal or gig income', employer: 'Varies', frequency: 'Monthly', monthly: 275 + p.index * 9, sixMonth: (275 + p.index * 9) * 6 }] : []),
      ...(spouseIncome ? [{ source: 'Spouse income', employer: `${p.city} Community Services`, frequency: 'Monthly', monthly: spouseIncome, sixMonth: spouseIncome * 6 }] : []),
    ],
    expenses: [
      { name: p.realEstate ? 'Mortgage payment' : 'Rent', monthly: p.realEstate ? 1680 + p.index * 24 : 1225 + p.index * 13, notes: p.behindMortgage ? 'Debtor reports arrears' : '' },
      { name: 'Utilities', monthly: 185 + p.index % 7 * 17, notes: '' },
      { name: 'Phone and internet', monthly: 120 + p.index % 5 * 14, notes: '' },
      { name: 'Food and housekeeping supplies', monthly: 520 + (p.index % 4) * 95, notes: '' },
      { name: 'Transportation', monthly: 215 + (p.index % 6) * 39, notes: '' },
      { name: 'Insurance', monthly: 190 + (p.index % 5) * 42, notes: '' },
      ...(p.index % 4 ? [{ name: 'Medical and dental', monthly: 95 + p.index * 4, notes: missingFields.includes('Monthly medical expense') ? 'Estimate needs confirmation' : '' }] : []),
    ],
    assets,
    debts: debtEntries,
    counseling: p.index % 3 === 0 ? 'Not taken yet - provider link supplied by the firm' : `Debtor reports class completed on 06/${String(10 + p.index % 18).padStart(2, '0')}/2026; certificate status varies in Documents`,
    sofa: {
      answers: sofaAnswers,
      events: [
        { event: p.scenario.flag[1], date: `06/${String(2 + p.index % 25).padStart(2, '0')}/2026`, amount: 900 + p.index * 135, desc: `${p.fullName} described this event in the synthetic intake. Details require firm review.` },
      ],
    },
    flags: [{ severity: p.scenario.flag[0], flag: p.scenario.flag[1], section: p.scenario.flag[2], detail: `${p.scenario.concern} Synthetic fixture only; attorney review required.` }],
    dataQuality: {
      completionPercent,
      missingFields,
      enteredSections: ['Personal Information', 'Income', 'Assets', 'Debts', 'Expenses', 'Financial Affairs', 'Counseling', 'Documents'],
      source: 'Matt intake main',
      sourceCommit: INTAKE_COMMIT,
    },
  }
}

function reasonFor(docId, index) {
  if (docId === 'counseling_certificate') return 'not_taken_yet'
  if (docId.includes('tax_return')) return index % 2 ? 'didnt_file' : 'dont_have_copy'
  return ['will_send_later', 'dont_have_copy', 'doesnt_apply'][index % 3]
}

function issueFor(docId, p) {
  const issues = {
    id_license: 'Image is readable, but the lower-right corner is cropped; confirm expiration date.',
    ssn_proof: 'Name is legible, but the identifying number is partially obscured; verify against intake.',
    bank_statements: `Only ${2 + p.index % 4} of 6 monthly statement periods are present.`,
    unsecured_statements: 'Several balances are legible, but one collection letter is missing its account page.',
  }
  return issues[docId] || 'Document is present but contains an incomplete page range or a value that needs confirmation.'
}

function documentLines(docId, p, pkg, status) {
  const [vehicleYear, vehicleMake, vehicleModel] = vehicles[p.index % vehicles.length]
  const bank = banks[p.index % banks.length]
  const lines = [
    'SYNTHETIC TRAINING DOCUMENT - NOT A REAL PERSON OR ACCOUNT',
    `Fixture: ${p.fixtureId}`,
    `Debtor: ${p.fullName}`,
    `Document type: ${docLabel[docId] || docId}`,
    `Intake source commit: ${INTAKE_COMMIT.slice(0, 12)}`,
    '',
  ]
  if (docId.includes('id_license')) lines.push(`Synthetic ID number: ${p.state}-SYN-${String(90000 + p.index)}`, `Date of birth: ${p.dob}`, `Address: ${p.address}`)
  else if (docId.includes('ssn_proof')) lines.push(`Synthetic test identifier: 900-00-${String(4100 + p.index).slice(-4)}`, `Employer shown: ${p.employer}`, 'This is not a valid Social Security number.')
  else if (docId.includes('bank_statements')) lines.push(`Institution: ${bank}`, `Synthetic account ending: ${String(7300 + p.index).slice(-4)}`, `Ending balance: ${money(240 + p.index * 37)}`, `Statement coverage: ${status === 'ai_flagged' ? `${2 + p.index % 4} of 6 months` : '6 of 6 months'}`)
  else if (docId.includes('pay_stubs')) lines.push(`Employer: ${p.employer}`, `Occupation: ${p.occupation}`, `Gross monthly equivalent: ${money(pkg.income[0].monthly)}`, `Coverage: ${status === 'ai_flagged' ? '4 of 6 months' : '6 of 6 months'}`)
  else if (docId.includes('tax_return')) lines.push(`Synthetic tax year: ${docId.endsWith('y2') ? '2024' : '2025'}`, `Filing status: ${pkg.household.jointFiling === 'Yes' ? 'Married filing jointly' : pkg.household.maritalStatus}`, `Synthetic AGI: ${money(pkg.income.reduce((sum, row) => sum + row.monthly * 12, 0))}`, 'Not filed with any taxing authority.')
  else if (docId === 'unsecured_statements') lines.push(...pkg.debts.filter(debt => debt.type === 'unsecured').map(debt => `${debt.creditor}: ${money(debt.balance)}`), `Coverage note: ${status === 'ai_flagged' ? 'One attachment page is missing' : 'Account summary pages included'}`)
  else if (docId === 'counseling_certificate') lines.push('Provider: Synthetic Credit Education Center', `Completion date: 06/${String(10 + p.index % 18).padStart(2, '0')}/2026`, `Certificate: TEST-${p.fixtureId}`, 'Not a valid counseling certificate.')
  else if (docId.includes('kbb') || docId.includes('vehicle')) lines.push(`Vehicle: ${vehicleYear} ${vehicleMake} ${vehicleModel}`, `Synthetic value: ${money(7200 + p.index * 310)}`, `Synthetic loan balance: ${money(Math.round((7200 + p.index * 310) * 0.58))}`)
  else if (docId.includes('zillow') || docId.includes('mortgage') || docId.includes('hoa') || docId === 'foreclosure_docs') lines.push(`Property: ${p.address}`, `Synthetic estimated value: ${money(285000 + p.index * 4700)}`, `Status note: ${p.behindMortgage ? 'Debtor reports arrears; amount needs confirmation' : 'Debtor reports current payments'}`)
  else if (docId === 'student_loan_statements') lines.push('Servicer: Federal Student Loan Demo Servicer', `Synthetic balance: ${money(22400 + p.index * 210)}`)
  else if (docId === 'business_debt_statements') lines.push(`Business: ${p.lastName} Services`, 'Status: Debtor reports business closed or winding down', `Synthetic personal-guarantee balance: ${money(13000 + p.index * 330)}`)
  else if (docId === 'court_paperwork') lines.push(`Caption: ${creditors[p.index % creditors.length]} v. ${p.fullName}`, `Synthetic case: DEMO-${2026000 + p.index}`, 'Response date requires attorney confirmation.')
  else lines.push(`Case-specific amount: ${money(1200 + p.index * 87)}`, 'The debtor supplied this synthetic supporting record with the intake.')
  lines.push('', `AI intake screening: ${status === 'ai_flagged' ? issueFor(docId, p) : 'Readable and matched to the debtor fixture; firm approval still required.'}`)
  return lines
}

function buildChecklist(p, pkg) {
  const triggered = documentRules.filter(([, , , when]) => !when || when(p))
  const required = triggered.filter(([, , tier]) => tier === 'T1')
  const imperfectRequired = required[p.index % required.length][0]
  const t2 = triggered.filter(([, , tier]) => tier === 'T2')
  const forcedReason = t2[p.index % t2.length]?.[0]
  return triggered.map(([docId, label, tier], itemIndex) => {
    if (tier === 'T2' && (docId === forcedReason || (p.index + itemIndex * 3) % 11 === 0)) {
      return { id: itemIndex + 1, docId, status: 'reason_given', reason: reasonFor(docId, p.index), date: isoDate(p.index % 7) }
    }
    const status = docId === imperfectRequired || (tier === 'T2' && (p.index + itemIndex) % 7 === 0) ? 'ai_flagged' : 'ai_accepted'
    const fileName = `${p.slug}-${docId}.pdf`
    return {
      id: itemIndex + 1,
      docId,
      status,
      aiNote: status === 'ai_flagged' ? issueFor(docId, p) : `Matched to ${p.fullName}; automated intake screen passed. Firm approval required.`,
      fileName,
      fileUrl: `./fixtures/synthetic-intake-2026-07-13/${p.slug}/documents/${fileName}`,
      date: isoDate(p.index % 7),
      synthetic: true,
    }
  })
}

await rm(fixturesRoot, { recursive: true, force: true })
await mkdir(fixturesRoot, { recursive: true })

const leads = []
const manifestEntries = []
let totalUploads = 0
let flaggedUploads = 0
let reasonGiven = 0

for (let index = 0; index < profiles.length; index += 1) {
  const p = profileFacts(index)
  const pkg = buildPackage(p)
  const checklist = buildChecklist(p, pkg)
  const caseDir = join(fixturesRoot, p.slug)
  const documentDir = join(caseDir, 'documents')
  await mkdir(documentDir, { recursive: true })

  const documentFiles = []
  for (const item of checklist) {
    if (!item.fileName) {
      reasonGiven += 1
      continue
    }
    const bytes = makePdf(documentLines(item.docId, p, pkg, item.status))
    await writeFile(join(documentDir, item.fileName), bytes)
    item.size = `${Math.max(1, Math.round(bytes.length / 1024))} KB`
    documentFiles.push({ docType: item.docId, status: item.status, fileName: item.fileName, fileUrl: item.fileUrl, bytes: bytes.length })
    totalUploads += 1
    if (item.status === 'ai_flagged') flaggedUploads += 1
  }

  const submittedDate = isoDate(index % 11)
  const createdDate = isoDate(12 + index % 17)
  const contacts = [{ id: 1, name: p.fullName, firstName: p.firstName, middleName: '', lastName: p.lastName, role: 'Lead', email: p.email, phone: p.phone }]
  if (p.joint) {
    const spouse = pkg.household.debtors[1]
    const [spFirst, ...spLast] = spouse.name.split(' ')
    contacts.push({ id: 2, name: spouse.name, firstName: spFirst, middleName: '', lastName: spLast.join(' '), role: 'Lead (Spouse)', email: spouse.email, phone: spouse.phone })
  }
  const lead = {
    id: 5001 + index,
    fixtureId: p.fixtureId,
    synthetic: true,
    syntheticSource: 'matt-intake-main',
    firstName: p.firstName,
    lastName: p.lastName,
    email: p.email,
    phone: p.phone,
    bankruptcyType: p.scenario.chapter,
    leadStage: 'Intake Submitted',
    createdDate,
    intakeSentDate: isoDate(11 + index % 9),
    intakeSubmittedDate: submittedDate,
    leadNotes: `[SYNTHETIC ${p.fixtureId}] ${p.scenario.concern} Intake completion ${pkg.dataQuality.completionPercent}%; ${pkg.dataQuality.missingFields.length} entered-data gaps remain.`,
    intakeCompletion: pkg.dataQuality,
    contacts,
    calendarEvents: [],
    communications: [
      { id: 1, date: isoDate(11 + index % 9), type: 'Email', direction: 'Outgoing', subject: 'Your secure intake form - McCune Legal', to: p.fullName, email: p.email, automated: true },
      { id: 2, date: submittedDate, type: 'Portal', direction: 'Incoming', subject: 'Synthetic intake submitted with documents', from: p.fullName, automated: true },
    ],
    notes: [{ id: 1, date: submittedDate, author: 'Synthetic Intake Generator', text: `Training fixture only. Missing fields: ${pkg.dataQuality.missingFields.join('; ')}.` }],
    documents: documentFiles.map((file, docIndex) => ({ id: docIndex + 1, name: file.fileName, type: 'PDF', date: submittedDate, size: `${Math.max(1, Math.round(file.bytes / 1024))} KB`, folder: 'Synthetic Intake Submissions', subfolder: p.fixtureId, fileUrl: file.fileUrl, docId: file.docType })),
    docChecklist: checklist,
    intakePackage: pkg,
    tasks: [
      { id: 1, due: isoDate(-(1 + index % 5)), title: 'Review & approve AI Intake Summary email', status: 'Pending', assignee: 'Matt McCune', stage: 'Intake Submitted' },
      { id: 2, due: isoDate(-(1 + index % 5)), title: 'Review Documents - initial intake submission', status: 'Pending', assignee: 'Angie Sullivan', stage: 'Intake Submitted', batchDigest: true, initialReview: true },
    ],
    timeEntries: [],
    customFields: { upFrontFeeQuoted: p.scenario.chapter === 'Chapter 13' ? '$3,500' : '$1,500' },
    timeline: [
      { id: 1, date: submittedDate, action: 'Intake submitted', detail: `${p.fixtureId}: imported from Matt intake contract with ${documentFiles.length} file uploads`, user: 'Synthetic Intake Generator' },
      { id: 2, date: createdDate, action: 'Lead created', detail: 'Synthetic debtor fixture created', user: 'Synthetic Intake Generator' },
    ],
  }

  leads.push(lead)
  await writeFile(join(caseDir, 'intake-package.json'), `${JSON.stringify(pkg, null, 2)}\n`)
  manifestEntries.push({ fixtureId: p.fixtureId, fullName: p.fullName, slug: p.slug, email: p.email, completionPercent: pkg.dataQuality.completionPercent, missingFields: pkg.dataQuality.missingFields, intakePackage: `./${p.slug}/intake-package.json`, documents: documentFiles })
}

const summary = {
  debtorCount: leads.length,
  totalUploads,
  flaggedUploads,
  reasonGiven,
  averageCompletion: Math.round(leads.reduce((sum, lead) => sum + lead.intakeCompletion.completionPercent, 0) / leads.length),
  chapter7: leads.filter(lead => lead.bankruptcyType === 'Chapter 7').length,
  chapter13: leads.filter(lead => lead.bankruptcyType === 'Chapter 13').length,
  jointCases: leads.filter(lead => lead.intakePackage.household.jointFiling === 'Yes').length,
}

const manifest = {
  schemaVersion: 'bkfl.synthetic-intake-manifest.v1',
  generatedAt: GENERATED_AT,
  syntheticOnly: true,
  sources: {
    intakeRepository: 'mmccune22/mccune-legal-intake-mockups',
    intakeBranch: 'main',
    intakeCommit: INTAKE_COMMIT,
    crmRepository: 'mmccune22/bkfl-crm-lite',
    crmBaseBranch: 'main',
    crmBaseCommit: CRM_BASE_COMMIT,
  },
  summary,
  debtors: manifestEntries,
}

await writeFile(join(fixturesRoot, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`)
await writeFile(join(fixturesRoot, 'README.md'), `# 50 synthetic debtor intake imports\n\nAll records and documents in this directory are deterministic test fixtures. They do not identify real people, accounts, employers, creditors, cases, or government records. Every PDF is visibly marked as synthetic.\n\n- Intake source: Matt main at \`${INTAKE_COMMIT}\`\n- CRM base: Matt main at \`${CRM_BASE_COMMIT}\`\n- Debtors: ${summary.debtorCount}\n- Uploaded PDF files: ${summary.totalUploads}\n- AI-flagged uploads: ${summary.flaggedUploads}\n- Debtor reason-given items: ${summary.reasonGiven}\n- Average entered-data completion: ${summary.averageCompletion}%\n\nRegenerate from the repository root with \`node scripts/generate-50-synthetic-debtors.mjs\`.\n`)

const browserPayload = {
  schemaVersion: 'bkfl.synthetic-intake-browser.v1',
  generatedAt: GENERATED_AT,
  syntheticOnly: true,
  sources: manifest.sources,
  summary,
  leads,
}
await writeFile(join(root, 'synthetic-intake-fixtures.js'), `window.BKFLSyntheticIntake=Object.freeze(${JSON.stringify(browserPayload)});\n`)

console.log(JSON.stringify({ output: relative(root, fixturesRoot), ...summary }, null, 2))
