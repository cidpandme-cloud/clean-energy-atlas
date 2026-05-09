// ========================================
// Clean Energy Atlas — UI Controls
// ========================================

function initUI() {
  buildLayerToggles();
  setupSearch();
  setupThemeToggle();
  setupLanguageSelector();
  setupLayerPanelCollapse();
  setupNewsPanel();
  setupPipelineToggle();
  setupKeyboardShortcuts();
  updateStats();
}

// ===== PIPELINE TOGGLE =====
function setupPipelineToggle() {
  var btn = document.getElementById('btn-pipeline');
  var legend = document.getElementById('pipeline-legend');
  var statBlock = document.getElementById('pipeline-stat-block');
  var capBlock = document.getElementById('pipeline-cap-block');
  if (!btn) return;

  btn.addEventListener('click', function() {
    var isOn = CEA.pipelineVisible;
    var nowOn = !isOn;
    if (typeof togglePipelineLayer === 'function') togglePipelineLayer(nowOn);
    btn.textContent = nowOn ? 'Hide Pipeline' : 'Show Pipeline';
    btn.classList.toggle('active', nowOn);
    if (legend) legend.classList.toggle('hidden', !nowOn);
    if (statBlock) statBlock.classList.toggle('hidden', !nowOn);
    if (capBlock) capBlock.classList.toggle('hidden', !nowOn);
    if (!nowOn) {
      var total = typeof pipelineStats !== 'undefined' ? pipelineStats.total : (CEA.pipelineData ? CEA.pipelineData.length : 461);
      btn.textContent = 'Show Pipeline (' + total + ' projects)';
    }
  });

  // Set initial button text with count
  var total = typeof pipelineStats !== 'undefined' ? pipelineStats.total : 461;
  btn.textContent = 'Show Pipeline (' + total + ' projects)';

  // ── Pipeline filter chips ───────────────────────────────────────────
  // All chips start active (= no filter applied = show all)
  document.querySelectorAll('.pf-chip').forEach(function(chip) {
    chip.addEventListener('click', function() {
      chip.classList.toggle('active');

      // Collect which types/statuses are NOT selected (= filtered out)
      var inactiveTypes = [];
      document.querySelectorAll('.pf-chip[data-filter="type"]').forEach(function(c) {
        if (!c.classList.contains('active')) inactiveTypes.push(c.dataset.value);
      });
      var inactiveStatuses = [];
      document.querySelectorAll('.pf-chip[data-filter="status"]').forEach(function(c) {
        if (!c.classList.contains('active')) inactiveStatuses.push(c.dataset.value);
      });

      // Build the active (include) lists
      var allTypes    = ['wind','solar','storage','gas','hydro','other'];
      var allStatuses = ['Applied','Under Study','Agreement Signed','Permitted','Under Construction'];

      CEA.pipelineTypeFilters   = inactiveTypes.length   ? allTypes.filter(function(t) { return inactiveTypes.indexOf(t) === -1; })   : [];
      CEA.pipelineStatusFilters = inactiveStatuses.length ? allStatuses.filter(function(s) { return inactiveStatuses.indexOf(s) === -1; }) : [];

      if (typeof applyPipelineFilter === 'function') applyPipelineFilter();
    });
  });
}

