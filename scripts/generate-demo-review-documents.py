from __future__ import annotations

from pathlib import Path
from textwrap import wrap

from reportlab.lib.colors import HexColor, white
from reportlab.lib.pagesizes import letter
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "demo-documents"
PAGE_WIDTH, PAGE_HEIGHT = letter

INK = HexColor("#20352A")
GREEN = HexColor("#3D5C43")
SAGE = HexColor("#7A9C80")
PALE = HexColor("#EEF6EF")
LINE = HexColor("#D8DED9")
MUTED = HexColor("#66736B")
RED = HexColor("#A94438")
AMBER = HexColor("#9A6700")


def money(value: float) -> str:
    return f"${value:,.2f}"


def new_canvas(path: Path, title: str) -> canvas.Canvas:
    pdf = canvas.Canvas(str(path), pagesize=letter, pageCompression=1)
    pdf.setTitle(title)
    pdf.setAuthor("BK FastLane synthetic demo generator")
    pdf.setSubject("Synthetic document review evidence - not real client data")
    return pdf


def page_header(pdf: canvas.Canvas, title: str, issuer: str, page: int = 1) -> float:
    pdf.saveState()
    pdf.setFillColor(INK)
    pdf.rect(0, PAGE_HEIGHT - 92, PAGE_WIDTH, 92, fill=1, stroke=0)
    pdf.setFillColor(white)
    title_size = 18
    while title_size > 12 and stringWidth(title, "Helvetica-Bold", title_size) > 382:
        title_size -= 1
    pdf.setFont("Helvetica-Bold", title_size)
    pdf.drawString(42, PAGE_HEIGHT - 47, title)
    pdf.setFont("Helvetica", 9)
    pdf.drawString(42, PAGE_HEIGHT - 67, issuer)
    pdf.setFillColor(SAGE)
    pdf.roundRect(PAGE_WIDTH - 166, PAGE_HEIGHT - 65, 124, 24, 6, fill=1, stroke=0)
    pdf.setFillColor(white)
    pdf.setFont("Helvetica-Bold", 8)
    pdf.drawCentredString(PAGE_WIDTH - 104, PAGE_HEIGHT - 56, "SYNTHETIC DEMO")
    pdf.setFillColor(HexColor("#E4E9E5"))
    pdf.setFont("Helvetica-Bold", 34)
    pdf.translate(125, 190)
    pdf.rotate(32)
    pdf.drawString(0, 0, "NOT A REAL DOCUMENT")
    pdf.restoreState()
    return PAGE_HEIGHT - 122


def footer(pdf: canvas.Canvas, filename: str, page: int = 1) -> None:
    pdf.setStrokeColor(LINE)
    pdf.line(42, 44, PAGE_WIDTH - 42, 44)
    pdf.setFillColor(MUTED)
    pdf.setFont("Helvetica", 7.5)
    pdf.drawString(42, 29, "Fake debtor evidence for BK FastLane workflow testing only. Not valid for filing, identity, tax, credit, or lending use.")
    pdf.drawRightString(PAGE_WIDTH - 42, 29, f"{filename}  |  page {page}")


def section_title(pdf: canvas.Canvas, title: str, y: float) -> float:
    pdf.setFillColor(PALE)
    pdf.roundRect(42, y - 20, PAGE_WIDTH - 84, 26, 5, fill=1, stroke=0)
    pdf.setFillColor(GREEN)
    pdf.setFont("Helvetica-Bold", 9)
    pdf.drawString(52, y - 11, title.upper())
    return y - 36


def field_grid(pdf: canvas.Canvas, fields: list[tuple[str, str]], y: float) -> float:
    column_width = (PAGE_WIDTH - 96) / 2
    row_height = 42
    for index, (label, value) in enumerate(fields):
        column = index % 2
        row = index // 2
        x = 48 + column * column_width
        top = y - row * row_height
        pdf.setFillColor(MUTED)
        pdf.setFont("Helvetica-Bold", 7.5)
        pdf.drawString(x, top, label.upper())
        pdf.setFillColor(INK)
        pdf.setFont("Helvetica", 10)
        pdf.drawString(x, top - 15, str(value))
    rows = (len(fields) + 1) // 2
    return y - rows * row_height - 4


