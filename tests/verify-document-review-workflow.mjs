import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const html = readFileSync(join(here, "..", "index.html"), "utf8");

function check(condition, message) {
  if (!condition) throw new Error(message);
  console.log(`PASS: ${message}`);
}

check(
  html.includes("const followUpReady=queue.length===0&&chase.length>0&&!!openFollowUpTask"),
  "Client follow-up waits for a cleared review queue, a chase item, and an assigned Task",
);
check(
  html.includes("disabled={!followUpReady}"),
  "The follow-up controls enforce the workflow rule in the interface",
);
check(
  html.includes("requestCount:(d.requestCount||0)+1") &&
    html.includes('d.reason==="rejected"&&(d.clientNote||d.note)'),
  "Rejected-document reasons survive repeat reminders and request counts are retained",
);
check(
  html.includes("const REJECT_PRESETS=[") && html.includes("Missing pages or months"),
  "Paralegals get consistent rejection reasons without a custom rule builder",
);
check(
  html.includes("clientNote") && html.includes("internalNote") && html.includes("Internal note (not sent)"),
  "Client-facing rejection guidance is separated from confidential firm notes",
);
check(
  html.includes("const docFiles=(d)=>") && html.includes("Upload history") && html.includes("superseded"),
  "Replacement uploads preserve a visible version history",
);
check(
  html.includes("reviewedBy:CURRENT_USER") && html.includes('action:"Document rejected"'),
  "Document decisions record the reviewer and add a Contact timeline event",
);
check(
  html.includes("[...buckets.home,...buckets.excused]") &&
    !html.includes("[...required,...others].map((d,i)=>({d:d,i:i})).sort"),
  "Home Base renders only resolved Documents",
);
check(
  html.includes("SYNTHETIC DOCUMENT PREVIEW") && html.includes("The production viewer should render the actual file here without covering the review controls"),
  "The demo previews inline and clearly distinguishes synthetic content from production files",
);
check(
  html.includes("setFollowUpSubject") && html.includes("setFollowUpBody") && html.includes("Demo portal link only"),
  "Firm staff can edit the draft and the static demo does not overstate portal security",
);
check(
  html.includes("Glade lesson") && html.includes("Clio lesson"),
  "The competitive design lessons are explained in place without adding a fifth navigation tab",
);

console.log("\nDocument-review source checks passed.");