// ===== LAYER TOGGLES =====
function buildLayerToggles() {
  var container = document.getElementById('layer-toggles');
  var html = '';
  Object.keys(CEA.energyTypes).forEach(function(type) {
    var config = CEA.energyTypes[type];
    var count = config.data.length;
    html += '<div class="layer-toggle off" data-type="' + type + '" onclick="handleLayerToggle(this, \'' + type + '\')">';
    html += '<div class="toggle-switch" data-color="' + config.color + '" style="background:#2a3a4a"></div>';
    html += '<span class="layer-icon">' + config.icon + '</span>';
    html += '<span class="layer-label">' + config.label + '</span>';
    html += '<span class="layer-count" id="count-' + type + '">' + count + '</span>';
    html += '</div>';
  });
  // Grid toggles
  var gridLines = typeof transmissionLines !== 'undefined' ? transmissionLines.length : 307;
  var gridSubs = typeof substations !== 'undefined' ? substations.length : 205;
  html += '<div class="layer-toggle" data-type="transmission" onclick="handleGridToggle(this, \'transmission\')">'
    + '<div class="toggle-switch" style="background:linear-gradient(135deg,#ff6b6b,#ffd93d,#6bcb77,#4d96ff)"></div>'
    + '<span class="layer-icon">&#x26A1;</span>'
    + '<span class="layer-label">Transmission Lines</span>'
    + '<span class="layer-count" id="count-transmission">' + gridLines + '</span>'
    + '</div>';
  html += '<div class="layer-toggle" data-type="substation" onclick="handleGridToggle(this, \'substation\')">'
    + '<div class="toggle-switch" style="background:#ffd93d"></div>'
    + '<span class="layer-icon">&#x1F50C;</span>'
    + '<span class="layer-label">Substations</span>'
    + '<span class="layer-count" id="count-substation">' + gridSubs + '</span>'
    + '</div>';
  container.innerHTML = html;

  // All on/off
  document.getElementById('btn-all-on').addEventListener('click', function() {
    Object.keys(CEA.energyTypes).forEach(function(type) {
      CEA.layerVisibility[type] = true;
      toggleLayer(type, true);
      var el = document.querySelector('.layer-toggle[data-type="' + type + '"]');
      if (el) {
        el.classList.remove('off');
        var sw = el.querySelector('.toggle-switch');
        if (sw && CEA.energyTypes[type]) sw.style.background = CEA.energyTypes[type].color;
      }
    });
    // Also turn on grid layers
    ['transmission', 'substation'].forEach(function(gt) {
      CEA.gridVisible[gt] = true;
      toggleGridLayer(gt, true);
      var el = document.querySelector('.layer-toggle[data-type="' + gt + '"]');
      if (el) el.classList.remove('off');
    });
    if (typeof syncBottomLegendChips === 'function') syncBottomLegendChips();
    updateStats();
  });
  document.getElementById('btn-all-off').addEventListener('click', function() {
    Object.keys(CEA.energyTypes).forEach(function(type) {
      CEA.layerVisibility[type] = false;
      toggleLayer(type, false);
      var el = document.querySelector('.layer-toggle[data-type="' + type + '"]');
      if (el) el.classList.add('off');
    });
    // Also turn off grid layers
    ['transmission', 'substation'].forEach(function(gt) {
      CEA.gridVisible[gt] = false;
      toggleGridLayer(gt, false);
      var el = document.querySelector('.layer-toggle[data-type="' + gt + '"]');
      if (el) el.classList.add('off');
    });
    if (typeof syncBottomLegendChips === 'function') syncBottomLegendChips();
    updateStats();
  });

  // Heatmap toggle
  document.getElementById('btn-heatmap').addEventListener('click', function() {
    CEA.heatmapOn = !CEA.heatmapOn;
    toggleHeatmap(CEA.heatmapOn);
    this.classList.toggle('active', CEA.heatmapOn);
  });

  // Connections toggle
  document.getElementById('btn-connections').addEventListener('click', function() {
    CEA.connectionsOn = !CEA.connectionsOn;
    toggleConnections(CEA.connectionsOn);
    this.classList.toggle('active', CEA.connectionsOn);
  });
  document.getElementById('btn-connections').classList.add('active');

  // CEA v0.3 Upgrade 6 — Bottom legend chip click handlers.
  // Clicking a chip toggles that energy type's layer visibility, mirroring the
  // behavior of the left-panel layer toggles. Visual state stays synced both ways.
  setupBottomLegend();
}

function setupBottomLegend() {
  var chips = document.querySelectorAll('.mbl-chip');
  for (var i = 0; i < chips.length; i++) {
    (function(chip) {
      var type = chip.getAttribute('data-type');
      // Initial state: all energy layers start OFF, so all chips start dimmed
      chip.classList.add('dimmed');
      chip.addEventListener('click', function(e) {
        e.preventDefault();
        // Click the matching left-panel toggle to keep both UIs in sync
        var panelEl = document.querySelector('.layer-toggle[data-type="' + type + '"]');
        if (panelEl) {
          handleLayerToggle(panelEl, type);
          syncBottomLegendChips();
          if (typeof updateStats === 'function') updateStats();
        }
      });
    })(chips[i]);
  }
}

