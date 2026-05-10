// ========================================
// Clean Energy Atlas — Map Engine
// ========================================

var CEA = window.CEA || {};
window.CEA = CEA;

// Energy type configuration
CEA.energyTypes = {
  wind:        { label: 'Wind',         icon: '💨', color: '#4ade80', data: null, field: 'capacity' },
  solar:       { label: 'Solar',        icon: '☀️', color: '#fbbf24', data: null, field: 'capacity' },
  hydro:       { label: 'Hydro',        icon: '💧', color: '#38bdf8', data: null, field: 'capacity' },
  geothermal:  { label: 'Geothermal',   icon: '🌋', color: '#f97316', data: null, field: 'capacity' },
  nuclear:     { label: 'Nuclear',      icon: '⚛️', color: '#a78bfa', data: null, field: 'capacity' },
  hydrogen:    { label: 'Hydrogen',     icon: '🔵', color: '#34d399', data: null, field: 'capacity' },
  storage:     { label: 'Storage',      icon: '🔋', color: '#fb7185', data: null, field: 'capacity' },
  datacenter:  { label: 'Data Centers', icon: '🖥️', color: '#94a3b8', data: null, field: 'power_mw' }
};

// State
CEA.map = null;
CEA.layerVisibility = {};
CEA.heatmapOn = false;
CEA.connectionsOn = true;
CEA.dcConnections = [];
CEA.favorites = [];
CEA.compareList = [];
CEA.currentPopup = null;
CEA.currentLang = 'en';
CEA.gridVisible = { transmission: true, substation: true };

// Initialize data references
function initData() {
  CEA.energyTypes.wind.data = typeof windFarms !== 'undefined' ? windFarms : [];
  CEA.energyTypes.solar.data = typeof solarFarms !== 'undefined' ? solarFarms : [];
  CEA.energyTypes.hydro.data = typeof hydroPlants !== 'undefined' ? hydroPlants : [];
  CEA.energyTypes.geothermal.data = typeof geothermalPlants !== 'undefined' ? geothermalPlants : [];
  CEA.energyTypes.nuclear.data = typeof nuclearPlants !== 'undefined' ? nuclearPlants : [];
  CEA.energyTypes.hydrogen.data = typeof hydrogenPlants !== 'undefined' ? hydrogenPlants : [];
  CEA.energyTypes.storage.data = typeof storagePlants !== 'undefined' ? storagePlants : [];
  CEA.energyTypes.datacenter.data = typeof dataCenters !== 'undefined' ? dataCenters : [];

  // Inject _type into each record
  Object.keys(CEA.energyTypes).forEach(function(type) {
    CEA.energyTypes[type].data.forEach(function(d) { d._type = type; });
    CEA.layerVisibility[type] = false; // All energy layers OFF by default
  });
}

// Get marker size from capacity
function getMarkerSize(mw) {
  if (!mw || mw <= 0) return 4;
  if (mw < 100) return 4;
  if (mw < 500) return 6;
  if (mw < 1000) return 8;
  if (mw < 2000) return 11;
  return 14;
}

// Convert data array to GeoJSON
function toGeoJSON(items, type) {
  var features = [];
  for (var i = 0; i < items.length; i++) {
    var d = items[i];
    if (!d.lat || !d.lng) continue;
    var cap = d.capacity || d.power_mw || 0;
    features.push({
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [d.lng, d.lat] },
      properties: {
        idx: i,
        _type: type,
        name: d.name || '',
        country: d.country || '',
        capacity: cap,
        status: d.status || '',
        year: d.year || '',
        markerSize: getMarkerSize(cap),
        isOffshore: (d.type === 'offshore' || d.type === 'floating') ? true : false
      }
    });
  }
  return { type: 'FeatureCollection', features: features };
}

// Dark map style
function buildMapStyle(lang) {
  var textField = lang === 'en' ? ['coalesce', ['get', 'name:en'], ['get', 'name:latin'], ['get', 'name']]
    : ['coalesce', ['get', 'name:' + lang], ['get', 'name:en'], ['get', 'name:latin'], ['get', 'name']];
  return {
    version: 8,
    name: 'cea-dark',
    sources: {
      openfree: { type: 'vector', url: 'https://tiles.openfreemap.org/planet' }
    },
    glyphs: 'https://demotiles.maplibre.org/font/{fontstack}/{range}.pbf',
    layers: [
      {
        id: 'background',
        type: 'background',
        paint: { 'background-color': '#060d1a' }
      },
      {
        id: 'water',
        type: 'fill',
        source: 'openfree',
        'source-layer': 'water',
        paint: { 'fill-color': '#071020' }
      },
      {
        id: 'landcover',
        type: 'fill',
        source: 'openfree',
        'source-layer': 'landcover',
        paint: { 'fill-color': '#0f1e30', 'fill-opacity': 0.5 }
      },
      {
        id: 'landuse',
        type: 'fill',
        source: 'openfree',
        'source-layer': 'landuse',
        paint: { 'fill-color': '#0e1c30', 'fill-opacity': 0.3 }
      },
      {
        id: 'land',
        type: 'fill',
        source: 'openfree',
        'source-layer': 'landmass',
        paint: { 'fill-color': '#0e1c30', 'fill-opacity': 1.0 }
      },
      {
        id: 'boundary',
        type: 'line',
        source: 'openfree',
        'source-layer': 'boundary',
        filter: ['==', ['get', 'admin_level'], 2],
        paint: { 'line-color': '#2e4d72', 'line-width': 1.2, 'line-opacity': 0.85 }
      },
      {
        // CEA v0.3 Upgrade 5 — state / province boundaries appear at zoom 3+
        id: 'boundary-state',
        type: 'line',
        source: 'openfree',
        'source-layer': 'boundary',
        filter: ['==', ['get', 'admin_level'], 4],
        minzoom: 3,
        paint: { 'line-color': '#2e4d72', 'line-width': 0.7, 'line-opacity': 0.55, 'line-dasharray': [3, 2] }
      },
      {
        id: 'country-labels',
        type: 'symbol',
        source: 'openfree',
        'source-layer': 'place',
        filter: ['==', ['get', 'class'], 'country'],
        layout: {
          'text-field': textField,
          'text-font': ['Noto Sans Regular'],
          'text-size': ['interpolate', ['linear'], ['zoom'], 1, 10, 4, 14, 6, 16],
          'text-transform': 'uppercase',
          'text-letter-spacing': 0.1,
          'text-max-width': 8
        },
        paint: {
          'text-color': '#4a7aaa',
          'text-halo-color': '#060d1a',
          'text-halo-width': 2
        }
      },
      {
        // CEA v0.3 Upgrade 5 — state / province name labels at zoom 4+
        id: 'state-labels',
        type: 'symbol',
        source: 'openfree',
        'source-layer': 'place',
        filter: ['==', ['get', 'class'], 'state'],
        minzoom: 4,
        layout: {
          'text-field': textField,
          'text-font': ['Noto Sans Regular'],
          'text-size': ['interpolate', ['linear'], ['zoom'], 4, 10, 7, 14],
          'text-transform': 'uppercase',
          'text-letter-spacing': 0.06,
          'text-max-width': 8
        },
        paint: {
          'text-color': '#5e8ab4',
          'text-halo-color': '#060d1a',
          'text-halo-width': 1.6
        }
      },
      {
        id: 'city-labels',
        type: 'symbol',
        source: 'openfree',
        'source-layer': 'place',
        filter: ['all', ['==', ['get', 'class'], 'city'], ['>=', ['get', 'rank'], 1], ['<=', ['get', 'rank'], 8]],
        minzoom: 4,
        layout: {
          'text-field': textField,
          'text-font': ['Noto Sans Regular'],
          'text-size': ['interpolate', ['linear'], ['zoom'], 4, 10, 8, 14],
          'text-max-width': 8
        },
        paint: {
          'text-color': '#3a6494',
          'text-halo-color': '#060d1a',
          'text-halo-width': 1.5
        }
      }
    ]
  };
}

// Light map style override — looks up layers by id to be resilient to ordering changes
function buildLightStyle(lang) {
  var style = buildMapStyle(lang);

  function setLayer(id, prop, value) {
    for (var i = 0; i < style.layers.length; i++) {
      if (style.layers[i].id === id) {
        if (!style.layers[i].paint) style.layers[i].paint = {};
        style.layers[i].paint[prop] = value;
        return;
      }
    }
  }

  // CEA v0.3.3 — stronger land/ocean contrast.
  // Ocean = deep slate-blue, Land = warm cream/parchment. Coastlines now read clearly.
  var OCEAN = '#5b8db8';   // deeper, more saturated blue
  var LAND  = '#f4ecd8';   // warm cream (vs. previous near-white)
  var LAND_2 = '#ede2c4';  // slightly darker landuse for variation

  // Background / water
  setLayer('background', 'background-color', OCEAN);
  setLayer('water', 'fill-color', OCEAN);
  // Land
  setLayer('landcover', 'fill-color', LAND);
  setLayer('landuse', 'fill-color', LAND_2);
  setLayer('land', 'fill-color', LAND);
  // Country borders — stronger so country shapes pop
  setLayer('boundary', 'line-color', '#3a5070');
  setLayer('boundary', 'line-width', 1.4);
  // State borders + labels (light mode)
  setLayer('boundary-state', 'line-color', '#7c8fa8');
  setLayer('boundary-state', 'line-opacity', 0.75);
  setLayer('state-labels', 'text-color', '#2a3850');
  setLayer('state-labels', 'text-halo-color', LAND);
  // Country and city labels
  setLayer('country-labels', 'text-color', '#1a2840');
  setLayer('country-labels', 'text-halo-color', LAND);
  setLayer('city-labels', 'text-color', '#2a3850');
  setLayer('city-labels', 'text-halo-color', LAND);

  // Safety net: override any unknown fill / background layers to prevent dark bleed-through
  var knownIds = { background:1, water:1, landcover:1, landuse:1, land:1 };
  for (var i = 0; i < style.layers.length; i++) {
    var l = style.layers[i];
    if (knownIds[l.id]) continue;
    if (!l.paint) continue;
    if (l.type === 'fill' && l.paint['fill-color']) {
      l.paint['fill-color'] = LAND_2;
    }
    if (l.type === 'background' && l.paint['background-color']) {
      l.paint['background-color'] = OCEAN;
    }
  }
  return style;
}

