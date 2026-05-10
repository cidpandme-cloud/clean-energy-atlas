// Build the public CEA Quick Guide PDF.
// Single-flow layout: header -> intro -> sections -> footer (drawn after content),
// no absolute positioning that triggers extra pages.
const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

const OUT = path.join(__dirname, 'CEA_QuickGuide_April2026.pdf');
const FONTS = path.join(__dirname, 'fonts');

const TEAL_DARK = '#0C4E54';
const TEAL = '#01696F';
const ACCENT = '#B8541B';
const INK = '#1a2332';
const MUTED = '#5a6b85';
const RULE = '#D4D1CA';

const doc = new PDFDocument({
  size: 'LETTER',
  margins: { top: 30, bottom: 50, left: 54, right: 54 },
  info: {
    Title: 'Clean Energy Atlas — Quick Reference Guide',
    Author: 'Clean Energy Atlas',
    Subject: 'How to use the Clean Energy Atlas',
    Creator: 'Clean Energy Atlas',
  },
});

let HEAD = 'Helvetica-Bold';
let BODY = 'Helvetica';
let SEMI = 'Helvetica-Bold';
try {
  doc.registerFont('Head', path.join(FONTS, 'DMSans-Bold.ttf'));
  doc.registerFont('Body', path.join(FONTS, 'DMSans-Regular.ttf'));
  doc.registerFont('Semi', path.join(FONTS, 'DMSans-SemiBold.ttf'));
  HEAD = 'Head'; BODY = 'Body'; SEMI = 'Semi';
} catch (e) { console.log('Falling back to Helvetica'); }

doc.pipe(fs.createWriteStream(OUT));

// ===== Header band (drawn behind content) =====
doc.rect(0, 0, doc.page.width, 84).fill(TEAL_DARK);
doc.fillColor('#ffffff').font(HEAD).fontSize(20)
  .text('Clean Energy Atlas', 54, 22);
doc.fillColor('#bcd9dc').font(BODY).fontSize(9.5)
  .text('Quick Reference Guide  ·  April 2026  ·  cleanenergyatlas.com', 54, 50);
doc.fillColor('#ffffff').font(BODY).fontSize(9)
  .text('Global Clean Energy Infrastructure', 350, 26, { width: 220, align: 'right' });
doc.fillColor('#bcd9dc').font(BODY).fontSize(8)
  .text('v0.3.6  ·  Quick Start in 60 seconds', 350, 40, { width: 220, align: 'right' });

// Reset cursor below header band
doc.x = 54;
doc.y = 102;

// ===== Intro =====
doc.fillColor(INK).font(HEAD).fontSize(13).text('Get oriented in 60 seconds');
doc.moveDown(0.25);
doc.fillColor(MUTED).font(BODY).fontSize(9.5).lineGap(1.5).text(
  'The Atlas plots clean-energy projects, grid infrastructure and AI data centers across the globe. ' +
  'Toggle layers on the left rail, jump to a region using search, then click any project for details.',
  { width: doc.page.width - 108 }
);
doc.moveDown(0.5);

// ===== Section helper (no extra page logic) =====
function section(title) {
  doc.moveDown(0.25);
  doc.fillColor(TEAL).font(HEAD).fontSize(10).text(title.toUpperCase(), { characterSpacing: 0.4 });
  const y = doc.y + 1;
  doc.strokeColor(RULE).lineWidth(0.5).moveTo(54, y).lineTo(doc.page.width - 54, y).stroke();
  doc.moveDown(0.25);
}
function row(label, body) {
  const startY = doc.y;
  doc.fillColor(ACCENT).font(SEMI).fontSize(8.8)
    .text(label, 54, startY, { width: 100, lineBreak: false });
  doc.fillColor(INK).font(BODY).fontSize(9).lineGap(1)
    .text(body, 162, startY, { width: doc.page.width - 54 - 162 });
  doc.moveDown(0.18);
}

section('Layers panel  (left rail)');
row('Energy types', 'Toggle Wind, Solar, Hydro, Geothermal, Nuclear, Hydrogen, Storage and Data Centers. The number badge shows how many sites are active in that layer.');
row('Grid', 'Transmission Lines and Substations are on by default. The bottom strip reads "GRID 307 lines | 205 sub" globally.');
row('All On / All Off', 'Two buttons at the bottom of the rail flip every layer at once.');
row('Heatmap', 'Density overlay combining wind + solar + hydro. Useful at world-zoom to see global concentration.');
row('DC Links', 'Draws fiber-style connections from each data center to nearby renewables. Works without Data Centers being toggled on.');

section('Map controls');
row('Pan & zoom', 'Click-drag to pan. Mouse-wheel or +/− buttons (lower right) to zoom. The pin badge at top-left shows your current center, country and zoom level.');
row('Project markers', 'Each circle is a project; the colored ring shows its pipeline stage. Click a marker for the detail panel.');
row('Project Stages', 'Bottom strip: Applied · Under Study · Agreement Signed · Permitted · Under Construction. The ring around every marker matches.');
row('Theme', 'Top-right toggle. Light mode is cream land + saturated blue ocean. Dark mode is warm slate land + near-black ocean.');
row('Language', 'Map labels can switch between 8 languages (top header dropdown). Project data stays in English.');

section('Top header');
row('Search', 'Find a project, country or operator. Type at least 2 characters.');
row('Database', 'Tabular browser of every project. Filter and sort.');
row('Newsroom', 'Curated industry headlines. Every "Read More" link runs a Google search for the article so you always land on a live page.');
row('Help', 'This guide and a list of every keyboard shortcut.');

section('Pro tips');
row('Compare', 'Open up to 3 projects side-by-side from the database view.');
row('Save PDF', 'Inside any news article you can save a branded one-page summary.');
row('Copy', 'Articles include a Copy button to grab title + source + URL for outreach.');
row('Permalink', 'Project detail panels include a shareable URL with type & index parameters.');

// ===== Footer (drawn last, painted within current page bounds, no auto-pagination) =====
// Trick: temporarily expand bottom margin to 0 so doc.text() at the bottom
// won't trigger a page break.
doc.page.margins.bottom = 0;
const footerTop = doc.page.height - 44;
doc.strokeColor(RULE).lineWidth(0.5).moveTo(54, footerTop).lineTo(doc.page.width - 54, footerTop).stroke();
doc.fillColor(MUTED).font(BODY).fontSize(8.5)
  .text('Questions or partnerships:  jimandkimo@ikeatlas.com    ·    cleanenergyatlas.com    ·    Built with Perplexity AI',
    54, footerTop + 8, { width: doc.page.width - 108, lineBreak: false, height: 14 });
doc.fillColor(ACCENT).font(SEMI).fontSize(8.5)
  .text('v0.3.6 · Apr 2026', 54, footerTop + 22, { width: doc.page.width - 108, align: 'right', lineBreak: false, height: 14 });

doc.end();
console.log('Wrote', OUT);