function syncBottomLegendChips() {
  var chips = document.querySelectorAll('.mbl-chip');
  for (var i = 0; i < chips.length; i++) {
    var type = chips[i].getAttribute('data-type');
    if (CEA.layerVisibility && CEA.layerVisibility[type]) {
      chips[i].classList.remove('dimmed');
    } else {
      chips[i].classList.add('dimmed');
    }
  }
}

function handleLayerToggle(el, type) {
  var isOff = el.classList.contains('off');
  var sw = el.querySelector('.toggle-switch');
  var color = CEA.energyTypes[type] ? CEA.energyTypes[type].color : '#4ade80';
  if (isOff) {
    el.classList.remove('off');
    if (sw) sw.style.background = color;
    toggleLayer(type, true);
  } else {
    el.classList.add('off');
    if (sw) sw.style.background = '#2a3a4a';
    toggleLayer(type, false);
  }
  // CEA v0.3 Upgrade 6 — keep bottom legend in sync
  if (typeof syncBottomLegendChips === 'function') syncBottomLegendChips();
}

function handleGridToggle(el, type) {
  var isOff = el.classList.contains('off');
  if (isOff) {
    el.classList.remove('off');
    toggleGridLayer(type, true);
  } else {
    el.classList.add('off');
    toggleGridLayer(type, false);
  }
}

// ===== SEARCH =====
function setupSearch() {
  var input = document.getElementById('search-input');
  var resultsDiv = document.getElementById('search-results');
  if (!input || !resultsDiv) return;

  // Build flat searchable index of ALL projects
  function buildIndex() {
    var items = [];
    Object.keys(CEA.energyTypes).forEach(function(type) {
      var config = CEA.energyTypes[type];
      config.data.forEach(function(d, i) {
        items.push({
          type: type,
          idx: i,
          name: d.name || '',
          country: d.country || '',
          status: d.status || '',
          owner: d.owner || '',
          developer: d.developer || '',
          capacity: d.capacity || d.power_mw || 0,
          lat: d.lat,
          lng: d.lng,
          icon: config.icon,
          color: config.color,
          label: config.label
        });
      });
    });
    return items;
  }

  var searchIndex = buildIndex();

  function doSearch(query) {
    if (!query || query.length < 2) {
      resultsDiv.classList.remove('active');
      resultsDiv.innerHTML = '';
      return;
    }
    var q = query.toLowerCase();
    var matches = searchIndex.filter(function(item) {
      return item.name.toLowerCase().includes(q)
        || item.country.toLowerCase().includes(q)
        || item.owner.toLowerCase().includes(q)
        || item.developer.toLowerCase().includes(q)
        || item.status.toLowerCase().includes(q)
        || item.label.toLowerCase().includes(q);
    }).slice(0, 12);

    if (matches.length === 0) {
      resultsDiv.innerHTML = '<div style="padding:12px;color:var(--text-muted);font-size:12px;text-align:center;">No results found</div>';
      resultsDiv.classList.add('active');
      return;
    }

    var html = matches.map(function(item) {
      var cap = item.capacity > 0 ? item.capacity + ' MW' : '';
      return '<div class="search-result-item" onclick="selectSearchResult(\'' + item.type + '\',' + item.idx + ')">'
        + '<span class="search-result-icon">' + item.icon + '</span>'
        + '<div class="search-result-info">'
        + '<div class="search-result-name">' + item.name + '</div>'
        + '<div class="search-result-meta">' + item.label + ' · ' + item.country + (cap ? ' · ' + cap : '') + '</div>'
        + '</div>'
        + '</div>';
    }).join('');

    // Add "Browse all" link at bottom
    html += '<div class="search-browse-all" onclick="openDatabaseModal()">'
      + '<span>Browse all ' + searchIndex.length + ' projects</span>'
      + '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>'
      + '</div>';

    resultsDiv.innerHTML = html;
    resultsDiv.classList.add('active');
  }

  input.addEventListener('input', function() { doSearch(this.value.trim()); });
  input.addEventListener('focus', function() { if (this.value.trim().length >= 2) doSearch(this.value.trim()); });
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.search-container')) {
      resultsDiv.classList.remove('active');
    }
  });

  // Make selectSearchResult global
  window.selectSearchResult = function(type, idx) {
    resultsDiv.classList.remove('active');
    input.value = '';
    var data = CEA.energyTypes[type].data[idx];
    if (!data || !data.lat || !data.lng) return;
    // Turn on layer if off
    if (!CEA.layerVisibility[type]) {
      CEA.layerVisibility[type] = true;
      toggleLayer(type, true);
      var el = document.querySelector('.layer-toggle[data-type="' + type + '"]');
      if (el) {
        el.classList.remove('off');
        var sw = el.querySelector('.toggle-switch');
        if (sw && CEA.energyTypes[type]) sw.style.background = CEA.energyTypes[type].color;
      }
      updateStats();
    }
    CEA.map.flyTo({ center: [data.lng, data.lat], zoom: 8, duration: 1200 });
    setTimeout(function() {
      if (typeof showDetailPanel === 'function') showDetailPanel(type, idx);
      else if (typeof openDetailPanel === 'function') openDetailPanel(data, type);
    }, 1300);
  };
}

