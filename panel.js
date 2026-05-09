// ========================================
// Clean Energy Atlas — Detail Panel
// ========================================

var currentItem = null;
var currentType = null;

function openDetailPanel(item, type) {
  currentItem = item;
  currentType = type;
  var panel = document.getElementById('detail-panel');
  var badge = document.getElementById('detail-type-badge');
  var content = document.getElementById('detail-content');
  var actions = document.getElementById('detail-actions');
  var config = CEA.energyTypes[type] || { icon: '⚡', label: type, color: '#94a3b8' };

  // Close news if open
  document.getElementById('news-panel').classList.remove('open');

  // Badge
  badge.textContent = config.icon + ' ' + config.label;
  badge.style.background = config.color + '22';
  badge.style.color = config.color;

  // Fallback label for missing data
  var dc = 'Data coming soon';

  // Build content
  var html = '';
  html += '<h2 class="detail-name">' + esc(item.name || dc) + '</h2>';
  html += '<div class="detail-country">' + esc(item.country || dc) + (item.city ? ' · ' + esc(item.city) : '') + '</div>';

  // Fallback notice for synthetic items
  if (item._fallback) {
    html += '<div style="background:rgba(10,126,140,0.1);border:1px solid rgba(10,126,140,0.3);border-radius:6px;padding:8px 10px;font-size:11px;color:var(--text-muted,#64748b);margin:8px 0;">'
      + 'ℹ️ Full project data may not be loaded. Showing available details.'
      + '</div>';
  }

  // Core info
  html += '<div class="detail-section">';
  html += '<div class="detail-section-title">Overview</div>';
  html += '<div class="detail-grid">';

  var cap = item.capacity || item.power_mw || 0;
  var capLabel = type === 'datacenter' ? 'Power Demand' : 'Capacity';
  html += field(capLabel, cap > 0 ? formatNum(cap) + ' MW' : dc, cap > 0);
  html += field('Status', item.status || dc);
  html += field('Year', item.year || dc);
  html += field('Type', formatType(item.type || type));
  html += field('Location', esc(item.country || item.state || dc));

  if (item.owner) html += field('Owner', esc(item.owner), false, true);
  if (item.developer) html += field('Developer', esc(item.developer), false, true);

  html += '</div></div>';

  // Type-specific section (skip for pure fallback items with no data)
  if (!item._fallback || cap > 0) {
    html += '<div class="detail-section">';
    html += '<div class="detail-section-title">Details</div>';
    html += '<div class="detail-grid">';

    switch (type) {
      case 'wind':
        html += field('Turbines', item.turbines ? formatNum(item.turbines) : dc);
        if (cap > 0) {
          html += field('Annual Output', estimateOutput(cap, 0.30) + ' GWh');
          html += field('Homes Powered', formatNum(Math.round(cap * 0.30 * 8760 / 10)));
          html += field('CO₂ Avoided', formatNum(Math.round(cap * 0.30 * 8760 * 0.4)) + ' t/yr');
        }
        break;
      case 'solar':
        html += field('Panels', item.panels ? formatNum(item.panels) : dc);
        if (cap > 0) {
          html += field('Annual Output', estimateOutput(cap, 0.22) + ' GWh');
          html += field('Homes Powered', formatNum(Math.round(cap * 0.22 * 8760 / 10)));
          html += field('CO₂ Avoided', formatNum(Math.round(cap * 0.22 * 8760 * 0.4)) + ' t/yr');
        }
        break;
      case 'hydro':
        html += field('Type', formatType(item.type) || dc);
        if (cap > 0) html += field('Annual Output', estimateOutput(cap, 0.45) + ' GWh');
        break;
      case 'geothermal':
        html += field('Type', formatType(item.type) || dc);
        if (cap > 0) html += field('Annual Output', estimateOutput(cap, 0.80) + ' GWh');
        break;
      case 'nuclear':
        html += field('Reactor Type', (item.type || dc).toUpperCase());
        html += field('Reactors', item.reactors || dc);
        if (cap > 0) {
          html += field('Annual Output', estimateOutput(cap, 0.90) + ' GWh');
          html += field('Capacity Factor', '~90%');
        }
        break;
      case 'hydrogen':
        html += field('Output', item.output_tonnes_per_day ? formatNum(item.output_tonnes_per_day) + ' t/day' : dc);
        html += field('Technology', formatType(item.type) || dc);
        if (item.output_tonnes_per_day) html += field('Annual H₂', formatNum(Math.round(item.output_tonnes_per_day * 365)) + ' t/yr');
        break;
      case 'storage':
        html += field('Duration', item.duration_hours ? item.duration_hours + ' hours' : dc);
        html += field('Technology', formatType(item.type) || dc);
        if (cap > 0) html += field('Energy Cap.', formatNum(cap * (item.duration_hours || 4)) + ' MWh');
        break;
      case 'datacenter':
        html += field('Operator', esc(item.operator || dc));
        html += field('Tier', item.tier || dc);
        html += field('Cooling', formatType(item.cooling) || dc);
        html += field('Renewable %', item.renewable_pct !== undefined ? item.renewable_pct + '%' : dc);
        html += field('PPA Status', item.ppa_clean_energy !== undefined ? (item.ppa_clean_energy ? '✅ Active' : '❌ None') : dc);
        break;
      default:
        html += field('Details', dc);
    }

    html += '</div></div>';
  }

  // Investment section
  html += '<div class="detail-section">';
  html += '<div class="detail-section-title">Investment</div>';
  html += '<div class="detail-grid">';
  html += field('Cost', item.cost_usd ? formatCost(item.cost_usd) : dc);
  html += field('Investment Grade', item.investment_grade || dc);
  html += '</div></div>';

  content.innerHTML = html;

  // Actions
  var actionsHtml = '';
  if (!item._fallback) {
    var idx = findItemIndex(item, type);
    var isFav = CEA.favorites.indexOf(type + ':' + idx) !== -1;
    actionsHtml += '<button class="btn-action btn-fav' + (isFav ? ' active' : '') + '" onclick="toggleFavorite(\'' + type + '\',' + idx + ',this)">★ ' + (isFav ? 'Saved' : 'Save') + '</button>';
    actionsHtml += '<button class="btn-action" onclick="addToCompare(\'' + type + '\',' + idx + ')">⇄ Compare</button>';
    actionsHtml += '<button class="btn-action" onclick="shareProject(\'' + type + '\',' + idx + ')">🔗 Share</button>';
    actionsHtml += '<button class="btn-action" onclick="downloadCSV(\'' + type + '\',' + idx + ')">📊 CSV</button>';
    actionsHtml += '<button class="btn-action" onclick="downloadJSON(\'' + type + '\',' + idx + ')">📋 JSON</button>';
    actionsHtml += '<button class="btn-action" onclick="downloadTXT(\'' + type + '\',' + idx + ')">📄 TXT</button>';
    actionsHtml += '<button class="btn-action" onclick="downloadPDF(\'' + type + '\',' + idx + ')">📑 PDF</button>';
  } else {
    actionsHtml += '<div style="font-size:11px;color:var(--text-muted,#64748b);padding:4px 0;">Full project actions available once all layers have loaded.</div>';
  }
  actions.innerHTML = actionsHtml;

  panel.classList.add('open');
  flyToProject(item);
}