def draw_table(
    pdf: canvas.Canvas,
    headers: list[str],
    rows: list[list[str]],
    y: float,
    widths: list[float] | None = None,
) -> float:
    total_width = PAGE_WIDTH - 84
    widths = widths or [total_width / len(headers)] * len(headers)
    x0 = 42
    row_height = 25
    pdf.setFillColor(INK)
    pdf.roundRect(x0, y - row_height, total_width, row_height, 4, fill=1, stroke=0)
    cursor = x0
    pdf.setFillColor(white)
    pdf.setFont("Helvetica-Bold", 7.5)
    for header, width in zip(headers, widths):
        pdf.drawString(cursor + 8, y - 16, header.upper())
        cursor += width
    y -= row_height
    for row_index, row in enumerate(rows):
        pdf.setFillColor(white if row_index % 2 == 0 else HexColor("#F7F8F6"))
        pdf.rect(x0, y - row_height, total_width, row_height, fill=1, stroke=0)
        pdf.setStrokeColor(LINE)
        pdf.line(x0, y - row_height, x0 + total_width, y - row_height)
        cursor = x0
        pdf.setFillColor(INK)
        pdf.setFont("Helvetica", 8.5)
        for value, width in zip(row, widths):
            text = str(value)
            if len(text) > 28:
                text = text[:27] + "..."
            pdf.drawString(cursor + 8, y - 16, text)
            cursor += width
        y -= row_height
    return y - 12


def note_box(pdf: canvas.Canvas, title: str, text: str, y: float, warning: bool = False) -> float:
    background = HexColor("#FDF6E7") if warning else PALE
    color = AMBER if warning else GREEN
    lines = wrap(text, 88)
    height = 37 + len(lines) * 11
    pdf.setFillColor(background)
    pdf.setStrokeColor(HexColor("#E7D39A") if warning else LINE)
    pdf.roundRect(42, y - height, PAGE_WIDTH - 84, height, 6, fill=1, stroke=1)
    pdf.setFillColor(color)
    pdf.setFont("Helvetica-Bold", 8)
    pdf.drawString(54, y - 18, title.upper())
    pdf.setFillColor(INK)
    pdf.setFont("Helvetica", 8.5)
    for index, line in enumerate(lines):
        pdf.drawString(54, y - 34 - index * 11, line)
    return y - height - 12


def generic_document(
    filename: str,
    title: str,
    issuer: str,
    fields: list[tuple[str, str]],
    headers: list[str],
    rows: list[list[str]],
    note: str,
    warning: bool = False,
    widths: list[float] | None = None,
) -> None:
    path = OUTPUT / filename
    pdf = new_canvas(path, title)
    y = page_header(pdf, title, issuer)
    y = section_title(pdf, "Account and document details", y)
    y = field_grid(pdf, fields, y)
    y = section_title(pdf, "Review detail", y)
    y = draw_table(pdf, headers, rows, y, widths)
    note_box(pdf, "Review note", note, y, warning)
    footer(pdf, filename)
    pdf.save()