function handleSearchClick(type, idx) {
  var item = CEA.energyTypes[type].data[idx];
  document.getElementById('search-results').classList.remove('active');
  document.getElementById('search-input').value = item.name;
  flyToProject(item);
  setTimeout(function() { openDetailPanel(item, type); }, 800);
}

// ===== THEME =====
function setupThemeToggle() {
  var btn = document.getElementById('theme-toggle');
  // Check saved preference
  // Theme default: dark (no localStorage in iframe)

  btn.addEventListener('click', function() {
    var isDark = document.body.classList.contains('theme-dark');
    document.body.classList.toggle('theme-dark', !isDark);
    document.body.classList.toggle('theme-light', isDark);
    // theme state in memory only
    switchTheme(!isDark);
  });
}

// ===== LANGUAGE =====
function setupLanguageSelector() {
  var sel = document.getElementById('lang-select');
  sel.addEventListener('change', function() {
    changeMapLanguage(this.value);
  });
}

// ===== LAYER PANEL COLLAPSE =====
function setupLayerPanelCollapse() {
  var panel = document.getElementById('layer-panel');
  var closeBtn = document.getElementById('layer-panel-close');
  var expandBtn = document.getElementById('layer-panel-expand');
  var mobileBtn = document.getElementById('mobile-layers-btn');

  closeBtn.addEventListener('click', function() {
    panel.classList.add('collapsed');
    panel.classList.remove('mobile-open');
  });
  expandBtn.addEventListener('click', function() {
    panel.classList.remove('collapsed');
  });

  // Mobile floating button
  if (mobileBtn) {
    mobileBtn.addEventListener('click', function() {
      var isOpen = panel.classList.contains('mobile-open');
      if (isOpen) {
        panel.classList.remove('mobile-open');
      } else {
        panel.classList.add('mobile-open');
        panel.classList.remove('collapsed');
      }
    });
  }
}

// ===== NEWS PANEL =====
function setupNewsPanel() {
  var btn = document.getElementById('news-toggle');
  var panel = document.getElementById('news-panel');
  var closeBtn = document.getElementById('news-close');

  btn.addEventListener('click', function() {
    // Close detail panel
    document.getElementById('detail-panel').classList.remove('open');
    panel.classList.toggle('open');
    if (panel.classList.contains('open')) renderNews('all');
  });

  closeBtn.addEventListener('click', function() {
    panel.classList.remove('open');
  });

  // Close news panel when clicking outside of it
  document.addEventListener('click', function(e) {
    if (panel.classList.contains('open') &&
        !panel.contains(e.target) &&
        e.target !== btn &&
        !btn.contains(e.target)) {
      panel.classList.remove('open');
    }
  });
}

