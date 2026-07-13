window.BKFL_INTAKE_SUBMISSIONS = {
  "demo": true,
  "generatedAt": "2026-07-13T19:54:04.109Z",
  "packages": [
    {
      "completion": {
        "bundle": {
          "bundleVersion": 2,
          "generatedAt": "2026-07-13T19:54:04.109Z",
          "items": [
            {
              "applicability": "essential_now",
              "applicabilityReason": "The canonical Intake schema marks this Personal Info answer as required for the current client step.",
              "canonicalPath": "matter.debtors[0].county",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Return to Personal Info and answer: County.",
              "id": "schema-start.debtor.county",
              "kind": "field",
              "label": "County",
              "priority": "high",
              "resolutionStatus": "open",
              "sectionId": "start",
              "whyNeeded": "The firm needs this answer in canonical Matter data before administrative Intake collection is complete."
            },
            {
              "applicability": "essential_now",
              "applicabilityReason": "Means-test six-month total was not entered.",
              "canonicalPath": "matter.income[1].sixMonthTotal",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Complete: Weekend delivery apps six-month income total.",
              "id": "missing-log-income.rows.1.sixMonthTotal",
              "kind": "field",
              "label": "Weekend delivery apps six-month income total",
              "priority": "high",
              "resolutionStatus": "open",
              "sectionId": "income",
              "whyNeeded": "The answer is absent from canonical Matter data and cannot be inferred by the firm."
            },
            {
              "applicability": "essential_now",
              "applicabilityReason": "Lina reported active gig and sole-proprietor income.",
              "canonicalPath": "matter.documents[name='Self-employment profit and loss']",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Upload Self-employment profit and loss, replace it if unreadable, or tell the firm why it is unavailable.",
              "id": "document-fake-document-lina-morris-ch7-renter-self-employment-profit-and-loss-7",
              "kind": "document",
              "label": "Self-employment profit and loss",
              "priority": "medium",
              "resolutionStatus": "open",
              "sectionId": "documents",
              "whyNeeded": "The firm needs a current income-and-expense summary for the self-employed intake facts."
            },
            {
              "applicability": "attorney_only",
              "applicabilityReason": "Canonical review logic identified a fact for firm judgment, not a debtor collection request.",
              "canonicalPath": "reviewFlags.income",
              "caseStageDeadline": "During attorney review",
              "clientActionable": false,
              "clientInstruction": "No debtor action is requested from this flag.",
              "id": "flag-income-Six-month income is missing",
              "kind": "review",
              "label": "Six-month income is missing",
              "priority": "medium",
              "resolutionStatus": "open",
              "sectionId": "income",
              "whyNeeded": "Means-test intake needs six-month totals before attorney review."
            },
            {
              "applicability": "essential_now",
              "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
              "canonicalPath": "matter.documents[name='Tax return - two years ago']",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Upload Tax return - two years ago, replace it if unreadable, or tell the firm why it is unavailable.",
              "id": "document-fake-document-lina-morris-ch7-renter-tax-return-two-years-ago-3",
              "kind": "document",
              "label": "Tax return - two years ago",
              "priority": "medium",
              "resolutionStatus": "open",
              "sectionId": "documents",
              "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
            }
          ],
          "matterId": "fake-matter-lina-morris-ch7-renter",
          "matterRevision": 1,
          "metrics": {
            "blockingReadiness": {
              "complete": 31,
              "percent": 89,
              "required": 35
            },
            "documentCollection": {
              "applicable": 7,
              "collected": 5,
              "percent": 71
            },
            "fieldCompletion": {
              "applicable": 28,
              "entered": 26,
              "percent": 93
            },
            "intakeChecklistCompletion": 89
          },
          "reminderItems": [
            {
              "applicability": "essential_now",
              "applicabilityReason": "The canonical Intake schema marks this Personal Info answer as required for the current client step.",
              "canonicalPath": "matter.debtors[0].county",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Return to Personal Info and answer: County.",
              "id": "schema-start.debtor.county",
              "kind": "field",
              "label": "County",
              "priority": "high",
              "resolutionStatus": "open",
              "sectionId": "start",
              "whyNeeded": "The firm needs this answer in canonical Matter data before administrative Intake collection is complete."
            },
            {
              "applicability": "essential_now",
              "applicabilityReason": "Means-test six-month total was not entered.",
              "canonicalPath": "matter.income[1].sixMonthTotal",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Complete: Weekend delivery apps six-month income total.",
              "id": "missing-log-income.rows.1.sixMonthTotal",
              "kind": "field",
              "label": "Weekend delivery apps six-month income total",
              "priority": "high",
              "resolutionStatus": "open",
              "sectionId": "income",
              "whyNeeded": "The answer is absent from canonical Matter data and cannot be inferred by the firm."
            },
            {
              "applicability": "essential_now",
              "applicabilityReason": "Lina reported active gig and sole-proprietor income.",
              "canonicalPath": "matter.documents[name='Self-employment profit and loss']",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Upload Self-employment profit and loss, replace it if unreadable, or tell the firm why it is unavailable.",
              "id": "document-fake-document-lina-morris-ch7-renter-self-employment-profit-and-loss-7",
              "kind": "document",
              "label": "Self-employment profit and loss",
              "priority": "medium",
              "resolutionStatus": "open",
              "sectionId": "documents",
              "whyNeeded": "The firm needs a current income-and-expense summary for the self-employed intake facts."
            },
            {
              "applicability": "essential_now",
              "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
              "canonicalPath": "matter.documents[name='Tax return - two years ago']",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Upload Tax return - two years ago, replace it if unreadable, or tell the firm why it is unavailable.",
              "id": "document-fake-document-lina-morris-ch7-renter-tax-return-two-years-ago-3",
              "kind": "document",
              "label": "Tax return - two years ago",
              "priority": "medium",
              "resolutionStatus": "open",
              "sectionId": "documents",
              "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
            }
          ],
          "ruleSetVersion": "2026-07-13.pilot-v1",
          "states": {
            "attorneyReview": "not_started",
            "documentReview": "pending",
            "intakeCompletion": "needs_client_action",
            "submission": "submitted"
          },
          "urgentAttorneyTask": null
        },
        "blockingReadiness": {
          "complete": 31,
          "percent": 89,
          "required": 35
        },
        "documentCompletion": {
          "applicableRequired": 7,
          "receivedRequired": 5
        },
        "emailDraft": {
          "bodySnapshot": "Hi Lina,\n\nWe reviewed your BK FastLane intake entry and found a few items that still need your attention before the attorney can use the file efficiently.\n\n1. Return to Personal Info and answer: County.\n2. Complete: Weekend delivery apps six-month income total.\n3. Upload Self-employment profit and loss, replace it if unreadable, or tell the firm why it is unavailable.\n4. Upload Tax return - two years ago, replace it if unreadable, or tell the firm why it is unavailable.\n\nYou do not need to calculate legal conclusions. Just enter your best information and upload the requested documents when available.\n\nReturn to your intake: https://jimmydanol.github.io/bkfl-crm-lite/intake-demo.html?packageId=bkfl-demo-lina-morris-ch7-renter&itemId=schema-start.debtor.county\n\nThank you,\nBK FastLane intake team",
          "deliveryMode": "simulation",
          "intakeResumeUrl": "https://jimmydanol.github.io/bkfl-crm-lite/intake-demo.html?packageId=bkfl-demo-lina-morris-ch7-renter&itemId=schema-start.debtor.county",
          "recipient": "lina.morris.fake@example.test",
          "status": "pending_approval",
          "subject": "Information needed to finish your Intake"
        },
        "events": [],
        "fieldCompletion": {
          "applicableRequired": 28,
          "enteredRequired": 26,
          "percent": 93
        },
        "intakeChecklistCompletion": 89,
        "intakeResumeUrl": "https://jimmydanol.github.io/bkfl-crm-lite/intake-demo.html?packageId=bkfl-demo-lina-morris-ch7-renter&itemId=schema-start.debtor.county",
        "items": [
          {
            "applicability": "essential_now",
            "applicabilityReason": "The canonical Intake schema marks this Personal Info answer as required for the current client step.",
            "canonicalPath": "matter.debtors[0].county",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Return to Personal Info and answer: County.",
            "id": "schema-start.debtor.county",
            "kind": "field",
            "label": "County",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "start",
            "whyNeeded": "The firm needs this answer in canonical Matter data before administrative Intake collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "Means-test six-month total was not entered.",
            "canonicalPath": "matter.income[1].sixMonthTotal",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Complete: Weekend delivery apps six-month income total.",
            "id": "missing-log-income.rows.1.sixMonthTotal",
            "kind": "field",
            "label": "Weekend delivery apps six-month income total",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "income",
            "whyNeeded": "The answer is absent from canonical Matter data and cannot be inferred by the firm."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "Lina reported active gig and sole-proprietor income.",
            "canonicalPath": "matter.documents[name='Self-employment profit and loss']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Self-employment profit and loss, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-lina-morris-ch7-renter-self-employment-profit-and-loss-7",
            "kind": "document",
            "label": "Self-employment profit and loss",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs a current income-and-expense summary for the self-employed intake facts."
          },
          {
            "applicability": "attorney_only",
            "applicabilityReason": "Canonical review logic identified a fact for firm judgment, not a debtor collection request.",
            "canonicalPath": "reviewFlags.income",
            "caseStageDeadline": "During attorney review",
            "clientActionable": false,
            "clientInstruction": "No debtor action is requested from this flag.",
            "id": "flag-income-Six-month income is missing",
            "kind": "review",
            "label": "Six-month income is missing",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "income",
            "whyNeeded": "Means-test intake needs six-month totals before attorney review."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Tax return - two years ago']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Tax return - two years ago, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-lina-morris-ch7-renter-tax-return-two-years-ago-3",
            "kind": "document",
            "label": "Tax return - two years ago",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          }
        ],
        "missingItems": [
          {
            "applicability": "essential_now",
            "applicabilityReason": "The canonical Intake schema marks this Personal Info answer as required for the current client step.",
            "canonicalPath": "matter.debtors[0].county",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Return to Personal Info and answer: County.",
            "id": "schema-start.debtor.county",
            "kind": "field",
            "label": "County",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "start",
            "whyNeeded": "The firm needs this answer in canonical Matter data before administrative Intake collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "Means-test six-month total was not entered.",
            "canonicalPath": "matter.income[1].sixMonthTotal",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Complete: Weekend delivery apps six-month income total.",
            "id": "missing-log-income.rows.1.sixMonthTotal",
            "kind": "field",
            "label": "Weekend delivery apps six-month income total",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "income",
            "whyNeeded": "The answer is absent from canonical Matter data and cannot be inferred by the firm."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "Lina reported active gig and sole-proprietor income.",
            "canonicalPath": "matter.documents[name='Self-employment profit and loss']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Self-employment profit and loss, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-lina-morris-ch7-renter-self-employment-profit-and-loss-7",
            "kind": "document",
            "label": "Self-employment profit and loss",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs a current income-and-expense summary for the self-employed intake facts."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Tax return - two years ago']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Tax return - two years ago, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-lina-morris-ch7-renter-tax-return-two-years-ago-3",
            "kind": "document",
            "label": "Tax return - two years ago",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          }
        ],
        "percent": 89,
        "revision": 1,
        "states": {
          "attorneyReview": "not_started",
          "documentReview": "pending",
          "intakeCompletion": "needs_client_action",
          "submission": "submitted"
        },
        "status": "needs_client_action",
        "urgentAttorneyTask": null
      },
      "demo": true,
      "generatedAt": "2026-07-13T19:54:04.109Z",
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
        "personalInfoSubmittedAt": "2026-07-13T19:54:04.109Z",
        "createdAt": "2026-07-13T19:54:05.159Z",
        "updatedAt": "2026-07-13T19:54:04.109Z",
        "debtors": [
          {
            "id": "debtor-af8cb423-2ab7-4914-92cd-cc96b1630e17",
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
            "id": "asset-e0b9747e-4c4b-4043-a33d-ed929345309b",
            "category": "Bank or financial account",
            "description": "Canvas Credit Union checking",
            "estimatedValue": 420,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "Checking"
          },
          {
            "id": "asset-4bb45508-7171-4c07-b67c-14879a5b9f19",
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
            "id": "asset-0f424e19-af60-4ba2-a3eb-6980d044abd4",
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
            "id": "income-019fca86-78d3-461b-902d-56ff59170865",
            "source": "Employment",
            "employer": "Denver Dental Supply",
            "amount": 2900,
            "frequency": "Biweekly",
            "sixMonthTotal": 17400
          },
          {
            "id": "income-7ca4bc1a-871a-40a7-8769-01714a1f00a7",
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
            "id": "expense-70065634-b5a7-4c2f-ba6d-b5fa8caff7be",
            "category": "Rent or home/mortgage payment",
            "monthlyAmount": 1390,
            "notes": ""
          },
          {
            "id": "expense-51f5a4f3-4b7a-4711-a044-8c58cdf9fccb",
            "category": "Electricity, heat, natural gas",
            "monthlyAmount": 165,
            "notes": ""
          },
          {
            "id": "expense-f176046a-ee20-4d82-8aed-c54c18bcf81b",
            "category": "Phone, cell, internet, satellite & cable",
            "monthlyAmount": 155,
            "notes": ""
          },
          {
            "id": "expense-1b39b170-28a2-4266-a086-3944b7aa86b2",
            "category": "Food & housekeeping supplies",
            "monthlyAmount": 540,
            "notes": ""
          },
          {
            "id": "expense-b1963fd1-1d2c-4db9-91ff-19e050388a36",
            "category": "Medical & dental expenses",
            "monthlyAmount": 95,
            "notes": ""
          },
          {
            "id": "expense-b9e19916-7bfd-4079-aca2-242f3e663810",
            "category": "Transportation",
            "monthlyAmount": 385,
            "notes": ""
          },
          {
            "id": "expense-86b5c26f-73a2-442e-8439-8cbd15f9f21b",
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
            "id": "fake-document-lina-morris-ch7-renter-driver-s-license-1",
            "name": "Driver's license",
            "category": "Identity",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "fake-document-lina-morris-ch7-renter-tax-return-last-year-2",
            "name": "Tax return - last year",
            "category": "Taxes",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "fake-document-lina-morris-ch7-renter-tax-return-two-years-ago-3",
            "name": "Tax return - two years ago",
            "category": "Taxes",
            "status": "needed",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": []
          },
          {
            "id": "fake-document-lina-morris-ch7-renter-bank-statements-last-6-months-4",
            "name": "Bank statements - last 6 months",
            "category": "Banking",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "fake-document-lina-morris-ch7-renter-statements-for-all-debts-5",
            "name": "Statements for all debts",
            "category": "Debt",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "fake-document-lina-morris-ch7-renter-lease-or-rental-agreement-6",
            "name": "Lease or rental agreement",
            "category": "Housing",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "fake-document-lina-morris-ch7-renter-self-employment-profit-and-loss-7",
            "name": "Self-employment profit and loss",
            "category": "Income",
            "status": "needed",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": [],
            "applicabilityReason": "Lina reported active gig and sole-proprietor income.",
            "whyNeeded": "The firm needs a current income-and-expense summary for the self-employed intake facts."
          }
        ],
        "financialAffairs": {
          "prior-addresses": {
            "answer": "Yes",
            "entries": [
              {
                "id": "fa-entry-9461b215-941f-485d-8c16-de8036ea794e",
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
        "documentsReady": 5,
        "documentsRequired": 7,
        "fieldsFilled": 26,
        "fieldsRequired": 28,
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
      "schemaVersion": 2,
      "source": {
        "branch": "Jimmy",
        "scenarioId": "lina-morris-ch7-renter",
        "scenarioTitle": "Single renter Chapter 7 with gig income and incomplete means-test data",
        "system": "BK FastLane Intake",
        "traits": [
          "chapter_7",
          "self_employed",
          "renter",
          "vehicle_retain"
        ]
      },
      "submittedAt": "2026-07-13T19:54:04.109Z"
    },
    {
      "completion": {
        "bundle": {
          "bundleVersion": 2,
          "generatedAt": "2026-07-13T19:54:04.109Z",
          "items": [
            {
              "applicability": "attorney_only",
              "applicabilityReason": "Canonical review logic identified a fact for firm judgment, not a debtor collection request.",
              "canonicalPath": "reviewFlags.basics",
              "caseStageDeadline": "Same-day attorney review",
              "clientActionable": false,
              "clientInstruction": "No debtor action is requested from this flag.",
              "id": "flag-basics-Debtor identity is incomplete",
              "kind": "review",
              "label": "Debtor identity is incomplete",
              "priority": "high",
              "resolutionStatus": "open",
              "sectionId": "basics",
              "whyNeeded": "At least one debtor is missing name or SSN last-four intake data."
            },
            {
              "applicability": "essential_now",
              "applicabilityReason": "Debtor did not enter a value.",
              "canonicalPath": "matter.chapter13.foreclosureSaleDate",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Complete: Foreclosure sale date.",
              "id": "missing-log-chapter13.foreclosureSaleDate",
              "kind": "field",
              "label": "Foreclosure sale date",
              "priority": "high",
              "resolutionStatus": "open",
              "sectionId": "affairs",
              "whyNeeded": "The answer is absent from canonical Matter data and cannot be inferred by the firm."
            },
            {
              "applicability": "essential_now",
              "applicabilityReason": "Kevin and Priya reported a home, mortgage arrears, and a foreclosure notice.",
              "canonicalPath": "matter.documents[name='Mortgage statement and arrears notice']",
              "caseStageDeadline": "Same day because a foreclosure sale date may exist",
              "clientActionable": true,
              "clientInstruction": "Upload Mortgage statement and arrears notice, replace it if unreadable, or tell the firm why it is unavailable.",
              "id": "document-fake-document-kevin-priya-shah-ch13-mortgage-statement-and-arrears-notice-6",
              "kind": "document",
              "label": "Mortgage statement and arrears notice",
              "priority": "high",
              "resolutionStatus": "open",
              "sectionId": "documents",
              "whyNeeded": "The statement and notice show the arrears, servicer, and any sale deadline for prompt attorney review."
            },
            {
              "applicability": "essential_now",
              "applicabilityReason": "Joint case has spouse identity but no spouse SSN.",
              "canonicalPath": "matter.debtors[1].socialSecurityNumber",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Complete: Spouse Social Security number.",
              "id": "missing-log-start.debtor2.socialSecurityNumber",
              "kind": "field",
              "label": "Spouse Social Security number",
              "priority": "high",
              "resolutionStatus": "open",
              "sectionId": "start",
              "whyNeeded": "The answer is absent from canonical Matter data and cannot be inferred by the firm."
            },
            {
              "applicability": "essential_now",
              "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
              "canonicalPath": "matter.documents[name='Bank statements - last 6 months']",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Upload Bank statements - last 6 months, replace it if unreadable, or tell the firm why it is unavailable.",
              "id": "document-fake-document-kevin-priya-shah-ch13-bank-statements-last-6-months-4",
              "kind": "document",
              "label": "Bank statements - last 6 months",
              "priority": "medium",
              "resolutionStatus": "open",
              "sectionId": "documents",
              "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
            }
          ],
          "matterId": "fake-matter-kevin-priya-shah-ch13",
          "matterRevision": 1,
          "metrics": {
            "blockingReadiness": {
              "complete": 30,
              "percent": 88,
              "required": 34
            },
            "documentCollection": {
              "applicable": 6,
              "collected": 4,
              "percent": 67
            },
            "fieldCompletion": {
              "applicable": 29,
              "entered": 27,
              "percent": 93
            },
            "intakeChecklistCompletion": 89
          },
          "reminderItems": [
            {
              "applicability": "essential_now",
              "applicabilityReason": "Debtor did not enter a value.",
              "canonicalPath": "matter.chapter13.foreclosureSaleDate",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Complete: Foreclosure sale date.",
              "id": "missing-log-chapter13.foreclosureSaleDate",
              "kind": "field",
              "label": "Foreclosure sale date",
              "priority": "high",
              "resolutionStatus": "open",
              "sectionId": "affairs",
              "whyNeeded": "The answer is absent from canonical Matter data and cannot be inferred by the firm."
            },
            {
              "applicability": "essential_now",
              "applicabilityReason": "Kevin and Priya reported a home, mortgage arrears, and a foreclosure notice.",
              "canonicalPath": "matter.documents[name='Mortgage statement and arrears notice']",
              "caseStageDeadline": "Same day because a foreclosure sale date may exist",
              "clientActionable": true,
              "clientInstruction": "Upload Mortgage statement and arrears notice, replace it if unreadable, or tell the firm why it is unavailable.",
              "id": "document-fake-document-kevin-priya-shah-ch13-mortgage-statement-and-arrears-notice-6",
              "kind": "document",
              "label": "Mortgage statement and arrears notice",
              "priority": "high",
              "resolutionStatus": "open",
              "sectionId": "documents",
              "whyNeeded": "The statement and notice show the arrears, servicer, and any sale deadline for prompt attorney review."
            },
            {
              "applicability": "essential_now",
              "applicabilityReason": "Joint case has spouse identity but no spouse SSN.",
              "canonicalPath": "matter.debtors[1].socialSecurityNumber",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Complete: Spouse Social Security number.",
              "id": "missing-log-start.debtor2.socialSecurityNumber",
              "kind": "field",
              "label": "Spouse Social Security number",
              "priority": "high",
              "resolutionStatus": "open",
              "sectionId": "start",
              "whyNeeded": "The answer is absent from canonical Matter data and cannot be inferred by the firm."
            },
            {
              "applicability": "essential_now",
              "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
              "canonicalPath": "matter.documents[name='Bank statements - last 6 months']",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Upload Bank statements - last 6 months, replace it if unreadable, or tell the firm why it is unavailable.",
              "id": "document-fake-document-kevin-priya-shah-ch13-bank-statements-last-6-months-4",
              "kind": "document",
              "label": "Bank statements - last 6 months",
              "priority": "medium",
              "resolutionStatus": "open",
              "sectionId": "documents",
              "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
            }
          ],
          "ruleSetVersion": "2026-07-13.pilot-v1",
          "states": {
            "attorneyReview": "not_started",
            "documentReview": "pending",
            "intakeCompletion": "needs_client_action",
            "submission": "submitted"
          },
          "urgentAttorneyTask": {
            "due": "same_day",
            "reason": "Foreclosure sale date notice received, but exact sale date was not entered.",
            "title": "Same-day attorney review of urgent collection or legal deadline"
          }
        },
        "blockingReadiness": {
          "complete": 30,
          "percent": 88,
          "required": 34
        },
        "documentCompletion": {
          "applicableRequired": 6,
          "receivedRequired": 4
        },
        "emailDraft": {
          "bodySnapshot": "Hi Kevin,\n\nWe reviewed your BK FastLane intake entry and found a few items that still need your attention before the attorney can use the file efficiently.\n\n1. Complete: Foreclosure sale date.\n2. Upload Mortgage statement and arrears notice, replace it if unreadable, or tell the firm why it is unavailable.\n3. Complete: Spouse Social Security number.\n4. Upload Bank statements - last 6 months, replace it if unreadable, or tell the firm why it is unavailable.\n\nYou do not need to calculate legal conclusions. Just enter your best information and upload the requested documents when available.\n\nReturn to your intake: https://jimmydanol.github.io/bkfl-crm-lite/intake-demo.html?packageId=bkfl-demo-kevin-priya-shah-ch13&itemId=missing-log-chapter13.foreclosureSaleDate\n\nThank you,\nBK FastLane intake team",
          "deliveryMode": "simulation",
          "intakeResumeUrl": "https://jimmydanol.github.io/bkfl-crm-lite/intake-demo.html?packageId=bkfl-demo-kevin-priya-shah-ch13&itemId=missing-log-chapter13.foreclosureSaleDate",
          "recipient": "kevin.shah.fake@example.test",
          "status": "pending_approval",
          "subject": "Information needed to finish your Intake"
        },
        "events": [],
        "fieldCompletion": {
          "applicableRequired": 29,
          "enteredRequired": 27,
          "percent": 93
        },
        "intakeChecklistCompletion": 89,
        "intakeResumeUrl": "https://jimmydanol.github.io/bkfl-crm-lite/intake-demo.html?packageId=bkfl-demo-kevin-priya-shah-ch13&itemId=missing-log-chapter13.foreclosureSaleDate",
        "items": [
          {
            "applicability": "attorney_only",
            "applicabilityReason": "Canonical review logic identified a fact for firm judgment, not a debtor collection request.",
            "canonicalPath": "reviewFlags.basics",
            "caseStageDeadline": "Same-day attorney review",
            "clientActionable": false,
            "clientInstruction": "No debtor action is requested from this flag.",
            "id": "flag-basics-Debtor identity is incomplete",
            "kind": "review",
            "label": "Debtor identity is incomplete",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "basics",
            "whyNeeded": "At least one debtor is missing name or SSN last-four intake data."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "Debtor did not enter a value.",
            "canonicalPath": "matter.chapter13.foreclosureSaleDate",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Complete: Foreclosure sale date.",
            "id": "missing-log-chapter13.foreclosureSaleDate",
            "kind": "field",
            "label": "Foreclosure sale date",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "affairs",
            "whyNeeded": "The answer is absent from canonical Matter data and cannot be inferred by the firm."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "Kevin and Priya reported a home, mortgage arrears, and a foreclosure notice.",
            "canonicalPath": "matter.documents[name='Mortgage statement and arrears notice']",
            "caseStageDeadline": "Same day because a foreclosure sale date may exist",
            "clientActionable": true,
            "clientInstruction": "Upload Mortgage statement and arrears notice, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-kevin-priya-shah-ch13-mortgage-statement-and-arrears-notice-6",
            "kind": "document",
            "label": "Mortgage statement and arrears notice",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The statement and notice show the arrears, servicer, and any sale deadline for prompt attorney review."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "Joint case has spouse identity but no spouse SSN.",
            "canonicalPath": "matter.debtors[1].socialSecurityNumber",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Complete: Spouse Social Security number.",
            "id": "missing-log-start.debtor2.socialSecurityNumber",
            "kind": "field",
            "label": "Spouse Social Security number",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "start",
            "whyNeeded": "The answer is absent from canonical Matter data and cannot be inferred by the firm."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Bank statements - last 6 months']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Bank statements - last 6 months, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-kevin-priya-shah-ch13-bank-statements-last-6-months-4",
            "kind": "document",
            "label": "Bank statements - last 6 months",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          }
        ],
        "missingItems": [
          {
            "applicability": "essential_now",
            "applicabilityReason": "Debtor did not enter a value.",
            "canonicalPath": "matter.chapter13.foreclosureSaleDate",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Complete: Foreclosure sale date.",
            "id": "missing-log-chapter13.foreclosureSaleDate",
            "kind": "field",
            "label": "Foreclosure sale date",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "affairs",
            "whyNeeded": "The answer is absent from canonical Matter data and cannot be inferred by the firm."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "Kevin and Priya reported a home, mortgage arrears, and a foreclosure notice.",
            "canonicalPath": "matter.documents[name='Mortgage statement and arrears notice']",
            "caseStageDeadline": "Same day because a foreclosure sale date may exist",
            "clientActionable": true,
            "clientInstruction": "Upload Mortgage statement and arrears notice, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-kevin-priya-shah-ch13-mortgage-statement-and-arrears-notice-6",
            "kind": "document",
            "label": "Mortgage statement and arrears notice",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The statement and notice show the arrears, servicer, and any sale deadline for prompt attorney review."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "Joint case has spouse identity but no spouse SSN.",
            "canonicalPath": "matter.debtors[1].socialSecurityNumber",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Complete: Spouse Social Security number.",
            "id": "missing-log-start.debtor2.socialSecurityNumber",
            "kind": "field",
            "label": "Spouse Social Security number",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "start",
            "whyNeeded": "The answer is absent from canonical Matter data and cannot be inferred by the firm."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Bank statements - last 6 months']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Bank statements - last 6 months, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-kevin-priya-shah-ch13-bank-statements-last-6-months-4",
            "kind": "document",
            "label": "Bank statements - last 6 months",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          }
        ],
        "percent": 89,
        "revision": 1,
        "states": {
          "attorneyReview": "not_started",
          "documentReview": "pending",
          "intakeCompletion": "needs_client_action",
          "submission": "submitted"
        },
        "status": "needs_client_action",
        "urgentAttorneyTask": {
          "due": "same_day",
          "reason": "Foreclosure sale date notice received, but exact sale date was not entered.",
          "title": "Same-day attorney review of urgent collection or legal deadline"
        }
      },
      "demo": true,
      "generatedAt": "2026-07-13T19:54:04.109Z",
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
        "personalInfoSubmittedAt": "2026-07-13T19:54:04.109Z",
        "createdAt": "2026-07-13T19:54:05.191Z",
        "updatedAt": "2026-07-13T19:54:04.109Z",
        "debtors": [
          {
            "id": "debtor-bbe88619-8959-4bfd-acdd-96c6ba241cf1",
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
            "id": "debtor-6bf88c98-982f-4529-adc3-10ee866682de",
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
              "id": "dependent-1b831010-bb44-433c-a38a-c65d39947447",
              "name": "Fake minor child A",
              "age": "12",
              "relationship": "Child",
              "livesWithDebtor": "Yes"
            },
            {
              "id": "dependent-8b3981c2-1122-4f5f-bffc-d54bd3fba040",
              "name": "Fake minor child B",
              "age": "8",
              "relationship": "Child",
              "livesWithDebtor": "Yes"
            }
          ]
        },
        "assets": [
          {
            "id": "asset-317d55df-cba4-4f81-810a-3ba18417c5d6",
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
            "id": "asset-a9fd0c33-def7-416e-9831-43ee047276ae",
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
            "id": "asset-3aed1d99-ad7d-48fe-81d0-c395eadba9c7",
            "category": "Bank or financial account",
            "description": "Chase joint checking",
            "estimatedValue": 2150,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "Checking"
          },
          {
            "id": "asset-3694491e-f6c1-40fb-8845-9ab54ef9aa5d",
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
            "id": "income-d2996083-e7dd-44b9-8b42-a6166f3b0746",
            "source": "Employment",
            "employer": "Metro Facilities Group",
            "amount": 7100,
            "frequency": "Biweekly",
            "sixMonthTotal": 42600
          },
          {
            "id": "income-16a7e680-a2eb-40d6-b300-f26ca60b5d6a",
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
            "id": "expense-cf66d168-683d-44c2-8ff4-02b40bf905ca",
            "category": "Mortgage payment",
            "monthlyAmount": 2680,
            "notes": ""
          },
          {
            "id": "expense-000a7846-9447-4941-8528-06bf443a0e5a",
            "category": "Electricity, heat, natural gas",
            "monthlyAmount": 310,
            "notes": ""
          },
          {
            "id": "expense-e7512fe1-0e84-4f43-9385-876bf3ab19d0",
            "category": "Water, sewer, garbage collection",
            "monthlyAmount": 115,
            "notes": ""
          },
          {
            "id": "expense-72b4811f-115e-4c5a-a262-b09f58fb6576",
            "category": "Phone, cell, internet, satellite & cable",
            "monthlyAmount": 245,
            "notes": ""
          },
          {
            "id": "expense-2a20285b-88af-4b35-94f1-3bbcf376731f",
            "category": "Food & housekeeping supplies",
            "monthlyAmount": 925,
            "notes": ""
          },
          {
            "id": "expense-0df2dcef-1005-44fa-939a-c8ff9751fb0f",
            "category": "Childcare & children education",
            "monthlyAmount": 640,
            "notes": ""
          },
          {
            "id": "expense-39641321-db3c-4ad6-bccc-c34f01c9e0f4",
            "category": "Transportation",
            "monthlyAmount": 560,
            "notes": ""
          },
          {
            "id": "expense-db012807-af1a-478f-b10c-152d04b7f40f",
            "category": "Vehicle payments",
            "monthlyAmount": 610,
            "notes": ""
          },
          {
            "id": "expense-6cbb2c63-1769-40aa-9081-af1b08955252",
            "category": "Vehicle insurance",
            "monthlyAmount": 220,
            "notes": ""
          },
          {
            "id": "expense-ca18a4fb-c84d-4015-80f1-51abb686a8ca",
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
          "disposableIncomeNotes": "Entered budget suggests feasibility, but payroll proof and tax claims are missing.",
          "foreclosureSaleDate": ""
        },
        "documents": [
          {
            "id": "fake-document-kevin-priya-shah-ch13-driver-s-license-1",
            "name": "Driver's license",
            "category": "Identity",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "fake-document-kevin-priya-shah-ch13-tax-return-last-year-2",
            "name": "Tax return - last year",
            "category": "Taxes",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "fake-document-kevin-priya-shah-ch13-pay-stubs-last-6-months-3",
            "name": "Pay stubs - last 6 months",
            "category": "Income",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "fake-document-kevin-priya-shah-ch13-bank-statements-last-6-months-4",
            "name": "Bank statements - last 6 months",
            "category": "Banking",
            "status": "needed",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": []
          },
          {
            "id": "fake-document-kevin-priya-shah-ch13-court-paperwork-5",
            "name": "Court paperwork",
            "category": "Financial affairs",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "fake-document-kevin-priya-shah-ch13-mortgage-statement-and-arrears-notice-6",
            "name": "Mortgage statement and arrears notice",
            "category": "Housing",
            "status": "needed",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": [],
            "applicabilityReason": "Kevin and Priya reported a home, mortgage arrears, and a foreclosure notice.",
            "caseStageDeadline": "Same day because a foreclosure sale date may exist",
            "priority": "high",
            "whyNeeded": "The statement and notice show the arrears, servicer, and any sale deadline for prompt attorney review."
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
                "id": "fa-entry-926a3a72-7f64-46f9-89b4-099821f1fbaa",
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
                "id": "fa-entry-1b2520b2-499d-4a73-8335-d232937bad4e",
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
                "id": "fa-entry-13a8f5a3-83d6-435e-97a4-124ea1445a82",
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
        "documentsReady": 4,
        "documentsRequired": 6,
        "fieldsFilled": 27,
        "fieldsRequired": 29,
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
      "schemaVersion": 2,
      "source": {
        "branch": "Jimmy",
        "scenarioId": "kevin-priya-shah-ch13",
        "scenarioTitle": "Joint Chapter 13 with home arrears and incomplete spouse SSN",
        "system": "BK FastLane Intake",
        "traits": [
          "chapter_13",
          "homeowner",
          "mortgage_arrears",
          "foreclosure",
          "prior_bankruptcy"
        ]
      },
      "submittedAt": "2026-07-13T19:54:04.109Z"
    },
    {
      "completion": {
        "bundle": {
          "bundleVersion": 2,
          "generatedAt": "2026-07-13T19:54:04.109Z",
          "items": [
            {
              "applicability": "essential_now",
              "applicabilityReason": "The canonical Intake schema marks this Personal Info answer as required for the current client step.",
              "canonicalPath": "matter.debtors[0].dateOfBirth",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Return to Personal Info and answer: Date of birth.",
              "id": "schema-start.debtor.dateOfBirth",
              "kind": "field",
              "label": "Date of birth",
              "priority": "high",
              "resolutionStatus": "open",
              "sectionId": "start",
              "whyNeeded": "The firm needs this answer in canonical Matter data before administrative Intake collection is complete."
            },
            {
              "applicability": "essential_now",
              "applicabilityReason": "The debtor entered a balance but omitted the creditor or collection agency name.",
              "canonicalPath": "matter.debts[id='fake-debt-rosa-whitaker-ch7-retired-2'].creditor",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Enter the creditor or collection agency name for the $4,300 debt.",
              "id": "debt-creditor-fake-debt-rosa-whitaker-ch7-retired-2",
              "kind": "field",
              "label": "Debt creditor name",
              "priority": "high",
              "resolutionStatus": "open",
              "sectionId": "property",
              "whyNeeded": "The firm cannot reliably identify or organize an unnamed debt."
            },
            {
              "applicability": "essential_now",
              "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
              "canonicalPath": "matter.documents[name='Social Security card, W-2, or 1099']",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Upload Social Security card, W-2, or 1099, replace it if unreadable, or tell the firm why it is unavailable.",
              "id": "document-fake-document-rosa-whitaker-ch7-retired-social-security-card-w-2-or-1099-2",
              "kind": "document",
              "label": "Social Security card, W-2, or 1099",
              "priority": "high",
              "resolutionStatus": "open",
              "sectionId": "documents",
              "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
            },
            {
              "applicability": "essential_now",
              "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
              "canonicalPath": "matter.documents[name='Bank or financial account statements']",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Upload Bank or financial account statements, replace it if unreadable, or tell the firm why it is unavailable.",
              "id": "document-fake-document-rosa-whitaker-ch7-retired-bank-or-financial-account-statements-3",
              "kind": "document",
              "label": "Bank or financial account statements",
              "priority": "medium",
              "resolutionStatus": "open",
              "sectionId": "documents",
              "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
            }
          ],
          "matterId": "fake-matter-rosa-whitaker-ch7-retired",
          "matterRevision": 1,
          "metrics": {
            "blockingReadiness": {
              "complete": 28,
              "percent": 88,
              "required": 32
            },
            "documentCollection": {
              "applicable": 5,
              "collected": 3,
              "percent": 60
            },
            "fieldCompletion": {
              "applicable": 28,
              "entered": 26,
              "percent": 93
            },
            "intakeChecklistCompletion": 88
          },
          "reminderItems": [
            {
              "applicability": "essential_now",
              "applicabilityReason": "The canonical Intake schema marks this Personal Info answer as required for the current client step.",
              "canonicalPath": "matter.debtors[0].dateOfBirth",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Return to Personal Info and answer: Date of birth.",
              "id": "schema-start.debtor.dateOfBirth",
              "kind": "field",
              "label": "Date of birth",
              "priority": "high",
              "resolutionStatus": "open",
              "sectionId": "start",
              "whyNeeded": "The firm needs this answer in canonical Matter data before administrative Intake collection is complete."
            },
            {
              "applicability": "essential_now",
              "applicabilityReason": "The debtor entered a balance but omitted the creditor or collection agency name.",
              "canonicalPath": "matter.debts[id='fake-debt-rosa-whitaker-ch7-retired-2'].creditor",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Enter the creditor or collection agency name for the $4,300 debt.",
              "id": "debt-creditor-fake-debt-rosa-whitaker-ch7-retired-2",
              "kind": "field",
              "label": "Debt creditor name",
              "priority": "high",
              "resolutionStatus": "open",
              "sectionId": "property",
              "whyNeeded": "The firm cannot reliably identify or organize an unnamed debt."
            },
            {
              "applicability": "essential_now",
              "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
              "canonicalPath": "matter.documents[name='Social Security card, W-2, or 1099']",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Upload Social Security card, W-2, or 1099, replace it if unreadable, or tell the firm why it is unavailable.",
              "id": "document-fake-document-rosa-whitaker-ch7-retired-social-security-card-w-2-or-1099-2",
              "kind": "document",
              "label": "Social Security card, W-2, or 1099",
              "priority": "high",
              "resolutionStatus": "open",
              "sectionId": "documents",
              "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
            },
            {
              "applicability": "essential_now",
              "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
              "canonicalPath": "matter.documents[name='Bank or financial account statements']",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Upload Bank or financial account statements, replace it if unreadable, or tell the firm why it is unavailable.",
              "id": "document-fake-document-rosa-whitaker-ch7-retired-bank-or-financial-account-statements-3",
              "kind": "document",
              "label": "Bank or financial account statements",
              "priority": "medium",
              "resolutionStatus": "open",
              "sectionId": "documents",
              "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
            }
          ],
          "ruleSetVersion": "2026-07-13.pilot-v1",
          "states": {
            "attorneyReview": "not_started",
            "documentReview": "pending",
            "intakeCompletion": "needs_client_action",
            "submission": "submitted"
          },
          "urgentAttorneyTask": null
        },
        "blockingReadiness": {
          "complete": 28,
          "percent": 88,
          "required": 32
        },
        "documentCompletion": {
          "applicableRequired": 5,
          "receivedRequired": 3
        },
        "emailDraft": {
          "bodySnapshot": "Hi Rosa,\n\nWe reviewed your BK FastLane intake entry and found a few items that still need your attention before the attorney can use the file efficiently.\n\n1. Return to Personal Info and answer: Date of birth.\n2. Enter the creditor or collection agency name for the $4,300 debt.\n3. Upload Social Security card, W-2, or 1099, replace it if unreadable, or tell the firm why it is unavailable.\n4. Upload Bank or financial account statements, replace it if unreadable, or tell the firm why it is unavailable.\n\nYou do not need to calculate legal conclusions. Just enter your best information and upload the requested documents when available.\n\nReturn to your intake: https://jimmydanol.github.io/bkfl-crm-lite/intake-demo.html?packageId=bkfl-demo-rosa-whitaker-ch7-retired&itemId=schema-start.debtor.dateOfBirth\n\nThank you,\nBK FastLane intake team",
          "deliveryMode": "simulation",
          "intakeResumeUrl": "https://jimmydanol.github.io/bkfl-crm-lite/intake-demo.html?packageId=bkfl-demo-rosa-whitaker-ch7-retired&itemId=schema-start.debtor.dateOfBirth",
          "recipient": "rosa.whitaker.fake@example.test",
          "status": "pending_approval",
          "subject": "Information needed to finish your Intake"
        },
        "events": [],
        "fieldCompletion": {
          "applicableRequired": 28,
          "enteredRequired": 26,
          "percent": 93
        },
        "intakeChecklistCompletion": 88,
        "intakeResumeUrl": "https://jimmydanol.github.io/bkfl-crm-lite/intake-demo.html?packageId=bkfl-demo-rosa-whitaker-ch7-retired&itemId=schema-start.debtor.dateOfBirth",
        "items": [
          {
            "applicability": "essential_now",
            "applicabilityReason": "The canonical Intake schema marks this Personal Info answer as required for the current client step.",
            "canonicalPath": "matter.debtors[0].dateOfBirth",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Return to Personal Info and answer: Date of birth.",
            "id": "schema-start.debtor.dateOfBirth",
            "kind": "field",
            "label": "Date of birth",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "start",
            "whyNeeded": "The firm needs this answer in canonical Matter data before administrative Intake collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "The debtor entered a balance but omitted the creditor or collection agency name.",
            "canonicalPath": "matter.debts[id='fake-debt-rosa-whitaker-ch7-retired-2'].creditor",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Enter the creditor or collection agency name for the $4,300 debt.",
            "id": "debt-creditor-fake-debt-rosa-whitaker-ch7-retired-2",
            "kind": "field",
            "label": "Debt creditor name",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "property",
            "whyNeeded": "The firm cannot reliably identify or organize an unnamed debt."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Social Security card, W-2, or 1099']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Social Security card, W-2, or 1099, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-rosa-whitaker-ch7-retired-social-security-card-w-2-or-1099-2",
            "kind": "document",
            "label": "Social Security card, W-2, or 1099",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Bank or financial account statements']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Bank or financial account statements, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-rosa-whitaker-ch7-retired-bank-or-financial-account-statements-3",
            "kind": "document",
            "label": "Bank or financial account statements",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          }
        ],
        "missingItems": [
          {
            "applicability": "essential_now",
            "applicabilityReason": "The canonical Intake schema marks this Personal Info answer as required for the current client step.",
            "canonicalPath": "matter.debtors[0].dateOfBirth",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Return to Personal Info and answer: Date of birth.",
            "id": "schema-start.debtor.dateOfBirth",
            "kind": "field",
            "label": "Date of birth",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "start",
            "whyNeeded": "The firm needs this answer in canonical Matter data before administrative Intake collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "The debtor entered a balance but omitted the creditor or collection agency name.",
            "canonicalPath": "matter.debts[id='fake-debt-rosa-whitaker-ch7-retired-2'].creditor",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Enter the creditor or collection agency name for the $4,300 debt.",
            "id": "debt-creditor-fake-debt-rosa-whitaker-ch7-retired-2",
            "kind": "field",
            "label": "Debt creditor name",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "property",
            "whyNeeded": "The firm cannot reliably identify or organize an unnamed debt."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Social Security card, W-2, or 1099']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Social Security card, W-2, or 1099, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-rosa-whitaker-ch7-retired-social-security-card-w-2-or-1099-2",
            "kind": "document",
            "label": "Social Security card, W-2, or 1099",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Bank or financial account statements']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Bank or financial account statements, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-rosa-whitaker-ch7-retired-bank-or-financial-account-statements-3",
            "kind": "document",
            "label": "Bank or financial account statements",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          }
        ],
        "percent": 88,
        "revision": 1,
        "states": {
          "attorneyReview": "not_started",
          "documentReview": "pending",
          "intakeCompletion": "needs_client_action",
          "submission": "submitted"
        },
        "status": "needs_client_action",
        "urgentAttorneyTask": null
      },
      "demo": true,
      "generatedAt": "2026-07-13T19:54:04.109Z",
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
        "personalInfoSubmittedAt": "2026-07-13T19:54:04.109Z",
        "createdAt": "2026-07-13T19:54:05.206Z",
        "updatedAt": "2026-07-13T19:54:04.109Z",
        "debtors": [
          {
            "id": "debtor-d5bc6d5a-b44b-49ec-a980-55fa84cd7c8e",
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
            "id": "asset-f9f2b31a-1f58-421c-b881-baa0b5b4f828",
            "category": "Bank or financial account",
            "description": "Wells Fargo checking",
            "estimatedValue": 780,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "Checking"
          },
          {
            "id": "asset-bfa8cc65-8349-4738-80fd-fa3f0eee80dd",
            "category": "Bank or financial account",
            "description": "Wells Fargo savings",
            "estimatedValue": 1100,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "Savings"
          },
          {
            "id": "asset-573cdba6-231c-4c04-90fd-37a745f6b79f",
            "category": "Retirement or pension account",
            "description": "Small rollover IRA",
            "estimatedValue": 14600,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "IRA"
          },
          {
            "id": "asset-6c007184-3c21-40f9-b9d8-57d6c28fdc77",
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
            "id": "income-3acb1eac-3bee-4504-9266-10d9bca58bd8",
            "source": "Social Security / public benefits",
            "employer": "Social Security Administration",
            "amount": 1980,
            "frequency": "Monthly",
            "sixMonthTotal": 11880
          },
          {
            "id": "income-84d7d985-5f23-41a6-8466-805ead3bf925",
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
            "id": "expense-6cb6ea9a-5475-4b63-b409-1cd18495b6fc",
            "category": "Rent or home/mortgage payment",
            "monthlyAmount": 1180,
            "notes": ""
          },
          {
            "id": "expense-1150983f-3f30-47d7-8141-d98394a5d063",
            "category": "Electricity, heat, natural gas",
            "monthlyAmount": 120,
            "notes": ""
          },
          {
            "id": "expense-e4eea822-e489-4ac1-a4d7-906ceeaed77f",
            "category": "Phone, cell, internet, satellite & cable",
            "monthlyAmount": 135,
            "notes": ""
          },
          {
            "id": "expense-b498bb5b-4cd3-41bb-bf13-48ad9e09d225",
            "category": "Food & housekeeping supplies",
            "monthlyAmount": 425,
            "notes": ""
          },
          {
            "id": "expense-9df6036a-f0ff-465d-82c4-529f7bd68f6f",
            "category": "Medical & dental expenses",
            "monthlyAmount": 220,
            "notes": ""
          },
          {
            "id": "expense-43d55234-3a70-4218-98fc-e80da9600863",
            "category": "Transportation",
            "monthlyAmount": 160,
            "notes": ""
          },
          {
            "id": "expense-64da4532-e71b-4f3d-856a-e78bc50145fc",
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
            "id": "fake-document-rosa-whitaker-ch7-retired-driver-s-license-1",
            "name": "Driver's license",
            "category": "Identity",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "fake-document-rosa-whitaker-ch7-retired-social-security-card-w-2-or-1099-2",
            "name": "Social Security card, W-2, or 1099",
            "category": "Identity",
            "status": "needed",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": []
          },
          {
            "id": "fake-document-rosa-whitaker-ch7-retired-bank-or-financial-account-statements-3",
            "name": "Bank or financial account statements",
            "category": "Assets",
            "status": "needed",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": []
          },
          {
            "id": "fake-document-rosa-whitaker-ch7-retired-statements-for-all-debts-4",
            "name": "Statements for all debts",
            "category": "Debt",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "fake-document-rosa-whitaker-ch7-retired-tax-return-unavailability-explanation-5",
            "name": "Tax return unavailability explanation",
            "category": "Taxes",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": [],
            "applicability": "conditional",
            "applicabilityReason": "Rosa reported that she did not file a recent return because her income was fixed benefits.",
            "priority": "medium",
            "whyNeeded": "A short explanation lets the firm evaluate the missing return without repeatedly asking for a document that may not exist."
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
                "id": "fa-entry-d7b814de-768b-45e9-aa23-fb3f961a5403",
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
                "id": "fa-entry-face3607-1b75-4f34-b09e-593b663e8f05",
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
        "documentsReady": 3,
        "documentsRequired": 5,
        "fieldsFilled": 26,
        "fieldsRequired": 28,
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
      "schemaVersion": 2,
      "source": {
        "branch": "Jimmy",
        "scenarioId": "rosa-whitaker-ch7-retired",
        "scenarioTitle": "Retired Chapter 7 with fixed income and incomplete debt details",
        "system": "BK FastLane Intake",
        "traits": [
          "chapter_7",
          "retired",
          "renter",
          "tax_return_unavailable"
        ]
      },
      "submittedAt": "2026-07-13T19:54:04.109Z"
    },
    {
      "completion": {
        "bundle": {
          "bundleVersion": 2,
          "generatedAt": "2026-07-13T19:54:04.109Z",
          "items": [
            {
              "applicability": "essential_now",
              "applicabilityReason": "Means-test six-month total was not entered.",
              "canonicalPath": "matter.income[0].sixMonthTotal",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Complete: Colorado Department of Labor six-month income total.",
              "id": "missing-log-income.rows.0.sixMonthTotal",
              "kind": "field",
              "label": "Colorado Department of Labor six-month income total",
              "priority": "high",
              "resolutionStatus": "open",
              "sectionId": "income",
              "whyNeeded": "The answer is absent from canonical Matter data and cannot be inferred by the firm."
            },
            {
              "applicability": "essential_now",
              "applicabilityReason": "The canonical Intake schema marks this Personal Info answer as required for the current client step.",
              "canonicalPath": "matter.debtors[0].county",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Return to Personal Info and answer: County.",
              "id": "schema-start.debtor.county",
              "kind": "field",
              "label": "County",
              "priority": "high",
              "resolutionStatus": "open",
              "sectionId": "start",
              "whyNeeded": "The firm needs this answer in canonical Matter data before administrative Intake collection is complete."
            },
            {
              "applicability": "essential_now",
              "applicabilityReason": "Nolan reported an eviction hearing in two days.",
              "canonicalPath": "matter.documents[name='Court paperwork']",
              "caseStageDeadline": "Same day",
              "clientActionable": true,
              "clientInstruction": "Upload Court paperwork, replace it if unreadable, or tell the firm why it is unavailable.",
              "id": "document-fake-document-nolan-brooks-ch7-renter-court-paperwork-3",
              "kind": "document",
              "label": "Court paperwork",
              "priority": "high",
              "resolutionStatus": "open",
              "sectionId": "documents",
              "whyNeeded": "The filing date, case number, and deadline must be visible to the attorney promptly."
            },
            {
              "applicability": "attorney_only",
              "applicabilityReason": "Canonical review logic identified a fact for firm judgment, not a debtor collection request.",
              "canonicalPath": "reviewFlags.income",
              "caseStageDeadline": "During attorney review",
              "clientActionable": false,
              "clientInstruction": "No debtor action is requested from this flag.",
              "id": "flag-income-Six-month income is missing",
              "kind": "review",
              "label": "Six-month income is missing",
              "priority": "medium",
              "resolutionStatus": "open",
              "sectionId": "income",
              "whyNeeded": "Means-test intake needs six-month totals before attorney review."
            }
          ],
          "matterId": "fake-matter-nolan-brooks-ch7-renter",
          "matterRevision": 1,
          "metrics": {
            "blockingReadiness": {
              "complete": 29,
              "percent": 91,
              "required": 32
            },
            "documentCollection": {
              "applicable": 4,
              "collected": 3,
              "percent": 75
            },
            "fieldCompletion": {
              "applicable": 28,
              "entered": 26,
              "percent": 93
            },
            "intakeChecklistCompletion": 91
          },
          "reminderItems": [
            {
              "applicability": "essential_now",
              "applicabilityReason": "Means-test six-month total was not entered.",
              "canonicalPath": "matter.income[0].sixMonthTotal",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Complete: Colorado Department of Labor six-month income total.",
              "id": "missing-log-income.rows.0.sixMonthTotal",
              "kind": "field",
              "label": "Colorado Department of Labor six-month income total",
              "priority": "high",
              "resolutionStatus": "open",
              "sectionId": "income",
              "whyNeeded": "The answer is absent from canonical Matter data and cannot be inferred by the firm."
            },
            {
              "applicability": "essential_now",
              "applicabilityReason": "The canonical Intake schema marks this Personal Info answer as required for the current client step.",
              "canonicalPath": "matter.debtors[0].county",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Return to Personal Info and answer: County.",
              "id": "schema-start.debtor.county",
              "kind": "field",
              "label": "County",
              "priority": "high",
              "resolutionStatus": "open",
              "sectionId": "start",
              "whyNeeded": "The firm needs this answer in canonical Matter data before administrative Intake collection is complete."
            },
            {
              "applicability": "essential_now",
              "applicabilityReason": "Nolan reported an eviction hearing in two days.",
              "canonicalPath": "matter.documents[name='Court paperwork']",
              "caseStageDeadline": "Same day",
              "clientActionable": true,
              "clientInstruction": "Upload Court paperwork, replace it if unreadable, or tell the firm why it is unavailable.",
              "id": "document-fake-document-nolan-brooks-ch7-renter-court-paperwork-3",
              "kind": "document",
              "label": "Court paperwork",
              "priority": "high",
              "resolutionStatus": "open",
              "sectionId": "documents",
              "whyNeeded": "The filing date, case number, and deadline must be visible to the attorney promptly."
            }
          ],
          "ruleSetVersion": "2026-07-13.pilot-v1",
          "states": {
            "attorneyReview": "not_started",
            "documentReview": "pending",
            "intakeCompletion": "needs_client_action",
            "submission": "submitted"
          },
          "urgentAttorneyTask": {
            "due": "same_day",
            "reason": "Eviction hearing is scheduled in two days; debtor uses only a phone and requests large touch targets.",
            "title": "Same-day attorney review of urgent collection or legal deadline"
          }
        },
        "blockingReadiness": {
          "complete": 29,
          "percent": 91,
          "required": 32
        },
        "documentCompletion": {
          "applicableRequired": 4,
          "receivedRequired": 3
        },
        "emailDraft": {
          "bodySnapshot": "Hi Nolan,\n\nWe reviewed your BK FastLane intake entry and found a few items that still need your attention before the attorney can use the file efficiently.\n\n1. Complete: Colorado Department of Labor six-month income total.\n2. Return to Personal Info and answer: County.\n3. Upload Court paperwork, replace it if unreadable, or tell the firm why it is unavailable.\n\nYou do not need to calculate legal conclusions. Just enter your best information and upload the requested documents when available.\n\nReturn to your intake: https://jimmydanol.github.io/bkfl-crm-lite/intake-demo.html?packageId=bkfl-demo-nolan-brooks-ch7-renter&itemId=missing-log-income.rows.0.sixMonthTotal\n\nThank you,\nBK FastLane intake team",
          "deliveryMode": "simulation",
          "intakeResumeUrl": "https://jimmydanol.github.io/bkfl-crm-lite/intake-demo.html?packageId=bkfl-demo-nolan-brooks-ch7-renter&itemId=missing-log-income.rows.0.sixMonthTotal",
          "recipient": "nolan.brooks.fake@example.test",
          "status": "pending_approval",
          "subject": "Information needed to finish your Intake"
        },
        "events": [],
        "fieldCompletion": {
          "applicableRequired": 28,
          "enteredRequired": 26,
          "percent": 93
        },
        "intakeChecklistCompletion": 91,
        "intakeResumeUrl": "https://jimmydanol.github.io/bkfl-crm-lite/intake-demo.html?packageId=bkfl-demo-nolan-brooks-ch7-renter&itemId=missing-log-income.rows.0.sixMonthTotal",
        "items": [
          {
            "applicability": "essential_now",
            "applicabilityReason": "Means-test six-month total was not entered.",
            "canonicalPath": "matter.income[0].sixMonthTotal",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Complete: Colorado Department of Labor six-month income total.",
            "id": "missing-log-income.rows.0.sixMonthTotal",
            "kind": "field",
            "label": "Colorado Department of Labor six-month income total",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "income",
            "whyNeeded": "The answer is absent from canonical Matter data and cannot be inferred by the firm."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "The canonical Intake schema marks this Personal Info answer as required for the current client step.",
            "canonicalPath": "matter.debtors[0].county",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Return to Personal Info and answer: County.",
            "id": "schema-start.debtor.county",
            "kind": "field",
            "label": "County",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "start",
            "whyNeeded": "The firm needs this answer in canonical Matter data before administrative Intake collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "Nolan reported an eviction hearing in two days.",
            "canonicalPath": "matter.documents[name='Court paperwork']",
            "caseStageDeadline": "Same day",
            "clientActionable": true,
            "clientInstruction": "Upload Court paperwork, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-nolan-brooks-ch7-renter-court-paperwork-3",
            "kind": "document",
            "label": "Court paperwork",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The filing date, case number, and deadline must be visible to the attorney promptly."
          },
          {
            "applicability": "attorney_only",
            "applicabilityReason": "Canonical review logic identified a fact for firm judgment, not a debtor collection request.",
            "canonicalPath": "reviewFlags.income",
            "caseStageDeadline": "During attorney review",
            "clientActionable": false,
            "clientInstruction": "No debtor action is requested from this flag.",
            "id": "flag-income-Six-month income is missing",
            "kind": "review",
            "label": "Six-month income is missing",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "income",
            "whyNeeded": "Means-test intake needs six-month totals before attorney review."
          }
        ],
        "missingItems": [
          {
            "applicability": "essential_now",
            "applicabilityReason": "Means-test six-month total was not entered.",
            "canonicalPath": "matter.income[0].sixMonthTotal",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Complete: Colorado Department of Labor six-month income total.",
            "id": "missing-log-income.rows.0.sixMonthTotal",
            "kind": "field",
            "label": "Colorado Department of Labor six-month income total",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "income",
            "whyNeeded": "The answer is absent from canonical Matter data and cannot be inferred by the firm."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "The canonical Intake schema marks this Personal Info answer as required for the current client step.",
            "canonicalPath": "matter.debtors[0].county",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Return to Personal Info and answer: County.",
            "id": "schema-start.debtor.county",
            "kind": "field",
            "label": "County",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "start",
            "whyNeeded": "The firm needs this answer in canonical Matter data before administrative Intake collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "Nolan reported an eviction hearing in two days.",
            "canonicalPath": "matter.documents[name='Court paperwork']",
            "caseStageDeadline": "Same day",
            "clientActionable": true,
            "clientInstruction": "Upload Court paperwork, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-nolan-brooks-ch7-renter-court-paperwork-3",
            "kind": "document",
            "label": "Court paperwork",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The filing date, case number, and deadline must be visible to the attorney promptly."
          }
        ],
        "percent": 91,
        "revision": 1,
        "states": {
          "attorneyReview": "not_started",
          "documentReview": "pending",
          "intakeCompletion": "needs_client_action",
          "submission": "submitted"
        },
        "status": "needs_client_action",
        "urgentAttorneyTask": {
          "due": "same_day",
          "reason": "Eviction hearing is scheduled in two days; debtor uses only a phone and requests large touch targets.",
          "title": "Same-day attorney review of urgent collection or legal deadline"
        }
      },
      "demo": true,
      "generatedAt": "2026-07-13T19:54:04.109Z",
      "matter": {
        "id": "fake-matter-nolan-brooks-ch7-renter",
        "title": "Nolan Brooks fake client-entered Chapter 7 intake",
        "chapter": "7",
        "status": "review",
        "filingState": "CO",
        "district": "District of Colorado",
        "clientGoals": "Stop the eviction if possible and address credit-card debt after a recent layoff.",
        "urgentConcerns": "Eviction hearing is scheduled in two days; debtor uses only a phone and requests large touch targets.",
        "priorBankruptcyFiled": "No",
        "priorBankruptcyDetails": "",
        "hasDependents": "No",
        "spouseFilingJointly": "No",
        "isEmployed": "No",
        "hasOtherHouseholdIncome": "Yes",
        "personalInfoSubmittedAt": "2026-07-13T19:54:04.109Z",
        "createdAt": "2026-07-13T19:54:05.220Z",
        "updatedAt": "2026-07-13T19:54:04.109Z",
        "debtors": [
          {
            "id": "debtor-a3a9be75-2313-4cba-8c88-331dec471294",
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
            "id": "asset-d231a077-cf6e-4007-99b6-5fda78ddf36a",
            "category": "Bank or financial account",
            "description": "Canvas Credit Union checking",
            "estimatedValue": 420,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "Checking"
          },
          {
            "id": "asset-35304273-d253-48b9-8c4a-865777e4fb10",
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
            "id": "asset-76eace9e-fc86-469a-84d8-5509452319aa",
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
            "id": "income-84a70880-7250-4b92-8cbf-f8b8d06e0ee9",
            "source": "Unemployment benefits",
            "employer": "Colorado Department of Labor",
            "amount": 1850,
            "frequency": "Monthly",
            "sixMonthTotal": 0
          }
        ],
        "payStubIncomeEvidence": [],
        "expenses": [
          {
            "id": "expense-a4589328-be87-4823-8fb9-91d7447b3289",
            "category": "Rent or home/mortgage payment",
            "monthlyAmount": 1390,
            "notes": ""
          },
          {
            "id": "expense-a3cba037-5bb7-4930-b71b-fbbf45432b1a",
            "category": "Electricity, heat, natural gas",
            "monthlyAmount": 165,
            "notes": ""
          },
          {
            "id": "expense-d492cf75-db2b-4991-8a1d-d0b2d7e17aca",
            "category": "Phone, cell, internet, satellite & cable",
            "monthlyAmount": 155,
            "notes": ""
          },
          {
            "id": "expense-b5c96a26-902f-461c-809f-cd70129a1f01",
            "category": "Food & housekeeping supplies",
            "monthlyAmount": 540,
            "notes": ""
          },
          {
            "id": "expense-1765f6bf-4d23-4df9-b672-03b8c0adaa73",
            "category": "Medical & dental expenses",
            "monthlyAmount": 95,
            "notes": ""
          },
          {
            "id": "expense-b018cb43-73ac-4586-b92b-92a86deda56e",
            "category": "Transportation",
            "monthlyAmount": 385,
            "notes": ""
          },
          {
            "id": "expense-20666933-65b4-4576-aa23-fc04c7f2fbb7",
            "category": "Vehicle insurance",
            "monthlyAmount": 148,
            "notes": ""
          }
        ],
        "sofaEvents": [],
        "petitionFlags": {
          "evictionJudgment": "Yes",
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
          "soleProprietorBusinessName": "Nolan Brooks delivery work",
          "soleProprietorBusinessState": "",
          "soleProprietorBusinessStreet": "",
          "soleProprietorBusinessType": "Gig delivery",
          "soleProprietorBusinessUnit": "",
          "soleProprietorBusinessZipCode": ""
        },
        "chapter7": {
          "meansTestStatus": "Needs unemployment six-month total",
          "medianIncomeState": "Colorado",
          "estimatedMonthlyIncome": 1850,
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
            "id": "fake-document-nolan-brooks-ch7-renter-driver-s-license-1",
            "name": "Driver's license",
            "category": "Identity",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "fake-document-nolan-brooks-ch7-renter-bank-statements-last-6-months-2",
            "name": "Bank statements - last 6 months",
            "category": "Banking",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "fake-document-nolan-brooks-ch7-renter-court-paperwork-3",
            "name": "Court paperwork",
            "category": "Financial affairs",
            "status": "needed",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": [],
            "applicability": "essential_now",
            "applicabilityReason": "Nolan reported an eviction hearing in two days.",
            "caseStageDeadline": "Same day",
            "priority": "high"
          },
          {
            "id": "fake-document-nolan-brooks-ch7-renter-lease-or-rental-agreement-4",
            "name": "Lease or rental agreement",
            "category": "Housing",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": [],
            "applicabilityReason": "Nolan rents the residence involved in the reported eviction."
          }
        ],
        "financialAffairs": {
          "prior-addresses": {
            "answer": "Yes",
            "entries": [
              {
                "id": "fa-entry-9461b215-941f-485d-8c16-de8036ea794e",
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
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "other-income": {
            "answer": "Yes",
            "entries": [
              {
                "id": "fa-entry-c75aee09-34f8-4a2f-8a5e-df39ee325741",
                "fields": {
                  "amount": "1850",
                  "frequency": "Monthly",
                  "source": "Unemployment benefits"
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
            "answer": "Yes",
            "entries": [
              {
                "id": "fa-entry-f03202d5-b855-45b0-81a2-5edb4726a77d",
                "fields": {
                  "caseNumber": "",
                  "court": "Boulder County Court",
                  "hearingDate": "2026-07-15",
                  "type": "Residential eviction"
                }
              }
            ],
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
        "documentsReady": 3,
        "documentsRequired": 4,
        "fieldsFilled": 26,
        "fieldsRequired": 28,
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
      "schemaVersion": 2,
      "source": {
        "branch": "Jimmy",
        "scenarioId": "nolan-brooks-ch7-renter",
        "scenarioTitle": "Unemployed mobile-first renter with an eviction hearing",
        "system": "BK FastLane Intake",
        "traits": [
          "chapter_7",
          "unemployed",
          "renter",
          "eviction",
          "mobile_accessibility"
        ]
      },
      "submittedAt": "2026-07-13T19:54:04.109Z"
    },
    {
      "completion": {
        "bundle": {
          "bundleVersion": 2,
          "generatedAt": "2026-07-13T19:54:04.109Z",
          "items": [
            {
              "applicability": "essential_now",
              "applicabilityReason": "Means-test six-month total was not entered.",
              "canonicalPath": "matter.income[1].sixMonthTotal",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Complete: Arun Patel nonfiling-spouse wages six-month income total.",
              "id": "missing-log-income.rows.1.sixMonthTotal",
              "kind": "field",
              "label": "Arun Patel nonfiling-spouse wages six-month income total",
              "priority": "high",
              "resolutionStatus": "open",
              "sectionId": "income",
              "whyNeeded": "The answer is absent from canonical Matter data and cannot be inferred by the firm."
            },
            {
              "applicability": "essential_now",
              "applicabilityReason": "The canonical Intake schema marks this Personal Info answer as required for the current client step.",
              "canonicalPath": "matter.debtors[0].county",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Return to Personal Info and answer: County.",
              "id": "schema-start.debtor.county",
              "kind": "field",
              "label": "County",
              "priority": "high",
              "resolutionStatus": "open",
              "sectionId": "start",
              "whyNeeded": "The firm needs this answer in canonical Matter data before administrative Intake collection is complete."
            },
            {
              "applicability": "essential_now",
              "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
              "canonicalPath": "matter.documents[name='Bank statements - last 6 months']",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Upload Bank statements - last 6 months, replace it if unreadable, or tell the firm why it is unavailable.",
              "id": "document-fake-document-maya-patel-ch7-parent-bank-statements-last-6-months-4",
              "kind": "document",
              "label": "Bank statements - last 6 months",
              "priority": "medium",
              "resolutionStatus": "open",
              "sectionId": "documents",
              "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
            },
            {
              "applicability": "essential_now",
              "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
              "canonicalPath": "matter.documents[name='Lease or rental agreement']",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Upload Lease or rental agreement, replace it if unreadable, or tell the firm why it is unavailable.",
              "id": "document-fake-document-maya-patel-ch7-parent-lease-or-rental-agreement-6",
              "kind": "document",
              "label": "Lease or rental agreement",
              "priority": "medium",
              "resolutionStatus": "open",
              "sectionId": "documents",
              "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
            },
            {
              "applicability": "essential_now",
              "applicabilityReason": "Maya reported wages and a current garnishment; household-income review includes the nonfiling spouse.",
              "canonicalPath": "matter.documents[name='Pay stubs - last 6 months']",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Upload Pay stubs - last 6 months, replace it if unreadable, or tell the firm why it is unavailable.",
              "id": "document-fake-document-maya-patel-ch7-parent-pay-stubs-last-6-months-3",
              "kind": "document",
              "label": "Pay stubs - last 6 months",
              "priority": "medium",
              "resolutionStatus": "open",
              "sectionId": "documents",
              "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
            },
            {
              "applicability": "attorney_only",
              "applicabilityReason": "Canonical review logic identified a fact for firm judgment, not a debtor collection request.",
              "canonicalPath": "reviewFlags.income",
              "caseStageDeadline": "During attorney review",
              "clientActionable": false,
              "clientInstruction": "No debtor action is requested from this flag.",
              "id": "flag-income-Six-month income is missing",
              "kind": "review",
              "label": "Six-month income is missing",
              "priority": "medium",
              "resolutionStatus": "open",
              "sectionId": "income",
              "whyNeeded": "Means-test intake needs six-month totals before attorney review."
            }
          ],
          "matterId": "fake-matter-maya-patel-ch7-parent",
          "matterRevision": 1,
          "metrics": {
            "blockingReadiness": {
              "complete": 29,
              "percent": 85,
              "required": 34
            },
            "documentCollection": {
              "applicable": 6,
              "collected": 3,
              "percent": 50
            },
            "fieldCompletion": {
              "applicable": 28,
              "entered": 26,
              "percent": 93
            },
            "intakeChecklistCompletion": 85
          },
          "reminderItems": [
            {
              "applicability": "essential_now",
              "applicabilityReason": "Means-test six-month total was not entered.",
              "canonicalPath": "matter.income[1].sixMonthTotal",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Complete: Arun Patel nonfiling-spouse wages six-month income total.",
              "id": "missing-log-income.rows.1.sixMonthTotal",
              "kind": "field",
              "label": "Arun Patel nonfiling-spouse wages six-month income total",
              "priority": "high",
              "resolutionStatus": "open",
              "sectionId": "income",
              "whyNeeded": "The answer is absent from canonical Matter data and cannot be inferred by the firm."
            },
            {
              "applicability": "essential_now",
              "applicabilityReason": "The canonical Intake schema marks this Personal Info answer as required for the current client step.",
              "canonicalPath": "matter.debtors[0].county",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Return to Personal Info and answer: County.",
              "id": "schema-start.debtor.county",
              "kind": "field",
              "label": "County",
              "priority": "high",
              "resolutionStatus": "open",
              "sectionId": "start",
              "whyNeeded": "The firm needs this answer in canonical Matter data before administrative Intake collection is complete."
            },
            {
              "applicability": "essential_now",
              "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
              "canonicalPath": "matter.documents[name='Bank statements - last 6 months']",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Upload Bank statements - last 6 months, replace it if unreadable, or tell the firm why it is unavailable.",
              "id": "document-fake-document-maya-patel-ch7-parent-bank-statements-last-6-months-4",
              "kind": "document",
              "label": "Bank statements - last 6 months",
              "priority": "medium",
              "resolutionStatus": "open",
              "sectionId": "documents",
              "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
            },
            {
              "applicability": "essential_now",
              "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
              "canonicalPath": "matter.documents[name='Lease or rental agreement']",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Upload Lease or rental agreement, replace it if unreadable, or tell the firm why it is unavailable.",
              "id": "document-fake-document-maya-patel-ch7-parent-lease-or-rental-agreement-6",
              "kind": "document",
              "label": "Lease or rental agreement",
              "priority": "medium",
              "resolutionStatus": "open",
              "sectionId": "documents",
              "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
            },
            {
              "applicability": "essential_now",
              "applicabilityReason": "Maya reported wages and a current garnishment; household-income review includes the nonfiling spouse.",
              "canonicalPath": "matter.documents[name='Pay stubs - last 6 months']",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Upload Pay stubs - last 6 months, replace it if unreadable, or tell the firm why it is unavailable.",
              "id": "document-fake-document-maya-patel-ch7-parent-pay-stubs-last-6-months-3",
              "kind": "document",
              "label": "Pay stubs - last 6 months",
              "priority": "medium",
              "resolutionStatus": "open",
              "sectionId": "documents",
              "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
            }
          ],
          "ruleSetVersion": "2026-07-13.pilot-v1",
          "states": {
            "attorneyReview": "not_started",
            "documentReview": "pending",
            "intakeCompletion": "needs_client_action",
            "submission": "submitted"
          },
          "urgentAttorneyTask": {
            "due": "same_day",
            "reason": "Wage garnishment began this pay period.",
            "title": "Same-day attorney review of urgent collection or legal deadline"
          }
        },
        "blockingReadiness": {
          "complete": 29,
          "percent": 85,
          "required": 34
        },
        "documentCompletion": {
          "applicableRequired": 6,
          "receivedRequired": 3
        },
        "emailDraft": {
          "bodySnapshot": "Hi Maya,\n\nWe reviewed your BK FastLane intake entry and found a few items that still need your attention before the attorney can use the file efficiently.\n\n1. Complete: Arun Patel nonfiling-spouse wages six-month income total.\n2. Return to Personal Info and answer: County.\n3. Upload Bank statements - last 6 months, replace it if unreadable, or tell the firm why it is unavailable.\n4. Upload Lease or rental agreement, replace it if unreadable, or tell the firm why it is unavailable.\n5. Upload Pay stubs - last 6 months, replace it if unreadable, or tell the firm why it is unavailable.\n\nYou do not need to calculate legal conclusions. Just enter your best information and upload the requested documents when available.\n\nReturn to your intake: https://jimmydanol.github.io/bkfl-crm-lite/intake-demo.html?packageId=bkfl-demo-maya-patel-ch7-parent&itemId=missing-log-income.rows.1.sixMonthTotal\n\nThank you,\nBK FastLane intake team",
          "deliveryMode": "simulation",
          "intakeResumeUrl": "https://jimmydanol.github.io/bkfl-crm-lite/intake-demo.html?packageId=bkfl-demo-maya-patel-ch7-parent&itemId=missing-log-income.rows.1.sixMonthTotal",
          "recipient": "maya.patel.fake@example.test",
          "status": "pending_approval",
          "subject": "Information needed to finish your Intake"
        },
        "events": [],
        "fieldCompletion": {
          "applicableRequired": 28,
          "enteredRequired": 26,
          "percent": 93
        },
        "intakeChecklistCompletion": 85,
        "intakeResumeUrl": "https://jimmydanol.github.io/bkfl-crm-lite/intake-demo.html?packageId=bkfl-demo-maya-patel-ch7-parent&itemId=missing-log-income.rows.1.sixMonthTotal",
        "items": [
          {
            "applicability": "essential_now",
            "applicabilityReason": "Means-test six-month total was not entered.",
            "canonicalPath": "matter.income[1].sixMonthTotal",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Complete: Arun Patel nonfiling-spouse wages six-month income total.",
            "id": "missing-log-income.rows.1.sixMonthTotal",
            "kind": "field",
            "label": "Arun Patel nonfiling-spouse wages six-month income total",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "income",
            "whyNeeded": "The answer is absent from canonical Matter data and cannot be inferred by the firm."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "The canonical Intake schema marks this Personal Info answer as required for the current client step.",
            "canonicalPath": "matter.debtors[0].county",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Return to Personal Info and answer: County.",
            "id": "schema-start.debtor.county",
            "kind": "field",
            "label": "County",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "start",
            "whyNeeded": "The firm needs this answer in canonical Matter data before administrative Intake collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Bank statements - last 6 months']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Bank statements - last 6 months, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-maya-patel-ch7-parent-bank-statements-last-6-months-4",
            "kind": "document",
            "label": "Bank statements - last 6 months",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Lease or rental agreement']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Lease or rental agreement, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-maya-patel-ch7-parent-lease-or-rental-agreement-6",
            "kind": "document",
            "label": "Lease or rental agreement",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "Maya reported wages and a current garnishment; household-income review includes the nonfiling spouse.",
            "canonicalPath": "matter.documents[name='Pay stubs - last 6 months']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Pay stubs - last 6 months, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-maya-patel-ch7-parent-pay-stubs-last-6-months-3",
            "kind": "document",
            "label": "Pay stubs - last 6 months",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "attorney_only",
            "applicabilityReason": "Canonical review logic identified a fact for firm judgment, not a debtor collection request.",
            "canonicalPath": "reviewFlags.income",
            "caseStageDeadline": "During attorney review",
            "clientActionable": false,
            "clientInstruction": "No debtor action is requested from this flag.",
            "id": "flag-income-Six-month income is missing",
            "kind": "review",
            "label": "Six-month income is missing",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "income",
            "whyNeeded": "Means-test intake needs six-month totals before attorney review."
          }
        ],
        "missingItems": [
          {
            "applicability": "essential_now",
            "applicabilityReason": "Means-test six-month total was not entered.",
            "canonicalPath": "matter.income[1].sixMonthTotal",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Complete: Arun Patel nonfiling-spouse wages six-month income total.",
            "id": "missing-log-income.rows.1.sixMonthTotal",
            "kind": "field",
            "label": "Arun Patel nonfiling-spouse wages six-month income total",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "income",
            "whyNeeded": "The answer is absent from canonical Matter data and cannot be inferred by the firm."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "The canonical Intake schema marks this Personal Info answer as required for the current client step.",
            "canonicalPath": "matter.debtors[0].county",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Return to Personal Info and answer: County.",
            "id": "schema-start.debtor.county",
            "kind": "field",
            "label": "County",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "start",
            "whyNeeded": "The firm needs this answer in canonical Matter data before administrative Intake collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Bank statements - last 6 months']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Bank statements - last 6 months, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-maya-patel-ch7-parent-bank-statements-last-6-months-4",
            "kind": "document",
            "label": "Bank statements - last 6 months",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Lease or rental agreement']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Lease or rental agreement, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-maya-patel-ch7-parent-lease-or-rental-agreement-6",
            "kind": "document",
            "label": "Lease or rental agreement",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "Maya reported wages and a current garnishment; household-income review includes the nonfiling spouse.",
            "canonicalPath": "matter.documents[name='Pay stubs - last 6 months']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Pay stubs - last 6 months, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-maya-patel-ch7-parent-pay-stubs-last-6-months-3",
            "kind": "document",
            "label": "Pay stubs - last 6 months",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          }
        ],
        "percent": 85,
        "revision": 1,
        "states": {
          "attorneyReview": "not_started",
          "documentReview": "pending",
          "intakeCompletion": "needs_client_action",
          "submission": "submitted"
        },
        "status": "needs_client_action",
        "urgentAttorneyTask": {
          "due": "same_day",
          "reason": "Wage garnishment began this pay period.",
          "title": "Same-day attorney review of urgent collection or legal deadline"
        }
      },
      "demo": true,
      "generatedAt": "2026-07-13T19:54:04.109Z",
      "matter": {
        "id": "fake-matter-maya-patel-ch7-parent",
        "title": "Maya Patel fake client-entered Chapter 7 intake",
        "chapter": "7",
        "status": "review",
        "filingState": "CO",
        "district": "District of Colorado",
        "clientGoals": "File individually while documenting household income from a nonfiling spouse.",
        "urgentConcerns": "Wage garnishment began this pay period.",
        "priorBankruptcyFiled": "No",
        "priorBankruptcyDetails": "",
        "hasDependents": "Yes",
        "spouseFilingJointly": "No",
        "isEmployed": "Yes",
        "hasOtherHouseholdIncome": "Yes",
        "personalInfoSubmittedAt": "2026-07-13T19:54:04.109Z",
        "createdAt": "2026-07-13T19:54:05.234Z",
        "updatedAt": "2026-07-13T19:54:04.109Z",
        "debtors": [
          {
            "id": "debtor-2c723f11-31c5-4362-bf8c-4ccd2c20656a",
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
          },
          {
            "id": "debtor-949b853b-a44b-4073-9f3f-9ea01275f8a5",
            "firstName": "Arun",
            "middleName": "Dev",
            "lastName": "Patel",
            "otherNames": "",
            "email": "arun.patel.fake@example.test",
            "phone": "(720) 555-0208",
            "ssnLast4": "3598",
            "socialSecurityNumber": "111-22-3598",
            "address": "14522 East Evans Avenue Unit 8",
            "city": "Aurora",
            "state": "CO",
            "zipCode": "80014",
            "county": "Arapahoe",
            "mailingAddressDifferent": false,
            "dateOfBirth": "09/06/1988"
          }
        ],
        "household": {
          "householdSize": 4,
          "maritalStatus": "Married",
          "dependents": [
            {
              "id": "dependent-3357d825-c73b-4498-b937-f147dcbd5c75",
              "name": "Fake child A",
              "age": "9",
              "relationship": "Child",
              "livesWithDebtor": "Yes"
            },
            {
              "id": "dependent-52ab243b-a278-4ecb-ab9a-529ded576322",
              "name": "Fake child B",
              "age": "4",
              "relationship": "Child",
              "livesWithDebtor": "Yes"
            }
          ]
        },
        "assets": [
          {
            "id": "asset-9d384ad2-0c18-44c8-b478-ab4d776dd25f",
            "category": "Bank or financial account",
            "description": "Canvas Credit Union checking",
            "estimatedValue": 420,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "Checking"
          },
          {
            "id": "asset-6864cb25-8e8c-4915-a96b-f8900409601a",
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
            "id": "asset-2cd38529-1cf9-44db-b724-5d9617fb6abc",
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
            "id": "income-8dd60067-5acd-4e88-aa79-35c7d43322d2",
            "source": "Maya wages",
            "employer": "Aurora Medical Billing",
            "amount": 4100,
            "frequency": "Twice monthly",
            "sixMonthTotal": 24600
          },
          {
            "id": "income-8b53b00e-a72f-40fa-82b5-6b2d773c790f",
            "source": "Nonfiling spouse household income",
            "employer": "Arun Patel nonfiling-spouse wages",
            "amount": 5200,
            "frequency": "Biweekly",
            "sixMonthTotal": 0
          }
        ],
        "payStubIncomeEvidence": [],
        "expenses": [
          {
            "id": "expense-7cdc2f17-e43c-4922-88ab-fab11a9fcc15",
            "category": "Rent or home/mortgage payment",
            "monthlyAmount": 1390,
            "notes": ""
          },
          {
            "id": "expense-760d63c3-95e2-45c7-8d84-1487b70c3c21",
            "category": "Electricity, heat, natural gas",
            "monthlyAmount": 165,
            "notes": ""
          },
          {
            "id": "expense-3cd4c7bc-6343-45d3-a710-99eb702bb85a",
            "category": "Phone, cell, internet, satellite & cable",
            "monthlyAmount": 155,
            "notes": ""
          },
          {
            "id": "expense-09d7f6a8-059e-4558-81c0-b5cb18bcd92e",
            "category": "Food & housekeeping supplies",
            "monthlyAmount": 540,
            "notes": ""
          },
          {
            "id": "expense-2901523a-a755-409d-a5d1-ec7566545f21",
            "category": "Medical & dental expenses",
            "monthlyAmount": 95,
            "notes": ""
          },
          {
            "id": "expense-75651313-1cf1-44cf-88c9-6badd911d1a2",
            "category": "Transportation",
            "monthlyAmount": 385,
            "notes": ""
          },
          {
            "id": "expense-1332bf27-b056-49cc-a26e-84277f31631b",
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
            "id": "fake-document-maya-patel-ch7-parent-driver-s-license-1",
            "name": "Driver's license",
            "category": "Identity",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "fake-document-maya-patel-ch7-parent-tax-return-last-year-2",
            "name": "Tax return - last year",
            "category": "Taxes",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "fake-document-maya-patel-ch7-parent-pay-stubs-last-6-months-3",
            "name": "Pay stubs - last 6 months",
            "category": "Income",
            "status": "needed",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": [],
            "applicabilityReason": "Maya reported wages and a current garnishment; household-income review includes the nonfiling spouse."
          },
          {
            "id": "fake-document-maya-patel-ch7-parent-bank-statements-last-6-months-4",
            "name": "Bank statements - last 6 months",
            "category": "Banking",
            "status": "needed",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": []
          },
          {
            "id": "fake-document-maya-patel-ch7-parent-statements-for-all-debts-5",
            "name": "Statements for all debts",
            "category": "Debt",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "fake-document-maya-patel-ch7-parent-lease-or-rental-agreement-6",
            "name": "Lease or rental agreement",
            "category": "Housing",
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
                "id": "fa-entry-9461b215-941f-485d-8c16-de8036ea794e",
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
                "id": "fa-entry-b68495ff-7efa-4d15-83fa-8a7d6e8f25eb",
                "fields": {
                  "amount": "430",
                  "creditor": "Front Range Collections",
                  "date": "2026-07-11",
                  "note": "Payroll garnishment"
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
        "documentsReady": 3,
        "documentsRequired": 6,
        "fieldsFilled": 26,
        "fieldsRequired": 28,
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
      "schemaVersion": 2,
      "source": {
        "branch": "Jimmy",
        "scenarioId": "maya-patel-ch7-parent",
        "scenarioTitle": "Married Chapter 7 filer with a nonfiling spouse and dependents",
        "system": "BK FastLane Intake",
        "traits": [
          "chapter_7",
          "nonfiling_spouse",
          "dependents",
          "renter"
        ]
      },
      "submittedAt": "2026-07-13T19:54:04.109Z"
    },
    {
      "completion": {
        "bundle": {
          "bundleVersion": 2,
          "generatedAt": "2026-07-13T19:54:04.109Z",
          "items": [
            {
              "applicability": "essential_now",
              "applicabilityReason": "The canonical Intake schema marks this Personal Info answer as required for the current client step.",
              "canonicalPath": "matter.debtors[0].county",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Return to Personal Info and answer: County.",
              "id": "schema-start.debtor.county",
              "kind": "field",
              "label": "County",
              "priority": "high",
              "resolutionStatus": "open",
              "sectionId": "start",
              "whyNeeded": "The firm needs this answer in canonical Matter data before administrative Intake collection is complete."
            },
            {
              "applicability": "essential_now",
              "applicabilityReason": "Zoe reported a financed vehicle, surrender intent, and a repossession threat.",
              "canonicalPath": "matter.documents[name='Vehicle loan or title statement']",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Upload Vehicle loan or title statement, replace it if unreadable, or tell the firm why it is unavailable.",
              "id": "document-fake-document-zoe-kim-ch7-wage-earner-vehicle-loan-or-title-statement-5",
              "kind": "document",
              "label": "Vehicle loan or title statement",
              "priority": "high",
              "resolutionStatus": "open",
              "sectionId": "documents",
              "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
            },
            {
              "applicability": "essential_now",
              "applicabilityReason": "Means-test six-month total was not entered.",
              "canonicalPath": "matter.income[1].sixMonthTotal",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Complete: Weekend delivery apps six-month income total.",
              "id": "missing-log-income.rows.1.sixMonthTotal",
              "kind": "field",
              "label": "Weekend delivery apps six-month income total",
              "priority": "high",
              "resolutionStatus": "open",
              "sectionId": "income",
              "whyNeeded": "The answer is absent from canonical Matter data and cannot be inferred by the firm."
            },
            {
              "applicability": "essential_now",
              "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
              "canonicalPath": "matter.documents[name='Pay stubs - last 6 months']",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Upload Pay stubs - last 6 months, replace it if unreadable, or tell the firm why it is unavailable.",
              "id": "document-fake-document-zoe-kim-ch7-wage-earner-pay-stubs-last-6-months-3",
              "kind": "document",
              "label": "Pay stubs - last 6 months",
              "priority": "medium",
              "resolutionStatus": "open",
              "sectionId": "documents",
              "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
            },
            {
              "applicability": "attorney_only",
              "applicabilityReason": "Canonical review logic identified a fact for firm judgment, not a debtor collection request.",
              "canonicalPath": "reviewFlags.income",
              "caseStageDeadline": "During attorney review",
              "clientActionable": false,
              "clientInstruction": "No debtor action is requested from this flag.",
              "id": "flag-income-Six-month income is missing",
              "kind": "review",
              "label": "Six-month income is missing",
              "priority": "medium",
              "resolutionStatus": "open",
              "sectionId": "income",
              "whyNeeded": "Means-test intake needs six-month totals before attorney review."
            },
            {
              "applicability": "essential_now",
              "applicabilityReason": "Zoe uploaded a tax return image, but the seeded copy is illegible and must enter Document Review.",
              "canonicalPath": "matter.documents[name='Tax return - last year']",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Upload Tax return - last year, replace it if unreadable, or tell the firm why it is unavailable.",
              "id": "document-fake-document-zoe-kim-ch7-wage-earner-tax-return-last-year-2",
              "kind": "document",
              "label": "Tax return - last year",
              "priority": "medium",
              "resolutionStatus": "open",
              "sectionId": "documents",
              "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
            }
          ],
          "matterId": "fake-matter-zoe-kim-ch7-wage-earner",
          "matterRevision": 1,
          "metrics": {
            "blockingReadiness": {
              "complete": 28,
              "percent": 85,
              "required": 33
            },
            "documentCollection": {
              "applicable": 5,
              "collected": 2,
              "percent": 40
            },
            "fieldCompletion": {
              "applicable": 28,
              "entered": 26,
              "percent": 93
            },
            "intakeChecklistCompletion": 85
          },
          "reminderItems": [
            {
              "applicability": "essential_now",
              "applicabilityReason": "The canonical Intake schema marks this Personal Info answer as required for the current client step.",
              "canonicalPath": "matter.debtors[0].county",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Return to Personal Info and answer: County.",
              "id": "schema-start.debtor.county",
              "kind": "field",
              "label": "County",
              "priority": "high",
              "resolutionStatus": "open",
              "sectionId": "start",
              "whyNeeded": "The firm needs this answer in canonical Matter data before administrative Intake collection is complete."
            },
            {
              "applicability": "essential_now",
              "applicabilityReason": "Zoe reported a financed vehicle, surrender intent, and a repossession threat.",
              "canonicalPath": "matter.documents[name='Vehicle loan or title statement']",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Upload Vehicle loan or title statement, replace it if unreadable, or tell the firm why it is unavailable.",
              "id": "document-fake-document-zoe-kim-ch7-wage-earner-vehicle-loan-or-title-statement-5",
              "kind": "document",
              "label": "Vehicle loan or title statement",
              "priority": "high",
              "resolutionStatus": "open",
              "sectionId": "documents",
              "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
            },
            {
              "applicability": "essential_now",
              "applicabilityReason": "Means-test six-month total was not entered.",
              "canonicalPath": "matter.income[1].sixMonthTotal",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Complete: Weekend delivery apps six-month income total.",
              "id": "missing-log-income.rows.1.sixMonthTotal",
              "kind": "field",
              "label": "Weekend delivery apps six-month income total",
              "priority": "high",
              "resolutionStatus": "open",
              "sectionId": "income",
              "whyNeeded": "The answer is absent from canonical Matter data and cannot be inferred by the firm."
            },
            {
              "applicability": "essential_now",
              "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
              "canonicalPath": "matter.documents[name='Pay stubs - last 6 months']",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Upload Pay stubs - last 6 months, replace it if unreadable, or tell the firm why it is unavailable.",
              "id": "document-fake-document-zoe-kim-ch7-wage-earner-pay-stubs-last-6-months-3",
              "kind": "document",
              "label": "Pay stubs - last 6 months",
              "priority": "medium",
              "resolutionStatus": "open",
              "sectionId": "documents",
              "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
            },
            {
              "applicability": "essential_now",
              "applicabilityReason": "Zoe uploaded a tax return image, but the seeded copy is illegible and must enter Document Review.",
              "canonicalPath": "matter.documents[name='Tax return - last year']",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Upload Tax return - last year, replace it if unreadable, or tell the firm why it is unavailable.",
              "id": "document-fake-document-zoe-kim-ch7-wage-earner-tax-return-last-year-2",
              "kind": "document",
              "label": "Tax return - last year",
              "priority": "medium",
              "resolutionStatus": "open",
              "sectionId": "documents",
              "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
            }
          ],
          "ruleSetVersion": "2026-07-13.pilot-v1",
          "states": {
            "attorneyReview": "not_started",
            "documentReview": "replacement_requested",
            "intakeCompletion": "needs_client_action",
            "submission": "submitted"
          },
          "urgentAttorneyTask": {
            "due": "same_day",
            "reason": "Lender left a notice that repossession may occur this week.",
            "title": "Same-day attorney review of urgent collection or legal deadline"
          }
        },
        "blockingReadiness": {
          "complete": 28,
          "percent": 85,
          "required": 33
        },
        "documentCompletion": {
          "applicableRequired": 5,
          "receivedRequired": 2
        },
        "emailDraft": {
          "bodySnapshot": "Hi Zoe,\n\nWe reviewed your BK FastLane intake entry and found a few items that still need your attention before the attorney can use the file efficiently.\n\n1. Return to Personal Info and answer: County.\n2. Upload Vehicle loan or title statement, replace it if unreadable, or tell the firm why it is unavailable.\n3. Complete: Weekend delivery apps six-month income total.\n4. Upload Pay stubs - last 6 months, replace it if unreadable, or tell the firm why it is unavailable.\n5. Upload Tax return - last year, replace it if unreadable, or tell the firm why it is unavailable.\n\nYou do not need to calculate legal conclusions. Just enter your best information and upload the requested documents when available.\n\nReturn to your intake: https://jimmydanol.github.io/bkfl-crm-lite/intake-demo.html?packageId=bkfl-demo-zoe-kim-ch7-wage-earner&itemId=schema-start.debtor.county\n\nThank you,\nBK FastLane intake team",
          "deliveryMode": "simulation",
          "intakeResumeUrl": "https://jimmydanol.github.io/bkfl-crm-lite/intake-demo.html?packageId=bkfl-demo-zoe-kim-ch7-wage-earner&itemId=schema-start.debtor.county",
          "recipient": "zoe.kim.fake@example.test",
          "status": "pending_approval",
          "subject": "Information needed to finish your Intake"
        },
        "events": [],
        "fieldCompletion": {
          "applicableRequired": 28,
          "enteredRequired": 26,
          "percent": 93
        },
        "intakeChecklistCompletion": 85,
        "intakeResumeUrl": "https://jimmydanol.github.io/bkfl-crm-lite/intake-demo.html?packageId=bkfl-demo-zoe-kim-ch7-wage-earner&itemId=schema-start.debtor.county",
        "items": [
          {
            "applicability": "essential_now",
            "applicabilityReason": "The canonical Intake schema marks this Personal Info answer as required for the current client step.",
            "canonicalPath": "matter.debtors[0].county",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Return to Personal Info and answer: County.",
            "id": "schema-start.debtor.county",
            "kind": "field",
            "label": "County",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "start",
            "whyNeeded": "The firm needs this answer in canonical Matter data before administrative Intake collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "Zoe reported a financed vehicle, surrender intent, and a repossession threat.",
            "canonicalPath": "matter.documents[name='Vehicle loan or title statement']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Vehicle loan or title statement, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-zoe-kim-ch7-wage-earner-vehicle-loan-or-title-statement-5",
            "kind": "document",
            "label": "Vehicle loan or title statement",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "Means-test six-month total was not entered.",
            "canonicalPath": "matter.income[1].sixMonthTotal",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Complete: Weekend delivery apps six-month income total.",
            "id": "missing-log-income.rows.1.sixMonthTotal",
            "kind": "field",
            "label": "Weekend delivery apps six-month income total",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "income",
            "whyNeeded": "The answer is absent from canonical Matter data and cannot be inferred by the firm."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Pay stubs - last 6 months']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Pay stubs - last 6 months, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-zoe-kim-ch7-wage-earner-pay-stubs-last-6-months-3",
            "kind": "document",
            "label": "Pay stubs - last 6 months",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "attorney_only",
            "applicabilityReason": "Canonical review logic identified a fact for firm judgment, not a debtor collection request.",
            "canonicalPath": "reviewFlags.income",
            "caseStageDeadline": "During attorney review",
            "clientActionable": false,
            "clientInstruction": "No debtor action is requested from this flag.",
            "id": "flag-income-Six-month income is missing",
            "kind": "review",
            "label": "Six-month income is missing",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "income",
            "whyNeeded": "Means-test intake needs six-month totals before attorney review."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "Zoe uploaded a tax return image, but the seeded copy is illegible and must enter Document Review.",
            "canonicalPath": "matter.documents[name='Tax return - last year']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Tax return - last year, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-zoe-kim-ch7-wage-earner-tax-return-last-year-2",
            "kind": "document",
            "label": "Tax return - last year",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          }
        ],
        "missingItems": [
          {
            "applicability": "essential_now",
            "applicabilityReason": "The canonical Intake schema marks this Personal Info answer as required for the current client step.",
            "canonicalPath": "matter.debtors[0].county",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Return to Personal Info and answer: County.",
            "id": "schema-start.debtor.county",
            "kind": "field",
            "label": "County",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "start",
            "whyNeeded": "The firm needs this answer in canonical Matter data before administrative Intake collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "Zoe reported a financed vehicle, surrender intent, and a repossession threat.",
            "canonicalPath": "matter.documents[name='Vehicle loan or title statement']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Vehicle loan or title statement, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-zoe-kim-ch7-wage-earner-vehicle-loan-or-title-statement-5",
            "kind": "document",
            "label": "Vehicle loan or title statement",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "Means-test six-month total was not entered.",
            "canonicalPath": "matter.income[1].sixMonthTotal",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Complete: Weekend delivery apps six-month income total.",
            "id": "missing-log-income.rows.1.sixMonthTotal",
            "kind": "field",
            "label": "Weekend delivery apps six-month income total",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "income",
            "whyNeeded": "The answer is absent from canonical Matter data and cannot be inferred by the firm."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Pay stubs - last 6 months']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Pay stubs - last 6 months, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-zoe-kim-ch7-wage-earner-pay-stubs-last-6-months-3",
            "kind": "document",
            "label": "Pay stubs - last 6 months",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "Zoe uploaded a tax return image, but the seeded copy is illegible and must enter Document Review.",
            "canonicalPath": "matter.documents[name='Tax return - last year']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Tax return - last year, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-zoe-kim-ch7-wage-earner-tax-return-last-year-2",
            "kind": "document",
            "label": "Tax return - last year",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          }
        ],
        "percent": 85,
        "revision": 1,
        "states": {
          "attorneyReview": "not_started",
          "documentReview": "replacement_requested",
          "intakeCompletion": "needs_client_action",
          "submission": "submitted"
        },
        "status": "needs_client_action",
        "urgentAttorneyTask": {
          "due": "same_day",
          "reason": "Lender left a notice that repossession may occur this week.",
          "title": "Same-day attorney review of urgent collection or legal deadline"
        }
      },
      "demo": true,
      "generatedAt": "2026-07-13T19:54:04.109Z",
      "matter": {
        "id": "fake-matter-zoe-kim-ch7-wage-earner",
        "title": "Zoe Kim fake client-entered Chapter 7 intake",
        "chapter": "7",
        "status": "review",
        "filingState": "CO",
        "district": "District of Colorado",
        "clientGoals": "Surrender the unaffordable vehicle and discharge unsecured debt.",
        "urgentConcerns": "Lender left a notice that repossession may occur this week.",
        "priorBankruptcyFiled": "No",
        "priorBankruptcyDetails": "",
        "hasDependents": "No",
        "spouseFilingJointly": "No",
        "isEmployed": "Yes",
        "hasOtherHouseholdIncome": "Yes",
        "personalInfoSubmittedAt": "2026-07-13T19:54:04.109Z",
        "createdAt": "2026-07-13T19:54:05.248Z",
        "updatedAt": "2026-07-13T19:54:04.109Z",
        "debtors": [
          {
            "id": "debtor-b991ced0-c4af-4016-86ab-e05f6123f14a",
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
            "id": "asset-84e99a56-feb2-4148-9319-ffc64741bbf1",
            "category": "Bank or financial account",
            "description": "Canvas Credit Union checking",
            "estimatedValue": 420,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "Checking"
          },
          {
            "id": "asset-7ede0b68-4523-4eef-a3d7-86f0a425239d",
            "category": "Vehicle",
            "description": "2014 Kia Soul",
            "estimatedValue": 5100,
            "lienAmount": 12400,
            "exemptionNote": "",
            "financingStatus": "Financed",
            "keepIntent": "Surrender",
            "make": "Kia",
            "mileage": "136000",
            "model": "Soul",
            "year": "2014"
          },
          {
            "id": "asset-b5efeb23-4dca-4954-b8f1-5701f847cbfd",
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
            "type": "secured",
            "creditor": "Fake Auto Finance",
            "amount": 12400,
            "collateral": "2014 Kia Soul",
            "arrears": 980,
            "notes": "Repossession warning received; debtor intends to surrender."
          },
          {
            "id": "fake-debt-zoe-kim-ch7-wage-earner-2",
            "type": "unsecured",
            "creditor": "Synchrony Bank",
            "amount": 14100,
            "collateral": "",
            "arrears": 0,
            "notes": "Credit card in collections."
          },
          {
            "id": "fake-debt-zoe-kim-ch7-wage-earner-3",
            "type": "unsecured",
            "creditor": "Rose Medical Center",
            "amount": 9700,
            "collateral": "",
            "arrears": 0,
            "notes": "Medical bill sent to collector."
          },
          {
            "id": "fake-debt-zoe-kim-ch7-wage-earner-4",
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
            "id": "income-28734a49-6b02-4eba-a6a3-fcfdaf03b5c9",
            "source": "Employment",
            "employer": "Denver Dental Supply",
            "amount": 2900,
            "frequency": "Biweekly",
            "sixMonthTotal": 17400
          },
          {
            "id": "income-7968a3e8-2faf-415c-9bfb-9535109ec588",
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
            "id": "expense-81c620d1-c14e-4f83-ac26-f3efcc9b0846",
            "category": "Rent or home/mortgage payment",
            "monthlyAmount": 1390,
            "notes": ""
          },
          {
            "id": "expense-105e7d47-9be6-4bc6-b52d-b43274fd0dad",
            "category": "Electricity, heat, natural gas",
            "monthlyAmount": 165,
            "notes": ""
          },
          {
            "id": "expense-2da3db6a-969e-4d10-a577-104d19ef194f",
            "category": "Phone, cell, internet, satellite & cable",
            "monthlyAmount": 155,
            "notes": ""
          },
          {
            "id": "expense-15916ced-f313-4680-b358-25ec181efa2d",
            "category": "Food & housekeeping supplies",
            "monthlyAmount": 540,
            "notes": ""
          },
          {
            "id": "expense-c856e462-9bb9-41ff-b85f-ae212f00b2a3",
            "category": "Medical & dental expenses",
            "monthlyAmount": 95,
            "notes": ""
          },
          {
            "id": "expense-3df7516f-a8fa-4a8d-b7c6-8c6234bce2e8",
            "category": "Transportation",
            "monthlyAmount": 385,
            "notes": ""
          },
          {
            "id": "expense-35bf35e3-7a40-456e-bf68-f90d962681a6",
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
          "securedPropertyIntent": "Surrender financed vehicle.",
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
            "id": "fake-document-zoe-kim-ch7-wage-earner-driver-s-license-1",
            "name": "Driver's license",
            "category": "Identity",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "fake-document-zoe-kim-ch7-wage-earner-tax-return-last-year-2",
            "name": "Tax return - last year",
            "category": "Taxes",
            "status": "needed",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": [],
            "qualityIssue": "illegible",
            "applicabilityReason": "Zoe uploaded a tax return image, but the seeded copy is illegible and must enter Document Review."
          },
          {
            "id": "fake-document-zoe-kim-ch7-wage-earner-pay-stubs-last-6-months-3",
            "name": "Pay stubs - last 6 months",
            "category": "Income",
            "status": "needed",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": []
          },
          {
            "id": "fake-document-zoe-kim-ch7-wage-earner-bank-statements-last-6-months-4",
            "name": "Bank statements - last 6 months",
            "category": "Banking",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "fake-document-zoe-kim-ch7-wage-earner-vehicle-loan-or-title-statement-5",
            "name": "Vehicle loan or title statement",
            "category": "Property",
            "status": "needed",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": [],
            "applicabilityReason": "Zoe reported a financed vehicle, surrender intent, and a repossession threat.",
            "priority": "high"
          }
        ],
        "financialAffairs": {
          "prior-addresses": {
            "answer": "Yes",
            "entries": [
              {
                "id": "fa-entry-9461b215-941f-485d-8c16-de8036ea794e",
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
        "documentsReady": 2,
        "documentsRequired": 5,
        "fieldsFilled": 26,
        "fieldsRequired": 28,
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
      "schemaVersion": 2,
      "source": {
        "branch": "Jimmy",
        "scenarioId": "zoe-kim-ch7-wage-earner",
        "scenarioTitle": "Wage earner surrendering a vehicle after repossession threats",
        "system": "BK FastLane Intake",
        "traits": [
          "chapter_7",
          "wage_earner",
          "vehicle_surrender",
          "repossession",
          "illegible_document"
        ]
      },
      "submittedAt": "2026-07-13T19:54:04.109Z"
    },
    {
      "completion": {
        "bundle": {
          "bundleVersion": 2,
          "generatedAt": "2026-07-13T19:54:04.109Z",
          "items": [
            {
              "applicability": "attorney_only",
              "applicabilityReason": "Canonical review logic identified a fact for firm judgment, not a debtor collection request.",
              "canonicalPath": "reviewFlags.basics",
              "caseStageDeadline": "Same-day attorney review",
              "clientActionable": false,
              "clientInstruction": "No debtor action is requested from this flag.",
              "id": "flag-basics-Debtor identity is incomplete",
              "kind": "review",
              "label": "Debtor identity is incomplete",
              "priority": "high",
              "resolutionStatus": "open",
              "sectionId": "basics",
              "whyNeeded": "At least one debtor is missing name or SSN last-four intake data."
            },
            {
              "applicability": "essential_now",
              "applicabilityReason": "Joint case has spouse identity but no spouse SSN.",
              "canonicalPath": "matter.debtors[1].socialSecurityNumber",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Complete: Spouse Social Security number.",
              "id": "missing-log-start.debtor2.socialSecurityNumber",
              "kind": "field",
              "label": "Spouse Social Security number",
              "priority": "high",
              "resolutionStatus": "open",
              "sectionId": "start",
              "whyNeeded": "The answer is absent from canonical Matter data and cannot be inferred by the firm."
            },
            {
              "applicability": "essential_now",
              "applicabilityReason": "Daniel and Sofia reported a financed vehicle, arrears, retention intent, and imminent repossession.",
              "canonicalPath": "matter.documents[name='Vehicle loan or title statement']",
              "caseStageDeadline": "Same day",
              "clientActionable": true,
              "clientInstruction": "Upload Vehicle loan or title statement, replace it if unreadable, or tell the firm why it is unavailable.",
              "id": "document-fake-document-daniel-sofia-reyes-ch13-vehicle-loan-or-title-statement-6",
              "kind": "document",
              "label": "Vehicle loan or title statement",
              "priority": "high",
              "resolutionStatus": "open",
              "sectionId": "documents",
              "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
            },
            {
              "applicability": "essential_now",
              "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
              "canonicalPath": "matter.documents[name='Bank statements - last 6 months']",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Upload Bank statements - last 6 months, replace it if unreadable, or tell the firm why it is unavailable.",
              "id": "document-fake-document-daniel-sofia-reyes-ch13-bank-statements-last-6-months-4",
              "kind": "document",
              "label": "Bank statements - last 6 months",
              "priority": "medium",
              "resolutionStatus": "open",
              "sectionId": "documents",
              "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
            },
            {
              "applicability": "essential_now",
              "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
              "canonicalPath": "matter.documents[name='Pay stubs - last 6 months']",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Upload Pay stubs - last 6 months, replace it if unreadable, or tell the firm why it is unavailable.",
              "id": "document-fake-document-daniel-sofia-reyes-ch13-pay-stubs-last-6-months-3",
              "kind": "document",
              "label": "Pay stubs - last 6 months",
              "priority": "medium",
              "resolutionStatus": "open",
              "sectionId": "documents",
              "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
            }
          ],
          "matterId": "fake-matter-daniel-sofia-reyes-ch13",
          "matterRevision": 1,
          "metrics": {
            "blockingReadiness": {
              "complete": 30,
              "percent": 88,
              "required": 34
            },
            "documentCollection": {
              "applicable": 6,
              "collected": 3,
              "percent": 50
            },
            "fieldCompletion": {
              "applicable": 28,
              "entered": 27,
              "percent": 96
            },
            "intakeChecklistCompletion": 88
          },
          "reminderItems": [
            {
              "applicability": "essential_now",
              "applicabilityReason": "Joint case has spouse identity but no spouse SSN.",
              "canonicalPath": "matter.debtors[1].socialSecurityNumber",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Complete: Spouse Social Security number.",
              "id": "missing-log-start.debtor2.socialSecurityNumber",
              "kind": "field",
              "label": "Spouse Social Security number",
              "priority": "high",
              "resolutionStatus": "open",
              "sectionId": "start",
              "whyNeeded": "The answer is absent from canonical Matter data and cannot be inferred by the firm."
            },
            {
              "applicability": "essential_now",
              "applicabilityReason": "Daniel and Sofia reported a financed vehicle, arrears, retention intent, and imminent repossession.",
              "canonicalPath": "matter.documents[name='Vehicle loan or title statement']",
              "caseStageDeadline": "Same day",
              "clientActionable": true,
              "clientInstruction": "Upload Vehicle loan or title statement, replace it if unreadable, or tell the firm why it is unavailable.",
              "id": "document-fake-document-daniel-sofia-reyes-ch13-vehicle-loan-or-title-statement-6",
              "kind": "document",
              "label": "Vehicle loan or title statement",
              "priority": "high",
              "resolutionStatus": "open",
              "sectionId": "documents",
              "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
            },
            {
              "applicability": "essential_now",
              "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
              "canonicalPath": "matter.documents[name='Bank statements - last 6 months']",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Upload Bank statements - last 6 months, replace it if unreadable, or tell the firm why it is unavailable.",
              "id": "document-fake-document-daniel-sofia-reyes-ch13-bank-statements-last-6-months-4",
              "kind": "document",
              "label": "Bank statements - last 6 months",
              "priority": "medium",
              "resolutionStatus": "open",
              "sectionId": "documents",
              "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
            },
            {
              "applicability": "essential_now",
              "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
              "canonicalPath": "matter.documents[name='Pay stubs - last 6 months']",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Upload Pay stubs - last 6 months, replace it if unreadable, or tell the firm why it is unavailable.",
              "id": "document-fake-document-daniel-sofia-reyes-ch13-pay-stubs-last-6-months-3",
              "kind": "document",
              "label": "Pay stubs - last 6 months",
              "priority": "medium",
              "resolutionStatus": "open",
              "sectionId": "documents",
              "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
            }
          ],
          "ruleSetVersion": "2026-07-13.pilot-v1",
          "states": {
            "attorneyReview": "not_started",
            "documentReview": "pending",
            "intakeCompletion": "needs_client_action",
            "submission": "submitted"
          },
          "urgentAttorneyTask": {
            "due": "same_day",
            "reason": "Vehicle repossession is scheduled for tomorrow morning according to a lender notice.",
            "title": "Same-day attorney review of urgent collection or legal deadline"
          }
        },
        "blockingReadiness": {
          "complete": 30,
          "percent": 88,
          "required": 34
        },
        "documentCompletion": {
          "applicableRequired": 6,
          "receivedRequired": 3
        },
        "emailDraft": {
          "bodySnapshot": "Hi Daniel,\n\nWe reviewed your BK FastLane intake entry and found a few items that still need your attention before the attorney can use the file efficiently.\n\n1. Complete: Spouse Social Security number.\n2. Upload Vehicle loan or title statement, replace it if unreadable, or tell the firm why it is unavailable.\n3. Upload Bank statements - last 6 months, replace it if unreadable, or tell the firm why it is unavailable.\n4. Upload Pay stubs - last 6 months, replace it if unreadable, or tell the firm why it is unavailable.\n\nYou do not need to calculate legal conclusions. Just enter your best information and upload the requested documents when available.\n\nReturn to your intake: https://jimmydanol.github.io/bkfl-crm-lite/intake-demo.html?packageId=bkfl-demo-daniel-sofia-reyes-ch13&itemId=missing-log-start.debtor2.socialSecurityNumber\n\nThank you,\nBK FastLane intake team",
          "deliveryMode": "simulation",
          "intakeResumeUrl": "https://jimmydanol.github.io/bkfl-crm-lite/intake-demo.html?packageId=bkfl-demo-daniel-sofia-reyes-ch13&itemId=missing-log-start.debtor2.socialSecurityNumber",
          "recipient": "daniel.reyes.fake@example.test",
          "status": "pending_approval",
          "subject": "Information needed to finish your Intake"
        },
        "events": [],
        "fieldCompletion": {
          "applicableRequired": 28,
          "enteredRequired": 27,
          "percent": 96
        },
        "intakeChecklistCompletion": 88,
        "intakeResumeUrl": "https://jimmydanol.github.io/bkfl-crm-lite/intake-demo.html?packageId=bkfl-demo-daniel-sofia-reyes-ch13&itemId=missing-log-start.debtor2.socialSecurityNumber",
        "items": [
          {
            "applicability": "attorney_only",
            "applicabilityReason": "Canonical review logic identified a fact for firm judgment, not a debtor collection request.",
            "canonicalPath": "reviewFlags.basics",
            "caseStageDeadline": "Same-day attorney review",
            "clientActionable": false,
            "clientInstruction": "No debtor action is requested from this flag.",
            "id": "flag-basics-Debtor identity is incomplete",
            "kind": "review",
            "label": "Debtor identity is incomplete",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "basics",
            "whyNeeded": "At least one debtor is missing name or SSN last-four intake data."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "Joint case has spouse identity but no spouse SSN.",
            "canonicalPath": "matter.debtors[1].socialSecurityNumber",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Complete: Spouse Social Security number.",
            "id": "missing-log-start.debtor2.socialSecurityNumber",
            "kind": "field",
            "label": "Spouse Social Security number",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "start",
            "whyNeeded": "The answer is absent from canonical Matter data and cannot be inferred by the firm."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "Daniel and Sofia reported a financed vehicle, arrears, retention intent, and imminent repossession.",
            "canonicalPath": "matter.documents[name='Vehicle loan or title statement']",
            "caseStageDeadline": "Same day",
            "clientActionable": true,
            "clientInstruction": "Upload Vehicle loan or title statement, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-daniel-sofia-reyes-ch13-vehicle-loan-or-title-statement-6",
            "kind": "document",
            "label": "Vehicle loan or title statement",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Bank statements - last 6 months']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Bank statements - last 6 months, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-daniel-sofia-reyes-ch13-bank-statements-last-6-months-4",
            "kind": "document",
            "label": "Bank statements - last 6 months",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Pay stubs - last 6 months']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Pay stubs - last 6 months, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-daniel-sofia-reyes-ch13-pay-stubs-last-6-months-3",
            "kind": "document",
            "label": "Pay stubs - last 6 months",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          }
        ],
        "missingItems": [
          {
            "applicability": "essential_now",
            "applicabilityReason": "Joint case has spouse identity but no spouse SSN.",
            "canonicalPath": "matter.debtors[1].socialSecurityNumber",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Complete: Spouse Social Security number.",
            "id": "missing-log-start.debtor2.socialSecurityNumber",
            "kind": "field",
            "label": "Spouse Social Security number",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "start",
            "whyNeeded": "The answer is absent from canonical Matter data and cannot be inferred by the firm."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "Daniel and Sofia reported a financed vehicle, arrears, retention intent, and imminent repossession.",
            "canonicalPath": "matter.documents[name='Vehicle loan or title statement']",
            "caseStageDeadline": "Same day",
            "clientActionable": true,
            "clientInstruction": "Upload Vehicle loan or title statement, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-daniel-sofia-reyes-ch13-vehicle-loan-or-title-statement-6",
            "kind": "document",
            "label": "Vehicle loan or title statement",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Bank statements - last 6 months']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Bank statements - last 6 months, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-daniel-sofia-reyes-ch13-bank-statements-last-6-months-4",
            "kind": "document",
            "label": "Bank statements - last 6 months",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Pay stubs - last 6 months']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Pay stubs - last 6 months, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-daniel-sofia-reyes-ch13-pay-stubs-last-6-months-3",
            "kind": "document",
            "label": "Pay stubs - last 6 months",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          }
        ],
        "percent": 88,
        "revision": 1,
        "states": {
          "attorneyReview": "not_started",
          "documentReview": "pending",
          "intakeCompletion": "needs_client_action",
          "submission": "submitted"
        },
        "status": "needs_client_action",
        "urgentAttorneyTask": {
          "due": "same_day",
          "reason": "Vehicle repossession is scheduled for tomorrow morning according to a lender notice.",
          "title": "Same-day attorney review of urgent collection or legal deadline"
        }
      },
      "demo": true,
      "generatedAt": "2026-07-13T19:54:04.109Z",
      "matter": {
        "id": "fake-matter-daniel-sofia-reyes-ch13",
        "title": "Daniel Reyes fake client-entered Chapter 13 intake",
        "chapter": "13",
        "status": "review",
        "filingState": "CO",
        "district": "District of Colorado",
        "clientGoals": "Retain the family vehicle and cure arrears through a possible Chapter 13 plan.",
        "urgentConcerns": "Vehicle repossession is scheduled for tomorrow morning according to a lender notice.",
        "priorBankruptcyFiled": "Yes",
        "priorBankruptcyDetails": "Daniel filed Chapter 7 in 2015 in Colorado; case number not entered.",
        "hasDependents": "Yes",
        "spouseFilingJointly": "Yes",
        "isEmployed": "Yes",
        "hasOtherHouseholdIncome": "Yes",
        "personalInfoSubmittedAt": "2026-07-13T19:54:04.109Z",
        "createdAt": "2026-07-13T19:54:05.261Z",
        "updatedAt": "2026-07-13T19:54:04.109Z",
        "debtors": [
          {
            "id": "debtor-ccfaf7e8-e813-4b1f-b769-ffadf3fd9ea0",
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
            "id": "debtor-2661f776-9ae2-47ad-84e9-6f67c7e6f040",
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
              "id": "dependent-2a8139ff-bfe0-4fab-93a5-1178ad3a1b49",
              "name": "Fake minor child A",
              "age": "12",
              "relationship": "Child",
              "livesWithDebtor": "Yes"
            },
            {
              "id": "dependent-4b1ac04e-756c-43ad-8bb2-e096cc3c3376",
              "name": "Fake minor child B",
              "age": "8",
              "relationship": "Child",
              "livesWithDebtor": "Yes"
            }
          ]
        },
        "assets": [
          {
            "id": "asset-bb611c68-b0e2-4571-9089-c996b7241dd4",
            "category": "Bank or financial account",
            "description": "Chase joint checking",
            "estimatedValue": 2150,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "Checking"
          },
          {
            "id": "asset-4ccea618-dae4-424d-b400-138605d41cf4",
            "category": "Retirement or pension account",
            "description": "Daniel 401(k)",
            "estimatedValue": 69000,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "401(k)"
          },
          {
            "id": "asset-e9b32185-f36f-4833-b525-6b38956d2122",
            "category": "Vehicle",
            "description": "2021 Honda Odyssey",
            "estimatedValue": 23800,
            "lienAmount": 27100,
            "exemptionNote": "",
            "keepIntent": "Retain"
          }
        ],
        "debts": [
          {
            "id": "fake-debt-daniel-sofia-reyes-ch13-1",
            "type": "secured",
            "creditor": "Honda Financial Services",
            "amount": 27100,
            "collateral": "2021 Honda Odyssey",
            "arrears": 2100,
            "notes": ""
          },
          {
            "id": "fake-debt-daniel-sofia-reyes-ch13-2",
            "type": "priority",
            "creditor": "IRS",
            "amount": 7400,
            "collateral": "",
            "arrears": 0,
            "notes": "Recent federal tax debt; verify transcript and priority amount."
          },
          {
            "id": "fake-debt-daniel-sofia-reyes-ch13-3",
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
            "id": "income-12db0ff9-05e4-4c2f-ab26-de9bf1d45a74",
            "source": "Employment",
            "employer": "Metro Facilities Group",
            "amount": 7100,
            "frequency": "Biweekly",
            "sixMonthTotal": 42600
          },
          {
            "id": "income-90dc13cc-80f8-4652-beea-91971aecff06",
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
            "id": "expense-c67a4e5f-62d5-486a-a179-5d10ebfb784a",
            "category": "Housing contribution",
            "monthlyAmount": 1450,
            "notes": "Household contribution; no real estate claimed."
          },
          {
            "id": "expense-0488b879-6d29-4177-b580-b5d234af2110",
            "category": "Electricity, heat, natural gas",
            "monthlyAmount": 310,
            "notes": ""
          },
          {
            "id": "expense-2875433e-a183-4945-b701-31e1b60ff32b",
            "category": "Water, sewer, garbage collection",
            "monthlyAmount": 115,
            "notes": ""
          },
          {
            "id": "expense-06df0d69-7a8e-4902-9ca7-e587a50dec37",
            "category": "Phone, cell, internet, satellite & cable",
            "monthlyAmount": 245,
            "notes": ""
          },
          {
            "id": "expense-f64fca85-d8f7-49aa-ac5a-b0c5b11b3f4d",
            "category": "Food & housekeeping supplies",
            "monthlyAmount": 925,
            "notes": ""
          },
          {
            "id": "expense-a099278a-2882-42f1-9851-5683f5c0a13b",
            "category": "Childcare & children education",
            "monthlyAmount": 640,
            "notes": ""
          },
          {
            "id": "expense-ab60f0a0-63ef-4812-a941-d880bb944715",
            "category": "Transportation",
            "monthlyAmount": 560,
            "notes": ""
          },
          {
            "id": "expense-ae320979-7ea1-4179-af3b-bb421400ea64",
            "category": "Vehicle payments",
            "monthlyAmount": 610,
            "notes": ""
          },
          {
            "id": "expense-e024d72b-9ebb-469b-b68c-93c3eade0b27",
            "category": "Vehicle insurance",
            "monthlyAmount": 220,
            "notes": ""
          },
          {
            "id": "expense-53eb2928-5ed7-4d36-a45e-6f2c6e841832",
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
          "proposedMonthlyPayment": 825,
          "priorityClaimsEstimate": 7400,
          "arrearsCureEstimate": 2100,
          "disposableIncomeNotes": "Entered budget must be reviewed against vehicle-retention feasibility."
        },
        "documents": [
          {
            "id": "fake-document-daniel-sofia-reyes-ch13-driver-s-license-1",
            "name": "Driver's license",
            "category": "Identity",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "fake-document-daniel-sofia-reyes-ch13-tax-return-last-year-2",
            "name": "Tax return - last year",
            "category": "Taxes",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "fake-document-daniel-sofia-reyes-ch13-pay-stubs-last-6-months-3",
            "name": "Pay stubs - last 6 months",
            "category": "Income",
            "status": "needed",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": []
          },
          {
            "id": "fake-document-daniel-sofia-reyes-ch13-bank-statements-last-6-months-4",
            "name": "Bank statements - last 6 months",
            "category": "Banking",
            "status": "needed",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": []
          },
          {
            "id": "fake-document-daniel-sofia-reyes-ch13-statements-for-all-debts-5",
            "name": "Statements for all debts",
            "category": "Debt",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "fake-document-daniel-sofia-reyes-ch13-vehicle-loan-or-title-statement-6",
            "name": "Vehicle loan or title statement",
            "category": "Property",
            "status": "needed",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": [],
            "applicabilityReason": "Daniel and Sofia reported a financed vehicle, arrears, retention intent, and imminent repossession.",
            "caseStageDeadline": "Same day",
            "priority": "high"
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
                "id": "fa-entry-867fc60e-6e58-44f3-a880-25a8cfcf3ef4",
                "fields": {
                  "creditor": "Honda Financial Services",
                  "paymentDates": "2026-05 and 2026-06",
                  "totalPaid": "960"
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
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "property-taken": {
            "answer": "Yes",
            "entries": [
              {
                "id": "fa-entry-761fa077-b37e-458a-9b64-1f0772f1e453",
                "fields": {
                  "creditor": "Honda Financial Services",
                  "date": "2026-07-14",
                  "property": "2021 Honda Odyssey repossession scheduled",
                  "value": "23800"
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
        "documentsReady": 3,
        "documentsRequired": 6,
        "fieldsFilled": 27,
        "fieldsRequired": 28,
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
          "detail": "$2,100 in recorded arrears should be reconciled with plan treatment."
        },
        {
          "id": "debts-Unsecured debt captured",
          "severity": "info",
          "sectionId": "debts",
          "title": "Unsecured debt captured",
          "detail": "$33,000 in unsecured claims is recorded for review."
        }
      ],
      "schemaVersion": 2,
      "source": {
        "branch": "Jimmy",
        "scenarioId": "daniel-sofia-reyes-ch13",
        "scenarioTitle": "Chapter 13 vehicle-retention case facing imminent repossession",
        "system": "BK FastLane Intake",
        "traits": [
          "chapter_13",
          "vehicle_retain",
          "repossession",
          "joint_case"
        ]
      },
      "submittedAt": "2026-07-13T19:54:04.109Z"
    },
    {
      "completion": {
        "bundle": {
          "bundleVersion": 2,
          "generatedAt": "2026-07-13T19:54:04.109Z",
          "items": [
            {
              "applicability": "essential_now",
              "applicabilityReason": "Erin and Cole reported an eviction judgment and a three-day lockout deadline.",
              "canonicalPath": "matter.documents[name='Court paperwork']",
              "caseStageDeadline": "Same day",
              "clientActionable": true,
              "clientInstruction": "Upload Court paperwork, replace it if unreadable, or tell the firm why it is unavailable.",
              "id": "document-fake-document-erin-cole-mitchell-ch13-court-paperwork-4",
              "kind": "document",
              "label": "Court paperwork",
              "priority": "high",
              "resolutionStatus": "open",
              "sectionId": "documents",
              "whyNeeded": "The filing date, case number, and deadline must be visible to the attorney promptly."
            },
            {
              "applicability": "attorney_only",
              "applicabilityReason": "Canonical review logic identified a fact for firm judgment, not a debtor collection request.",
              "canonicalPath": "reviewFlags.basics",
              "caseStageDeadline": "Same-day attorney review",
              "clientActionable": false,
              "clientInstruction": "No debtor action is requested from this flag.",
              "id": "flag-basics-Debtor identity is incomplete",
              "kind": "review",
              "label": "Debtor identity is incomplete",
              "priority": "high",
              "resolutionStatus": "open",
              "sectionId": "basics",
              "whyNeeded": "At least one debtor is missing name or SSN last-four intake data."
            },
            {
              "applicability": "essential_now",
              "applicabilityReason": "Joint case has spouse identity but no spouse SSN.",
              "canonicalPath": "matter.debtors[1].socialSecurityNumber",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Complete: Spouse Social Security number.",
              "id": "missing-log-start.debtor2.socialSecurityNumber",
              "kind": "field",
              "label": "Spouse Social Security number",
              "priority": "high",
              "resolutionStatus": "open",
              "sectionId": "start",
              "whyNeeded": "The answer is absent from canonical Matter data and cannot be inferred by the firm."
            }
          ],
          "matterId": "fake-matter-erin-cole-mitchell-ch13",
          "matterRevision": 1,
          "metrics": {
            "blockingReadiness": {
              "complete": 31,
              "percent": 94,
              "required": 33
            },
            "documentCollection": {
              "applicable": 5,
              "collected": 4,
              "percent": 80
            },
            "fieldCompletion": {
              "applicable": 28,
              "entered": 27,
              "percent": 96
            },
            "intakeChecklistCompletion": 94
          },
          "reminderItems": [
            {
              "applicability": "essential_now",
              "applicabilityReason": "Erin and Cole reported an eviction judgment and a three-day lockout deadline.",
              "canonicalPath": "matter.documents[name='Court paperwork']",
              "caseStageDeadline": "Same day",
              "clientActionable": true,
              "clientInstruction": "Upload Court paperwork, replace it if unreadable, or tell the firm why it is unavailable.",
              "id": "document-fake-document-erin-cole-mitchell-ch13-court-paperwork-4",
              "kind": "document",
              "label": "Court paperwork",
              "priority": "high",
              "resolutionStatus": "open",
              "sectionId": "documents",
              "whyNeeded": "The filing date, case number, and deadline must be visible to the attorney promptly."
            },
            {
              "applicability": "essential_now",
              "applicabilityReason": "Joint case has spouse identity but no spouse SSN.",
              "canonicalPath": "matter.debtors[1].socialSecurityNumber",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Complete: Spouse Social Security number.",
              "id": "missing-log-start.debtor2.socialSecurityNumber",
              "kind": "field",
              "label": "Spouse Social Security number",
              "priority": "high",
              "resolutionStatus": "open",
              "sectionId": "start",
              "whyNeeded": "The answer is absent from canonical Matter data and cannot be inferred by the firm."
            }
          ],
          "ruleSetVersion": "2026-07-13.pilot-v1",
          "states": {
            "attorneyReview": "not_started",
            "documentReview": "pending",
            "intakeCompletion": "needs_client_action",
            "submission": "submitted"
          },
          "urgentAttorneyTask": {
            "due": "same_day",
            "reason": "Eviction judgment entered; lockout date on court notice is three days away.",
            "title": "Same-day attorney review of urgent collection or legal deadline"
          }
        },
        "blockingReadiness": {
          "complete": 31,
          "percent": 94,
          "required": 33
        },
        "documentCompletion": {
          "applicableRequired": 5,
          "receivedRequired": 4
        },
        "emailDraft": {
          "bodySnapshot": "Hi Erin,\n\nWe reviewed your BK FastLane intake entry and found a few items that still need your attention before the attorney can use the file efficiently.\n\n1. Upload Court paperwork, replace it if unreadable, or tell the firm why it is unavailable.\n2. Complete: Spouse Social Security number.\n\nYou do not need to calculate legal conclusions. Just enter your best information and upload the requested documents when available.\n\nReturn to your intake: https://jimmydanol.github.io/bkfl-crm-lite/intake-demo.html?packageId=bkfl-demo-erin-cole-mitchell-ch13&itemId=document-fake-document-erin-cole-mitchell-ch13-court-paperwork-4\n\nThank you,\nBK FastLane intake team",
          "deliveryMode": "simulation",
          "intakeResumeUrl": "https://jimmydanol.github.io/bkfl-crm-lite/intake-demo.html?packageId=bkfl-demo-erin-cole-mitchell-ch13&itemId=document-fake-document-erin-cole-mitchell-ch13-court-paperwork-4",
          "recipient": "erin.mitchell.fake@example.test",
          "status": "pending_approval",
          "subject": "Information needed to finish your Intake"
        },
        "events": [],
        "fieldCompletion": {
          "applicableRequired": 28,
          "enteredRequired": 27,
          "percent": 96
        },
        "intakeChecklistCompletion": 94,
        "intakeResumeUrl": "https://jimmydanol.github.io/bkfl-crm-lite/intake-demo.html?packageId=bkfl-demo-erin-cole-mitchell-ch13&itemId=document-fake-document-erin-cole-mitchell-ch13-court-paperwork-4",
        "items": [
          {
            "applicability": "essential_now",
            "applicabilityReason": "Erin and Cole reported an eviction judgment and a three-day lockout deadline.",
            "canonicalPath": "matter.documents[name='Court paperwork']",
            "caseStageDeadline": "Same day",
            "clientActionable": true,
            "clientInstruction": "Upload Court paperwork, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-erin-cole-mitchell-ch13-court-paperwork-4",
            "kind": "document",
            "label": "Court paperwork",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The filing date, case number, and deadline must be visible to the attorney promptly."
          },
          {
            "applicability": "attorney_only",
            "applicabilityReason": "Canonical review logic identified a fact for firm judgment, not a debtor collection request.",
            "canonicalPath": "reviewFlags.basics",
            "caseStageDeadline": "Same-day attorney review",
            "clientActionable": false,
            "clientInstruction": "No debtor action is requested from this flag.",
            "id": "flag-basics-Debtor identity is incomplete",
            "kind": "review",
            "label": "Debtor identity is incomplete",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "basics",
            "whyNeeded": "At least one debtor is missing name or SSN last-four intake data."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "Joint case has spouse identity but no spouse SSN.",
            "canonicalPath": "matter.debtors[1].socialSecurityNumber",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Complete: Spouse Social Security number.",
            "id": "missing-log-start.debtor2.socialSecurityNumber",
            "kind": "field",
            "label": "Spouse Social Security number",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "start",
            "whyNeeded": "The answer is absent from canonical Matter data and cannot be inferred by the firm."
          }
        ],
        "missingItems": [
          {
            "applicability": "essential_now",
            "applicabilityReason": "Erin and Cole reported an eviction judgment and a three-day lockout deadline.",
            "canonicalPath": "matter.documents[name='Court paperwork']",
            "caseStageDeadline": "Same day",
            "clientActionable": true,
            "clientInstruction": "Upload Court paperwork, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-erin-cole-mitchell-ch13-court-paperwork-4",
            "kind": "document",
            "label": "Court paperwork",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The filing date, case number, and deadline must be visible to the attorney promptly."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "Joint case has spouse identity but no spouse SSN.",
            "canonicalPath": "matter.debtors[1].socialSecurityNumber",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Complete: Spouse Social Security number.",
            "id": "missing-log-start.debtor2.socialSecurityNumber",
            "kind": "field",
            "label": "Spouse Social Security number",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "start",
            "whyNeeded": "The answer is absent from canonical Matter data and cannot be inferred by the firm."
          }
        ],
        "percent": 94,
        "revision": 1,
        "states": {
          "attorneyReview": "not_started",
          "documentReview": "pending",
          "intakeCompletion": "needs_client_action",
          "submission": "submitted"
        },
        "status": "needs_client_action",
        "urgentAttorneyTask": {
          "due": "same_day",
          "reason": "Eviction judgment entered; lockout date on court notice is three days away.",
          "title": "Same-day attorney review of urgent collection or legal deadline"
        }
      },
      "demo": true,
      "generatedAt": "2026-07-13T19:54:04.109Z",
      "matter": {
        "id": "fake-matter-erin-cole-mitchell-ch13",
        "title": "Erin Mitchell fake client-entered Chapter 13 intake",
        "chapter": "13",
        "status": "review",
        "filingState": "UT",
        "district": "District of Utah",
        "clientGoals": "Address priority debt and evaluate whether Chapter 13 can help preserve the tenancy.",
        "urgentConcerns": "Eviction judgment entered; lockout date on court notice is three days away.",
        "priorBankruptcyFiled": "Yes",
        "priorBankruptcyDetails": "Erin filed Chapter 7 in 2015 in Colorado; case number not entered.",
        "hasDependents": "Yes",
        "spouseFilingJointly": "Yes",
        "isEmployed": "Yes",
        "hasOtherHouseholdIncome": "Yes",
        "personalInfoSubmittedAt": "2026-07-13T19:54:04.109Z",
        "createdAt": "2026-07-13T19:54:05.277Z",
        "updatedAt": "2026-07-13T19:54:04.109Z",
        "debtors": [
          {
            "id": "debtor-61afcff6-c3f2-4e62-b7f4-11d88b795e43",
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
            "id": "debtor-e5c015d9-0bc6-4559-b6d0-36d89e470b6e",
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
              "id": "dependent-078847aa-f8b2-45f2-82c2-67ded8f09379",
              "name": "Fake minor child A",
              "age": "12",
              "relationship": "Child",
              "livesWithDebtor": "Yes"
            },
            {
              "id": "dependent-506d7efc-96cc-42c6-8eee-51cfa45e1848",
              "name": "Fake minor child B",
              "age": "8",
              "relationship": "Child",
              "livesWithDebtor": "Yes"
            }
          ]
        },
        "assets": [
          {
            "id": "asset-bae2bea9-fac5-48f9-8cdb-79972c1aa0e4",
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
            "id": "asset-6ea2ed49-cd9d-4ed7-a253-f99c7a15e60f",
            "category": "Bank or financial account",
            "description": "Chase joint checking",
            "estimatedValue": 2150,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "Checking"
          },
          {
            "id": "asset-8ad2e073-7a64-4459-863a-df6c823f4ea6",
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
            "creditor": "Ford Credit",
            "amount": 25100,
            "collateral": "2019 Ford F-150",
            "arrears": 820,
            "notes": "One payment behind."
          },
          {
            "id": "fake-debt-erin-cole-mitchell-ch13-2",
            "type": "priority",
            "creditor": "IRS",
            "amount": 7400,
            "collateral": "",
            "arrears": 0,
            "notes": "Recent federal tax debt; verify transcript and priority amount."
          },
          {
            "id": "fake-debt-erin-cole-mitchell-ch13-3",
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
            "id": "income-2878e2e3-d148-4695-b357-62f17870d35c",
            "source": "Employment",
            "employer": "Metro Facilities Group",
            "amount": 7100,
            "frequency": "Biweekly",
            "sixMonthTotal": 42600
          },
          {
            "id": "income-fa236a1f-0bac-423e-b790-7e9914969be6",
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
            "id": "expense-6cdc9bae-24c9-470a-af69-619638eac755",
            "category": "Rent",
            "monthlyAmount": 2100,
            "notes": "Rental residence involved in eviction case."
          },
          {
            "id": "expense-37f0f7c1-f098-4d8c-8316-7f6e74c65787",
            "category": "Electricity, heat, natural gas",
            "monthlyAmount": 310,
            "notes": ""
          },
          {
            "id": "expense-c06e7dc6-0a66-43c2-9ea7-c2006db83266",
            "category": "Water, sewer, garbage collection",
            "monthlyAmount": 115,
            "notes": ""
          },
          {
            "id": "expense-1b51cd25-99c2-4138-8de5-b7c45d8bab2a",
            "category": "Phone, cell, internet, satellite & cable",
            "monthlyAmount": 245,
            "notes": ""
          },
          {
            "id": "expense-d716ea81-16dd-4b94-9960-625e3082846b",
            "category": "Food & housekeeping supplies",
            "monthlyAmount": 925,
            "notes": ""
          },
          {
            "id": "expense-6e1828de-7ec3-4aa1-aa58-929d160905bf",
            "category": "Childcare & children education",
            "monthlyAmount": 640,
            "notes": ""
          },
          {
            "id": "expense-d59d445a-d85d-4864-bdbd-99321fb37860",
            "category": "Transportation",
            "monthlyAmount": 560,
            "notes": ""
          },
          {
            "id": "expense-ce6d6229-cbf6-4bea-aa5b-e22eb874ec90",
            "category": "Vehicle payments",
            "monthlyAmount": 610,
            "notes": ""
          },
          {
            "id": "expense-4e701f0c-9203-4617-b22a-8453a09b71dc",
            "category": "Vehicle insurance",
            "monthlyAmount": 220,
            "notes": ""
          },
          {
            "id": "expense-a6f553f1-5a6f-4e9b-a3c9-cdfd37df63e6",
            "category": "Taxes not deducted from wages",
            "monthlyAmount": 210,
            "notes": ""
          }
        ],
        "sofaEvents": [],
        "petitionFlags": {
          "evictionJudgment": "Yes",
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
          "meansTestStatus": "",
          "medianIncomeState": "",
          "estimatedMonthlyIncome": 0,
          "securedPropertyIntent": "",
          "priorBankruptcyDischarge": "",
          "assetDistributionEstimate": ""
        },
        "chapter13": {
          "planMonths": 60,
          "proposedMonthlyPayment": 900,
          "priorityClaimsEstimate": 7400,
          "arrearsCureEstimate": 5400,
          "disposableIncomeNotes": "Entered budget requires attorney review of rent arrears and Chapter 13 eligibility."
        },
        "documents": [
          {
            "id": "fake-document-erin-cole-mitchell-ch13-driver-s-license-1",
            "name": "Driver's license",
            "category": "Identity",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "fake-document-erin-cole-mitchell-ch13-tax-return-last-year-2",
            "name": "Tax return - last year",
            "category": "Taxes",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "fake-document-erin-cole-mitchell-ch13-pay-stubs-last-6-months-3",
            "name": "Pay stubs - last 6 months",
            "category": "Income",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "fake-document-erin-cole-mitchell-ch13-court-paperwork-4",
            "name": "Court paperwork",
            "category": "Financial affairs",
            "status": "needed",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": [],
            "applicability": "essential_now",
            "applicabilityReason": "Erin and Cole reported an eviction judgment and a three-day lockout deadline.",
            "caseStageDeadline": "Same day",
            "priority": "high"
          },
          {
            "id": "fake-document-erin-cole-mitchell-ch13-lease-or-rental-agreement-5",
            "name": "Lease or rental agreement",
            "category": "Housing",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": [],
            "applicabilityReason": "The household rents the residence involved in the eviction case."
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
                "id": "fa-entry-deb41c7c-2fae-4c0d-8a1d-0650da81d35a",
                "fields": {
                  "creditor": "Fake Residential Landlord",
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
                "id": "fa-entry-7aac6a56-0aa1-4519-90b9-3eee1ef75dee",
                "fields": {
                  "caseNumber": "FAKE-EV-2026-114",
                  "court": "Salt Lake County Justice Court",
                  "hearingDate": "2026-07-10",
                  "type": "Eviction"
                }
              }
            ],
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
      "packageId": "bkfl-demo-erin-cole-mitchell-ch13",
      "readiness": {
        "documentsReady": 4,
        "documentsRequired": 5,
        "fieldsFilled": 27,
        "fieldsRequired": 28,
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
          "detail": "$820 in recorded arrears should be reconciled with plan treatment."
        },
        {
          "id": "debts-Unsecured debt captured",
          "severity": "info",
          "sectionId": "debts",
          "title": "Unsecured debt captured",
          "detail": "$33,000 in unsecured claims is recorded for review."
        }
      ],
      "schemaVersion": 2,
      "source": {
        "branch": "Jimmy",
        "scenarioId": "erin-cole-mitchell-ch13",
        "scenarioTitle": "Renter Chapter 13 case responding to an eviction judgment",
        "system": "BK FastLane Intake",
        "traits": [
          "chapter_13",
          "renter",
          "eviction",
          "joint_case"
        ]
      },
      "submittedAt": "2026-07-13T19:54:04.109Z"
    },
    {
      "completion": {
        "bundle": {
          "bundleVersion": 2,
          "generatedAt": "2026-07-13T19:54:04.109Z",
          "items": [
            {
              "applicability": "essential_now",
              "applicabilityReason": "The canonical Intake schema marks this Personal Info answer as required for the current client step.",
              "canonicalPath": "matter.debtors[0].dateOfBirth",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Return to Personal Info and answer: Date of birth.",
              "id": "schema-start.debtor.dateOfBirth",
              "kind": "field",
              "label": "Date of birth",
              "priority": "high",
              "resolutionStatus": "open",
              "sectionId": "start",
              "whyNeeded": "The firm needs this answer in canonical Matter data before administrative Intake collection is complete."
            },
            {
              "applicability": "essential_now",
              "applicabilityReason": "The debtor entered a balance but omitted the creditor or collection agency name.",
              "canonicalPath": "matter.debts[id='fake-debt-theo-bennett-ch7-retired-2'].creditor",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Enter the creditor or collection agency name for the $4,300 debt.",
              "id": "debt-creditor-fake-debt-theo-bennett-ch7-retired-2",
              "kind": "field",
              "label": "Debt creditor name",
              "priority": "high",
              "resolutionStatus": "open",
              "sectionId": "property",
              "whyNeeded": "The firm cannot reliably identify or organize an unnamed debt."
            },
            {
              "applicability": "essential_now",
              "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
              "canonicalPath": "matter.documents[name='Driver's license']",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Upload Driver's license, replace it if unreadable, or tell the firm why it is unavailable.",
              "id": "document-fake-document-theo-bennett-ch7-retired-driver-s-license-1",
              "kind": "document",
              "label": "Driver's license",
              "priority": "high",
              "resolutionStatus": "open",
              "sectionId": "documents",
              "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
            },
            {
              "applicability": "essential_now",
              "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
              "canonicalPath": "matter.documents[name='Bank or financial account statements']",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Upload Bank or financial account statements, replace it if unreadable, or tell the firm why it is unavailable.",
              "id": "document-fake-document-theo-bennett-ch7-retired-bank-or-financial-account-statements-2",
              "kind": "document",
              "label": "Bank or financial account statements",
              "priority": "medium",
              "resolutionStatus": "open",
              "sectionId": "documents",
              "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
            },
            {
              "applicability": "essential_now",
              "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
              "canonicalPath": "matter.documents[name='Statements for all debts']",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Upload Statements for all debts, replace it if unreadable, or tell the firm why it is unavailable.",
              "id": "document-fake-document-theo-bennett-ch7-retired-statements-for-all-debts-3",
              "kind": "document",
              "label": "Statements for all debts",
              "priority": "medium",
              "resolutionStatus": "open",
              "sectionId": "documents",
              "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
            },
            {
              "applicability": "essential_now",
              "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
              "canonicalPath": "matter.documents[name='Tax return unavailability explanation']",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Upload Tax return unavailability explanation, replace it if unreadable, or tell the firm why it is unavailable.",
              "id": "document-fake-document-theo-bennett-ch7-retired-tax-return-unavailability-explanation-5",
              "kind": "document",
              "label": "Tax return unavailability explanation",
              "priority": "medium",
              "resolutionStatus": "open",
              "sectionId": "documents",
              "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
            },
            {
              "applicability": "conditional",
              "applicabilityReason": "Theo reported a recent family repayment and property transfer.",
              "canonicalPath": "matter.documents[name='Transfer records']",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Upload Transfer records, replace it if unreadable, or tell the firm why it is unavailable.",
              "id": "document-fake-document-theo-bennett-ch7-retired-transfer-records-4",
              "kind": "document",
              "label": "Transfer records",
              "priority": "medium",
              "resolutionStatus": "open",
              "sectionId": "documents",
              "whyNeeded": "The records preserve the raw dates, recipients, amounts, and property facts for attorney review without characterizing the transaction legally."
            }
          ],
          "matterId": "fake-matter-theo-bennett-ch7-retired",
          "matterRevision": 1,
          "metrics": {
            "blockingReadiness": {
              "complete": 26,
              "percent": 81,
              "required": 32
            },
            "documentCollection": {
              "applicable": 5,
              "collected": 0,
              "percent": 0
            },
            "fieldCompletion": {
              "applicable": 28,
              "entered": 26,
              "percent": 93
            },
            "intakeChecklistCompletion": 79
          },
          "reminderItems": [
            {
              "applicability": "essential_now",
              "applicabilityReason": "The canonical Intake schema marks this Personal Info answer as required for the current client step.",
              "canonicalPath": "matter.debtors[0].dateOfBirth",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Return to Personal Info and answer: Date of birth.",
              "id": "schema-start.debtor.dateOfBirth",
              "kind": "field",
              "label": "Date of birth",
              "priority": "high",
              "resolutionStatus": "open",
              "sectionId": "start",
              "whyNeeded": "The firm needs this answer in canonical Matter data before administrative Intake collection is complete."
            },
            {
              "applicability": "essential_now",
              "applicabilityReason": "The debtor entered a balance but omitted the creditor or collection agency name.",
              "canonicalPath": "matter.debts[id='fake-debt-theo-bennett-ch7-retired-2'].creditor",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Enter the creditor or collection agency name for the $4,300 debt.",
              "id": "debt-creditor-fake-debt-theo-bennett-ch7-retired-2",
              "kind": "field",
              "label": "Debt creditor name",
              "priority": "high",
              "resolutionStatus": "open",
              "sectionId": "property",
              "whyNeeded": "The firm cannot reliably identify or organize an unnamed debt."
            },
            {
              "applicability": "essential_now",
              "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
              "canonicalPath": "matter.documents[name='Driver's license']",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Upload Driver's license, replace it if unreadable, or tell the firm why it is unavailable.",
              "id": "document-fake-document-theo-bennett-ch7-retired-driver-s-license-1",
              "kind": "document",
              "label": "Driver's license",
              "priority": "high",
              "resolutionStatus": "open",
              "sectionId": "documents",
              "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
            },
            {
              "applicability": "essential_now",
              "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
              "canonicalPath": "matter.documents[name='Bank or financial account statements']",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Upload Bank or financial account statements, replace it if unreadable, or tell the firm why it is unavailable.",
              "id": "document-fake-document-theo-bennett-ch7-retired-bank-or-financial-account-statements-2",
              "kind": "document",
              "label": "Bank or financial account statements",
              "priority": "medium",
              "resolutionStatus": "open",
              "sectionId": "documents",
              "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
            },
            {
              "applicability": "essential_now",
              "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
              "canonicalPath": "matter.documents[name='Statements for all debts']",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Upload Statements for all debts, replace it if unreadable, or tell the firm why it is unavailable.",
              "id": "document-fake-document-theo-bennett-ch7-retired-statements-for-all-debts-3",
              "kind": "document",
              "label": "Statements for all debts",
              "priority": "medium",
              "resolutionStatus": "open",
              "sectionId": "documents",
              "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
            },
            {
              "applicability": "essential_now",
              "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
              "canonicalPath": "matter.documents[name='Tax return unavailability explanation']",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Upload Tax return unavailability explanation, replace it if unreadable, or tell the firm why it is unavailable.",
              "id": "document-fake-document-theo-bennett-ch7-retired-tax-return-unavailability-explanation-5",
              "kind": "document",
              "label": "Tax return unavailability explanation",
              "priority": "medium",
              "resolutionStatus": "open",
              "sectionId": "documents",
              "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
            }
          ],
          "ruleSetVersion": "2026-07-13.pilot-v1",
          "states": {
            "attorneyReview": "not_started",
            "documentReview": "pending",
            "intakeCompletion": "needs_client_action",
            "submission": "submitted"
          },
          "urgentAttorneyTask": null
        },
        "blockingReadiness": {
          "complete": 26,
          "percent": 81,
          "required": 32
        },
        "documentCompletion": {
          "applicableRequired": 5,
          "receivedRequired": 0
        },
        "emailDraft": {
          "bodySnapshot": "Hi Theo,\n\nWe reviewed your BK FastLane intake entry and found a few items that still need your attention before the attorney can use the file efficiently.\n\n1. Return to Personal Info and answer: Date of birth.\n2. Enter the creditor or collection agency name for the $4,300 debt.\n3. Upload Driver's license, replace it if unreadable, or tell the firm why it is unavailable.\n4. Upload Bank or financial account statements, replace it if unreadable, or tell the firm why it is unavailable.\n5. Upload Statements for all debts, replace it if unreadable, or tell the firm why it is unavailable.\n6. Upload Tax return unavailability explanation, replace it if unreadable, or tell the firm why it is unavailable.\n\nYou do not need to calculate legal conclusions. Just enter your best information and upload the requested documents when available.\n\nReturn to your intake: https://jimmydanol.github.io/bkfl-crm-lite/intake-demo.html?packageId=bkfl-demo-theo-bennett-ch7-retired&itemId=schema-start.debtor.dateOfBirth\n\nThank you,\nBK FastLane intake team",
          "deliveryMode": "simulation",
          "intakeResumeUrl": "https://jimmydanol.github.io/bkfl-crm-lite/intake-demo.html?packageId=bkfl-demo-theo-bennett-ch7-retired&itemId=schema-start.debtor.dateOfBirth",
          "recipient": "theo.bennett.fake@example.test",
          "status": "pending_approval",
          "subject": "Information needed to finish your Intake"
        },
        "events": [],
        "fieldCompletion": {
          "applicableRequired": 28,
          "enteredRequired": 26,
          "percent": 93
        },
        "intakeChecklistCompletion": 79,
        "intakeResumeUrl": "https://jimmydanol.github.io/bkfl-crm-lite/intake-demo.html?packageId=bkfl-demo-theo-bennett-ch7-retired&itemId=schema-start.debtor.dateOfBirth",
        "items": [
          {
            "applicability": "essential_now",
            "applicabilityReason": "The canonical Intake schema marks this Personal Info answer as required for the current client step.",
            "canonicalPath": "matter.debtors[0].dateOfBirth",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Return to Personal Info and answer: Date of birth.",
            "id": "schema-start.debtor.dateOfBirth",
            "kind": "field",
            "label": "Date of birth",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "start",
            "whyNeeded": "The firm needs this answer in canonical Matter data before administrative Intake collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "The debtor entered a balance but omitted the creditor or collection agency name.",
            "canonicalPath": "matter.debts[id='fake-debt-theo-bennett-ch7-retired-2'].creditor",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Enter the creditor or collection agency name for the $4,300 debt.",
            "id": "debt-creditor-fake-debt-theo-bennett-ch7-retired-2",
            "kind": "field",
            "label": "Debt creditor name",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "property",
            "whyNeeded": "The firm cannot reliably identify or organize an unnamed debt."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Driver's license']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Driver's license, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-theo-bennett-ch7-retired-driver-s-license-1",
            "kind": "document",
            "label": "Driver's license",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Bank or financial account statements']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Bank or financial account statements, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-theo-bennett-ch7-retired-bank-or-financial-account-statements-2",
            "kind": "document",
            "label": "Bank or financial account statements",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Statements for all debts']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Statements for all debts, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-theo-bennett-ch7-retired-statements-for-all-debts-3",
            "kind": "document",
            "label": "Statements for all debts",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Tax return unavailability explanation']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Tax return unavailability explanation, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-theo-bennett-ch7-retired-tax-return-unavailability-explanation-5",
            "kind": "document",
            "label": "Tax return unavailability explanation",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "conditional",
            "applicabilityReason": "Theo reported a recent family repayment and property transfer.",
            "canonicalPath": "matter.documents[name='Transfer records']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Transfer records, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-theo-bennett-ch7-retired-transfer-records-4",
            "kind": "document",
            "label": "Transfer records",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The records preserve the raw dates, recipients, amounts, and property facts for attorney review without characterizing the transaction legally."
          }
        ],
        "missingItems": [
          {
            "applicability": "essential_now",
            "applicabilityReason": "The canonical Intake schema marks this Personal Info answer as required for the current client step.",
            "canonicalPath": "matter.debtors[0].dateOfBirth",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Return to Personal Info and answer: Date of birth.",
            "id": "schema-start.debtor.dateOfBirth",
            "kind": "field",
            "label": "Date of birth",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "start",
            "whyNeeded": "The firm needs this answer in canonical Matter data before administrative Intake collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "The debtor entered a balance but omitted the creditor or collection agency name.",
            "canonicalPath": "matter.debts[id='fake-debt-theo-bennett-ch7-retired-2'].creditor",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Enter the creditor or collection agency name for the $4,300 debt.",
            "id": "debt-creditor-fake-debt-theo-bennett-ch7-retired-2",
            "kind": "field",
            "label": "Debt creditor name",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "property",
            "whyNeeded": "The firm cannot reliably identify or organize an unnamed debt."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Driver's license']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Driver's license, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-theo-bennett-ch7-retired-driver-s-license-1",
            "kind": "document",
            "label": "Driver's license",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Bank or financial account statements']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Bank or financial account statements, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-theo-bennett-ch7-retired-bank-or-financial-account-statements-2",
            "kind": "document",
            "label": "Bank or financial account statements",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Statements for all debts']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Statements for all debts, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-theo-bennett-ch7-retired-statements-for-all-debts-3",
            "kind": "document",
            "label": "Statements for all debts",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Tax return unavailability explanation']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Tax return unavailability explanation, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-theo-bennett-ch7-retired-tax-return-unavailability-explanation-5",
            "kind": "document",
            "label": "Tax return unavailability explanation",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          }
        ],
        "percent": 79,
        "revision": 1,
        "states": {
          "attorneyReview": "not_started",
          "documentReview": "pending",
          "intakeCompletion": "needs_client_action",
          "submission": "submitted"
        },
        "status": "needs_client_action",
        "urgentAttorneyTask": null
      },
      "demo": true,
      "generatedAt": "2026-07-13T19:54:04.109Z",
      "matter": {
        "id": "fake-matter-theo-bennett-ch7-retired",
        "title": "Theo Bennett fake client-entered Chapter 7 intake",
        "chapter": "7",
        "status": "review",
        "filingState": "CO",
        "district": "District of Colorado",
        "clientGoals": "Address consumer debt while disclosing a recent repayment to a family member.",
        "urgentConcerns": "None reported.",
        "priorBankruptcyFiled": "No",
        "priorBankruptcyDetails": "",
        "hasDependents": "No",
        "spouseFilingJointly": "No",
        "isEmployed": "No",
        "hasOtherHouseholdIncome": "Yes",
        "personalInfoSubmittedAt": "2026-07-13T19:54:04.109Z",
        "createdAt": "2026-07-13T19:54:05.292Z",
        "updatedAt": "2026-07-13T19:54:04.109Z",
        "debtors": [
          {
            "id": "debtor-57a87f1d-c249-4c20-9369-6238e94fd178",
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
            "id": "asset-7dee0597-e762-4c4c-b020-f98aa5d3d7ff",
            "category": "Bank or financial account",
            "description": "Wells Fargo checking",
            "estimatedValue": 780,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "Checking"
          },
          {
            "id": "asset-60b29b35-0981-4b04-a8f6-1b4022b5d48b",
            "category": "Bank or financial account",
            "description": "Wells Fargo savings",
            "estimatedValue": 1100,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "Savings"
          },
          {
            "id": "asset-6bf3a42c-18cb-48e8-99ff-6648ee13873a",
            "category": "Retirement or pension account",
            "description": "Small rollover IRA",
            "estimatedValue": 14600,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "IRA"
          },
          {
            "id": "asset-ba3df21e-a65b-4839-8764-97a42259e2c0",
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
            "id": "income-55b317d6-79b5-4d83-8143-706cc5ab88d7",
            "source": "Social Security / public benefits",
            "employer": "Social Security Administration",
            "amount": 1980,
            "frequency": "Monthly",
            "sixMonthTotal": 11880
          },
          {
            "id": "income-2990c926-76bc-4456-a02a-cec376927997",
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
            "id": "expense-97e8e150-05f4-4142-8a8b-eaa0a7871b9a",
            "category": "Rent or home/mortgage payment",
            "monthlyAmount": 1180,
            "notes": ""
          },
          {
            "id": "expense-ee021347-a81f-4e69-b49c-23edc63ffca6",
            "category": "Electricity, heat, natural gas",
            "monthlyAmount": 120,
            "notes": ""
          },
          {
            "id": "expense-691cf00c-829b-4ac0-bcba-f33eddd6edd6",
            "category": "Phone, cell, internet, satellite & cable",
            "monthlyAmount": 135,
            "notes": ""
          },
          {
            "id": "expense-526301f9-eee7-4137-b945-64a16df6826a",
            "category": "Food & housekeeping supplies",
            "monthlyAmount": 425,
            "notes": ""
          },
          {
            "id": "expense-3e68f054-2cb2-4902-bbd2-597f1d3f3823",
            "category": "Medical & dental expenses",
            "monthlyAmount": 220,
            "notes": ""
          },
          {
            "id": "expense-c60d2e47-a7ed-450d-b8e7-d0d51993e14d",
            "category": "Transportation",
            "monthlyAmount": 160,
            "notes": ""
          },
          {
            "id": "expense-4209bb48-f61f-4c59-ae1c-2d1057161e21",
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
            "id": "fake-document-theo-bennett-ch7-retired-driver-s-license-1",
            "name": "Driver's license",
            "category": "Identity",
            "status": "needed",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": []
          },
          {
            "id": "fake-document-theo-bennett-ch7-retired-bank-or-financial-account-statements-2",
            "name": "Bank or financial account statements",
            "category": "Assets",
            "status": "needed",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": []
          },
          {
            "id": "fake-document-theo-bennett-ch7-retired-statements-for-all-debts-3",
            "name": "Statements for all debts",
            "category": "Debt",
            "status": "needed",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": []
          },
          {
            "id": "fake-document-theo-bennett-ch7-retired-transfer-records-4",
            "name": "Transfer records",
            "category": "Financial affairs",
            "status": "needed",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": [],
            "applicability": "conditional",
            "applicabilityReason": "Theo reported a recent family repayment and property transfer.",
            "whyNeeded": "The records preserve the raw dates, recipients, amounts, and property facts for attorney review without characterizing the transaction legally."
          },
          {
            "id": "fake-document-theo-bennett-ch7-retired-tax-return-unavailability-explanation-5",
            "name": "Tax return unavailability explanation",
            "category": "Taxes",
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
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "other-income": {
            "answer": "Yes",
            "entries": [
              {
                "id": "fa-entry-d7b814de-768b-45e9-aa23-fb3f961a5403",
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
            "answer": "Yes",
            "entries": [
              {
                "id": "fa-entry-9555cd79-2c0f-49ed-af0d-5ce66cbcc651",
                "fields": {
                  "amount": "4200",
                  "date": "2026-05-18",
                  "recipient": "Fake sibling",
                  "relationship": "Sibling",
                  "reason": "Repayment of family loan"
                }
              }
            ],
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
            "answer": "Yes",
            "entries": [
              {
                "id": "fa-entry-cd925474-be36-40b7-a9c5-1b2d0679415b",
                "fields": {
                  "date": "2026-04-02",
                  "property": "2012 utility trailer",
                  "recipient": "Fake nephew",
                  "value": "1500"
                }
              }
            ],
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
                "id": "fa-entry-face3607-1b75-4f34-b09e-593b663e8f05",
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
        "documentsReady": 0,
        "documentsRequired": 5,
        "fieldsFilled": 26,
        "fieldsRequired": 28,
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
      "schemaVersion": 2,
      "source": {
        "branch": "Jimmy",
        "scenarioId": "theo-bennett-ch7-retired",
        "scenarioTitle": "Chapter 7 debtor with a recent family transfer and possible preference facts",
        "system": "BK FastLane Intake",
        "traits": [
          "chapter_7",
          "recent_transfer",
          "possible_preference",
          "retired"
        ]
      },
      "submittedAt": "2026-07-13T19:54:04.109Z"
    },
    {
      "completion": {
        "bundle": {
          "bundleVersion": 2,
          "generatedAt": "2026-07-13T19:54:04.109Z",
          "items": [
            {
              "applicability": "essential_now",
              "applicabilityReason": "The canonical Intake schema marks this Personal Info answer as required for the current client step.",
              "canonicalPath": "matter.debtors[0].dateOfBirth",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Return to Personal Info and answer: Date of birth.",
              "id": "schema-start.debtor.dateOfBirth",
              "kind": "field",
              "label": "Date of birth",
              "priority": "high",
              "resolutionStatus": "open",
              "sectionId": "start",
              "whyNeeded": "The firm needs this answer in canonical Matter data before administrative Intake collection is complete."
            },
            {
              "applicability": "essential_now",
              "applicabilityReason": "The debtor entered a balance but omitted the creditor or collection agency name.",
              "canonicalPath": "matter.debts[id='fake-debt-lucas-romero-ch7-retired-2'].creditor",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Enter the creditor or collection agency name for the $4,300 debt.",
              "id": "debt-creditor-fake-debt-lucas-romero-ch7-retired-2",
              "kind": "field",
              "label": "Debt creditor name",
              "priority": "high",
              "resolutionStatus": "open",
              "sectionId": "property",
              "whyNeeded": "The firm cannot reliably identify or organize an unnamed debt."
            },
            {
              "applicability": "essential_now",
              "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
              "canonicalPath": "matter.documents[name='Bank or financial account statements']",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Upload Bank or financial account statements, replace it if unreadable, or tell the firm why it is unavailable.",
              "id": "document-fake-document-lucas-romero-ch7-retired-bank-or-financial-account-statements-2",
              "kind": "document",
              "label": "Bank or financial account statements",
              "priority": "medium",
              "resolutionStatus": "open",
              "sectionId": "documents",
              "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
            },
            {
              "applicability": "essential_now",
              "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
              "canonicalPath": "matter.documents[name='Statements for all debts']",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Upload Statements for all debts, replace it if unreadable, or tell the firm why it is unavailable.",
              "id": "document-fake-document-lucas-romero-ch7-retired-statements-for-all-debts-3",
              "kind": "document",
              "label": "Statements for all debts",
              "priority": "medium",
              "resolutionStatus": "open",
              "sectionId": "documents",
              "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
            },
            {
              "applicability": "conditional",
              "applicabilityReason": "Lucas reported no recent tax filing because of extended unemployment.",
              "canonicalPath": "matter.documents[name='Tax return unavailability explanation']",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Upload Tax return unavailability explanation, replace it if unreadable, or tell the firm why it is unavailable.",
              "id": "document-fake-document-lucas-romero-ch7-retired-tax-return-unavailability-explanation-4",
              "kind": "document",
              "label": "Tax return unavailability explanation",
              "priority": "medium",
              "resolutionStatus": "open",
              "sectionId": "documents",
              "whyNeeded": "The explanation prevents repeated requests for a document that may not exist and routes the issue for firm confirmation."
            }
          ],
          "matterId": "fake-matter-lucas-romero-ch7-retired",
          "matterRevision": 1,
          "metrics": {
            "blockingReadiness": {
              "complete": 27,
              "percent": 87,
              "required": 31
            },
            "documentCollection": {
              "applicable": 4,
              "collected": 1,
              "percent": 25
            },
            "fieldCompletion": {
              "applicable": 28,
              "entered": 26,
              "percent": 93
            },
            "intakeChecklistCompletion": 84
          },
          "reminderItems": [
            {
              "applicability": "essential_now",
              "applicabilityReason": "The canonical Intake schema marks this Personal Info answer as required for the current client step.",
              "canonicalPath": "matter.debtors[0].dateOfBirth",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Return to Personal Info and answer: Date of birth.",
              "id": "schema-start.debtor.dateOfBirth",
              "kind": "field",
              "label": "Date of birth",
              "priority": "high",
              "resolutionStatus": "open",
              "sectionId": "start",
              "whyNeeded": "The firm needs this answer in canonical Matter data before administrative Intake collection is complete."
            },
            {
              "applicability": "essential_now",
              "applicabilityReason": "The debtor entered a balance but omitted the creditor or collection agency name.",
              "canonicalPath": "matter.debts[id='fake-debt-lucas-romero-ch7-retired-2'].creditor",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Enter the creditor or collection agency name for the $4,300 debt.",
              "id": "debt-creditor-fake-debt-lucas-romero-ch7-retired-2",
              "kind": "field",
              "label": "Debt creditor name",
              "priority": "high",
              "resolutionStatus": "open",
              "sectionId": "property",
              "whyNeeded": "The firm cannot reliably identify or organize an unnamed debt."
            },
            {
              "applicability": "essential_now",
              "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
              "canonicalPath": "matter.documents[name='Bank or financial account statements']",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Upload Bank or financial account statements, replace it if unreadable, or tell the firm why it is unavailable.",
              "id": "document-fake-document-lucas-romero-ch7-retired-bank-or-financial-account-statements-2",
              "kind": "document",
              "label": "Bank or financial account statements",
              "priority": "medium",
              "resolutionStatus": "open",
              "sectionId": "documents",
              "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
            },
            {
              "applicability": "essential_now",
              "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
              "canonicalPath": "matter.documents[name='Statements for all debts']",
              "caseStageDeadline": "Before Intake Completion can close",
              "clientActionable": true,
              "clientInstruction": "Upload Statements for all debts, replace it if unreadable, or tell the firm why it is unavailable.",
              "id": "document-fake-document-lucas-romero-ch7-retired-statements-for-all-debts-3",
              "kind": "document",
              "label": "Statements for all debts",
              "priority": "medium",
              "resolutionStatus": "open",
              "sectionId": "documents",
              "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
            }
          ],
          "ruleSetVersion": "2026-07-13.pilot-v1",
          "states": {
            "attorneyReview": "not_started",
            "documentReview": "pending",
            "intakeCompletion": "needs_client_action",
            "submission": "submitted"
          },
          "urgentAttorneyTask": null
        },
        "blockingReadiness": {
          "complete": 27,
          "percent": 87,
          "required": 31
        },
        "documentCompletion": {
          "applicableRequired": 4,
          "receivedRequired": 1
        },
        "emailDraft": {
          "bodySnapshot": "Hi Lucas,\n\nWe reviewed your BK FastLane intake entry and found a few items that still need your attention before the attorney can use the file efficiently.\n\n1. Return to Personal Info and answer: Date of birth.\n2. Enter the creditor or collection agency name for the $4,300 debt.\n3. Upload Bank or financial account statements, replace it if unreadable, or tell the firm why it is unavailable.\n4. Upload Statements for all debts, replace it if unreadable, or tell the firm why it is unavailable.\n\nYou do not need to calculate legal conclusions. Just enter your best information and upload the requested documents when available.\n\nReturn to your intake: https://jimmydanol.github.io/bkfl-crm-lite/intake-demo.html?packageId=bkfl-demo-lucas-romero-ch7-retired&itemId=schema-start.debtor.dateOfBirth\n\nThank you,\nBK FastLane intake team",
          "deliveryMode": "simulation",
          "intakeResumeUrl": "https://jimmydanol.github.io/bkfl-crm-lite/intake-demo.html?packageId=bkfl-demo-lucas-romero-ch7-retired&itemId=schema-start.debtor.dateOfBirth",
          "recipient": "lucas.romero.fake@example.test",
          "status": "pending_approval",
          "subject": "Information needed to finish your Intake"
        },
        "events": [],
        "fieldCompletion": {
          "applicableRequired": 28,
          "enteredRequired": 26,
          "percent": 93
        },
        "intakeChecklistCompletion": 84,
        "intakeResumeUrl": "https://jimmydanol.github.io/bkfl-crm-lite/intake-demo.html?packageId=bkfl-demo-lucas-romero-ch7-retired&itemId=schema-start.debtor.dateOfBirth",
        "items": [
          {
            "applicability": "essential_now",
            "applicabilityReason": "The canonical Intake schema marks this Personal Info answer as required for the current client step.",
            "canonicalPath": "matter.debtors[0].dateOfBirth",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Return to Personal Info and answer: Date of birth.",
            "id": "schema-start.debtor.dateOfBirth",
            "kind": "field",
            "label": "Date of birth",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "start",
            "whyNeeded": "The firm needs this answer in canonical Matter data before administrative Intake collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "The debtor entered a balance but omitted the creditor or collection agency name.",
            "canonicalPath": "matter.debts[id='fake-debt-lucas-romero-ch7-retired-2'].creditor",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Enter the creditor or collection agency name for the $4,300 debt.",
            "id": "debt-creditor-fake-debt-lucas-romero-ch7-retired-2",
            "kind": "field",
            "label": "Debt creditor name",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "property",
            "whyNeeded": "The firm cannot reliably identify or organize an unnamed debt."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Bank or financial account statements']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Bank or financial account statements, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-lucas-romero-ch7-retired-bank-or-financial-account-statements-2",
            "kind": "document",
            "label": "Bank or financial account statements",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Statements for all debts']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Statements for all debts, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-lucas-romero-ch7-retired-statements-for-all-debts-3",
            "kind": "document",
            "label": "Statements for all debts",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "conditional",
            "applicabilityReason": "Lucas reported no recent tax filing because of extended unemployment.",
            "canonicalPath": "matter.documents[name='Tax return unavailability explanation']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Tax return unavailability explanation, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-lucas-romero-ch7-retired-tax-return-unavailability-explanation-4",
            "kind": "document",
            "label": "Tax return unavailability explanation",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The explanation prevents repeated requests for a document that may not exist and routes the issue for firm confirmation."
          }
        ],
        "missingItems": [
          {
            "applicability": "essential_now",
            "applicabilityReason": "The canonical Intake schema marks this Personal Info answer as required for the current client step.",
            "canonicalPath": "matter.debtors[0].dateOfBirth",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Return to Personal Info and answer: Date of birth.",
            "id": "schema-start.debtor.dateOfBirth",
            "kind": "field",
            "label": "Date of birth",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "start",
            "whyNeeded": "The firm needs this answer in canonical Matter data before administrative Intake collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "The debtor entered a balance but omitted the creditor or collection agency name.",
            "canonicalPath": "matter.debts[id='fake-debt-lucas-romero-ch7-retired-2'].creditor",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Enter the creditor or collection agency name for the $4,300 debt.",
            "id": "debt-creditor-fake-debt-lucas-romero-ch7-retired-2",
            "kind": "field",
            "label": "Debt creditor name",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "property",
            "whyNeeded": "The firm cannot reliably identify or organize an unnamed debt."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Bank or financial account statements']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Bank or financial account statements, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-lucas-romero-ch7-retired-bank-or-financial-account-statements-2",
            "kind": "document",
            "label": "Bank or financial account statements",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Statements for all debts']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Statements for all debts, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-lucas-romero-ch7-retired-statements-for-all-debts-3",
            "kind": "document",
            "label": "Statements for all debts",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          }
        ],
        "percent": 84,
        "revision": 1,
        "states": {
          "attorneyReview": "not_started",
          "documentReview": "pending",
          "intakeCompletion": "needs_client_action",
          "submission": "submitted"
        },
        "status": "needs_client_action",
        "urgentAttorneyTask": null
      },
      "demo": true,
      "generatedAt": "2026-07-13T19:54:04.109Z",
      "matter": {
        "id": "fake-matter-lucas-romero-ch7-retired",
        "title": "Lucas Romero fake client-entered Chapter 7 intake",
        "chapter": "7",
        "status": "review",
        "filingState": "CO",
        "district": "District of Colorado",
        "clientGoals": "Complete Intake despite not having filed recent tax returns after extended unemployment.",
        "urgentConcerns": "Needs help explaining missing returns and finding older bank records.",
        "priorBankruptcyFiled": "No",
        "priorBankruptcyDetails": "",
        "hasDependents": "No",
        "spouseFilingJointly": "No",
        "isEmployed": "No",
        "hasOtherHouseholdIncome": "No",
        "personalInfoSubmittedAt": "2026-07-13T19:54:04.109Z",
        "createdAt": "2026-07-13T19:54:05.309Z",
        "updatedAt": "2026-07-13T19:54:04.109Z",
        "debtors": [
          {
            "id": "debtor-b4486bb9-bdef-46f8-9cf6-e039b6dab291",
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
            "id": "asset-a320eb45-f307-4d7a-96e1-c0c76a7fe8f3",
            "category": "Bank or financial account",
            "description": "Wells Fargo checking",
            "estimatedValue": 780,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "Checking"
          },
          {
            "id": "asset-681ec64e-754e-4d40-b6d7-d552f2bef3a3",
            "category": "Bank or financial account",
            "description": "Wells Fargo savings",
            "estimatedValue": 1100,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "Savings"
          },
          {
            "id": "asset-f50b13b0-cc8a-4ca0-a4c8-0f73908c8218",
            "category": "Retirement or pension account",
            "description": "Small rollover IRA",
            "estimatedValue": 14600,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "IRA"
          },
          {
            "id": "asset-ddb77d55-64c2-4174-b847-95a5e66f6781",
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
            "id": "income-d1eb348a-cbd6-464e-b5f0-2017e346f056",
            "source": "Public benefits",
            "employer": "Colorado SNAP and cash assistance",
            "amount": 620,
            "frequency": "Monthly",
            "sixMonthTotal": 3720
          }
        ],
        "payStubIncomeEvidence": [],
        "expenses": [
          {
            "id": "expense-84249426-e131-4965-af51-2bec01d56e91",
            "category": "Rent or home/mortgage payment",
            "monthlyAmount": 1180,
            "notes": ""
          },
          {
            "id": "expense-b3997289-73f8-4ee5-bad9-6dc96ee84d63",
            "category": "Electricity, heat, natural gas",
            "monthlyAmount": 120,
            "notes": ""
          },
          {
            "id": "expense-b9363222-aab3-4942-9017-8be1d7e83935",
            "category": "Phone, cell, internet, satellite & cable",
            "monthlyAmount": 135,
            "notes": ""
          },
          {
            "id": "expense-cb819620-74ae-46e4-92c9-372d5e281516",
            "category": "Food & housekeeping supplies",
            "monthlyAmount": 425,
            "notes": ""
          },
          {
            "id": "expense-5b0b4e9d-5c86-4bd3-ad11-85076c0cd3fc",
            "category": "Medical & dental expenses",
            "monthlyAmount": 220,
            "notes": ""
          },
          {
            "id": "expense-3db0394d-62dc-4f6c-8e6d-f719dfe63e34",
            "category": "Transportation",
            "monthlyAmount": 160,
            "notes": ""
          },
          {
            "id": "expense-a446a10c-a4b6-4f9f-a048-f978c9210ec8",
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
            "id": "fake-document-lucas-romero-ch7-retired-driver-s-license-1",
            "name": "Driver's license",
            "category": "Identity",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": []
          },
          {
            "id": "fake-document-lucas-romero-ch7-retired-bank-or-financial-account-statements-2",
            "name": "Bank or financial account statements",
            "category": "Assets",
            "status": "needed",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": []
          },
          {
            "id": "fake-document-lucas-romero-ch7-retired-statements-for-all-debts-3",
            "name": "Statements for all debts",
            "category": "Debt",
            "status": "needed",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": []
          },
          {
            "id": "fake-document-lucas-romero-ch7-retired-tax-return-unavailability-explanation-4",
            "name": "Tax return unavailability explanation",
            "category": "Taxes",
            "status": "needed",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": [],
            "applicability": "conditional",
            "applicabilityReason": "Lucas reported no recent tax filing because of extended unemployment.",
            "whyNeeded": "The explanation prevents repeated requests for a document that may not exist and routes the issue for firm confirmation."
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
                "id": "fa-entry-93d18f6f-b657-4206-9600-0806656803a8",
                "fields": {
                  "amount": "620",
                  "frequency": "Monthly",
                  "source": "Public benefits"
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
                "id": "fa-entry-face3607-1b75-4f34-b09e-593b663e8f05",
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
        "documentsReady": 1,
        "documentsRequired": 4,
        "fieldsFilled": 26,
        "fieldsRequired": 28,
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
      "schemaVersion": 2,
      "source": {
        "branch": "Jimmy",
        "scenarioId": "lucas-romero-ch7-retired",
        "scenarioTitle": "Unemployed Chapter 7 debtor explaining unavailable tax returns",
        "system": "BK FastLane Intake",
        "traits": [
          "chapter_7",
          "unemployed",
          "tax_return_unavailable",
          "need_help"
        ]
      },
      "submittedAt": "2026-07-13T19:54:04.109Z"
    }
  ],
  "schemaVersion": 1,
  "source": "BK FastLane Intake incomplete debtor entry agent"
};