// Pre-compute data center connections
function computeDCConnections() {
  CEA.dcConnections = [];
  var dcs = CEA.energyTypes.datacenter.data;
  // Build combined renewable list (wind + solar + hydro)
  var renewables = [];
  ['wind', 'solar', 'hydro'].forEach(function(t) {
    CEA.energyTypes[t].data.forEach(function(d, i) {
      if (d.lat && d.lng) renewables.push({ lat: d.lat, lng: d.lng, type: t, idx: i });
    });
  });

  for (var i = 0; i < dcs.length; i++) {
    var dc = dcs[i];
    if (!dc.lat || !dc.lng) continue;
    // Find nearest renewables within 500km
    var nearby = [];
    for (var j = 0; j < renewables.length; j++) {
      var r = renewables[j];
      var dist = haversine(dc.lat, dc.lng, r.lat, r.lng);
      if (dist <= 500) nearby.push({ dist: dist, r: r });
    }
    nearby.sort(function(a, b) { return a.dist - b.dist; });
    var top2 = nearby.slice(0, 2);
    for (var k = 0; k < top2.length; k++) {
      CEA.dcConnections.push([
        [dc.lng, dc.lat],
        [top2[k].r.lng, top2[k].r.lat]
      ]);
    }
  }
}

// CEA v0.3 Upgrade 5 — You-are-here indicator
// Client-side reverse-geocode using bounding-box lookups. Zero API dependencies.
CEA.US_STATES_BBOX = {
  // [minLon, minLat, maxLon, maxLat]
  'Alabama':       [-88.47, 30.14, -84.89, 35.01],
  'Alaska':        [-179.15, 51.21, -129.97, 71.44],
  'Arizona':       [-114.82, 31.33, -109.05, 37.00],
  'Arkansas':      [-94.62, 33.00, -89.64, 36.50],
  'California':    [-124.48, 32.53, -114.13, 42.01],
  'Colorado':      [-109.06, 36.99, -102.04, 41.00],
  'Connecticut':   [-73.73, 40.95, -71.79, 42.05],
  'Delaware':      [-75.79, 38.45, -75.05, 39.84],
  'Florida':       [-87.63, 24.40, -79.97, 31.00],
  'Georgia':       [-85.61, 30.36, -80.84, 35.00],
  'Hawaii':        [-160.30, 18.86, -154.75, 22.30],
  'Idaho':         [-117.24, 41.99, -111.04, 49.00],
  'Illinois':      [-91.51, 36.97, -87.02, 42.51],
  'Indiana':       [-88.10, 37.77, -84.78, 41.76],
  'Iowa':          [-96.64, 40.37, -90.14, 43.50],
  'Kansas':        [-102.05, 36.99, -94.59, 40.00],
  'Kentucky':      [-89.57, 36.50, -81.96, 39.15],
  'Louisiana':     [-94.04, 28.93, -88.82, 33.02],
  'Maine':         [-71.08, 43.06, -66.95, 47.46],
  'Maryland':      [-79.49, 37.91, -75.05, 39.72],
  'Massachusetts': [-73.51, 41.24, -69.93, 42.89],
  'Michigan':      [-90.42, 41.70, -82.12, 48.31],
  'Minnesota':     [-97.24, 43.50, -89.49, 49.39],
  'Mississippi':   [-91.66, 30.17, -88.10, 35.01],
  'Missouri':      [-95.77, 35.99, -89.10, 40.61],
  'Montana':       [-116.05, 44.36, -104.04, 49.00],
  'Nebraska':      [-104.05, 40.00, -95.31, 43.00],
  'Nevada':        [-120.01, 35.00, -114.04, 42.00],
  'New Hampshire': [-72.56, 42.70, -70.61, 45.31],
  'New Jersey':    [-75.56, 38.93, -73.89, 41.36],
  'New Mexico':    [-109.05, 31.33, -103.00, 37.00],
  'New York':      [-79.76, 40.50, -71.86, 45.02],
  'North Carolina':[-84.32, 33.84, -75.46, 36.59],
  'North Dakota':  [-104.05, 45.94, -96.55, 49.00],
  'Ohio':          [-84.82, 38.40, -80.52, 41.98],
  'Oklahoma':      [-103.00, 33.62, -94.43, 37.00],
  'Oregon':        [-124.57, 41.99, -116.46, 46.29],
  'Pennsylvania':  [-80.52, 39.72, -74.69, 42.27],
  'Rhode Island':  [-71.91, 41.15, -71.12, 42.02],
  'South Carolina':[-83.35, 32.03, -78.54, 35.22],
  'South Dakota':  [-104.06, 42.48, -96.44, 45.95],
  'Tennessee':     [-90.31, 34.98, -81.65, 36.68],
  'Texas':         [-106.65, 25.84, -93.51, 36.50],
  'Utah':          [-114.05, 36.99, -109.04, 42.00],
  'Vermont':       [-73.44, 42.73, -71.46, 45.02],
  'Virginia':      [-83.68, 36.54, -75.24, 39.47],
  'Washington':    [-124.85, 45.54, -116.92, 49.00],
  'West Virginia': [-82.65, 37.20, -77.72, 40.64],
  'Wisconsin':     [-92.89, 42.49, -86.25, 47.31],
  'Wyoming':       [-111.06, 40.99, -104.05, 45.01],
  'District of Columbia':[-77.12, 38.79, -76.91, 38.99]
};

CEA.COUNTRY_BBOX = {
  'United States': [-179.15, 18.86, -66.95, 71.44],
  'Canada':        [-141.00, 41.68, -52.62, 83.11],
  'Mexico':        [-118.40, 14.53, -86.71, 32.72],
  'Brazil':        [-73.99, -33.75, -34.79, 5.27],
  'United Kingdom':[-8.18, 49.96, 1.76, 60.85],
  'Ireland':       [-10.48, 51.45, -6.00, 55.39],
  'France':        [-5.14, 41.36, 9.56, 51.09],
  'Germany':       [5.87, 47.27, 15.04, 55.06],
  'Spain':         [-9.39, 35.95, 4.33, 43.79],
  'Portugal':      [-9.50, 36.96, -6.19, 42.15],
  'Italy':         [6.62, 35.49, 18.51, 47.09],
  'Netherlands':   [3.31, 50.75, 7.23, 53.55],
  'Belgium':       [2.51, 49.50, 6.41, 51.50],
  'Switzerland':   [5.96, 45.82, 10.49, 47.81],
  'Austria':       [9.53, 46.37, 17.16, 49.02],
  'Poland':        [14.12, 49.00, 24.15, 54.84],
  'Sweden':        [11.00, 55.34, 24.17, 69.07],
  'Norway':        [4.65, 57.98, 31.05, 71.19],
  'Denmark':       [8.07, 54.55, 15.20, 57.75],
  'Finland':       [20.55, 59.81, 31.59, 70.09],
  'China':         [73.50, 18.16, 134.77, 53.56],
  'Japan':         [122.93, 24.04, 153.99, 45.55],
  'South Korea':   [124.61, 33.19, 131.87, 38.62],
  'India':         [68.18, 6.75, 97.40, 35.50],
  'Australia':     [112.92, -43.64, 153.64, -10.69],
  'New Zealand':   [165.86, -47.29, 178.85, -34.39],
  'South Africa':  [16.45, -34.84, 32.89, -22.13],
  'Egypt':         [24.70, 22.00, 36.87, 31.67],
  'Saudi Arabia':  [34.50, 16.35, 55.67, 32.16],
  'United Arab Emirates':[51.58, 22.63, 56.40, 26.08],
  'Turkey':        [25.66, 35.81, 44.83, 42.11],
  'Russia':        [19.64, 41.19, 180.00, 81.86],
  'Argentina':     [-73.42, -55.06, -53.59, -21.78],
  'Chile':         [-75.65, -55.98, -66.42, -17.50],
  'Colombia':      [-79.02, -4.23, -66.86, 12.46]
};

function lookupRegion(lng, lat) {
  // 1. US states (priority — bulk of CEA users)
  for (var state in CEA.US_STATES_BBOX) {
    var b = CEA.US_STATES_BBOX[state];
    if (lng >= b[0] && lng <= b[2] && lat >= b[1] && lat <= b[3]) {
      return { state: state, country: 'United States' };
    }
  }
  // 2. Country fallback
  for (var country in CEA.COUNTRY_BBOX) {
    var c = CEA.COUNTRY_BBOX[country];
    if (lng >= c[0] && lng <= c[2] && lat >= c[1] && lat <= c[3]) {
      return { state: null, country: country };
    }
  }
  // 3. Ocean / unknown — return hemisphere
  var hemi = (lat >= 0 ? 'N' : 'S') + ' ' + (lng >= 0 ? 'E' : 'W');
  return { state: null, country: 'Open ocean (' + hemi + ')' };
}

function formatWhereLabel(z, lng, lat) {
  var region = lookupRegion(lng, lat);
  var loc;
  if (z >= 4 && region.state) {
    loc = region.state + ', USA';
  } else if (region.state) {
    loc = 'USA';
  } else {
    loc = region.country;
  }
  // Compact lat/lon at 1 decimal at low zoom, 2 at higher zoom
  var dp = z >= 5 ? 2 : 1;
  var latStr = Math.abs(lat).toFixed(dp) + '°' + (lat >= 0 ? 'N' : 'S');
  var lngStr = Math.abs(lng).toFixed(dp) + '°' + (lng >= 0 ? 'E' : 'W');
  return loc + ' · ' + latStr + ' ' + lngStr + ' · z' + z.toFixed(1);
}

function updateWhereBadge() {
  if (!CEA.map) return;
  var el = document.getElementById('map-where-text');
  if (!el) return;
  var c = CEA.map.getCenter();
  var z = CEA.map.getZoom();
  el.textContent = formatWhereLabel(z, c.lng, c.lat);
}

function setupWhereBadge() {
  // Initial paint
  updateWhereBadge();
  // Throttled update on map move
  var t = null;
  CEA.map.on('move', function() {
    if (t) return;
    t = setTimeout(function() {
      updateWhereBadge();
      t = null;
    }, 60);
  });
  CEA.map.on('zoomend', updateWhereBadge);
  CEA.map.on('moveend', updateWhereBadge);
}

function haversine(lat1, lon1, lat2, lon2) {
  var R = 6371;
  var dLat = (lat2 - lat1) * Math.PI / 180;
  var dLon = (lon2 - lon1) * Math.PI / 180;
  var a = Math.sin(dLat/2)*Math.sin(dLat/2) + Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180)*Math.sin(dLon/2)*Math.sin(dLon/2);
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

