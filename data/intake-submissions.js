window.BKFL_INTAKE_SUBMISSIONS = {
  "demo": true,
  "generatedAt": "2026-07-13T19:58:55.620Z",
  "packages": [
    {
      "completion": {
        "bundle": {
          "bundleVersion": 2,
          "generatedAt": "2026-07-13T19:58:55.620Z",
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
      "generatedAt": "2026-07-13T19:58:55.620Z",
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
        "personalInfoSubmittedAt": "2026-07-13T19:58:55.620Z",
        "createdAt": "2026-07-13T19:58:56.738Z",
        "updatedAt": "2026-07-13T19:58:55.620Z",
        "debtors": [
          {
            "id": "debtor-bec90db3-0245-4573-84a1-a5340d9095a8",
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
            "id": "asset-5dccb490-9e86-4471-8099-a67ed93898fe",
            "category": "Bank or financial account",
            "description": "Canvas Credit Union checking",
            "estimatedValue": 420,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "Checking"
          },
          {
            "id": "asset-7cf360a8-9ed1-4e72-8161-a948c1e14cc2",
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
            "id": "asset-ac07c6ca-29c1-41c0-8614-9071f03de83d",
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
            "id": "income-c108d2d3-3257-4a7e-b0b7-73e27a25e04d",
            "source": "Employment",
            "employer": "Denver Dental Supply",
            "amount": 2900,
            "frequency": "Biweekly",
            "sixMonthTotal": 17400
          },
          {
            "id": "income-4f31aa02-a571-4442-8314-9ef4aed56e99",
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
            "id": "expense-6a415c93-14a5-4022-b8c9-6df1e2cb3c52",
            "category": "Rent or home/mortgage payment",
            "monthlyAmount": 1390,
            "notes": ""
          },
          {
            "id": "expense-7ee65886-b4fb-4a35-bccb-d2d65dbd679d",
            "category": "Electricity, heat, natural gas",
            "monthlyAmount": 165,
            "notes": ""
          },
          {
            "id": "expense-04c573a5-de37-475f-b537-572f02e0da64",
            "category": "Phone, cell, internet, satellite & cable",
            "monthlyAmount": 155,
            "notes": ""
          },
          {
            "id": "expense-d60a38c0-165f-44a9-875f-483d1c86837f",
            "category": "Food & housekeeping supplies",
            "monthlyAmount": 540,
            "notes": ""
          },
          {
            "id": "expense-ca28f6ac-7544-4d7d-a380-e5270b7bedc2",
            "category": "Medical & dental expenses",
            "monthlyAmount": 95,
            "notes": ""
          },
          {
            "id": "expense-56db0dd4-6ed9-4016-b45d-490894ca5995",
            "category": "Transportation",
            "monthlyAmount": 385,
            "notes": ""
          },
          {
            "id": "expense-efe756d9-2189-48bb-9525-f3f719fe41a1",
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
                "id": "fa-entry-5ef4f72c-6667-4f4c-98d2-4cf3c5e3a6e6",
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
      "submittedAt": "2026-07-13T19:58:55.620Z"
    },
    {
      "completion": {
        "bundle": {
          "bundleVersion": 2,
          "generatedAt": "2026-07-13T19:58:55.620Z",
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
      "generatedAt": "2026-07-13T19:58:55.620Z",
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
        "personalInfoSubmittedAt": "2026-07-13T19:58:55.620Z",
        "createdAt": "2026-07-13T19:58:56.769Z",
        "updatedAt": "2026-07-13T19:58:55.620Z",
        "debtors": [
          {
            "id": "debtor-b1a9f83b-33b3-4af2-9049-653bc010ff0c",
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
            "id": "debtor-93001010-d347-445e-94ea-7db4de0751ac",
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
              "id": "dependent-8bad0dc6-e90e-4ce6-b819-c5a9abebcd2b",
              "name": "Fake minor child A",
              "age": "12",
              "relationship": "Child",
              "livesWithDebtor": "Yes"
            },
            {
              "id": "dependent-db1e5d21-30f8-4180-bd95-f8257fde775b",
              "name": "Fake minor child B",
              "age": "8",
              "relationship": "Child",
              "livesWithDebtor": "Yes"
            }
          ]
        },
        "assets": [
          {
            "id": "asset-cb403396-ce9d-45ab-9bd6-18e0f7ab701b",
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
            "id": "asset-b91c0aa6-1041-46aa-b2a9-bd57e9ba7c6d",
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
            "id": "asset-a2257bbd-cc18-4f98-912d-b12f00b5a5f5",
            "category": "Bank or financial account",
            "description": "Chase joint checking",
            "estimatedValue": 2150,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "Checking"
          },
          {
            "id": "asset-02b09bf0-ce6a-4521-9a8b-33af3006c533",
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
            "id": "income-21161230-9b65-48e1-a291-0cde8c4847b3",
            "source": "Employment",
            "employer": "Metro Facilities Group",
            "amount": 7100,
            "frequency": "Biweekly",
            "sixMonthTotal": 42600
          },
          {
            "id": "income-9f6a0936-3208-4779-a23a-af908b18d4dc",
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
            "id": "expense-52153f69-9348-4c51-a61c-d55e0dac0021",
            "category": "Mortgage payment",
            "monthlyAmount": 2680,
            "notes": ""
          },
          {
            "id": "expense-d0350307-3b1b-4f13-8c6b-ce3dfe3a2d54",
            "category": "Electricity, heat, natural gas",
            "monthlyAmount": 310,
            "notes": ""
          },
          {
            "id": "expense-e78b6a33-9592-4e81-8c0c-82f09b2150cc",
            "category": "Water, sewer, garbage collection",
            "monthlyAmount": 115,
            "notes": ""
          },
          {
            "id": "expense-bacae5fb-ac93-493a-a3a6-5ac6ba0f2a43",
            "category": "Phone, cell, internet, satellite & cable",
            "monthlyAmount": 245,
            "notes": ""
          },
          {
            "id": "expense-dfc0f941-24fe-4c4d-b322-472d0c51dd0b",
            "category": "Food & housekeeping supplies",
            "monthlyAmount": 925,
            "notes": ""
          },
          {
            "id": "expense-126e66a4-9a4c-44d2-8814-1f0106dc29a2",
            "category": "Childcare & children education",
            "monthlyAmount": 640,
            "notes": ""
          },
          {
            "id": "expense-2f8b54df-4ad1-46c1-b814-6c17a6de0f45",
            "category": "Transportation",
            "monthlyAmount": 560,
            "notes": ""
          },
          {
            "id": "expense-d8c60abe-decb-4089-938d-3a707157b5dc",
            "category": "Vehicle payments",
            "monthlyAmount": 610,
            "notes": ""
          },
          {
            "id": "expense-f4b795f3-ce82-4b73-bad5-2569e013a6ba",
            "category": "Vehicle insurance",
            "monthlyAmount": 220,
            "notes": ""
          },
          {
            "id": "expense-130ba8cd-f513-4883-aae3-f21a923e72ff",
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
                "id": "fa-entry-5b2c3800-292d-4465-b0af-d85609e5a6dd",
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
                "id": "fa-entry-6800bfe8-fcac-42df-aa55-ad496f1a739e",
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
                "id": "fa-entry-e8b8601b-a02c-4254-a835-35439893cea9",
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
      "submittedAt": "2026-07-13T19:58:55.620Z"
    },
    {
      "completion": {
        "bundle": {
          "bundleVersion": 2,
          "generatedAt": "2026-07-13T19:58:55.620Z",
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
      "generatedAt": "2026-07-13T19:58:55.620Z",
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
        "personalInfoSubmittedAt": "2026-07-13T19:58:55.620Z",
        "createdAt": "2026-07-13T19:58:56.784Z",
        "updatedAt": "2026-07-13T19:58:55.620Z",
        "debtors": [
          {
            "id": "debtor-a93dbf8e-2f36-4590-87bb-25376ac0a3e5",
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
            "id": "asset-f361ed5b-15f6-4318-8aea-ee44b84fddcd",
            "category": "Bank or financial account",
            "description": "Wells Fargo checking",
            "estimatedValue": 780,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "Checking"
          },
          {
            "id": "asset-1e49a2eb-bd3a-4e32-b8d6-60de2d229351",
            "category": "Bank or financial account",
            "description": "Wells Fargo savings",
            "estimatedValue": 1100,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "Savings"
          },
          {
            "id": "asset-dae95279-d1a2-4e33-a5fa-f0a9427c44e4",
            "category": "Retirement or pension account",
            "description": "Small rollover IRA",
            "estimatedValue": 14600,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "IRA"
          },
          {
            "id": "asset-a95421a8-40b1-4978-8d6d-15f5c4a9db0a",
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
            "id": "income-9b747262-5ffc-461b-9e58-3da65fb153b9",
            "source": "Social Security / public benefits",
            "employer": "Social Security Administration",
            "amount": 1980,
            "frequency": "Monthly",
            "sixMonthTotal": 11880
          },
          {
            "id": "income-98b8a397-4833-45fa-a1a2-005ab92cc6aa",
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
            "id": "expense-8e5e59d5-7395-450b-a021-896220280f5b",
            "category": "Rent or home/mortgage payment",
            "monthlyAmount": 1180,
            "notes": ""
          },
          {
            "id": "expense-99b8b85a-9816-403b-b0e7-5e9e62f79b04",
            "category": "Electricity, heat, natural gas",
            "monthlyAmount": 120,
            "notes": ""
          },
          {
            "id": "expense-2a943369-d141-44c9-82f0-37f6fbffc190",
            "category": "Phone, cell, internet, satellite & cable",
            "monthlyAmount": 135,
            "notes": ""
          },
          {
            "id": "expense-914ba1a4-7c70-48d7-a37a-89ac2ba88cb0",
            "category": "Food & housekeeping supplies",
            "monthlyAmount": 425,
            "notes": ""
          },
          {
            "id": "expense-bf3cc9e9-0801-423f-9d1a-edecb24cae82",
            "category": "Medical & dental expenses",
            "monthlyAmount": 220,
            "notes": ""
          },
          {
            "id": "expense-5acd1612-9277-4a13-b45d-95b9b2bfc8ce",
            "category": "Transportation",
            "monthlyAmount": 160,
            "notes": ""
          },
          {
            "id": "expense-b201a1a6-91b4-4012-96ee-f28eb228d16e",
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
                "id": "fa-entry-5c63367f-f947-4df3-9aea-9e4e2657bda8",
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
                "id": "fa-entry-cd0c1e50-3fc6-452b-9b2d-b50970bb7011",
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
      "submittedAt": "2026-07-13T19:58:55.620Z"
    },
    {
      "completion": {
        "bundle": {
          "bundleVersion": 2,
          "generatedAt": "2026-07-13T19:58:55.620Z",
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
      "generatedAt": "2026-07-13T19:58:55.620Z",
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
        "personalInfoSubmittedAt": "2026-07-13T19:58:55.620Z",
        "createdAt": "2026-07-13T19:58:56.799Z",
        "updatedAt": "2026-07-13T19:58:55.620Z",
        "debtors": [
          {
            "id": "debtor-62038c13-72fc-4df1-900b-6e3bfc56349a",
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
            "id": "asset-a5f60f01-a2ba-499f-8bc6-2ad711a8b1bb",
            "category": "Bank or financial account",
            "description": "Canvas Credit Union checking",
            "estimatedValue": 420,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "Checking"
          },
          {
            "id": "asset-f72c2a53-9c18-45a7-b3f0-7cbb9e0de087",
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
            "id": "asset-f8ccc027-6c3b-4d7c-9de7-e2a32c68af92",
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
            "id": "income-46cba82a-8198-4dc7-ad7a-f64ccac0d8de",
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
            "id": "expense-b001ca29-987d-4f5c-ba04-8ae4632c9c49",
            "category": "Rent or home/mortgage payment",
            "monthlyAmount": 1390,
            "notes": ""
          },
          {
            "id": "expense-6a43bef7-8204-4c9e-8005-8e2a52bc0067",
            "category": "Electricity, heat, natural gas",
            "monthlyAmount": 165,
            "notes": ""
          },
          {
            "id": "expense-ee846476-143f-4510-9d2e-22337fcd4778",
            "category": "Phone, cell, internet, satellite & cable",
            "monthlyAmount": 155,
            "notes": ""
          },
          {
            "id": "expense-73243e75-c368-462f-a48d-0cc83dbc4d6f",
            "category": "Food & housekeeping supplies",
            "monthlyAmount": 540,
            "notes": ""
          },
          {
            "id": "expense-3ba0cd3f-f873-46dd-99b4-a9a518b72f4c",
            "category": "Medical & dental expenses",
            "monthlyAmount": 95,
            "notes": ""
          },
          {
            "id": "expense-be49a25f-b22b-44fa-9e3b-c1d2ec6655ed",
            "category": "Transportation",
            "monthlyAmount": 385,
            "notes": ""
          },
          {
            "id": "expense-75bc154e-64f7-4bf8-b23e-7188eaea5972",
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
                "id": "fa-entry-5ef4f72c-6667-4f4c-98d2-4cf3c5e3a6e6",
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
                "id": "fa-entry-3bd58eaf-c528-4eb6-b898-efa46d29a818",
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
                "id": "fa-entry-b76d129f-b4e2-48b8-8d15-0acbd69eb2df",
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
      "submittedAt": "2026-07-13T19:58:55.620Z"
    },
    {
      "completion": {
        "bundle": {
          "bundleVersion": 2,
          "generatedAt": "2026-07-13T19:58:55.620Z",
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
      "generatedAt": "2026-07-13T19:58:55.620Z",
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
        "personalInfoSubmittedAt": "2026-07-13T19:58:55.620Z",
        "createdAt": "2026-07-13T19:58:56.813Z",
        "updatedAt": "2026-07-13T19:58:55.620Z",
        "debtors": [
          {
            "id": "debtor-b7d9fa95-f570-4aff-89db-48d9b8dbe85b",
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
            "id": "debtor-9e18b1de-2b2e-486b-8d08-fd71e46a9a65",
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
              "id": "dependent-6375ba54-4459-4cec-a86e-ae0c5a09e910",
              "name": "Fake child A",
              "age": "9",
              "relationship": "Child",
              "livesWithDebtor": "Yes"
            },
            {
              "id": "dependent-e8c340bf-2d49-4f6a-902a-72aca0937438",
              "name": "Fake child B",
              "age": "4",
              "relationship": "Child",
              "livesWithDebtor": "Yes"
            }
          ]
        },
        "assets": [
          {
            "id": "asset-de0eabae-fbaf-448d-a532-f8602135fe90",
            "category": "Bank or financial account",
            "description": "Canvas Credit Union checking",
            "estimatedValue": 420,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "Checking"
          },
          {
            "id": "asset-e94e2ea1-9006-4609-9aea-3c9f359cd452",
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
            "id": "asset-488ae808-3b28-4441-9c8b-a73e362fcda6",
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
            "id": "income-ee87851a-627c-4ea0-8eff-15ef7c30b5d7",
            "source": "Maya wages",
            "employer": "Aurora Medical Billing",
            "amount": 4100,
            "frequency": "Twice monthly",
            "sixMonthTotal": 24600
          },
          {
            "id": "income-7b4dfe4c-e53a-441f-a5ca-db0e6f2a3ee6",
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
            "id": "expense-b3c833d0-4636-4570-884d-22a621a9ef21",
            "category": "Rent or home/mortgage payment",
            "monthlyAmount": 1390,
            "notes": ""
          },
          {
            "id": "expense-497834c8-2804-46d5-b867-56186c787572",
            "category": "Electricity, heat, natural gas",
            "monthlyAmount": 165,
            "notes": ""
          },
          {
            "id": "expense-40c14a99-8be6-472f-b8c7-e09962e9d42b",
            "category": "Phone, cell, internet, satellite & cable",
            "monthlyAmount": 155,
            "notes": ""
          },
          {
            "id": "expense-7bb6abcf-8693-4a30-af3a-d6b744b10a61",
            "category": "Food & housekeeping supplies",
            "monthlyAmount": 540,
            "notes": ""
          },
          {
            "id": "expense-0ab53574-7b44-4093-9313-25ffc8cf3432",
            "category": "Medical & dental expenses",
            "monthlyAmount": 95,
            "notes": ""
          },
          {
            "id": "expense-00f7bea8-89ff-4eab-981c-45e23a55ad81",
            "category": "Transportation",
            "monthlyAmount": 385,
            "notes": ""
          },
          {
            "id": "expense-2f88fe5e-8657-4876-9802-4264abc79193",
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
                "id": "fa-entry-5ef4f72c-6667-4f4c-98d2-4cf3c5e3a6e6",
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
                "id": "fa-entry-6eb2a734-55e0-451d-b8be-8b36130e70db",
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
      "submittedAt": "2026-07-13T19:58:55.620Z"
    },
    {
      "completion": {
        "bundle": {
          "bundleVersion": 2,
          "generatedAt": "2026-07-13T19:58:55.620Z",
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
      "generatedAt": "2026-07-13T19:58:55.620Z",
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
        "personalInfoSubmittedAt": "2026-07-13T19:58:55.620Z",
        "createdAt": "2026-07-13T19:58:56.828Z",
        "updatedAt": "2026-07-13T19:58:55.620Z",
        "debtors": [
          {
            "id": "debtor-d5f1b82c-54cf-4417-97c9-c95487f9a922",
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
            "id": "asset-bce84e0a-03a7-4474-b6d8-9aee61f72eed",
            "category": "Bank or financial account",
            "description": "Canvas Credit Union checking",
            "estimatedValue": 420,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "Checking"
          },
          {
            "id": "asset-ad3333a2-1c12-4cef-81be-ddc8d6e93d86",
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
            "id": "asset-3d07819b-6672-49da-977d-08bc6b645b2e",
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
            "id": "income-d903ef8b-2069-4d3f-8b8d-d74a04325884",
            "source": "Employment",
            "employer": "Denver Dental Supply",
            "amount": 2900,
            "frequency": "Biweekly",
            "sixMonthTotal": 17400
          },
          {
            "id": "income-42056c31-d446-4bef-9210-f6ed485d30ab",
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
            "id": "expense-3832a6f2-0fb8-4f75-a56d-ddfb682f1f42",
            "category": "Rent or home/mortgage payment",
            "monthlyAmount": 1390,
            "notes": ""
          },
          {
            "id": "expense-101dfa71-5534-4461-8724-6f9d7a41fe5c",
            "category": "Electricity, heat, natural gas",
            "monthlyAmount": 165,
            "notes": ""
          },
          {
            "id": "expense-d509255f-9527-469d-83fa-0be456a408e6",
            "category": "Phone, cell, internet, satellite & cable",
            "monthlyAmount": 155,
            "notes": ""
          },
          {
            "id": "expense-ab8c9465-1eec-4398-86a7-2aedd96c5bd7",
            "category": "Food & housekeeping supplies",
            "monthlyAmount": 540,
            "notes": ""
          },
          {
            "id": "expense-70b13a5f-42c6-4867-b0b2-bf6935da4e0b",
            "category": "Medical & dental expenses",
            "monthlyAmount": 95,
            "notes": ""
          },
          {
            "id": "expense-24a8cc87-d2d6-47ac-9fad-6f0c13108297",
            "category": "Transportation",
            "monthlyAmount": 385,
            "notes": ""
          },
          {
            "id": "expense-1421d23c-0dec-4250-9c19-04e381fef06e",
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
                "id": "fa-entry-5ef4f72c-6667-4f4c-98d2-4cf3c5e3a6e6",
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
      "submittedAt": "2026-07-13T19:58:55.620Z"
    },
    {
      "completion": {
        "bundle": {
          "bundleVersion": 2,
          "generatedAt": "2026-07-13T19:58:55.620Z",
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
      "generatedAt": "2026-07-13T19:58:55.620Z",
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
        "personalInfoSubmittedAt": "2026-07-13T19:58:55.620Z",
        "createdAt": "2026-07-13T19:58:56.842Z",
        "updatedAt": "2026-07-13T19:58:55.620Z",
        "debtors": [
          {
            "id": "debtor-25fa7e2d-0f11-4030-8811-ee95b1298067",
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
            "id": "debtor-9de270ca-02f1-4fe3-a903-b0fcb0fe7443",
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
              "id": "dependent-887e195e-cb15-4280-906c-c7d2a5224e97",
              "name": "Fake minor child A",
              "age": "12",
              "relationship": "Child",
              "livesWithDebtor": "Yes"
            },
            {
              "id": "dependent-60e5ef58-bd9f-4460-ad7c-eaa15331221d",
              "name": "Fake minor child B",
              "age": "8",
              "relationship": "Child",
              "livesWithDebtor": "Yes"
            }
          ]
        },
        "assets": [
          {
            "id": "asset-4a1a551e-dab9-4dc4-aeb0-66e006913fd0",
            "category": "Bank or financial account",
            "description": "Chase joint checking",
            "estimatedValue": 2150,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "Checking"
          },
          {
            "id": "asset-cd7b9dc7-c4dc-4bd7-989b-c815cc93d228",
            "category": "Retirement or pension account",
            "description": "Daniel 401(k)",
            "estimatedValue": 69000,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "401(k)"
          },
          {
            "id": "asset-bfc58899-bf08-4a64-9d4f-b658db759b77",
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
            "id": "income-3af5785b-4dce-4a03-a3c4-b81f87894c30",
            "source": "Employment",
            "employer": "Metro Facilities Group",
            "amount": 7100,
            "frequency": "Biweekly",
            "sixMonthTotal": 42600
          },
          {
            "id": "income-97b0be05-8bb9-4278-a0a5-7859ce80ef0a",
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
            "id": "expense-01be8c4b-f07f-4e68-a8cf-77525ebb03f7",
            "category": "Housing contribution",
            "monthlyAmount": 1450,
            "notes": "Household contribution; no real estate claimed."
          },
          {
            "id": "expense-43511dc0-d685-4f87-abf2-447f0129c5f7",
            "category": "Electricity, heat, natural gas",
            "monthlyAmount": 310,
            "notes": ""
          },
          {
            "id": "expense-9114a616-9c33-4efe-b102-1b27055873c1",
            "category": "Water, sewer, garbage collection",
            "monthlyAmount": 115,
            "notes": ""
          },
          {
            "id": "expense-7eedb03c-867c-4800-9c92-b7106630a17a",
            "category": "Phone, cell, internet, satellite & cable",
            "monthlyAmount": 245,
            "notes": ""
          },
          {
            "id": "expense-21411c48-42ee-42ad-8d0c-5f9fcaf11b96",
            "category": "Food & housekeeping supplies",
            "monthlyAmount": 925,
            "notes": ""
          },
          {
            "id": "expense-1d1452ce-6e92-4431-a05e-4510f682d54d",
            "category": "Childcare & children education",
            "monthlyAmount": 640,
            "notes": ""
          },
          {
            "id": "expense-643bf61f-ec65-4a94-b801-944611a25a3b",
            "category": "Transportation",
            "monthlyAmount": 560,
            "notes": ""
          },
          {
            "id": "expense-5489007c-b43b-4901-888b-9ef565610ff3",
            "category": "Vehicle payments",
            "monthlyAmount": 610,
            "notes": ""
          },
          {
            "id": "expense-b542d1a3-7845-43f3-aad5-b3034956ea3a",
            "category": "Vehicle insurance",
            "monthlyAmount": 220,
            "notes": ""
          },
          {
            "id": "expense-46ee1219-4056-40aa-aafc-989ef824b52f",
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
                "id": "fa-entry-65ccab61-1605-4355-9217-52d4e9345907",
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
                "id": "fa-entry-35efc14e-252e-41f9-adb9-1a43cfdae1c2",
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
      "submittedAt": "2026-07-13T19:58:55.620Z"
    },
    {
      "completion": {
        "bundle": {
          "bundleVersion": 2,
          "generatedAt": "2026-07-13T19:58:55.620Z",
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
      "generatedAt": "2026-07-13T19:58:55.620Z",
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
        "personalInfoSubmittedAt": "2026-07-13T19:58:55.620Z",
        "createdAt": "2026-07-13T19:58:56.856Z",
        "updatedAt": "2026-07-13T19:58:55.620Z",
        "debtors": [
          {
            "id": "debtor-c8bc4add-3dae-42ae-a24d-4ee0f741a29a",
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
            "id": "debtor-a7a21a5b-409b-4431-a513-53f4f3a6b866",
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
              "id": "dependent-f3779a11-eeb2-4eca-8afe-c9cf1eee4c11",
              "name": "Fake minor child A",
              "age": "12",
              "relationship": "Child",
              "livesWithDebtor": "Yes"
            },
            {
              "id": "dependent-6a5a4e01-a3c7-4726-91b0-a600516f6e90",
              "name": "Fake minor child B",
              "age": "8",
              "relationship": "Child",
              "livesWithDebtor": "Yes"
            }
          ]
        },
        "assets": [
          {
            "id": "asset-5135e33b-9745-40f7-8013-901b16638ec3",
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
            "id": "asset-a8ecbb88-2358-428c-a616-2aec04d25367",
            "category": "Bank or financial account",
            "description": "Chase joint checking",
            "estimatedValue": 2150,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "Checking"
          },
          {
            "id": "asset-21f6f1bc-e7c8-4dee-9eaf-a455aa9de01a",
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
            "id": "income-e4c20aac-cd3e-4c7c-b889-92a4500d0527",
            "source": "Employment",
            "employer": "Metro Facilities Group",
            "amount": 7100,
            "frequency": "Biweekly",
            "sixMonthTotal": 42600
          },
          {
            "id": "income-ee64f2a1-2d02-4bec-868b-57f682cf04f6",
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
            "id": "expense-16635a18-f4df-4f4c-8af4-bf5d3cfd7654",
            "category": "Rent",
            "monthlyAmount": 2100,
            "notes": "Rental residence involved in eviction case."
          },
          {
            "id": "expense-fc14e2c4-1cd2-48f6-8d30-470e17f07ca2",
            "category": "Electricity, heat, natural gas",
            "monthlyAmount": 310,
            "notes": ""
          },
          {
            "id": "expense-d294db26-44b7-464f-87c7-0743d3f06fd8",
            "category": "Water, sewer, garbage collection",
            "monthlyAmount": 115,
            "notes": ""
          },
          {
            "id": "expense-fede0e0d-3955-4064-9b6f-5d233833a95f",
            "category": "Phone, cell, internet, satellite & cable",
            "monthlyAmount": 245,
            "notes": ""
          },
          {
            "id": "expense-1fc0b184-f76c-4460-b5aa-b9b0b68a716c",
            "category": "Food & housekeeping supplies",
            "monthlyAmount": 925,
            "notes": ""
          },
          {
            "id": "expense-6460428a-5cbb-4585-9a11-b20749c242a1",
            "category": "Childcare & children education",
            "monthlyAmount": 640,
            "notes": ""
          },
          {
            "id": "expense-6e81cbf7-2626-4c7d-b169-5dcf8e8b8e20",
            "category": "Transportation",
            "monthlyAmount": 560,
            "notes": ""
          },
          {
            "id": "expense-10d69ab6-8b34-4c35-a1d9-c8c45f481aeb",
            "category": "Vehicle payments",
            "monthlyAmount": 610,
            "notes": ""
          },
          {
            "id": "expense-44bde824-87fe-43c3-a458-c4ff4f402e98",
            "category": "Vehicle insurance",
            "monthlyAmount": 220,
            "notes": ""
          },
          {
            "id": "expense-546a01ae-7e39-41c4-a8ad-45423cff9132",
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
                "id": "fa-entry-ffdebb41-f71a-4d15-ba5b-ae759e5886aa",
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
                "id": "fa-entry-87cce1dc-f837-4fde-aad8-a4bfcaf4886b",
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
      "submittedAt": "2026-07-13T19:58:55.620Z"
    },
    {
      "completion": {
        "bundle": {
          "bundleVersion": 2,
          "generatedAt": "2026-07-13T19:58:55.620Z",
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
      "generatedAt": "2026-07-13T19:58:55.620Z",
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
        "personalInfoSubmittedAt": "2026-07-13T19:58:55.620Z",
        "createdAt": "2026-07-13T19:58:56.871Z",
        "updatedAt": "2026-07-13T19:58:55.620Z",
        "debtors": [
          {
            "id": "debtor-d3a815fc-8df9-490a-9a39-552fe0d8bf24",
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
            "id": "asset-0df6492d-e7f5-430e-8309-87cb6ba9cdcc",
            "category": "Bank or financial account",
            "description": "Wells Fargo checking",
            "estimatedValue": 780,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "Checking"
          },
          {
            "id": "asset-26afef33-b871-46d2-8fba-ccaa8c0c097b",
            "category": "Bank or financial account",
            "description": "Wells Fargo savings",
            "estimatedValue": 1100,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "Savings"
          },
          {
            "id": "asset-07651a6b-d862-45ba-bf35-74958059df1f",
            "category": "Retirement or pension account",
            "description": "Small rollover IRA",
            "estimatedValue": 14600,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "IRA"
          },
          {
            "id": "asset-690ea594-bca0-41c9-8f83-a2d2b5d17660",
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
            "id": "income-58764c5f-8de0-49c8-84b0-3fcb888d125f",
            "source": "Social Security / public benefits",
            "employer": "Social Security Administration",
            "amount": 1980,
            "frequency": "Monthly",
            "sixMonthTotal": 11880
          },
          {
            "id": "income-b6037b10-57dc-4033-8545-aeba2a914486",
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
            "id": "expense-febbce33-0df3-4ea5-a871-15345b855a30",
            "category": "Rent or home/mortgage payment",
            "monthlyAmount": 1180,
            "notes": ""
          },
          {
            "id": "expense-1028fa0b-c26a-4255-831f-cc45aa116342",
            "category": "Electricity, heat, natural gas",
            "monthlyAmount": 120,
            "notes": ""
          },
          {
            "id": "expense-a5ec4ebe-4999-4825-8bca-8588bde01d75",
            "category": "Phone, cell, internet, satellite & cable",
            "monthlyAmount": 135,
            "notes": ""
          },
          {
            "id": "expense-4f66ba00-724a-4457-9568-35296d21b589",
            "category": "Food & housekeeping supplies",
            "monthlyAmount": 425,
            "notes": ""
          },
          {
            "id": "expense-054d1228-8868-4911-89db-9a9c00a6568c",
            "category": "Medical & dental expenses",
            "monthlyAmount": 220,
            "notes": ""
          },
          {
            "id": "expense-9badbb0f-59ab-4a19-879f-6a98112787ad",
            "category": "Transportation",
            "monthlyAmount": 160,
            "notes": ""
          },
          {
            "id": "expense-f8e42036-a577-4123-948a-fc769585be29",
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
                "id": "fa-entry-5c63367f-f947-4df3-9aea-9e4e2657bda8",
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
                "id": "fa-entry-15260f29-a3e3-4dd0-bd5b-6fbbef9e82de",
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
                "id": "fa-entry-7624f340-1268-49a8-93e2-3c4e28af1e6e",
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
                "id": "fa-entry-cd0c1e50-3fc6-452b-9b2d-b50970bb7011",
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
      "submittedAt": "2026-07-13T19:58:55.620Z"
    },
    {
      "completion": {
        "bundle": {
          "bundleVersion": 2,
          "generatedAt": "2026-07-13T19:58:55.620Z",
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
      "generatedAt": "2026-07-13T19:58:55.620Z",
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
        "personalInfoSubmittedAt": "2026-07-13T19:58:55.620Z",
        "createdAt": "2026-07-13T19:58:56.889Z",
        "updatedAt": "2026-07-13T19:58:55.620Z",
        "debtors": [
          {
            "id": "debtor-c3fc032d-bb92-4a51-b5b8-cf47524e3917",
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
            "id": "asset-06e19660-3507-40d6-ba57-d64a3f69f94d",
            "category": "Bank or financial account",
            "description": "Wells Fargo checking",
            "estimatedValue": 780,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "Checking"
          },
          {
            "id": "asset-45ac3116-d752-429c-9a34-b6334c9ca69d",
            "category": "Bank or financial account",
            "description": "Wells Fargo savings",
            "estimatedValue": 1100,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "Savings"
          },
          {
            "id": "asset-13dcc9c2-0461-4c50-8248-76caa55f9240",
            "category": "Retirement or pension account",
            "description": "Small rollover IRA",
            "estimatedValue": 14600,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "IRA"
          },
          {
            "id": "asset-c70dd9cf-c6fe-4c18-adfb-0df9a282ca44",
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
            "id": "income-f53f5057-c4b5-4b6f-8d6a-7dd6bf192f93",
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
            "id": "expense-14efc0cc-c487-4d6b-8b26-84f7b306fe82",
            "category": "Rent or home/mortgage payment",
            "monthlyAmount": 1180,
            "notes": ""
          },
          {
            "id": "expense-744d85ab-8545-473b-bd43-ede949dbcf6f",
            "category": "Electricity, heat, natural gas",
            "monthlyAmount": 120,
            "notes": ""
          },
          {
            "id": "expense-0c4f11dd-e07b-4d00-b059-08df856f1ffb",
            "category": "Phone, cell, internet, satellite & cable",
            "monthlyAmount": 135,
            "notes": ""
          },
          {
            "id": "expense-9196bed2-f24a-4968-98f9-c0f1a66ac378",
            "category": "Food & housekeeping supplies",
            "monthlyAmount": 425,
            "notes": ""
          },
          {
            "id": "expense-8dfebb55-f66d-4db1-aae2-786f7ebbf31f",
            "category": "Medical & dental expenses",
            "monthlyAmount": 220,
            "notes": ""
          },
          {
            "id": "expense-42834da5-c7d4-4eaf-9978-03734a8dda3c",
            "category": "Transportation",
            "monthlyAmount": 160,
            "notes": ""
          },
          {
            "id": "expense-e503dfc5-7683-4153-9bee-46df6a87d341",
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
                "id": "fa-entry-9b1a9122-e7f3-4c2b-af39-54ebf0618801",
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
                "id": "fa-entry-cd0c1e50-3fc6-452b-9b2d-b50970bb7011",
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
      "submittedAt": "2026-07-13T19:58:55.620Z"
    }
  ],
  "schemaVersion": 1,
  "source": "BK FastLane Intake incomplete debtor entry agent"
};
