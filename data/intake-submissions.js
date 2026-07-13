window.BKFL_INTAKE_SUBMISSIONS = {
  "demo": true,
  "generatedAt": "2026-07-13T20:03:52.546Z",
  "packages": [
    {
      "completion": {
        "bundle": {
          "bundleVersion": 2,
          "generatedAt": "2026-07-13T20:03:52.546Z",
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
      "generatedAt": "2026-07-13T20:03:52.546Z",
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
        "personalInfoSubmittedAt": "2026-07-13T20:03:52.546Z",
        "createdAt": "2026-07-13T20:03:53.783Z",
        "updatedAt": "2026-07-13T20:03:52.546Z",
        "debtors": [
          {
            "id": "debtor-3fd4ac9f-0ce6-461f-bce0-ce9947e11a43",
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
            "id": "asset-b7a98348-9af6-4bb5-8fc4-2e91f9c1d7c3",
            "category": "Bank or financial account",
            "description": "Canvas Credit Union checking",
            "estimatedValue": 420,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "Checking"
          },
          {
            "id": "asset-abcf7175-d1ce-4b67-8f1c-5ca24904d9b6",
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
            "id": "asset-4c536dce-8613-47f9-831c-1ea79d60ab38",
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
            "id": "income-0eff9578-9ad2-41c9-8b03-ef0fe171cac8",
            "source": "Employment",
            "employer": "Denver Dental Supply",
            "amount": 2900,
            "frequency": "Biweekly",
            "sixMonthTotal": 17400
          },
          {
            "id": "income-20ed46ba-342c-45b3-b781-eaab12798285",
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
            "id": "expense-1f2e8652-5e4f-4473-95d8-6ce4aebfdaea",
            "category": "Rent or home/mortgage payment",
            "monthlyAmount": 1390,
            "notes": ""
          },
          {
            "id": "expense-a8ee7696-6930-4238-b87b-fd1ab68d3299",
            "category": "Electricity, heat, natural gas",
            "monthlyAmount": 165,
            "notes": ""
          },
          {
            "id": "expense-a413f02e-26ce-45b8-bc04-be860739db58",
            "category": "Phone, cell, internet, satellite & cable",
            "monthlyAmount": 155,
            "notes": ""
          },
          {
            "id": "expense-b844578f-5f59-48ff-b0a8-cbc621c3402b",
            "category": "Food & housekeeping supplies",
            "monthlyAmount": 540,
            "notes": ""
          },
          {
            "id": "expense-4ba27056-8186-46cb-92a6-848eb22a15f6",
            "category": "Medical & dental expenses",
            "monthlyAmount": 95,
            "notes": ""
          },
          {
            "id": "expense-89cc79af-43b0-43d5-9aae-127344022e02",
            "category": "Transportation",
            "monthlyAmount": 385,
            "notes": ""
          },
          {
            "id": "expense-780307ab-0d68-44cc-bcde-560794580afd",
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
                "id": "fa-entry-d6fb7c7e-fa2c-47c3-ab38-7a28dec77c58",
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
      "submittedAt": "2026-07-13T20:03:52.546Z"
    },
    {
      "completion": {
        "bundle": {
          "bundleVersion": 2,
          "generatedAt": "2026-07-13T20:03:52.546Z",
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
      "generatedAt": "2026-07-13T20:03:52.546Z",
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
        "personalInfoSubmittedAt": "2026-07-13T20:03:52.546Z",
        "createdAt": "2026-07-13T20:03:53.811Z",
        "updatedAt": "2026-07-13T20:03:52.546Z",
        "debtors": [
          {
            "id": "debtor-f7b11e4c-aff2-4216-877d-04119b45b62e",
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
            "id": "debtor-b89b3c8c-07fd-44b8-9e4e-b4243a1567be",
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
              "id": "dependent-425dcfdd-2dbd-4f03-9765-84bc115c5aa7",
              "name": "Fake minor child A",
              "age": "12",
              "relationship": "Child",
              "livesWithDebtor": "Yes"
            },
            {
              "id": "dependent-59dcd14a-ef8b-4bdd-8392-307fef2c121d",
              "name": "Fake minor child B",
              "age": "8",
              "relationship": "Child",
              "livesWithDebtor": "Yes"
            }
          ]
        },
        "assets": [
          {
            "id": "asset-c265ded3-9fec-46e7-8ce1-0bea5c0a85f4",
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
            "id": "asset-c2a52a61-1e7b-4bfe-9f26-fb18b1ec7733",
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
            "id": "asset-571dfc9f-2326-4e34-a382-e313f4c772ef",
            "category": "Bank or financial account",
            "description": "Chase joint checking",
            "estimatedValue": 2150,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "Checking"
          },
          {
            "id": "asset-d257309a-25cc-47b2-882d-99f4d225cc16",
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
            "id": "income-0f0adadb-c2a9-460d-a139-5b7e7e67670d",
            "source": "Employment",
            "employer": "Metro Facilities Group",
            "amount": 7100,
            "frequency": "Biweekly",
            "sixMonthTotal": 42600
          },
          {
            "id": "income-a6791fee-b50e-4b9d-afdb-d9bc56ceaf3b",
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
            "id": "expense-54355d79-4742-408f-86dc-fcc103b173c1",
            "category": "Mortgage payment",
            "monthlyAmount": 2680,
            "notes": ""
          },
          {
            "id": "expense-4c1d4592-f7e3-4b33-80b5-baf7d43ba2e1",
            "category": "Electricity, heat, natural gas",
            "monthlyAmount": 310,
            "notes": ""
          },
          {
            "id": "expense-f00fcbbf-1b39-4f54-8351-48e1a6e3aa41",
            "category": "Water, sewer, garbage collection",
            "monthlyAmount": 115,
            "notes": ""
          },
          {
            "id": "expense-cf5554af-2c89-4cda-a0e7-5fcd2e53b6cd",
            "category": "Phone, cell, internet, satellite & cable",
            "monthlyAmount": 245,
            "notes": ""
          },
          {
            "id": "expense-23886335-6e67-4519-ac61-47b45d233888",
            "category": "Food & housekeeping supplies",
            "monthlyAmount": 925,
            "notes": ""
          },
          {
            "id": "expense-ceaf8315-ce88-482a-a6ff-bf9bec00c681",
            "category": "Childcare & children education",
            "monthlyAmount": 640,
            "notes": ""
          },
          {
            "id": "expense-4e80d879-37fb-48f2-bf8e-34e799129d84",
            "category": "Transportation",
            "monthlyAmount": 560,
            "notes": ""
          },
          {
            "id": "expense-e47c1208-bc67-4650-b62d-dfdf29dd08cf",
            "category": "Vehicle payments",
            "monthlyAmount": 610,
            "notes": ""
          },
          {
            "id": "expense-967d657d-9e3c-49c5-9437-63dbd419a2fb",
            "category": "Vehicle insurance",
            "monthlyAmount": 220,
            "notes": ""
          },
          {
            "id": "expense-50a1ff21-d50f-419c-a262-18f6bcf3cb7b",
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
                "id": "fa-entry-d8557ab1-9da8-46f0-9c7b-d6085633c8b4",
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
                "id": "fa-entry-15eb1092-29d8-478e-ac6f-e49385a88794",
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
                "id": "fa-entry-39b91839-83a6-4d1b-b5db-eabe93ad76b9",
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
      "submittedAt": "2026-07-13T20:03:52.546Z"
    },
    {
      "completion": {
        "bundle": {
          "bundleVersion": 2,
          "generatedAt": "2026-07-13T20:03:52.546Z",
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
      "generatedAt": "2026-07-13T20:03:52.546Z",
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
        "personalInfoSubmittedAt": "2026-07-13T20:03:52.546Z",
        "createdAt": "2026-07-13T20:03:53.831Z",
        "updatedAt": "2026-07-13T20:03:52.546Z",
        "debtors": [
          {
            "id": "debtor-cd98649a-fd38-428a-89a3-44d210e58a3a",
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
            "id": "asset-51d46c4d-d6d6-436a-8f7e-a0eb80e34de0",
            "category": "Bank or financial account",
            "description": "Wells Fargo checking",
            "estimatedValue": 780,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "Checking"
          },
          {
            "id": "asset-65f5cb0a-fc70-42e1-a468-2185cb6b3952",
            "category": "Bank or financial account",
            "description": "Wells Fargo savings",
            "estimatedValue": 1100,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "Savings"
          },
          {
            "id": "asset-e575625f-b90c-4a4d-a4ac-60fc23f4447b",
            "category": "Retirement or pension account",
            "description": "Small rollover IRA",
            "estimatedValue": 14600,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "IRA"
          },
          {
            "id": "asset-97066853-56c3-4e53-b0ad-af8346f1cf84",
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
            "id": "income-f194ee1c-e426-4c1c-9f29-cecb25dac5da",
            "source": "Social Security / public benefits",
            "employer": "Social Security Administration",
            "amount": 1980,
            "frequency": "Monthly",
            "sixMonthTotal": 11880
          },
          {
            "id": "income-e7a12b21-ad2e-431c-a1dd-105ad4b8fab8",
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
            "id": "expense-36bd4301-08e6-4f31-9221-0824d58e3019",
            "category": "Rent or home/mortgage payment",
            "monthlyAmount": 1180,
            "notes": ""
          },
          {
            "id": "expense-988d7277-6da9-41bc-9cd2-752acef27df0",
            "category": "Electricity, heat, natural gas",
            "monthlyAmount": 120,
            "notes": ""
          },
          {
            "id": "expense-eb91d97b-f356-440e-beb5-034fe530540d",
            "category": "Phone, cell, internet, satellite & cable",
            "monthlyAmount": 135,
            "notes": ""
          },
          {
            "id": "expense-10a3805c-0ca8-4098-86f9-b2d1901bd452",
            "category": "Food & housekeeping supplies",
            "monthlyAmount": 425,
            "notes": ""
          },
          {
            "id": "expense-4dd29a83-0649-4057-956f-738e092b98f0",
            "category": "Medical & dental expenses",
            "monthlyAmount": 220,
            "notes": ""
          },
          {
            "id": "expense-105dbd24-aca4-42be-81ba-64ad822f0bb6",
            "category": "Transportation",
            "monthlyAmount": 160,
            "notes": ""
          },
          {
            "id": "expense-0ba23506-acf7-4de1-a9e6-bb5fdcb76558",
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
                "id": "fa-entry-ea07a3b6-e75d-4715-91cd-ecb49a07ab84",
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
                "id": "fa-entry-792b2cc4-3aa4-4459-b4b6-dae1c2dd3a13",
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
      "submittedAt": "2026-07-13T20:03:52.546Z"
    },
    {
      "completion": {
        "bundle": {
          "bundleVersion": 2,
          "generatedAt": "2026-07-13T20:03:52.546Z",
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
      "generatedAt": "2026-07-13T20:03:52.546Z",
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
        "personalInfoSubmittedAt": "2026-07-13T20:03:52.546Z",
        "createdAt": "2026-07-13T20:03:53.847Z",
        "updatedAt": "2026-07-13T20:03:52.546Z",
        "debtors": [
          {
            "id": "debtor-3805210e-81f2-4e35-9e9f-163cd2fa937a",
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
            "id": "asset-0cabb15a-976c-4bb9-9f95-1dc4138b87d2",
            "category": "Bank or financial account",
            "description": "Canvas Credit Union checking",
            "estimatedValue": 420,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "Checking"
          },
          {
            "id": "asset-b8766ca1-53fc-4dbc-876d-7e432f0fa51c",
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
            "id": "asset-a5370d60-01c3-4a30-832b-309025ab3522",
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
            "id": "income-2a2b972c-89a1-4455-9abb-0aa5758b49a0",
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
            "id": "expense-5f9f3e6b-3573-4ba0-93a2-20eec1236140",
            "category": "Rent or home/mortgage payment",
            "monthlyAmount": 1390,
            "notes": ""
          },
          {
            "id": "expense-6f0b17b4-60f4-48b7-9230-a33aa915fe88",
            "category": "Electricity, heat, natural gas",
            "monthlyAmount": 165,
            "notes": ""
          },
          {
            "id": "expense-aa969477-d092-412b-b688-361c3dba7fe8",
            "category": "Phone, cell, internet, satellite & cable",
            "monthlyAmount": 155,
            "notes": ""
          },
          {
            "id": "expense-cffc26f9-5844-4ad8-a0f5-6c99e1956197",
            "category": "Food & housekeeping supplies",
            "monthlyAmount": 540,
            "notes": ""
          },
          {
            "id": "expense-3c769258-e1f5-426c-81bc-99a0ed665f60",
            "category": "Medical & dental expenses",
            "monthlyAmount": 95,
            "notes": ""
          },
          {
            "id": "expense-c1ee742d-775e-4b59-9f5d-83384e0128fe",
            "category": "Transportation",
            "monthlyAmount": 385,
            "notes": ""
          },
          {
            "id": "expense-4c0c2599-51a8-4bf4-996e-8cf204758719",
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
                "id": "fa-entry-d6fb7c7e-fa2c-47c3-ab38-7a28dec77c58",
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
                "id": "fa-entry-d660f4b5-b8b6-4f15-b05c-37fd6c697aec",
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
                "id": "fa-entry-30f0aa5d-18a3-4c81-b716-4c2af89dfbb6",
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
      "submittedAt": "2026-07-13T20:03:52.546Z"
    },
    {
      "completion": {
        "bundle": {
          "bundleVersion": 2,
          "generatedAt": "2026-07-13T20:03:52.546Z",
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
      "generatedAt": "2026-07-13T20:03:52.546Z",
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
        "personalInfoSubmittedAt": "2026-07-13T20:03:52.546Z",
        "createdAt": "2026-07-13T20:03:53.865Z",
        "updatedAt": "2026-07-13T20:03:52.546Z",
        "debtors": [
          {
            "id": "debtor-9562651d-5a98-4b03-aed4-a358a09173cb",
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
            "id": "debtor-f5922fee-a301-4ccc-a1b2-9e67ea1486bd",
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
              "id": "dependent-5f4a74e7-616c-43f9-bddb-383f2596a4c2",
              "name": "Fake child A",
              "age": "9",
              "relationship": "Child",
              "livesWithDebtor": "Yes"
            },
            {
              "id": "dependent-6b23d6a0-86bc-4169-bda6-1eb5250c7e42",
              "name": "Fake child B",
              "age": "4",
              "relationship": "Child",
              "livesWithDebtor": "Yes"
            }
          ]
        },
        "assets": [
          {
            "id": "asset-ae2e7b6d-4554-425a-897f-25a87c35e07a",
            "category": "Bank or financial account",
            "description": "Canvas Credit Union checking",
            "estimatedValue": 420,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "Checking"
          },
          {
            "id": "asset-efc4fb4e-10d0-4eab-8639-4482fabefa3e",
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
            "id": "asset-ee820e6d-5e30-484e-b0a8-849c1116df63",
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
            "id": "income-0d53a345-3529-435a-b1de-d6b052c77b26",
            "source": "Maya wages",
            "employer": "Aurora Medical Billing",
            "amount": 4100,
            "frequency": "Twice monthly",
            "sixMonthTotal": 24600
          },
          {
            "id": "income-872c6969-dada-4bfc-aade-837aaf26252c",
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
            "id": "expense-875c92ca-f7ec-4b40-b90a-12e6fb236a73",
            "category": "Rent or home/mortgage payment",
            "monthlyAmount": 1390,
            "notes": ""
          },
          {
            "id": "expense-66335c9e-9d3c-49a8-8f74-331c2b0c0702",
            "category": "Electricity, heat, natural gas",
            "monthlyAmount": 165,
            "notes": ""
          },
          {
            "id": "expense-bbe24d1c-b34b-4b93-a30d-097dcf650440",
            "category": "Phone, cell, internet, satellite & cable",
            "monthlyAmount": 155,
            "notes": ""
          },
          {
            "id": "expense-4d381466-ddfe-427e-8934-dacb93c42242",
            "category": "Food & housekeeping supplies",
            "monthlyAmount": 540,
            "notes": ""
          },
          {
            "id": "expense-06e87150-2025-482c-ae2c-e89406cdadbc",
            "category": "Medical & dental expenses",
            "monthlyAmount": 95,
            "notes": ""
          },
          {
            "id": "expense-00b75ef0-51a1-4b24-91ba-27e7f84d16e1",
            "category": "Transportation",
            "monthlyAmount": 385,
            "notes": ""
          },
          {
            "id": "expense-02246120-a605-420a-b64e-db88f0334d0e",
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
                "id": "fa-entry-d6fb7c7e-fa2c-47c3-ab38-7a28dec77c58",
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
                "id": "fa-entry-e256f175-27f1-4597-bf9c-7445072a3f3d",
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
      "submittedAt": "2026-07-13T20:03:52.546Z"
    },
    {
      "completion": {
        "bundle": {
          "bundleVersion": 2,
          "generatedAt": "2026-07-13T20:03:52.546Z",
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
      "generatedAt": "2026-07-13T20:03:52.546Z",
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
        "personalInfoSubmittedAt": "2026-07-13T20:03:52.546Z",
        "createdAt": "2026-07-13T20:03:53.881Z",
        "updatedAt": "2026-07-13T20:03:52.546Z",
        "debtors": [
          {
            "id": "debtor-27ab8b55-b5c9-4c6b-967b-6379d9da75c3",
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
            "id": "asset-0d7b009c-32bd-44fb-995a-44625b8e634e",
            "category": "Bank or financial account",
            "description": "Canvas Credit Union checking",
            "estimatedValue": 420,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "Checking"
          },
          {
            "id": "asset-0b88c07c-a5de-48ba-91b2-095d252fd07d",
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
            "id": "asset-e14c3beb-ea1b-48b9-9425-40938ef7ae85",
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
            "id": "income-fe412117-4b3f-4c54-ab7e-4d0279d4ac49",
            "source": "Employment",
            "employer": "Denver Dental Supply",
            "amount": 2900,
            "frequency": "Biweekly",
            "sixMonthTotal": 17400
          },
          {
            "id": "income-d445a8ff-1db3-44c3-8ae2-a59cebacb9f7",
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
            "id": "expense-ee5803f0-7b90-4e14-b6dd-4bbef4c1f5c3",
            "category": "Rent or home/mortgage payment",
            "monthlyAmount": 1390,
            "notes": ""
          },
          {
            "id": "expense-b184837e-2b20-4c09-b004-ac9abfdcf6c8",
            "category": "Electricity, heat, natural gas",
            "monthlyAmount": 165,
            "notes": ""
          },
          {
            "id": "expense-3adacc35-0ac3-4551-b012-09fa304523d4",
            "category": "Phone, cell, internet, satellite & cable",
            "monthlyAmount": 155,
            "notes": ""
          },
          {
            "id": "expense-e45a1972-e094-4240-91ba-9b42374a041d",
            "category": "Food & housekeeping supplies",
            "monthlyAmount": 540,
            "notes": ""
          },
          {
            "id": "expense-e394a0f1-0452-41e4-877d-43eaefba4163",
            "category": "Medical & dental expenses",
            "monthlyAmount": 95,
            "notes": ""
          },
          {
            "id": "expense-610a34c9-16a1-4829-836c-6dee540365f2",
            "category": "Transportation",
            "monthlyAmount": 385,
            "notes": ""
          },
          {
            "id": "expense-4bd6a51b-92ad-44d8-ab14-765fb5980986",
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
                "id": "fa-entry-d6fb7c7e-fa2c-47c3-ab38-7a28dec77c58",
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
      "submittedAt": "2026-07-13T20:03:52.546Z"
    },
    {
      "completion": {
        "bundle": {
          "bundleVersion": 2,
          "generatedAt": "2026-07-13T20:03:52.546Z",
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
      "generatedAt": "2026-07-13T20:03:52.546Z",
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
        "personalInfoSubmittedAt": "2026-07-13T20:03:52.546Z",
        "createdAt": "2026-07-13T20:03:53.897Z",
        "updatedAt": "2026-07-13T20:03:52.546Z",
        "debtors": [
          {
            "id": "debtor-474f522d-b2fd-48bb-b1e1-30361e1448b6",
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
            "id": "debtor-a143901f-5b7c-4432-90e4-fff20c72d534",
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
              "id": "dependent-f60f1c1d-f448-4cea-bd65-878cda98e132",
              "name": "Fake minor child A",
              "age": "12",
              "relationship": "Child",
              "livesWithDebtor": "Yes"
            },
            {
              "id": "dependent-52a2407a-0304-41a0-83cc-aa80f522f3b1",
              "name": "Fake minor child B",
              "age": "8",
              "relationship": "Child",
              "livesWithDebtor": "Yes"
            }
          ]
        },
        "assets": [
          {
            "id": "asset-72f2e426-9b28-4aec-84de-f174c40d27e4",
            "category": "Bank or financial account",
            "description": "Chase joint checking",
            "estimatedValue": 2150,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "Checking"
          },
          {
            "id": "asset-e1a4ceed-1fde-49e1-9ece-9fe8815af7f3",
            "category": "Retirement or pension account",
            "description": "Daniel 401(k)",
            "estimatedValue": 69000,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "401(k)"
          },
          {
            "id": "asset-00b9c6cc-6007-46fe-bd01-3ee44024df7e",
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
            "id": "income-7bf512ed-5b28-4d88-a0a6-5881962e8d88",
            "source": "Employment",
            "employer": "Metro Facilities Group",
            "amount": 7100,
            "frequency": "Biweekly",
            "sixMonthTotal": 42600
          },
          {
            "id": "income-af239691-5ab1-4572-88eb-a884d3c98ef1",
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
            "id": "expense-6d8ac215-8c1a-460d-80f6-b0530d83a0b2",
            "category": "Housing contribution",
            "monthlyAmount": 1450,
            "notes": "Household contribution; no real estate claimed."
          },
          {
            "id": "expense-31309fb9-4f7d-4242-85fb-1d9c9b2fe48d",
            "category": "Electricity, heat, natural gas",
            "monthlyAmount": 310,
            "notes": ""
          },
          {
            "id": "expense-ade02af5-48ff-46e3-bd74-7871fb8caea3",
            "category": "Water, sewer, garbage collection",
            "monthlyAmount": 115,
            "notes": ""
          },
          {
            "id": "expense-c14f9e4f-4ad9-4d0e-9164-77e8a7f03255",
            "category": "Phone, cell, internet, satellite & cable",
            "monthlyAmount": 245,
            "notes": ""
          },
          {
            "id": "expense-64ede823-2b22-4684-8ebe-c3c3de759724",
            "category": "Food & housekeeping supplies",
            "monthlyAmount": 925,
            "notes": ""
          },
          {
            "id": "expense-dedbf07b-7029-422f-a3c5-1b25f68bd387",
            "category": "Childcare & children education",
            "monthlyAmount": 640,
            "notes": ""
          },
          {
            "id": "expense-abeb36ad-822c-4f1a-aa2f-3afcdfd0f809",
            "category": "Transportation",
            "monthlyAmount": 560,
            "notes": ""
          },
          {
            "id": "expense-01c7ff5f-7843-4138-a8df-08cf24716a97",
            "category": "Vehicle payments",
            "monthlyAmount": 610,
            "notes": ""
          },
          {
            "id": "expense-73cec96f-b997-489a-9504-21c7be79dc3f",
            "category": "Vehicle insurance",
            "monthlyAmount": 220,
            "notes": ""
          },
          {
            "id": "expense-e712c9eb-7c73-45b3-817f-072b3a9ffc7f",
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
                "id": "fa-entry-6017fbbb-9724-4b02-bdfa-439e24154d75",
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
                "id": "fa-entry-96307f4c-9572-4433-ad69-8017853475ab",
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
      "submittedAt": "2026-07-13T20:03:52.546Z"
    },
    {
      "completion": {
        "bundle": {
          "bundleVersion": 2,
          "generatedAt": "2026-07-13T20:03:52.546Z",
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
      "generatedAt": "2026-07-13T20:03:52.546Z",
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
        "personalInfoSubmittedAt": "2026-07-13T20:03:52.546Z",
        "createdAt": "2026-07-13T20:03:53.912Z",
        "updatedAt": "2026-07-13T20:03:52.546Z",
        "debtors": [
          {
            "id": "debtor-9fb0c265-4a5f-4994-9caa-a08fd7fa11b0",
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
            "id": "debtor-053b490a-78c8-4f5b-b55f-80f4db2ccc91",
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
              "id": "dependent-c3601ea1-d649-421d-b1e4-f042b8a3c16a",
              "name": "Fake minor child A",
              "age": "12",
              "relationship": "Child",
              "livesWithDebtor": "Yes"
            },
            {
              "id": "dependent-26c7bdd4-df3c-4505-a4b4-9ab699c78ca7",
              "name": "Fake minor child B",
              "age": "8",
              "relationship": "Child",
              "livesWithDebtor": "Yes"
            }
          ]
        },
        "assets": [
          {
            "id": "asset-5f84c572-a524-4581-ab6f-6d5e993130b6",
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
            "id": "asset-5cbca414-9f16-4b57-a733-dddeb874b305",
            "category": "Bank or financial account",
            "description": "Chase joint checking",
            "estimatedValue": 2150,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "Checking"
          },
          {
            "id": "asset-a7590006-8d63-429d-9a9d-77bb7801c5f8",
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
            "id": "income-5cdf5a37-e51e-455d-ac3c-6496da1eb845",
            "source": "Employment",
            "employer": "Metro Facilities Group",
            "amount": 7100,
            "frequency": "Biweekly",
            "sixMonthTotal": 42600
          },
          {
            "id": "income-08087c2f-805a-46fb-bfca-54cadda34411",
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
            "id": "expense-736e4eb4-e1e0-443c-9dc1-67f43e2afd72",
            "category": "Rent",
            "monthlyAmount": 2100,
            "notes": "Rental residence involved in eviction case."
          },
          {
            "id": "expense-40d43652-953d-4685-acd1-a19fe7a3f945",
            "category": "Electricity, heat, natural gas",
            "monthlyAmount": 310,
            "notes": ""
          },
          {
            "id": "expense-167d8c06-98f8-4c8a-adcd-744bbf0cae18",
            "category": "Water, sewer, garbage collection",
            "monthlyAmount": 115,
            "notes": ""
          },
          {
            "id": "expense-4ab50e3a-5d15-40be-b3ad-41d39ac6557c",
            "category": "Phone, cell, internet, satellite & cable",
            "monthlyAmount": 245,
            "notes": ""
          },
          {
            "id": "expense-2524a27b-81d6-4498-803b-5cebf8702bb5",
            "category": "Food & housekeeping supplies",
            "monthlyAmount": 925,
            "notes": ""
          },
          {
            "id": "expense-48bd3989-d30e-48d3-a75d-7eae475c9802",
            "category": "Childcare & children education",
            "monthlyAmount": 640,
            "notes": ""
          },
          {
            "id": "expense-4abd4caa-76a0-4f24-bed0-97a40b9e581b",
            "category": "Transportation",
            "monthlyAmount": 560,
            "notes": ""
          },
          {
            "id": "expense-70e4a104-9f3d-48af-8700-70dd5db6608e",
            "category": "Vehicle payments",
            "monthlyAmount": 610,
            "notes": ""
          },
          {
            "id": "expense-21b5cc70-daa1-419e-a50f-49e76a077bba",
            "category": "Vehicle insurance",
            "monthlyAmount": 220,
            "notes": ""
          },
          {
            "id": "expense-76d252ff-ab64-4cc3-95dd-e17d0256d015",
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
                "id": "fa-entry-d657ad31-64ea-4701-b0b0-62691a9dad7c",
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
                "id": "fa-entry-cc54cf7c-d1a7-45b5-9390-47fc97d1903f",
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
      "submittedAt": "2026-07-13T20:03:52.546Z"
    },
    {
      "completion": {
        "bundle": {
          "bundleVersion": 2,
          "generatedAt": "2026-07-13T20:03:52.546Z",
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
      "generatedAt": "2026-07-13T20:03:52.546Z",
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
        "personalInfoSubmittedAt": "2026-07-13T20:03:52.546Z",
        "createdAt": "2026-07-13T20:03:53.928Z",
        "updatedAt": "2026-07-13T20:03:52.546Z",
        "debtors": [
          {
            "id": "debtor-09847c00-a059-4e5a-b690-98c5f77897bc",
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
            "id": "asset-a681c6f7-6ed7-44dc-86df-543bfdab9ed1",
            "category": "Bank or financial account",
            "description": "Wells Fargo checking",
            "estimatedValue": 780,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "Checking"
          },
          {
            "id": "asset-dfdf225a-7559-429c-91d3-c51592433ac5",
            "category": "Bank or financial account",
            "description": "Wells Fargo savings",
            "estimatedValue": 1100,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "Savings"
          },
          {
            "id": "asset-0b4b440b-0e4a-41b6-8904-1ea20a32eb0a",
            "category": "Retirement or pension account",
            "description": "Small rollover IRA",
            "estimatedValue": 14600,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "IRA"
          },
          {
            "id": "asset-3a52093b-9c73-431d-b63c-8a980fc3b1f4",
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
            "id": "income-07ba64f5-65a4-49ef-880b-ee1008dd6558",
            "source": "Social Security / public benefits",
            "employer": "Social Security Administration",
            "amount": 1980,
            "frequency": "Monthly",
            "sixMonthTotal": 11880
          },
          {
            "id": "income-342b41fa-d4b1-4d85-bd47-335468a0f72e",
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
            "id": "expense-227968ba-c54b-44ad-a367-f2084a0ccc6a",
            "category": "Rent or home/mortgage payment",
            "monthlyAmount": 1180,
            "notes": ""
          },
          {
            "id": "expense-00ae1113-e9ed-4795-a7bd-d8ca2675ee9c",
            "category": "Electricity, heat, natural gas",
            "monthlyAmount": 120,
            "notes": ""
          },
          {
            "id": "expense-b6e6ea20-ce4c-475f-9354-a46839c80ccf",
            "category": "Phone, cell, internet, satellite & cable",
            "monthlyAmount": 135,
            "notes": ""
          },
          {
            "id": "expense-f53ccd08-1f43-4861-a6dc-f6c2dfa8f621",
            "category": "Food & housekeeping supplies",
            "monthlyAmount": 425,
            "notes": ""
          },
          {
            "id": "expense-1f08ffb9-ef51-45b3-9725-8a43f53ccfc5",
            "category": "Medical & dental expenses",
            "monthlyAmount": 220,
            "notes": ""
          },
          {
            "id": "expense-3d7c459b-8f6b-48f9-b479-28b07a49fab9",
            "category": "Transportation",
            "monthlyAmount": 160,
            "notes": ""
          },
          {
            "id": "expense-9c450629-d696-4c9e-890d-c613bbd0d4ee",
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
                "id": "fa-entry-ea07a3b6-e75d-4715-91cd-ecb49a07ab84",
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
                "id": "fa-entry-361194bb-d888-43d1-bdc2-132571e63fa4",
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
                "id": "fa-entry-36842279-a543-46e3-b1de-382e372b8bf3",
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
                "id": "fa-entry-792b2cc4-3aa4-4459-b4b6-dae1c2dd3a13",
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
      "submittedAt": "2026-07-13T20:03:52.546Z"
    },
    {
      "completion": {
        "bundle": {
          "bundleVersion": 2,
          "generatedAt": "2026-07-13T20:03:52.546Z",
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
      "generatedAt": "2026-07-13T20:03:52.546Z",
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
        "personalInfoSubmittedAt": "2026-07-13T20:03:52.546Z",
        "createdAt": "2026-07-13T20:03:53.944Z",
        "updatedAt": "2026-07-13T20:03:52.546Z",
        "debtors": [
          {
            "id": "debtor-2b3f5e03-59d6-4208-8ab6-f47a8622b62c",
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
            "id": "asset-f0ce2c75-a210-400f-a0e6-dcd35a002dcd",
            "category": "Bank or financial account",
            "description": "Wells Fargo checking",
            "estimatedValue": 780,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "Checking"
          },
          {
            "id": "asset-5c293ec5-0389-45cd-beb6-2fa77d1363ce",
            "category": "Bank or financial account",
            "description": "Wells Fargo savings",
            "estimatedValue": 1100,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "Savings"
          },
          {
            "id": "asset-9fe8c591-eb2e-48d3-b575-7dc528900103",
            "category": "Retirement or pension account",
            "description": "Small rollover IRA",
            "estimatedValue": 14600,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "IRA"
          },
          {
            "id": "asset-d69951a7-61d0-4da5-b40d-5f9b91657ad0",
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
            "id": "income-2fe0421d-16df-4b8f-8b45-1409196e82a2",
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
            "id": "expense-34166131-775a-4b61-8fb5-ec0c60c02e1e",
            "category": "Rent or home/mortgage payment",
            "monthlyAmount": 1180,
            "notes": ""
          },
          {
            "id": "expense-388f9759-3a28-4ed3-aa79-29094b06a97f",
            "category": "Electricity, heat, natural gas",
            "monthlyAmount": 120,
            "notes": ""
          },
          {
            "id": "expense-dcd56496-e17e-4068-b94e-c330d2e23431",
            "category": "Phone, cell, internet, satellite & cable",
            "monthlyAmount": 135,
            "notes": ""
          },
          {
            "id": "expense-a87cb1a4-179b-41eb-871a-c0944c2b1201",
            "category": "Food & housekeeping supplies",
            "monthlyAmount": 425,
            "notes": ""
          },
          {
            "id": "expense-de8ead49-f28f-4b1d-8c48-18befa65cff9",
            "category": "Medical & dental expenses",
            "monthlyAmount": 220,
            "notes": ""
          },
          {
            "id": "expense-530a787e-c2d5-4567-a561-0cbfb16da435",
            "category": "Transportation",
            "monthlyAmount": 160,
            "notes": ""
          },
          {
            "id": "expense-53660320-6da3-489e-a9f1-39e333ca593d",
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
                "id": "fa-entry-82bb58aa-f4bf-42aa-a265-6fec5db34ba5",
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
                "id": "fa-entry-792b2cc4-3aa4-4459-b4b6-dae1c2dd3a13",
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
      "submittedAt": "2026-07-13T20:03:52.546Z"
    }
  ],
  "schemaVersion": 1,
  "source": "BK FastLane Intake incomplete debtor entry agent"
};