// Create the map
function initMap() {
  initData();

  // Loading screen: step 1
  updateLoadingStatus('Loading map engine...', 20);

  var isDark = document.body.classList.contains('theme-dark');
  var style = isDark ? buildMapStyle('en') : buildLightStyle('en');

  // CEA v0.3 Upgrade 1 — wider/higher default zoom centered on the US,
  // so first-time users see geographic context immediately rather than
  // being dropped onto an unfamiliar tight world view.
  CEA.map = new maplibregl.Map({
    container: 'map',
    style: style,
    center: [10, 25],    // CEA v0.3.3 — whole-world default per Jim's feedback
    zoom: 1.6,           // Whole world fits in viewport (was 3.6 US-only)
    pitch: 0,
    antialias: false,
    fadeDuration: 0,
    refreshExpiredTiles: false,
    attributionControl: false
  });

  CEA.map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'bottom-right');

  // CEA v0.3 Upgrade 5 — You-are-here indicator (no API calls; client-side bounding boxes)
  setupWhereBadge();

  CEA.map.on('load', function() {
    // Loading screen: step 2
    updateLoadingStatus('Loading energy data...', 60);

    addAllLayers();
    computeDCConnections();
    addConnectionLayer();
    addGridLayers();
    initPipelineData();
    addPipelineLayer();
    setupInteractions();
    setupGridInteractions();
    setupCountryClickHandler();

    // Enforce initial visibility: hide all energy layers (grid stays visible by default)
    Object.keys(CEA.energyTypes).forEach(function(type) {
      ['layer-' + type, 'layer-' + type + '-cluster', 'layer-' + type + '-cluster-count'].forEach(function(id) {
        if (CEA.map.getLayer(id)) CEA.map.setLayoutProperty(id, 'visibility', 'none');
      });
    });
    if (CEA.map.getLayer('layer-dc-connections')) CEA.map.setLayoutProperty('layer-dc-connections', 'visibility', 'none');
    if (CEA.map.getLayer('layer-wind-offshore')) CEA.map.setLayoutProperty('layer-wind-offshore', 'visibility', 'none');

    if (typeof initUI === 'function') initUI();
    checkUrlForProject();

    // Loading screen: step 3
    updateLoadingStatus('Preparing visualization...', 85);

    // Loading screen: dismiss after 800ms
    setTimeout(function() {
      dismissLoadingScreen();
    }, 800);
  });
}

// Add all energy layers
function addAllLayers() {
  var map = CEA.map;
  Object.keys(CEA.energyTypes).forEach(function(type) {
    var config = CEA.energyTypes[type];
    var geojson = toGeoJSON(config.data, type);
    var srcId = 'src-' + type;
    var layerId = 'layer-' + type;

    map.addSource(srcId, {
      type: 'geojson',
      data: geojson,
      cluster: config.data.length > 200,
      clusterMaxZoom: 8,
      clusterRadius: 40
    });

    // Clustered circle
    map.addLayer({
      id: layerId + '-cluster',
      type: 'circle',
      source: srcId,
      filter: ['has', 'point_count'],
      paint: {
        'circle-color': config.color,
        'circle-radius': ['step', ['get', 'point_count'], 14, 10, 18, 50, 24, 100, 30],
        'circle-opacity': 0.7,
        'circle-stroke-width': 1,
        'circle-stroke-color': config.color,
        'circle-stroke-opacity': 0.3
      }
    });

    // Cluster count
    map.addLayer({
      id: layerId + '-cluster-count',
      type: 'symbol',
      source: srcId,
      filter: ['has', 'point_count'],
      layout: {
        'text-field': '{point_count_abbreviated}',
        'text-font': ['Noto Sans Regular'],
        'text-size': 11
      },
      paint: {
        'text-color': '#ffffff'
      }
    });

    // Unclustered points
    if (type === 'datacenter') {
      // Diamond shape via rotation
      map.addLayer({
        id: layerId,
        type: 'circle',
        source: srcId,
        filter: ['!', ['has', 'point_count']],
        paint: {
          'circle-color': config.color,
          'circle-radius': ['get', 'markerSize'],
          'circle-opacity': 0.85,
          'circle-stroke-width': 1.5,
          'circle-stroke-color': '#ffffff',
          'circle-stroke-opacity': 0.4
        }
      });
    } else {
      map.addLayer({
        id: layerId,
        type: 'circle',
        source: srcId,
        filter: ['!', ['has', 'point_count']],
        paint: {
          'circle-color': config.color,
          'circle-radius': ['get', 'markerSize'],
          'circle-opacity': 0.85,
          'circle-stroke-width': 1,
          'circle-stroke-color': config.color,
          'circle-stroke-opacity': 0.3
        }
      });
    }

    // Offshore wind ring layer
    if (type === 'wind') {
      map.addLayer({
        id: 'layer-wind-offshore',
        type: 'circle',
        source: srcId,
        filter: ['==', ['get', 'isOffshore'], true],
        paint: {
          'circle-radius': ['interpolate', ['linear'], ['zoom'],
            2, ['*', ['get', 'markerSize'], 1.8],
            8, ['*', ['get', 'markerSize'], 2.5]
          ],
          'circle-color': 'transparent',
          'circle-stroke-width': 2,
          'circle-stroke-color': '#38bdf8',
          'circle-opacity': 0
        },
        layout: { 'visibility': 'none' }
      });
    }
  });

  // Add wind heatmap layer (hidden by default)
  addWindHeatmap();
}

function addWindHeatmap() {
  var map = CEA.map;
  var geojson = toGeoJSON(CEA.energyTypes.wind.data, 'wind');
  map.addSource('src-wind-heat', { type: 'geojson', data: geojson });
  map.addLayer({
    id: 'layer-wind-heatmap',
    type: 'heatmap',
    source: 'src-wind-heat',
    maxzoom: 12,
    paint: {
      'heatmap-weight': ['interpolate', ['linear'], ['get', 'capacity'], 0, 0, 2000, 1],
      'heatmap-intensity': ['interpolate', ['linear'], ['zoom'], 0, 0.6, 9, 2],
      'heatmap-color': [
        'interpolate', ['linear'], ['heatmap-density'],
        0, 'rgba(0,0,0,0)',
        0.2, 'rgba(74,222,128,0.2)',
        0.4, 'rgba(74,222,128,0.4)',
        0.6, 'rgba(251,191,36,0.6)',
        0.8, 'rgba(249,115,22,0.8)',
        1, 'rgba(239,68,68,1)'
      ],
      'heatmap-radius': ['interpolate', ['linear'], ['zoom'], 0, 8, 6, 30, 12, 50],
      'heatmap-opacity': 0
    }
  });
}

function addConnectionLayer() {
  var features = CEA.dcConnections.map(function(coords) {
    return {
      type: 'Feature',
      geometry: { type: 'LineString', coordinates: coords }
    };
  });

  CEA.map.addSource('src-dc-connections', {
    type: 'geojson',
    data: { type: 'FeatureCollection', features: features }
  });

  CEA.map.addLayer({
    id: 'layer-dc-connections',
    type: 'line',
    source: 'src-dc-connections',
    paint: {
      'line-color': 'rgba(100, 120, 160, 0.6)',
      'line-width': 0.5
    }
  });
}

// ===== GRID LAYERS =====

// Build GeoJSON for transmission lines
function transmissionLinesGeoJSON() {
  var lines = typeof transmissionLines !== 'undefined' ? transmissionLines : [];
  var features = [];
  for (var i = 0; i < lines.length; i++) {
    var d = lines[i];
    if (!d.coordinates || d.coordinates.length < 2) continue;
    features.push({
      type: 'Feature',
      geometry: { type: 'LineString', coordinates: d.coordinates },
      properties: {
        idx: i,
        id: d.id,
        name: d.name || '',
        country: d.country || '',
        region: d.region || '',
        voltage_kv: d.voltage_kv || 0,
        type: d.type || 'AC',
        length_km: d.length_km || 0,
        operator: d.operator || '',
        status: d.status || '',
        capacity_mw: d.capacity_mw || 0
      }
    });
  }
  return { type: 'FeatureCollection', features: features };
}

// Build GeoJSON for substations
function substationsGeoJSON() {
  var subs = typeof substations !== 'undefined' ? substations : [];
  var features = [];
  for (var i = 0; i < subs.length; i++) {
    var d = subs[i];
    if (!d.lat || !d.lng) continue;
    features.push({
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [d.lng, d.lat] },
      properties: {
        idx: i,
        id: d.id,
        name: d.name || '',
        country: d.country || '',
        voltage_kv: d.voltage_kv || 0,
        type: d.type || 'substation',
        operator: d.operator || '',
        capacity_mw: d.capacity_mw || 0
      }
    });
  }
  return { type: 'FeatureCollection', features: features };
}

// Voltage-based line color expression
function voltageColorExpr() {
  return [
    'case',
    // HVDC or 800kV+
    ['any',
      ['==', ['get', 'type'], 'HVDC'],
      ['==', ['get', 'type'], 'UHVDC'],
      ['>=', ['get', 'voltage_kv'], 800]
    ], '#ff6b6b',
    // 500-765 kV
    ['all', ['>=', ['get', 'voltage_kv'], 500], ['<', ['get', 'voltage_kv'], 800]], '#ffd93d',
    // 345 kV
    ['all', ['>=', ['get', 'voltage_kv'], 345], ['<', ['get', 'voltage_kv'], 500]], '#6bcb77',
    // 230kV and below
    '#4d96ff'
  ];
}

// Voltage-based line width expression
function voltageWidthExpr() {
  return [
    'case',
    ['any',
      ['==', ['get', 'type'], 'HVDC'],
      ['==', ['get', 'type'], 'UHVDC'],
      ['>=', ['get', 'voltage_kv'], 800]
    ], 2.5,
    ['all', ['>=', ['get', 'voltage_kv'], 500], ['<', ['get', 'voltage_kv'], 800]], 2.0,
    ['all', ['>=', ['get', 'voltage_kv'], 345], ['<', ['get', 'voltage_kv'], 500]], 1.5,
    1.0
  ];
}

function addGridLayers() {
  var map = CEA.map;

  // --- Transmission lines ---
  map.addSource('transmission-source', {
    type: 'geojson',
    data: transmissionLinesGeoJSON()
  });

  map.addLayer({
    id: 'transmission-lines',
    type: 'line',
    source: 'transmission-source',
    layout: { 'line-join': 'round', 'line-cap': 'round', visibility: 'visible' },
    paint: {
      'line-color': voltageColorExpr(),
      'line-width': voltageWidthExpr(),
      'line-opacity': 0.9
    }
  });

  // --- Substations ---
  map.addSource('substation-source', {
    type: 'geojson',
    data: substationsGeoJSON()
  });

  map.addLayer({
    id: 'substations-layer',
    type: 'circle',
    source: 'substation-source',
    minzoom: 4,
    layout: { visibility: 'visible' },
    paint: {
      'circle-color': '#ffd93d',
      'circle-radius': 4,
      'circle-opacity': 0.85,
      'circle-stroke-width': 1,
      'circle-stroke-color': '#ffffff',
      'circle-stroke-opacity': 0.4
    }
  });
}

// Toggle grid layer visibility
function toggleGridLayer(type, visible) {
  CEA.gridVisible[type] = visible;
  var vis = visible ? 'visible' : 'none';
  var map = CEA.map;
  if (type === 'transmission') {
    if (map.getLayer('transmission-lines')) map.setLayoutProperty('transmission-lines', 'visibility', vis);
  } else if (type === 'substation') {
    if (map.getLayer('substations-layer')) map.setLayoutProperty('substations-layer', 'visibility', vis);
  }
  if (typeof updateStats === 'function') updateStats();
}

