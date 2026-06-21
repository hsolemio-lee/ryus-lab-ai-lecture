const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

const root = path.resolve(__dirname, "..");
const htmlPath = path.join(root, "lecture-notes", "ryus-lab-ai-lecture-notes.html");
const pdfPath = path.join(root, "lecture-notes", "ryus-lab-ai-lecture-notes.pdf");
const downloadPdfPath = path.join(root, "assets", "downloads", "ryus-lab-ai-lecture-notes.pdf");

async function main() {
  if (!fs.existsSync(htmlPath)) {
    throw new Error(`Missing source HTML: ${htmlPath}`);
  }

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1240, height: 1754 } });

  await page.goto(`file://${htmlPath}`, { waitUntil: "networkidle" });
  await page.emulateMedia({ media: "print" });
  await page.pdf({
    path: pdfPath,
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
    displayHeaderFooter: true,
    headerTemplate: `<div style="font-family: Apple SD Gothic Neo, sans-serif; font-size: 8px; color: #7b8794; width: 100%; padding: 0 16mm;">연구자를 위한 AI 활용법</div>`,
    footerTemplate: `<div style="font-family: Apple SD Gothic Neo, sans-serif; font-size: 8px; color: #7b8794; width: 100%; padding: 0 16mm; text-align: right;"><span class="pageNumber"></span> / <span class="totalPages"></span></div>`,
    margin: {
      top: "13mm",
      bottom: "14mm",
      left: "0",
      right: "0",
    },
  });

  await browser.close();

  fs.mkdirSync(path.dirname(downloadPdfPath), { recursive: true });
  fs.copyFileSync(pdfPath, downloadPdfPath);

  const stats = fs.statSync(pdfPath);
  console.log(`Wrote ${pdfPath} (${Math.round(stats.size / 1024)} KB)`);
  console.log(`Copied ${downloadPdfPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
