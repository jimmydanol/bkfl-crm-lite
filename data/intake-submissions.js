window.BKFL_INTAKE_SUBMISSIONS = {
  "demo": true,
  "generatedAt": "2026-07-13T17:05:44.989Z",
  "packages": [
    {
      "completion": {
        "documentCompletion": {
          "applicableRequired": 11,
          "receivedRequired": 9
        },
        "emailDraft": {
          "bodySnapshot": "Hi Lina,\n\nWe reviewed your BK FastLane intake entry and found a few items that still need your attention before the attorney can use the file efficiently.\n\n1. Please return to Personal Info and answer: County.\n2. Please complete: Other names used.\n3. Please complete: Prior bankruptcy details.\n4. Please complete: Weekend delivery apps six-month income total.\n5. Please upload: Pre-bankruptcy counseling certificate.\n6. Please upload: Tax return - two years ago.\n\nYou do not need to calculate legal conclusions. Just enter your best information and upload the requested documents when available.\n\nReturn to your intake: https://jimmydanol.github.io/bkfl-crm-lite/intake-demo.html?packageId=bkfl-demo-lina-morris-ch7-renter\n\nThank you,\nBK FastLane intake team",
          "deliveryMode": "simulation",
          "intakeResumeUrl": "https://jimmydanol.github.io/bkfl-crm-lite/intake-demo.html?packageId=bkfl-demo-lina-morris-ch7-renter",
          "recipient": "lina.morris.fake@example.test",
          "status": "pending_approval",
          "subject": "BK FastLane reminder: 6 intake items still needed"
        },
        "events": [],
        "fieldCompletion": {
          "applicableRequired": 27,
          "enteredRequired": 26,
          "percent": 96
        },
        "intakeResumeUrl": "https://jimmydanol.github.io/bkfl-crm-lite/intake-demo.html?packageId=bkfl-demo-lina-morris-ch7-renter",
        "missingItems": [
          {
            "canonicalPath": "matter.debtors[0].county",
            "clientInstruction": "Please return to Personal Info and answer: County.",
            "essential": true,
            "id": "schema-start.debtor.county",
            "kind": "field",
            "label": "County",
            "priority": "high"
          },
          {
            "canonicalPath": "matter.debtors[0].otherNames",
            "clientInstruction": "Please complete: Other names used.",
            "essential": true,
            "id": "missing-log-start.debtor.otherNames",
            "kind": "field",
            "label": "Other names used",
            "priority": "high"
          },
          {
            "canonicalPath": "matter.priorBankruptcyDetails",
            "clientInstruction": "Please complete: Prior bankruptcy details.",
            "essential": true,
            "id": "missing-log-start.priorBankruptcyDetails",
            "kind": "field",
            "label": "Prior bankruptcy details",
            "priority": "high"
          },
          {
            "canonicalPath": "matter.income[1].sixMonthTotal",
            "clientInstruction": "Please complete: Weekend delivery apps six-month income total.",
            "essential": true,
            "id": "missing-log-income.rows.1.sixMonthTotal",
            "kind": "field",
            "label": "Weekend delivery apps six-month income total",
            "priority": "high"
          },
          {
            "canonicalPath": "matter.documents[name='Pre-bankruptcy counseling certificate']",
            "clientInstruction": "Please upload: Pre-bankruptcy counseling certificate.",
            "essential": true,
            "id": "document-Pre-bankruptcy counseling certificate",
            "kind": "document",
            "label": "Pre-bankruptcy counseling certificate",
            "priority": "medium"
          },
          {
            "canonicalPath": "matter.documents[name='Tax return - two years ago']",
            "clientInstruction": "Please upload: Tax return - two years ago.",
            "essential": true,
            "id": "document-Tax return - two years ago",
            "kind": "document",
            "label": "Tax return - two years ago",
            "priority": "medium"
          }
        ],
        "percent": 88,
        "revision": 1,
        "status": "needs_client_action"
      },
      "demo": true,
      "generatedAt": "2026-07-13T17:05:44.989Z",
      "matter": {
        "id": "fake-matter-lina-morris-ch7-renter",
        "title": "Lina Morris fake client-entered Chapter 7 intake",
        "chapter": "7",
        "status": "review",
        "filingState": "CO",
        "district": "District of Colorado",
        "clientGoals": "Stop collection calls and deal with old medical and credit card debt.",
        "urgentConcerns": "A collector called her employer last week.",
        "priorBankruptcyFiled": "No",
        "priorBankruptcyDetails": "",
        "hasDependents": "No",
        "spouseFilingJointly": "No",
        "isEmployed": "Yes",
        "hasOtherHouseholdIncome": "Yes",
        "personalInfoSubmittedAt": "2026-07-13T17:05:44.989Z",
        "createdAt": "2026-07-13T17:05:45.830Z",
        "updatedAt": "2026-07-13T17:05:44.989Z",
        "debtors": [
          {
            "id": "debtor-e009b342-f113-4df0-9baa-76ec7e6a621e",
            "firstName": "Lina",
            "middleName": "Claire",
            "lastName": "Morris",
            "otherNames": "",
            "email": "lina.morris.fake@example.test",
            "phone": "(303) 555-0186",
            "ssnLast4": "6182",
            "socialSecurityNumber": "444-55-6182",
            "address": "782 South Elati Street Apt 4",
            "city": "Denver",
            "state": "CO",
            "zipCode": "80223",
            "county": "",
            "mailingAddressDifferent": false,
            "dateOfBirth": "11/03/1991"
          }
        ],
        "household": {
          "householdSize": 1,
          "maritalStatus": "Single",
          "dependents": []
        },
        "assets": [
          {
            "id": "asset-1f07ad0a-bf2b-42c7-85ee-59e338c048f7",
            "category": "Bank or financial account",
            "description": "Canvas Credit Union checking",
            "estimatedValue": 420,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "Checking"
          },
          {
            "id": "asset-f85954bc-dce3-42c2-a6fd-e2fbc9ac7036",
            "category": "Vehicle",
            "description": "2014 Kia Soul",
            "estimatedValue": 5100,
            "lienAmount": 0,
            "exemptionNote": "",
            "financingStatus": "Paid off",
            "keepIntent": "Keep for work transportation",
            "make": "Kia",
            "mileage": "136000",
            "model": "Soul",
            "year": "2014"
          },
          {
            "id": "asset-5b784390-2631-4135-ac66-5b3ddac853cc",
            "category": "Household goods and furnishings",
            "description": "Furniture, laptop, phone, clothes, kitchen items",
            "estimatedValue": 3100,
            "lienAmount": 0,
            "exemptionNote": ""
          }
        ],
        "debts": [
          {
            "id": "fake-debt-lina-morris-ch7-renter-1",
            "type": "unsecured",
            "creditor": "Synchrony Bank",
            "amount": 14100,
            "collateral": "",
            "arrears": 0,
            "notes": "Credit card in collections."
          },
          {
            "id": "fake-debt-lina-morris-ch7-renter-2",
            "type": "unsecured",
            "creditor": "Rose Medical Center",
            "amount": 9700,
            "collateral": "",
            "arrears": 0,
            "notes": "Medical bill sent to collector."
          },
          {
            "id": "fake-debt-lina-morris-ch7-renter-3",
            "type": "priority",
            "creditor": "Colorado Department of Revenue",
            "amount": 1800,
            "collateral": "",
            "arrears": 0,
            "notes": "Older state tax notice; priority status unknown."
          }
        ],
        "contracts": [],
        "codebtors": [],
        "income": [
          {
            "id": "income-fc2d93ac-0880-4974-9914-43195bde8655",
            "source": "Employment",
            "employer": "Denver Dental Supply",
            "amount": 2900,
            "frequency": "Biweekly",
            "sixMonthTotal": 17400
          },
          {
            "id": "income-0a83fc97-c16d-454b-bdb0-a188cdacef07",
            "source": "Business income",
            "employer": "Weekend delivery apps",
            "amount": 950,
            "frequency": "Monthly",
            "sixMonthTotal": 0
          }
        ],
        "payStubIncomeEvidence": [],
        "expenses": [
          {
            "id": "expense-40824703-0355-4677-8d73-69a0be7a097e",
            "category": "Rent or home/mortgage payment",
            "monthlyAmount": 1390,
            "notes": ""
          },
          {
            "id": "expense-37742e9a-e8c5-441d-8518-9a7011e39eb4",
            "category": "Electricity, heat, natural gas",
            "monthlyAmount": 165,
            "notes": ""
          },
          {
            "id": "expense-f1838a37-009a-4af3-8ab1-71fbd8d3de85",
            "category": "Phone, cell, internet, satellite & cable",
            "monthlyAmount": 155,
            "notes": ""
          },
          {
            "id": "expense-4d4bbb6b-4ff2-44b6-908f-7f7d00eb0560",
            "category": "Food & housekeeping supplies",
            "monthlyAmount": 540,
            "notes": ""
          },
          {
            "id": "expense-f26ef7ec-048b-4213-a424-a426cefe491c",
            "category": "Medical & dental expenses",
            "monthlyAmount": 95,
            "notes": ""
          },
          {
            "id": "expense-ed7b6c3b-c5c9-4dd3-84b8-95b310b930f4",
            "category": "Transportation",
            "monthlyAmount": 385,
            "notes": ""
          },
          {
            "id": "expense-adfeb3e0-02c2-4683-b0cd-3248f8519bdb",
            "category": "Vehicle insurance",
            "monthlyAmount": 148,
            "notes": ""
          }
        ],
        "sofaEvents": [],
        "petitionFlags": {
          "evictionJudgment": "No",
          "hazardousProperty": "No",
          "hazardousPropertyAddress": "",
          "hazardousPropertyCity": "",
          "hazardousPropertyDescription": "",
          "hazardousPropertyImmediateReason": "",
          "hazardousPropertyState": "",
          "hazardousPropertyStreet2": "",
          "hazardousPropertyZipCode": "",
          "rentsResidence": "Yes",
          "soleProprietor": "Yes",
          "soleProprietorBusinessCity": "",
          "soleProprietorBusinessName": "Lina Morris delivery work",
          "soleProprietorBusinessState": "",
          "soleProprietorBusinessStreet": "",
          "soleProprietorBusinessType": "Gig delivery",
          "soleProprietorBusinessUnit": "",
          "soleProprietorBusinessZipCode": ""
        },
        "chapter7": {
          "meansTestStatus": "Needs six-month income total",
          "medianIncomeState": "Colorado",
          "estimatedMonthlyIncome": 3850,
          "securedPropertyIntent": "Keep paid-off vehicle.",
          "priorBankruptcyDischarge": "",
          "assetDistributionEstimate": "Likely no-asset based on entered values; exemption review still needed."
        },
        "chapter13": {
          "planMonths": 0,
          "proposedMonthlyPayment": 0,
          "priorityClaimsEstimate": 0,
          "arrearsCureEstimate": 0,
          "disposableIncomeNotes": ""
        },
        "documents": [
          {
            "id": "document-9cd11869-b5d6-41f2-8d32-45f045e98412",
            "name": "Driver's license",
            "category": "Identity",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-575bfe02-e0dc-4903-809b-80a0a748b534",
            "name": "Social Security card, W-2, or 1099",
            "category": "Identity",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-eb15442a-5c81-4152-9c6c-8e2d2b0fe665",
            "name": "Tax return - last year",
            "category": "Taxes",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-b6ff57b3-00a6-4577-9234-0861d4ee5106",
            "name": "Tax return - two years ago",
            "category": "Taxes",
            "status": "needed",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": []
          },
          {
            "id": "document-440cee51-80eb-437f-a225-f43028a37d7b",
            "name": "Pay stubs - last 6 months",
            "category": "Income",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-c1f94af6-e424-4ba6-a0a9-46774e109023",
            "name": "Bank statements - last 6 months",
            "category": "Banking",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-a43fc422-8565-4b73-99f8-9e85454aae66",
            "name": "Bank or financial account statements",
            "category": "Assets",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-d93bd965-d592-4634-b1c6-a345065cf4da",
            "name": "Statements for all debts",
            "category": "Debt",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-b21871a4-4d8d-4413-a39c-25a092b81927",
            "name": "Attorney / collector letters",
            "category": "Debt",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-64db9273-05b4-4a0e-bf07-2def94ab5674",
            "name": "Court paperwork",
            "category": "Financial affairs",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-f660a647-e0b0-4d1f-88dc-75c0e220745a",
            "name": "Pre-bankruptcy counseling certificate",
            "category": "Required to file",
            "status": "needed",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": []
          }
        ],
        "financialAffairs": {
          "prior-addresses": {
            "answer": "Yes",
            "entries": [
              {
                "id": "fa-entry-30ae8799-bf7e-4d90-b24f-74546e011f6a",
                "fields": {
                  "address": "1400 North Ogden Street, Denver, CO 80218",
                  "dates": "2022-09 to 2024-02"
                }
              }
            ],
            "fields": {},
            "selected": []
          },
          "community-property-state": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "job-or-business-income": {
            "answer": "Yes",
            "entries": [],
            "fields": {},
            "selected": [
              "Wages, commissions, bonuses, or tips",
              "Self-employment or business income"
            ]
          },
          "other-income": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "creditor-payments-90-days": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "insider-debt-payments": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "insider-benefit-transfer": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "lawsuits": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "property-taken": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "setoff": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "receiver-property": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "gifts": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "charitable-gifts": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "losses": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "bankruptcy-consult-payments": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "creditor-help-payments": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "property-transfers": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "asset-protection-transfer": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "closed-accounts": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "safe-deposit-box": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "storage-unit": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "property-for-others": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "environmental-liability-notice": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "hazardous-material-release": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "environmental-proceeding": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "business-connections": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "business-financial-statements": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          }
        }
      },
      "packageId": "bkfl-demo-lina-morris-ch7-renter",
      "readiness": {
        "documentsReady": 9,
        "documentsRequired": 11,
        "fieldsFilled": 26,
        "fieldsRequired": 27,
        "reviewFlagCount": 3,
        "status": "needs-client-action"
      },
      "reviewFlags": [
        {
          "id": "income-Six-month income is missing",
          "severity": "warning",
          "sectionId": "income",
          "title": "Six-month income is missing",
          "detail": "Means-test intake needs six-month totals before attorney review."
        },
        {
          "id": "documents-Document requests are still open",
          "severity": "info",
          "sectionId": "documents",
          "title": "Document requests are still open",
          "detail": "Use the checklist to track pay advices, tax returns, IDs, statements, and case-specific backups."
        },
        {
          "id": "debts-Unsecured debt captured",
          "severity": "info",
          "sectionId": "debts",
          "title": "Unsecured debt captured",
          "detail": "$23,800 in unsecured claims is recorded for review."
        }
      ],
      "schemaVersion": 1,
      "source": {
        "branch": "Jimmy",
        "scenarioId": "lina-morris-ch7-renter",
        "system": "BK FastLane Intake"
      },
      "submittedAt": "2026-07-13T17:05:44.989Z"
    },
    {
      "completion": {
        "documentCompletion": {
          "applicableRequired": 11,
          "receivedRequired": 9
        },
        "emailDraft": {
          "bodySnapshot": "Hi Kevin,\n\nWe reviewed your BK FastLane intake entry and found a few items that still need your attention before the attorney can use the file efficiently.\n\n1. Please complete: Other names used.\n2. Please complete: Spouse Social Security number.\n3. Please upload: Bank statements - last 6 months.\n4. Please upload: Pre-bankruptcy counseling certificate.\n\nYou do not need to calculate legal conclusions. Just enter your best information and upload the requested documents when available.\n\nReturn to your intake: https://jimmydanol.github.io/bkfl-crm-lite/intake-demo.html?packageId=bkfl-demo-kevin-priya-shah-ch13\n\nThank you,\nBK FastLane intake team",
          "deliveryMode": "simulation",
          "intakeResumeUrl": "https://jimmydanol.github.io/bkfl-crm-lite/intake-demo.html?packageId=bkfl-demo-kevin-priya-shah-ch13",
          "recipient": "kevin.shah.fake@example.test",
          "status": "pending_approval",
          "subject": "BK FastLane reminder: 4 intake items still needed"
        },
        "events": [],
        "fieldCompletion": {
          "applicableRequired": 27,
          "enteredRequired": 27,
          "percent": 100
        },
        "intakeResumeUrl": "https://jimmydanol.github.io/bkfl-crm-lite/intake-demo.html?packageId=bkfl-demo-kevin-priya-shah-ch13",
        "missingItems": [
          {
            "canonicalPath": "matter.debtors[0].otherNames",
            "clientInstruction": "Please complete: Other names used.",
            "essential": true,
            "id": "missing-log-start.debtor.otherNames",
            "kind": "field",
            "label": "Other names used",
            "priority": "high"
          },
          {
            "canonicalPath": "matter.debtors[1].socialSecurityNumber",
            "clientInstruction": "Please complete: Spouse Social Security number.",
            "essential": true,
            "id": "missing-log-start.debtor2.socialSecurityNumber",
            "kind": "field",
            "label": "Spouse Social Security number",
            "priority": "high"
          },
          {
            "canonicalPath": "matter.documents[name='Bank statements - last 6 months']",
            "clientInstruction": "Please upload: Bank statements - last 6 months.",
            "essential": true,
            "id": "document-Bank statements - last 6 months",
            "kind": "document",
            "label": "Bank statements - last 6 months",
            "priority": "medium"
          },
          {
            "canonicalPath": "matter.documents[name='Pre-bankruptcy counseling certificate']",
            "clientInstruction": "Please upload: Pre-bankruptcy counseling certificate.",
            "essential": true,
            "id": "document-Pre-bankruptcy counseling certificate",
            "kind": "document",
            "label": "Pre-bankruptcy counseling certificate",
            "priority": "medium"
          }
        ],
        "percent": 92,
        "revision": 1,
        "status": "needs_client_action"
      },
      "demo": true,
      "generatedAt": "2026-07-13T17:05:44.989Z",
      "matter": {
        "id": "fake-matter-kevin-priya-shah-ch13",
        "title": "Kevin and Priya Shah fake client-entered Chapter 13 intake",
        "chapter": "13",
        "status": "review",
        "filingState": "CO",
        "district": "District of Colorado",
        "clientGoals": "Stop foreclosure, keep house and truck, handle recent tax debt.",
        "urgentConcerns": "Foreclosure sale date notice received, but exact sale date was not entered.",
        "priorBankruptcyFiled": "Yes",
        "priorBankruptcyDetails": "Kevin filed Chapter 7 in 2015 in Colorado; case number not entered.",
        "hasDependents": "Yes",
        "spouseFilingJointly": "Yes",
        "isEmployed": "Yes",
        "hasOtherHouseholdIncome": "Yes",
        "personalInfoSubmittedAt": "2026-07-13T17:05:44.989Z",
        "createdAt": "2026-07-13T17:05:45.872Z",
        "updatedAt": "2026-07-13T17:05:44.989Z",
        "debtors": [
          {
            "id": "debtor-a673bd3d-202c-43b6-aaab-f027600413a7",
            "firstName": "Kevin",
            "middleName": "Arun",
            "lastName": "Shah",
            "otherNames": "",
            "email": "kevin.shah.fake@example.test",
            "phone": "(720) 555-0199",
            "ssnLast4": "7211",
            "socialSecurityNumber": "555-66-7211",
            "address": "2448 South Quintero Way",
            "city": "Aurora",
            "state": "CO",
            "zipCode": "80013",
            "county": "Arapahoe",
            "mailingAddressDifferent": false,
            "dateOfBirth": "06/12/1984"
          },
          {
            "id": "debtor-ef70ae40-bfed-4b56-be41-a9efb4194765",
            "firstName": "Priya",
            "middleName": "Meera",
            "lastName": "Shah",
            "otherNames": "Priya Meera Patel",
            "email": "priya.shah.fake@example.test",
            "phone": "(720) 555-0198",
            "ssnLast4": "",
            "socialSecurityNumber": "",
            "address": "2448 South Quintero Way",
            "city": "Aurora",
            "state": "CO",
            "zipCode": "80013",
            "county": "Arapahoe",
            "mailingAddressDifferent": false,
            "dateOfBirth": "01/26/1987"
          }
        ],
        "household": {
          "householdSize": 4,
          "maritalStatus": "Married",
          "dependents": [
            {
              "id": "dependent-974f3c03-4a7c-43d9-b1eb-c134745754cd",
              "name": "Fake minor child A",
              "age": "12",
              "relationship": "Child",
              "livesWithDebtor": "Yes"
            },
            {
              "id": "dependent-1fe64ad3-ae41-426d-a5c8-a27ba0492605",
              "name": "Fake minor child B",
              "age": "8",
              "relationship": "Child",
              "livesWithDebtor": "Yes"
            }
          ]
        },
        "assets": [
          {
            "id": "asset-56d78c34-caae-4846-99bc-985465162b1d",
            "category": "Real estate",
            "description": "Primary residence",
            "estimatedValue": 462000,
            "lienAmount": 398000,
            "exemptionNote": "",
            "keepIntent": "Keep and cure arrears through plan",
            "propertyCity": "Aurora",
            "propertyState": "CO",
            "propertyStreet": "2448 South Quintero Way",
            "propertyZipCode": "80013"
          },
          {
            "id": "asset-d99ed224-416b-41b6-a486-5f194ad20e67",
            "category": "Vehicle",
            "description": "2019 Ford F-150",
            "estimatedValue": 28200,
            "lienAmount": 25100,
            "exemptionNote": "",
            "financingStatus": "Financed",
            "keepIntent": "Keep",
            "make": "Ford",
            "mileage": "81000",
            "model": "F-150",
            "year": "2019"
          },
          {
            "id": "asset-14127aa9-874f-44c5-822c-284d2f6070a4",
            "category": "Bank or financial account",
            "description": "Chase joint checking",
            "estimatedValue": 2150,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "Checking"
          },
          {
            "id": "asset-96d6bcec-4bda-4ed4-948b-9a7270d21c27",
            "category": "Retirement or pension account",
            "description": "Kevin 401(k)",
            "estimatedValue": 69000,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "401(k)"
          }
        ],
        "debts": [
          {
            "id": "fake-debt-kevin-priya-shah-ch13-1",
            "type": "secured",
            "creditor": "Frontier Mortgage Servicing",
            "amount": 398000,
            "collateral": "Primary residence",
            "arrears": 21400,
            "notes": "Foreclosure sale date not entered by debtor."
          },
          {
            "id": "fake-debt-kevin-priya-shah-ch13-2",
            "type": "secured",
            "creditor": "Ford Credit",
            "amount": 25100,
            "collateral": "2019 Ford F-150",
            "arrears": 820,
            "notes": "One payment behind."
          },
          {
            "id": "fake-debt-kevin-priya-shah-ch13-3",
            "type": "priority",
            "creditor": "IRS",
            "amount": 7400,
            "collateral": "",
            "arrears": 0,
            "notes": "Recent federal tax debt; verify transcript and priority amount."
          },
          {
            "id": "fake-debt-kevin-priya-shah-ch13-4",
            "type": "unsecured",
            "creditor": "Credit cards and personal loans",
            "amount": 33000,
            "collateral": "",
            "arrears": 0,
            "notes": "Debtor entered as group estimate."
          }
        ],
        "contracts": [],
        "codebtors": [],
        "income": [
          {
            "id": "income-bcc5f6c9-78b7-477c-9367-40c20e0114a3",
            "source": "Employment",
            "employer": "Metro Facilities Group",
            "amount": 7100,
            "frequency": "Biweekly",
            "sixMonthTotal": 42600
          },
          {
            "id": "income-edc41902-3b50-42a0-9959-cbb2e8739467",
            "source": "Employment",
            "employer": "Aurora Unified Schools",
            "amount": 3900,
            "frequency": "Twice monthly",
            "sixMonthTotal": 23400
          }
        ],
        "payStubIncomeEvidence": [],
        "expenses": [
          {
            "id": "expense-40de735d-9072-4e9d-9a44-664b7c649975",
            "category": "Mortgage payment",
            "monthlyAmount": 2680,
            "notes": ""
          },
          {
            "id": "expense-06ee1bad-8279-4cd2-b566-4808e8210519",
            "category": "Electricity, heat, natural gas",
            "monthlyAmount": 310,
            "notes": ""
          },
          {
            "id": "expense-dd96787b-e720-435f-9291-a1ab209cd09f",
            "category": "Water, sewer, garbage collection",
            "monthlyAmount": 115,
            "notes": ""
          },
          {
            "id": "expense-a8269490-abd7-4d7b-8a15-7b7268200a33",
            "category": "Phone, cell, internet, satellite & cable",
            "monthlyAmount": 245,
            "notes": ""
          },
          {
            "id": "expense-4107b4b9-8051-48f5-b7cc-3602bd15efb3",
            "category": "Food & housekeeping supplies",
            "monthlyAmount": 925,
            "notes": ""
          },
          {
            "id": "expense-9bd238df-bb46-4395-9440-0f1a8e850382",
            "category": "Childcare & children education",
            "monthlyAmount": 640,
            "notes": ""
          },
          {
            "id": "expense-8f6ab41f-d3fb-4e05-b5fe-9ea4eb85e83d",
            "category": "Transportation",
            "monthlyAmount": 560,
            "notes": ""
          },
          {
            "id": "expense-8fed6cbc-2f71-4b6e-912c-cabfc2af9170",
            "category": "Vehicle payments",
            "monthlyAmount": 610,
            "notes": ""
          },
          {
            "id": "expense-aed8d8c9-bfb7-488e-a15b-2d2469e96d50",
            "category": "Vehicle insurance",
            "monthlyAmount": 220,
            "notes": ""
          },
          {
            "id": "expense-8229217b-db9b-4df8-82c8-5734d0165816",
            "category": "Taxes not deducted from wages",
            "monthlyAmount": 210,
            "notes": ""
          }
        ],
        "sofaEvents": [],
        "petitionFlags": {
          "evictionJudgment": "No",
          "hazardousProperty": "No",
          "hazardousPropertyAddress": "",
          "hazardousPropertyCity": "",
          "hazardousPropertyDescription": "",
          "hazardousPropertyImmediateReason": "",
          "hazardousPropertyState": "",
          "hazardousPropertyStreet2": "",
          "hazardousPropertyZipCode": "",
          "rentsResidence": "No",
          "soleProprietor": "No",
          "soleProprietorBusinessCity": "",
          "soleProprietorBusinessName": "",
          "soleProprietorBusinessState": "",
          "soleProprietorBusinessStreet": "",
          "soleProprietorBusinessType": "",
          "soleProprietorBusinessUnit": "",
          "soleProprietorBusinessZipCode": ""
        },
        "chapter7": {
          "meansTestStatus": "",
          "medianIncomeState": "",
          "estimatedMonthlyIncome": 0,
          "securedPropertyIntent": "",
          "priorBankruptcyDischarge": "",
          "assetDistributionEstimate": ""
        },
        "chapter13": {
          "planMonths": 60,
          "proposedMonthlyPayment": 1150,
          "priorityClaimsEstimate": 7400,
          "arrearsCureEstimate": 21400,
          "disposableIncomeNotes": "Entered budget suggests feasibility, but payroll proof and tax claims are missing."
        },
        "documents": [
          {
            "id": "document-6fbac7e4-5399-41fc-9480-4b020d9fd17b",
            "name": "Driver's license",
            "category": "Identity",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-da4dd0f5-a637-4ce2-9441-921f6a3339a2",
            "name": "Social Security card, W-2, or 1099",
            "category": "Identity",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-d7ef33ac-8663-4d1f-9e2c-c2034b717ccb",
            "name": "Tax return - last year",
            "category": "Taxes",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-67550e88-8d45-4bac-b9d6-8ab9ea739661",
            "name": "Tax return - two years ago",
            "category": "Taxes",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-23915707-a495-44f7-b8ad-077fb940c626",
            "name": "Pay stubs - last 6 months",
            "category": "Income",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-50483687-3fac-42c7-a248-1aafdf556093",
            "name": "Bank statements - last 6 months",
            "category": "Banking",
            "status": "needed",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": []
          },
          {
            "id": "document-ca90d64b-b1db-491a-88f2-817d40e6c5b6",
            "name": "Bank or financial account statements",
            "category": "Assets",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-5ff090ca-037e-410d-b2ef-64574d82ee3b",
            "name": "Statements for all debts",
            "category": "Debt",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-c48f6f48-b6c7-4cc7-9da1-06c2c32962bd",
            "name": "Attorney / collector letters",
            "category": "Debt",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-c62606d8-d897-4504-83e1-e4af4416d8f5",
            "name": "Court paperwork",
            "category": "Financial affairs",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-b92280e0-49d9-46cf-91ad-5fb32e1c739c",
            "name": "Pre-bankruptcy counseling certificate",
            "category": "Required to file",
            "status": "needed",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": []
          }
        ],
        "financialAffairs": {
          "prior-addresses": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "community-property-state": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "job-or-business-income": {
            "answer": "Yes",
            "entries": [],
            "fields": {},
            "selected": [
              "Wages, commissions, bonuses, or tips"
            ]
          },
          "other-income": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "creditor-payments-90-days": {
            "answer": "Yes",
            "entries": [
              {
                "id": "fa-entry-300fc4f0-bc1a-4a4d-9b8f-2304bd8006d8",
                "fields": {
                  "creditor": "Frontier Mortgage Servicing",
                  "paymentDates": "2026-05 and 2026-06",
                  "totalPaid": "1800"
                }
              }
            ],
            "fields": {},
            "selected": []
          },
          "insider-debt-payments": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "insider-benefit-transfer": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "lawsuits": {
            "answer": "Yes",
            "entries": [
              {
                "id": "fa-entry-10182234-b0fa-499c-8ebd-9b02cd2c169e",
                "fields": {
                  "caseNumber": "",
                  "caseTitle": "Frontier Mortgage Servicing foreclosure",
                  "courtOrAgency": "Arapahoe County Public Trustee",
                  "status": "Sale noticed, exact sale date missing"
                }
              }
            ],
            "fields": {},
            "selected": []
          },
          "property-taken": {
            "answer": "Yes",
            "entries": [
              {
                "id": "fa-entry-23ab23db-e7e2-4e2e-ae8d-84de476ed122",
                "fields": {
                  "creditor": "Frontier Mortgage Servicing",
                  "date": "",
                  "property": "Home foreclosure started",
                  "value": "Unknown"
                }
              }
            ],
            "fields": {},
            "selected": []
          },
          "setoff": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "receiver-property": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "gifts": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "charitable-gifts": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "losses": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "bankruptcy-consult-payments": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "creditor-help-payments": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "property-transfers": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "asset-protection-transfer": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "closed-accounts": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "safe-deposit-box": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "storage-unit": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "property-for-others": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "environmental-liability-notice": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "hazardous-material-release": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "environmental-proceeding": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "business-connections": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "business-financial-statements": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          }
        }
      },
      "packageId": "bkfl-demo-kevin-priya-shah-ch13",
      "readiness": {
        "documentsReady": 9,
        "documentsRequired": 11,
        "fieldsFilled": 27,
        "fieldsRequired": 27,
        "reviewFlagCount": 4,
        "status": "needs-client-action"
      },
      "reviewFlags": [
        {
          "id": "basics-Debtor identity is incomplete",
          "severity": "critical",
          "sectionId": "basics",
          "title": "Debtor identity is incomplete",
          "detail": "At least one debtor is missing name or SSN last-four intake data."
        },
        {
          "id": "documents-Document requests are still open",
          "severity": "info",
          "sectionId": "documents",
          "title": "Document requests are still open",
          "detail": "Use the checklist to track pay advices, tax returns, IDs, statements, and case-specific backups."
        },
        {
          "id": "chapter13-Arrears need plan treatment",
          "severity": "info",
          "sectionId": "chapter13",
          "title": "Arrears need plan treatment",
          "detail": "$22,220 in recorded arrears should be reconciled with plan treatment."
        },
        {
          "id": "debts-Unsecured debt captured",
          "severity": "info",
          "sectionId": "debts",
          "title": "Unsecured debt captured",
          "detail": "$33,000 in unsecured claims is recorded for review."
        }
      ],
      "schemaVersion": 1,
      "source": {
        "branch": "Jimmy",
        "scenarioId": "kevin-priya-shah-ch13",
        "system": "BK FastLane Intake"
      },
      "submittedAt": "2026-07-13T17:05:44.989Z"
    },
    {
      "completion": {
        "documentCompletion": {
          "applicableRequired": 11,
          "receivedRequired": 9
        },
        "emailDraft": {
          "bodySnapshot": "Hi Rosa,\n\nWe reviewed your BK FastLane intake entry and found a few items that still need your attention before the attorney can use the file efficiently.\n\n1. Please return to Personal Info and answer: Date of birth.\n2. Please enter the creditor or collection agency name for the $4,300 debt.\n3. Please complete: Prior bankruptcy details.\n4. Please upload: Bank or financial account statements.\n5. Please upload: Social Security card, W-2, or 1099.\n\nYou do not need to calculate legal conclusions. Just enter your best information and upload the requested documents when available.\n\nReturn to your intake: https://jimmydanol.github.io/bkfl-crm-lite/intake-demo.html?packageId=bkfl-demo-rosa-whitaker-ch7-retired\n\nThank you,\nBK FastLane intake team",
          "deliveryMode": "simulation",
          "intakeResumeUrl": "https://jimmydanol.github.io/bkfl-crm-lite/intake-demo.html?packageId=bkfl-demo-rosa-whitaker-ch7-retired",
          "recipient": "rosa.whitaker.fake@example.test",
          "status": "pending_approval",
          "subject": "BK FastLane reminder: 5 intake items still needed"
        },
        "events": [],
        "fieldCompletion": {
          "applicableRequired": 27,
          "enteredRequired": 26,
          "percent": 96
        },
        "intakeResumeUrl": "https://jimmydanol.github.io/bkfl-crm-lite/intake-demo.html?packageId=bkfl-demo-rosa-whitaker-ch7-retired",
        "missingItems": [
          {
            "canonicalPath": "matter.debtors[0].dateOfBirth",
            "clientInstruction": "Please return to Personal Info and answer: Date of birth.",
            "essential": true,
            "id": "schema-start.debtor.dateOfBirth",
            "kind": "field",
            "label": "Date of birth",
            "priority": "high"
          },
          {
            "canonicalPath": "matter.debts[id='fake-debt-rosa-whitaker-ch7-retired-2'].creditor",
            "clientInstruction": "Please enter the creditor or collection agency name for the $4,300 debt.",
            "essential": true,
            "id": "debt-creditor-fake-debt-rosa-whitaker-ch7-retired-2",
            "kind": "field",
            "label": "Debt creditor name missing",
            "priority": "high"
          },
          {
            "canonicalPath": "matter.priorBankruptcyDetails",
            "clientInstruction": "Please complete: Prior bankruptcy details.",
            "essential": true,
            "id": "missing-log-start.priorBankruptcyDetails",
            "kind": "field",
            "label": "Prior bankruptcy details",
            "priority": "high"
          },
          {
            "canonicalPath": "matter.documents[name='Bank or financial account statements']",
            "clientInstruction": "Please upload: Bank or financial account statements.",
            "essential": true,
            "id": "document-Bank or financial account statements",
            "kind": "document",
            "label": "Bank or financial account statements",
            "priority": "medium"
          },
          {
            "canonicalPath": "matter.documents[name='Social Security card, W-2, or 1099']",
            "clientInstruction": "Please upload: Social Security card, W-2, or 1099.",
            "essential": true,
            "id": "document-Social Security card, W-2, or 1099",
            "kind": "document",
            "label": "Social Security card, W-2, or 1099",
            "priority": "medium"
          }
        ],
        "percent": 92,
        "revision": 1,
        "status": "needs_client_action"
      },
      "demo": true,
      "generatedAt": "2026-07-13T17:05:44.989Z",
      "matter": {
        "id": "fake-matter-rosa-whitaker-ch7-retired",
        "title": "Rosa Whitaker fake client-entered Chapter 7 intake",
        "chapter": "7",
        "status": "review",
        "filingState": "UT",
        "district": "District of Utah",
        "clientGoals": "Discharge credit cards and old medical bills while protecting retirement account.",
        "urgentConcerns": "Automatic debit from QuickCash is overdrawing her account.",
        "priorBankruptcyFiled": "No",
        "priorBankruptcyDetails": "",
        "hasDependents": "No",
        "spouseFilingJointly": "No",
        "isEmployed": "No",
        "hasOtherHouseholdIncome": "Yes",
        "personalInfoSubmittedAt": "2026-07-13T17:05:44.989Z",
        "createdAt": "2026-07-13T17:05:45.890Z",
        "updatedAt": "2026-07-13T17:05:44.989Z",
        "debtors": [
          {
            "id": "debtor-917e0a24-5b87-4421-9a78-312d99ec2e37",
            "firstName": "Rosa",
            "middleName": "Elaine",
            "lastName": "Whitaker",
            "otherNames": "Rosa E. Kemp",
            "email": "rosa.whitaker.fake@example.test",
            "phone": "(801) 555-0161",
            "ssnLast4": "8324",
            "socialSecurityNumber": "666-77-8324",
            "address": "619 North 300 West Apt 11",
            "city": "Salt Lake City",
            "state": "UT",
            "zipCode": "84103",
            "county": "Salt Lake",
            "mailingAddressDifferent": false,
            "dateOfBirth": ""
          }
        ],
        "household": {
          "householdSize": 1,
          "maritalStatus": "Widowed",
          "dependents": []
        },
        "assets": [
          {
            "id": "asset-b1aea0ab-6be4-4efe-ad2a-c9d733d7848f",
            "category": "Bank or financial account",
            "description": "Wells Fargo checking",
            "estimatedValue": 780,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "Checking"
          },
          {
            "id": "asset-5c32af8c-9703-4bc0-b8b7-8453a94be710",
            "category": "Bank or financial account",
            "description": "Wells Fargo savings",
            "estimatedValue": 1100,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "Savings"
          },
          {
            "id": "asset-276bb038-8d5d-4d14-8792-568b476d09b9",
            "category": "Retirement or pension account",
            "description": "Small rollover IRA",
            "estimatedValue": 14600,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "IRA"
          },
          {
            "id": "asset-49b09c99-0a12-49ff-b725-53fb4ce4942f",
            "category": "Household goods and furnishings",
            "description": "Apartment furniture, clothing, television, mobility equipment",
            "estimatedValue": 3600,
            "lienAmount": 0,
            "exemptionNote": ""
          }
        ],
        "debts": [
          {
            "id": "fake-debt-rosa-whitaker-ch7-retired-1",
            "type": "unsecured",
            "creditor": "Capital One",
            "amount": 11100,
            "collateral": "",
            "arrears": 0,
            "notes": "Debtor did not enter account number or collector details."
          },
          {
            "id": "fake-debt-rosa-whitaker-ch7-retired-2",
            "type": "unsecured",
            "creditor": "",
            "amount": 4300,
            "collateral": "",
            "arrears": 0,
            "notes": "Medical collector letter; creditor name not entered."
          },
          {
            "id": "fake-debt-rosa-whitaker-ch7-retired-3",
            "type": "unsecured",
            "creditor": "QuickCash Installment Loans",
            "amount": 2600,
            "collateral": "",
            "arrears": 0,
            "notes": "Possible high-interest loan; payment drafting from bank account."
          }
        ],
        "contracts": [],
        "codebtors": [],
        "income": [
          {
            "id": "income-73be23fc-9af1-492b-98be-f1a3a1006bc4",
            "source": "Social Security / public benefits",
            "employer": "Social Security Administration",
            "amount": 1980,
            "frequency": "Monthly",
            "sixMonthTotal": 11880
          },
          {
            "id": "income-7fec32b7-c64b-4051-89ba-faec0d4e9fb1",
            "source": "Pension / retirement",
            "employer": "Former employer pension",
            "amount": 500,
            "frequency": "Monthly",
            "sixMonthTotal": 3000
          }
        ],
        "payStubIncomeEvidence": [],
        "expenses": [
          {
            "id": "expense-7105c1dc-d5eb-4b9e-9868-3133f5533cae",
            "category": "Rent or home/mortgage payment",
            "monthlyAmount": 1180,
            "notes": ""
          },
          {
            "id": "expense-ab25ad9d-5797-4f5d-86b3-83a13c2cef5f",
            "category": "Electricity, heat, natural gas",
            "monthlyAmount": 120,
            "notes": ""
          },
          {
            "id": "expense-16ebaece-5047-4368-9e05-d54beb2d7edc",
            "category": "Phone, cell, internet, satellite & cable",
            "monthlyAmount": 135,
            "notes": ""
          },
          {
            "id": "expense-ccf4f7f2-e9f4-4ad4-82b5-3de591b6d915",
            "category": "Food & housekeeping supplies",
            "monthlyAmount": 425,
            "notes": ""
          },
          {
            "id": "expense-091bf57e-6123-4dfb-9aaf-4349d607dc8a",
            "category": "Medical & dental expenses",
            "monthlyAmount": 220,
            "notes": ""
          },
          {
            "id": "expense-d9cfd8e8-7b94-4ceb-8ee7-207807969119",
            "category": "Transportation",
            "monthlyAmount": 160,
            "notes": ""
          },
          {
            "id": "expense-ef4f22a9-20a8-42a3-9f08-6ad06da8331e",
            "category": "Other expenses",
            "monthlyAmount": 95,
            "notes": "Prescription delivery and mobility supplies"
          }
        ],
        "sofaEvents": [],
        "petitionFlags": {
          "evictionJudgment": "No",
          "hazardousProperty": "No",
          "hazardousPropertyAddress": "",
          "hazardousPropertyCity": "",
          "hazardousPropertyDescription": "",
          "hazardousPropertyImmediateReason": "",
          "hazardousPropertyState": "",
          "hazardousPropertyStreet2": "",
          "hazardousPropertyZipCode": "",
          "rentsResidence": "Yes",
          "soleProprietor": "No",
          "soleProprietorBusinessCity": "",
          "soleProprietorBusinessName": "",
          "soleProprietorBusinessState": "",
          "soleProprietorBusinessStreet": "",
          "soleProprietorBusinessType": "",
          "soleProprietorBusinessUnit": "",
          "soleProprietorBusinessZipCode": ""
        },
        "chapter7": {
          "meansTestStatus": "Likely fixed-income review",
          "medianIncomeState": "Utah",
          "estimatedMonthlyIncome": 2480,
          "securedPropertyIntent": "No secured property listed.",
          "priorBankruptcyDischarge": "",
          "assetDistributionEstimate": "Low-value non-retirement property; exemption review still required."
        },
        "chapter13": {
          "planMonths": 0,
          "proposedMonthlyPayment": 0,
          "priorityClaimsEstimate": 0,
          "arrearsCureEstimate": 0,
          "disposableIncomeNotes": ""
        },
        "documents": [
          {
            "id": "document-8b11af1a-1a41-466f-80f2-5e1e442649c5",
            "name": "Driver's license",
            "category": "Identity",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-c028b6b0-930e-4387-babb-e3e903c8f95b",
            "name": "Social Security card, W-2, or 1099",
            "category": "Identity",
            "status": "needed",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": []
          },
          {
            "id": "document-efe00501-dd3a-4d83-89e6-3b290bc0216c",
            "name": "Tax return - last year",
            "category": "Taxes",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-62192288-877d-4051-bf6b-74b48008eb77",
            "name": "Tax return - two years ago",
            "category": "Taxes",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-b8eb399f-20fb-4d8b-bf07-d7ed95986029",
            "name": "Pay stubs - last 6 months",
            "category": "Income",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-1b962b65-a629-4f52-afbb-08015a1147bf",
            "name": "Bank statements - last 6 months",
            "category": "Banking",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-e1cccd88-d753-436a-942e-156a19325150",
            "name": "Bank or financial account statements",
            "category": "Assets",
            "status": "needed",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": []
          },
          {
            "id": "document-7375b510-4c2a-4508-9867-5002de771d69",
            "name": "Statements for all debts",
            "category": "Debt",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-b2f0ca16-3bec-4831-ab02-c2f53a8e791b",
            "name": "Attorney / collector letters",
            "category": "Debt",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-b8c86f43-01bb-4bcd-9a5e-7205dfaaf60b",
            "name": "Court paperwork",
            "category": "Financial affairs",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-32ebb551-3487-4148-9885-a38f659b2346",
            "name": "Pre-bankruptcy counseling certificate",
            "category": "Required to file",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          }
        ],
        "financialAffairs": {
          "prior-addresses": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "community-property-state": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "job-or-business-income": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "other-income": {
            "answer": "Yes",
            "entries": [
              {
                "id": "fa-entry-b90b6978-bcbb-4a12-b825-69ee0ab3a916",
                "fields": {
                  "amount": "2480",
                  "frequency": "Monthly",
                  "source": "Social Security retirement and pension"
                }
              }
            ],
            "fields": {},
            "selected": []
          },
          "creditor-payments-90-days": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "insider-debt-payments": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "insider-benefit-transfer": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "lawsuits": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "property-taken": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "setoff": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "receiver-property": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "gifts": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "charitable-gifts": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "losses": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "bankruptcy-consult-payments": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "creditor-help-payments": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "property-transfers": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "asset-protection-transfer": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "closed-accounts": {
            "answer": "Yes",
            "entries": [
              {
                "id": "fa-entry-50087bc4-55d5-4d3a-9348-a8ff31a64a18",
                "fields": {
                  "account": "Mountain America Credit Union checking",
                  "closedDate": "2025-12",
                  "institution": "Mountain America Credit Union"
                }
              }
            ],
            "fields": {},
            "selected": []
          },
          "safe-deposit-box": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "storage-unit": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "property-for-others": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "environmental-liability-notice": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "hazardous-material-release": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "environmental-proceeding": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "business-connections": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "business-financial-statements": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          }
        }
      },
      "packageId": "bkfl-demo-rosa-whitaker-ch7-retired",
      "readiness": {
        "documentsReady": 9,
        "documentsRequired": 11,
        "fieldsFilled": 26,
        "fieldsRequired": 27,
        "reviewFlagCount": 2,
        "status": "needs-client-action"
      },
      "reviewFlags": [
        {
          "id": "documents-Document requests are still open",
          "severity": "info",
          "sectionId": "documents",
          "title": "Document requests are still open",
          "detail": "Use the checklist to track pay advices, tax returns, IDs, statements, and case-specific backups."
        },
        {
          "id": "debts-Unsecured debt captured",
          "severity": "info",
          "sectionId": "debts",
          "title": "Unsecured debt captured",
          "detail": "$18,000 in unsecured claims is recorded for review."
        }
      ],
      "schemaVersion": 1,
      "source": {
        "branch": "Jimmy",
        "scenarioId": "rosa-whitaker-ch7-retired",
        "system": "BK FastLane Intake"
      },
      "submittedAt": "2026-07-13T17:05:44.989Z"
    },
    {
      "completion": {
        "documentCompletion": {
          "applicableRequired": 11,
          "receivedRequired": 9
        },
        "emailDraft": {
          "bodySnapshot": "Hi Nolan,\n\nWe reviewed your BK FastLane intake entry and found a few items that still need your attention before the attorney can use the file efficiently.\n\n1. Please return to Personal Info and answer: County.\n2. Please complete: Other names used.\n3. Please complete: Prior bankruptcy details.\n4. Please complete: Weekend delivery apps six-month income total.\n5. Please upload: Pre-bankruptcy counseling certificate.\n6. Please upload: Tax return - last year.\n\nYou do not need to calculate legal conclusions. Just enter your best information and upload the requested documents when available.\n\nReturn to your intake: https://jimmydanol.github.io/bkfl-crm-lite/intake-demo.html?packageId=bkfl-demo-nolan-brooks-ch7-renter\n\nThank you,\nBK FastLane intake team",
          "deliveryMode": "simulation",
          "intakeResumeUrl": "https://jimmydanol.github.io/bkfl-crm-lite/intake-demo.html?packageId=bkfl-demo-nolan-brooks-ch7-renter",
          "recipient": "nolan.brooks.fake@example.test",
          "status": "pending_approval",
          "subject": "BK FastLane reminder: 6 intake items still needed"
        },
        "events": [],
        "fieldCompletion": {
          "applicableRequired": 27,
          "enteredRequired": 26,
          "percent": 96
        },
        "intakeResumeUrl": "https://jimmydanol.github.io/bkfl-crm-lite/intake-demo.html?packageId=bkfl-demo-nolan-brooks-ch7-renter",
        "missingItems": [
          {
            "canonicalPath": "matter.debtors[0].county",
            "clientInstruction": "Please return to Personal Info and answer: County.",
            "essential": true,
            "id": "schema-start.debtor.county",
            "kind": "field",
            "label": "County",
            "priority": "high"
          },
          {
            "canonicalPath": "matter.debtors[0].otherNames",
            "clientInstruction": "Please complete: Other names used.",
            "essential": true,
            "id": "missing-log-start.debtor.otherNames",
            "kind": "field",
            "label": "Other names used",
            "priority": "high"
          },
          {
            "canonicalPath": "matter.priorBankruptcyDetails",
            "clientInstruction": "Please complete: Prior bankruptcy details.",
            "essential": true,
            "id": "missing-log-start.priorBankruptcyDetails",
            "kind": "field",
            "label": "Prior bankruptcy details",
            "priority": "high"
          },
          {
            "canonicalPath": "matter.income[1].sixMonthTotal",
            "clientInstruction": "Please complete: Weekend delivery apps six-month income total.",
            "essential": true,
            "id": "missing-log-income.rows.1.sixMonthTotal",
            "kind": "field",
            "label": "Weekend delivery apps six-month income total",
            "priority": "high"
          },
          {
            "canonicalPath": "matter.documents[name='Pre-bankruptcy counseling certificate']",
            "clientInstruction": "Please upload: Pre-bankruptcy counseling certificate.",
            "essential": true,
            "id": "document-Pre-bankruptcy counseling certificate",
            "kind": "document",
            "label": "Pre-bankruptcy counseling certificate",
            "priority": "medium"
          },
          {
            "canonicalPath": "matter.documents[name='Tax return - last year']",
            "clientInstruction": "Please upload: Tax return - last year.",
            "essential": true,
            "id": "document-Tax return - last year",
            "kind": "document",
            "label": "Tax return - last year",
            "priority": "medium"
          }
        ],
        "percent": 88,
        "revision": 1,
        "status": "needs_client_action"
      },
      "demo": true,
      "generatedAt": "2026-07-13T17:05:44.989Z",
      "matter": {
        "id": "fake-matter-nolan-brooks-ch7-renter",
        "title": "Nolan Brooks fake client-entered Chapter 7 intake",
        "chapter": "7",
        "status": "review",
        "filingState": "CO",
        "district": "District of Colorado",
        "clientGoals": "Stop collection calls and deal with old medical and credit card debt.",
        "urgentConcerns": "A collector called her employer last week.",
        "priorBankruptcyFiled": "No",
        "priorBankruptcyDetails": "",
        "hasDependents": "No",
        "spouseFilingJointly": "No",
        "isEmployed": "Yes",
        "hasOtherHouseholdIncome": "Yes",
        "personalInfoSubmittedAt": "2026-07-13T17:05:44.989Z",
        "createdAt": "2026-07-13T17:05:45.906Z",
        "updatedAt": "2026-07-13T17:05:44.989Z",
        "debtors": [
          {
            "id": "debtor-24fe7b43-0527-4318-926e-9320ae0cfcb7",
            "firstName": "Nolan",
            "middleName": "James",
            "lastName": "Brooks",
            "otherNames": "",
            "email": "nolan.brooks.fake@example.test",
            "phone": "(303) 555-0201",
            "ssnLast4": "3501",
            "socialSecurityNumber": "111-22-3501",
            "address": "1880 Walnut Street Apt 12",
            "city": "Boulder",
            "state": "CO",
            "zipCode": "80302",
            "county": "",
            "mailingAddressDifferent": false,
            "dateOfBirth": "09/12/1985"
          }
        ],
        "household": {
          "householdSize": 1,
          "maritalStatus": "Single",
          "dependents": []
        },
        "assets": [
          {
            "id": "asset-6a0e1e5e-c9e7-40d0-bb4c-f62d8bc9e9c4",
            "category": "Bank or financial account",
            "description": "Canvas Credit Union checking",
            "estimatedValue": 420,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "Checking"
          },
          {
            "id": "asset-88d674fc-f735-42d0-943e-53c0faae6593",
            "category": "Vehicle",
            "description": "2014 Kia Soul",
            "estimatedValue": 5100,
            "lienAmount": 0,
            "exemptionNote": "",
            "financingStatus": "Paid off",
            "keepIntent": "Keep for work transportation",
            "make": "Kia",
            "mileage": "136000",
            "model": "Soul",
            "year": "2014"
          },
          {
            "id": "asset-1e5c39bf-cf2e-4b61-a14f-f44cdc373f5b",
            "category": "Household goods and furnishings",
            "description": "Furniture, laptop, phone, clothes, kitchen items",
            "estimatedValue": 3100,
            "lienAmount": 0,
            "exemptionNote": ""
          }
        ],
        "debts": [
          {
            "id": "fake-debt-nolan-brooks-ch7-renter-1",
            "type": "unsecured",
            "creditor": "Synchrony Bank",
            "amount": 14100,
            "collateral": "",
            "arrears": 0,
            "notes": "Credit card in collections."
          },
          {
            "id": "fake-debt-nolan-brooks-ch7-renter-2",
            "type": "unsecured",
            "creditor": "Rose Medical Center",
            "amount": 9700,
            "collateral": "",
            "arrears": 0,
            "notes": "Medical bill sent to collector."
          },
          {
            "id": "fake-debt-nolan-brooks-ch7-renter-3",
            "type": "priority",
            "creditor": "Colorado Department of Revenue",
            "amount": 1800,
            "collateral": "",
            "arrears": 0,
            "notes": "Older state tax notice; priority status unknown."
          }
        ],
        "contracts": [],
        "codebtors": [],
        "income": [
          {
            "id": "income-e583fdae-f77f-4100-af9a-69664fd2f0d5",
            "source": "Employment",
            "employer": "Denver Dental Supply",
            "amount": 2900,
            "frequency": "Biweekly",
            "sixMonthTotal": 17400
          },
          {
            "id": "income-19db9959-cb47-44c6-a629-747c11d1fbe4",
            "source": "Business income",
            "employer": "Weekend delivery apps",
            "amount": 950,
            "frequency": "Monthly",
            "sixMonthTotal": 0
          }
        ],
        "payStubIncomeEvidence": [],
        "expenses": [
          {
            "id": "expense-81e2b1f8-26ae-4c4e-b9b9-e7ecfa3db224",
            "category": "Rent or home/mortgage payment",
            "monthlyAmount": 1390,
            "notes": ""
          },
          {
            "id": "expense-9a8bfb91-7bfb-4109-9e7d-3836a3b6b280",
            "category": "Electricity, heat, natural gas",
            "monthlyAmount": 165,
            "notes": ""
          },
          {
            "id": "expense-efecab5a-b7d1-45e3-a281-ee77f3790ea5",
            "category": "Phone, cell, internet, satellite & cable",
            "monthlyAmount": 155,
            "notes": ""
          },
          {
            "id": "expense-e333881b-2cf7-4a6f-b41f-a7913bc8b54e",
            "category": "Food & housekeeping supplies",
            "monthlyAmount": 540,
            "notes": ""
          },
          {
            "id": "expense-72307346-5fb1-4a45-a9de-c7a1d7ba9f86",
            "category": "Medical & dental expenses",
            "monthlyAmount": 95,
            "notes": ""
          },
          {
            "id": "expense-52aee045-867e-4992-8d7d-a38048223fee",
            "category": "Transportation",
            "monthlyAmount": 385,
            "notes": ""
          },
          {
            "id": "expense-5abc4fa7-c836-4c08-8006-86f2753efe4e",
            "category": "Vehicle insurance",
            "monthlyAmount": 148,
            "notes": ""
          }
        ],
        "sofaEvents": [],
        "petitionFlags": {
          "evictionJudgment": "No",
          "hazardousProperty": "No",
          "hazardousPropertyAddress": "",
          "hazardousPropertyCity": "",
          "hazardousPropertyDescription": "",
          "hazardousPropertyImmediateReason": "",
          "hazardousPropertyState": "",
          "hazardousPropertyStreet2": "",
          "hazardousPropertyZipCode": "",
          "rentsResidence": "Yes",
          "soleProprietor": "Yes",
          "soleProprietorBusinessCity": "",
          "soleProprietorBusinessName": "Nolan Brooks delivery work",
          "soleProprietorBusinessState": "",
          "soleProprietorBusinessStreet": "",
          "soleProprietorBusinessType": "Gig delivery",
          "soleProprietorBusinessUnit": "",
          "soleProprietorBusinessZipCode": ""
        },
        "chapter7": {
          "meansTestStatus": "Needs six-month income total",
          "medianIncomeState": "Colorado",
          "estimatedMonthlyIncome": 3850,
          "securedPropertyIntent": "Keep paid-off vehicle.",
          "priorBankruptcyDischarge": "",
          "assetDistributionEstimate": "Likely no-asset based on entered values; exemption review still needed."
        },
        "chapter13": {
          "planMonths": 0,
          "proposedMonthlyPayment": 0,
          "priorityClaimsEstimate": 0,
          "arrearsCureEstimate": 0,
          "disposableIncomeNotes": ""
        },
        "documents": [
          {
            "id": "document-716d005e-86b8-4ab7-a166-740856b9176f",
            "name": "Driver's license",
            "category": "Identity",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-1db74f17-c489-4c2d-a296-4e0b4f28fc01",
            "name": "Social Security card, W-2, or 1099",
            "category": "Identity",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-70b5e309-7189-4f5a-be7f-c9ffa84bf446",
            "name": "Tax return - last year",
            "category": "Taxes",
            "status": "needed",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": []
          },
          {
            "id": "document-02b20964-fe0d-4812-8c2e-00caa8a3d3c9",
            "name": "Tax return - two years ago",
            "category": "Taxes",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-8672883a-8397-4c04-9cc2-9a5bbf87363b",
            "name": "Pay stubs - last 6 months",
            "category": "Income",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-5a5c4108-6fe9-4262-b12a-1181aebfd93c",
            "name": "Bank statements - last 6 months",
            "category": "Banking",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-b381a409-c645-49cd-9c7a-a7dd9d87ef07",
            "name": "Bank or financial account statements",
            "category": "Assets",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-506c6645-3214-4410-a3a4-324e103e8e63",
            "name": "Statements for all debts",
            "category": "Debt",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-b777c848-1c69-466c-b95d-b3f43efc9f00",
            "name": "Attorney / collector letters",
            "category": "Debt",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-bf3e42b8-83be-4399-b9f2-6eb3bcd1640d",
            "name": "Court paperwork",
            "category": "Financial affairs",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-cc135f66-2f53-428d-b4de-144f5f48f8d9",
            "name": "Pre-bankruptcy counseling certificate",
            "category": "Required to file",
            "status": "needed",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": []
          }
        ],
        "financialAffairs": {
          "prior-addresses": {
            "answer": "Yes",
            "entries": [
              {
                "id": "fa-entry-30ae8799-bf7e-4d90-b24f-74546e011f6a",
                "fields": {
                  "address": "1400 North Ogden Street, Denver, CO 80218",
                  "dates": "2022-09 to 2024-02"
                }
              }
            ],
            "fields": {},
            "selected": []
          },
          "community-property-state": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "job-or-business-income": {
            "answer": "Yes",
            "entries": [],
            "fields": {},
            "selected": [
              "Wages, commissions, bonuses, or tips",
              "Self-employment or business income"
            ]
          },
          "other-income": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "creditor-payments-90-days": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "insider-debt-payments": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "insider-benefit-transfer": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "lawsuits": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "property-taken": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "setoff": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "receiver-property": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "gifts": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "charitable-gifts": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "losses": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "bankruptcy-consult-payments": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "creditor-help-payments": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "property-transfers": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "asset-protection-transfer": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "closed-accounts": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "safe-deposit-box": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "storage-unit": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "property-for-others": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "environmental-liability-notice": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "hazardous-material-release": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "environmental-proceeding": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "business-connections": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "business-financial-statements": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          }
        }
      },
      "packageId": "bkfl-demo-nolan-brooks-ch7-renter",
      "readiness": {
        "documentsReady": 9,
        "documentsRequired": 11,
        "fieldsFilled": 26,
        "fieldsRequired": 27,
        "reviewFlagCount": 3,
        "status": "needs-client-action"
      },
      "reviewFlags": [
        {
          "id": "income-Six-month income is missing",
          "severity": "warning",
          "sectionId": "income",
          "title": "Six-month income is missing",
          "detail": "Means-test intake needs six-month totals before attorney review."
        },
        {
          "id": "documents-Document requests are still open",
          "severity": "info",
          "sectionId": "documents",
          "title": "Document requests are still open",
          "detail": "Use the checklist to track pay advices, tax returns, IDs, statements, and case-specific backups."
        },
        {
          "id": "debts-Unsecured debt captured",
          "severity": "info",
          "sectionId": "debts",
          "title": "Unsecured debt captured",
          "detail": "$23,800 in unsecured claims is recorded for review."
        }
      ],
      "schemaVersion": 1,
      "source": {
        "branch": "Jimmy",
        "scenarioId": "nolan-brooks-ch7-renter",
        "system": "BK FastLane Intake"
      },
      "submittedAt": "2026-07-13T17:05:44.989Z"
    },
    {
      "completion": {
        "documentCompletion": {
          "applicableRequired": 11,
          "receivedRequired": 9
        },
        "emailDraft": {
          "bodySnapshot": "Hi Maya,\n\nWe reviewed your BK FastLane intake entry and found a few items that still need your attention before the attorney can use the file efficiently.\n\n1. Please return to Personal Info and answer: County.\n2. Please complete: Other names used.\n3. Please complete: Prior bankruptcy details.\n4. Please complete: Weekend delivery apps six-month income total.\n5. Please upload: Attorney / collector letters.\n6. Please upload: Bank statements - last 6 months.\n\nYou do not need to calculate legal conclusions. Just enter your best information and upload the requested documents when available.\n\nReturn to your intake: https://jimmydanol.github.io/bkfl-crm-lite/intake-demo.html?packageId=bkfl-demo-maya-patel-ch7-parent\n\nThank you,\nBK FastLane intake team",
          "deliveryMode": "simulation",
          "intakeResumeUrl": "https://jimmydanol.github.io/bkfl-crm-lite/intake-demo.html?packageId=bkfl-demo-maya-patel-ch7-parent",
          "recipient": "maya.patel.fake@example.test",
          "status": "pending_approval",
          "subject": "BK FastLane reminder: 6 intake items still needed"
        },
        "events": [],
        "fieldCompletion": {
          "applicableRequired": 27,
          "enteredRequired": 26,
          "percent": 96
        },
        "intakeResumeUrl": "https://jimmydanol.github.io/bkfl-crm-lite/intake-demo.html?packageId=bkfl-demo-maya-patel-ch7-parent",
        "missingItems": [
          {
            "canonicalPath": "matter.debtors[0].county",
            "clientInstruction": "Please return to Personal Info and answer: County.",
            "essential": true,
            "id": "schema-start.debtor.county",
            "kind": "field",
            "label": "County",
            "priority": "high"
          },
          {
            "canonicalPath": "matter.debtors[0].otherNames",
            "clientInstruction": "Please complete: Other names used.",
            "essential": true,
            "id": "missing-log-start.debtor.otherNames",
            "kind": "field",
            "label": "Other names used",
            "priority": "high"
          },
          {
            "canonicalPath": "matter.priorBankruptcyDetails",
            "clientInstruction": "Please complete: Prior bankruptcy details.",
            "essential": true,
            "id": "missing-log-start.priorBankruptcyDetails",
            "kind": "field",
            "label": "Prior bankruptcy details",
            "priority": "high"
          },
          {
            "canonicalPath": "matter.income[1].sixMonthTotal",
            "clientInstruction": "Please complete: Weekend delivery apps six-month income total.",
            "essential": true,
            "id": "missing-log-income.rows.1.sixMonthTotal",
            "kind": "field",
            "label": "Weekend delivery apps six-month income total",
            "priority": "high"
          },
          {
            "canonicalPath": "matter.documents[name='Attorney / collector letters']",
            "clientInstruction": "Please upload: Attorney / collector letters.",
            "essential": true,
            "id": "document-Attorney / collector letters",
            "kind": "document",
            "label": "Attorney / collector letters",
            "priority": "medium"
          },
          {
            "canonicalPath": "matter.documents[name='Bank statements - last 6 months']",
            "clientInstruction": "Please upload: Bank statements - last 6 months.",
            "essential": true,
            "id": "document-Bank statements - last 6 months",
            "kind": "document",
            "label": "Bank statements - last 6 months",
            "priority": "medium"
          }
        ],
        "percent": 88,
        "revision": 1,
        "status": "needs_client_action"
      },
      "demo": true,
      "generatedAt": "2026-07-13T17:05:44.989Z",
      "matter": {
        "id": "fake-matter-maya-patel-ch7-parent",
        "title": "Maya Patel fake client-entered Chapter 7 intake",
        "chapter": "7",
        "status": "review",
        "filingState": "CO",
        "district": "District of Colorado",
        "clientGoals": "Stop collection calls and deal with old medical and credit card debt.",
        "urgentConcerns": "A collector called her employer last week.",
        "priorBankruptcyFiled": "No",
        "priorBankruptcyDetails": "",
        "hasDependents": "No",
        "spouseFilingJointly": "No",
        "isEmployed": "Yes",
        "hasOtherHouseholdIncome": "Yes",
        "personalInfoSubmittedAt": "2026-07-13T17:05:44.989Z",
        "createdAt": "2026-07-13T17:05:45.924Z",
        "updatedAt": "2026-07-13T17:05:44.989Z",
        "debtors": [
          {
            "id": "debtor-a18bbaab-2567-4e48-851f-bc34d3b22497",
            "firstName": "Maya",
            "middleName": "Renee",
            "lastName": "Patel",
            "otherNames": "",
            "email": "maya.patel.fake@example.test",
            "phone": "(720) 555-0202",
            "ssnLast4": "3502",
            "socialSecurityNumber": "111-22-3502",
            "address": "14522 East Evans Avenue Unit 8",
            "city": "Aurora",
            "state": "CO",
            "zipCode": "80014",
            "county": "",
            "mailingAddressDifferent": false,
            "dateOfBirth": "02/24/1990"
          }
        ],
        "household": {
          "householdSize": 1,
          "maritalStatus": "Single",
          "dependents": []
        },
        "assets": [
          {
            "id": "asset-4ba5b9f7-fb79-4ee4-80da-f63a62c4e12a",
            "category": "Bank or financial account",
            "description": "Canvas Credit Union checking",
            "estimatedValue": 420,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "Checking"
          },
          {
            "id": "asset-b69fa4e2-83ca-4a04-bcfe-e49ee02504a9",
            "category": "Vehicle",
            "description": "2014 Kia Soul",
            "estimatedValue": 5100,
            "lienAmount": 0,
            "exemptionNote": "",
            "financingStatus": "Paid off",
            "keepIntent": "Keep for work transportation",
            "make": "Kia",
            "mileage": "136000",
            "model": "Soul",
            "year": "2014"
          },
          {
            "id": "asset-d4cc03f0-6141-4b7b-a781-9ad4e64b6990",
            "category": "Household goods and furnishings",
            "description": "Furniture, laptop, phone, clothes, kitchen items",
            "estimatedValue": 3100,
            "lienAmount": 0,
            "exemptionNote": ""
          }
        ],
        "debts": [
          {
            "id": "fake-debt-maya-patel-ch7-parent-1",
            "type": "unsecured",
            "creditor": "Synchrony Bank",
            "amount": 14100,
            "collateral": "",
            "arrears": 0,
            "notes": "Credit card in collections."
          },
          {
            "id": "fake-debt-maya-patel-ch7-parent-2",
            "type": "unsecured",
            "creditor": "Rose Medical Center",
            "amount": 9700,
            "collateral": "",
            "arrears": 0,
            "notes": "Medical bill sent to collector."
          },
          {
            "id": "fake-debt-maya-patel-ch7-parent-3",
            "type": "priority",
            "creditor": "Colorado Department of Revenue",
            "amount": 1800,
            "collateral": "",
            "arrears": 0,
            "notes": "Older state tax notice; priority status unknown."
          }
        ],
        "contracts": [],
        "codebtors": [],
        "income": [
          {
            "id": "income-f6b79cbe-29c6-4c8b-b716-21fc23179359",
            "source": "Employment",
            "employer": "Denver Dental Supply",
            "amount": 2900,
            "frequency": "Biweekly",
            "sixMonthTotal": 17400
          },
          {
            "id": "income-71ddfc71-a965-49e1-969e-1aebb9ad1dd5",
            "source": "Business income",
            "employer": "Weekend delivery apps",
            "amount": 950,
            "frequency": "Monthly",
            "sixMonthTotal": 0
          }
        ],
        "payStubIncomeEvidence": [],
        "expenses": [
          {
            "id": "expense-0e14239f-7569-445c-9573-92dcfaca232b",
            "category": "Rent or home/mortgage payment",
            "monthlyAmount": 1390,
            "notes": ""
          },
          {
            "id": "expense-a3408904-170e-4880-9b9d-8954d1218bc5",
            "category": "Electricity, heat, natural gas",
            "monthlyAmount": 165,
            "notes": ""
          },
          {
            "id": "expense-a67682a7-1de9-4db9-a2ac-ebf6ffadcf26",
            "category": "Phone, cell, internet, satellite & cable",
            "monthlyAmount": 155,
            "notes": ""
          },
          {
            "id": "expense-9f1a7a4b-f198-42ab-9f54-0a12865d6c2c",
            "category": "Food & housekeeping supplies",
            "monthlyAmount": 540,
            "notes": ""
          },
          {
            "id": "expense-a23ff109-fe0b-469f-acc0-100a9c23ea97",
            "category": "Medical & dental expenses",
            "monthlyAmount": 95,
            "notes": ""
          },
          {
            "id": "expense-7e24930b-78e0-48a9-ac4a-ad571de84aa7",
            "category": "Transportation",
            "monthlyAmount": 385,
            "notes": ""
          },
          {
            "id": "expense-c5001d77-c09c-4fc9-93e9-9e59e84d4f6a",
            "category": "Vehicle insurance",
            "monthlyAmount": 148,
            "notes": ""
          }
        ],
        "sofaEvents": [],
        "petitionFlags": {
          "evictionJudgment": "No",
          "hazardousProperty": "No",
          "hazardousPropertyAddress": "",
          "hazardousPropertyCity": "",
          "hazardousPropertyDescription": "",
          "hazardousPropertyImmediateReason": "",
          "hazardousPropertyState": "",
          "hazardousPropertyStreet2": "",
          "hazardousPropertyZipCode": "",
          "rentsResidence": "Yes",
          "soleProprietor": "Yes",
          "soleProprietorBusinessCity": "",
          "soleProprietorBusinessName": "Maya Patel delivery work",
          "soleProprietorBusinessState": "",
          "soleProprietorBusinessStreet": "",
          "soleProprietorBusinessType": "Gig delivery",
          "soleProprietorBusinessUnit": "",
          "soleProprietorBusinessZipCode": ""
        },
        "chapter7": {
          "meansTestStatus": "Needs six-month income total",
          "medianIncomeState": "Colorado",
          "estimatedMonthlyIncome": 3850,
          "securedPropertyIntent": "Keep paid-off vehicle.",
          "priorBankruptcyDischarge": "",
          "assetDistributionEstimate": "Likely no-asset based on entered values; exemption review still needed."
        },
        "chapter13": {
          "planMonths": 0,
          "proposedMonthlyPayment": 0,
          "priorityClaimsEstimate": 0,
          "arrearsCureEstimate": 0,
          "disposableIncomeNotes": ""
        },
        "documents": [
          {
            "id": "document-7a93e6d0-06f4-4475-a967-be592d9f8597",
            "name": "Driver's license",
            "category": "Identity",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-24125f65-991b-4393-b08d-5370570861fe",
            "name": "Social Security card, W-2, or 1099",
            "category": "Identity",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-289fb5a1-2a93-4305-98c5-a9b3708f8203",
            "name": "Tax return - last year",
            "category": "Taxes",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-423a36b3-e16e-4f2d-a418-ca9471728b16",
            "name": "Tax return - two years ago",
            "category": "Taxes",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-d757483c-140b-4cf7-ba26-4289103a9529",
            "name": "Pay stubs - last 6 months",
            "category": "Income",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-92272c39-c25d-4861-9e70-29612eb2a229",
            "name": "Bank statements - last 6 months",
            "category": "Banking",
            "status": "needed",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": []
          },
          {
            "id": "document-5f896ed6-d5b9-429c-b2be-a1052757aa98",
            "name": "Bank or financial account statements",
            "category": "Assets",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-6a672ca0-95e6-4b8f-832e-92d4ce83867e",
            "name": "Statements for all debts",
            "category": "Debt",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-f0685346-0bcb-40f8-9170-a38d0949076d",
            "name": "Attorney / collector letters",
            "category": "Debt",
            "status": "needed",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": []
          },
          {
            "id": "document-8cbc1940-43b0-4ce8-8ead-5f8f85e89d19",
            "name": "Court paperwork",
            "category": "Financial affairs",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-37dd7bca-2327-487e-849f-8ccded93bd48",
            "name": "Pre-bankruptcy counseling certificate",
            "category": "Required to file",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          }
        ],
        "financialAffairs": {
          "prior-addresses": {
            "answer": "Yes",
            "entries": [
              {
                "id": "fa-entry-30ae8799-bf7e-4d90-b24f-74546e011f6a",
                "fields": {
                  "address": "1400 North Ogden Street, Denver, CO 80218",
                  "dates": "2022-09 to 2024-02"
                }
              }
            ],
            "fields": {},
            "selected": []
          },
          "community-property-state": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "job-or-business-income": {
            "answer": "Yes",
            "entries": [],
            "fields": {},
            "selected": [
              "Wages, commissions, bonuses, or tips",
              "Self-employment or business income"
            ]
          },
          "other-income": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "creditor-payments-90-days": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "insider-debt-payments": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "insider-benefit-transfer": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "lawsuits": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "property-taken": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "setoff": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "receiver-property": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "gifts": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "charitable-gifts": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "losses": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "bankruptcy-consult-payments": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "creditor-help-payments": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "property-transfers": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "asset-protection-transfer": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "closed-accounts": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "safe-deposit-box": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "storage-unit": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "property-for-others": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "environmental-liability-notice": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "hazardous-material-release": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "environmental-proceeding": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "business-connections": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "business-financial-statements": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          }
        }
      },
      "packageId": "bkfl-demo-maya-patel-ch7-parent",
      "readiness": {
        "documentsReady": 9,
        "documentsRequired": 11,
        "fieldsFilled": 26,
        "fieldsRequired": 27,
        "reviewFlagCount": 3,
        "status": "needs-client-action"
      },
      "reviewFlags": [
        {
          "id": "income-Six-month income is missing",
          "severity": "warning",
          "sectionId": "income",
          "title": "Six-month income is missing",
          "detail": "Means-test intake needs six-month totals before attorney review."
        },
        {
          "id": "documents-Document requests are still open",
          "severity": "info",
          "sectionId": "documents",
          "title": "Document requests are still open",
          "detail": "Use the checklist to track pay advices, tax returns, IDs, statements, and case-specific backups."
        },
        {
          "id": "debts-Unsecured debt captured",
          "severity": "info",
          "sectionId": "debts",
          "title": "Unsecured debt captured",
          "detail": "$23,800 in unsecured claims is recorded for review."
        }
      ],
      "schemaVersion": 1,
      "source": {
        "branch": "Jimmy",
        "scenarioId": "maya-patel-ch7-parent",
        "system": "BK FastLane Intake"
      },
      "submittedAt": "2026-07-13T17:05:44.989Z"
    },
    {
      "completion": {
        "documentCompletion": {
          "applicableRequired": 11,
          "receivedRequired": 9
        },
        "emailDraft": {
          "bodySnapshot": "Hi Zoe,\n\nWe reviewed your BK FastLane intake entry and found a few items that still need your attention before the attorney can use the file efficiently.\n\n1. Please return to Personal Info and answer: County.\n2. Please complete: Other names used.\n3. Please complete: Prior bankruptcy details.\n4. Please complete: Weekend delivery apps six-month income total.\n5. Please upload: Pay stubs - last 6 months.\n6. Please upload: Tax return - two years ago.\n\nYou do not need to calculate legal conclusions. Just enter your best information and upload the requested documents when available.\n\nReturn to your intake: https://jimmydanol.github.io/bkfl-crm-lite/intake-demo.html?packageId=bkfl-demo-zoe-kim-ch7-wage-earner\n\nThank you,\nBK FastLane intake team",
          "deliveryMode": "simulation",
          "intakeResumeUrl": "https://jimmydanol.github.io/bkfl-crm-lite/intake-demo.html?packageId=bkfl-demo-zoe-kim-ch7-wage-earner",
          "recipient": "zoe.kim.fake@example.test",
          "status": "pending_approval",
          "subject": "BK FastLane reminder: 6 intake items still needed"
        },
        "events": [],
        "fieldCompletion": {
          "applicableRequired": 27,
          "enteredRequired": 26,
          "percent": 96
        },
        "intakeResumeUrl": "https://jimmydanol.github.io/bkfl-crm-lite/intake-demo.html?packageId=bkfl-demo-zoe-kim-ch7-wage-earner",
        "missingItems": [
          {
            "canonicalPath": "matter.debtors[0].county",
            "clientInstruction": "Please return to Personal Info and answer: County.",
            "essential": true,
            "id": "schema-start.debtor.county",
            "kind": "field",
            "label": "County",
            "priority": "high"
          },
          {
            "canonicalPath": "matter.debtors[0].otherNames",
            "clientInstruction": "Please complete: Other names used.",
            "essential": true,
            "id": "missing-log-start.debtor.otherNames",
            "kind": "field",
            "label": "Other names used",
            "priority": "high"
          },
          {
            "canonicalPath": "matter.priorBankruptcyDetails",
            "clientInstruction": "Please complete: Prior bankruptcy details.",
            "essential": true,
            "id": "missing-log-start.priorBankruptcyDetails",
            "kind": "field",
            "label": "Prior bankruptcy details",
            "priority": "high"
          },
          {
            "canonicalPath": "matter.income[1].sixMonthTotal",
            "clientInstruction": "Please complete: Weekend delivery apps six-month income total.",
            "essential": true,
            "id": "missing-log-income.rows.1.sixMonthTotal",
            "kind": "field",
            "label": "Weekend delivery apps six-month income total",
            "priority": "high"
          },
          {
            "canonicalPath": "matter.documents[name='Pay stubs - last 6 months']",
            "clientInstruction": "Please upload: Pay stubs - last 6 months.",
            "essential": true,
            "id": "document-Pay stubs - last 6 months",
            "kind": "document",
            "label": "Pay stubs - last 6 months",
            "priority": "medium"
          },
          {
            "canonicalPath": "matter.documents[name='Tax return - two years ago']",
            "clientInstruction": "Please upload: Tax return - two years ago.",
            "essential": true,
            "id": "document-Tax return - two years ago",
            "kind": "document",
            "label": "Tax return - two years ago",
            "priority": "medium"
          }
        ],
        "percent": 88,
        "revision": 1,
        "status": "needs_client_action"
      },
      "demo": true,
      "generatedAt": "2026-07-13T17:05:44.989Z",
      "matter": {
        "id": "fake-matter-zoe-kim-ch7-wage-earner",
        "title": "Zoe Kim fake client-entered Chapter 7 intake",
        "chapter": "7",
        "status": "review",
        "filingState": "CO",
        "district": "District of Colorado",
        "clientGoals": "Stop collection calls and deal with old medical and credit card debt.",
        "urgentConcerns": "A collector called her employer last week.",
        "priorBankruptcyFiled": "No",
        "priorBankruptcyDetails": "",
        "hasDependents": "No",
        "spouseFilingJointly": "No",
        "isEmployed": "Yes",
        "hasOtherHouseholdIncome": "Yes",
        "personalInfoSubmittedAt": "2026-07-13T17:05:44.989Z",
        "createdAt": "2026-07-13T17:05:45.946Z",
        "updatedAt": "2026-07-13T17:05:44.989Z",
        "debtors": [
          {
            "id": "debtor-ae7bb788-2736-4ee7-a315-c2c016ce2e6f",
            "firstName": "Zoe",
            "middleName": "Harper",
            "lastName": "Kim",
            "otherNames": "",
            "email": "zoe.kim.fake@example.test",
            "phone": "(970) 555-0203",
            "ssnLast4": "3503",
            "socialSecurityNumber": "111-22-3503",
            "address": "720 West Prospect Road Apt 5",
            "city": "Fort Collins",
            "state": "CO",
            "zipCode": "80521",
            "county": "",
            "mailingAddressDifferent": false,
            "dateOfBirth": "07/08/1993"
          }
        ],
        "household": {
          "householdSize": 1,
          "maritalStatus": "Single",
          "dependents": []
        },
        "assets": [
          {
            "id": "asset-39ba32ad-f07f-4b6f-b5ee-5331f35a9fda",
            "category": "Bank or financial account",
            "description": "Canvas Credit Union checking",
            "estimatedValue": 420,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "Checking"
          },
          {
            "id": "asset-b897b549-ea9f-4bef-be8f-221b3c5638c6",
            "category": "Vehicle",
            "description": "2014 Kia Soul",
            "estimatedValue": 5100,
            "lienAmount": 0,
            "exemptionNote": "",
            "financingStatus": "Paid off",
            "keepIntent": "Keep for work transportation",
            "make": "Kia",
            "mileage": "136000",
            "model": "Soul",
            "year": "2014"
          },
          {
            "id": "asset-e5ca111d-4bbd-45ce-a657-77d0d77a4e25",
            "category": "Household goods and furnishings",
            "description": "Furniture, laptop, phone, clothes, kitchen items",
            "estimatedValue": 3100,
            "lienAmount": 0,
            "exemptionNote": ""
          }
        ],
        "debts": [
          {
            "id": "fake-debt-zoe-kim-ch7-wage-earner-1",
            "type": "unsecured",
            "creditor": "Synchrony Bank",
            "amount": 14100,
            "collateral": "",
            "arrears": 0,
            "notes": "Credit card in collections."
          },
          {
            "id": "fake-debt-zoe-kim-ch7-wage-earner-2",
            "type": "unsecured",
            "creditor": "Rose Medical Center",
            "amount": 9700,
            "collateral": "",
            "arrears": 0,
            "notes": "Medical bill sent to collector."
          },
          {
            "id": "fake-debt-zoe-kim-ch7-wage-earner-3",
            "type": "priority",
            "creditor": "Colorado Department of Revenue",
            "amount": 1800,
            "collateral": "",
            "arrears": 0,
            "notes": "Older state tax notice; priority status unknown."
          }
        ],
        "contracts": [],
        "codebtors": [],
        "income": [
          {
            "id": "income-fbfb69db-37a9-44bd-b5b5-4189c37acfd5",
            "source": "Employment",
            "employer": "Denver Dental Supply",
            "amount": 2900,
            "frequency": "Biweekly",
            "sixMonthTotal": 17400
          },
          {
            "id": "income-5223d04f-23d2-4c03-83a1-ed02df89a1c8",
            "source": "Business income",
            "employer": "Weekend delivery apps",
            "amount": 950,
            "frequency": "Monthly",
            "sixMonthTotal": 0
          }
        ],
        "payStubIncomeEvidence": [],
        "expenses": [
          {
            "id": "expense-89225486-b2d2-4ce1-aac5-c9be49b1b36d",
            "category": "Rent or home/mortgage payment",
            "monthlyAmount": 1390,
            "notes": ""
          },
          {
            "id": "expense-1f383ffe-b49f-4327-aada-b93ce2e0e4db",
            "category": "Electricity, heat, natural gas",
            "monthlyAmount": 165,
            "notes": ""
          },
          {
            "id": "expense-88b1994d-c8fc-46b5-b0f3-65672c80de55",
            "category": "Phone, cell, internet, satellite & cable",
            "monthlyAmount": 155,
            "notes": ""
          },
          {
            "id": "expense-2d22c30a-ce2b-4eb9-866e-9656aad9881a",
            "category": "Food & housekeeping supplies",
            "monthlyAmount": 540,
            "notes": ""
          },
          {
            "id": "expense-a92c5f9c-b804-45ab-85b3-47571a64deb4",
            "category": "Medical & dental expenses",
            "monthlyAmount": 95,
            "notes": ""
          },
          {
            "id": "expense-9b8b4957-3393-40fc-a34e-a990bfc3559b",
            "category": "Transportation",
            "monthlyAmount": 385,
            "notes": ""
          },
          {
            "id": "expense-594d419c-a036-44e2-badb-09757b0d9fc4",
            "category": "Vehicle insurance",
            "monthlyAmount": 148,
            "notes": ""
          }
        ],
        "sofaEvents": [],
        "petitionFlags": {
          "evictionJudgment": "No",
          "hazardousProperty": "No",
          "hazardousPropertyAddress": "",
          "hazardousPropertyCity": "",
          "hazardousPropertyDescription": "",
          "hazardousPropertyImmediateReason": "",
          "hazardousPropertyState": "",
          "hazardousPropertyStreet2": "",
          "hazardousPropertyZipCode": "",
          "rentsResidence": "Yes",
          "soleProprietor": "Yes",
          "soleProprietorBusinessCity": "",
          "soleProprietorBusinessName": "Zoe Kim delivery work",
          "soleProprietorBusinessState": "",
          "soleProprietorBusinessStreet": "",
          "soleProprietorBusinessType": "Gig delivery",
          "soleProprietorBusinessUnit": "",
          "soleProprietorBusinessZipCode": ""
        },
        "chapter7": {
          "meansTestStatus": "Needs six-month income total",
          "medianIncomeState": "Colorado",
          "estimatedMonthlyIncome": 3850,
          "securedPropertyIntent": "Keep paid-off vehicle.",
          "priorBankruptcyDischarge": "",
          "assetDistributionEstimate": "Likely no-asset based on entered values; exemption review still needed."
        },
        "chapter13": {
          "planMonths": 0,
          "proposedMonthlyPayment": 0,
          "priorityClaimsEstimate": 0,
          "arrearsCureEstimate": 0,
          "disposableIncomeNotes": ""
        },
        "documents": [
          {
            "id": "document-a14d4fb2-c278-436f-88ef-83a4e5fdff1e",
            "name": "Driver's license",
            "category": "Identity",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-24bd7be9-338a-4a24-a20d-7585a92c102e",
            "name": "Social Security card, W-2, or 1099",
            "category": "Identity",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-2ba1dc77-66c6-4c97-9c31-d8f39db7fe24",
            "name": "Tax return - last year",
            "category": "Taxes",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-2f05a9b5-c3d4-4534-bbd2-96d71c514199",
            "name": "Tax return - two years ago",
            "category": "Taxes",
            "status": "needed",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": []
          },
          {
            "id": "document-3b6c01f9-0c32-4768-96ef-4a06a7b1d4a1",
            "name": "Pay stubs - last 6 months",
            "category": "Income",
            "status": "needed",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": []
          },
          {
            "id": "document-03afb735-fd83-46c9-a109-f8a67fa67570",
            "name": "Bank statements - last 6 months",
            "category": "Banking",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-ad72e67b-21da-4ebf-8d16-f9285959003d",
            "name": "Bank or financial account statements",
            "category": "Assets",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-0432472a-0394-445f-948d-2722210716df",
            "name": "Statements for all debts",
            "category": "Debt",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-8b2e487d-9a88-4c76-9b74-1ed2cf6741d2",
            "name": "Attorney / collector letters",
            "category": "Debt",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-65f7388d-e355-4908-aee7-57fc6bc20e5b",
            "name": "Court paperwork",
            "category": "Financial affairs",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-7c9b38be-cb7b-4d7d-99dc-30cf830471cd",
            "name": "Pre-bankruptcy counseling certificate",
            "category": "Required to file",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          }
        ],
        "financialAffairs": {
          "prior-addresses": {
            "answer": "Yes",
            "entries": [
              {
                "id": "fa-entry-30ae8799-bf7e-4d90-b24f-74546e011f6a",
                "fields": {
                  "address": "1400 North Ogden Street, Denver, CO 80218",
                  "dates": "2022-09 to 2024-02"
                }
              }
            ],
            "fields": {},
            "selected": []
          },
          "community-property-state": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "job-or-business-income": {
            "answer": "Yes",
            "entries": [],
            "fields": {},
            "selected": [
              "Wages, commissions, bonuses, or tips",
              "Self-employment or business income"
            ]
          },
          "other-income": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "creditor-payments-90-days": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "insider-debt-payments": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "insider-benefit-transfer": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "lawsuits": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "property-taken": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "setoff": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "receiver-property": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "gifts": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "charitable-gifts": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "losses": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "bankruptcy-consult-payments": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "creditor-help-payments": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "property-transfers": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "asset-protection-transfer": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "closed-accounts": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "safe-deposit-box": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "storage-unit": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "property-for-others": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "environmental-liability-notice": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "hazardous-material-release": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "environmental-proceeding": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "business-connections": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "business-financial-statements": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          }
        }
      },
      "packageId": "bkfl-demo-zoe-kim-ch7-wage-earner",
      "readiness": {
        "documentsReady": 9,
        "documentsRequired": 11,
        "fieldsFilled": 26,
        "fieldsRequired": 27,
        "reviewFlagCount": 3,
        "status": "needs-client-action"
      },
      "reviewFlags": [
        {
          "id": "income-Six-month income is missing",
          "severity": "warning",
          "sectionId": "income",
          "title": "Six-month income is missing",
          "detail": "Means-test intake needs six-month totals before attorney review."
        },
        {
          "id": "documents-Document requests are still open",
          "severity": "info",
          "sectionId": "documents",
          "title": "Document requests are still open",
          "detail": "Use the checklist to track pay advices, tax returns, IDs, statements, and case-specific backups."
        },
        {
          "id": "debts-Unsecured debt captured",
          "severity": "info",
          "sectionId": "debts",
          "title": "Unsecured debt captured",
          "detail": "$23,800 in unsecured claims is recorded for review."
        }
      ],
      "schemaVersion": 1,
      "source": {
        "branch": "Jimmy",
        "scenarioId": "zoe-kim-ch7-wage-earner",
        "system": "BK FastLane Intake"
      },
      "submittedAt": "2026-07-13T17:05:44.989Z"
    },
    {
      "completion": {
        "documentCompletion": {
          "applicableRequired": 11,
          "receivedRequired": 9
        },
        "emailDraft": {
          "bodySnapshot": "Hi Daniel,\n\nWe reviewed your BK FastLane intake entry and found a few items that still need your attention before the attorney can use the file efficiently.\n\n1. Please complete: Other names used.\n2. Please complete: Spouse Social Security number.\n3. Please upload: Bank statements - last 6 months.\n4. Please upload: Court paperwork.\n\nYou do not need to calculate legal conclusions. Just enter your best information and upload the requested documents when available.\n\nReturn to your intake: https://jimmydanol.github.io/bkfl-crm-lite/intake-demo.html?packageId=bkfl-demo-daniel-sofia-reyes-ch13\n\nThank you,\nBK FastLane intake team",
          "deliveryMode": "simulation",
          "intakeResumeUrl": "https://jimmydanol.github.io/bkfl-crm-lite/intake-demo.html?packageId=bkfl-demo-daniel-sofia-reyes-ch13",
          "recipient": "daniel.reyes.fake@example.test",
          "status": "pending_approval",
          "subject": "BK FastLane reminder: 4 intake items still needed"
        },
        "events": [],
        "fieldCompletion": {
          "applicableRequired": 27,
          "enteredRequired": 27,
          "percent": 100
        },
        "intakeResumeUrl": "https://jimmydanol.github.io/bkfl-crm-lite/intake-demo.html?packageId=bkfl-demo-daniel-sofia-reyes-ch13",
        "missingItems": [
          {
            "canonicalPath": "matter.debtors[0].otherNames",
            "clientInstruction": "Please complete: Other names used.",
            "essential": true,
            "id": "missing-log-start.debtor.otherNames",
            "kind": "field",
            "label": "Other names used",
            "priority": "high"
          },
          {
            "canonicalPath": "matter.debtors[1].socialSecurityNumber",
            "clientInstruction": "Please complete: Spouse Social Security number.",
            "essential": true,
            "id": "missing-log-start.debtor2.socialSecurityNumber",
            "kind": "field",
            "label": "Spouse Social Security number",
            "priority": "high"
          },
          {
            "canonicalPath": "matter.documents[name='Bank statements - last 6 months']",
            "clientInstruction": "Please upload: Bank statements - last 6 months.",
            "essential": true,
            "id": "document-Bank statements - last 6 months",
            "kind": "document",
            "label": "Bank statements - last 6 months",
            "priority": "medium"
          },
          {
            "canonicalPath": "matter.documents[name='Court paperwork']",
            "clientInstruction": "Please upload: Court paperwork.",
            "essential": true,
            "id": "document-Court paperwork",
            "kind": "document",
            "label": "Court paperwork",
            "priority": "medium"
          }
        ],
        "percent": 92,
        "revision": 1,
        "status": "needs_client_action"
      },
      "demo": true,
      "generatedAt": "2026-07-13T17:05:44.989Z",
      "matter": {
        "id": "fake-matter-daniel-sofia-reyes-ch13",
        "title": "Daniel Reyes fake client-entered Chapter 13 intake",
        "chapter": "13",
        "status": "review",
        "filingState": "CO",
        "district": "District of Colorado",
        "clientGoals": "Stop foreclosure, keep house and truck, handle recent tax debt.",
        "urgentConcerns": "Foreclosure sale date notice received, but exact sale date was not entered.",
        "priorBankruptcyFiled": "Yes",
        "priorBankruptcyDetails": "Daniel filed Chapter 7 in 2015 in Colorado; case number not entered.",
        "hasDependents": "Yes",
        "spouseFilingJointly": "Yes",
        "isEmployed": "Yes",
        "hasOtherHouseholdIncome": "Yes",
        "personalInfoSubmittedAt": "2026-07-13T17:05:44.989Z",
        "createdAt": "2026-07-13T17:05:45.970Z",
        "updatedAt": "2026-07-13T17:05:44.989Z",
        "debtors": [
          {
            "id": "debtor-7f8e0c62-98e3-4a51-82c3-8bd1772bb0d2",
            "firstName": "Daniel",
            "middleName": "Luis",
            "lastName": "Reyes",
            "otherNames": "",
            "email": "daniel.reyes.fake@example.test",
            "phone": "(303) 555-0204",
            "ssnLast4": "4504",
            "socialSecurityNumber": "222-33-4504",
            "address": "5912 South Jellison Street",
            "city": "Littleton",
            "state": "CO",
            "zipCode": "80123",
            "county": "Jefferson",
            "mailingAddressDifferent": false,
            "dateOfBirth": "05/17/1982"
          },
          {
            "id": "debtor-09d3b362-5f2c-40b0-9a1b-ccab62ee0e32",
            "firstName": "Sofia",
            "middleName": "Marisol",
            "lastName": "Reyes",
            "otherNames": "",
            "email": "sofia.reyes.fake@example.test",
            "phone": "(303) 555-0205",
            "ssnLast4": "",
            "socialSecurityNumber": "",
            "address": "5912 South Jellison Street",
            "city": "Littleton",
            "state": "CO",
            "zipCode": "80123",
            "county": "Jefferson",
            "mailingAddressDifferent": false,
            "dateOfBirth": "10/29/1984"
          }
        ],
        "household": {
          "householdSize": 4,
          "maritalStatus": "Married",
          "dependents": [
            {
              "id": "dependent-16bd0712-1f4d-4732-ad63-60ca49d234d7",
              "name": "Fake minor child A",
              "age": "12",
              "relationship": "Child",
              "livesWithDebtor": "Yes"
            },
            {
              "id": "dependent-bc32ce1a-a34d-418f-a2e0-d371079e4d52",
              "name": "Fake minor child B",
              "age": "8",
              "relationship": "Child",
              "livesWithDebtor": "Yes"
            }
          ]
        },
        "assets": [
          {
            "id": "asset-5b779be6-3bcd-4892-8fcc-765c2f674e21",
            "category": "Real estate",
            "description": "Primary residence",
            "estimatedValue": 462000,
            "lienAmount": 398000,
            "exemptionNote": "",
            "keepIntent": "Keep and cure arrears through plan",
            "propertyCity": "Aurora",
            "propertyState": "CO",
            "propertyStreet": "2448 South Quintero Way",
            "propertyZipCode": "80013"
          },
          {
            "id": "asset-c42b37ec-a89f-451e-879c-89366c75176b",
            "category": "Vehicle",
            "description": "2019 Ford F-150",
            "estimatedValue": 28200,
            "lienAmount": 25100,
            "exemptionNote": "",
            "financingStatus": "Financed",
            "keepIntent": "Keep",
            "make": "Ford",
            "mileage": "81000",
            "model": "F-150",
            "year": "2019"
          },
          {
            "id": "asset-01345aa6-75e3-4fcb-8777-e3eea78e6a03",
            "category": "Bank or financial account",
            "description": "Chase joint checking",
            "estimatedValue": 2150,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "Checking"
          },
          {
            "id": "asset-0ff9ef60-86d2-4eac-8f65-5a10502f0146",
            "category": "Retirement or pension account",
            "description": "Daniel 401(k)",
            "estimatedValue": 69000,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "401(k)"
          }
        ],
        "debts": [
          {
            "id": "fake-debt-daniel-sofia-reyes-ch13-1",
            "type": "secured",
            "creditor": "Frontier Mortgage Servicing",
            "amount": 398000,
            "collateral": "Primary residence",
            "arrears": 21400,
            "notes": "Foreclosure sale date not entered by debtor."
          },
          {
            "id": "fake-debt-daniel-sofia-reyes-ch13-2",
            "type": "secured",
            "creditor": "Ford Credit",
            "amount": 25100,
            "collateral": "2019 Ford F-150",
            "arrears": 820,
            "notes": "One payment behind."
          },
          {
            "id": "fake-debt-daniel-sofia-reyes-ch13-3",
            "type": "priority",
            "creditor": "IRS",
            "amount": 7400,
            "collateral": "",
            "arrears": 0,
            "notes": "Recent federal tax debt; verify transcript and priority amount."
          },
          {
            "id": "fake-debt-daniel-sofia-reyes-ch13-4",
            "type": "unsecured",
            "creditor": "Credit cards and personal loans",
            "amount": 33000,
            "collateral": "",
            "arrears": 0,
            "notes": "Debtor entered as group estimate."
          }
        ],
        "contracts": [],
        "codebtors": [],
        "income": [
          {
            "id": "income-bcd36234-8633-4a43-b2e7-7572be88f27a",
            "source": "Employment",
            "employer": "Metro Facilities Group",
            "amount": 7100,
            "frequency": "Biweekly",
            "sixMonthTotal": 42600
          },
          {
            "id": "income-81bf08e2-74b2-444f-8c94-a64a75635729",
            "source": "Employment",
            "employer": "Aurora Unified Schools",
            "amount": 3900,
            "frequency": "Twice monthly",
            "sixMonthTotal": 23400
          }
        ],
        "payStubIncomeEvidence": [],
        "expenses": [
          {
            "id": "expense-a0be5c2f-333f-482a-b222-f9aecf643e30",
            "category": "Mortgage payment",
            "monthlyAmount": 2680,
            "notes": ""
          },
          {
            "id": "expense-a8e46b88-ff23-4b08-865d-0ac65bf4b4c7",
            "category": "Electricity, heat, natural gas",
            "monthlyAmount": 310,
            "notes": ""
          },
          {
            "id": "expense-aaa5c26e-05dc-4d63-b45d-c2e8b28c7a15",
            "category": "Water, sewer, garbage collection",
            "monthlyAmount": 115,
            "notes": ""
          },
          {
            "id": "expense-834b75e5-6133-42ef-838f-230e7c8adbd8",
            "category": "Phone, cell, internet, satellite & cable",
            "monthlyAmount": 245,
            "notes": ""
          },
          {
            "id": "expense-a7c726d2-aae4-4982-8d31-8ef6cada794f",
            "category": "Food & housekeeping supplies",
            "monthlyAmount": 925,
            "notes": ""
          },
          {
            "id": "expense-9f25b795-47ea-4515-844b-26443eac84ca",
            "category": "Childcare & children education",
            "monthlyAmount": 640,
            "notes": ""
          },
          {
            "id": "expense-7534efde-fa0c-4009-8904-58bc54e7489e",
            "category": "Transportation",
            "monthlyAmount": 560,
            "notes": ""
          },
          {
            "id": "expense-dd326d79-2eca-4763-9761-3e275aa0e556",
            "category": "Vehicle payments",
            "monthlyAmount": 610,
            "notes": ""
          },
          {
            "id": "expense-d4645ccd-8f04-481f-8ea7-62e603471486",
            "category": "Vehicle insurance",
            "monthlyAmount": 220,
            "notes": ""
          },
          {
            "id": "expense-a1644241-8aa1-42ce-8231-5ca8bc79e342",
            "category": "Taxes not deducted from wages",
            "monthlyAmount": 210,
            "notes": ""
          }
        ],
        "sofaEvents": [],
        "petitionFlags": {
          "evictionJudgment": "No",
          "hazardousProperty": "No",
          "hazardousPropertyAddress": "",
          "hazardousPropertyCity": "",
          "hazardousPropertyDescription": "",
          "hazardousPropertyImmediateReason": "",
          "hazardousPropertyState": "",
          "hazardousPropertyStreet2": "",
          "hazardousPropertyZipCode": "",
          "rentsResidence": "No",
          "soleProprietor": "No",
          "soleProprietorBusinessCity": "",
          "soleProprietorBusinessName": "",
          "soleProprietorBusinessState": "",
          "soleProprietorBusinessStreet": "",
          "soleProprietorBusinessType": "",
          "soleProprietorBusinessUnit": "",
          "soleProprietorBusinessZipCode": ""
        },
        "chapter7": {
          "meansTestStatus": "",
          "medianIncomeState": "",
          "estimatedMonthlyIncome": 0,
          "securedPropertyIntent": "",
          "priorBankruptcyDischarge": "",
          "assetDistributionEstimate": ""
        },
        "chapter13": {
          "planMonths": 60,
          "proposedMonthlyPayment": 1150,
          "priorityClaimsEstimate": 7400,
          "arrearsCureEstimate": 21400,
          "disposableIncomeNotes": "Entered budget suggests feasibility, but payroll proof and tax claims are missing."
        },
        "documents": [
          {
            "id": "document-fa943961-a2f0-459e-8137-c93b4bdc858e",
            "name": "Driver's license",
            "category": "Identity",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-f90fdabd-fff9-44a7-9d7f-db5bdde8e5b5",
            "name": "Social Security card, W-2, or 1099",
            "category": "Identity",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-2778cda3-a397-43bf-a926-d95db2136f92",
            "name": "Tax return - last year",
            "category": "Taxes",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-96589ef8-eb13-41b3-8422-6fe89813a4bf",
            "name": "Tax return - two years ago",
            "category": "Taxes",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-7092c563-b9ef-4ca7-a5f6-ede3eccfb56f",
            "name": "Pay stubs - last 6 months",
            "category": "Income",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-37103692-fb23-48a8-84dc-bb07e7c93d4a",
            "name": "Bank statements - last 6 months",
            "category": "Banking",
            "status": "needed",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": []
          },
          {
            "id": "document-2bfc6ac7-3880-4591-a1ee-5325f7937b56",
            "name": "Bank or financial account statements",
            "category": "Assets",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-7c798dd5-8426-4161-a021-773947dfb70d",
            "name": "Statements for all debts",
            "category": "Debt",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-04bf495d-25b1-4847-b71f-09cbe7bb03f6",
            "name": "Attorney / collector letters",
            "category": "Debt",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-8498f020-7b46-4c62-9352-05b20198b607",
            "name": "Court paperwork",
            "category": "Financial affairs",
            "status": "needed",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": []
          },
          {
            "id": "document-b6e6fd0a-aa05-4a2e-9a5e-fa509215d799",
            "name": "Pre-bankruptcy counseling certificate",
            "category": "Required to file",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          }
        ],
        "financialAffairs": {
          "prior-addresses": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "community-property-state": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "job-or-business-income": {
            "answer": "Yes",
            "entries": [],
            "fields": {},
            "selected": [
              "Wages, commissions, bonuses, or tips"
            ]
          },
          "other-income": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "creditor-payments-90-days": {
            "answer": "Yes",
            "entries": [
              {
                "id": "fa-entry-300fc4f0-bc1a-4a4d-9b8f-2304bd8006d8",
                "fields": {
                  "creditor": "Frontier Mortgage Servicing",
                  "paymentDates": "2026-05 and 2026-06",
                  "totalPaid": "1800"
                }
              }
            ],
            "fields": {},
            "selected": []
          },
          "insider-debt-payments": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "insider-benefit-transfer": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "lawsuits": {
            "answer": "Yes",
            "entries": [
              {
                "id": "fa-entry-10182234-b0fa-499c-8ebd-9b02cd2c169e",
                "fields": {
                  "caseNumber": "",
                  "caseTitle": "Frontier Mortgage Servicing foreclosure",
                  "courtOrAgency": "Arapahoe County Public Trustee",
                  "status": "Sale noticed, exact sale date missing"
                }
              }
            ],
            "fields": {},
            "selected": []
          },
          "property-taken": {
            "answer": "Yes",
            "entries": [
              {
                "id": "fa-entry-23ab23db-e7e2-4e2e-ae8d-84de476ed122",
                "fields": {
                  "creditor": "Frontier Mortgage Servicing",
                  "date": "",
                  "property": "Home foreclosure started",
                  "value": "Unknown"
                }
              }
            ],
            "fields": {},
            "selected": []
          },
          "setoff": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "receiver-property": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "gifts": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "charitable-gifts": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "losses": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "bankruptcy-consult-payments": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "creditor-help-payments": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "property-transfers": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "asset-protection-transfer": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "closed-accounts": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "safe-deposit-box": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "storage-unit": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "property-for-others": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "environmental-liability-notice": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "hazardous-material-release": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "environmental-proceeding": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "business-connections": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "business-financial-statements": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          }
        }
      },
      "packageId": "bkfl-demo-daniel-sofia-reyes-ch13",
      "readiness": {
        "documentsReady": 9,
        "documentsRequired": 11,
        "fieldsFilled": 27,
        "fieldsRequired": 27,
        "reviewFlagCount": 4,
        "status": "needs-client-action"
      },
      "reviewFlags": [
        {
          "id": "basics-Debtor identity is incomplete",
          "severity": "critical",
          "sectionId": "basics",
          "title": "Debtor identity is incomplete",
          "detail": "At least one debtor is missing name or SSN last-four intake data."
        },
        {
          "id": "documents-Document requests are still open",
          "severity": "info",
          "sectionId": "documents",
          "title": "Document requests are still open",
          "detail": "Use the checklist to track pay advices, tax returns, IDs, statements, and case-specific backups."
        },
        {
          "id": "chapter13-Arrears need plan treatment",
          "severity": "info",
          "sectionId": "chapter13",
          "title": "Arrears need plan treatment",
          "detail": "$22,220 in recorded arrears should be reconciled with plan treatment."
        },
        {
          "id": "debts-Unsecured debt captured",
          "severity": "info",
          "sectionId": "debts",
          "title": "Unsecured debt captured",
          "detail": "$33,000 in unsecured claims is recorded for review."
        }
      ],
      "schemaVersion": 1,
      "source": {
        "branch": "Jimmy",
        "scenarioId": "daniel-sofia-reyes-ch13",
        "system": "BK FastLane Intake"
      },
      "submittedAt": "2026-07-13T17:05:44.989Z"
    },
    {
      "completion": {
        "documentCompletion": {
          "applicableRequired": 11,
          "receivedRequired": 9
        },
        "emailDraft": {
          "bodySnapshot": "Hi Erin,\n\nWe reviewed your BK FastLane intake entry and found a few items that still need your attention before the attorney can use the file efficiently.\n\n1. Please complete: Other names used.\n2. Please complete: Spouse Social Security number.\n3. Please upload: Pre-bankruptcy counseling certificate.\n4. Please upload: Tax return - two years ago.\n\nYou do not need to calculate legal conclusions. Just enter your best information and upload the requested documents when available.\n\nReturn to your intake: https://jimmydanol.github.io/bkfl-crm-lite/intake-demo.html?packageId=bkfl-demo-erin-cole-mitchell-ch13\n\nThank you,\nBK FastLane intake team",
          "deliveryMode": "simulation",
          "intakeResumeUrl": "https://jimmydanol.github.io/bkfl-crm-lite/intake-demo.html?packageId=bkfl-demo-erin-cole-mitchell-ch13",
          "recipient": "erin.mitchell.fake@example.test",
          "status": "pending_approval",
          "subject": "BK FastLane reminder: 4 intake items still needed"
        },
        "events": [],
        "fieldCompletion": {
          "applicableRequired": 27,
          "enteredRequired": 27,
          "percent": 100
        },
        "intakeResumeUrl": "https://jimmydanol.github.io/bkfl-crm-lite/intake-demo.html?packageId=bkfl-demo-erin-cole-mitchell-ch13",
        "missingItems": [
          {
            "canonicalPath": "matter.debtors[0].otherNames",
            "clientInstruction": "Please complete: Other names used.",
            "essential": true,
            "id": "missing-log-start.debtor.otherNames",
            "kind": "field",
            "label": "Other names used",
            "priority": "high"
          },
          {
            "canonicalPath": "matter.debtors[1].socialSecurityNumber",
            "clientInstruction": "Please complete: Spouse Social Security number.",
            "essential": true,
            "id": "missing-log-start.debtor2.socialSecurityNumber",
            "kind": "field",
            "label": "Spouse Social Security number",
            "priority": "high"
          },
          {
            "canonicalPath": "matter.documents[name='Pre-bankruptcy counseling certificate']",
            "clientInstruction": "Please upload: Pre-bankruptcy counseling certificate.",
            "essential": true,
            "id": "document-Pre-bankruptcy counseling certificate",
            "kind": "document",
            "label": "Pre-bankruptcy counseling certificate",
            "priority": "medium"
          },
          {
            "canonicalPath": "matter.documents[name='Tax return - two years ago']",
            "clientInstruction": "Please upload: Tax return - two years ago.",
            "essential": true,
            "id": "document-Tax return - two years ago",
            "kind": "document",
            "label": "Tax return - two years ago",
            "priority": "medium"
          }
        ],
        "percent": 92,
        "revision": 1,
        "status": "needs_client_action"
      },
      "demo": true,
      "generatedAt": "2026-07-13T17:05:44.989Z",
      "matter": {
        "id": "fake-matter-erin-cole-mitchell-ch13",
        "title": "Erin Mitchell fake client-entered Chapter 13 intake",
        "chapter": "13",
        "status": "review",
        "filingState": "UT",
        "district": "District of Utah",
        "clientGoals": "Stop foreclosure, keep house and truck, handle recent tax debt.",
        "urgentConcerns": "Foreclosure sale date notice received, but exact sale date was not entered.",
        "priorBankruptcyFiled": "Yes",
        "priorBankruptcyDetails": "Erin filed Chapter 7 in 2015 in Colorado; case number not entered.",
        "hasDependents": "Yes",
        "spouseFilingJointly": "Yes",
        "isEmployed": "Yes",
        "hasOtherHouseholdIncome": "Yes",
        "personalInfoSubmittedAt": "2026-07-13T17:05:44.989Z",
        "createdAt": "2026-07-13T17:05:45.991Z",
        "updatedAt": "2026-07-13T17:05:44.989Z",
        "debtors": [
          {
            "id": "debtor-5ffe9038-322a-4252-92b9-c29288b3a9dd",
            "firstName": "Erin",
            "middleName": "Claire",
            "lastName": "Mitchell",
            "otherNames": "",
            "email": "erin.mitchell.fake@example.test",
            "phone": "(801) 555-0206",
            "ssnLast4": "4506",
            "socialSecurityNumber": "222-33-4506",
            "address": "934 East 3900 South",
            "city": "Salt Lake City",
            "state": "UT",
            "zipCode": "84124",
            "county": "Salt Lake",
            "mailingAddressDifferent": false,
            "dateOfBirth": "12/04/1979"
          },
          {
            "id": "debtor-29bf55f4-3a99-45e2-b6da-dabfcec876fd",
            "firstName": "Cole",
            "middleName": "Andrew",
            "lastName": "Mitchell",
            "otherNames": "",
            "email": "cole.mitchell.fake@example.test",
            "phone": "(801) 555-0207",
            "ssnLast4": "",
            "socialSecurityNumber": "",
            "address": "934 East 3900 South",
            "city": "Salt Lake City",
            "state": "UT",
            "zipCode": "84124",
            "county": "Salt Lake",
            "mailingAddressDifferent": false,
            "dateOfBirth": "03/11/1981"
          }
        ],
        "household": {
          "householdSize": 4,
          "maritalStatus": "Married",
          "dependents": [
            {
              "id": "dependent-35fc311e-93b9-49cd-93a4-daf65dacb65a",
              "name": "Fake minor child A",
              "age": "12",
              "relationship": "Child",
              "livesWithDebtor": "Yes"
            },
            {
              "id": "dependent-edbde36b-6d77-4290-a1ac-6588716b5410",
              "name": "Fake minor child B",
              "age": "8",
              "relationship": "Child",
              "livesWithDebtor": "Yes"
            }
          ]
        },
        "assets": [
          {
            "id": "asset-48ee2812-b2fc-4167-84b1-3fa0d0baf2d0",
            "category": "Real estate",
            "description": "Primary residence",
            "estimatedValue": 462000,
            "lienAmount": 398000,
            "exemptionNote": "",
            "keepIntent": "Keep and cure arrears through plan",
            "propertyCity": "Aurora",
            "propertyState": "CO",
            "propertyStreet": "2448 South Quintero Way",
            "propertyZipCode": "80013"
          },
          {
            "id": "asset-3d0985ee-7630-4bd7-b75d-802ff5f0b666",
            "category": "Vehicle",
            "description": "2019 Ford F-150",
            "estimatedValue": 28200,
            "lienAmount": 25100,
            "exemptionNote": "",
            "financingStatus": "Financed",
            "keepIntent": "Keep",
            "make": "Ford",
            "mileage": "81000",
            "model": "F-150",
            "year": "2019"
          },
          {
            "id": "asset-f88ca2b2-322b-4ff8-8057-18d0a1598482",
            "category": "Bank or financial account",
            "description": "Chase joint checking",
            "estimatedValue": 2150,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "Checking"
          },
          {
            "id": "asset-ff43f190-8ee6-4391-a858-aa8d066b8126",
            "category": "Retirement or pension account",
            "description": "Erin 401(k)",
            "estimatedValue": 69000,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "401(k)"
          }
        ],
        "debts": [
          {
            "id": "fake-debt-erin-cole-mitchell-ch13-1",
            "type": "secured",
            "creditor": "Frontier Mortgage Servicing",
            "amount": 398000,
            "collateral": "Primary residence",
            "arrears": 21400,
            "notes": "Foreclosure sale date not entered by debtor."
          },
          {
            "id": "fake-debt-erin-cole-mitchell-ch13-2",
            "type": "secured",
            "creditor": "Ford Credit",
            "amount": 25100,
            "collateral": "2019 Ford F-150",
            "arrears": 820,
            "notes": "One payment behind."
          },
          {
            "id": "fake-debt-erin-cole-mitchell-ch13-3",
            "type": "priority",
            "creditor": "IRS",
            "amount": 7400,
            "collateral": "",
            "arrears": 0,
            "notes": "Recent federal tax debt; verify transcript and priority amount."
          },
          {
            "id": "fake-debt-erin-cole-mitchell-ch13-4",
            "type": "unsecured",
            "creditor": "Credit cards and personal loans",
            "amount": 33000,
            "collateral": "",
            "arrears": 0,
            "notes": "Debtor entered as group estimate."
          }
        ],
        "contracts": [],
        "codebtors": [],
        "income": [
          {
            "id": "income-193efea0-f8cd-4c9d-9cb8-054734558653",
            "source": "Employment",
            "employer": "Metro Facilities Group",
            "amount": 7100,
            "frequency": "Biweekly",
            "sixMonthTotal": 42600
          },
          {
            "id": "income-2d1005d8-d7e5-42df-821c-757a4381aac0",
            "source": "Employment",
            "employer": "Aurora Unified Schools",
            "amount": 3900,
            "frequency": "Twice monthly",
            "sixMonthTotal": 23400
          }
        ],
        "payStubIncomeEvidence": [],
        "expenses": [
          {
            "id": "expense-f9e4be6f-25a3-490e-aba3-fdf3b9d87652",
            "category": "Mortgage payment",
            "monthlyAmount": 2680,
            "notes": ""
          },
          {
            "id": "expense-3db43f89-7838-41ef-8da0-45401c4771dd",
            "category": "Electricity, heat, natural gas",
            "monthlyAmount": 310,
            "notes": ""
          },
          {
            "id": "expense-bf4afcfb-6287-40f7-bad4-bdd66d6c7e12",
            "category": "Water, sewer, garbage collection",
            "monthlyAmount": 115,
            "notes": ""
          },
          {
            "id": "expense-8d695c4b-268b-4867-84cb-67a8ea9e72c9",
            "category": "Phone, cell, internet, satellite & cable",
            "monthlyAmount": 245,
            "notes": ""
          },
          {
            "id": "expense-2d282e21-9b8b-4d29-aa1d-28b302a13c2d",
            "category": "Food & housekeeping supplies",
            "monthlyAmount": 925,
            "notes": ""
          },
          {
            "id": "expense-75a4bbbb-e479-40f8-9fe0-32675c02610c",
            "category": "Childcare & children education",
            "monthlyAmount": 640,
            "notes": ""
          },
          {
            "id": "expense-7d382dc9-e196-42b5-b041-f2d8d71e0d74",
            "category": "Transportation",
            "monthlyAmount": 560,
            "notes": ""
          },
          {
            "id": "expense-b9b5995e-5bbd-4c07-a9b6-caf66fad1afa",
            "category": "Vehicle payments",
            "monthlyAmount": 610,
            "notes": ""
          },
          {
            "id": "expense-f3de1eb7-eb60-4891-a28e-2e4f7222e1f8",
            "category": "Vehicle insurance",
            "monthlyAmount": 220,
            "notes": ""
          },
          {
            "id": "expense-b6fa3fab-9485-4a94-8e5f-c3d19c696b7c",
            "category": "Taxes not deducted from wages",
            "monthlyAmount": 210,
            "notes": ""
          }
        ],
        "sofaEvents": [],
        "petitionFlags": {
          "evictionJudgment": "No",
          "hazardousProperty": "No",
          "hazardousPropertyAddress": "",
          "hazardousPropertyCity": "",
          "hazardousPropertyDescription": "",
          "hazardousPropertyImmediateReason": "",
          "hazardousPropertyState": "",
          "hazardousPropertyStreet2": "",
          "hazardousPropertyZipCode": "",
          "rentsResidence": "No",
          "soleProprietor": "No",
          "soleProprietorBusinessCity": "",
          "soleProprietorBusinessName": "",
          "soleProprietorBusinessState": "",
          "soleProprietorBusinessStreet": "",
          "soleProprietorBusinessType": "",
          "soleProprietorBusinessUnit": "",
          "soleProprietorBusinessZipCode": ""
        },
        "chapter7": {
          "meansTestStatus": "",
          "medianIncomeState": "",
          "estimatedMonthlyIncome": 0,
          "securedPropertyIntent": "",
          "priorBankruptcyDischarge": "",
          "assetDistributionEstimate": ""
        },
        "chapter13": {
          "planMonths": 60,
          "proposedMonthlyPayment": 1150,
          "priorityClaimsEstimate": 7400,
          "arrearsCureEstimate": 21400,
          "disposableIncomeNotes": "Entered budget suggests feasibility, but payroll proof and tax claims are missing."
        },
        "documents": [
          {
            "id": "document-e1cec1f0-ea3e-426b-99a6-d61902ca7748",
            "name": "Driver's license",
            "category": "Identity",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-3087d8fb-459d-4caa-8b0c-b0bb81059d56",
            "name": "Social Security card, W-2, or 1099",
            "category": "Identity",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-863d5e0c-dd3e-46e1-8b9f-e276820d3508",
            "name": "Tax return - last year",
            "category": "Taxes",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-bb8f69d8-d7a1-4b2d-892e-1cedcd3c7455",
            "name": "Tax return - two years ago",
            "category": "Taxes",
            "status": "needed",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": []
          },
          {
            "id": "document-ea636631-bac1-4ff6-8a59-68898034e8fe",
            "name": "Pay stubs - last 6 months",
            "category": "Income",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-6155694d-5cbf-4027-ae7a-4a7dbe5c8043",
            "name": "Bank statements - last 6 months",
            "category": "Banking",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-c6081229-edce-4bee-8484-0df2caa7a289",
            "name": "Bank or financial account statements",
            "category": "Assets",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-1c3afca9-63c1-4140-aa63-22d29fee0499",
            "name": "Statements for all debts",
            "category": "Debt",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-27f12530-7d34-427b-a2e9-11de531f459f",
            "name": "Attorney / collector letters",
            "category": "Debt",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-ab4dc4f6-8fd3-4288-864a-809c0f5f0820",
            "name": "Court paperwork",
            "category": "Financial affairs",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-b0352d37-ac21-4e9e-b8e1-7ae3f9f04139",
            "name": "Pre-bankruptcy counseling certificate",
            "category": "Required to file",
            "status": "needed",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": []
          }
        ],
        "financialAffairs": {
          "prior-addresses": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "community-property-state": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "job-or-business-income": {
            "answer": "Yes",
            "entries": [],
            "fields": {},
            "selected": [
              "Wages, commissions, bonuses, or tips"
            ]
          },
          "other-income": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "creditor-payments-90-days": {
            "answer": "Yes",
            "entries": [
              {
                "id": "fa-entry-300fc4f0-bc1a-4a4d-9b8f-2304bd8006d8",
                "fields": {
                  "creditor": "Frontier Mortgage Servicing",
                  "paymentDates": "2026-05 and 2026-06",
                  "totalPaid": "1800"
                }
              }
            ],
            "fields": {},
            "selected": []
          },
          "insider-debt-payments": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "insider-benefit-transfer": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "lawsuits": {
            "answer": "Yes",
            "entries": [
              {
                "id": "fa-entry-10182234-b0fa-499c-8ebd-9b02cd2c169e",
                "fields": {
                  "caseNumber": "",
                  "caseTitle": "Frontier Mortgage Servicing foreclosure",
                  "courtOrAgency": "Arapahoe County Public Trustee",
                  "status": "Sale noticed, exact sale date missing"
                }
              }
            ],
            "fields": {},
            "selected": []
          },
          "property-taken": {
            "answer": "Yes",
            "entries": [
              {
                "id": "fa-entry-23ab23db-e7e2-4e2e-ae8d-84de476ed122",
                "fields": {
                  "creditor": "Frontier Mortgage Servicing",
                  "date": "",
                  "property": "Home foreclosure started",
                  "value": "Unknown"
                }
              }
            ],
            "fields": {},
            "selected": []
          },
          "setoff": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "receiver-property": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "gifts": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "charitable-gifts": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "losses": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "bankruptcy-consult-payments": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "creditor-help-payments": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "property-transfers": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "asset-protection-transfer": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "closed-accounts": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "safe-deposit-box": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "storage-unit": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "property-for-others": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "environmental-liability-notice": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "hazardous-material-release": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "environmental-proceeding": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "business-connections": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "business-financial-statements": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          }
        }
      },
      "packageId": "bkfl-demo-erin-cole-mitchell-ch13",
      "readiness": {
        "documentsReady": 9,
        "documentsRequired": 11,
        "fieldsFilled": 27,
        "fieldsRequired": 27,
        "reviewFlagCount": 4,
        "status": "needs-client-action"
      },
      "reviewFlags": [
        {
          "id": "basics-Debtor identity is incomplete",
          "severity": "critical",
          "sectionId": "basics",
          "title": "Debtor identity is incomplete",
          "detail": "At least one debtor is missing name or SSN last-four intake data."
        },
        {
          "id": "documents-Document requests are still open",
          "severity": "info",
          "sectionId": "documents",
          "title": "Document requests are still open",
          "detail": "Use the checklist to track pay advices, tax returns, IDs, statements, and case-specific backups."
        },
        {
          "id": "chapter13-Arrears need plan treatment",
          "severity": "info",
          "sectionId": "chapter13",
          "title": "Arrears need plan treatment",
          "detail": "$22,220 in recorded arrears should be reconciled with plan treatment."
        },
        {
          "id": "debts-Unsecured debt captured",
          "severity": "info",
          "sectionId": "debts",
          "title": "Unsecured debt captured",
          "detail": "$33,000 in unsecured claims is recorded for review."
        }
      ],
      "schemaVersion": 1,
      "source": {
        "branch": "Jimmy",
        "scenarioId": "erin-cole-mitchell-ch13",
        "system": "BK FastLane Intake"
      },
      "submittedAt": "2026-07-13T17:05:44.989Z"
    },
    {
      "completion": {
        "documentCompletion": {
          "applicableRequired": 11,
          "receivedRequired": 9
        },
        "emailDraft": {
          "bodySnapshot": "Hi Theo,\n\nWe reviewed your BK FastLane intake entry and found a few items that still need your attention before the attorney can use the file efficiently.\n\n1. Please return to Personal Info and answer: Date of birth.\n2. Please enter the creditor or collection agency name for the $4,300 debt.\n3. Please complete: Other names used.\n4. Please complete: Prior bankruptcy details.\n5. Please upload: Driver's license.\n6. Please upload: Social Security card, W-2, or 1099.\n\nYou do not need to calculate legal conclusions. Just enter your best information and upload the requested documents when available.\n\nReturn to your intake: https://jimmydanol.github.io/bkfl-crm-lite/intake-demo.html?packageId=bkfl-demo-theo-bennett-ch7-retired\n\nThank you,\nBK FastLane intake team",
          "deliveryMode": "simulation",
          "intakeResumeUrl": "https://jimmydanol.github.io/bkfl-crm-lite/intake-demo.html?packageId=bkfl-demo-theo-bennett-ch7-retired",
          "recipient": "theo.bennett.fake@example.test",
          "status": "pending_approval",
          "subject": "BK FastLane reminder: 6 intake items still needed"
        },
        "events": [],
        "fieldCompletion": {
          "applicableRequired": 27,
          "enteredRequired": 26,
          "percent": 96
        },
        "intakeResumeUrl": "https://jimmydanol.github.io/bkfl-crm-lite/intake-demo.html?packageId=bkfl-demo-theo-bennett-ch7-retired",
        "missingItems": [
          {
            "canonicalPath": "matter.debtors[0].dateOfBirth",
            "clientInstruction": "Please return to Personal Info and answer: Date of birth.",
            "essential": true,
            "id": "schema-start.debtor.dateOfBirth",
            "kind": "field",
            "label": "Date of birth",
            "priority": "high"
          },
          {
            "canonicalPath": "matter.debts[id='fake-debt-theo-bennett-ch7-retired-2'].creditor",
            "clientInstruction": "Please enter the creditor or collection agency name for the $4,300 debt.",
            "essential": true,
            "id": "debt-creditor-fake-debt-theo-bennett-ch7-retired-2",
            "kind": "field",
            "label": "Debt creditor name missing",
            "priority": "high"
          },
          {
            "canonicalPath": "matter.debtors[0].otherNames",
            "clientInstruction": "Please complete: Other names used.",
            "essential": true,
            "id": "missing-log-start.debtor.otherNames",
            "kind": "field",
            "label": "Other names used",
            "priority": "high"
          },
          {
            "canonicalPath": "matter.priorBankruptcyDetails",
            "clientInstruction": "Please complete: Prior bankruptcy details.",
            "essential": true,
            "id": "missing-log-start.priorBankruptcyDetails",
            "kind": "field",
            "label": "Prior bankruptcy details",
            "priority": "high"
          },
          {
            "canonicalPath": "matter.documents[name='Driver's license']",
            "clientInstruction": "Please upload: Driver's license.",
            "essential": true,
            "id": "document-Driver's license",
            "kind": "document",
            "label": "Driver's license",
            "priority": "medium"
          },
          {
            "canonicalPath": "matter.documents[name='Social Security card, W-2, or 1099']",
            "clientInstruction": "Please upload: Social Security card, W-2, or 1099.",
            "essential": true,
            "id": "document-Social Security card, W-2, or 1099",
            "kind": "document",
            "label": "Social Security card, W-2, or 1099",
            "priority": "medium"
          }
        ],
        "percent": 90,
        "revision": 1,
        "status": "needs_client_action"
      },
      "demo": true,
      "generatedAt": "2026-07-13T17:05:44.989Z",
      "matter": {
        "id": "fake-matter-theo-bennett-ch7-retired",
        "title": "Theo Bennett fake client-entered Chapter 7 intake",
        "chapter": "7",
        "status": "review",
        "filingState": "CO",
        "district": "District of Colorado",
        "clientGoals": "Discharge credit cards and old medical bills while protecting retirement account.",
        "urgentConcerns": "Automatic debit from QuickCash is overdrawing her account.",
        "priorBankruptcyFiled": "No",
        "priorBankruptcyDetails": "",
        "hasDependents": "No",
        "spouseFilingJointly": "No",
        "isEmployed": "No",
        "hasOtherHouseholdIncome": "Yes",
        "personalInfoSubmittedAt": "2026-07-13T17:05:44.989Z",
        "createdAt": "2026-07-13T17:05:46.011Z",
        "updatedAt": "2026-07-13T17:05:44.989Z",
        "debtors": [
          {
            "id": "debtor-0de053e4-0fe1-47de-817c-eab83cdae95b",
            "firstName": "Theo",
            "middleName": "James",
            "lastName": "Bennett",
            "otherNames": "",
            "email": "theo.bennett.fake@example.test",
            "phone": "(303) 555-0208",
            "ssnLast4": "5508",
            "socialSecurityNumber": "333-44-5508",
            "address": "2450 West Alameda Avenue Unit 4",
            "city": "Denver",
            "state": "CO",
            "zipCode": "80219",
            "county": "Denver",
            "mailingAddressDifferent": false,
            "dateOfBirth": ""
          }
        ],
        "household": {
          "householdSize": 1,
          "maritalStatus": "Widowed",
          "dependents": []
        },
        "assets": [
          {
            "id": "asset-7d5ed897-d023-43fb-a75c-7d18ebcd4e37",
            "category": "Bank or financial account",
            "description": "Wells Fargo checking",
            "estimatedValue": 780,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "Checking"
          },
          {
            "id": "asset-c18199e4-c2d7-4560-9f9f-fc563cd1fee2",
            "category": "Bank or financial account",
            "description": "Wells Fargo savings",
            "estimatedValue": 1100,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "Savings"
          },
          {
            "id": "asset-be2e745a-88a6-4754-a0d8-9a0af3d27b05",
            "category": "Retirement or pension account",
            "description": "Small rollover IRA",
            "estimatedValue": 14600,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "IRA"
          },
          {
            "id": "asset-ae9ef0e2-009a-4586-901a-4f68e656a027",
            "category": "Household goods and furnishings",
            "description": "Apartment furniture, clothing, television, mobility equipment",
            "estimatedValue": 3600,
            "lienAmount": 0,
            "exemptionNote": ""
          }
        ],
        "debts": [
          {
            "id": "fake-debt-theo-bennett-ch7-retired-1",
            "type": "unsecured",
            "creditor": "Capital One",
            "amount": 11100,
            "collateral": "",
            "arrears": 0,
            "notes": "Debtor did not enter account number or collector details."
          },
          {
            "id": "fake-debt-theo-bennett-ch7-retired-2",
            "type": "unsecured",
            "creditor": "",
            "amount": 4300,
            "collateral": "",
            "arrears": 0,
            "notes": "Medical collector letter; creditor name not entered."
          },
          {
            "id": "fake-debt-theo-bennett-ch7-retired-3",
            "type": "unsecured",
            "creditor": "QuickCash Installment Loans",
            "amount": 2600,
            "collateral": "",
            "arrears": 0,
            "notes": "Possible high-interest loan; payment drafting from bank account."
          }
        ],
        "contracts": [],
        "codebtors": [],
        "income": [
          {
            "id": "income-09b4f56b-daa5-4038-bb69-d4eb4548bf86",
            "source": "Social Security / public benefits",
            "employer": "Social Security Administration",
            "amount": 1980,
            "frequency": "Monthly",
            "sixMonthTotal": 11880
          },
          {
            "id": "income-fad036c4-9af0-46b6-a2bf-091bf9ae971f",
            "source": "Pension / retirement",
            "employer": "Former employer pension",
            "amount": 500,
            "frequency": "Monthly",
            "sixMonthTotal": 3000
          }
        ],
        "payStubIncomeEvidence": [],
        "expenses": [
          {
            "id": "expense-fa03de15-da63-4a69-9d45-1964525a9116",
            "category": "Rent or home/mortgage payment",
            "monthlyAmount": 1180,
            "notes": ""
          },
          {
            "id": "expense-79321f5b-c387-4224-8e01-453b92c88dba",
            "category": "Electricity, heat, natural gas",
            "monthlyAmount": 120,
            "notes": ""
          },
          {
            "id": "expense-3515882e-1a04-475c-9c81-703e16eb5eb0",
            "category": "Phone, cell, internet, satellite & cable",
            "monthlyAmount": 135,
            "notes": ""
          },
          {
            "id": "expense-f854e800-5628-4dcb-aee9-32145324cc5e",
            "category": "Food & housekeeping supplies",
            "monthlyAmount": 425,
            "notes": ""
          },
          {
            "id": "expense-8b421cbb-2689-4b5f-8801-75d324f77d72",
            "category": "Medical & dental expenses",
            "monthlyAmount": 220,
            "notes": ""
          },
          {
            "id": "expense-cf8dd8ea-3fc7-4f43-847f-056bb1a8a808",
            "category": "Transportation",
            "monthlyAmount": 160,
            "notes": ""
          },
          {
            "id": "expense-84f43b27-e5f0-4f1a-ba60-67d45e52d0a7",
            "category": "Other expenses",
            "monthlyAmount": 95,
            "notes": "Prescription delivery and mobility supplies"
          }
        ],
        "sofaEvents": [],
        "petitionFlags": {
          "evictionJudgment": "No",
          "hazardousProperty": "No",
          "hazardousPropertyAddress": "",
          "hazardousPropertyCity": "",
          "hazardousPropertyDescription": "",
          "hazardousPropertyImmediateReason": "",
          "hazardousPropertyState": "",
          "hazardousPropertyStreet2": "",
          "hazardousPropertyZipCode": "",
          "rentsResidence": "Yes",
          "soleProprietor": "No",
          "soleProprietorBusinessCity": "",
          "soleProprietorBusinessName": "",
          "soleProprietorBusinessState": "",
          "soleProprietorBusinessStreet": "",
          "soleProprietorBusinessType": "",
          "soleProprietorBusinessUnit": "",
          "soleProprietorBusinessZipCode": ""
        },
        "chapter7": {
          "meansTestStatus": "Likely fixed-income review",
          "medianIncomeState": "Utah",
          "estimatedMonthlyIncome": 2480,
          "securedPropertyIntent": "No secured property listed.",
          "priorBankruptcyDischarge": "",
          "assetDistributionEstimate": "Low-value non-retirement property; exemption review still required."
        },
        "chapter13": {
          "planMonths": 0,
          "proposedMonthlyPayment": 0,
          "priorityClaimsEstimate": 0,
          "arrearsCureEstimate": 0,
          "disposableIncomeNotes": ""
        },
        "documents": [
          {
            "id": "document-04c4dda5-ea73-4c44-94b2-40369f795d63",
            "name": "Driver's license",
            "category": "Identity",
            "status": "needed",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": []
          },
          {
            "id": "document-fa9719a0-4113-4baf-b440-f8acfc9f958d",
            "name": "Social Security card, W-2, or 1099",
            "category": "Identity",
            "status": "needed",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": []
          },
          {
            "id": "document-4b3148e1-ca92-4eb7-965f-340746640529",
            "name": "Tax return - last year",
            "category": "Taxes",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-7b424988-0880-43bf-8335-5e84da37dfba",
            "name": "Tax return - two years ago",
            "category": "Taxes",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-18e2de34-462d-4b75-baad-44139d623eff",
            "name": "Pay stubs - last 6 months",
            "category": "Income",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-957eee73-f233-419b-baf1-e70bf8dc3d05",
            "name": "Bank statements - last 6 months",
            "category": "Banking",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-76db05b2-b5ea-4726-affe-6a69c98e6715",
            "name": "Bank or financial account statements",
            "category": "Assets",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-57f9d2de-9513-477b-b2e7-b36d32220496",
            "name": "Statements for all debts",
            "category": "Debt",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-88af761a-0a62-4555-a74a-c02bbaf88623",
            "name": "Attorney / collector letters",
            "category": "Debt",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-07f33a70-72bc-4908-8154-347c63870f50",
            "name": "Court paperwork",
            "category": "Financial affairs",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-fb4fc2ee-e37a-4bd8-988c-80ce0e8910b1",
            "name": "Pre-bankruptcy counseling certificate",
            "category": "Required to file",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          }
        ],
        "financialAffairs": {
          "prior-addresses": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "community-property-state": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "job-or-business-income": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "other-income": {
            "answer": "Yes",
            "entries": [
              {
                "id": "fa-entry-b90b6978-bcbb-4a12-b825-69ee0ab3a916",
                "fields": {
                  "amount": "2480",
                  "frequency": "Monthly",
                  "source": "Social Security retirement and pension"
                }
              }
            ],
            "fields": {},
            "selected": []
          },
          "creditor-payments-90-days": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "insider-debt-payments": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "insider-benefit-transfer": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "lawsuits": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "property-taken": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "setoff": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "receiver-property": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "gifts": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "charitable-gifts": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "losses": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "bankruptcy-consult-payments": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "creditor-help-payments": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "property-transfers": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "asset-protection-transfer": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "closed-accounts": {
            "answer": "Yes",
            "entries": [
              {
                "id": "fa-entry-50087bc4-55d5-4d3a-9348-a8ff31a64a18",
                "fields": {
                  "account": "Mountain America Credit Union checking",
                  "closedDate": "2025-12",
                  "institution": "Mountain America Credit Union"
                }
              }
            ],
            "fields": {},
            "selected": []
          },
          "safe-deposit-box": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "storage-unit": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "property-for-others": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "environmental-liability-notice": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "hazardous-material-release": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "environmental-proceeding": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "business-connections": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "business-financial-statements": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          }
        }
      },
      "packageId": "bkfl-demo-theo-bennett-ch7-retired",
      "readiness": {
        "documentsReady": 9,
        "documentsRequired": 11,
        "fieldsFilled": 26,
        "fieldsRequired": 27,
        "reviewFlagCount": 2,
        "status": "needs-client-action"
      },
      "reviewFlags": [
        {
          "id": "documents-Document requests are still open",
          "severity": "info",
          "sectionId": "documents",
          "title": "Document requests are still open",
          "detail": "Use the checklist to track pay advices, tax returns, IDs, statements, and case-specific backups."
        },
        {
          "id": "debts-Unsecured debt captured",
          "severity": "info",
          "sectionId": "debts",
          "title": "Unsecured debt captured",
          "detail": "$18,000 in unsecured claims is recorded for review."
        }
      ],
      "schemaVersion": 1,
      "source": {
        "branch": "Jimmy",
        "scenarioId": "theo-bennett-ch7-retired",
        "system": "BK FastLane Intake"
      },
      "submittedAt": "2026-07-13T17:05:44.989Z"
    },
    {
      "completion": {
        "documentCompletion": {
          "applicableRequired": 11,
          "receivedRequired": 9
        },
        "emailDraft": {
          "bodySnapshot": "Hi Lucas,\n\nWe reviewed your BK FastLane intake entry and found a few items that still need your attention before the attorney can use the file efficiently.\n\n1. Please return to Personal Info and answer: Date of birth.\n2. Please enter the creditor or collection agency name for the $4,300 debt.\n3. Please complete: Other names used.\n4. Please complete: Prior bankruptcy details.\n5. Please upload: Attorney / collector letters.\n6. Please upload: Bank or financial account statements.\n\nYou do not need to calculate legal conclusions. Just enter your best information and upload the requested documents when available.\n\nReturn to your intake: https://jimmydanol.github.io/bkfl-crm-lite/intake-demo.html?packageId=bkfl-demo-lucas-romero-ch7-retired\n\nThank you,\nBK FastLane intake team",
          "deliveryMode": "simulation",
          "intakeResumeUrl": "https://jimmydanol.github.io/bkfl-crm-lite/intake-demo.html?packageId=bkfl-demo-lucas-romero-ch7-retired",
          "recipient": "lucas.romero.fake@example.test",
          "status": "pending_approval",
          "subject": "BK FastLane reminder: 6 intake items still needed"
        },
        "events": [],
        "fieldCompletion": {
          "applicableRequired": 27,
          "enteredRequired": 26,
          "percent": 96
        },
        "intakeResumeUrl": "https://jimmydanol.github.io/bkfl-crm-lite/intake-demo.html?packageId=bkfl-demo-lucas-romero-ch7-retired",
        "missingItems": [
          {
            "canonicalPath": "matter.debtors[0].dateOfBirth",
            "clientInstruction": "Please return to Personal Info and answer: Date of birth.",
            "essential": true,
            "id": "schema-start.debtor.dateOfBirth",
            "kind": "field",
            "label": "Date of birth",
            "priority": "high"
          },
          {
            "canonicalPath": "matter.debts[id='fake-debt-lucas-romero-ch7-retired-2'].creditor",
            "clientInstruction": "Please enter the creditor or collection agency name for the $4,300 debt.",
            "essential": true,
            "id": "debt-creditor-fake-debt-lucas-romero-ch7-retired-2",
            "kind": "field",
            "label": "Debt creditor name missing",
            "priority": "high"
          },
          {
            "canonicalPath": "matter.debtors[0].otherNames",
            "clientInstruction": "Please complete: Other names used.",
            "essential": true,
            "id": "missing-log-start.debtor.otherNames",
            "kind": "field",
            "label": "Other names used",
            "priority": "high"
          },
          {
            "canonicalPath": "matter.priorBankruptcyDetails",
            "clientInstruction": "Please complete: Prior bankruptcy details.",
            "essential": true,
            "id": "missing-log-start.priorBankruptcyDetails",
            "kind": "field",
            "label": "Prior bankruptcy details",
            "priority": "high"
          },
          {
            "canonicalPath": "matter.documents[name='Attorney / collector letters']",
            "clientInstruction": "Please upload: Attorney / collector letters.",
            "essential": true,
            "id": "document-Attorney / collector letters",
            "kind": "document",
            "label": "Attorney / collector letters",
            "priority": "medium"
          },
          {
            "canonicalPath": "matter.documents[name='Bank or financial account statements']",
            "clientInstruction": "Please upload: Bank or financial account statements.",
            "essential": true,
            "id": "document-Bank or financial account statements",
            "kind": "document",
            "label": "Bank or financial account statements",
            "priority": "medium"
          }
        ],
        "percent": 90,
        "revision": 1,
        "status": "needs_client_action"
      },
      "demo": true,
      "generatedAt": "2026-07-13T17:05:44.989Z",
      "matter": {
        "id": "fake-matter-lucas-romero-ch7-retired",
        "title": "Lucas Romero fake client-entered Chapter 7 intake",
        "chapter": "7",
        "status": "review",
        "filingState": "CO",
        "district": "District of Colorado",
        "clientGoals": "Discharge credit cards and old medical bills while protecting retirement account.",
        "urgentConcerns": "Automatic debit from QuickCash is overdrawing her account.",
        "priorBankruptcyFiled": "No",
        "priorBankruptcyDetails": "",
        "hasDependents": "No",
        "spouseFilingJointly": "No",
        "isEmployed": "No",
        "hasOtherHouseholdIncome": "Yes",
        "personalInfoSubmittedAt": "2026-07-13T17:05:44.989Z",
        "createdAt": "2026-07-13T17:05:46.029Z",
        "updatedAt": "2026-07-13T17:05:44.989Z",
        "debtors": [
          {
            "id": "debtor-bc259729-e135-406f-9ec4-6dad701ad0c0",
            "firstName": "Lucas",
            "middleName": "Miguel",
            "lastName": "Romero",
            "otherNames": "",
            "email": "lucas.romero.fake@example.test",
            "phone": "(720) 555-0209",
            "ssnLast4": "5509",
            "socialSecurityNumber": "333-44-5509",
            "address": "4880 Morrison Road Unit 2",
            "city": "Denver",
            "state": "CO",
            "zipCode": "80219",
            "county": "Denver",
            "mailingAddressDifferent": false,
            "dateOfBirth": ""
          }
        ],
        "household": {
          "householdSize": 1,
          "maritalStatus": "Widowed",
          "dependents": []
        },
        "assets": [
          {
            "id": "asset-1ecfbe61-c040-4c14-a997-ce6deb7adeba",
            "category": "Bank or financial account",
            "description": "Wells Fargo checking",
            "estimatedValue": 780,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "Checking"
          },
          {
            "id": "asset-07c76f13-6e55-47c0-a6c3-fe0da53b7452",
            "category": "Bank or financial account",
            "description": "Wells Fargo savings",
            "estimatedValue": 1100,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "Savings"
          },
          {
            "id": "asset-236850c9-fc05-4905-baa3-9da4d273f602",
            "category": "Retirement or pension account",
            "description": "Small rollover IRA",
            "estimatedValue": 14600,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "IRA"
          },
          {
            "id": "asset-9254e832-c766-4903-b899-6183dd357fd9",
            "category": "Household goods and furnishings",
            "description": "Apartment furniture, clothing, television, mobility equipment",
            "estimatedValue": 3600,
            "lienAmount": 0,
            "exemptionNote": ""
          }
        ],
        "debts": [
          {
            "id": "fake-debt-lucas-romero-ch7-retired-1",
            "type": "unsecured",
            "creditor": "Capital One",
            "amount": 11100,
            "collateral": "",
            "arrears": 0,
            "notes": "Debtor did not enter account number or collector details."
          },
          {
            "id": "fake-debt-lucas-romero-ch7-retired-2",
            "type": "unsecured",
            "creditor": "",
            "amount": 4300,
            "collateral": "",
            "arrears": 0,
            "notes": "Medical collector letter; creditor name not entered."
          },
          {
            "id": "fake-debt-lucas-romero-ch7-retired-3",
            "type": "unsecured",
            "creditor": "QuickCash Installment Loans",
            "amount": 2600,
            "collateral": "",
            "arrears": 0,
            "notes": "Possible high-interest loan; payment drafting from bank account."
          }
        ],
        "contracts": [],
        "codebtors": [],
        "income": [
          {
            "id": "income-2a65b2a3-2869-4d5b-a0c9-a2027fd54b4f",
            "source": "Social Security / public benefits",
            "employer": "Social Security Administration",
            "amount": 1980,
            "frequency": "Monthly",
            "sixMonthTotal": 11880
          },
          {
            "id": "income-b65a0a73-2d89-4a66-abce-5fce4d911c10",
            "source": "Pension / retirement",
            "employer": "Former employer pension",
            "amount": 500,
            "frequency": "Monthly",
            "sixMonthTotal": 3000
          }
        ],
        "payStubIncomeEvidence": [],
        "expenses": [
          {
            "id": "expense-d3a7cc59-2875-423d-8b4d-84742c53be6a",
            "category": "Rent or home/mortgage payment",
            "monthlyAmount": 1180,
            "notes": ""
          },
          {
            "id": "expense-3482c258-078b-4836-af33-9423720c8e04",
            "category": "Electricity, heat, natural gas",
            "monthlyAmount": 120,
            "notes": ""
          },
          {
            "id": "expense-a2771b96-286e-4678-abbd-7abbe108b92e",
            "category": "Phone, cell, internet, satellite & cable",
            "monthlyAmount": 135,
            "notes": ""
          },
          {
            "id": "expense-92c8bfe3-64e5-4beb-abf1-a492fdb42634",
            "category": "Food & housekeeping supplies",
            "monthlyAmount": 425,
            "notes": ""
          },
          {
            "id": "expense-f1aa6e9b-bf76-4712-a62c-3ffbd29d36ca",
            "category": "Medical & dental expenses",
            "monthlyAmount": 220,
            "notes": ""
          },
          {
            "id": "expense-290cdcc7-2d0d-4c60-9a12-940f938be1bd",
            "category": "Transportation",
            "monthlyAmount": 160,
            "notes": ""
          },
          {
            "id": "expense-18465817-b5ae-4ec3-9866-e333ad1fcd94",
            "category": "Other expenses",
            "monthlyAmount": 95,
            "notes": "Prescription delivery and mobility supplies"
          }
        ],
        "sofaEvents": [],
        "petitionFlags": {
          "evictionJudgment": "No",
          "hazardousProperty": "No",
          "hazardousPropertyAddress": "",
          "hazardousPropertyCity": "",
          "hazardousPropertyDescription": "",
          "hazardousPropertyImmediateReason": "",
          "hazardousPropertyState": "",
          "hazardousPropertyStreet2": "",
          "hazardousPropertyZipCode": "",
          "rentsResidence": "Yes",
          "soleProprietor": "No",
          "soleProprietorBusinessCity": "",
          "soleProprietorBusinessName": "",
          "soleProprietorBusinessState": "",
          "soleProprietorBusinessStreet": "",
          "soleProprietorBusinessType": "",
          "soleProprietorBusinessUnit": "",
          "soleProprietorBusinessZipCode": ""
        },
        "chapter7": {
          "meansTestStatus": "Likely fixed-income review",
          "medianIncomeState": "Utah",
          "estimatedMonthlyIncome": 2480,
          "securedPropertyIntent": "No secured property listed.",
          "priorBankruptcyDischarge": "",
          "assetDistributionEstimate": "Low-value non-retirement property; exemption review still required."
        },
        "chapter13": {
          "planMonths": 0,
          "proposedMonthlyPayment": 0,
          "priorityClaimsEstimate": 0,
          "arrearsCureEstimate": 0,
          "disposableIncomeNotes": ""
        },
        "documents": [
          {
            "id": "document-97178e9a-a29d-4594-8c64-d06644ab78f1",
            "name": "Driver's license",
            "category": "Identity",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-7256e936-e1c2-4fe5-aedd-5a29bb02f17c",
            "name": "Social Security card, W-2, or 1099",
            "category": "Identity",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-d9bcc68f-9fb4-4bcd-9587-23fd6b7d6eec",
            "name": "Tax return - last year",
            "category": "Taxes",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-d6d92f96-c423-432f-97ef-a7fa189627c8",
            "name": "Tax return - two years ago",
            "category": "Taxes",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-a9b15ac2-cfef-4fe7-9e3c-57711bd892b2",
            "name": "Pay stubs - last 6 months",
            "category": "Income",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-d17b3255-7a15-4266-ab67-84eafa00f1f3",
            "name": "Bank statements - last 6 months",
            "category": "Banking",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-b8a4e78b-60d0-4af5-9e78-5d8f77ed35a7",
            "name": "Bank or financial account statements",
            "category": "Assets",
            "status": "needed",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": []
          },
          {
            "id": "document-2c4d7d74-f3b6-49b1-a9eb-b38b9d621df3",
            "name": "Statements for all debts",
            "category": "Debt",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-992402b5-891c-48bc-aa11-46c66356fe21",
            "name": "Attorney / collector letters",
            "category": "Debt",
            "status": "needed",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": []
          },
          {
            "id": "document-0064e7ae-00b6-46dc-8573-a69b1050a126",
            "name": "Court paperwork",
            "category": "Financial affairs",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "document-6fed2f22-8be3-4d1b-a6cd-1b5322862a87",
            "name": "Pre-bankruptcy counseling certificate",
            "category": "Required to file",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          }
        ],
        "financialAffairs": {
          "prior-addresses": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "community-property-state": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "job-or-business-income": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "other-income": {
            "answer": "Yes",
            "entries": [
              {
                "id": "fa-entry-b90b6978-bcbb-4a12-b825-69ee0ab3a916",
                "fields": {
                  "amount": "2480",
                  "frequency": "Monthly",
                  "source": "Social Security retirement and pension"
                }
              }
            ],
            "fields": {},
            "selected": []
          },
          "creditor-payments-90-days": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "insider-debt-payments": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "insider-benefit-transfer": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "lawsuits": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "property-taken": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "setoff": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "receiver-property": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "gifts": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "charitable-gifts": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "losses": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "bankruptcy-consult-payments": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "creditor-help-payments": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "property-transfers": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "asset-protection-transfer": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "closed-accounts": {
            "answer": "Yes",
            "entries": [
              {
                "id": "fa-entry-50087bc4-55d5-4d3a-9348-a8ff31a64a18",
                "fields": {
                  "account": "Mountain America Credit Union checking",
                  "closedDate": "2025-12",
                  "institution": "Mountain America Credit Union"
                }
              }
            ],
            "fields": {},
            "selected": []
          },
          "safe-deposit-box": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "storage-unit": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "property-for-others": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "environmental-liability-notice": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "hazardous-material-release": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "environmental-proceeding": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "business-connections": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "business-financial-statements": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          }
        }
      },
      "packageId": "bkfl-demo-lucas-romero-ch7-retired",
      "readiness": {
        "documentsReady": 9,
        "documentsRequired": 11,
        "fieldsFilled": 26,
        "fieldsRequired": 27,
        "reviewFlagCount": 2,
        "status": "needs-client-action"
      },
      "reviewFlags": [
        {
          "id": "documents-Document requests are still open",
          "severity": "info",
          "sectionId": "documents",
          "title": "Document requests are still open",
          "detail": "Use the checklist to track pay advices, tax returns, IDs, statements, and case-specific backups."
        },
        {
          "id": "debts-Unsecured debt captured",
          "severity": "info",
          "sectionId": "debts",
          "title": "Unsecured debt captured",
          "detail": "$18,000 in unsecured claims is recorded for review."
        }
      ],
      "schemaVersion": 1,
      "source": {
        "branch": "Jimmy",
        "scenarioId": "lucas-romero-ch7-retired",
        "system": "BK FastLane Intake"
      },
      "submittedAt": "2026-07-13T17:05:44.989Z"
    }
  ],
  "schemaVersion": 1,
  "source": "BK FastLane Intake incomplete debtor entry agent"
};