function renderNews(filter) {
  var items = typeof energyNewsItems !== 'undefined' ? energyNewsItems : [];
  var filtersHtml = '<button class="news-filter-btn' + (filter === 'all' ? ' active' : '') + '" onclick="renderNews(\'all\')">All</button>';
  var cats = ['Market', 'Policy', 'Project', 'Investment', 'Technology'];
  cats.forEach(function(c) {
    filtersHtml += '<button class="news-filter-btn' + (filter === c ? ' active' : '') + '" onclick="renderNews(\'' + c + '\')">' + c + '</button>';
  });
  document.getElementById('news-filters').innerHTML = filtersHtml;

  var filtered = filter === 'all' ? items : items.filter(function(n) { return n.category === filter; });

  var html = '';
  filtered.forEach(function(n) {
    var catClass = 'news-cat-' + (n.category || 'market').toLowerCase();
    var hasLink = n.url && n.url !== '#' && n.url !== '';
    // Escape values for inline onclick attributes
    var eTitle    = (n.title    || '').replace(/'/g, "\\'").replace(/"/g, '&quot;');
    var eSource   = (n.source   || 'Clean Energy Atlas').replace(/'/g, "\\'").replace(/"/g, '&quot;');
    var eDate     = (n.date     || '').replace(/'/g, "\\'").replace(/"/g, '&quot;');
    var eCategory = (n.category || '').replace(/'/g, "\\'").replace(/"/g, '&quot;');
    var eCountry  = (n.country  || '').replace(/'/g, "\\'").replace(/"/g, '&quot;');
    var eSummary  = (n.summary  || '').replace(/'/g, "\\'").replace(/"/g, '&quot;');
    var eUrl      = (hasLink ? n.url : '').replace(/'/g, "\\'").replace(/"/g, '&quot;');
    html += '<div class="news-item">';
    if (hasLink) {
      html += '<div class="news-item-title"><a href="' + n.url + '" target="_blank" rel="noopener" class="news-item-link">' + esc(n.title) + ' &#8599;</a></div>';
    } else {
      html += '<div class="news-item-title">' + esc(n.title) + '</div>';
    }
    html += '<div class="news-item-meta">';
    html += '<span class="news-category ' + catClass + '">' + esc(n.category || '') + '</span>';
    html += '<span>' + esc(n.country || '') + '</span>';
    html += '<span>' + esc(n.date || '') + '</span>';
    html += '</div>';
    if (n.summary) html += '<div class="news-item-summary">' + esc(n.summary) + '</div>';
    // Action buttons
    html += '<div class="news-actions">';
    html += '<button class="news-action-btn" onclick="saveNewsPDF(\'' + eTitle + '\',\'' + eSource + '\',\'' + eDate + '\',\'' + eCategory + '\',\'' + eCountry + '\',\'' + eSummary + '\',\'' + eUrl + '\')" title="Save article as PDF">&#128196; Save PDF</button>';
    html += '<button class="news-action-btn" onclick="copyNewsToClipboard(\'' + eTitle + '\',\'' + eSource + '\',\'' + eDate + '\',\'' + eCategory + '\',\'' + eCountry + '\',\'' + eSummary + '\',\'' + eUrl + '\',this)" title="Copy to clipboard">&#128203; Copy</button>';
    html += '</div>';
    html += '</div>';
  });

  if (filtered.length === 0) html = '<div style="padding:20px;color:var(--text-muted);text-align:center">No news items</div>';
  document.getElementById('news-list').innerHTML = html;
}