function closeDetailPanel() {
  document.getElementById('detail-panel').classList.remove('open');
  currentItem = null;
  currentType = null;
}

// Helpers
function field(label, value, highlight, full) {
  return '<div class="detail-field' + (full ? ' full' : '') + '"><span class="detail-field-label">' + label + '</span><span class="detail-field-value' + (highlight ? ' highlight' : '') + '">' + value + '</span></div>';
}

function estimateOutput(mw, cf) {
  return formatNum(Math.round(mw * cf * 8.76)); // GWh/yr
}

function formatType(t) {
  if (!t) return '—';
  return t.replace(/-/g, ' ').replace(/\b\w/g, function(c) { return c.toUpperCase(); });
}

function esc(s) {
  var d = document.createElement('div');
  d.textContent = s;
  return d.innerHTML;
}

function findItemIndex(item, type) {
  var data = CEA.energyTypes[type].data;
  for (var i = 0; i < data.length; i++) {
    if (data[i] === item) return i;
  }
  return 0;
}

// Favorites
function toggleFavorite(type, idx, btn) {
  var key = type + ':' + idx;
  var i = CEA.favorites.indexOf(key);
  if (i === -1) {
    CEA.favorites.push(key);
    btn.classList.add('active');
    btn.innerHTML = '★ Saved';
  } else {
    CEA.favorites.splice(i, 1);
    btn.classList.remove('active');
    btn.innerHTML = '★ Save';
  }
  // favorites stored in memory
}

