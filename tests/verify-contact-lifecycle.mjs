import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const html = readFileSync(join(here, "..", "index.html"), "utf8");

function check(condition, message) {
  if (!condition) throw new Error(message);
  console.log(`PASS: ${message}`);
}

const sidebar = html.match(/const sidebarItems=\[([\s\S]*?)\n\];/)?.[1] || "";
const navKeys = [...sidebar.matchAll(/key:"([^"]+)"/g)].map(match => match[1]);

check(
  JSON.stringify(navKeys) === JSON.stringify(["dashboard", "leads", "contacts", "matters"]),
  "Matt's four primary CRM destinations are preserved as Dashboard, Leads, Contacts, and Matters",
);
check(!sidebar.includes('key:"settings"'), "Settings is a utility, not a fifth primary destination");
check(html.includes('if(!intakePackageFor(record))return "lead"'), "No Intake data is classified as a Lead");
check(html.includes('return "contact";'), "Intake work in progress is classified as a Contact");
check(
  html.includes('intakeDataStatus(m).complete&&isPrepReady(m.docChecklist)'),
  "Matter promotion requires complete Intake data and resolved document requests",
);
check(
  html.includes('const tabs=[{key:"dashboard",label:"Overview"},{key:"intake",label:"Intake Data"},{key:"documents",label:"Documents"},{key:"activity",label:"Activity"}]'),
  "A record has four focused work tabs",
);
check(html.includes('recordKind(l)==="lead"'), "Leads page uses the lifecycle classification");
check(html.includes('recordKind(l)==="contact"'), "Contacts page uses the lifecycle classification");
check(html.includes('recordKind(l)==="matter"'), "Matters page uses the lifecycle classification");
check(html.includes('page==="matters"&&<MattersPage'), "Matters is wired into the application route");
check(!html.includes("Create New Matter"), "Matters cannot be created manually");
check(html.includes("FAKE DATA ONLY"), "Jimmy demo is visibly marked as fake-data-only");

console.log("\nContact-to-petition-ready source checks passed.");