// ===== STATS =====
function updateStats() {
  var totalProjects = 0;
  var totalCapacity = 0;
  var countries = {};
  var dcCount = 0;
  var dcDemand = 0;

  Object.keys(CEA.energyTypes).forEach(function(type) {
    if (!CEA.layerVisibility[type]) return;
    var data = CEA.energyTypes[type].data;
    var count = data.length;
    totalProjects += count;
    document.getElementById('count-' + type).textContent = count;

    data.forEach(function(d) {
      var cap = d.capacity || d.power_mw || 0;
      if (type === 'datacenter') {
        dcCount++;
        dcDemand += cap;
      } else {
        totalCapacity += cap;
      }
      if (d.country) countries[d.country] = true;
    });
  });

  // Update hidden layer counts to 0
  Object.keys(CEA.energyTypes).forEach(function(type) {
    if (!CEA.layerVisibility[type]) {
      document.getElementById('count-' + type).textContent = '0';
    }
  });

  document.getElementById('stat-projects').textContent = formatNum(totalProjects);
  document.getElementById('stat-capacity').textContent = formatGW(totalCapacity) + ' GW';
  document.getElementById('stat-countries').textContent = Object.keys(countries).length + '+';
  document.getElementById('stat-datacenters').textContent = formatNum(dcCount);
  document.getElementById('stat-dc-demand').textContent = formatGW(dcDemand) + ' GW';

  // Ratio
  var ratio = dcDemand > 0 ? (totalCapacity / dcDemand).toFixed(1) + 'x' : '—';
  document.getElementById('stat-ratio').textContent = ratio;

  // Grid stats
  var gridLineCount = typeof transmissionLines !== 'undefined' ? transmissionLines.length : 307;
  var gridSubCount = typeof substations !== 'undefined' ? substations.length : 205;
  var gridEl = document.getElementById('stat-grid');
  if (gridEl) {
    var tVisible = CEA.gridVisible && CEA.gridVisible.transmission;
    var sVisible = CEA.gridVisible && CEA.gridVisible.substation;
    var linesStr = tVisible ? formatNum(gridLineCount) + ' lines' : '0 lines';
    var subsStr = sVisible ? formatNum(gridSubCount) + ' sub' : '0 sub';
    gridEl.textContent = linesStr + ' | ' + subsStr;
  }

  // Filter chips — 10/10 layers (8 energy + 2 grid)
  var chips = document.getElementById('filter-chips');
  var activeEnergyCount = Object.keys(CEA.layerVisibility).filter(function(k) { return CEA.layerVisibility[k]; }).length;
  var activeGridCount = CEA.gridVisible ? Object.keys(CEA.gridVisible).filter(function(k) { return CEA.gridVisible[k]; }).length : 0;
  var pipelineActive = CEA.pipelineVisible ? 1 : 0;
  var activeCount = activeEnergyCount + activeGridCount + pipelineActive;
  var totalTypes = Object.keys(CEA.layerVisibility).length + 2 + 1; // +2 grid, +1 pipeline
  chips.innerHTML = '<span class="filter-chip">' + activeCount + '/' + totalTypes + ' layers</span>';
}

// ===== KEYBOARD SHORTCUTS =====
function setupKeyboardShortcuts() {
  document.addEventListener('keydown', function(e) {
    // Escape closes panels
    if (e.key === 'Escape') {
      closeDetailPanel();
      document.getElementById('news-panel').classList.remove('open');
      document.getElementById('compare-modal').classList.add('hidden');
      document.getElementById('share-modal').classList.add('hidden');
      var hp = document.getElementById('help-panel'); if(hp) hp.classList.add('hidden');
    }
    // / focuses search
    if (e.key === '/' && document.activeElement.tagName !== 'INPUT') {
      e.preventDefault();
      document.getElementById('search-input').focus();
    }
  });
}

// ===== HELP PANEL =====
function setupHelpPanel() {
  var btn = document.getElementById('help-toggle');
  var panel = document.getElementById('help-panel');
  var closeBtn = document.getElementById('help-close');
  if (!btn || !panel) return;

  btn.addEventListener('click', function() {
    var isOpen = !panel.classList.contains('hidden');
    if (isOpen) {
      panel.classList.add('hidden');
    } else {
      // Close news panel if open
      var newsPanel = document.getElementById('news-panel');
      if (newsPanel) newsPanel.classList.remove('open');
      panel.classList.remove('hidden');
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', function() {
      panel.classList.add('hidden');
    });
  }

  // Close on Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') panel.classList.add('hidden');
  });

  // Close help panel when clicking outside of it
  document.addEventListener('click', function(e) {
    if (!panel.classList.contains('hidden') &&
        !panel.contains(e.target) &&
        e.target !== btn &&
        !btn.contains(e.target)) {
      panel.classList.add('hidden');
    }
  });
}