def license_document(filename: str, name: str, address: str, identifier: str, initials: str) -> None:
    path = OUTPUT / filename
    pdf = new_canvas(path, "Driver License / Identification Card")
    y = page_header(pdf, "Driver License / Identification Card", "State identification review copy")
    pdf.setFillColor(HexColor("#EAF0F3"))
    pdf.setStrokeColor(HexColor("#9BAEB7"))
    pdf.roundRect(62, y - 284, PAGE_WIDTH - 124, 250, 16, fill=1, stroke=1)
    pdf.setFillColor(HexColor("#2F5F77"))
    pdf.rect(62, y - 14, PAGE_WIDTH - 124, 42, fill=1, stroke=0)
    pdf.setFillColor(white)
    pdf.setFont("Helvetica-Bold", 16)
    pdf.drawString(82, y + 2, "COLORADO")
    pdf.setFont("Helvetica-Bold", 8)
    pdf.drawRightString(PAGE_WIDTH - 82, y + 4, "DRIVER LICENSE - DEMO")
    pdf.setFillColor(HexColor("#C8D6DC"))
    pdf.roundRect(84, y - 224, 108, 164, 8, fill=1, stroke=0)
    pdf.setFillColor(HexColor("#668391"))
    pdf.circle(138, y - 113, 30, fill=1, stroke=0)
    pdf.roundRect(108, y - 192, 60, 58, 22, fill=1, stroke=0)
    pdf.setFillColor(white)
    pdf.setFont("Helvetica-Bold", 20)
    pdf.drawCentredString(138, y - 120, initials)
    info = [
        ("NAME", name),
        ("ID NUMBER", identifier),
        ("DATE OF BIRTH", "08/14/1988"),
        ("ADDRESS", address),
        ("ISSUED", "06/28/2026"),
        ("EXPIRES", "08/14/2031"),
        ("CLASS", "R"),
    ]
    x = 218
    info_y = y - 62
    for label, value in info:
        pdf.setFillColor(MUTED)
        pdf.setFont("Helvetica-Bold", 7)
        pdf.drawString(x, info_y, label)
        pdf.setFillColor(INK)
        pdf.setFont("Helvetica-Bold" if label == "NAME" else "Helvetica", 10)
        for line_index, line in enumerate(wrap(value, 38)):
            pdf.drawString(x, info_y - 14 - line_index * 11, line)
        info_y -= 34 if label != "ADDRESS" else 45
    y = y - 315
    note_box(
        pdf,
        "Identity evidence",
        "Synthetic image-based ID converted to PDF for the review demo. Name and mailing address are intentionally fake and match this demo matter only.",
        y,
    )
    footer(pdf, filename)
    pdf.save()


def tax_return(filename: str, name: str, year: int, wages: float, agi: float, refund: float) -> None:
    generic_document(
        filename,
        f"Form 1040 - U.S. Individual Income Tax Return {year}",
        "Synthetic federal tax return review copy",
        [
            ("Taxpayer", name),
            ("Tax year", str(year)),
            ("Filing status", "Single"),
            ("Taxpayer ID", "XXX-XX-4321"),
            ("Address", "1422 Elm Street, Denver, CO 80204"),
            ("Prepared", f"04/10/{year + 1}"),
        ],
        ["Line", "Description", "Amount"],
        [
            ["1a", "Wages, salaries, tips", money(wages)],
            ["9", "Total income", money(wages + 415)],
            ["11", "Adjusted gross income", money(agi)],
            ["15", "Taxable income", money(max(0, agi - 14600))],
            ["24", "Total tax", money(4621 if year == 2025 else 4380)],
            ["35a", "Refund", money(refund)],
        ],
        "Complete synthetic return summary with filing status, income, tax, and refund values available for firm-side review.",
        widths=[55, 335, 138],
    )