// Grid click interactions
function setupGridInteractions() {
  var map = CEA.map;

  // Transmission line click
  map.on('click', 'transmission-lines', function(e) {
    if (!e.features || !e.features.length) return;
    var p = e.features[0].properties;
    var typeLabel = p.type || 'AC';
    var colorMap = { 'HVDC': '#ff6b6b', 'UHVDC': '#ff6b6b' };
    var vkv = p.voltage_kv || 0;
    var dotColor = (typeLabel === 'HVDC' || typeLabel === 'UHVDC' || vkv >= 800) ? '#ff6b6b'
      : (vkv >= 500) ? '#ffd93d'
      : (vkv >= 345) ? '#6bcb77'
      : '#4d96ff';
    var html = '<div class="popup-name"><span class="popup-type-dot" style="background:' + dotColor + '"></span>' + esc(p.name) + '</div>';
    html += '<div class="popup-meta">';
    html += '<span>⚡ ' + typeLabel + ' · ' + esc(p.country) + '</span>';
    html += '<span>' + p.voltage_kv + ' kV · ' + formatNum(p.length_km) + ' km</span>';
    html += '<span>Operator: ' + esc(p.operator || '—') + '</span>';
    html += '<span>' + formatNum(p.capacity_mw) + ' MW · ' + esc(p.status || '') + '</span>';
    html += '</div>';
    if (CEA.currentPopup) CEA.currentPopup.remove();
    CEA.currentPopup = new maplibregl.Popup({ closeButton: true, closeOnClick: false, offset: 12 })
      .setLngLat(e.lngLat)
      .setHTML(html)
      .addTo(map);
  });

  // Substation click
  map.on('click', 'substations-layer', function(e) {
    if (!e.features || !e.features.length) return;
    var p = e.features[0].properties;
    var html = '<div class="popup-name"><span class="popup-type-dot" style="background:#ffd93d"></span>' + esc(p.name) + '</div>';
    html += '<div class="popup-meta">';
    html += '<span>🔌 ' + esc(p.type || 'Substation') + ' · ' + esc(p.country) + '</span>';
    html += '<span>' + p.voltage_kv + ' kV</span>';
    html += '<span>Operator: ' + esc(p.operator || '—') + '</span>';
    html += '<span>' + formatNum(p.capacity_mw) + ' MW</span>';
    html += '</div>';
    if (CEA.currentPopup) CEA.currentPopup.remove();
    CEA.currentPopup = new maplibregl.Popup({ closeButton: true, closeOnClick: false, offset: 12 })
      .setLngLat(e.lngLat)
      .setHTML(html)
      .addTo(map);
  });

  // Hover cursors
  map.on('mouseenter', 'transmission-lines', function() { map.getCanvas().style.cursor = 'pointer'; });
  map.on('mouseleave', 'transmission-lines', function() { map.getCanvas().style.cursor = ''; });
  map.on('mouseenter', 'substations-layer', function() { map.getCanvas().style.cursor = 'pointer'; });
  map.on('mouseleave', 'substations-layer', function() { map.getCanvas().style.cursor = ''; });

  // Hover tooltip for transmission lines
  map.on('mousemove', 'transmission-lines', function(e) {
    if (!e.features || !e.features.length) return;
    var p = e.features[0].properties;
    var vkv = p.voltage_kv || 0;
    var typeLabel = p.type || 'AC';
    var dotColor = (typeLabel === 'HVDC' || typeLabel === 'UHVDC' || vkv >= 800) ? '#ff6b6b'
      : (vkv >= 500) ? '#ffd93d'
      : (vkv >= 345) ? '#6bcb77'
      : '#4d96ff';
    var html = '<div class="popup-name"><span class="popup-type-dot" style="background:' + dotColor + '"></span>' + esc(p.name) + '</div>';
    html += '<div class="popup-meta"><span>' + p.voltage_kv + ' kV · ' + typeLabel + ' · ' + formatNum(p.length_km) + ' km</span></div>';
    if (CEA.currentPopup) CEA.currentPopup.remove();
    CEA.currentPopup = new maplibregl.Popup({ closeButton: false, closeOnClick: false, offset: 12 })
      .setLngLat(e.lngLat)
      .setHTML(html)
      .addTo(map);
  });
  map.on('mouseleave', 'transmission-lines', function() {
    if (CEA.currentPopup) { CEA.currentPopup.remove(); CEA.currentPopup = null; }
  });

  // Hover tooltip for substations
  map.on('mousemove', 'substations-layer', function(e) {
    if (!e.features || !e.features.length) return;
    var p = e.features[0].properties;
    var html = '<div class="popup-name"><span class="popup-type-dot" style="background:#ffd93d"></span>' + esc(p.name) + '</div>';
    html += '<div class="popup-meta"><span>' + p.voltage_kv + ' kV · ' + esc(p.country) + '</span></div>';
    if (CEA.currentPopup) CEA.currentPopup.remove();
    CEA.currentPopup = new maplibregl.Popup({ closeButton: false, closeOnClick: false, offset: 12 })
      .setLngLat(e.lngLat)
      .setHTML(html)
      .addTo(map);
  });
  map.on('mouseleave', 'substations-layer', function() {
    if (CEA.currentPopup) { CEA.currentPopup.remove(); CEA.currentPopup = null; }
  });
}

// ===== END GRID LAYERS =====

// Toggle layer visibility
function toggleLayer(type, visible) {
  CEA.layerVisibility[type] = visible;
  var vis = visible ? 'visible' : 'none';
  var map = CEA.map;
  ['layer-' + type, 'layer-' + type + '-cluster', 'layer-' + type + '-cluster-count'].forEach(function(id) {
    if (map.getLayer(id)) map.setLayoutProperty(id, 'visibility', vis);
  });
  // Connection lines linked to datacenter layer
  if (type === 'datacenter') {
    if (map.getLayer('layer-dc-connections')) {
      map.setLayoutProperty('layer-dc-connections', 'visibility', (visible && CEA.connectionsOn) ? 'visible' : 'none');
    }
  }
  // Offshore wind ring layer
  if (type === 'wind' && map.getLayer('layer-wind-offshore')) {
    map.setLayoutProperty('layer-wind-offshore', 'visibility', visible ? 'visible' : 'none');
  }
  if (typeof updateStats === 'function') updateStats();
}

function toggleHeatmap(on) {
  CEA.heatmapOn = on;
  CEA.map.setPaintProperty('layer-wind-heatmap', 'heatmap-opacity', on ? 0.7 : 0);
}

function toggleConnections(on) {
  CEA.connectionsOn = on;
  var vis = (on && CEA.layerVisibility.datacenter) ? 'visible' : 'none';
  if (CEA.map.getLayer('layer-dc-connections')) {
    CEA.map.setLayoutProperty('layer-dc-connections', 'visibility', vis);
  }
}

// Map interactions
function setupInteractions() {
  var map = CEA.map;
  var allLayers = [];
  var clusterLayers = [];
  Object.keys(CEA.energyTypes).forEach(function(type) {
    allLayers.push('layer-' + type);
    clusterLayers.push('layer-' + type + '-cluster');
  });

  // Click unclustered
  allLayers.forEach(function(layerId) {
    // Derive type from layer ID as authoritative fallback
    var layerType = layerId.replace('layer-', '');

    map.on('click', layerId, function(e) {
      if (!e.features || !e.features.length) return;
      var f = e.features[0];
      // Use property _type; fall back to layer-derived type for robustness
      var type = f.properties._type || layerType;
      var idx  = typeof f.properties.idx !== 'undefined' ? f.properties.idx : null;

      // Try to get the full data item
      var typeData = CEA.energyTypes[type];
      var item = (typeData && idx !== null) ? typeData.data[idx] : null;

      if (item && typeof openDetailPanel === 'function') {
        openDetailPanel(item, type);
        return;
      }

      // Fallback: show a popup with whatever we have from feature properties
      if (typeof openDetailPanel === 'function') {
        var props = f.properties;
        // Build a synthetic item from GeoJSON properties so the panel still opens
        var synthetic = {
          name:     props.name     || 'Unknown Project',
          country:  props.country  || props.state || 'Data coming soon',
          capacity: props.capacity || 0,
          status:   props.status   || 'Data coming soon',
          year:     props.year     || 'Data coming soon',
          type:     props._type    || layerType,
          lat:      f.geometry.coordinates[1],
          lng:      f.geometry.coordinates[0],
          _fallback: true
        };
        // Only open panel if we at least have a name
        if (synthetic.name !== 'Unknown Project' || props.name) {
          var resolvedType = type || layerType;
          if (CEA.energyTypes[resolvedType]) {
            openDetailPanel(synthetic, resolvedType);
          }
        }
      }
    });

    map.on('mouseenter', layerId, function() { map.getCanvas().style.cursor = 'pointer'; });
    map.on('mouseleave', layerId, function() { map.getCanvas().style.cursor = ''; });

    // Hover popup
    map.on('mousemove', layerId, function(e) {
      if (!e.features || !e.features.length) return;
      var f = e.features[0];
      var type = f.properties._type || layerType;
      var config = CEA.energyTypes[type] || { color: '#94a3b8', icon: '⚡', label: type };
      var cap = f.properties.capacity || 0;
      var unit = type === 'datacenter' ? 'MW demand' : 'MW';
      var name = f.properties.name || 'Project';
      var country = f.properties.country || '';
      var status = f.properties.status || '';
      var html = '<div class="popup-name"><span class="popup-type-dot" style="background:' + config.color + '"></span>' + esc(name) + '</div>';
      html += '<div class="popup-meta">';
      html += '<span>' + config.icon + ' ' + config.label + (country ? ' · ' + esc(country) : '') + '</span>';
      html += '<span>' + (cap > 0 ? formatNum(cap) + ' ' + unit : '') + (status ? (cap > 0 ? ' · ' : '') + esc(status) : '') + '</span>';
      html += '</div>';

      if (CEA.currentPopup) CEA.currentPopup.remove();
      CEA.currentPopup = new maplibregl.Popup({ closeButton: false, closeOnClick: false, offset: 12 })
        .setLngLat(e.lngLat)
        .setHTML(html)
        .addTo(map);
    });

    map.on('mouseleave', layerId, function() {
      if (CEA.currentPopup) { CEA.currentPopup.remove(); CEA.currentPopup = null; }
    });
  });

  // Click cluster → jump straight to fully expanded zoom in one click
  clusterLayers.forEach(function(clusterId) {
    map.on('click', clusterId, function(e) {
      var features = map.queryRenderedFeatures(e.point, { layers: [clusterId] });
      if (!features.length) return;
      map.easeTo({ center: features[0].geometry.coordinates, zoom: 9, duration: 800 });
    });
    map.on('mouseenter', clusterId, function() { map.getCanvas().style.cursor = 'pointer'; });
    map.on('mouseleave', clusterId, function() { map.getCanvas().style.cursor = ''; });
  });
}