// ===== TOOLTIPS for layer toggles =====
function setupLayerTooltips() {
  var tooltips = {
    'btn-all-on':      'Turn all energy layers on',
    'btn-all-off':     'Turn all energy layers off',
    'btn-heatmap':     'Toggle wind density heat overlay',
    'btn-connections': 'Toggle data center fiber connections',
    'btn-pipeline':    'Show/hide proposed projects seeking grid approval',
    'theme-toggle':    'Switch dark / light mode',
    'news-toggle':     'Open energy news feed',
    'help-toggle':     'Open help & feature guide',
    'layer-panel-close': 'Collapse layers panel',
    'layer-panel-expand': 'Expand layers panel'
  };
  Object.keys(tooltips).forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.setAttribute('data-tooltip', tooltips[id]);
  });
}

// Init on load
(function() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      setupHelpPanel();
      setupLayerTooltips();
    });
  } else {
    setupHelpPanel();
    setupLayerTooltips();
  }
})();

// ===== DATABASE MODAL =====
window.openDatabaseModal = function(presetType) {
  var modal = document.getElementById('database-modal');
  if (!modal) return;

  // Always reset filters when opening so 'All' is the default
  document.getElementById('db-filter-type').value = presetType || '';
  document.getElementById('db-filter-status').value = '';
  document.getElementById('db-search').value = '';

  modal.classList.add('open');
  renderDBTable();
  document.getElementById('db-filter-type').onchange = renderDBTable;
  document.getElementById('db-filter-status').onchange = renderDBTable;
  document.getElementById('db-search').oninput = renderDBTable;
  document.getElementById('db-close').onclick = function() { modal.classList.remove('open'); };
  modal.onclick = function(e) { if (e.target === modal) modal.classList.remove('open'); };
};

function renderDBTable() {
  var typeFilter = document.getElementById('db-filter-type').value;
  var statusFilter = document.getElementById('db-filter-status').value;
  var searchFilter = (document.getElementById('db-search').value || '').toLowerCase();
  var tbody = document.getElementById('db-tbody');
  var countEl = document.getElementById('db-count');

  var rows = [];
  Object.keys(CEA.energyTypes).forEach(function(type) {
    if (typeFilter && type !== typeFilter) return;
    var config = CEA.energyTypes[type];
    config.data.forEach(function(d, i) {
      if (statusFilter && d.status !== statusFilter) return;
      if (searchFilter) {
        var haystack = (d.name + ' ' + d.country + ' ' + (d.owner||'') + ' ' + (d.developer||'')).toLowerCase();
        if (!haystack.includes(searchFilter)) return;
      }
      rows.push({ type: type, idx: i, d: d, config: config });
    });
  });

  countEl.textContent = rows.length + ' projects';

  var statusColors = {
    'Operational': '#4ade80',
    'Under Construction': '#fbbf24',
    'Planned': '#94a3b8',
    'Decommissioned': '#f87171'
  };

  tbody.innerHTML = rows.slice(0, 500).map(function(r) {
    var d = r.d;
    var cap = (d.capacity || d.power_mw || 0);
    var capStr = cap > 0 ? cap.toLocaleString() + ' MW' : '—';
    var sc = statusColors[d.status] || '#94a3b8';
    return '<tr onclick="selectSearchResult(\'' + r.type + '\',' + r.idx + ');document.getElementById(\'database-modal\').classList.remove(\'open\')">'
      + '<td class="td-type"><span style="color:' + r.config.color + '">' + r.config.icon + ' ' + r.config.label + '</span></td>'
      + '<td class="td-name">' + (d.name || '—') + '</td>'
      + '<td>' + (d.country || '—') + '</td>'
      + '<td class="td-cap">' + capStr + '</td>'
      + '<td class="td-status"><span class="db-status-dot" style="background:' + sc + '"></span>' + (d.status || '—') + '</td>'
      + '<td>' + (d.owner || '—') + '</td>'
      + '<td>' + (d.year || '—') + '</td>'
      + '</tr>';
  }).join('');

  if (rows.length > 500) {
    tbody.innerHTML += '<tr><td colspan="7" style="text-align:center;padding:12px;color:var(--text-muted);font-size:11px;">Showing first 500 of ' + rows.length + ' results. Use filters to narrow down.</td></tr>';
  }
}