// Compare
function addToCompare(type, idx) {
  if (CEA.compareList.length >= 4) { alert('Compare up to 4 projects'); return; }
  var item = CEA.energyTypes[type].data[idx];
  CEA.compareList.push({ item: item, type: type });
  if (CEA.compareList.length >= 2) showCompare();
}

function showCompare() {
  var modal = document.getElementById('compare-modal');
  var body = document.getElementById('compare-body');
  var html = '<table class="compare-table"><tr><th>Field</th>';
  CEA.compareList.forEach(function(c) {
    html += '<th>' + CEA.energyTypes[c.type].icon + ' ' + esc(c.item.name) + '</th>';
  });
  html += '</tr>';

  var fields = ['country', 'status', 'year', 'type'];
  var labels = ['Country', 'Status', 'Year', 'Type'];
  fields.forEach(function(f, i) {
    html += '<tr><td>' + labels[i] + '</td>';
    CEA.compareList.forEach(function(c) { html += '<td>' + esc(String(c.item[f] || '—')) + '</td>'; });
    html += '</tr>';
  });
  html += '<tr><td>Capacity (MW)</td>';
  CEA.compareList.forEach(function(c) { html += '<td>' + formatNum(c.item.capacity || c.item.power_mw || 0) + '</td>'; });
  html += '</tr>';
  html += '<tr><td>Cost</td>';
  CEA.compareList.forEach(function(c) { html += '<td>' + formatCost(c.item.cost_usd) + '</td>'; });
  html += '</tr>';
  html += '<tr><td>Grade</td>';
  CEA.compareList.forEach(function(c) { html += '<td>' + esc(c.item.investment_grade || '—') + '</td>'; });
  html += '</tr>';
  html += '</table>';
  html += '<div style="margin-top:12px;text-align:right"><button class="btn-action" onclick="CEA.compareList=[];document.getElementById(\'compare-modal\').classList.add(\'hidden\')">Clear</button></div>';
  body.innerHTML = html;
  modal.classList.remove('hidden');
}

// Share
function shareProject(type, idx) {
  var url = window.location.origin + window.location.pathname + '?type=' + type + '&idx=' + idx;
  document.getElementById('share-url').value = url;
  document.getElementById('share-modal').classList.remove('hidden');
  document.getElementById('share-copy-btn').onclick = function() {
    navigator.clipboard.writeText(url).then(function() {
      document.getElementById('share-copy-btn').textContent = 'Copied!';
      setTimeout(function() { document.getElementById('share-copy-btn').textContent = 'Copy Link'; }, 1500);
    });
  };
}