// Change map language
function changeMapLanguage(lang) {
  CEA.currentLang = lang;
  var isDark = document.body.classList.contains('theme-dark');
  var style = isDark ? buildMapStyle(lang) : buildLightStyle(lang);
  // Re-apply text-field to label layers
  var textField = lang === 'en'
    ? ['coalesce', ['get', 'name:en'], ['get', 'name:latin'], ['get', 'name']]
    : ['coalesce', ['get', 'name:' + lang], ['get', 'name:en'], ['get', 'name:latin'], ['get', 'name']];

  ['country-labels', 'city-labels'].forEach(function(id) {
    if (CEA.map.getLayer(id)) {
      CEA.map.setLayoutProperty(id, 'text-field', textField);
    }
  });
}

// Switch theme
function switchTheme(isDark) {
  // Rebuild style layers for background/water/borders
  var lang = CEA.currentLang;
  if (isDark) {
    CEA.map.setPaintProperty('background', 'background-color', '#060d1a');
    CEA.map.setPaintProperty('water', 'fill-color', '#071020');
    if (CEA.map.getLayer('landcover')) CEA.map.setPaintProperty('landcover', 'fill-color', '#0f1e30');
    if (CEA.map.getLayer('landuse')) CEA.map.setPaintProperty('landuse', 'fill-color', '#0e1c30');
    CEA.map.setPaintProperty('boundary', 'line-color', '#2e4d72');
    CEA.map.setPaintProperty('boundary', 'line-width', 1.2);
    CEA.map.setPaintProperty('boundary', 'line-opacity', 0.85);
    CEA.map.setPaintProperty('country-labels', 'text-color', '#4a7aaa');
    CEA.map.setPaintProperty('country-labels', 'text-halo-color', '#060d1a');
    if (CEA.map.getLayer('city-labels')) {
      CEA.map.setPaintProperty('city-labels', 'text-color', '#3a6494');
      CEA.map.setPaintProperty('city-labels', 'text-halo-color', '#060d1a');
    }
  } else {
    // CEA v0.3.3 — high-contrast light theme: deep blue ocean + cream land
    CEA.map.setPaintProperty('background', 'background-color', '#5b8db8');
    CEA.map.setPaintProperty('water', 'fill-color', '#5b8db8');
    if (CEA.map.getLayer('landcover')) CEA.map.setPaintProperty('landcover', 'fill-color', '#f4ecd8');
    if (CEA.map.getLayer('landuse')) CEA.map.setPaintProperty('landuse', 'fill-color', '#ede2c4');
    CEA.map.setPaintProperty('boundary', 'line-color', '#3a5070');
    CEA.map.setPaintProperty('boundary', 'line-width', 1.4);
    CEA.map.setPaintProperty('country-labels', 'text-color', '#1a2840');
    CEA.map.setPaintProperty('country-labels', 'text-halo-color', '#f4ecd8');
    if (CEA.map.getLayer('city-labels')) {
      CEA.map.setPaintProperty('city-labels', 'text-color', '#2a3850');
      CEA.map.setPaintProperty('city-labels', 'text-halo-color', '#f4ecd8');
    }
  }
}

// Fly to a project
function flyToProject(item) {
  if (item && item.lat && item.lng) {
    CEA.map.flyTo({ center: [item.lng, item.lat], zoom: 8, duration: 1500 });
  }
}

// Check URL params for a linked project
function checkUrlForProject() {
  var params = new URLSearchParams(window.location.search);
  var pType = params.get('type');
  var pIdx = params.get('idx');
  if (pType && pIdx !== null && CEA.energyTypes[pType]) {
    var idx = parseInt(pIdx, 10);
    var item = CEA.energyTypes[pType].data[idx];
    if (item) {
      flyToProject(item);
      setTimeout(function() {
        if (typeof openDetailPanel === 'function') openDetailPanel(item, pType);
      }, 1600);
    }
  }
}

// Format numbers
function formatNum(n) {
  if (n === undefined || n === null) return '—';
  if (typeof n === 'number') {
    return n.toLocaleString('en-US');
  }
  return String(n);
}

function formatGW(mw) {
  if (!mw) return '0';
  return (mw / 1000).toFixed(1);
}

function formatCost(val) {
  if (!val) return '—';
  if (val >= 1e9) return '$' + (val / 1e9).toFixed(1) + 'B';
  if (val >= 1e6) return '$' + (val / 1e6).toFixed(0) + 'M';
  if (val >= 1000) return '$' + (val / 1000).toFixed(0) + 'M'; // some data stores in millions
  return '$' + val;
}

// ===== LOADING SCREEN =====

function updateLoadingStatus(msg, pct) {
  var s = document.getElementById('loading-status');
  var b = document.getElementById('loading-bar');
  if (s) s.textContent = msg;
  if (b) b.style.width = pct + '%';
}

function dismissLoadingScreen() {
  var screen = document.getElementById('loading-screen');
  if (!screen) return;
  updateLoadingStatus('Ready', 100);
  setTimeout(function() {
    screen.classList.add('fade-out');
    setTimeout(function() {
      if (screen.parentNode) screen.parentNode.removeChild(screen);
    }, 650);
  }, 400);
}

// ===== COUNTRY SUMMARY CARD =====

function getCountryStats(countryName) {
  var stats = { wind: 0, solar: 0, hydro: 0, geothermal: 0, nuclear: 0, hydrogen: 0, storage: 0, datacenter: 0 };
  var totalCapacity = 0;
  var totalProjects = 0;
  var dcDemand = 0;

  Object.keys(CEA.energyTypes).forEach(function(type) {
    var projects = CEA.energyTypes[type].data.filter(function(d) {
      return d.country === countryName || (d.country && d.country.indexOf(countryName) !== -1);
    });
    stats[type] = projects.length;
    totalProjects += projects.length;
    projects.forEach(function(p) {
      if (p.capacity) totalCapacity += p.capacity;
      if (p.power_mw) dcDemand += p.power_mw;
    });
  });

  return { stats: stats, totalCapacity: totalCapacity, totalProjects: totalProjects, dcDemand: dcDemand };
}

function buildCountryCardHTML(countryName, data) {
  var typeOrder = [
    { key: 'wind',       icon: '&#x1F4A8;', label: 'Wind',     color: '#4ade80' },
    { key: 'solar',      icon: '&#x2600;&#xFE0F;', label: 'Solar', color: '#fbbf24' },
    { key: 'hydro',      icon: '&#x1F4A7;', label: 'Hydro',    color: '#38bdf8' },
    { key: 'nuclear',    icon: '&#x269B;&#xFE0F;', label: 'Nuclear', color: '#a78bfa' },
    { key: 'geothermal', icon: '&#x1F30B;', label: 'Geotherm.',color: '#f97316' },
    { key: 'hydrogen',   icon: '&#x1F7E2;', label: 'H₂',        color: '#34d399' },
    { key: 'storage',    icon: '&#x1F50B;', label: 'Storage',  color: '#fb7185' },
    { key: 'datacenter', icon: '&#x1F5A5;&#xFE0F;', label: 'Data Ctrs',color: '#94a3b8' }
  ];

  // Find max count for bar scaling
  var maxCount = 0;
  typeOrder.forEach(function(t) {
    if (data.stats[t.key] > maxCount) maxCount = data.stats[t.key];
  });

  var html = '<div class="country-card-title">🌍 ' + esc(countryName.toUpperCase()) + '</div>';
  html += '<div class="country-card-divider"></div>';
  html += '<div class="country-card-totals">';
  html += '<div class="country-card-total-item"><div class="country-card-total-label">Projects</div><div class="country-card-total-value">' + formatNum(data.totalProjects) + '</div></div>';
  html += '<div class="country-card-total-item"><div class="country-card-total-label">Clean Cap.</div><div class="country-card-total-value">' + formatGW(data.totalCapacity) + ' GW</div></div>';
  html += '</div>';

  html += '<div class="country-card-rows">';
  typeOrder.forEach(function(t) {
    var count = data.stats[t.key];
    if (count === 0) return;
    var barPct = maxCount > 0 ? Math.round((count / maxCount) * 100) : 0;
    html += '<div class="country-card-row">';
    html += '<span class="country-card-row-icon">' + t.icon + '</span>';
    html += '<span class="country-card-row-label">' + t.label + '</span>';
    html += '<span class="country-card-row-count">' + count + '</span>';
    html += '<div class="country-card-bar-track"><div class="country-card-bar-fill" style="width:' + barPct + '%;background:' + t.color + '"></div></div>';
    html += '</div>';
  });
  html += '</div>';

  if (data.dcDemand > 0 || data.totalCapacity > 0) {
    html += '<div class="country-card-footer">';
    if (data.dcDemand > 0) {
      html += '<div class="country-card-footer-item"><div class="country-card-footer-label">DC Demand</div><div class="country-card-footer-value">' + formatGW(data.dcDemand) + ' GW</div></div>';
      if (data.totalCapacity > 0) {
        var ratio = (data.totalCapacity / data.dcDemand).toFixed(1) + 'x';
        html += '<div class="country-card-footer-item"><div class="country-card-footer-label">Clean/Demand</div><div class="country-card-footer-value">' + ratio + '</div></div>';
      }
    }
    html += '</div>';
  }

  return html;
}

function setupCountryClickHandler() {
  var map = CEA.map;

  // Global map click: show country summary if no marker was clicked
  // Country name resolved via queryRenderedFeatures on label/boundary layers
  map.on('click', function(e) {
    // Check if a marker layer was clicked first — if so, skip
    var markerLayerIds = [];
    Object.keys(CEA.energyTypes).forEach(function(type) {
      markerLayerIds.push('layer-' + type);
      markerLayerIds.push('layer-' + type + '-cluster');
    });
    markerLayerIds.push('transmission-lines');
    markerLayerIds.push('substations-layer');

    var markerFeatures = map.queryRenderedFeatures(e.point, { layers: markerLayerIds.filter(function(id) { return map.getLayer(id); }) });
    if (markerFeatures && markerFeatures.length > 0) return; // marker click takes priority

    // Try to get country name from place layer
    var placeFeatures = map.queryRenderedFeatures(e.point, { layers: ['country-labels'] });
    var countryName = null;

    if (placeFeatures && placeFeatures.length > 0) {
      var props = placeFeatures[0].properties;
      countryName = props['name:en'] || props['name:latin'] || props['name'] || null;
    }

    // Fallback: use boundary feature name if available
    if (!countryName) {
      var boundaryFeatures = map.queryRenderedFeatures(e.point, { layers: ['boundary'] });
      if (boundaryFeatures && boundaryFeatures.length > 0) {
        var bp = boundaryFeatures[0].properties;
        countryName = bp['name:en'] || bp['name'] || null;
      }
    }

    if (!countryName) return;

    var data = getCountryStats(countryName);
    if (data.totalProjects === 0) return;

    var html = buildCountryCardHTML(countryName, data);
    if (CEA.currentPopup) CEA.currentPopup.remove();
    CEA.currentPopup = new maplibregl.Popup({
      closeButton: true,
      closeOnClick: true,
      offset: 12,
      className: 'country-card-popup'
    })
      .setLngLat(e.lngLat)
      .setHTML(html)
      .addTo(map);
  });
}

