[CmdletBinding()]
param()

$ErrorActionPreference = 'Stop'

$repoRoot = Split-Path -Parent $PSScriptRoot
$pdfRoot = Join-Path $repoRoot 'output\pdf\demo-documents'
$previewRoot = Join-Path $pdfRoot 'previews'
New-Item -ItemType Directory -Force -Path $previewRoot | Out-Null

$pdftoppm = Get-Command 'pdftoppm.exe' -ErrorAction SilentlyContinue
if (-not $pdftoppm) {
    $shim = Get-Command 'pdftoppm' -ErrorAction SilentlyContinue
    if ($shim) {
        $candidate = Join-Path (Split-Path -Parent $shim.Source) '..\..\native\poppler\Library\bin\pdftoppm.exe'
        $candidate = [System.IO.Path]::GetFullPath($candidate)
        if (Test-Path -LiteralPath $candidate) {
            $pdftoppm = Get-Item -LiteralPath $candidate
        }
    }
}

if (-not $pdftoppm) {
    throw 'pdftoppm.exe is required to render the browser-safe document previews.'
}

$pdfFiles = Get-ChildItem -LiteralPath $pdfRoot -Filter '*.pdf' -File | Sort-Object Name
if ($pdfFiles.Count -eq 0) {
    throw "No PDFs found in $pdfRoot. Run scripts/generate-demo-review-documents.py first."
}

foreach ($pdf in $pdfFiles) {
    $prefix = Join-Path $previewRoot $pdf.BaseName
    $priorErrorPreference = $ErrorActionPreference
    $ErrorActionPreference = 'SilentlyContinue'
    & $pdftoppm.FullName -f 1 -singlefile -png -r 120 $pdf.FullName $prefix 2>$null
    $renderExitCode = $LASTEXITCODE
    $ErrorActionPreference = $priorErrorPreference
    if ($renderExitCode -ne 0) {
        throw "Preview render failed for $($pdf.Name)."
    }
}

$previews = Get-ChildItem -LiteralPath $previewRoot -Filter '*.png' -File | Sort-Object Name
if ($previews.Count -ne $pdfFiles.Count) {
    throw "Expected $($pdfFiles.Count) previews, found $($previews.Count)."
}

Write-Output "Rendered $($previews.Count) browser-safe document previews in $previewRoot"