// Downloads
function downloadCSV(type, idx) {
  var item = CEA.energyTypes[type].data[idx];
  var keys = Object.keys(item).filter(function(k) { return k[0] !== '_'; });
  var csv = keys.join(',') + '\n' + keys.map(function(k) { return '"' + String(item[k] || '').replace(/"/g, '""') + '"'; }).join(',');
  downloadFile(csv, item.name.replace(/\s+/g, '_') + '.csv', 'application/octet-stream');
}

// ── JSON Viewer state ────────────────────────────────────────────────────────
var _jvCurrentData = null;
var _jvCurrentName = '';

function downloadJSON(type, idx) {
  // Open the in-app JSON viewer instead of downloading
  var item = CEA.energyTypes[type].data[idx];
  var config = CEA.energyTypes[type];
  var clean = {};
  Object.keys(item).forEach(function(k) { if (k[0] !== '_') clean[k] = item[k]; });

  _jvCurrentData = clean;
  _jvCurrentName = item.name || 'project';

  // Friendly label map
  var labels = {
    name: 'Name', country: 'Country', lat: 'Latitude', lng: 'Longitude',
    capacity: 'Capacity (MW)', power_mw: 'Capacity (MW)', turbines: 'Turbines',
    type: 'Type', year: 'Year', status: 'Status', owner: 'Owner',
    operator: 'Operator', developer: 'Developer', cost_usd: 'Cost (USD)',
    investment_grade: 'Investment Grade', hub_height: 'Hub Height (m)',
    rotor_diameter: 'Rotor Diameter (m)', water_depth: 'Water Depth (m)',
    grid_connection: 'Grid Connection', technology: 'Technology',
    fuel_type: 'Fuel Type', state: 'State', county: 'County',
    iso: 'ISO / Grid Region', queue_date: 'Queue Date', est_cod: 'Est. COD',
    interconnection_point: 'Interconnection Point',
    isOffshore: 'Offshore', offshore: 'Offshore',
    annual_output_gwh: 'Annual Output (GWh)', notes: 'Notes'
  };

  // Status colors
  var statusColors = {
    'Operational': '#4ade80', 'Under Construction': '#fbbf24',
    'Planned': '#94a3b8', 'Decommissioned': '#f87171',
    'Applied': '#60a5fa', 'Under Study': '#c084fc',
    'Agreement Signed': '#34d399', 'Permitted': '#fbbf24'
  };

  // Build table rows
  var rows = Object.keys(clean).map(function(k) {
    var val = clean[k];
    if (val === null || val === undefined || val === '') return null;
    var label = labels[k] || k.replace(/_/g, ' ').replace(/\b\w/g, function(c) { return c.toUpperCase(); });
    var displayVal = val;

    // Format special fields
    if (k === 'cost_usd' && val > 0) {
      displayVal = '$' + (val >= 1e9
        ? (val / 1e9).toFixed(2) + 'B'
        : (val / 1e6).toFixed(0) + 'M');
    } else if ((k === 'capacity' || k === 'power_mw') && val > 0) {
      displayVal = Number(val).toLocaleString() + ' MW';
    } else if (k === 'status') {
      var sc = statusColors[val] || '#94a3b8';
      displayVal = '<span style="display:inline-flex;align-items:center;gap:6px">'
        + '<span style="width:8px;height:8px;border-radius:50%;background:' + sc + ';flex-shrink:0"></span>'
        + esc(String(val)) + '</span>';
      return '<tr><td class="jv-key">' + esc(label) + '</td><td class="jv-val">' + displayVal + '</td></tr>';
    } else if (typeof val === 'boolean' || k === 'isOffshore' || k === 'offshore') {
      displayVal = val ? 'Yes' : 'No';
    } else if (typeof val === 'number' && (k === 'lat' || k === 'lng')) {
      displayVal = val.toFixed(4) + '°';
    }

    return '<tr><td class="jv-key">' + esc(label) + '</td><td class="jv-val">' + esc(String(displayVal)) + '</td></tr>';
  }).filter(Boolean);

  // Populate modal
  document.getElementById('jv-title').textContent = item.name || 'Project Data';
  document.getElementById('jv-badge-row').innerHTML =
    '<span class="jv-type-badge" style="color:' + config.color + '">' + config.icon + ' ' + config.label + '</span>'
    + (item.country ? '<span class="jv-country">' + esc(item.country) + '</span>' : '');
  document.getElementById('jv-tbody').innerHTML = rows.join('');

  var modal = document.getElementById('json-viewer-modal');
  modal.style.display = 'flex';
  document.getElementById('jv-close-btn').onclick = function() { modal.style.display = 'none'; };
  modal.onclick = function(e) { if (e.target === modal) modal.style.display = 'none'; };
}

window.copyJSONToClipboard = function() {
  if (!_jvCurrentData) return;
  var text = JSON.stringify(_jvCurrentData, null, 2);
  navigator.clipboard.writeText(text).then(function() {
    var btn = document.getElementById('jv-copy-btn');
    var orig = btn.innerHTML;
    btn.innerHTML = '✓ Copied!';
    btn.style.background = 'rgba(74,222,128,0.15)';
    btn.style.borderColor = '#4ade80';
    btn.style.color = '#4ade80';
    setTimeout(function() {
      btn.innerHTML = orig;
      btn.style.background = '';
      btn.style.borderColor = '';
      btn.style.color = '';
    }, 2000);
  }).catch(function() {
    // Fallback for older browsers
    var ta = document.createElement('textarea');
    ta.value = JSON.stringify(_jvCurrentData, null, 2);
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
  });
};

window.downloadJSONFromViewer = function() {
  if (!_jvCurrentData) return;
  downloadFile(
    JSON.stringify(_jvCurrentData, null, 2),
    _jvCurrentName.replace(/\s+/g, '_') + '.json',
    'application/octet-stream'
  );
};

function downloadTXT(type, idx) {
  var item = CEA.energyTypes[type].data[idx];
  var config = CEA.energyTypes[type];
  var lines = ['Clean Energy Atlas — Project Report', '=' .repeat(40), ''];
  lines.push('Name: ' + item.name);
  lines.push('Type: ' + config.label);
  lines.push('Country: ' + (item.country || ''));
  lines.push('Capacity: ' + formatNum(item.capacity || item.power_mw || 0) + ' MW');
  lines.push('Status: ' + (item.status || ''));
  lines.push('Year: ' + (item.year || ''));
  lines.push('Owner: ' + (item.owner || item.operator || ''));
  lines.push('Developer: ' + (item.developer || ''));
  lines.push('Cost: ' + formatCost(item.cost_usd));
  lines.push('Investment Grade: ' + (item.investment_grade || ''));
  downloadFile(lines.join('\n'), item.name.replace(/\s+/g, '_') + '.txt', 'text/plain');
}

function downloadPDF(type, idx) {
  // Simple text-based PDF report
  var item = CEA.energyTypes[type].data[idx];
  var config = CEA.energyTypes[type];
  var content = 'Clean Energy Atlas - Project Report\n\n';
  content += 'Name: ' + item.name + '\n';
  content += 'Type: ' + config.label + '\n';
  content += 'Country: ' + (item.country || '') + '\n';
  content += 'Capacity: ' + formatNum(item.capacity || item.power_mw || 0) + ' MW\n';
  content += 'Status: ' + (item.status || '') + '\n';
  content += 'Year: ' + (item.year || '') + '\n';
  content += 'Owner: ' + (item.owner || item.operator || '') + '\n';
  content += 'Cost: ' + formatCost(item.cost_usd) + '\n';
  content += 'Investment Grade: ' + (item.investment_grade || '') + '\n';

  // Create a printable page
  var w = window.open('', '_blank');
  w.document.write('<html><head><title>' + esc(item.name) + ' - Report</title>');
  w.document.write('<style>body{font-family:Inter,sans-serif;padding:40px;max-width:600px;margin:0 auto}h1{font-size:20px;border-bottom:2px solid #fbbf24;padding-bottom:8px}pre{white-space:pre-wrap;font-size:14px;line-height:1.8}</style>');
  w.document.write('</head><body>');
  w.document.write('<h1>⚡ ' + esc(item.name) + '</h1>');
  w.document.write('<pre>' + esc(content) + '</pre>');
  w.document.write('<p style="color:#888;font-size:11px">Generated by Clean Energy Atlas</p>');
  w.document.write('</body></html>');
  w.document.close();
  setTimeout(function() { w.print(); }, 500);
}

function downloadFile(content, filename, mime) {
  try {
    var blob = new Blob([content], { type: mime });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    // Clean up after a short delay to avoid locking the browser
    setTimeout(function() {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 150);
  } catch(e) {
    console.warn('Download failed:', e);
  }
}

// Close button
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('detail-close').addEventListener('click', closeDetailPanel);
});

// ========================================
// NEWS ARTICLE — SAVE PDF + COPY
// ========================================

// Called from news item buttons — saves a branded PDF summary of the article
window.saveNewsPDF = function(title, source, date, category, country, summary, url) {
  var safeTitle = title || 'News Article';
  var safeSource = source || 'Clean Energy Atlas';
  var safeDate = date || '';
  var safeSummary = summary || '';
  var safeUrl = (url && url !== '#') ? url : '';
  var safeCategory = category || '';
  var safeCountry = country || '';

  var w = window.open('', '_blank');
  if (!w) return;
  w.document.write('<!DOCTYPE html><html><head><meta charset="UTF-8">');
  w.document.write('<title>' + safeTitle + '</title>');
  w.document.write('<style>');
  w.document.write('body{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;max-width:720px;margin:40px auto;padding:0 24px;color:#1e293b;background:#fff;}');
  w.document.write('h1{font-size:22px;font-weight:700;line-height:1.35;margin:0 0 12px;color:#0f172a;}');
  w.document.write('.meta{display:flex;gap:12px;flex-wrap:wrap;font-size:12px;color:#64748b;margin-bottom:20px;border-bottom:2px solid #e2e8f0;padding-bottom:14px;}');
  w.document.write('.badge{padding:2px 8px;border-radius:10px;background:#e0fdf4;color:#065f46;font-weight:600;}');
  w.document.write('.summary{font-size:14px;line-height:1.7;color:#334155;background:#f8fafc;border-left:4px solid #4ade80;padding:14px 16px;border-radius:0 8px 8px 0;margin-bottom:20px;}');
  w.document.write('.link-section{font-size:13px;margin-bottom:20px;}');
  w.document.write('.link-section a{color:#16a34a;word-break:break-all;}');
  w.document.write('.footer{font-size:11px;color:#94a3b8;border-top:1px solid #e2e8f0;padding-top:12px;display:flex;justify-content:space-between;}');
  w.document.write('.logo{font-weight:700;color:#4ade80;letter-spacing:-0.02em;}');
  w.document.write('@media print{body{margin:20px;} @page{margin:15mm;}}');
  w.document.write('</style></head><body>');
  w.document.write('<h1>' + safeTitle + '</h1>');
  w.document.write('<div class="meta">');
  if (safeCategory) w.document.write('<span class="badge">' + safeCategory + '</span>');
  if (safeCountry) w.document.write('<span>&#127760; ' + safeCountry + '</span>');
  if (safeSource) w.document.write('<span>&#128240; ' + safeSource + '</span>');
  if (safeDate)   w.document.write('<span>&#128197; ' + safeDate + '</span>');
  w.document.write('</div>');
  if (safeSummary) {
    w.document.write('<div class="summary">' + safeSummary + '</div>');
  }
  if (safeUrl) {
    w.document.write('<div class="link-section"><strong>Full Article:</strong><br><a href="' + safeUrl + '">' + safeUrl + '</a></div>');
  }
  w.document.write('<div class="footer">');
  w.document.write('<span class="logo">IkeAtlas &mdash; Clean Energy Atlas</span>');
  w.document.write('<span>Saved ' + new Date().toLocaleDateString('en-US', { year:'numeric', month:'long', day:'numeric' }) + '</span>');
  w.document.write('</div>');
  w.document.write('</body></html>');
  w.document.close();
  setTimeout(function() { w.print(); }, 500);
};

// Called from news item copy button
window.copyNewsToClipboard = function(title, source, date, category, country, summary, url, btnEl) {
  var lines = [];
  if (title)    lines.push(title);
  if (category || country) lines.push([category, country].filter(Boolean).join(' · '));
  if (source)   lines.push('Source: ' + source);
  if (date)     lines.push('Date: ' + date);
  if (summary)  lines.push('\n' + summary);
  if (url && url !== '#') lines.push('\nRead more: ' + url);
  lines.push('\n— Saved from Clean Energy Atlas (ikeatlas.com)');

  var text = lines.join('\n');
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(function() {
      flashCopied(btnEl);
    }).catch(function() {
      fallbackCopy(text, btnEl);
    });
  } else {
    fallbackCopy(text, btnEl);
  }
};

function fallbackCopy(text, btnEl) {
  var ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  try { document.execCommand('copy'); flashCopied(btnEl); } catch(e) {}
  document.body.removeChild(ta);
}

function flashCopied(btnEl) {
  if (!btnEl) return;
  var orig = btnEl.innerHTML;
  btnEl.innerHTML = '✓ Copied';
  btnEl.classList.add('copied');
  setTimeout(function() {
    btnEl.innerHTML = orig;
    btnEl.classList.remove('copied');
  }, 2000);
}