// Initialize
document.addEventListener('DOMContentLoaded', initMap);

// ========================================
// PIPELINE LAYER — Regulatory Approval Queue
// ========================================

CEA.pipelineVisible = false;
CEA.pipelineData = [];
CEA.pipelinePopup = null;

// Pipeline status colors (ring/stroke color)
var PIPELINE_STATUS_COLORS = {
  'Applied':             '#94a3b8',   // slate — earliest stage
  'Under Study':         '#fbbf24',   // amber
  'Agreement Signed':    '#34d399',   // emerald
  'Permitted':           '#4ade80',   // green
  'Under Construction':  '#38bdf8',   // sky blue
};

var PIPELINE_STATUS_ORDER = [
  'Applied', 'Under Study', 'Agreement Signed', 'Permitted', 'Under Construction'
];

function initPipelineData() {
  CEA.pipelineData = typeof pipelineProjects !== 'undefined' ? pipelineProjects : [];
}

function addPipelineLayer() {
  var map = CEA.map;
  if (!map) return;

  var features = CEA.pipelineData.map(function(p) {
    var cfg = CEA.energyTypes[p.type] || { color: '#94a3b8' };
    return {
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [p.lng, p.lat] },
      properties: {
        id: p.id,
        name: p.name,
        type: p.type,
        iso: p.iso,
        state: p.state,
        capacity: p.capacity,
        developer: p.developer,
        queue_date: p.queue_date,
        proposed_cod: p.proposed_cod,
        pipeline_status: p.pipeline_status,
        interconnect: p.interconnect,
        gen_type_raw: p.gen_type_raw,
        fill_color: cfg.color,
        status_color: PIPELINE_STATUS_COLORS[p.pipeline_status] || '#94a3b8'
      }
    };
  });

  if (map.getSource('pipeline-source')) {
    map.getSource('pipeline-source').setData({ type: 'FeatureCollection', features: features });
    return;
  }

  map.addSource('pipeline-source', {
    type: 'geojson',
    data: { type: 'FeatureCollection', features: features },
    cluster: true,
    clusterMaxZoom: 7,
    clusterRadius: 45
  });

  // ── Cluster bubble
  map.addLayer({
    id: 'pipeline-cluster',
    type: 'circle',
    source: 'pipeline-source',
    filter: ['has', 'point_count'],
    paint: {
      'circle-color': '#0C4E54',
      'circle-radius': ['step', ['get', 'point_count'], 14, 10, 18, 50, 24, 100, 30],
      'circle-opacity': 0.80,
      'circle-stroke-width': 2,
      'circle-stroke-color': '#01696F',
      'circle-stroke-opacity': 0.6
    },
    layout: { visibility: 'none' }
  });

  // ── Cluster count label
  map.addLayer({
    id: 'pipeline-cluster-count',
    type: 'symbol',
    source: 'pipeline-source',
    filter: ['has', 'point_count'],
    layout: { visibility: 'none', 'text-field': '{point_count_abbreviated}', 'text-font': ['Noto Sans Regular'], 'text-size': 11 },
    paint: { 'text-color': '#ffffff' }
  });

  // ── Outer ring (status color) — unclustered only
  map.addLayer({
    id: 'pipeline-ring',
    type: 'circle',
    source: 'pipeline-source',
    filter: ['!', ['has', 'point_count']],
    paint: {
      'circle-radius': [
        'interpolate', ['linear'], ['zoom'],
        2, 5, 5, 8, 8, 12
      ],
      'circle-color': 'transparent',
      'circle-stroke-width': 2.5,
      'circle-stroke-color': ['get', 'status_color'],
      'circle-stroke-opacity': 0.85
    },
    layout: { visibility: 'none' }
  });

  // ── Inner dot (energy type color) — unclustered only
  map.addLayer({
    id: 'pipeline-dot',
    type: 'circle',
    source: 'pipeline-source',
    filter: ['!', ['has', 'point_count']],
    paint: {
      'circle-radius': [
        'interpolate', ['linear'], ['zoom'],
        2, 2.5, 5, 4, 8, 7
      ],
      'circle-color': ['get', 'fill_color'],
      'circle-opacity': 0.75
    },
    layout: { visibility: 'none' }
  });

  // ── Click cluster → zoom fully to de-cluster in one click
  map.on('click', 'pipeline-cluster', function(e) {
    var features = map.queryRenderedFeatures(e.point, { layers: ['pipeline-cluster'] });
    if (!features.length) return;
    map.easeTo({
      center: features[0].geometry.coordinates,
      zoom: 8,   // one above clusterMaxZoom (7) — fully expands everything
      duration: 800
    });
  });
  // ── Cluster hover popup (dropdown if ≤15 projects, simple tooltip if more)
  var clusterPopup = new maplibregl.Popup({
    closeButton: false,
    closeOnClick: false,
    offset: 12,
    className: 'pipeline-cluster-popup',
    maxWidth: '280px'
  });
  var clusterHoverTimer = null;

  map.on('mouseenter', 'pipeline-cluster', function(e) {
    map.getCanvas().style.cursor = 'pointer';
    var feature = e.features[0];
    var coords  = feature.geometry.coordinates.slice();
    var count   = feature.properties.point_count;
    var clusterId = feature.properties.cluster_id;

    if (count > 15) {
      // Simple tooltip — just the count
      clusterPopup
        .setLngLat(coords)
        .setHTML(
          '<div class="cpop-header">' +
            '<span class="cpop-count">' + count + ' projects</span>' +
            '<span class="cpop-hint">Click to zoom in</span>' +
          '</div>'
        )
        .addTo(map);
    } else {
      // Async — fetch the actual projects inside this cluster
      map.getSource('pipeline-source').getClusterLeaves(clusterId, count, 0, function(err, leaves) {
        if (err || !leaves) return;
        var cfg = function(type) { return CEA.energyTypes[type] || { icon: '⚡', label: type }; };
        var rows = leaves.map(function(leaf) {
          var p = leaf.properties;
          var c = cfg(p.type);
          return '<div class="cpop-row" onclick="(function(){' +
            'var proj = CEA.pipelineData.find(function(x){return x.id===\'' + p.id + '\';});' +
            'if(proj)showPipelineDetail(proj);' +
            'document.querySelector(\".pipeline-cluster-popup\") && CEA._clusterPopup && CEA._clusterPopup.remove();' +
            '})()">' +
            '<span class="cpop-icon">' + c.icon + '</span>' +
            '<span class="cpop-name">' + esc(p.name) + '</span>' +
            '<span class="cpop-mw">' + (p.capacity > 0 ? formatNum(p.capacity) + ' MW' : '') + '</span>' +
          '</div>';
        }).join('');

        var html =
          '<div class="cpop-header">' +
            '<span class="cpop-count">' + count + ' projects</span>' +
          '</div>' +
          '<div class="cpop-list">' + rows + '</div>' +
          '<div class="cpop-footer" onclick="(function(){' +
            'CEA._clusterPopup && CEA._clusterPopup.remove();' +
            'CEA.map.easeTo({center:[' + coords[0] + ',' + coords[1] + '],zoom:8,duration:800});' +
          '})()">↗ Zoom in to view all</div>';

        clusterPopup.setLngLat(coords).setHTML(html).addTo(map);
        CEA._clusterPopup = clusterPopup;
      });
    }
  });

  map.on('mouseleave', 'pipeline-cluster', function() {
    map.getCanvas().style.cursor = '';
    // Small delay so user can move mouse into the popup without it vanishing
    clusterHoverTimer = setTimeout(function() {
      clusterPopup.remove();
    }, 200);
  });

  // If mouse enters the popup itself, cancel the close timer
  map.getContainer().addEventListener('mouseover', function(e) {
    if (e.target.closest('.pipeline-cluster-popup')) {
      clearTimeout(clusterHoverTimer);
    }
  });
  map.getContainer().addEventListener('mouseout', function(e) {
    if (e.target.closest('.pipeline-cluster-popup') &&
        !e.relatedTarget.closest('.pipeline-cluster-popup')) {
      clusterPopup.remove();
    }
  });

  // ── Click unclustered dot → open detail panel
  map.on('click', 'pipeline-dot', function(e) {
    var props = e.features[0].properties;
    var p = CEA.pipelineData.find(function(x) { return x.id === props.id; });
    if (!p) return;
    showPipelineDetail(p);
    e.stopPropagation && e.stopPropagation();
  });

  // Hover cursor
  map.on('mouseenter', 'pipeline-dot', function() {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseleave', 'pipeline-dot', function() {
    map.getCanvas().style.cursor = '';
  });

  // Hover tooltip
  var pipelineTooltip = new maplibregl.Popup({
    closeButton: false, closeOnClick: false, offset: 10,
    className: 'pipeline-tooltip'
  });
  map.on('mousemove', 'pipeline-dot', function(e) {
    var props = e.features[0].properties;
    var cfg = CEA.energyTypes[props.type] || { icon: '⚡', label: props.type };
    pipelineTooltip
      .setLngLat(e.lngLat)
      .setHTML(
        '<div class="pipeline-tip-name">' + cfg.icon + ' ' + esc(props.name) + '</div>' +
        '<div class="pipeline-tip-meta">' + formatNum(props.capacity) + ' MW · ' + esc(props.pipeline_status) + '</div>' +
        '<div class="pipeline-tip-iso">' + esc(props.iso) + ' · ' + esc(props.state) + '</div>'
      )
      .addTo(CEA.map);
  });
  map.on('mouseleave', 'pipeline-dot', function() {
    pipelineTooltip.remove();
  });
}

function togglePipelineLayer(show) {
  var map = CEA.map;
  if (!map) return;
  CEA.pipelineVisible = show;
  var vis = show ? 'visible' : 'none';
  ['pipeline-cluster', 'pipeline-cluster-count', 'pipeline-ring', 'pipeline-dot'].forEach(function(id) {
    if (map.getLayer(id)) map.setLayoutProperty(id, 'visibility', vis);
  });
  updatePipelineStats();
}

function updatePipelineStats() {
  var statsEl = document.getElementById('stat-pipeline');
  var capEl = document.getElementById('stat-pipeline-cap');
  if (!statsEl) return;
  if (CEA.pipelineVisible && CEA.pipelineData.length > 0) {
    statsEl.textContent = CEA.pipelineData.length.toLocaleString();
    if (capEl) {
      var totalMW = CEA.pipelineData.reduce(function(s, p) { return s + p.capacity; }, 0);
      capEl.textContent = (totalMW / 1000).toFixed(0) + ' GW';
    }
  } else {
    statsEl.textContent = '—';
    if (capEl) capEl.textContent = '—';
  }
}

