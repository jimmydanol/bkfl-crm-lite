import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const html = readFileSync(join(here, "..", "index.html"), "utf8");

function check(condition, message) {
  if (!condition) throw new Error(message);
  console.log(`PASS: ${message}`);
}

check(
  html.includes('const sidebarItems=[') &&
    html.includes('{key:"dashboard",label:"DASHBOARD"') &&
    html.includes('{key:"leads",label:"LEADS"') &&
    html.includes('{key:"contacts",label:"CONTACTS"') &&
    html.includes('{key:"settings",label:"SETTINGS"'),
  "Matt's Dashboard, Leads, Contacts, and Settings sidebar is unchanged",
);

check(
  html.includes('const tabs=[{key:"dashboard",label:"Dashboard"},{key:"intake",label:"Intake Package"},{key:"documents",label:"Documents"},{key:"communications",label:"Communications"},{key:"notes",label:"Notes"},{key:"tasks",label:"Tasks"},{key:"ai",label:"AI"}]'),
  "Matt's seven Lead tabs are unchanged",
);

check(
  html.includes('const followUpReady=queue.length===0&&chase.length>0&&!!openFollowUpTask') &&
    html.includes('disabled={!followUpReady}'),
  "Client follow-up waits for completed review and the assigned Task",
);

check(
  html.includes('requestCount:(d.requestCount||0)+1') &&
    html.includes('d.reason==="rejected"&&(d.clientNote||d.note)'),
  "Repeat reminders preserve rejection reasons and request counts",
);

check(
  html.includes('const REJECT_PRESETS=[') &&
    html.includes('placeholder="Internal note (not sent)"') &&
    html.includes('clientNote'),
  "Rejections separate the client explanation from the internal note",
);

check(
  html.includes('placeholder="Why is this acceptable despite the AI flag?"') &&
    html.includes('overrideReason:overrideNote.trim()'),
  "AI-flag overrides require a written firm reason",
);

check(
  html.includes('reviewedBy:CURRENT_USER') &&
    html.includes('action:"Document rejected"') &&
    html.includes('patch.status==="approved"?"Document approved"'),
  "Document decisions record the reviewer and Activity history",
);

check(
  html.includes('const docFiles=(d)=>') &&
    html.includes('Upload history') &&
    html.includes('status:"superseded"'),
  "Replacement uploads preserve version history",
);

check(
  html.includes('const resolvedDocs=[...buckets.home,...buckets.excused]') &&
    html.includes('{resolvedCount} of {checklist.length} resolved') &&
    html.includes('resolvedDocs.map'),
  "Resolved counts and Home Base include only approved or excused Documents",
);

check(
  html.includes('setFollowUpSubject') &&
    html.includes('setFollowUpBody') &&
    html.includes('<textarea value={followUpBody??followUpDraft.body}') &&
    html.includes('template:followUpDraft.tpl') &&
    (html.match(/\(c\.template\|\|""\)\.startsWith\("Document Request"\)/g) || []).length >= 2 &&
    html.includes('(c.direction==="Outgoing"&&(c.body||"").includes("/upload/lead-docs"))'),
  "The existing follow-up modal is editable and repeat reminders do not depend on an unchanged subject",
);

console.log("\nMatt-parity document-review checks passed.");