def build_documents() -> list[str]:
    OUTPUT.mkdir(parents=True, exist_ok=True)

    license_document(
        "ortega-license.pdf",
        "DAVID LUIS ORTEGA",
        "1422 ELM STREET, DENVER, CO 80204",
        "DEMO-CO-0712",
        "DO",
    )
    license_document(
        "tran-license.pdf",
        "LINDA MAI TRAN",
        "845 CEDAR AVENUE, AURORA, CO 80012",
        "DEMO-CO-0244",
        "LT",
    )

    generic_document(
        "ortega-ssc.pdf",
        "Social Security Number Verification Copy",
        "Synthetic identity evidence",
        [
            ("Name", "David Luis Ortega"),
            ("Number shown", "XXX-XX-4321"),
            ("Document type", "Social Security card copy"),
            ("Received", "06/28/2026"),
            ("Image quality", "Legible"),
            ("Match result", "Name matches intake"),
        ],
        ["Evidence check", "Result", "Reviewer status"],
        [
            ["Name", "David Luis Ortega", "Matched"],
            ["Number format", "XXX-XX-4321", "Valid format"],
            ["Image edges", "All four visible", "Passed"],
        ],
        "The full identifier is intentionally masked in this synthetic public demo. This is not a government-issued card.",
        widths=[160, 230, 138],
    )

    generic_document(
        "tran-w2-2025.pdf",
        "Form W-2 Wage and Tax Statement 2025",
        "Front Range Health Services - synthetic payroll copy",
        [
            ("Employee", "Linda Mai Tran"),
            ("Employee SSN", "XXX-XX-0244"),
            ("Employer ID", "84-DEMO2025"),
            ("Control number", "W2-LT-2025-01"),
            ("Employer", "Front Range Health Services"),
            ("Employee address", "845 Cedar Avenue, Aurora, CO 80012"),
        ],
        ["Box", "Description", "Amount"],
        [
            ["1", "Wages, tips, other compensation", money(68420)],
            ["2", "Federal income tax withheld", money(7215)],
            ["3", "Social Security wages", money(68420)],
            ["4", "Social Security tax withheld", money(4242.04)],
            ["5", "Medicare wages and tips", money(68420)],
            ["17", "State income tax", money(2688.35)],
        ],
        "Synthetic W-2 used to exercise name, address, employer, wage, and masked identifier review.",
        widths=[55, 335, 138],
    )

    generic_document(
        "ortega-collections.pdf",
        "Collection Account Statements",
        "Consolidated synthetic creditor evidence",
        [
            ("Debtor", "David Luis Ortega"),
            ("As of", "06/28/2026"),
            ("Accounts", "4"),
            ("Total claimed", money(28734.18)),
            ("Disputed", "None marked"),
            ("Source", "Debtor-uploaded statements"),
        ],
        ["Creditor", "Account", "Last activity", "Balance"],
        [
            ["Pine Ridge Bank", "...4419", "02/15/2026", money(8421.17)],
            ["Summit Medical", "...0832", "11/03/2025", money(12110.00)],
            ["Copper Card", "...6620", "03/19/2026", money(5133.01)],
            ["Metro Recovery", "...1094", "01/08/2026", money(3070.00)],
        ],
        "Balances and account suffixes are synthetic. The packet supplies a legible creditor, account suffix, activity date, and balance for each debt.",
        widths=[160, 95, 140, 133],
    )

    generic_document(
        "tran-cc-statements.pdf",
        "Credit Card Statement Packet",
        "Synthetic unsecured debt evidence",
        [
            ("Cardholder", "Linda Mai Tran"),
            ("Statement date", "06/20/2026"),
            ("Accounts", "4"),
            ("Combined balance", money(19318.44)),
            ("Payment status", "Current / minimums due"),
            ("Address", "845 Cedar Avenue, Aurora, CO 80012"),
        ],
        ["Issuer", "Account", "Minimum due", "Balance"],
        [
            ["Aspen Rewards", "...1842", money(145), money(5812.19)],
            ["Western Sky Visa", "...2280", money(113), money(4370.00)],
            ["Union Market Card", "...9017", money(188), money(7264.41)],
            ["Trailhead Credit", "...6605", money(52), money(1871.84)],
        ],
        "Four synthetic statements are consolidated for rapid review; issuer, suffix, minimum payment, and balance are legible.",
        widths=[160, 95, 140, 133],
    )

    tax_return("ortega-1040-2025.pdf", "David Luis Ortega", 2025, 59640, 58210, 1388)
    tax_return("ortega-1040-2024.pdf", "David Luis Ortega", 2024, 57120, 55800, 1114)
    tax_return("tran-1040-2025.pdf", "Linda Mai Tran", 2025, 68420, 66965, 1732)

    generic_document(
        "ortega-cc-cert.pdf",
        "Certificate of Credit Counseling",
        "Mountain West Approved Counseling - synthetic certificate",
        [
            ("Client", "David Luis Ortega"),
            ("Certificate number", "CO-DEMO-2026-0629-771"),
            ("Completed", "06/29/2026 10:42 AM MT"),
            ("Delivery", "Internet and telephone review"),
            ("Counselor", "Jordan Ellis"),
            ("Language", "English"),
        ],
        ["Requirement", "Evidence", "Status"],
        [
            ["Budget briefing", "Completed", "Satisfied"],
            ["Alternatives reviewed", "Completed", "Satisfied"],
            ["Certificate issued", "06/29/2026", "Verified"],
        ],
        "Synthetic certificate for workflow review only. It does not satisfy the statutory credit counseling requirement.",
        widths=[190, 210, 128],
    )

    generic_document(
        "ortega-stubs-jan-jun.pdf",
        "Pay Stub Packet - January through June 2026",
        "Rocky Mountain Distribution - synthetic payroll records",
        [
            ("Employee", "David Luis Ortega"),
            ("Employee ID", "RMD-DEMO-4412"),
            ("Pay frequency", "Biweekly"),
            ("Hourly rate", money(28.75)),
            ("Employer", "Rocky Mountain Distribution"),
            ("Review period", "01/01/2026 - 06/30/2026"),
        ],
        ["Month", "Regular hours", "Gross", "Deductions", "Net"],
        [
            ["January", "160.0", money(4600), money(1132), money(3468)],
            ["February", "160.0", money(4600), money(1132), money(3468)],
            ["March", "168.0", money(4830), money(1188), money(3642)],
            ["April", "160.0", money(4600), money(1132), money(3468)],
            ["May", "176.0", money(5060), money(1244), money(3816)],
            ["June", "160.0", money(4600), money(1132), money(3468)],
        ],
        "All six months are present. Employer, employee, pay period, gross pay, deductions, and net pay are legible and internally consistent.",
        widths=[95, 110, 108, 108, 107],
    )

    generic_document(
        "tran-chase-jan-jun.pdf",
        "Checking Account Statements - January through June 2026",
        "Front Range Community Bank - synthetic statement packet",
        [
            ("Account holder", "Linda Mai Tran"),
            ("Account", "Checking ...7714"),
            ("Period", "01/01/2026 - 06/30/2026"),
            ("Statements", "6 cover summaries"),
            ("Bank", "Front Range Community Bank"),
            ("Review state", "Incomplete supporting pages"),
        ],
        ["Month", "Opening", "Deposits", "Withdrawals", "Closing"],
        [
            ["January", money(1922), money(5710), money(5488), money(2144)],
            ["February", money(2144), money(5680), money(5602), money(2222)],
            ["March", money(2222), money(5704), money(5519), money(2407)],
            ["April", money(2407), money(5690), money(5768), money(2329)],
            ["May", money(2329), money(5710), money(5481), money(2558)],
            ["June", money(2558), money(5688), money(5744), money(2502)],
        ],
        "The six cover summaries are present, but transaction pages 3-4 are absent from the January and April statements. Keep this document flagged until replacement pages arrive.",
        warning=True,
        widths=[85, 110, 110, 115, 108],
    )

    generic_document(
        "zillow-1422-elm.pdf",
        "Residential Property Valuation Estimate",
        "Synthetic public-market valuation review",
        [
            ("Property", "1422 Elm Street, Denver, CO 80204"),
            ("Owner shown", "David Luis Ortega"),
            ("Property type", "Single-family residence"),
            ("Bedrooms / baths", "3 / 2"),
            ("Estimated value", money(468000)),
            ("Estimated range", "$445,000 - $493,000"),
        ],
        ["Comparable", "Distance", "Sold", "Sale price"],
        [
            ["1518 Elm Street", "0.2 mi", "05/2026", money(472500)],
            ["1390 Cedar Court", "0.4 mi", "04/2026", money(459000)],
            ["882 West 14th", "0.5 mi", "06/2026", money(481250)],
        ],
        "Public-market estimate recreated with synthetic property and comparable-sale data. It is not an appraisal.",
        widths=[225, 90, 90, 123],
    )

    generic_document(
        "mortgage-statement-march.pdf",
        "Mortgage Loan Statement - March 2026",
        "Frontier Home Lending - synthetic monthly statement",
        [
            ("Borrower", "David Luis Ortega"),
            ("Loan", "...8127"),
            ("Property", "1422 Elm Street, Denver, CO 80204"),
            ("Statement period", "03/01/2026 - 03/31/2026"),
            ("Principal balance", money(318420.16)),
            ("Interest rate", "4.375% fixed"),
        ],
        ["Payment component", "Current due", "Paid", "Status"],
        [
            ["Principal", money(612.42), money(612.42), "Paid"],
            ["Interest", money(1160.91), money(1160.91), "Paid"],
            ["Escrow", money(486.17), money(486.17), "Paid"],
            ["Total", money(2259.50), money(2259.50), "Paid"],
        ],
        "Only the March statement is included. The requested six-month mortgage history remains incomplete and must stay flagged.",
        warning=True,
        widths=[220, 105, 105, 98],
    )

    generic_document(
        "kbb-2019-civic.pdf",
        "Vehicle Market Valuation Report",
        "Synthetic private-party vehicle value evidence",
        [
            ("Owner", "Linda Mai Tran"),
            ("Vehicle", "2019 Honda Civic EX"),
            ("VIN", "...DEMO1842"),
            ("Mileage", "72,440"),
            ("Condition", "Good"),
            ("Valuation date", "07/06/2026"),
        ],
        ["Value type", "Low", "Typical", "High"],
        [
            ["Trade-in", money(13800), money(14650), money(15400)],
            ["Private party", money(15100), money(16250), money(17400)],
            ["Dealer retail", money(17100), money(18400), money(19600)],
        ],
        "Synthetic valuation range is consistent with the debtor's stated value and is not a dealer quote or appraisal.",
        widths=[180, 116, 116, 116],
    )

    generic_document(
        "tran-honda-finance.pdf",
        "Vehicle Loan Statement",
        "Honda Finance demo account - synthetic monthly statement",
        [
            ("Borrower", "Linda Mai Tran"),
            ("Account", "...5528"),
            ("Vehicle", "2019 Honda Civic EX"),
            ("Statement date", "06/25/2026"),
            ("Payoff amount", money(11892.74)),
            ("Interest rate", "5.90%"),
        ],
        ["Description", "Due date", "Amount", "Status"],
        [
            ["Regular payment", "07/15/2026", money(389.12), "Due"],
            ["Past due", "-", money(0), "Current"],
            ["Late fees", "-", money(0), "None"],
            ["Estimated payoff", "07/25/2026", money(11892.74), "Quoted"],
        ],
        "Current balance, payoff, payment amount, due date, and collateral description are legible and consistent with the intake answers.",
        widths=[220, 110, 105, 93],
    )

    generic_document(
        "bank-statements.pdf",
        "Checking Account Statements - Demo Intake Packet",
        "BK FastLane synthetic intake evidence",
        [
            ("Account holder", "Synthetic intake debtor"),
            ("Account", "Checking ...0042"),
            ("Period", "Six-month lookback"),
            ("Statements", "3 of 6 months received"),
            ("Source", "Built-in intake simulation"),
            ("Review state", "Incomplete document set"),
        ],
        ["Month", "Opening", "Deposits", "Withdrawals", "Closing"],
        [
            ["April", money(1840), money(4920), money(4775), money(1985)],
            ["May", money(1985), money(4920), money(5010), money(1895)],
            ["June", money(1895), money(4920), money(4680), money(2135)],
        ],
        "Only three of the required six statements are present. The demo AI flag is grounded in an actual incomplete PDF packet and must remain open for firm review.",
        warning=True,
        widths=[85, 110, 110, 115, 108],
    )

    return sorted(path.name for path in OUTPUT.glob("*.pdf"))


if __name__ == "__main__":
    files = build_documents()
    print(f"Generated {len(files)} synthetic review PDFs in {OUTPUT}")
    for name in files:
        print(name)