function showPipelineDetail(p) {
  var cfg = CEA.energyTypes[p.type] || { icon: '⚡', label: p.type, color: '#94a3b8' };
  var statusColor = PIPELINE_STATUS_COLORS[p.pipeline_status] || '#94a3b8';
  var statusIdx = PIPELINE_STATUS_ORDER.indexOf(p.pipeline_status);

  // Build progress bar
  var progressBar = '<div class="pipeline-progress-bar">';
  PIPELINE_STATUS_ORDER.forEach(function(s, i) {
    var active = i <= statusIdx;
    progressBar += '<div class="pipeline-progress-step ' + (active ? 'active' : '') + '" style="' + (active ? 'background:' + statusColor + ';border-color:' + statusColor + ';' : '') + '" title="' + s + '">' +
      '<div class="pipeline-step-label">' + s + '</div>' +
      '</div>';
    if (i < PIPELINE_STATUS_ORDER.length - 1) {
      progressBar += '<div class="pipeline-progress-connector ' + (active && i < statusIdx ? 'active' : '') + '" style="' + (active && i < statusIdx ? 'background:' + statusColor + ';' : '') + '"></div>';
    }
  });
  progressBar += '</div>';

  var html = '<div class="detail-hero" style="border-color:' + cfg.color + '">' +
    '<div class="detail-hero-icon">' + cfg.icon + '</div>' +
    '<div class="detail-hero-info">' +
      '<h2 class="detail-name">' + esc(p.name) + '</h2>' +
      '<div class="detail-location">📍 ' + (p.iso ? [p.county, p.state, 'USA'].filter(Boolean).join(', ') : [p.state || p.region, p.country].filter(Boolean).join(', ')) + '</div>' +
    '</div>' +
  '</div>' +

  '<div class="pipeline-status-badge" style="background:' + statusColor + '22;border-color:' + statusColor + ';color:' + statusColor + '">' +
    '📋 ' + p.pipeline_status +
  '</div>' +

  progressBar +

  '<div class="detail-grid">' +
    '<div class="detail-item"><div class="detail-label">Capacity</div><div class="detail-value">' + formatNum(p.capacity) + ' MW</div></div>' +
    '<div class="detail-item"><div class="detail-label">Energy Type</div><div class="detail-value">' + cfg.icon + ' ' + cfg.label + '</div></div>' +
    '<div class="detail-item"><div class="detail-label">ISO / Grid Region</div><div class="detail-value">' + esc(p.iso) + '</div></div>' +
    '<div class="detail-item"><div class="detail-label">Developer</div><div class="detail-value">' + esc(p.developer) + '</div></div>' +
    (p.queue_date ? '<div class="detail-item"><div class="detail-label">Queue Date</div><div class="detail-value">' + esc(p.queue_date) + '</div></div>' : '') +
    (p.proposed_cod ? '<div class="detail-item"><div class="detail-label">Est. Online Date</div><div class="detail-value">' + esc(p.proposed_cod) + '</div></div>' : '') +
    (p.interconnect ? '<div class="detail-item detail-item-full"><div class="detail-label">Interconnection Point</div><div class="detail-value">' + esc(p.interconnect) + '</div></div>' : '') +
    '<div class="detail-item"><div class="detail-label">Data Source</div><div class="detail-value">FERC / ' + esc(p.iso) + ' Queue</div></div>' +
  '</div>' +

  '<div class="pipeline-disclaimer">⚠️ Pipeline data sourced from public ISO interconnection queues. Project status may change — active queue does not guarantee construction. Last updated: ' + new Date().toLocaleDateString() + '</div>';

  // Open the standard detail panel
  var panel = document.getElementById('detail-panel');
  var badge = document.getElementById('detail-type-badge');
  var content = document.getElementById('detail-content');
  var actions = document.getElementById('detail-actions');

  // Related News section — match by country / type keywords
  var relatedNews = [];
  if (typeof energyNewsItems !== 'undefined') {
    var pCountry = (p.country || 'USA').toLowerCase();
    var pType    = (p.type || '').toLowerCase();
    var typeMap  = { wind: 'wind', solar: 'solar', storage: 'storage', gas: 'gas', hydro: 'hydro', other: '' };
    var typeKw   = typeMap[pType] || pType;
    relatedNews = energyNewsItems.filter(function(n) {
      var nc = (n.country || '').toLowerCase();
      var nt = (n.title + ' ' + n.summary).toLowerCase();
      var countryMatch = nc === pCountry || nc === 'global' ||
        (pCountry === 'usa' && (nc === 'usa' || nc === 'us')) ||
        (pCountry === 'us'  && (nc === 'usa' || nc === 'us'));
      var typeMatch = typeKw && nt.indexOf(typeKw) !== -1;
      return countryMatch && typeMatch;
    }).slice(0, 3);
    // Fallback: just country match
    if (relatedNews.length === 0) {
      relatedNews = energyNewsItems.filter(function(n) {
        var nc = (n.country || '').toLowerCase();
        return nc === pCountry || nc === 'global';
      }).slice(0, 2);
    }
  }

  if (relatedNews.length > 0) {
    html += '<div class="detail-section pipeline-news-section">';
    html += '<div class="detail-section-title">📰 Related News</div>';
    relatedNews.forEach(function(n) {
      var catColor = { Market: '#4ade80', Policy: '#38bdf8', Technology: '#fbbf24', Project: '#fb7185', Investment: '#a78bfa' }[n.category] || '#94a3b8';
      var hasLink = n.url && n.url !== '#' && n.url !== '';
      // Escape for inline onclick
      var eTitle    = (n.title    || '').replace(/'/g, "\\'").replace(/"/g, '&quot;');
      var eSource   = (n.source   || 'Clean Energy Atlas').replace(/'/g, "\\'").replace(/"/g, '&quot;');
      var eDate     = (n.date     || '').replace(/'/g, "\\'").replace(/"/g, '&quot;');
      var eCategory = (n.category || '').replace(/'/g, "\\'").replace(/"/g, '&quot;');
      var eCountry  = (n.country  || '').replace(/'/g, "\\'").replace(/"/g, '&quot;');
      var eSummary  = (n.summary  || '').replace(/'/g, "\\'").replace(/"/g, '&quot;');
      var eUrl      = (hasLink ? n.url : '').replace(/'/g, "\\'").replace(/"/g, '&quot;');
      html += '<div class="pipeline-news-item">';
      html += '<div class="pipeline-news-meta"><span class="pipeline-news-cat" style="color:' + catColor + '">' + esc(n.category) + '</span><span class="pipeline-news-date">' + esc(n.date) + '</span></div>';
      if (hasLink) {
        html += '<div class="pipeline-news-title"><a href="' + n.url + '" target="_blank" rel="noopener" class="pipeline-news-link">' + esc(n.title) + ' &#8599;</a></div>';
      } else {
        html += '<div class="pipeline-news-title">' + esc(n.title) + '</div>';
      }
      html += '<div class="pipeline-news-summary">' + esc(n.summary) + '</div>';
      html += '<div class="news-actions">';
      html += '<button class="news-action-btn" onclick="saveNewsPDF(\'' + eTitle + '\',\'' + eSource + '\',\'' + eDate + '\',\'' + eCategory + '\',\'' + eCountry + '\',\'' + eSummary + '\',\'' + eUrl + '\')" title="Save article as PDF">&#128196; Save PDF</button>';
      html += '<button class="news-action-btn" onclick="copyNewsToClipboard(\'' + eTitle + '\',\'' + eSource + '\',\'' + eDate + '\',\'' + eCategory + '\',\'' + eCountry + '\',\'' + eSummary + '\',\'' + eUrl + '\',this)" title="Copy to clipboard">&#128203; Copy</button>';
      html += '</div>';
      html += '</div>';
    });
    html += '</div>';
  }

  if (badge) {
    badge.textContent = '📋 Proposed Project';
    badge.style.background = statusColor + '33';
    badge.style.color = statusColor;
    badge.style.border = '1px solid ' + statusColor + '66';
  }
  if (content) content.innerHTML = html;
  if (actions) {
    actions.innerHTML =
      '<button class="btn-action" onclick="downloadPipelineCSV(\'' + p.id + '\')" title="Download CSV">📊 CSV</button>' +
      '<button class="btn-action" onclick="openPipelineJSONViewer(\'' + p.id + '\')" title="View data as table">📋 JSON</button>' +
      '<button class="btn-action" onclick="downloadPipelineTXT(\'' + p.id + '\')" title="Download text report">📄 TXT</button>' +
      '<button class="btn-action" onclick="downloadPipelinePDF(\'' + p.id + '\')" title="Open printable PDF report">📑 PDF</button>';
  }
  if (panel) panel.classList.add('open');
}

function downloadPipelineCSV(id) {
  var p = CEA.pipelineData.find(function(x) { return x.id === id; });
  if (!p) return;
  var rows = [
    ['Field', 'Value'],
    ['Project Name', p.name],
    ['ISO / Grid Region', p.iso],
    ['State', p.state],
    ['County', p.county],
    ['Energy Type', p.type],
    ['Capacity (MW)', p.capacity],
    ['Developer', p.developer],
    ['Queue Date', p.queue_date],
    ['Proposed Online Date', p.proposed_cod],
    ['Pipeline Status', p.pipeline_status],
    ['Interconnection Point', p.interconnect],
    ['Data Source', 'FERC / ' + p.iso + ' Interconnection Queue'],
    ['Disclaimer', 'Project status subject to change. Active queue does not guarantee construction.']
  ];
  var csv = rows.map(function(r) { return r.map(function(v) { return '"' + String(v).replace(/"/g, '""') + '"'; }).join(','); }).join('\n');
  if (typeof downloadFile === 'function') {
    downloadFile(csv, p.name.replace(/[^a-z0-9]/gi, '_') + '_pipeline.csv', 'application/octet-stream');
  } else {
    var blob = new Blob([csv], { type: 'text/csv' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a'); a.href = url;
    a.download = p.name.replace(/[^a-z0-9]/gi, '_') + '_pipeline.csv';
    document.body.appendChild(a); a.click();
    setTimeout(function() { document.body.removeChild(a); URL.revokeObjectURL(url); }, 150);
  }
}

// ── Pipeline JSON Viewer ──────────────────────────────────────────────────────
function openPipelineJSONViewer(id) {
  var p = CEA.pipelineData.find(function(x) { return x.id === id; });
  if (!p) return;
  var cfg = CEA.energyTypes[p.type] || { icon: '\u26a1', label: p.type, color: '#94a3b8' };

  // Build clean data object (exclude internal _* fields)
  var clean = {};
  Object.keys(p).forEach(function(k) { if (k[0] !== '_') clean[k] = p[k]; });

  // Reuse the shared JSON viewer — hook _jvCurrentData/_jvCurrentName
  if (typeof window._jvCurrentData !== 'undefined') {
    window._jvCurrentData = clean;
    window._jvCurrentName = p.name || 'pipeline_project';
  }

  var labels = {
    id: 'Project ID', name: 'Project Name', country: 'Country',
    state: 'State', county: 'County', region: 'Region',
    lat: 'Latitude', lng: 'Longitude',
    capacity: 'Capacity (MW)', type: 'Energy Type',
    developer: 'Developer', queue_date: 'Queue Date',
    proposed_cod: 'Est. Online Date', pipeline_status: 'Pipeline Status',
    iso: 'ISO / Grid Region', interconnect: 'Interconnection Point',
    regulatory_body: 'Regulatory Body', notes: 'Notes'
  };
  var statusColors = {
    'Applied': '#94a3b8', 'Under Study': '#fbbf24',
    'Agreement Signed': '#34d399', 'Permitted': '#4ade80',
    'Under Construction': '#38bdf8'
  };

  var rows = Object.keys(clean).map(function(k) {
    var val = clean[k];
    if (val === null || val === undefined || val === '') return null;
    var label = labels[k] || k.replace(/_/g, ' ').replace(/\b\w/g, function(c) { return c.toUpperCase(); });
    var displayVal = val;
    if (k === 'capacity' && val > 0) {
      displayVal = Number(val).toLocaleString() + ' MW';
    } else if (k === 'pipeline_status') {
      var sc = statusColors[val] || '#94a3b8';
      displayVal = '<span style="display:inline-flex;align-items:center;gap:6px">' +
        '<span style="width:8px;height:8px;border-radius:50%;background:' + sc + ';flex-shrink:0"></span>' +
        (typeof esc === 'function' ? esc(String(val)) : String(val)) + '</span>';
      return '<tr><td class="jv-key">' + (typeof esc === 'function' ? esc(label) : label) + '</td><td class="jv-val">' + displayVal + '</td></tr>';
    } else if (k === 'lat' || k === 'lng') {
      displayVal = Number(val).toFixed(4) + '\u00b0';
    }
    var safeLabel = typeof esc === 'function' ? esc(label) : label;
    var safeVal   = typeof esc === 'function' ? esc(String(displayVal)) : String(displayVal);
    return '<tr><td class="jv-key">' + safeLabel + '</td><td class="jv-val">' + safeVal + '</td></tr>';
  }).filter(Boolean);

  var modal = document.getElementById('json-viewer-modal');
  if (!modal) return;
  document.getElementById('jv-title').textContent = p.name || 'Pipeline Project';
  document.getElementById('jv-badge-row').innerHTML =
    '<span class="jv-type-badge" style="color:' + cfg.color + '">' + cfg.icon + ' ' + cfg.label + ' (Pipeline)</span>' +
    '<span class="jv-country">' + (typeof esc === 'function' ? esc(p.country || 'USA') : (p.country || 'USA')) + '</span>';
  document.getElementById('jv-tbody').innerHTML = rows.join('');
  modal.style.display = 'flex';
  document.getElementById('jv-close-btn').onclick = function() { modal.style.display = 'none'; };
  modal.onclick = function(e) { if (e.target === modal) modal.style.display = 'none'; };
}

// ── Pipeline TXT Download ─────────────────────────────────────────────────────
function downloadPipelineTXT(id) {
  var p = CEA.pipelineData.find(function(x) { return x.id === id; });
  if (!p) return;
  var cfg = CEA.energyTypes[p.type] || { label: p.type };
  var sep = '='.repeat(42);
  var lines = [
    'Clean Energy Atlas -- Pipeline Project Report',
    sep, '',
    'Project Name:         ' + p.name,
    'Energy Type:          ' + cfg.label,
    'Capacity:             ' + (p.capacity ? p.capacity.toLocaleString() + ' MW' : '--'),
    'Pipeline Status:      ' + (p.pipeline_status || '--'),
    '',
    'Location',
    '-'.repeat(20),
    'Country:              ' + (p.country || 'USA'),
    'State:                ' + (p.state || '--'),
    'County:               ' + (p.county || '--'),
    'Region:               ' + (p.region || '--'),
    '',
    'Queue Details',
    '-'.repeat(20),
    'ISO / Grid Region:    ' + (p.iso || '--'),
    'Queue Date:           ' + (p.queue_date || '--'),
    'Est. Online Date:     ' + (p.proposed_cod || '--'),
    'Interconnection Pt:   ' + (p.interconnect || '--'),
    'Regulatory Body:      ' + (p.regulatory_body || '--'),
    'Developer:            ' + (p.developer || '--'),
    '',
    'Notes',
    '-'.repeat(20),
    (p.notes || 'None'),
    '',
    sep,
    'Data Source: FERC / ' + (p.iso || '') + ' Interconnection Queue',
    'Disclaimer: Project status subject to change. Active queue does not guarantee construction.',
    'Generated by Clean Energy Atlas -- ' + new Date().toLocaleDateString()
  ];
  if (typeof downloadFile === 'function') {
    downloadFile(lines.join('\n'), p.name.replace(/[^a-z0-9]/gi, '_') + '_pipeline.txt', 'text/plain');
  }
}

// ── Pipeline PDF Report ─────────────────────────────────────────────────────
function downloadPipelinePDF(id) {
  var p = CEA.pipelineData.find(function(x) { return x.id === id; });
  if (!p) return;
  var cfg = CEA.energyTypes[p.type] || { label: p.type, color: '#94a3b8' };
  var statusColor = PIPELINE_STATUS_COLORS[p.pipeline_status] || '#94a3b8';

  var rows = [
    ['Project Name',         p.name],
    ['Energy Type',          cfg.label],
    ['Capacity',             p.capacity ? p.capacity.toLocaleString() + ' MW' : '--'],
    ['Pipeline Status',      p.pipeline_status || '--'],
    ['Country',              p.country || 'USA'],
    ['State',                p.state || '--'],
    ['County',               p.county || '--'],
    ['ISO / Grid Region',    p.iso || '--'],
    ['Queue Date',           p.queue_date || '--'],
    ['Est. Online Date',     p.proposed_cod || '--'],
    ['Interconnection Pt.',  p.interconnect || '--'],
    ['Regulatory Body',      p.regulatory_body || '--'],
    ['Developer',            p.developer || '--'],
    ['Notes',                p.notes || '--']
  ];

  var tableRows = rows.map(function(r) {
    return '<tr><td style="color:#94a3b8;padding:5px 10px 5px 0;font-size:12px;width:160px;vertical-align:top">' +
      r[0] + '</td><td style="padding:5px 0;font-size:12px;font-weight:500">' + (r[1] || '--') + '</td></tr>';
  }).join('');

  var w = window.open('', '_blank');
  if (!w) return;
  w.document.write(
    '<html><head><title>' + (typeof esc === 'function' ? esc(p.name) : p.name) + ' — Pipeline Report</title>' +
    '<style>' +
      'body{font-family:Inter,system-ui,sans-serif;background:#0f172a;color:#e2e8f0;padding:40px;max-width:640px;margin:0 auto}' +
      'h1{font-size:18px;font-weight:700;margin:0 0 4px;color:#fff}' +
      '.sub{font-size:12px;color:#94a3b8;margin-bottom:20px}' +
      '.badge{display:inline-block;padding:3px 10px;border-radius:20px;font-size:11px;font-weight:600;border:1px solid ' + statusColor + ';color:' + statusColor + ';background:' + statusColor + '22;margin-bottom:18px}' +
      'table{width:100%;border-collapse:collapse}' +
      'tr{border-bottom:1px solid #1e293b}' +
      '.disclaimer{margin-top:24px;font-size:10px;color:#475569;border-top:1px solid #1e293b;padding-top:12px}' +
      '.footer{margin-top:12px;font-size:10px;color:#475569}' +
      '@media print{body{background:#fff;color:#000}.badge{color:' + statusColor + '!important}td{color:inherit!important}}' +
    '</style></head><body>' +
    '<h1>' + (typeof esc === 'function' ? esc(p.name) : p.name) + '</h1>' +
    '<div class="sub">' + cfg.label + ' · Pipeline Project · ' + (p.iso || '') + '</div>' +
    '<div class="badge">' + (p.pipeline_status || 'Unknown Stage') + '</div>' +
    '<table>' + tableRows + '</table>' +
    '<div class="disclaimer">⚠️ Pipeline data sourced from public ISO interconnection queues. Project status subject to change. Active queue does not guarantee construction.</div>' +
    '<div class="footer">Generated by Clean Energy Atlas · Data Source: FERC / ' + (p.iso || '') + ' Queue · ' + new Date().toLocaleDateString() + '</div>' +
    '</body></html>'
  );
  w.document.close();
  setTimeout(function() { w.print(); }, 500);
}

// ── Pipeline Filter ───────────────────────────────────────────────────────────
// CEA.pipelineTypeFilters  = Set of active type strings (empty = all)
// CEA.pipelineStatusFilters = Set of active status strings (empty = all)
CEA.pipelineTypeFilters   = [];
CEA.pipelineStatusFilters = [];

function applyPipelineFilter() {
  var map = CEA.map;
  if (!map || !map.getLayer('pipeline-dot')) return;

  var tf = CEA.pipelineTypeFilters;
  var sf = CEA.pipelineStatusFilters;

  var typeFilter   = tf.length ? ['in', ['get', 'type'],   ['literal', tf]] : null;
  var statusFilter = sf.length ? ['in', ['get', 'pipeline_status'], ['literal', sf]] : null;

  var combined;
  if (typeFilter && statusFilter) {
    combined = ['all', typeFilter, statusFilter];
  } else if (typeFilter) {
    combined = typeFilter;
  } else if (statusFilter) {
    combined = statusFilter;
  } else {
    combined = null; // show all
  }

  // When a filter is active, suppress clustering so individual dots are visible.
  // When no filter, restore clustering by removing the filter override.
  var filterActive = combined !== null;
  if (map.getLayer('pipeline-cluster')) {
    map.setLayoutProperty('pipeline-cluster', 'visibility',
      (CEA.pipelineVisible && !filterActive) ? 'visible' : 'none');
  }
  if (map.getLayer('pipeline-cluster-count')) {
    map.setLayoutProperty('pipeline-cluster-count', 'visibility',
      (CEA.pipelineVisible && !filterActive) ? 'visible' : 'none');
  }

  var dotFilter = combined
    ? ['all', ['!', ['has', 'point_count']], combined]
    : ['!', ['has', 'point_count']];

  ['pipeline-ring', 'pipeline-dot'].forEach(function(layerId) {
    if (map.getLayer(layerId)) {
      map.setFilter(layerId, dotFilter);
    }
  });

  // Update the filtered count in the stats bar
  var visibleCount = combined
    ? CEA.pipelineData.filter(function(p) {
        var typeOk   = tf.length === 0 || tf.indexOf(p.type) !== -1;
        var statusOk = sf.length === 0 || sf.indexOf(p.pipeline_status) !== -1;
        return typeOk && statusOk;
      }).length
    : CEA.pipelineData.length;
  var statsEl = document.getElementById('stat-pipeline');
  if (statsEl && CEA.pipelineVisible) statsEl.textContent = visibleCount.toLocaleString();
}
