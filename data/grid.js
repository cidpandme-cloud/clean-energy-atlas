// ========================================
// Clean Energy Atlas — Transmission Grid Data
// 307 transmission lines | 205 substations
// ========================================

var transmissionLines = [
  {
    "id": "US-001",
    "name": "Pacific DC Intertie (Celilo-Sylmar)",
    "country": "USA",
    "region": "Western Interconnection",
    "voltage_kv": 500,
    "type": "HVDC",
    "length_km": 1362,
    "operator": "BPA / LADWP",
    "status": "Operational",
    "capacity_mw": 3100,
    "coordinates": [
      [
        -120.98,
        45.65
      ],
      [
        -121.8,
        44.9
      ],
      [
        -122.1,
        43.8
      ],
      [
        -121.5,
        42.2
      ],
      [
        -120.3,
        41.0
      ],
      [
        -119.2,
        39.5
      ],
      [
        -117.8,
        37.8
      ],
      [
        -116.5,
        36.2
      ],
      [
        -115.1,
        35.0
      ],
      [
        -118.29,
        34.06
      ]
    ]
  },
  {
    "id": "US-002",
    "name": "Intermountain HVDC (Intermountain-Adelanto)",
    "country": "USA",
    "region": "Western Interconnection",
    "voltage_kv": 500,
    "type": "HVDC",
    "length_km": 785,
    "operator": "Utah Power / SCE",
    "status": "Operational",
    "capacity_mw": 1920,
    "coordinates": [
      [
        -112.53,
        40.08
      ],
      [
        -113.2,
        39.4
      ],
      [
        -114.1,
        38.6
      ],
      [
        -115.5,
        37.4
      ],
      [
        -116.8,
        36.5
      ],
      [
        -117.2,
        35.8
      ],
      [
        -117.47,
        34.59
      ]
    ]
  },
  {
    "id": "US-003",
    "name": "BPA 500kV Columbia River Corridor",
    "country": "USA",
    "region": "Western Interconnection",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 450,
    "operator": "BPA",
    "status": "Operational",
    "capacity_mw": 3500,
    "coordinates": [
      [
        -122.8,
        48.2
      ],
      [
        -122.0,
        47.5
      ],
      [
        -121.3,
        46.8
      ],
      [
        -120.4,
        46.4
      ],
      [
        -119.5,
        46.2
      ],
      [
        -118.9,
        45.9
      ],
      [
        -118.4,
        45.6
      ],
      [
        -117.8,
        45.2
      ]
    ]
  },
  {
    "id": "US-004",
    "name": "PG&E 500kV Diablo Canyon Corridor",
    "country": "USA",
    "region": "CAISO",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 380,
    "operator": "PG&E",
    "status": "Operational",
    "capacity_mw": 2500,
    "coordinates": [
      [
        -120.85,
        35.2
      ],
      [
        -120.5,
        35.9
      ],
      [
        -120.0,
        36.5
      ],
      [
        -119.5,
        37.2
      ],
      [
        -119.0,
        37.9
      ],
      [
        -121.8,
        37.5
      ]
    ]
  },
  {
    "id": "US-005",
    "name": "SCE 500kV Eldorado-Lugo Corridor",
    "country": "USA",
    "region": "CAISO",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 290,
    "operator": "SCE",
    "status": "Operational",
    "capacity_mw": 2400,
    "coordinates": [
      [
        -114.85,
        35.56
      ],
      [
        -115.5,
        35.2
      ],
      [
        -116.2,
        34.9
      ],
      [
        -116.8,
        34.5
      ],
      [
        -117.3,
        34.2
      ],
      [
        -117.8,
        34.06
      ]
    ]
  },
  {
    "id": "US-006",
    "name": "APS 500kV Palo Verde Hub Lines",
    "country": "USA",
    "region": "Western Interconnection",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 350,
    "operator": "APS",
    "status": "Operational",
    "capacity_mw": 2800,
    "coordinates": [
      [
        -112.86,
        33.38
      ],
      [
        -113.5,
        33.8
      ],
      [
        -114.2,
        34.2
      ],
      [
        -115.0,
        34.5
      ],
      [
        -116.0,
        34.2
      ],
      [
        -116.8,
        34.1
      ]
    ]
  },
  {
    "id": "US-007",
    "name": "Rocky Mountain Power 345kV Wasatch Corridor",
    "country": "USA",
    "region": "Western Interconnection",
    "voltage_kv": 345,
    "type": "AC",
    "length_km": 320,
    "operator": "Rocky Mountain Power",
    "status": "Operational",
    "capacity_mw": 1500,
    "coordinates": [
      [
        -111.9,
        41.75
      ],
      [
        -111.5,
        41.2
      ],
      [
        -111.2,
        40.8
      ],
      [
        -111.0,
        40.4
      ],
      [
        -111.1,
        39.8
      ],
      [
        -111.5,
        39.4
      ]
    ]
  },
  {
    "id": "US-008",
    "name": "WECC 500kV Nevada Cross-State",
    "country": "USA",
    "region": "Western Interconnection",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 480,
    "operator": "NV Energy",
    "status": "Operational",
    "capacity_mw": 2200,
    "coordinates": [
      [
        -114.05,
        36.18
      ],
      [
        -114.8,
        37.0
      ],
      [
        -115.5,
        38.0
      ],
      [
        -116.2,
        38.8
      ],
      [
        -117.0,
        39.5
      ],
      [
        -117.8,
        40.0
      ],
      [
        -118.8,
        40.2
      ]
    ]
  },
  {
    "id": "US-009",
    "name": "NorthWestern Energy 500kV Colstrip Corridor",
    "country": "USA",
    "region": "Western Interconnection",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 400,
    "operator": "NorthWestern Energy",
    "status": "Operational",
    "capacity_mw": 2200,
    "coordinates": [
      [
        -106.6,
        45.9
      ],
      [
        -107.5,
        46.0
      ],
      [
        -108.5,
        46.1
      ],
      [
        -109.5,
        46.0
      ],
      [
        -110.5,
        45.8
      ],
      [
        -111.5,
        45.5
      ]
    ]
  },
  {
    "id": "US-010",
    "name": "PJM 500kV Susquehanna-Roseland Corridor",
    "country": "USA",
    "region": "PJM",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 220,
    "operator": "PPL / PSE&G",
    "status": "Operational",
    "capacity_mw": 2600,
    "coordinates": [
      [
        -76.1,
        41.1
      ],
      [
        -75.6,
        40.9
      ],
      [
        -75.2,
        40.7
      ],
      [
        -74.9,
        40.5
      ],
      [
        -74.75,
        40.9
      ]
    ]
  },
  {
    "id": "US-011",
    "name": "PJM 345kV Ohio-Indiana Backbone",
    "country": "USA",
    "region": "PJM",
    "voltage_kv": 345,
    "type": "AC",
    "length_km": 380,
    "operator": "AEP / Duke",
    "status": "Operational",
    "capacity_mw": 1600,
    "coordinates": [
      [
        -82.0,
        41.1
      ],
      [
        -82.8,
        40.6
      ],
      [
        -83.5,
        40.3
      ],
      [
        -84.2,
        40.0
      ],
      [
        -84.8,
        39.8
      ],
      [
        -85.2,
        39.6
      ],
      [
        -85.8,
        39.5
      ]
    ]
  },
  {
    "id": "US-012",
    "name": "PJM 500kV Pennsylvania Backbone",
    "country": "USA",
    "region": "PJM",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 310,
    "operator": "PPL / PECO",
    "status": "Operational",
    "capacity_mw": 2800,
    "coordinates": [
      [
        -79.5,
        40.4
      ],
      [
        -78.8,
        40.3
      ],
      [
        -78.0,
        40.2
      ],
      [
        -77.2,
        40.1
      ],
      [
        -76.5,
        40.0
      ],
      [
        -75.8,
        40.0
      ],
      [
        -75.2,
        40.0
      ]
    ]
  },
  {
    "id": "US-013",
    "name": "PJM 500kV Kanawha-Meadow Brook Corridor",
    "country": "USA",
    "region": "PJM",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 260,
    "operator": "AEP",
    "status": "Operational",
    "capacity_mw": 2400,
    "coordinates": [
      [
        -81.6,
        38.35
      ],
      [
        -81.0,
        38.6
      ],
      [
        -80.5,
        38.9
      ],
      [
        -80.0,
        39.2
      ],
      [
        -79.5,
        39.6
      ]
    ]
  },
  {
    "id": "US-014",
    "name": "MISO 345kV Illinois-Indiana Backbone",
    "country": "USA",
    "region": "MISO",
    "voltage_kv": 345,
    "type": "AC",
    "length_km": 350,
    "operator": "ComEd / AEP",
    "status": "Operational",
    "capacity_mw": 1800,
    "coordinates": [
      [
        -87.6,
        41.85
      ],
      [
        -87.5,
        41.3
      ],
      [
        -87.4,
        40.7
      ],
      [
        -87.3,
        40.1
      ],
      [
        -87.2,
        39.5
      ],
      [
        -87.2,
        39.0
      ],
      [
        -87.3,
        38.5
      ]
    ]
  },
  {
    "id": "US-015",
    "name": "MISO 345kV Michigan Loop",
    "country": "USA",
    "region": "MISO",
    "voltage_kv": 345,
    "type": "AC",
    "length_km": 420,
    "operator": "Consumers Energy / DTE",
    "status": "Operational",
    "capacity_mw": 1800,
    "coordinates": [
      [
        -83.0,
        42.3
      ],
      [
        -82.5,
        43.0
      ],
      [
        -83.5,
        43.5
      ],
      [
        -84.5,
        43.8
      ],
      [
        -85.5,
        43.5
      ],
      [
        -86.0,
        43.0
      ],
      [
        -85.5,
        42.5
      ],
      [
        -84.5,
        42.2
      ],
      [
        -83.5,
        42.0
      ],
      [
        -83.0,
        42.3
      ]
    ]
  },
  {
    "id": "US-016",
    "name": "MISO 500kV Minnesota-Wisconsin Corridor",
    "country": "USA",
    "region": "MISO",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 360,
    "operator": "Xcel Energy / ATC",
    "status": "Operational",
    "capacity_mw": 2000,
    "coordinates": [
      [
        -93.5,
        44.9
      ],
      [
        -92.8,
        44.5
      ],
      [
        -92.0,
        44.2
      ],
      [
        -91.2,
        44.0
      ],
      [
        -90.5,
        44.1
      ],
      [
        -90.0,
        44.5
      ],
      [
        -89.5,
        44.8
      ],
      [
        -89.0,
        44.9
      ]
    ]
  },
  {
    "id": "US-017",
    "name": "SPP 345kV Oklahoma-Kansas Backbone",
    "country": "USA",
    "region": "SPP",
    "voltage_kv": 345,
    "type": "AC",
    "length_km": 520,
    "operator": "OG&E / Westar Energy",
    "status": "Operational",
    "capacity_mw": 1600,
    "coordinates": [
      [
        -97.5,
        35.5
      ],
      [
        -97.3,
        36.1
      ],
      [
        -97.0,
        36.8
      ],
      [
        -96.9,
        37.5
      ],
      [
        -96.8,
        38.0
      ],
      [
        -96.7,
        38.8
      ],
      [
        -96.7,
        39.4
      ]
    ]
  },
  {
    "id": "US-018",
    "name": "SERC 500kV TVA Backbone",
    "country": "USA",
    "region": "SERC",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 400,
    "operator": "TVA",
    "status": "Operational",
    "capacity_mw": 2600,
    "coordinates": [
      [
        -88.5,
        35.2
      ],
      [
        -87.8,
        35.5
      ],
      [
        -87.0,
        35.8
      ],
      [
        -86.5,
        36.2
      ],
      [
        -86.2,
        36.8
      ],
      [
        -85.5,
        36.5
      ],
      [
        -84.8,
        36.2
      ]
    ]
  },
  {
    "id": "US-019",
    "name": "SERC 500kV Duke Energy Carolina Backbone",
    "country": "USA",
    "region": "SERC",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 380,
    "operator": "Duke Energy",
    "status": "Operational",
    "capacity_mw": 2800,
    "coordinates": [
      [
        -82.5,
        35.2
      ],
      [
        -81.8,
        35.4
      ],
      [
        -81.0,
        35.5
      ],
      [
        -80.4,
        35.2
      ],
      [
        -79.8,
        35.0
      ],
      [
        -79.0,
        34.8
      ],
      [
        -78.5,
        35.1
      ]
    ]
  },
  {
    "id": "US-020",
    "name": "SERC 500kV Georgia-Alabama Corridor",
    "country": "USA",
    "region": "SERC",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 350,
    "operator": "Georgia Power / Alabama Power",
    "status": "Operational",
    "capacity_mw": 2500,
    "coordinates": [
      [
        -83.5,
        32.5
      ],
      [
        -84.2,
        32.9
      ],
      [
        -84.8,
        33.5
      ],
      [
        -85.5,
        33.2
      ],
      [
        -86.2,
        33.0
      ],
      [
        -86.8,
        33.5
      ]
    ]
  },
  {
    "id": "US-021",
    "name": "SERC 500kV Florida Power Backbone",
    "country": "USA",
    "region": "FRCC",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 430,
    "operator": "FPL / Duke Florida",
    "status": "Operational",
    "capacity_mw": 2400,
    "coordinates": [
      [
        -81.8,
        30.3
      ],
      [
        -81.5,
        29.5
      ],
      [
        -81.3,
        28.8
      ],
      [
        -80.9,
        28.2
      ],
      [
        -80.6,
        27.5
      ],
      [
        -80.4,
        26.8
      ],
      [
        -80.3,
        26.1
      ],
      [
        -80.2,
        25.8
      ]
    ]
  },
  {
    "id": "US-022",
    "name": "NPCC 345kV New England Backbone",
    "country": "USA",
    "region": "NPCC",
    "voltage_kv": 345,
    "type": "AC",
    "length_km": 340,
    "operator": "Eversource / National Grid",
    "status": "Operational",
    "capacity_mw": 1500,
    "coordinates": [
      [
        -72.0,
        41.8
      ],
      [
        -72.5,
        41.8
      ],
      [
        -73.0,
        42.2
      ],
      [
        -72.8,
        42.8
      ],
      [
        -72.5,
        43.5
      ],
      [
        -71.8,
        43.5
      ],
      [
        -71.0,
        43.2
      ],
      [
        -70.8,
        42.6
      ]
    ]
  },
  {
    "id": "US-023",
    "name": "ERCOT 345kV Central Texas Backbone",
    "country": "USA",
    "region": "ERCOT",
    "voltage_kv": 345,
    "type": "AC",
    "length_km": 450,
    "operator": "Oncor / AEP Texas",
    "status": "Operational",
    "capacity_mw": 1800,
    "coordinates": [
      [
        -99.5,
        31.5
      ],
      [
        -99.0,
        32.0
      ],
      [
        -98.5,
        32.5
      ],
      [
        -98.0,
        32.9
      ],
      [
        -97.5,
        33.0
      ],
      [
        -97.0,
        33.1
      ],
      [
        -96.5,
        33.1
      ],
      [
        -96.0,
        33.1
      ]
    ]
  },
  {
    "id": "US-024",
    "name": "ERCOT 345kV West Texas CREZ Lines",
    "country": "USA",
    "region": "ERCOT",
    "voltage_kv": 345,
    "type": "AC",
    "length_km": 680,
    "operator": "Oncor / AEP Texas / LCRA",
    "status": "Operational",
    "capacity_mw": 2200,
    "coordinates": [
      [
        -103.0,
        32.0
      ],
      [
        -102.0,
        31.8
      ],
      [
        -101.0,
        31.5
      ],
      [
        -100.0,
        31.3
      ],
      [
        -99.0,
        31.0
      ],
      [
        -98.0,
        31.2
      ],
      [
        -97.5,
        32.0
      ],
      [
        -97.0,
        32.5
      ],
      [
        -96.5,
        32.8
      ]
    ]
  },
  {
    "id": "US-025",
    "name": "ERCOT 345kV Houston-Dallas Corridor",
    "country": "USA",
    "region": "ERCOT",
    "voltage_kv": 345,
    "type": "AC",
    "length_km": 380,
    "operator": "CenterPoint / Oncor",
    "status": "Operational",
    "capacity_mw": 1900,
    "coordinates": [
      [
        -95.4,
        29.8
      ],
      [
        -95.5,
        30.2
      ],
      [
        -95.6,
        30.8
      ],
      [
        -96.0,
        31.5
      ],
      [
        -96.5,
        32.0
      ],
      [
        -96.8,
        32.5
      ],
      [
        -96.9,
        32.7
      ]
    ]
  },
  {
    "id": "US-026",
    "name": "Alaska Railbelt 138kV Fairbanks-Anchorage",
    "country": "USA",
    "region": "Alaska Railbelt",
    "voltage_kv": 138,
    "type": "AC",
    "length_km": 580,
    "operator": "GVEA / APA",
    "status": "Operational",
    "capacity_mw": 220,
    "coordinates": [
      [
        -147.7,
        64.8
      ],
      [
        -147.5,
        64.2
      ],
      [
        -147.8,
        63.8
      ],
      [
        -148.0,
        63.2
      ],
      [
        -148.5,
        62.8
      ],
      [
        -149.0,
        62.5
      ],
      [
        -149.5,
        62.0
      ],
      [
        -149.9,
        61.5
      ],
      [
        -150.1,
        61.2
      ],
      [
        -149.9,
        61.18
      ]
    ]
  },
  {
    "id": "US-027",
    "name": "MISO 765kV AEP Indiana-Michigan Backbone",
    "country": "USA",
    "region": "MISO",
    "voltage_kv": 765,
    "type": "AC",
    "length_km": 280,
    "operator": "AEP",
    "status": "Operational",
    "capacity_mw": 4000,
    "coordinates": [
      [
        -85.0,
        39.5
      ],
      [
        -85.0,
        40.0
      ],
      [
        -84.9,
        40.5
      ],
      [
        -84.8,
        41.2
      ],
      [
        -84.5,
        41.7
      ],
      [
        -84.0,
        41.9
      ],
      [
        -83.5,
        42.1
      ]
    ]
  },
  {
    "id": "US-028",
    "name": "PJM 765kV AEP Ohio Backbone",
    "country": "USA",
    "region": "PJM",
    "voltage_kv": 765,
    "type": "AC",
    "length_km": 320,
    "operator": "AEP",
    "status": "Operational",
    "capacity_mw": 4200,
    "coordinates": [
      [
        -82.0,
        41.1
      ],
      [
        -82.5,
        40.5
      ],
      [
        -82.8,
        40.0
      ],
      [
        -82.5,
        39.5
      ],
      [
        -82.0,
        39.2
      ],
      [
        -81.5,
        38.8
      ],
      [
        -81.6,
        38.35
      ]
    ]
  },
  {
    "id": "US-029",
    "name": "SERC 500kV Virginia-NC Corridor",
    "country": "USA",
    "region": "SERC",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 290,
    "operator": "Dominion Energy",
    "status": "Operational",
    "capacity_mw": 2500,
    "coordinates": [
      [
        -77.5,
        38.8
      ],
      [
        -77.8,
        38.3
      ],
      [
        -78.0,
        37.8
      ],
      [
        -78.2,
        37.3
      ],
      [
        -78.5,
        36.8
      ],
      [
        -79.0,
        36.5
      ],
      [
        -79.5,
        36.2
      ],
      [
        -80.0,
        36.0
      ]
    ]
  },
  {
    "id": "US-030",
    "name": "Neptune HVDC (NJ-NY)",
    "country": "USA",
    "region": "PJM-NYISO",
    "voltage_kv": 500,
    "type": "HVDC",
    "length_km": 105,
    "operator": "Neptune Regional",
    "status": "Operational",
    "capacity_mw": 660,
    "coordinates": [
      [
        -74.1,
        40.7
      ],
      [
        -73.8,
        40.9
      ],
      [
        -73.5,
        41.0
      ]
    ]
  },
  {
    "id": "US-031",
    "name": "SunZia HVDC Southwest Transmission",
    "country": "USA",
    "region": "Western Interconnection",
    "voltage_kv": 525,
    "type": "HVDC",
    "length_km": 885,
    "operator": "Pattern Energy",
    "status": "Under Construction",
    "capacity_mw": 3000,
    "coordinates": [
      [
        -109.0,
        33.0
      ],
      [
        -109.5,
        33.5
      ],
      [
        -110.0,
        33.8
      ],
      [
        -110.5,
        34.2
      ],
      [
        -111.0,
        34.5
      ],
      [
        -111.5,
        34.8
      ],
      [
        -112.0,
        34.5
      ],
      [
        -112.5,
        34.2
      ],
      [
        -113.0,
        34.0
      ],
      [
        -113.5,
        33.8
      ],
      [
        -114.0,
        34.0
      ],
      [
        -114.5,
        34.1
      ]
    ]
  },
  {
    "id": "US-032",
    "name": "MISO 345kV Iowa Wind Integration",
    "country": "USA",
    "region": "MISO",
    "voltage_kv": 345,
    "type": "AC",
    "length_km": 410,
    "operator": "MidAmerican Energy / ITC",
    "status": "Operational",
    "capacity_mw": 1800,
    "coordinates": [
      [
        -96.5,
        42.5
      ],
      [
        -95.8,
        42.0
      ],
      [
        -95.0,
        41.8
      ],
      [
        -94.0,
        41.6
      ],
      [
        -93.0,
        41.5
      ],
      [
        -92.0,
        41.7
      ],
      [
        -91.5,
        41.5
      ]
    ]
  },
  {
    "id": "US-033",
    "name": "SPP 345kV Kansas Wind Corridor",
    "country": "USA",
    "region": "SPP",
    "voltage_kv": 345,
    "type": "AC",
    "length_km": 390,
    "operator": "Westar Energy / Evergy",
    "status": "Operational",
    "capacity_mw": 1700,
    "coordinates": [
      [
        -101.0,
        38.5
      ],
      [
        -100.0,
        38.5
      ],
      [
        -99.0,
        38.5
      ],
      [
        -98.0,
        38.5
      ],
      [
        -97.0,
        38.5
      ],
      [
        -96.5,
        38.5
      ],
      [
        -96.0,
        39.0
      ],
      [
        -95.5,
        39.5
      ]
    ]
  },
  {
    "id": "US-034",
    "name": "MISO 345kV North Dakota Wind Collector",
    "country": "USA",
    "region": "MISO",
    "voltage_kv": 345,
    "type": "AC",
    "length_km": 360,
    "operator": "Montana Dakota Utilities / Basin Electric",
    "status": "Operational",
    "capacity_mw": 1600,
    "coordinates": [
      [
        -102.5,
        46.5
      ],
      [
        -101.5,
        46.8
      ],
      [
        -100.5,
        47.0
      ],
      [
        -99.5,
        47.0
      ],
      [
        -98.5,
        46.8
      ],
      [
        -97.5,
        46.5
      ],
      [
        -97.0,
        46.0
      ],
      [
        -96.8,
        46.5
      ]
    ]
  },
  {
    "id": "US-035",
    "name": "Gateway West 500kV Wyoming-Idaho",
    "country": "USA",
    "region": "Western Interconnection",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 1000,
    "operator": "Rocky Mountain Power",
    "status": "Operational",
    "capacity_mw": 2000,
    "coordinates": [
      [
        -110.8,
        42.0
      ],
      [
        -111.0,
        41.5
      ],
      [
        -111.5,
        41.0
      ],
      [
        -112.0,
        40.5
      ],
      [
        -112.5,
        40.0
      ],
      [
        -113.0,
        39.5
      ],
      [
        -113.5,
        39.0
      ],
      [
        -114.0,
        38.5
      ],
      [
        -114.5,
        38.0
      ]
    ]
  },
  {
    "id": "US-036",
    "name": "SERC 500kV Florida-Georgia Corridor",
    "country": "USA",
    "region": "SERC",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 290,
    "operator": "FPL / Georgia Power",
    "status": "Operational",
    "capacity_mw": 2200,
    "coordinates": [
      [
        -84.4,
        30.8
      ],
      [
        -84.0,
        30.4
      ],
      [
        -83.5,
        30.0
      ],
      [
        -83.0,
        29.8
      ],
      [
        -82.5,
        29.5
      ],
      [
        -82.0,
        29.5
      ],
      [
        -81.5,
        29.7
      ],
      [
        -81.0,
        29.9
      ]
    ]
  },
  {
    "id": "US-037",
    "name": "SERC 500kV Mississippi-Alabama Corridor",
    "country": "USA",
    "region": "SERC",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 300,
    "operator": "Entergy / Alabama Power",
    "status": "Operational",
    "capacity_mw": 2000,
    "coordinates": [
      [
        -91.0,
        32.5
      ],
      [
        -90.5,
        32.8
      ],
      [
        -89.8,
        33.0
      ],
      [
        -89.2,
        33.0
      ],
      [
        -88.5,
        33.0
      ],
      [
        -88.0,
        33.2
      ],
      [
        -87.5,
        33.5
      ],
      [
        -86.8,
        33.5
      ]
    ]
  },
  {
    "id": "US-038",
    "name": "SERC 500kV SC-NC Corridor",
    "country": "USA",
    "region": "SERC",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 260,
    "operator": "Duke Energy",
    "status": "Operational",
    "capacity_mw": 2300,
    "coordinates": [
      [
        -81.0,
        34.0
      ],
      [
        -80.5,
        34.3
      ],
      [
        -80.0,
        34.5
      ],
      [
        -79.5,
        34.8
      ],
      [
        -79.0,
        35.0
      ],
      [
        -78.5,
        35.1
      ]
    ]
  },
  {
    "id": "US-039",
    "name": "Southern California 500kV Devers-Palo Verde",
    "country": "USA",
    "region": "Western Interconnection",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 500,
    "operator": "SCE / APS",
    "status": "Operational",
    "capacity_mw": 2500,
    "coordinates": [
      [
        -116.8,
        33.9
      ],
      [
        -116.2,
        33.5
      ],
      [
        -115.5,
        33.2
      ],
      [
        -115.0,
        33.0
      ],
      [
        -114.5,
        33.2
      ],
      [
        -114.0,
        33.5
      ],
      [
        -113.5,
        33.4
      ],
      [
        -112.86,
        33.38
      ]
    ]
  },
  {
    "id": "US-040",
    "name": "WECC 500kV Path 26 California N-S",
    "country": "USA",
    "region": "CAISO",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 210,
    "operator": "PG&E / SCE",
    "status": "Operational",
    "capacity_mw": 2500,
    "coordinates": [
      [
        -120.0,
        37.2
      ],
      [
        -119.5,
        36.5
      ],
      [
        -119.0,
        35.8
      ],
      [
        -118.5,
        35.2
      ],
      [
        -118.0,
        34.5
      ],
      [
        -118.0,
        34.1
      ]
    ]
  },
  {
    "id": "US-041",
    "name": "PNW 500kV Pacific AC Intertie",
    "country": "USA",
    "region": "Western Interconnection",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 1350,
    "operator": "BPA / PG&E",
    "status": "Operational",
    "capacity_mw": 4800,
    "coordinates": [
      [
        -122.8,
        48.2
      ],
      [
        -122.5,
        47.5
      ],
      [
        -122.5,
        46.5
      ],
      [
        -122.2,
        45.5
      ],
      [
        -122.0,
        44.5
      ],
      [
        -121.8,
        43.5
      ],
      [
        -121.5,
        42.5
      ],
      [
        -121.2,
        41.5
      ],
      [
        -121.0,
        40.5
      ],
      [
        -120.5,
        39.5
      ],
      [
        -120.0,
        38.5
      ],
      [
        -121.8,
        37.5
      ]
    ]
  },
  {
    "id": "US-042",
    "name": "ERCOT 345kV East Texas Corridor",
    "country": "USA",
    "region": "ERCOT",
    "voltage_kv": 345,
    "type": "AC",
    "length_km": 320,
    "operator": "Oncor / Entergy Texas",
    "status": "Operational",
    "capacity_mw": 1500,
    "coordinates": [
      [
        -94.0,
        30.0
      ],
      [
        -94.5,
        30.5
      ],
      [
        -95.0,
        31.0
      ],
      [
        -95.5,
        31.5
      ],
      [
        -96.0,
        31.8
      ],
      [
        -96.0,
        32.5
      ]
    ]
  },
  {
    "id": "US-043",
    "name": "ERCOT 345kV Panhandle South Plains Wind",
    "country": "USA",
    "region": "ERCOT",
    "voltage_kv": 345,
    "type": "AC",
    "length_km": 380,
    "operator": "AEP Texas / Oncor",
    "status": "Operational",
    "capacity_mw": 1800,
    "coordinates": [
      [
        -102.8,
        34.5
      ],
      [
        -102.5,
        33.5
      ],
      [
        -102.0,
        33.0
      ],
      [
        -101.5,
        32.5
      ],
      [
        -101.0,
        32.0
      ],
      [
        -100.5,
        31.5
      ],
      [
        -100.0,
        31.0
      ],
      [
        -99.5,
        31.0
      ]
    ]
  },
  {
    "id": "US-044",
    "name": "MISO 345kV Wisconsin-Minnesota Corridor",
    "country": "USA",
    "region": "MISO",
    "voltage_kv": 345,
    "type": "AC",
    "length_km": 340,
    "operator": "Xcel Energy / ATC",
    "status": "Operational",
    "capacity_mw": 1600,
    "coordinates": [
      [
        -92.8,
        44.5
      ],
      [
        -92.0,
        44.2
      ],
      [
        -91.5,
        44.0
      ],
      [
        -91.0,
        44.0
      ],
      [
        -90.5,
        44.1
      ],
      [
        -90.0,
        44.3
      ]
    ]
  },
  {
    "id": "US-045",
    "name": "PJM 500kV MidAtlantic Backbone",
    "country": "USA",
    "region": "PJM",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 200,
    "operator": "PPL / FirstEnergy",
    "status": "Operational",
    "capacity_mw": 2200,
    "coordinates": [
      [
        -76.5,
        40.5
      ],
      [
        -76.0,
        40.3
      ],
      [
        -75.5,
        40.2
      ],
      [
        -75.0,
        40.1
      ],
      [
        -74.5,
        40.2
      ]
    ]
  },
  {
    "id": "US-046",
    "name": "MISO 345kV Arkansas-Missouri Tie",
    "country": "USA",
    "region": "MISO",
    "voltage_kv": 345,
    "type": "AC",
    "length_km": 250,
    "operator": "Entergy Arkansas / Ameren",
    "status": "Operational",
    "capacity_mw": 1400,
    "coordinates": [
      [
        -93.5,
        35.5
      ],
      [
        -93.5,
        36.0
      ],
      [
        -93.5,
        36.5
      ],
      [
        -93.2,
        37.0
      ],
      [
        -93.0,
        37.5
      ],
      [
        -92.5,
        37.8
      ]
    ]
  },
  {
    "id": "US-047",
    "name": "SERC 500kV Alabama-Mississippi Corridor",
    "country": "USA",
    "region": "SERC",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 280,
    "operator": "Alabama Power / Entergy",
    "status": "Operational",
    "capacity_mw": 2000,
    "coordinates": [
      [
        -86.5,
        34.0
      ],
      [
        -87.0,
        33.5
      ],
      [
        -87.5,
        33.0
      ],
      [
        -88.0,
        32.5
      ],
      [
        -88.5,
        32.2
      ],
      [
        -89.0,
        32.0
      ]
    ]
  },
  {
    "id": "US-048",
    "name": "MISO 500kV Ameren Missouri Backbone",
    "country": "USA",
    "region": "MISO",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 290,
    "operator": "Ameren Missouri",
    "status": "Operational",
    "capacity_mw": 2000,
    "coordinates": [
      [
        -92.0,
        38.6
      ],
      [
        -91.5,
        38.5
      ],
      [
        -91.0,
        38.5
      ],
      [
        -90.5,
        38.6
      ],
      [
        -90.0,
        38.7
      ],
      [
        -89.5,
        38.7
      ]
    ]
  },
  {
    "id": "US-049",
    "name": "TVA 500kV East Tennessee-NC Corridor",
    "country": "USA",
    "region": "SERC",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 220,
    "operator": "TVA / Duke Energy",
    "status": "Operational",
    "capacity_mw": 2000,
    "coordinates": [
      [
        -84.0,
        36.0
      ],
      [
        -83.5,
        35.8
      ],
      [
        -83.0,
        35.5
      ],
      [
        -82.5,
        35.2
      ],
      [
        -82.0,
        35.0
      ],
      [
        -81.5,
        35.2
      ]
    ]
  },
  {
    "id": "US-050",
    "name": "SPP 345kV Texas-Oklahoma Tie",
    "country": "USA",
    "region": "SPP",
    "voltage_kv": 345,
    "type": "AC",
    "length_km": 300,
    "operator": "AEP / SPP",
    "status": "Operational",
    "capacity_mw": 1500,
    "coordinates": [
      [
        -98.5,
        33.5
      ],
      [
        -98.2,
        34.0
      ],
      [
        -97.9,
        34.5
      ],
      [
        -97.6,
        35.0
      ],
      [
        -97.5,
        35.5
      ]
    ]
  },
  {
    "id": "CA-001",
    "name": "Quebec 735kV James Bay Line 1 (Radisson-Montreal)",
    "country": "Canada",
    "region": "Quebec",
    "voltage_kv": 735,
    "type": "AC",
    "length_km": 1000,
    "operator": "Hydro-Quebec",
    "status": "Operational",
    "capacity_mw": 5000,
    "coordinates": [
      [
        -77.0,
        53.8
      ],
      [
        -76.5,
        52.5
      ],
      [
        -76.0,
        51.5
      ],
      [
        -75.5,
        50.5
      ],
      [
        -74.5,
        49.8
      ],
      [
        -73.5,
        49.0
      ],
      [
        -73.2,
        48.0
      ],
      [
        -73.5,
        47.0
      ],
      [
        -73.2,
        45.5
      ]
    ]
  },
  {
    "id": "CA-002",
    "name": "Quebec 735kV James Bay Line 2",
    "country": "Canada",
    "region": "Quebec",
    "voltage_kv": 735,
    "type": "AC",
    "length_km": 1020,
    "operator": "Hydro-Quebec",
    "status": "Operational",
    "capacity_mw": 5000,
    "coordinates": [
      [
        -77.5,
        54.3
      ],
      [
        -76.8,
        53.0
      ],
      [
        -76.3,
        52.0
      ],
      [
        -75.8,
        51.0
      ],
      [
        -75.0,
        50.2
      ],
      [
        -74.0,
        49.5
      ],
      [
        -73.5,
        48.5
      ],
      [
        -73.0,
        47.5
      ],
      [
        -73.3,
        46.5
      ],
      [
        -73.5,
        45.7
      ]
    ]
  },
  {
    "id": "CA-003",
    "name": "Quebec 735kV James Bay Line 3",
    "country": "Canada",
    "region": "Quebec",
    "voltage_kv": 735,
    "type": "AC",
    "length_km": 980,
    "operator": "Hydro-Quebec",
    "status": "Operational",
    "capacity_mw": 4500,
    "coordinates": [
      [
        -78.0,
        54.5
      ],
      [
        -77.2,
        53.5
      ],
      [
        -76.5,
        52.0
      ],
      [
        -75.8,
        50.8
      ],
      [
        -75.0,
        49.8
      ],
      [
        -73.8,
        48.5
      ],
      [
        -73.5,
        47.0
      ],
      [
        -73.5,
        45.7
      ]
    ]
  },
  {
    "id": "CA-004",
    "name": "Ontario 500kV Darlington-Bruce Corridor",
    "country": "Canada",
    "region": "Ontario",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 300,
    "operator": "Hydro One",
    "status": "Operational",
    "capacity_mw": 3000,
    "coordinates": [
      [
        -78.7,
        43.9
      ],
      [
        -79.0,
        44.1
      ],
      [
        -79.5,
        44.3
      ],
      [
        -80.0,
        44.5
      ],
      [
        -80.5,
        44.4
      ],
      [
        -81.0,
        44.3
      ],
      [
        -81.5,
        44.1
      ],
      [
        -81.6,
        44.3
      ]
    ]
  },
  {
    "id": "CA-005",
    "name": "Manitoba 500kV Nelson River HVDC Bipole I",
    "country": "Canada",
    "region": "Manitoba",
    "voltage_kv": 500,
    "type": "HVDC",
    "length_km": 895,
    "operator": "Manitoba Hydro",
    "status": "Operational",
    "capacity_mw": 1620,
    "coordinates": [
      [
        -95.8,
        56.5
      ],
      [
        -96.0,
        55.5
      ],
      [
        -96.5,
        54.5
      ],
      [
        -97.0,
        53.5
      ],
      [
        -97.5,
        52.5
      ],
      [
        -97.5,
        51.5
      ],
      [
        -97.2,
        50.2
      ],
      [
        -97.1,
        49.9
      ]
    ]
  },
  {
    "id": "CA-006",
    "name": "Manitoba 500kV Nelson River HVDC Bipole II",
    "country": "Canada",
    "region": "Manitoba",
    "voltage_kv": 500,
    "type": "HVDC",
    "length_km": 940,
    "operator": "Manitoba Hydro",
    "status": "Operational",
    "capacity_mw": 2000,
    "coordinates": [
      [
        -95.5,
        56.8
      ],
      [
        -96.2,
        55.8
      ],
      [
        -96.8,
        54.8
      ],
      [
        -97.2,
        53.8
      ],
      [
        -97.5,
        52.8
      ],
      [
        -97.8,
        51.5
      ],
      [
        -97.5,
        50.5
      ],
      [
        -97.2,
        49.9
      ]
    ]
  },
  {
    "id": "CA-007",
    "name": "Alberta 500kV Calgary-Edmonton Corridor",
    "country": "Canada",
    "region": "Alberta",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 300,
    "operator": "ATCO / AltaLink",
    "status": "Operational",
    "capacity_mw": 2000,
    "coordinates": [
      [
        -114.07,
        51.05
      ],
      [
        -113.8,
        51.5
      ],
      [
        -113.5,
        51.9
      ],
      [
        -113.5,
        52.5
      ],
      [
        -113.5,
        53.1
      ],
      [
        -113.5,
        53.55
      ]
    ]
  },
  {
    "id": "CA-008",
    "name": "BC Hydro 500kV Peace Region Lines",
    "country": "Canada",
    "region": "British Columbia",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 800,
    "operator": "BC Hydro",
    "status": "Operational",
    "capacity_mw": 3100,
    "coordinates": [
      [
        -122.7,
        56.0
      ],
      [
        -122.2,
        55.3
      ],
      [
        -121.5,
        54.8
      ],
      [
        -120.5,
        54.5
      ],
      [
        -119.5,
        54.0
      ],
      [
        -118.5,
        53.5
      ],
      [
        -118.0,
        53.0
      ],
      [
        -117.5,
        52.5
      ],
      [
        -120.0,
        49.5
      ]
    ]
  },
  {
    "id": "CA-009",
    "name": "Hydro-Quebec HVDC New England Tie",
    "country": "Canada",
    "region": "Quebec-USA",
    "voltage_kv": 450,
    "type": "HVDC",
    "length_km": 1500,
    "operator": "Hydro-Quebec",
    "status": "Operational",
    "capacity_mw": 2000,
    "coordinates": [
      [
        -73.5,
        45.7
      ],
      [
        -73.2,
        45.2
      ],
      [
        -72.8,
        44.8
      ],
      [
        -72.5,
        44.2
      ],
      [
        -72.2,
        43.8
      ],
      [
        -72.0,
        43.2
      ],
      [
        -72.0,
        42.8
      ],
      [
        -71.8,
        42.5
      ]
    ]
  },
  {
    "id": "CA-010",
    "name": "Newfoundland 735kV Churchill Falls Line",
    "country": "Canada",
    "region": "Newfoundland",
    "voltage_kv": 735,
    "type": "AC",
    "length_km": 940,
    "operator": "Nalcor Energy",
    "status": "Operational",
    "capacity_mw": 5400,
    "coordinates": [
      [
        -64.0,
        53.5
      ],
      [
        -64.8,
        53.0
      ],
      [
        -65.8,
        52.7
      ],
      [
        -67.0,
        52.5
      ],
      [
        -68.0,
        52.8
      ],
      [
        -69.0,
        53.2
      ],
      [
        -70.0,
        53.5
      ]
    ]
  },
  {
    "id": "CA-011",
    "name": "Alberta 240kV North-South Backbone",
    "country": "Canada",
    "region": "Alberta",
    "voltage_kv": 240,
    "type": "AC",
    "length_km": 600,
    "operator": "AltaLink / ATCO",
    "status": "Operational",
    "capacity_mw": 1200,
    "coordinates": [
      [
        -110.5,
        60.0
      ],
      [
        -111.0,
        59.0
      ],
      [
        -111.5,
        58.0
      ],
      [
        -112.0,
        57.0
      ],
      [
        -112.5,
        56.0
      ],
      [
        -113.0,
        55.0
      ],
      [
        -113.5,
        54.0
      ],
      [
        -113.5,
        53.55
      ]
    ]
  },
  {
    "id": "CA-012",
    "name": "Ontario 500kV Northern Loop",
    "country": "Canada",
    "region": "Ontario",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 450,
    "operator": "Hydro One",
    "status": "Operational",
    "capacity_mw": 2400,
    "coordinates": [
      [
        -79.4,
        43.7
      ],
      [
        -79.5,
        44.5
      ],
      [
        -80.0,
        45.2
      ],
      [
        -81.0,
        45.5
      ],
      [
        -82.0,
        46.0
      ],
      [
        -83.0,
        46.5
      ],
      [
        -84.0,
        46.5
      ]
    ]
  },
  {
    "id": "MX-001",
    "name": "CFE 400kV Mexico City Hub Lines",
    "country": "Mexico",
    "region": "Central Mexico",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 350,
    "operator": "CFE",
    "status": "Operational",
    "capacity_mw": 2000,
    "coordinates": [
      [
        -99.1,
        19.4
      ],
      [
        -99.5,
        19.8
      ],
      [
        -100.0,
        20.2
      ],
      [
        -100.5,
        20.6
      ],
      [
        -101.0,
        21.0
      ],
      [
        -101.5,
        21.3
      ]
    ]
  },
  {
    "id": "MX-002",
    "name": "CFE 400kV Pacific Coast Corridor",
    "country": "Mexico",
    "region": "Western Mexico",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 600,
    "operator": "CFE",
    "status": "Operational",
    "capacity_mw": 1800,
    "coordinates": [
      [
        -100.5,
        20.5
      ],
      [
        -100.8,
        21.0
      ],
      [
        -101.0,
        21.5
      ],
      [
        -101.5,
        22.0
      ],
      [
        -102.0,
        22.5
      ],
      [
        -102.5,
        23.0
      ],
      [
        -103.0,
        23.5
      ],
      [
        -103.5,
        24.0
      ],
      [
        -104.0,
        24.5
      ],
      [
        -104.5,
        25.0
      ],
      [
        -105.2,
        25.5
      ]
    ]
  },
  {
    "id": "MX-003",
    "name": "CFE 230kV Baja California Interconnection",
    "country": "Mexico",
    "region": "Baja California",
    "voltage_kv": 230,
    "type": "AC",
    "length_km": 280,
    "operator": "CFE",
    "status": "Operational",
    "capacity_mw": 800,
    "coordinates": [
      [
        -117.1,
        32.5
      ],
      [
        -116.6,
        31.8
      ],
      [
        -115.5,
        31.0
      ],
      [
        -115.0,
        30.5
      ],
      [
        -114.5,
        30.0
      ]
    ]
  },
  {
    "id": "EU-001",
    "name": "UK National Grid 400kV Scotland-England (East)",
    "country": "UK",
    "region": "National Grid",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 580,
    "operator": "National Grid",
    "status": "Operational",
    "capacity_mw": 3000,
    "coordinates": [
      [
        -3.2,
        55.9
      ],
      [
        -2.5,
        55.2
      ],
      [
        -2.0,
        54.5
      ],
      [
        -1.8,
        54.0
      ],
      [
        -1.5,
        53.5
      ],
      [
        -1.2,
        53.0
      ],
      [
        -1.0,
        52.5
      ],
      [
        -0.8,
        52.0
      ],
      [
        -0.5,
        51.5
      ],
      [
        -0.2,
        51.5
      ]
    ]
  },
  {
    "id": "EU-002",
    "name": "UK National Grid 400kV Scotland-England (West)",
    "country": "UK",
    "region": "National Grid",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 540,
    "operator": "National Grid",
    "status": "Operational",
    "capacity_mw": 2800,
    "coordinates": [
      [
        -4.2,
        55.8
      ],
      [
        -3.8,
        55.3
      ],
      [
        -3.5,
        54.8
      ],
      [
        -3.0,
        54.2
      ],
      [
        -2.5,
        53.8
      ],
      [
        -2.2,
        53.2
      ],
      [
        -2.5,
        52.8
      ],
      [
        -2.8,
        52.5
      ],
      [
        -3.0,
        52.0
      ],
      [
        -2.9,
        51.6
      ]
    ]
  },
  {
    "id": "EU-003",
    "name": "BritNed HVDC (UK-Netherlands)",
    "country": "UK",
    "region": "Cross-Border",
    "voltage_kv": 450,
    "type": "HVDC",
    "length_km": 260,
    "operator": "BritNed",
    "status": "Operational",
    "capacity_mw": 1000,
    "coordinates": [
      [
        1.3,
        51.5
      ],
      [
        1.8,
        52.0
      ],
      [
        2.5,
        52.5
      ],
      [
        3.5,
        52.0
      ],
      [
        4.1,
        51.9
      ]
    ]
  },
  {
    "id": "EU-004",
    "name": "RTE 400kV Paris Region Ring",
    "country": "France",
    "region": "RTE",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 380,
    "operator": "RTE",
    "status": "Operational",
    "capacity_mw": 2800,
    "coordinates": [
      [
        2.35,
        48.9
      ],
      [
        2.8,
        48.7
      ],
      [
        3.2,
        48.5
      ],
      [
        3.5,
        48.3
      ],
      [
        3.2,
        48.0
      ],
      [
        2.8,
        47.9
      ],
      [
        2.3,
        48.0
      ],
      [
        2.0,
        48.3
      ],
      [
        2.1,
        48.6
      ],
      [
        2.35,
        48.9
      ]
    ]
  },
  {
    "id": "EU-005",
    "name": "RTE 400kV France-Spain Pyrenees Corridor",
    "country": "France",
    "region": "RTE",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 320,
    "operator": "RTE",
    "status": "Operational",
    "capacity_mw": 1400,
    "coordinates": [
      [
        -1.8,
        43.3
      ],
      [
        -1.5,
        43.5
      ],
      [
        -1.0,
        43.6
      ],
      [
        -0.5,
        43.4
      ],
      [
        0.0,
        43.2
      ],
      [
        0.5,
        42.8
      ],
      [
        1.0,
        42.5
      ],
      [
        1.5,
        42.5
      ],
      [
        2.0,
        42.5
      ]
    ]
  },
  {
    "id": "EU-006",
    "name": "RTE 400kV Rhone Valley Corridor",
    "country": "France",
    "region": "RTE",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 360,
    "operator": "RTE",
    "status": "Operational",
    "capacity_mw": 3000,
    "coordinates": [
      [
        4.8,
        45.8
      ],
      [
        4.8,
        45.3
      ],
      [
        4.8,
        44.8
      ],
      [
        4.8,
        44.3
      ],
      [
        4.8,
        43.9
      ],
      [
        5.0,
        43.5
      ]
    ]
  },
  {
    "id": "EU-007",
    "name": "France-UK IFA HVDC",
    "country": "France",
    "region": "Cross-Border",
    "voltage_kv": 270,
    "type": "HVDC",
    "length_km": 73,
    "operator": "RTE / National Grid",
    "status": "Operational",
    "capacity_mw": 2000,
    "coordinates": [
      [
        1.6,
        50.9
      ],
      [
        1.2,
        51.1
      ],
      [
        0.9,
        51.3
      ],
      [
        0.5,
        51.4
      ]
    ]
  },
  {
    "id": "EU-008",
    "name": "TenneT 380kV North-South Corridor Germany",
    "country": "Germany",
    "region": "TenneT",
    "voltage_kv": 380,
    "type": "AC",
    "length_km": 740,
    "operator": "TenneT",
    "status": "Operational",
    "capacity_mw": 3500,
    "coordinates": [
      [
        8.5,
        53.5
      ],
      [
        8.5,
        52.8
      ],
      [
        8.5,
        52.0
      ],
      [
        8.5,
        51.3
      ],
      [
        8.5,
        50.5
      ],
      [
        8.5,
        49.7
      ],
      [
        8.5,
        48.9
      ],
      [
        8.5,
        48.2
      ],
      [
        8.6,
        47.8
      ]
    ]
  },
  {
    "id": "EU-009",
    "name": "50Hertz 380kV Berlin Loop",
    "country": "Germany",
    "region": "50Hertz",
    "voltage_kv": 380,
    "type": "AC",
    "length_km": 420,
    "operator": "50Hertz",
    "status": "Operational",
    "capacity_mw": 3200,
    "coordinates": [
      [
        13.4,
        52.5
      ],
      [
        13.8,
        52.8
      ],
      [
        14.2,
        52.5
      ],
      [
        14.5,
        52.0
      ],
      [
        14.0,
        51.5
      ],
      [
        13.5,
        51.3
      ],
      [
        13.0,
        51.5
      ],
      [
        12.5,
        52.0
      ],
      [
        13.0,
        52.5
      ],
      [
        13.4,
        52.5
      ]
    ]
  },
  {
    "id": "EU-010",
    "name": "Amprion 380kV Rhine-Ruhr Corridor",
    "country": "Germany",
    "region": "Amprion",
    "voltage_kv": 380,
    "type": "AC",
    "length_km": 380,
    "operator": "Amprion",
    "status": "Operational",
    "capacity_mw": 3200,
    "coordinates": [
      [
        7.0,
        51.5
      ],
      [
        7.5,
        51.5
      ],
      [
        8.0,
        51.8
      ],
      [
        8.5,
        51.5
      ],
      [
        9.0,
        51.2
      ],
      [
        9.5,
        50.8
      ],
      [
        10.0,
        50.5
      ],
      [
        10.5,
        50.2
      ],
      [
        11.0,
        49.8
      ]
    ]
  },
  {
    "id": "EU-011",
    "name": "NordLink HVDC (Norway-Germany)",
    "country": "Norway",
    "region": "Cross-Border",
    "voltage_kv": 525,
    "type": "HVDC",
    "length_km": 623,
    "operator": "Statnett / TenneT",
    "status": "Operational",
    "capacity_mw": 1400,
    "coordinates": [
      [
        5.2,
        58.5
      ],
      [
        6.0,
        57.5
      ],
      [
        7.0,
        56.5
      ],
      [
        7.5,
        55.8
      ],
      [
        7.8,
        55.0
      ],
      [
        8.0,
        54.6
      ]
    ]
  },
  {
    "id": "EU-012",
    "name": "Viking Link HVDC (Denmark-UK)",
    "country": "Denmark",
    "region": "Cross-Border",
    "voltage_kv": 525,
    "type": "HVDC",
    "length_km": 765,
    "operator": "Energinet / National Grid",
    "status": "Operational",
    "capacity_mw": 1400,
    "coordinates": [
      [
        8.0,
        56.5
      ],
      [
        7.5,
        56.0
      ],
      [
        6.0,
        55.0
      ],
      [
        4.5,
        54.0
      ],
      [
        2.5,
        53.0
      ],
      [
        1.5,
        52.5
      ],
      [
        0.5,
        52.0
      ]
    ]
  },
  {
    "id": "EU-013",
    "name": "NorNed HVDC (Norway-Netherlands)",
    "country": "Norway",
    "region": "Cross-Border",
    "voltage_kv": 450,
    "type": "HVDC",
    "length_km": 580,
    "operator": "Statnett / TenneT",
    "status": "Operational",
    "capacity_mw": 700,
    "coordinates": [
      [
        6.6,
        58.2
      ],
      [
        6.5,
        57.5
      ],
      [
        6.2,
        56.5
      ],
      [
        5.8,
        55.5
      ],
      [
        5.0,
        54.5
      ],
      [
        4.5,
        53.5
      ],
      [
        4.5,
        52.5
      ]
    ]
  },
  {
    "id": "EU-014",
    "name": "Norway 420kV Statnett West Corridor",
    "country": "Norway",
    "region": "Statnett",
    "voltage_kv": 420,
    "type": "AC",
    "length_km": 550,
    "operator": "Statnett",
    "status": "Operational",
    "capacity_mw": 2500,
    "coordinates": [
      [
        14.0,
        69.0
      ],
      [
        13.5,
        68.0
      ],
      [
        13.0,
        67.0
      ],
      [
        12.5,
        66.0
      ],
      [
        12.0,
        65.0
      ],
      [
        11.0,
        64.0
      ],
      [
        10.5,
        63.5
      ],
      [
        10.0,
        62.5
      ],
      [
        9.5,
        61.5
      ],
      [
        8.0,
        60.5
      ],
      [
        7.0,
        59.9
      ],
      [
        6.0,
        59.2
      ],
      [
        5.7,
        58.9
      ]
    ]
  },
  {
    "id": "EU-015",
    "name": "REE 400kV Iberian Backbone",
    "country": "Spain",
    "region": "REE",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 650,
    "operator": "REE",
    "status": "Operational",
    "capacity_mw": 3000,
    "coordinates": [
      [
        -8.5,
        42.0
      ],
      [
        -8.0,
        41.5
      ],
      [
        -7.5,
        41.0
      ],
      [
        -7.0,
        40.5
      ],
      [
        -6.5,
        40.2
      ],
      [
        -6.0,
        40.0
      ],
      [
        -5.5,
        39.8
      ],
      [
        -5.0,
        39.5
      ],
      [
        -4.5,
        39.3
      ],
      [
        -4.0,
        39.3
      ],
      [
        -3.5,
        39.5
      ],
      [
        -3.0,
        40.0
      ],
      [
        -2.5,
        40.5
      ],
      [
        -2.0,
        40.5
      ],
      [
        -1.5,
        40.3
      ],
      [
        -1.0,
        40.0
      ]
    ]
  },
  {
    "id": "EU-016",
    "name": "REE 400kV Madrid-Barcelona Corridor",
    "country": "Spain",
    "region": "REE",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 520,
    "operator": "REE",
    "status": "Operational",
    "capacity_mw": 2800,
    "coordinates": [
      [
        -3.7,
        40.4
      ],
      [
        -3.0,
        40.5
      ],
      [
        -2.5,
        40.5
      ],
      [
        -2.0,
        41.0
      ],
      [
        -1.5,
        41.5
      ],
      [
        -1.0,
        41.5
      ],
      [
        -0.5,
        41.5
      ],
      [
        0.0,
        41.5
      ],
      [
        0.5,
        41.4
      ],
      [
        1.0,
        41.2
      ],
      [
        2.1,
        41.4
      ]
    ]
  },
  {
    "id": "EU-017",
    "name": "Terna 380kV Po Valley Corridor",
    "country": "Italy",
    "region": "Terna",
    "voltage_kv": 380,
    "type": "AC",
    "length_km": 460,
    "operator": "Terna",
    "status": "Operational",
    "capacity_mw": 2800,
    "coordinates": [
      [
        7.5,
        45.0
      ],
      [
        8.0,
        44.8
      ],
      [
        8.5,
        44.6
      ],
      [
        9.0,
        44.5
      ],
      [
        9.5,
        44.5
      ],
      [
        10.0,
        44.5
      ],
      [
        10.5,
        44.5
      ],
      [
        11.0,
        44.5
      ],
      [
        11.5,
        44.3
      ],
      [
        12.0,
        44.2
      ],
      [
        12.5,
        44.1
      ]
    ]
  },
  {
    "id": "EU-018",
    "name": "Terna 380kV Italy South Backbone",
    "country": "Italy",
    "region": "Terna",
    "voltage_kv": 380,
    "type": "AC",
    "length_km": 520,
    "operator": "Terna",
    "status": "Operational",
    "capacity_mw": 2400,
    "coordinates": [
      [
        12.5,
        41.9
      ],
      [
        13.0,
        41.5
      ],
      [
        13.5,
        41.0
      ],
      [
        14.0,
        40.5
      ],
      [
        14.5,
        40.2
      ],
      [
        15.0,
        40.0
      ],
      [
        15.5,
        39.8
      ],
      [
        16.0,
        39.5
      ],
      [
        16.5,
        39.2
      ]
    ]
  },
  {
    "id": "EU-019",
    "name": "Terna Sardinia HVDC (SA.CO.I)",
    "country": "Italy",
    "region": "Cross-Border",
    "voltage_kv": 200,
    "type": "HVDC",
    "length_km": 421,
    "operator": "Terna",
    "status": "Operational",
    "capacity_mw": 450,
    "coordinates": [
      [
        9.0,
        41.2
      ],
      [
        9.3,
        41.5
      ],
      [
        9.5,
        41.8
      ],
      [
        9.8,
        42.2
      ],
      [
        10.0,
        42.6
      ],
      [
        10.1,
        43.0
      ],
      [
        10.3,
        43.6
      ]
    ]
  },
  {
    "id": "EU-020",
    "name": "PSE 400kV Poland North-South Backbone",
    "country": "Poland",
    "region": "PSE",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 580,
    "operator": "PSE",
    "status": "Operational",
    "capacity_mw": 2500,
    "coordinates": [
      [
        18.5,
        54.5
      ],
      [
        18.5,
        53.5
      ],
      [
        18.5,
        52.5
      ],
      [
        19.0,
        51.8
      ],
      [
        19.5,
        51.1
      ],
      [
        19.5,
        50.5
      ],
      [
        19.5,
        50.0
      ],
      [
        19.5,
        49.8
      ]
    ]
  },
  {
    "id": "EU-021",
    "name": "Ukrenergo 750kV Ukraine Backbone",
    "country": "Ukraine",
    "region": "Ukrenergo",
    "voltage_kv": 750,
    "type": "AC",
    "length_km": 880,
    "operator": "Ukrenergo",
    "status": "Operational",
    "capacity_mw": 5000,
    "coordinates": [
      [
        36.0,
        50.0
      ],
      [
        35.0,
        49.8
      ],
      [
        34.0,
        49.5
      ],
      [
        33.0,
        49.2
      ],
      [
        32.0,
        49.0
      ],
      [
        31.0,
        48.8
      ],
      [
        30.0,
        48.5
      ],
      [
        29.5,
        48.2
      ],
      [
        28.5,
        48.0
      ],
      [
        27.5,
        48.0
      ],
      [
        27.0,
        48.5
      ]
    ]
  },
  {
    "id": "EU-022",
    "name": "Elia 380kV Belgium Backbone",
    "country": "Belgium",
    "region": "Elia",
    "voltage_kv": 380,
    "type": "AC",
    "length_km": 280,
    "operator": "Elia",
    "status": "Operational",
    "capacity_mw": 2800,
    "coordinates": [
      [
        3.0,
        51.2
      ],
      [
        3.5,
        51.0
      ],
      [
        4.0,
        50.8
      ],
      [
        4.5,
        50.7
      ],
      [
        5.0,
        50.5
      ],
      [
        5.5,
        50.4
      ],
      [
        6.0,
        50.5
      ]
    ]
  },
  {
    "id": "EU-023",
    "name": "TenneT 380kV Netherlands Backbone",
    "country": "Netherlands",
    "region": "TenneT",
    "voltage_kv": 380,
    "type": "AC",
    "length_km": 310,
    "operator": "TenneT",
    "status": "Operational",
    "capacity_mw": 2800,
    "coordinates": [
      [
        5.5,
        52.8
      ],
      [
        5.2,
        52.5
      ],
      [
        4.9,
        52.3
      ],
      [
        4.5,
        52.2
      ],
      [
        4.2,
        52.0
      ],
      [
        4.5,
        51.5
      ],
      [
        4.8,
        51.2
      ],
      [
        5.1,
        51.0
      ],
      [
        5.5,
        50.8
      ]
    ]
  },
  {
    "id": "EU-024",
    "name": "Austrian APG 380kV Backbone",
    "country": "Austria",
    "region": "APG",
    "voltage_kv": 380,
    "type": "AC",
    "length_km": 420,
    "operator": "APG",
    "status": "Operational",
    "capacity_mw": 2500,
    "coordinates": [
      [
        9.8,
        47.5
      ],
      [
        10.5,
        47.5
      ],
      [
        11.0,
        47.5
      ],
      [
        11.5,
        47.6
      ],
      [
        12.0,
        47.5
      ],
      [
        12.5,
        47.5
      ],
      [
        13.0,
        47.6
      ],
      [
        13.5,
        47.8
      ],
      [
        14.0,
        47.8
      ],
      [
        14.5,
        48.0
      ],
      [
        15.0,
        48.2
      ],
      [
        15.5,
        48.2
      ],
      [
        16.5,
        48.2
      ]
    ]
  },
  {
    "id": "EU-025",
    "name": "SwissGrid 380kV Switzerland Backbone",
    "country": "Switzerland",
    "region": "Swissgrid",
    "voltage_kv": 380,
    "type": "AC",
    "length_km": 360,
    "operator": "Swissgrid",
    "status": "Operational",
    "capacity_mw": 2500,
    "coordinates": [
      [
        6.0,
        47.5
      ],
      [
        6.5,
        47.4
      ],
      [
        7.0,
        47.5
      ],
      [
        7.5,
        47.5
      ],
      [
        8.0,
        47.5
      ],
      [
        8.5,
        47.4
      ],
      [
        9.0,
        47.3
      ],
      [
        9.5,
        47.2
      ],
      [
        10.0,
        47.0
      ]
    ]
  },
  {
    "id": "EU-026",
    "name": "EirGrid 400kV Ireland Backbone",
    "country": "Ireland",
    "region": "EirGrid",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 280,
    "operator": "EirGrid",
    "status": "Operational",
    "capacity_mw": 1000,
    "coordinates": [
      [
        -9.0,
        53.5
      ],
      [
        -8.5,
        53.4
      ],
      [
        -8.0,
        53.3
      ],
      [
        -7.5,
        53.2
      ],
      [
        -7.0,
        53.1
      ],
      [
        -6.5,
        53.2
      ],
      [
        -6.2,
        53.3
      ]
    ]
  },
  {
    "id": "EU-027",
    "name": "Transelectrica 400kV Romania Backbone",
    "country": "Romania",
    "region": "Transelectrica",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 620,
    "operator": "Transelectrica",
    "status": "Operational",
    "capacity_mw": 2000,
    "coordinates": [
      [
        24.0,
        47.0
      ],
      [
        24.5,
        46.5
      ],
      [
        25.0,
        46.0
      ],
      [
        25.5,
        45.5
      ],
      [
        26.0,
        44.8
      ],
      [
        25.5,
        44.3
      ],
      [
        25.0,
        44.0
      ],
      [
        24.5,
        43.9
      ],
      [
        24.0,
        43.8
      ],
      [
        23.5,
        44.0
      ]
    ]
  },
  {
    "id": "EU-028",
    "name": "MAVIR 400kV Hungary Backbone",
    "country": "Hungary",
    "region": "MAVIR",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 320,
    "operator": "MAVIR",
    "status": "Operational",
    "capacity_mw": 1800,
    "coordinates": [
      [
        17.0,
        47.5
      ],
      [
        17.5,
        47.3
      ],
      [
        18.0,
        47.2
      ],
      [
        18.5,
        47.1
      ],
      [
        19.0,
        47.2
      ],
      [
        19.5,
        47.4
      ],
      [
        20.0,
        47.5
      ],
      [
        20.5,
        47.5
      ],
      [
        21.0,
        47.5
      ]
    ]
  },
  {
    "id": "EU-029",
    "name": "HOPS 400kV Croatia Backbone",
    "country": "Croatia",
    "region": "HOPS",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 350,
    "operator": "HOPS",
    "status": "Operational",
    "capacity_mw": 1600,
    "coordinates": [
      [
        13.5,
        45.2
      ],
      [
        14.0,
        45.5
      ],
      [
        14.5,
        45.5
      ],
      [
        15.0,
        45.5
      ],
      [
        15.5,
        45.5
      ],
      [
        16.0,
        45.5
      ],
      [
        16.5,
        45.5
      ],
      [
        17.0,
        45.5
      ],
      [
        17.5,
        45.2
      ],
      [
        18.0,
        44.9
      ]
    ]
  },
  {
    "id": "EU-030",
    "name": "Svenska Kraftnat 400kV Sweden Backbone",
    "country": "Sweden",
    "region": "Svenska Kraftnat",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 560,
    "operator": "Svenska Kraftnat",
    "status": "Operational",
    "capacity_mw": 2500,
    "coordinates": [
      [
        18.0,
        65.0
      ],
      [
        17.5,
        64.0
      ],
      [
        17.0,
        63.0
      ],
      [
        16.5,
        62.0
      ],
      [
        16.0,
        61.0
      ],
      [
        15.5,
        60.2
      ],
      [
        15.0,
        59.5
      ],
      [
        14.5,
        58.8
      ],
      [
        13.5,
        57.8
      ],
      [
        13.0,
        57.5
      ]
    ]
  },
  {
    "id": "EU-031",
    "name": "Fingrid 400kV Finland Central Backbone",
    "country": "Finland",
    "region": "Fingrid",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 490,
    "operator": "Fingrid",
    "status": "Operational",
    "capacity_mw": 2000,
    "coordinates": [
      [
        25.0,
        65.0
      ],
      [
        25.0,
        64.0
      ],
      [
        25.0,
        63.0
      ],
      [
        25.0,
        62.0
      ],
      [
        25.5,
        61.5
      ],
      [
        25.5,
        61.0
      ],
      [
        25.5,
        60.5
      ],
      [
        25.0,
        60.2
      ]
    ]
  },
  {
    "id": "EU-032",
    "name": "Energinet 400kV Denmark Backbone",
    "country": "Denmark",
    "region": "Energinet",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 260,
    "operator": "Energinet",
    "status": "Operational",
    "capacity_mw": 1800,
    "coordinates": [
      [
        8.0,
        57.5
      ],
      [
        8.2,
        56.8
      ],
      [
        8.4,
        56.2
      ],
      [
        8.8,
        55.8
      ],
      [
        9.2,
        55.5
      ],
      [
        9.8,
        55.5
      ],
      [
        10.2,
        55.6
      ],
      [
        10.8,
        55.5
      ]
    ]
  },
  {
    "id": "EU-033",
    "name": "Elering 330kV Estonia Backbone",
    "country": "Estonia",
    "region": "Elering",
    "voltage_kv": 330,
    "type": "AC",
    "length_km": 220,
    "operator": "Elering",
    "status": "Operational",
    "capacity_mw": 1000,
    "coordinates": [
      [
        26.7,
        59.4
      ],
      [
        26.0,
        59.0
      ],
      [
        25.5,
        58.7
      ],
      [
        25.0,
        58.4
      ],
      [
        24.5,
        58.2
      ],
      [
        24.0,
        58.0
      ],
      [
        23.5,
        58.0
      ]
    ]
  },
  {
    "id": "EU-034",
    "name": "SwePol HVDC Link (Sweden-Poland)",
    "country": "Sweden",
    "region": "Cross-Border",
    "voltage_kv": 450,
    "type": "HVDC",
    "length_km": 245,
    "operator": "Svenska Kraftnat / PSE",
    "status": "Operational",
    "capacity_mw": 600,
    "coordinates": [
      [
        17.9,
        55.6
      ],
      [
        18.5,
        56.0
      ],
      [
        19.0,
        56.3
      ],
      [
        19.5,
        56.5
      ],
      [
        20.0,
        56.5
      ]
    ]
  },
  {
    "id": "EU-035",
    "name": "Fenno-Skan HVDC (Sweden-Finland)",
    "country": "Sweden",
    "region": "Cross-Border",
    "voltage_kv": 400,
    "type": "HVDC",
    "length_km": 220,
    "operator": "Svenska Kraftnat / Fingrid",
    "status": "Operational",
    "capacity_mw": 1200,
    "coordinates": [
      [
        22.5,
        63.3
      ],
      [
        23.0,
        63.0
      ],
      [
        23.5,
        62.5
      ],
      [
        24.0,
        62.2
      ],
      [
        24.5,
        62.0
      ],
      [
        25.0,
        61.8
      ],
      [
        25.5,
        61.5
      ]
    ]
  },
  {
    "id": "EU-036",
    "name": "EstLink 2 HVDC (Estonia-Finland)",
    "country": "Estonia",
    "region": "Cross-Border",
    "voltage_kv": 450,
    "type": "HVDC",
    "length_km": 171,
    "operator": "Elering / Fingrid",
    "status": "Operational",
    "capacity_mw": 650,
    "coordinates": [
      [
        24.8,
        59.5
      ],
      [
        24.5,
        59.8
      ],
      [
        24.2,
        60.0
      ],
      [
        24.0,
        60.2
      ],
      [
        23.8,
        60.4
      ],
      [
        23.5,
        60.5
      ]
    ]
  },
  {
    "id": "EU-037",
    "name": "Elia-National Grid Nemo Link HVDC",
    "country": "Belgium",
    "region": "Cross-Border",
    "voltage_kv": 400,
    "type": "HVDC",
    "length_km": 140,
    "operator": "Elia / National Grid",
    "status": "Operational",
    "capacity_mw": 1000,
    "coordinates": [
      [
        2.9,
        51.3
      ],
      [
        2.5,
        51.5
      ],
      [
        2.0,
        51.7
      ],
      [
        1.5,
        51.8
      ],
      [
        1.0,
        51.5
      ],
      [
        0.5,
        51.4
      ]
    ]
  },
  {
    "id": "EU-038",
    "name": "Italy-Montenegro HVDC (Adriatic Link)",
    "country": "Italy",
    "region": "Cross-Border",
    "voltage_kv": 500,
    "type": "HVDC",
    "length_km": 415,
    "operator": "Terna / CGES",
    "status": "Operational",
    "capacity_mw": 600,
    "coordinates": [
      [
        15.5,
        42.0
      ],
      [
        15.8,
        41.8
      ],
      [
        16.0,
        41.5
      ],
      [
        16.2,
        41.2
      ],
      [
        16.5,
        41.0
      ],
      [
        17.0,
        40.5
      ],
      [
        18.0,
        40.0
      ],
      [
        18.8,
        42.5
      ],
      [
        19.2,
        42.2
      ]
    ]
  },
  {
    "id": "EU-039",
    "name": "Hornsea HVDC Offshore Cable (UK)",
    "country": "UK",
    "region": "Offshore Wind",
    "voltage_kv": 320,
    "type": "HVDC",
    "length_km": 180,
    "operator": "Orsted / National Grid",
    "status": "Operational",
    "capacity_mw": 1200,
    "coordinates": [
      [
        0.5,
        53.8
      ],
      [
        0.2,
        53.5
      ],
      [
        -0.2,
        53.2
      ],
      [
        -0.5,
        52.9
      ],
      [
        -0.7,
        52.6
      ]
    ]
  },
  {
    "id": "EU-040",
    "name": "Dogger Bank HVDC Offshore (UK)",
    "country": "UK",
    "region": "Offshore Wind",
    "voltage_kv": 320,
    "type": "HVDC",
    "length_km": 280,
    "operator": "Equinor / National Grid",
    "status": "Operational",
    "capacity_mw": 1200,
    "coordinates": [
      [
        2.0,
        54.8
      ],
      [
        1.5,
        54.2
      ],
      [
        1.0,
        53.8
      ],
      [
        0.5,
        53.4
      ],
      [
        0.0,
        53.0
      ],
      [
        -0.5,
        52.8
      ]
    ]
  },
  {
    "id": "EU-041",
    "name": "REE 400kV Andalucia Ring",
    "country": "Spain",
    "region": "REE",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 600,
    "operator": "REE",
    "status": "Operational",
    "capacity_mw": 2400,
    "coordinates": [
      [
        -3.7,
        37.8
      ],
      [
        -4.5,
        37.5
      ],
      [
        -5.0,
        37.0
      ],
      [
        -5.5,
        36.8
      ],
      [
        -6.0,
        37.0
      ],
      [
        -6.5,
        37.3
      ],
      [
        -6.2,
        37.9
      ],
      [
        -5.5,
        38.2
      ],
      [
        -4.8,
        38.0
      ],
      [
        -4.0,
        38.0
      ],
      [
        -3.5,
        37.8
      ]
    ]
  },
  {
    "id": "EU-042",
    "name": "REN 400kV Portugal Backbone",
    "country": "Portugal",
    "region": "REN",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 380,
    "operator": "REN",
    "status": "Operational",
    "capacity_mw": 2200,
    "coordinates": [
      [
        -9.1,
        38.7
      ],
      [
        -8.8,
        39.2
      ],
      [
        -8.5,
        39.7
      ],
      [
        -8.2,
        40.2
      ],
      [
        -8.0,
        40.7
      ],
      [
        -7.8,
        41.2
      ],
      [
        -7.5,
        41.6
      ]
    ]
  },
  {
    "id": "EU-043",
    "name": "CEPS 400kV Czech Republic Backbone",
    "country": "Czech Republic",
    "region": "CEPS",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 350,
    "operator": "CEPS",
    "status": "Operational",
    "capacity_mw": 2200,
    "coordinates": [
      [
        14.0,
        50.2
      ],
      [
        14.5,
        50.1
      ],
      [
        15.0,
        50.0
      ],
      [
        15.5,
        50.1
      ],
      [
        16.0,
        50.2
      ],
      [
        16.5,
        50.1
      ],
      [
        17.0,
        50.0
      ],
      [
        17.5,
        49.9
      ],
      [
        18.0,
        49.8
      ]
    ]
  },
  {
    "id": "EU-044",
    "name": "EMS Serbia 400kV Backbone",
    "country": "Serbia",
    "region": "EMS",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 350,
    "operator": "EMS Serbia",
    "status": "Operational",
    "capacity_mw": 1600,
    "coordinates": [
      [
        20.5,
        45.2
      ],
      [
        20.8,
        44.8
      ],
      [
        21.0,
        44.4
      ],
      [
        21.2,
        44.0
      ],
      [
        21.0,
        43.5
      ],
      [
        20.8,
        43.2
      ],
      [
        20.5,
        43.0
      ]
    ]
  },
  {
    "id": "EU-045",
    "name": "IPTO 400kV Greece Backbone",
    "country": "Greece",
    "region": "IPTO",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 480,
    "operator": "IPTO",
    "status": "Operational",
    "capacity_mw": 1500,
    "coordinates": [
      [
        21.5,
        41.0
      ],
      [
        22.0,
        40.5
      ],
      [
        22.5,
        40.0
      ],
      [
        23.0,
        39.5
      ],
      [
        23.5,
        39.0
      ],
      [
        24.0,
        38.5
      ],
      [
        24.5,
        38.2
      ],
      [
        25.0,
        38.0
      ]
    ]
  },
  {
    "id": "EU-046",
    "name": "TransnetBW 380kV Baden-Wuerttemberg",
    "country": "Germany",
    "region": "TransnetBW",
    "voltage_kv": 380,
    "type": "AC",
    "length_km": 310,
    "operator": "TransnetBW",
    "status": "Operational",
    "capacity_mw": 2800,
    "coordinates": [
      [
        9.2,
        49.5
      ],
      [
        9.5,
        48.8
      ],
      [
        9.5,
        48.2
      ],
      [
        9.8,
        47.8
      ],
      [
        9.5,
        47.5
      ],
      [
        9.2,
        47.8
      ]
    ]
  },
  {
    "id": "EU-047",
    "name": "Statnett 420kV East Norway Corridor",
    "country": "Norway",
    "region": "Statnett",
    "voltage_kv": 420,
    "type": "AC",
    "length_km": 480,
    "operator": "Statnett",
    "status": "Operational",
    "capacity_mw": 2200,
    "coordinates": [
      [
        11.0,
        63.5
      ],
      [
        11.5,
        62.8
      ],
      [
        11.8,
        62.0
      ],
      [
        12.0,
        61.2
      ],
      [
        11.5,
        60.5
      ],
      [
        11.0,
        59.8
      ],
      [
        10.5,
        59.2
      ],
      [
        10.0,
        59.0
      ]
    ]
  },
  {
    "id": "EU-048",
    "name": "ESO Bulgaria 400kV Backbone",
    "country": "Bulgaria",
    "region": "ESO",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 420,
    "operator": "ESO Bulgaria",
    "status": "Operational",
    "capacity_mw": 1800,
    "coordinates": [
      [
        22.5,
        42.5
      ],
      [
        23.0,
        42.2
      ],
      [
        23.5,
        42.0
      ],
      [
        24.0,
        42.0
      ],
      [
        24.5,
        42.2
      ],
      [
        25.0,
        42.5
      ],
      [
        25.5,
        42.3
      ],
      [
        26.0,
        42.0
      ],
      [
        26.5,
        41.9
      ],
      [
        27.0,
        41.8
      ]
    ]
  },
  {
    "id": "EU-049",
    "name": "ELES Slovenia 400kV Backbone",
    "country": "Slovenia",
    "region": "ELES",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 200,
    "operator": "ELES",
    "status": "Operational",
    "capacity_mw": 1200,
    "coordinates": [
      [
        13.7,
        46.0
      ],
      [
        14.2,
        46.0
      ],
      [
        14.6,
        46.2
      ],
      [
        15.0,
        46.3
      ],
      [
        15.5,
        46.2
      ],
      [
        16.0,
        46.3
      ],
      [
        16.5,
        46.2
      ]
    ]
  },
  {
    "id": "EU-050",
    "name": "Poland 400kV East-West Backbone (PSE)",
    "country": "Poland",
    "region": "PSE",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 580,
    "operator": "PSE",
    "status": "Operational",
    "capacity_mw": 2200,
    "coordinates": [
      [
        14.5,
        51.5
      ],
      [
        15.5,
        51.5
      ],
      [
        16.5,
        51.5
      ],
      [
        17.5,
        51.5
      ],
      [
        18.5,
        51.5
      ],
      [
        19.5,
        51.5
      ],
      [
        20.5,
        51.5
      ],
      [
        21.5,
        52.0
      ],
      [
        22.5,
        52.0
      ],
      [
        23.0,
        52.5
      ]
    ]
  },
  {
    "id": "EU-051",
    "name": "Baltic Eagle HVDC Offshore (Germany)",
    "country": "Germany",
    "region": "Offshore Wind",
    "voltage_kv": 320,
    "type": "HVDC",
    "length_km": 120,
    "operator": "Masdar / 50Hertz",
    "status": "Operational",
    "capacity_mw": 476,
    "coordinates": [
      [
        13.8,
        54.8
      ],
      [
        13.5,
        54.4
      ],
      [
        13.2,
        54.0
      ],
      [
        13.0,
        53.8
      ],
      [
        12.8,
        53.5
      ],
      [
        12.5,
        53.2
      ]
    ]
  },
  {
    "id": "EU-052",
    "name": "National Grid 400kV East Anglia Backbone",
    "country": "UK",
    "region": "National Grid",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 240,
    "operator": "National Grid",
    "status": "Operational",
    "capacity_mw": 2400,
    "coordinates": [
      [
        0.1,
        51.5
      ],
      [
        0.5,
        51.8
      ],
      [
        0.8,
        52.0
      ],
      [
        1.0,
        52.5
      ],
      [
        1.2,
        52.8
      ],
      [
        1.4,
        53.0
      ]
    ]
  },
  {
    "id": "EU-053",
    "name": "RTE 400kV Atlantic Coast France",
    "country": "France",
    "region": "Brittany-Atlantique",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 400,
    "operator": "RTE",
    "status": "Operational",
    "capacity_mw": 2000,
    "coordinates": [
      [
        -1.5,
        47.2
      ],
      [
        -2.0,
        47.5
      ],
      [
        -2.5,
        47.8
      ],
      [
        -3.0,
        48.0
      ],
      [
        -3.5,
        48.2
      ],
      [
        -4.0,
        48.0
      ],
      [
        -4.5,
        47.8
      ],
      [
        -4.3,
        47.4
      ],
      [
        -4.0,
        47.0
      ],
      [
        -3.5,
        47.0
      ]
    ]
  },
  {
    "id": "EU-054",
    "name": "TenneT 380kV Southern Germany-Austria",
    "country": "Germany",
    "region": "Bavaria",
    "voltage_kv": 380,
    "type": "AC",
    "length_km": 260,
    "operator": "TenneT",
    "status": "Operational",
    "capacity_mw": 2600,
    "coordinates": [
      [
        10.0,
        48.0
      ],
      [
        10.5,
        47.8
      ],
      [
        11.0,
        47.5
      ],
      [
        11.5,
        47.5
      ],
      [
        12.0,
        47.5
      ],
      [
        12.5,
        47.8
      ],
      [
        13.0,
        47.5
      ]
    ]
  },
  {
    "id": "EU-055",
    "name": "REE 400kV Spanish Mediterranean Coast",
    "country": "Spain",
    "region": "REE",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 500,
    "operator": "REE",
    "status": "Operational",
    "capacity_mw": 2600,
    "coordinates": [
      [
        -0.5,
        39.5
      ],
      [
        0.0,
        39.5
      ],
      [
        0.5,
        39.5
      ],
      [
        1.0,
        40.0
      ],
      [
        1.5,
        40.5
      ],
      [
        2.0,
        41.0
      ],
      [
        2.5,
        41.5
      ],
      [
        2.8,
        41.9
      ]
    ]
  },
  {
    "id": "EU-056",
    "name": "REE 400kV Cantabrian Coast Spain",
    "country": "Spain",
    "region": "REE",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 450,
    "operator": "REE",
    "status": "Operational",
    "capacity_mw": 1800,
    "coordinates": [
      [
        -8.5,
        43.4
      ],
      [
        -8.0,
        43.4
      ],
      [
        -7.5,
        43.5
      ],
      [
        -7.0,
        43.5
      ],
      [
        -6.5,
        43.4
      ],
      [
        -6.0,
        43.4
      ],
      [
        -5.5,
        43.3
      ],
      [
        -5.0,
        43.4
      ],
      [
        -4.5,
        43.4
      ],
      [
        -4.0,
        43.3
      ],
      [
        -3.5,
        43.3
      ],
      [
        -3.0,
        43.3
      ],
      [
        -2.5,
        43.2
      ],
      [
        -2.0,
        43.3
      ]
    ]
  },
  {
    "id": "EU-057",
    "name": "Fingrid 400kV Pyhanti-Kangasala Finland",
    "country": "Finland",
    "region": "Fingrid",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 360,
    "operator": "Fingrid",
    "status": "Operational",
    "capacity_mw": 1800,
    "coordinates": [
      [
        24.0,
        64.5
      ],
      [
        24.0,
        63.5
      ],
      [
        24.0,
        62.5
      ],
      [
        23.5,
        62.0
      ],
      [
        23.8,
        61.5
      ],
      [
        24.0,
        61.0
      ],
      [
        24.0,
        60.5
      ]
    ]
  },
  {
    "id": "EU-058",
    "name": "RTE 400kV Loire Valley Nuclear Corridor",
    "country": "France",
    "region": "Centre-Val de Loire",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 280,
    "operator": "RTE",
    "status": "Operational",
    "capacity_mw": 3000,
    "coordinates": [
      [
        0.2,
        47.8
      ],
      [
        0.5,
        47.3
      ],
      [
        1.0,
        47.0
      ],
      [
        1.5,
        47.0
      ],
      [
        2.0,
        47.3
      ],
      [
        2.5,
        47.5
      ],
      [
        2.8,
        47.8
      ]
    ]
  },
  {
    "id": "EU-059",
    "name": "Energinet Great Belt AC Link Denmark",
    "country": "Denmark",
    "region": "Denmark",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 58,
    "operator": "Energinet",
    "status": "Operational",
    "capacity_mw": 1200,
    "coordinates": [
      [
        9.8,
        55.5
      ],
      [
        10.2,
        55.5
      ],
      [
        10.5,
        55.5
      ],
      [
        10.8,
        55.5
      ],
      [
        11.2,
        55.5
      ]
    ]
  },
  {
    "id": "EU-060",
    "name": "APG 380kV Austria-Italy Cross-Alps",
    "country": "Austria",
    "region": "Cross-Border",
    "voltage_kv": 380,
    "type": "AC",
    "length_km": 150,
    "operator": "APG / Terna",
    "status": "Operational",
    "capacity_mw": 1000,
    "coordinates": [
      [
        11.5,
        47.3
      ],
      [
        11.3,
        46.8
      ],
      [
        11.2,
        46.5
      ],
      [
        11.1,
        46.2
      ],
      [
        11.0,
        46.0
      ],
      [
        10.8,
        45.8
      ]
    ]
  },
  {
    "id": "EU-061",
    "name": "PSE 400kV Poland-Germany Interconnect",
    "country": "Poland",
    "region": "Cross-Border",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 110,
    "operator": "PSE / 50Hertz",
    "status": "Operational",
    "capacity_mw": 1500,
    "coordinates": [
      [
        14.5,
        51.3
      ],
      [
        14.8,
        51.5
      ],
      [
        15.0,
        51.8
      ],
      [
        15.5,
        52.0
      ],
      [
        16.0,
        52.2
      ]
    ]
  },
  {
    "id": "EU-062",
    "name": "Transelectrica Romania-Bulgaria Interconnect",
    "country": "Romania",
    "region": "Cross-Border",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 120,
    "operator": "Transelectrica / ESO",
    "status": "Operational",
    "capacity_mw": 600,
    "coordinates": [
      [
        25.5,
        44.0
      ],
      [
        25.5,
        43.5
      ],
      [
        25.5,
        43.0
      ],
      [
        25.5,
        42.8
      ],
      [
        25.5,
        42.5
      ]
    ]
  },
  {
    "id": "EU-063",
    "name": "MAVIR Hungary-Romania Interconnect",
    "country": "Hungary",
    "region": "Cross-Border",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 95,
    "operator": "MAVIR / Transelectrica",
    "status": "Operational",
    "capacity_mw": 700,
    "coordinates": [
      [
        21.5,
        46.0
      ],
      [
        21.8,
        46.0
      ],
      [
        22.0,
        46.2
      ],
      [
        22.5,
        46.0
      ],
      [
        22.8,
        45.8
      ]
    ]
  },
  {
    "id": "EU-064",
    "name": "HOPS Croatia-Slovenia Interconnect",
    "country": "Croatia",
    "region": "Cross-Border",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 90,
    "operator": "HOPS / ELES",
    "status": "Operational",
    "capacity_mw": 800,
    "coordinates": [
      [
        15.8,
        45.4
      ],
      [
        15.5,
        45.6
      ],
      [
        15.2,
        45.8
      ],
      [
        14.8,
        46.0
      ],
      [
        14.5,
        46.2
      ]
    ]
  },
  {
    "id": "EU-065",
    "name": "Terna 380kV Sicily Backbone",
    "country": "Italy",
    "region": "Terna",
    "voltage_kv": 380,
    "type": "AC",
    "length_km": 280,
    "operator": "Terna",
    "status": "Operational",
    "capacity_mw": 1200,
    "coordinates": [
      [
        13.0,
        37.5
      ],
      [
        13.5,
        37.5
      ],
      [
        14.0,
        37.5
      ],
      [
        14.5,
        37.5
      ],
      [
        15.0,
        37.5
      ],
      [
        15.2,
        37.8
      ],
      [
        15.5,
        38.2
      ]
    ]
  },
  {
    "id": "EU-066",
    "name": "Elering-Fingrid Nordic-Baltic HVDC",
    "country": "Estonia",
    "region": "Cross-Border",
    "voltage_kv": 450,
    "type": "HVDC",
    "length_km": 171,
    "operator": "Elering",
    "status": "Operational",
    "capacity_mw": 650,
    "coordinates": [
      [
        24.5,
        59.5
      ],
      [
        24.2,
        60.0
      ],
      [
        24.0,
        60.2
      ],
      [
        23.8,
        60.5
      ]
    ]
  },
  {
    "id": "EU-067",
    "name": "50Hertz 380kV Cottbus-Kiel North-South",
    "country": "Germany",
    "region": "50Hertz",
    "voltage_kv": 380,
    "type": "AC",
    "length_km": 420,
    "operator": "50Hertz",
    "status": "Operational",
    "capacity_mw": 3200,
    "coordinates": [
      [
        10.1,
        54.3
      ],
      [
        10.2,
        53.5
      ],
      [
        10.3,
        52.8
      ],
      [
        10.5,
        52.0
      ],
      [
        13.2,
        51.8
      ],
      [
        14.3,
        51.8
      ]
    ]
  },
  {
    "id": "EU-068",
    "name": "Baltic Cable HVDC (Denmark-Germany)",
    "country": "Denmark",
    "region": "Cross-Border",
    "voltage_kv": 450,
    "type": "HVDC",
    "length_km": 170,
    "operator": "Energinet / 50Hertz",
    "status": "Operational",
    "capacity_mw": 600,
    "coordinates": [
      [
        10.0,
        55.5
      ],
      [
        10.5,
        55.0
      ],
      [
        11.0,
        54.5
      ],
      [
        11.5,
        54.2
      ],
      [
        12.0,
        54.0
      ],
      [
        12.5,
        53.8
      ]
    ]
  },
  {
    "id": "EU-069",
    "name": "TenneT 380kV Netherlands-Germany Corridor",
    "country": "Netherlands",
    "region": "TenneT",
    "voltage_kv": 380,
    "type": "AC",
    "length_km": 200,
    "operator": "TenneT NL / TenneT DE",
    "status": "Operational",
    "capacity_mw": 2800,
    "coordinates": [
      [
        6.5,
        52.5
      ],
      [
        7.0,
        52.5
      ],
      [
        7.5,
        52.0
      ],
      [
        8.0,
        51.8
      ],
      [
        8.5,
        51.5
      ],
      [
        9.0,
        51.2
      ]
    ]
  },
  {
    "id": "EU-070",
    "name": "ENTSO-E 400kV Balkans Ring Southeast",
    "country": "Romania",
    "region": "Cross-Border",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 350,
    "operator": "Transelectrica / ESO / EMS",
    "status": "Operational",
    "capacity_mw": 1000,
    "coordinates": [
      [
        27.0,
        44.0
      ],
      [
        26.5,
        43.5
      ],
      [
        26.0,
        43.0
      ],
      [
        25.5,
        42.5
      ],
      [
        25.0,
        42.0
      ],
      [
        24.5,
        41.7
      ],
      [
        24.0,
        42.0
      ],
      [
        23.5,
        42.5
      ],
      [
        23.0,
        43.0
      ],
      [
        22.5,
        43.5
      ]
    ]
  },
  {
    "id": "EU-071",
    "name": "Swissgrid-RTE 380kV Swiss-France Corridor",
    "country": "Switzerland",
    "region": "Cross-Border",
    "voltage_kv": 380,
    "type": "AC",
    "length_km": 120,
    "operator": "Swissgrid / RTE",
    "status": "Operational",
    "capacity_mw": 1200,
    "coordinates": [
      [
        6.0,
        47.5
      ],
      [
        6.5,
        47.2
      ],
      [
        7.0,
        47.0
      ],
      [
        7.2,
        46.8
      ],
      [
        7.5,
        46.5
      ]
    ]
  },
  {
    "id": "EU-072",
    "name": "REE 400kV Interconnect Santa Llogaia-Baixas HVDC",
    "country": "Spain",
    "region": "Cross-Border",
    "voltage_kv": 400,
    "type": "HVDC",
    "length_km": 65,
    "operator": "REE / RTE",
    "status": "Operational",
    "capacity_mw": 1400,
    "coordinates": [
      [
        2.85,
        42.18
      ],
      [
        2.8,
        42.5
      ],
      [
        2.75,
        42.8
      ],
      [
        2.7,
        43.0
      ],
      [
        2.7,
        43.2
      ]
    ]
  },
  {
    "id": "ROW-001",
    "name": "Zhundong-Wannan ±1100kV UHVDC",
    "country": "China",
    "region": "East-West Corridor",
    "voltage_kv": 1100,
    "type": "HVDC",
    "length_km": 3324,
    "operator": "State Grid",
    "status": "Operational",
    "capacity_mw": 12000,
    "coordinates": [
      [
        87.0,
        44.5
      ],
      [
        90.0,
        42.5
      ],
      [
        94.0,
        40.5
      ],
      [
        98.0,
        38.5
      ],
      [
        102.0,
        37.0
      ],
      [
        106.0,
        36.5
      ],
      [
        110.0,
        35.8
      ],
      [
        114.0,
        35.0
      ],
      [
        116.0,
        34.0
      ],
      [
        117.5,
        31.0
      ]
    ]
  },
  {
    "id": "ROW-002",
    "name": "Zhangbei-Xiongxiong ±500kV HVDC",
    "country": "China",
    "region": "North China",
    "voltage_kv": 500,
    "type": "HVDC",
    "length_km": 666,
    "operator": "State Grid",
    "status": "Operational",
    "capacity_mw": 3000,
    "coordinates": [
      [
        114.7,
        41.0
      ],
      [
        115.5,
        40.5
      ],
      [
        116.0,
        40.0
      ],
      [
        116.2,
        39.5
      ],
      [
        116.0,
        39.0
      ],
      [
        116.1,
        38.7
      ]
    ]
  },
  {
    "id": "ROW-003",
    "name": "Xiluodu-Zhexi ±800kV UHVDC",
    "country": "China",
    "region": "West-East Corridor",
    "voltage_kv": 800,
    "type": "HVDC",
    "length_km": 1653,
    "operator": "State Grid",
    "status": "Operational",
    "capacity_mw": 7200,
    "coordinates": [
      [
        103.5,
        28.0
      ],
      [
        106.0,
        27.5
      ],
      [
        109.0,
        27.5
      ],
      [
        112.0,
        27.5
      ],
      [
        115.0,
        28.0
      ],
      [
        117.0,
        28.5
      ],
      [
        118.5,
        29.5
      ],
      [
        119.0,
        30.0
      ],
      [
        120.0,
        30.2
      ]
    ]
  },
  {
    "id": "ROW-004",
    "name": "Hami-Zhengzhou ±800kV UHVDC",
    "country": "China",
    "region": "Northwest-East Corridor",
    "voltage_kv": 800,
    "type": "HVDC",
    "length_km": 2192,
    "operator": "State Grid",
    "status": "Operational",
    "capacity_mw": 8000,
    "coordinates": [
      [
        93.5,
        42.8
      ],
      [
        97.5,
        41.0
      ],
      [
        101.5,
        39.0
      ],
      [
        104.5,
        37.5
      ],
      [
        107.0,
        36.5
      ],
      [
        109.5,
        35.5
      ],
      [
        112.0,
        35.0
      ],
      [
        113.5,
        34.8
      ]
    ]
  },
  {
    "id": "ROW-005",
    "name": "Xiangjiaba-Shanghai ±800kV UHVDC",
    "country": "China",
    "region": "West-East Corridor",
    "voltage_kv": 800,
    "type": "HVDC",
    "length_km": 2071,
    "operator": "State Grid",
    "status": "Operational",
    "capacity_mw": 6400,
    "coordinates": [
      [
        104.5,
        28.5
      ],
      [
        107.0,
        29.5
      ],
      [
        110.0,
        30.0
      ],
      [
        113.0,
        30.5
      ],
      [
        116.0,
        30.5
      ],
      [
        119.0,
        31.0
      ],
      [
        121.0,
        31.2
      ],
      [
        121.5,
        31.0
      ]
    ]
  },
  {
    "id": "ROW-006",
    "name": "China 500kV Fujian Coastal Corridor",
    "country": "China",
    "region": "East China",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 460,
    "operator": "State Grid",
    "status": "Operational",
    "capacity_mw": 3500,
    "coordinates": [
      [
        120.3,
        30.3
      ],
      [
        120.5,
        29.5
      ],
      [
        120.5,
        28.5
      ],
      [
        120.5,
        27.5
      ],
      [
        120.0,
        26.5
      ],
      [
        119.5,
        26.0
      ],
      [
        119.0,
        26.5
      ],
      [
        118.0,
        24.5
      ]
    ]
  },
  {
    "id": "ROW-007",
    "name": "China 1000kV UHV AC Huainan-Shanghai",
    "country": "China",
    "region": "East China",
    "voltage_kv": 1000,
    "type": "AC",
    "length_km": 648,
    "operator": "State Grid",
    "status": "Operational",
    "capacity_mw": 10000,
    "coordinates": [
      [
        116.0,
        32.5
      ],
      [
        117.0,
        32.0
      ],
      [
        118.0,
        31.8
      ],
      [
        119.0,
        31.5
      ],
      [
        120.0,
        31.2
      ],
      [
        121.0,
        31.0
      ],
      [
        121.5,
        31.0
      ]
    ]
  },
  {
    "id": "ROW-008",
    "name": "China 1000kV UHV AC Ximeng-Nanyang",
    "country": "China",
    "region": "North-Central China",
    "voltage_kv": 1000,
    "type": "AC",
    "length_km": 730,
    "operator": "State Grid",
    "status": "Operational",
    "capacity_mw": 10000,
    "coordinates": [
      [
        111.5,
        40.5
      ],
      [
        111.0,
        40.0
      ],
      [
        110.5,
        39.5
      ],
      [
        110.0,
        39.0
      ],
      [
        111.0,
        38.5
      ],
      [
        112.0,
        37.5
      ],
      [
        112.5,
        37.0
      ],
      [
        112.5,
        36.0
      ],
      [
        113.0,
        33.0
      ]
    ]
  },
  {
    "id": "ROW-009",
    "name": "China 500kV Guangdong-Hong Kong Corridor",
    "country": "China",
    "region": "South China",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 120,
    "operator": "China Southern Grid",
    "status": "Operational",
    "capacity_mw": 3000,
    "coordinates": [
      [
        113.3,
        23.1
      ],
      [
        113.5,
        22.8
      ],
      [
        113.8,
        22.5
      ],
      [
        114.0,
        22.3
      ],
      [
        114.2,
        22.2
      ]
    ]
  },
  {
    "id": "ROW-010",
    "name": "China 500kV Hubei Central Grid",
    "country": "China",
    "region": "Central China",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 430,
    "operator": "State Grid",
    "status": "Operational",
    "capacity_mw": 3500,
    "coordinates": [
      [
        110.0,
        30.5
      ],
      [
        110.5,
        30.7
      ],
      [
        111.0,
        31.0
      ],
      [
        111.5,
        31.2
      ],
      [
        112.0,
        31.5
      ],
      [
        112.5,
        31.2
      ],
      [
        113.0,
        30.8
      ],
      [
        113.5,
        30.5
      ],
      [
        114.0,
        30.5
      ],
      [
        114.3,
        30.6
      ]
    ]
  },
  {
    "id": "ROW-011",
    "name": "China 500kV Liaoning Northeast Grid",
    "country": "China",
    "region": "Northeast China",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 480,
    "operator": "State Grid",
    "status": "Operational",
    "capacity_mw": 3500,
    "coordinates": [
      [
        121.0,
        41.0
      ],
      [
        122.0,
        41.2
      ],
      [
        123.0,
        41.5
      ],
      [
        124.0,
        42.0
      ],
      [
        124.5,
        42.5
      ],
      [
        124.0,
        43.0
      ],
      [
        123.5,
        43.5
      ],
      [
        123.0,
        43.8
      ]
    ]
  },
  {
    "id": "ROW-012",
    "name": "Champa-Kurukshetra ±800kV HVDC",
    "country": "India",
    "region": "North India",
    "voltage_kv": 800,
    "type": "HVDC",
    "length_km": 1365,
    "operator": "PowerGrid India",
    "status": "Operational",
    "capacity_mw": 3000,
    "coordinates": [
      [
        82.5,
        22.0
      ],
      [
        82.0,
        23.5
      ],
      [
        81.5,
        25.0
      ],
      [
        80.5,
        26.0
      ],
      [
        79.5,
        27.0
      ],
      [
        78.5,
        28.0
      ],
      [
        77.5,
        28.5
      ],
      [
        76.5,
        29.5
      ],
      [
        76.0,
        30.0
      ]
    ]
  },
  {
    "id": "ROW-013",
    "name": "India 765kV Green Energy Corridor South",
    "country": "India",
    "region": "South India",
    "voltage_kv": 765,
    "type": "AC",
    "length_km": 1800,
    "operator": "PowerGrid India",
    "status": "Operational",
    "capacity_mw": 6000,
    "coordinates": [
      [
        72.5,
        22.0
      ],
      [
        73.5,
        21.5
      ],
      [
        74.5,
        21.0
      ],
      [
        75.5,
        20.5
      ],
      [
        76.5,
        19.5
      ],
      [
        77.5,
        18.5
      ],
      [
        78.5,
        17.5
      ],
      [
        79.5,
        16.5
      ],
      [
        80.5,
        15.5
      ],
      [
        80.0,
        14.5
      ],
      [
        79.5,
        13.5
      ],
      [
        80.2,
        13.0
      ]
    ]
  },
  {
    "id": "ROW-014",
    "name": "India 765kV Northern Grid Backbone",
    "country": "India",
    "region": "North India",
    "voltage_kv": 765,
    "type": "AC",
    "length_km": 1200,
    "operator": "PowerGrid India",
    "status": "Operational",
    "capacity_mw": 5000,
    "coordinates": [
      [
        72.8,
        19.0
      ],
      [
        74.0,
        20.0
      ],
      [
        75.0,
        21.0
      ],
      [
        76.5,
        22.0
      ],
      [
        77.5,
        23.0
      ],
      [
        78.5,
        24.0
      ],
      [
        79.5,
        25.0
      ],
      [
        80.5,
        26.0
      ],
      [
        82.0,
        27.0
      ],
      [
        83.0,
        28.0
      ],
      [
        85.0,
        27.0
      ],
      [
        85.0,
        26.0
      ],
      [
        85.8,
        25.5
      ]
    ]
  },
  {
    "id": "ROW-015",
    "name": "India 765kV Eastern Grid Backbone",
    "country": "India",
    "region": "East India",
    "voltage_kv": 765,
    "type": "AC",
    "length_km": 700,
    "operator": "PowerGrid India",
    "status": "Operational",
    "capacity_mw": 4000,
    "coordinates": [
      [
        85.8,
        21.0
      ],
      [
        85.5,
        22.0
      ],
      [
        85.2,
        23.0
      ],
      [
        85.0,
        24.0
      ],
      [
        85.5,
        25.0
      ],
      [
        86.0,
        25.5
      ],
      [
        85.8,
        26.5
      ]
    ]
  },
  {
    "id": "ROW-016",
    "name": "Belo Monte ±800kV HVDC Xingu-Estreito",
    "country": "Brazil",
    "region": "North-Southeast Corridor",
    "voltage_kv": 800,
    "type": "HVDC",
    "length_km": 2092,
    "operator": "Norte Energia",
    "status": "Operational",
    "capacity_mw": 4000,
    "coordinates": [
      [
        -52.0,
        -3.5
      ],
      [
        -52.5,
        -5.0
      ],
      [
        -52.0,
        -7.0
      ],
      [
        -51.5,
        -9.0
      ],
      [
        -50.5,
        -11.5
      ],
      [
        -49.5,
        -13.5
      ],
      [
        -48.5,
        -15.5
      ],
      [
        -48.0,
        -17.0
      ],
      [
        -47.5,
        -19.0
      ],
      [
        -46.5,
        -21.0
      ],
      [
        -45.0,
        -21.5
      ]
    ]
  },
  {
    "id": "ROW-017",
    "name": "Belo Monte ±800kV HVDC Xingu-Terminal Rio",
    "country": "Brazil",
    "region": "North-Southeast Corridor",
    "voltage_kv": 800,
    "type": "HVDC",
    "length_km": 2518,
    "operator": "Norte Energia",
    "status": "Operational",
    "capacity_mw": 4000,
    "coordinates": [
      [
        -52.0,
        -3.5
      ],
      [
        -53.0,
        -5.5
      ],
      [
        -53.0,
        -8.0
      ],
      [
        -52.5,
        -10.5
      ],
      [
        -51.0,
        -13.0
      ],
      [
        -49.5,
        -15.5
      ],
      [
        -48.0,
        -18.0
      ],
      [
        -46.5,
        -20.5
      ],
      [
        -44.5,
        -22.5
      ],
      [
        -43.5,
        -23.0
      ],
      [
        -43.0,
        -22.9
      ]
    ]
  },
  {
    "id": "ROW-018",
    "name": "Itaipu 765kV Brazil Backbone",
    "country": "Brazil",
    "region": "South-Southeast Corridor",
    "voltage_kv": 765,
    "type": "AC",
    "length_km": 900,
    "operator": "Eletrobras",
    "status": "Operational",
    "capacity_mw": 6300,
    "coordinates": [
      [
        -54.5,
        -25.4
      ],
      [
        -53.5,
        -24.5
      ],
      [
        -52.5,
        -23.5
      ],
      [
        -51.5,
        -23.0
      ],
      [
        -50.5,
        -22.5
      ],
      [
        -49.5,
        -22.0
      ],
      [
        -48.5,
        -22.0
      ],
      [
        -47.5,
        -22.0
      ],
      [
        -46.5,
        -22.5
      ],
      [
        -45.5,
        -22.5
      ],
      [
        -44.5,
        -23.0
      ],
      [
        -43.0,
        -22.9
      ]
    ]
  },
  {
    "id": "ROW-019",
    "name": "Australia NEM 330kV NSW Snowy Corridor",
    "country": "Australia",
    "region": "NEM",
    "voltage_kv": 330,
    "type": "AC",
    "length_km": 450,
    "operator": "Transgrid",
    "status": "Operational",
    "capacity_mw": 1800,
    "coordinates": [
      [
        149.1,
        -35.3
      ],
      [
        149.0,
        -35.8
      ],
      [
        148.5,
        -36.0
      ],
      [
        148.0,
        -36.2
      ],
      [
        147.5,
        -36.0
      ],
      [
        147.0,
        -35.5
      ],
      [
        146.5,
        -35.0
      ],
      [
        146.0,
        -35.5
      ],
      [
        145.5,
        -36.0
      ],
      [
        145.0,
        -36.5
      ],
      [
        144.5,
        -37.0
      ],
      [
        144.0,
        -37.8
      ],
      [
        143.5,
        -38.0
      ]
    ]
  },
  {
    "id": "ROW-020",
    "name": "Australia NEM 275kV Queensland Backbone",
    "country": "Australia",
    "region": "NEM",
    "voltage_kv": 275,
    "type": "AC",
    "length_km": 820,
    "operator": "Powerlink Queensland",
    "status": "Operational",
    "capacity_mw": 2000,
    "coordinates": [
      [
        153.0,
        -27.5
      ],
      [
        152.5,
        -27.0
      ],
      [
        152.0,
        -26.5
      ],
      [
        151.5,
        -26.0
      ],
      [
        151.0,
        -25.5
      ],
      [
        150.5,
        -25.0
      ],
      [
        150.0,
        -24.5
      ],
      [
        149.5,
        -24.0
      ],
      [
        149.0,
        -23.5
      ],
      [
        148.5,
        -23.0
      ],
      [
        148.0,
        -22.5
      ],
      [
        147.5,
        -22.0
      ],
      [
        147.0,
        -21.5
      ],
      [
        146.5,
        -21.0
      ],
      [
        146.0,
        -20.5
      ],
      [
        145.5,
        -20.0
      ]
    ]
  },
  {
    "id": "ROW-021",
    "name": "Basslink HVDC (Tasmania-Victoria)",
    "country": "Australia",
    "region": "NEM",
    "voltage_kv": 400,
    "type": "HVDC",
    "length_km": 370,
    "operator": "Keppel / TasNetworks",
    "status": "Operational",
    "capacity_mw": 500,
    "coordinates": [
      [
        146.5,
        -43.0
      ],
      [
        147.0,
        -42.5
      ],
      [
        147.5,
        -41.5
      ],
      [
        148.0,
        -40.5
      ],
      [
        148.5,
        -40.0
      ],
      [
        149.0,
        -39.0
      ],
      [
        148.5,
        -38.5
      ],
      [
        148.0,
        -38.0
      ],
      [
        147.5,
        -37.5
      ]
    ]
  },
  {
    "id": "ROW-022",
    "name": "Eskom 765kV Cahora Bassa-Apollo",
    "country": "South Africa",
    "region": "South Africa-Mozambique",
    "voltage_kv": 765,
    "type": "AC",
    "length_km": 1430,
    "operator": "Eskom / HCB",
    "status": "Operational",
    "capacity_mw": 1920,
    "coordinates": [
      [
        32.5,
        -15.5
      ],
      [
        31.0,
        -16.0
      ],
      [
        30.0,
        -17.0
      ],
      [
        29.0,
        -18.0
      ],
      [
        28.0,
        -19.0
      ],
      [
        27.0,
        -20.0
      ],
      [
        26.5,
        -21.0
      ],
      [
        26.0,
        -22.0
      ],
      [
        26.5,
        -23.0
      ],
      [
        27.0,
        -24.0
      ],
      [
        27.5,
        -25.0
      ],
      [
        28.0,
        -26.0
      ],
      [
        27.9,
        -26.0
      ]
    ]
  },
  {
    "id": "ROW-023",
    "name": "Eskom 400kV Cape-Johannesburg Corridor",
    "country": "South Africa",
    "region": "South Africa",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 1500,
    "operator": "Eskom",
    "status": "Operational",
    "capacity_mw": 2400,
    "coordinates": [
      [
        18.5,
        -34.0
      ],
      [
        19.5,
        -33.5
      ],
      [
        20.5,
        -33.0
      ],
      [
        21.5,
        -32.5
      ],
      [
        22.5,
        -32.0
      ],
      [
        23.5,
        -31.5
      ],
      [
        24.5,
        -31.0
      ],
      [
        25.5,
        -30.5
      ],
      [
        26.5,
        -30.0
      ],
      [
        27.0,
        -29.5
      ],
      [
        27.5,
        -29.0
      ],
      [
        27.9,
        -26.0
      ]
    ]
  },
  {
    "id": "ROW-024",
    "name": "TEPCO 500kV Tokyo Ring",
    "country": "Japan",
    "region": "East Japan",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 480,
    "operator": "TEPCO",
    "status": "Operational",
    "capacity_mw": 4500,
    "coordinates": [
      [
        139.7,
        35.7
      ],
      [
        139.5,
        36.0
      ],
      [
        139.2,
        36.2
      ],
      [
        139.0,
        36.5
      ],
      [
        139.2,
        36.8
      ],
      [
        139.6,
        37.0
      ],
      [
        140.0,
        36.8
      ],
      [
        140.2,
        36.5
      ],
      [
        140.5,
        36.2
      ],
      [
        140.5,
        35.8
      ],
      [
        140.2,
        35.5
      ],
      [
        139.8,
        35.5
      ],
      [
        139.7,
        35.7
      ]
    ]
  },
  {
    "id": "ROW-025",
    "name": "Kansai 500kV Western Japan Backbone",
    "country": "Japan",
    "region": "West Japan",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 420,
    "operator": "Kansai Electric / Chugoku",
    "status": "Operational",
    "capacity_mw": 4000,
    "coordinates": [
      [
        135.5,
        34.7
      ],
      [
        135.0,
        35.0
      ],
      [
        134.5,
        35.2
      ],
      [
        134.0,
        35.0
      ],
      [
        133.5,
        34.8
      ],
      [
        133.0,
        34.5
      ],
      [
        132.5,
        34.2
      ],
      [
        132.0,
        34.0
      ],
      [
        131.5,
        33.8
      ],
      [
        131.0,
        33.6
      ]
    ]
  },
  {
    "id": "ROW-026",
    "name": "Japan East-West HVDC Frequency Tie",
    "country": "Japan",
    "region": "Cross-Region",
    "voltage_kv": 300,
    "type": "HVDC",
    "length_km": 55,
    "operator": "TEPCO / Chubu Electric",
    "status": "Operational",
    "capacity_mw": 600,
    "coordinates": [
      [
        137.8,
        36.0
      ],
      [
        138.0,
        36.2
      ],
      [
        138.2,
        36.0
      ],
      [
        138.3,
        35.8
      ]
    ]
  },
  {
    "id": "ROW-027",
    "name": "GCC Interconnection Saudi Arabia 400kV",
    "country": "Saudi Arabia",
    "region": "GCC",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 1500,
    "operator": "GCCIA / SEC",
    "status": "Operational",
    "capacity_mw": 1200,
    "coordinates": [
      [
        50.0,
        26.0
      ],
      [
        49.5,
        25.5
      ],
      [
        49.0,
        25.0
      ],
      [
        48.5,
        24.5
      ],
      [
        48.0,
        24.0
      ],
      [
        47.5,
        23.5
      ],
      [
        47.0,
        23.0
      ],
      [
        46.5,
        22.5
      ],
      [
        46.0,
        22.0
      ],
      [
        45.5,
        21.5
      ],
      [
        44.5,
        21.0
      ],
      [
        44.0,
        20.5
      ],
      [
        43.5,
        20.0
      ]
    ]
  },
  {
    "id": "ROW-028",
    "name": "GCC Interconnection UAE-Oman 400kV",
    "country": "UAE",
    "region": "GCC",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 450,
    "operator": "GCCIA / TRANSCO",
    "status": "Operational",
    "capacity_mw": 1000,
    "coordinates": [
      [
        55.5,
        25.5
      ],
      [
        55.2,
        24.5
      ],
      [
        55.0,
        23.5
      ],
      [
        55.5,
        23.0
      ],
      [
        56.0,
        22.5
      ],
      [
        56.5,
        22.0
      ],
      [
        57.5,
        22.0
      ],
      [
        58.5,
        23.0
      ]
    ]
  },
  {
    "id": "ROW-029",
    "name": "Turkey 380kV East-West Anatolia Backbone",
    "country": "Turkey",
    "region": "Turkey",
    "voltage_kv": 380,
    "type": "AC",
    "length_km": 1200,
    "operator": "TEIAS",
    "status": "Operational",
    "capacity_mw": 3000,
    "coordinates": [
      [
        26.0,
        40.5
      ],
      [
        28.0,
        40.5
      ],
      [
        30.0,
        40.2
      ],
      [
        32.0,
        40.0
      ],
      [
        34.0,
        39.8
      ],
      [
        36.0,
        39.5
      ],
      [
        38.0,
        39.5
      ],
      [
        40.0,
        39.2
      ],
      [
        42.0,
        39.0
      ],
      [
        44.0,
        38.5
      ]
    ]
  },
  {
    "id": "ROW-030",
    "name": "Morocco-Spain HVDC (Strait of Gibraltar)",
    "country": "Morocco",
    "region": "North Africa",
    "voltage_kv": 400,
    "type": "HVDC",
    "length_km": 28,
    "operator": "ONEmed / REE",
    "status": "Operational",
    "capacity_mw": 1400,
    "coordinates": [
      [
        -5.4,
        35.9
      ],
      [
        -5.3,
        36.0
      ],
      [
        -5.2,
        36.1
      ],
      [
        -5.1,
        36.2
      ],
      [
        -5.0,
        36.3
      ],
      [
        -4.9,
        36.4
      ]
    ]
  },
  {
    "id": "ROW-031",
    "name": "EGAT 500kV Thailand Central Backbone",
    "country": "Thailand",
    "region": "Southeast Asia",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 600,
    "operator": "EGAT",
    "status": "Operational",
    "capacity_mw": 2500,
    "coordinates": [
      [
        100.5,
        13.8
      ],
      [
        101.0,
        14.5
      ],
      [
        101.5,
        15.0
      ],
      [
        102.0,
        15.5
      ],
      [
        102.0,
        16.5
      ],
      [
        101.5,
        17.5
      ],
      [
        101.0,
        18.0
      ],
      [
        100.5,
        18.5
      ],
      [
        100.0,
        17.5
      ],
      [
        99.5,
        16.5
      ],
      [
        99.0,
        15.5
      ],
      [
        100.0,
        14.5
      ]
    ]
  },
  {
    "id": "ROW-032",
    "name": "PLN 500kV Java-Bali Backbone",
    "country": "Indonesia",
    "region": "Java",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 1000,
    "operator": "PLN",
    "status": "Operational",
    "capacity_mw": 3500,
    "coordinates": [
      [
        106.8,
        -6.2
      ],
      [
        107.5,
        -6.5
      ],
      [
        108.2,
        -7.0
      ],
      [
        109.0,
        -7.5
      ],
      [
        110.0,
        -7.8
      ],
      [
        111.0,
        -7.8
      ],
      [
        112.0,
        -7.8
      ],
      [
        113.0,
        -7.8
      ],
      [
        114.0,
        -7.5
      ],
      [
        115.0,
        -8.0
      ],
      [
        115.5,
        -8.2
      ]
    ]
  },
  {
    "id": "ROW-033",
    "name": "EVN 500kV Vietnam North-South",
    "country": "Vietnam",
    "region": "Vietnam",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 1487,
    "operator": "EVN Vietnam",
    "status": "Operational",
    "capacity_mw": 2500,
    "coordinates": [
      [
        105.8,
        21.0
      ],
      [
        106.0,
        20.0
      ],
      [
        106.0,
        19.0
      ],
      [
        106.0,
        18.0
      ],
      [
        106.5,
        17.0
      ],
      [
        107.0,
        16.0
      ],
      [
        107.5,
        15.0
      ],
      [
        108.0,
        14.0
      ],
      [
        108.5,
        13.0
      ],
      [
        108.5,
        12.0
      ],
      [
        108.5,
        11.0
      ],
      [
        107.0,
        10.8
      ],
      [
        106.5,
        10.5
      ]
    ]
  },
  {
    "id": "ROW-034",
    "name": "NTDC Pakistan 500kV National Grid",
    "country": "Pakistan",
    "region": "Pakistan",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 900,
    "operator": "NTDC Pakistan",
    "status": "Operational",
    "capacity_mw": 2200,
    "coordinates": [
      [
        67.0,
        25.0
      ],
      [
        67.5,
        25.5
      ],
      [
        68.0,
        26.5
      ],
      [
        68.5,
        27.5
      ],
      [
        69.0,
        28.5
      ],
      [
        69.5,
        29.5
      ],
      [
        70.0,
        30.5
      ],
      [
        70.5,
        31.5
      ],
      [
        71.5,
        32.5
      ],
      [
        72.5,
        33.0
      ],
      [
        73.5,
        33.5
      ],
      [
        74.0,
        34.0
      ]
    ]
  },
  {
    "id": "ROW-035",
    "name": "Brazil 500kV Northeast Grid (Chesf)",
    "country": "Brazil",
    "region": "Northeast Brazil",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 700,
    "operator": "Chesf",
    "status": "Operational",
    "capacity_mw": 2500,
    "coordinates": [
      [
        -43.0,
        -22.9
      ],
      [
        -42.0,
        -21.5
      ],
      [
        -41.0,
        -20.0
      ],
      [
        -40.5,
        -19.0
      ],
      [
        -40.0,
        -18.0
      ],
      [
        -39.5,
        -15.0
      ],
      [
        -39.0,
        -13.0
      ],
      [
        -38.5,
        -12.0
      ],
      [
        -38.0,
        -13.0
      ],
      [
        -37.5,
        -12.5
      ]
    ]
  },
  {
    "id": "ROW-036",
    "name": "Brazil 500kV Southeast-South Corridor",
    "country": "Brazil",
    "region": "South Brazil",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 600,
    "operator": "Eletrosul",
    "status": "Operational",
    "capacity_mw": 2200,
    "coordinates": [
      [
        -43.2,
        -22.9
      ],
      [
        -44.0,
        -23.5
      ],
      [
        -45.0,
        -24.0
      ],
      [
        -46.0,
        -24.5
      ],
      [
        -47.0,
        -25.0
      ],
      [
        -48.5,
        -25.5
      ],
      [
        -49.3,
        -26.0
      ],
      [
        -50.0,
        -27.0
      ],
      [
        -51.0,
        -28.0
      ],
      [
        -51.5,
        -29.5
      ],
      [
        -52.0,
        -30.0
      ]
    ]
  },
  {
    "id": "ROW-037",
    "name": "Colombia 500kV Chivor-Norte Backbone",
    "country": "Colombia",
    "region": "Colombia",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 560,
    "operator": "XM / ISA",
    "status": "Operational",
    "capacity_mw": 2000,
    "coordinates": [
      [
        -73.0,
        5.0
      ],
      [
        -73.5,
        5.5
      ],
      [
        -74.0,
        6.0
      ],
      [
        -74.5,
        6.5
      ],
      [
        -75.0,
        7.0
      ],
      [
        -75.5,
        7.5
      ],
      [
        -76.0,
        7.0
      ],
      [
        -76.5,
        6.5
      ]
    ]
  },
  {
    "id": "ROW-038",
    "name": "Chile 220kV Central SIC Backbone",
    "country": "Chile",
    "region": "Chile Central",
    "voltage_kv": 220,
    "type": "AC",
    "length_km": 1100,
    "operator": "Transelec",
    "status": "Operational",
    "capacity_mw": 1500,
    "coordinates": [
      [
        -71.5,
        -30.0
      ],
      [
        -71.0,
        -31.0
      ],
      [
        -70.8,
        -32.0
      ],
      [
        -70.8,
        -33.5
      ],
      [
        -70.7,
        -35.0
      ],
      [
        -71.0,
        -36.5
      ],
      [
        -71.5,
        -38.0
      ],
      [
        -72.0,
        -40.0
      ],
      [
        -72.5,
        -42.0
      ]
    ]
  },
  {
    "id": "ROW-039",
    "name": "Argentina 500kV NEA Backbone",
    "country": "Argentina",
    "region": "Argentina",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 1200,
    "operator": "Transener",
    "status": "Operational",
    "capacity_mw": 2500,
    "coordinates": [
      [
        -62.0,
        -38.0
      ],
      [
        -62.5,
        -36.5
      ],
      [
        -63.0,
        -35.0
      ],
      [
        -63.5,
        -33.5
      ],
      [
        -64.0,
        -32.0
      ],
      [
        -64.5,
        -30.5
      ],
      [
        -65.0,
        -29.0
      ],
      [
        -65.0,
        -27.5
      ],
      [
        -64.5,
        -26.0
      ],
      [
        -63.5,
        -25.0
      ]
    ]
  },
  {
    "id": "ROW-040",
    "name": "Egypt 500kV Nile Corridor Backbone",
    "country": "Egypt",
    "region": "Egypt",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 900,
    "operator": "EETC",
    "status": "Operational",
    "capacity_mw": 2000,
    "coordinates": [
      [
        31.3,
        30.0
      ],
      [
        31.0,
        29.5
      ],
      [
        30.5,
        29.0
      ],
      [
        30.0,
        28.5
      ],
      [
        29.5,
        28.0
      ],
      [
        29.0,
        27.5
      ],
      [
        28.5,
        27.0
      ],
      [
        28.0,
        26.5
      ],
      [
        27.5,
        26.0
      ],
      [
        27.0,
        25.5
      ],
      [
        26.5,
        25.0
      ],
      [
        26.0,
        24.5
      ]
    ]
  },
  {
    "id": "ROW-041",
    "name": "Nigeria 330kV National Backbone",
    "country": "Nigeria",
    "region": "West Africa",
    "voltage_kv": 330,
    "type": "AC",
    "length_km": 800,
    "operator": "TCN Nigeria",
    "status": "Operational",
    "capacity_mw": 1000,
    "coordinates": [
      [
        3.4,
        6.5
      ],
      [
        4.0,
        7.5
      ],
      [
        5.0,
        8.5
      ],
      [
        6.0,
        9.0
      ],
      [
        7.0,
        9.5
      ],
      [
        8.0,
        9.5
      ],
      [
        9.0,
        10.0
      ],
      [
        10.0,
        10.5
      ],
      [
        11.5,
        11.0
      ]
    ]
  },
  {
    "id": "ROW-042",
    "name": "Kenya 400kV East Africa Backbone",
    "country": "Kenya",
    "region": "East Africa",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 700,
    "operator": "KETRACO",
    "status": "Operational",
    "capacity_mw": 600,
    "coordinates": [
      [
        41.5,
        2.0
      ],
      [
        41.0,
        1.5
      ],
      [
        40.5,
        1.0
      ],
      [
        40.0,
        0.5
      ],
      [
        39.5,
        0.2
      ],
      [
        39.0,
        0.0
      ],
      [
        38.5,
        -0.5
      ],
      [
        38.0,
        -1.0
      ],
      [
        37.5,
        -1.5
      ],
      [
        37.0,
        -2.0
      ],
      [
        36.5,
        -2.5
      ],
      [
        36.8,
        -3.5
      ]
    ]
  },
  {
    "id": "ROW-043",
    "name": "South Korea 345kV KEPCO Backbone",
    "country": "South Korea",
    "region": "Korea",
    "voltage_kv": 345,
    "type": "AC",
    "length_km": 520,
    "operator": "KEPCO",
    "status": "Operational",
    "capacity_mw": 3000,
    "coordinates": [
      [
        128.6,
        35.9
      ],
      [
        128.0,
        36.0
      ],
      [
        127.5,
        36.5
      ],
      [
        127.0,
        37.0
      ],
      [
        126.5,
        37.5
      ],
      [
        126.8,
        38.0
      ],
      [
        127.0,
        37.5
      ],
      [
        127.5,
        37.0
      ]
    ]
  },
  {
    "id": "ROW-044",
    "name": "Taiwan 345kV TPC Main Grid",
    "country": "Taiwan",
    "region": "Taiwan",
    "voltage_kv": 345,
    "type": "AC",
    "length_km": 420,
    "operator": "Taiwan Power Company",
    "status": "Operational",
    "capacity_mw": 2800,
    "coordinates": [
      [
        121.5,
        25.0
      ],
      [
        121.3,
        24.5
      ],
      [
        121.0,
        24.0
      ],
      [
        120.8,
        23.5
      ],
      [
        120.5,
        23.0
      ],
      [
        120.3,
        22.5
      ],
      [
        120.5,
        22.0
      ],
      [
        120.8,
        22.5
      ]
    ]
  },
  {
    "id": "ROW-045",
    "name": "Iran 400kV Western Grid Backbone",
    "country": "Iran",
    "region": "Iran",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 850,
    "operator": "Tavanir",
    "status": "Operational",
    "capacity_mw": 2500,
    "coordinates": [
      [
        44.0,
        37.5
      ],
      [
        45.0,
        37.0
      ],
      [
        46.0,
        36.5
      ],
      [
        47.0,
        36.0
      ],
      [
        48.0,
        35.5
      ],
      [
        49.0,
        35.0
      ],
      [
        50.0,
        35.5
      ],
      [
        51.0,
        35.7
      ],
      [
        51.5,
        35.9
      ],
      [
        52.0,
        36.5
      ],
      [
        53.0,
        37.0
      ]
    ]
  },
  {
    "id": "ROW-046",
    "name": "Morocco 400kV East-West Backbone",
    "country": "Morocco",
    "region": "North Africa",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 650,
    "operator": "ONEE Morocco",
    "status": "Operational",
    "capacity_mw": 1500,
    "coordinates": [
      [
        -5.0,
        35.8
      ],
      [
        -4.5,
        35.5
      ],
      [
        -4.0,
        35.0
      ],
      [
        -3.5,
        34.8
      ],
      [
        -3.0,
        34.5
      ],
      [
        -2.5,
        34.2
      ],
      [
        -2.0,
        34.0
      ],
      [
        -1.5,
        34.2
      ],
      [
        -1.0,
        34.5
      ],
      [
        -0.5,
        35.0
      ],
      [
        0.0,
        35.5
      ],
      [
        0.5,
        35.8
      ],
      [
        1.0,
        36.0
      ],
      [
        1.5,
        36.0
      ],
      [
        2.0,
        36.3
      ]
    ]
  },
  {
    "id": "ROW-047",
    "name": "Algeria 400kV North Backbone",
    "country": "Algeria",
    "region": "North Africa",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 800,
    "operator": "Sonelgaz",
    "status": "Operational",
    "capacity_mw": 1800,
    "coordinates": [
      [
        3.0,
        36.7
      ],
      [
        3.5,
        36.5
      ],
      [
        4.0,
        36.3
      ],
      [
        4.5,
        36.3
      ],
      [
        5.0,
        36.5
      ],
      [
        5.5,
        36.5
      ],
      [
        6.0,
        36.5
      ],
      [
        6.5,
        36.5
      ],
      [
        7.0,
        36.5
      ],
      [
        7.5,
        36.5
      ],
      [
        8.0,
        36.8
      ]
    ]
  },
  {
    "id": "ROW-048",
    "name": "South Africa 765kV Matimba-Medupe Corridor",
    "country": "South Africa",
    "region": "Limpopo",
    "voltage_kv": 765,
    "type": "AC",
    "length_km": 230,
    "operator": "Eskom",
    "status": "Operational",
    "capacity_mw": 4200,
    "coordinates": [
      [
        27.5,
        -23.7
      ],
      [
        27.8,
        -24.0
      ],
      [
        28.2,
        -24.5
      ],
      [
        28.5,
        -24.8
      ],
      [
        29.0,
        -25.0
      ]
    ]
  },
  {
    "id": "ROW-049",
    "name": "Ethiopia 400kV Gilgel Gibe HVDC",
    "country": "Ethiopia",
    "region": "East Africa",
    "voltage_kv": 400,
    "type": "HVDC",
    "length_km": 250,
    "operator": "EEP Ethiopia",
    "status": "Operational",
    "capacity_mw": 1000,
    "coordinates": [
      [
        37.5,
        8.0
      ],
      [
        38.0,
        8.8
      ],
      [
        38.5,
        9.5
      ],
      [
        39.0,
        9.0
      ],
      [
        39.5,
        8.5
      ]
    ]
  },
  {
    "id": "ROW-050",
    "name": "New Zealand 350kV HVDC Cook Strait Link",
    "country": "New Zealand",
    "region": "New Zealand",
    "voltage_kv": 350,
    "type": "HVDC",
    "length_km": 610,
    "operator": "Transpower NZ",
    "status": "Operational",
    "capacity_mw": 1200,
    "coordinates": [
      [
        172.5,
        -41.0
      ],
      [
        172.8,
        -41.5
      ],
      [
        173.0,
        -42.0
      ],
      [
        173.3,
        -42.5
      ],
      [
        173.5,
        -43.0
      ],
      [
        173.2,
        -43.5
      ],
      [
        172.5,
        -43.5
      ]
    ]
  },
  {
    "id": "ROW-051",
    "name": "New Zealand 220kV South Island Grid",
    "country": "New Zealand",
    "region": "New Zealand",
    "voltage_kv": 220,
    "type": "AC",
    "length_km": 550,
    "operator": "Transpower NZ",
    "status": "Operational",
    "capacity_mw": 1200,
    "coordinates": [
      [
        172.5,
        -43.5
      ],
      [
        171.5,
        -44.0
      ],
      [
        171.0,
        -44.5
      ],
      [
        170.5,
        -45.0
      ],
      [
        170.0,
        -45.5
      ],
      [
        169.5,
        -45.8
      ],
      [
        169.0,
        -46.0
      ],
      [
        168.5,
        -46.0
      ]
    ]
  },
  {
    "id": "ROW-052",
    "name": "Philippines 500kV Luzon Backbone (NGCP)",
    "country": "Philippines",
    "region": "Philippines",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 480,
    "operator": "NGCP",
    "status": "Operational",
    "capacity_mw": 2000,
    "coordinates": [
      [
        121.0,
        18.0
      ],
      [
        121.0,
        17.0
      ],
      [
        121.0,
        16.0
      ],
      [
        120.8,
        15.0
      ],
      [
        120.5,
        14.5
      ],
      [
        121.0,
        13.5
      ],
      [
        121.5,
        13.0
      ],
      [
        122.0,
        12.5
      ]
    ]
  },
  {
    "id": "ROW-053",
    "name": "Laos-China 500kV Cross-Border",
    "country": "Laos",
    "region": "Southeast Asia",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 160,
    "operator": "EdL / Yunnan Power",
    "status": "Operational",
    "capacity_mw": 1000,
    "coordinates": [
      [
        101.0,
        21.0
      ],
      [
        101.5,
        21.5
      ],
      [
        102.0,
        22.0
      ],
      [
        102.5,
        22.5
      ],
      [
        103.0,
        23.0
      ]
    ]
  },
  {
    "id": "ROW-054",
    "name": "Vietnam-Laos 500kV Cross-Border",
    "country": "Vietnam",
    "region": "Southeast Asia",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 200,
    "operator": "EVN / EdL",
    "status": "Operational",
    "capacity_mw": 800,
    "coordinates": [
      [
        104.0,
        21.0
      ],
      [
        103.5,
        20.5
      ],
      [
        103.0,
        20.0
      ],
      [
        102.5,
        19.5
      ],
      [
        102.0,
        19.0
      ],
      [
        101.5,
        18.5
      ]
    ]
  },
  {
    "id": "ROW-055",
    "name": "Pakistan 500kV Karachi-Lahore Corridor",
    "country": "Pakistan",
    "region": "Pakistan",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 1200,
    "operator": "NTDC",
    "status": "Operational",
    "capacity_mw": 2000,
    "coordinates": [
      [
        67.0,
        24.9
      ],
      [
        67.5,
        25.8
      ],
      [
        68.0,
        27.0
      ],
      [
        68.5,
        28.0
      ],
      [
        69.5,
        29.5
      ],
      [
        70.5,
        30.5
      ],
      [
        71.0,
        31.0
      ],
      [
        71.5,
        31.5
      ],
      [
        72.0,
        32.0
      ],
      [
        72.5,
        32.5
      ],
      [
        73.0,
        33.0
      ],
      [
        74.0,
        33.5
      ]
    ]
  },
  {
    "id": "ROW-056",
    "name": "Australia NEM 500kV EnergyConnect SA-NSW",
    "country": "Australia",
    "region": "NEM",
    "voltage_kv": 330,
    "type": "AC",
    "length_km": 900,
    "operator": "ElectraNet / Transgrid",
    "status": "Under Construction",
    "capacity_mw": 1200,
    "coordinates": [
      [
        138.5,
        -35.0
      ],
      [
        139.0,
        -33.5
      ],
      [
        140.0,
        -32.5
      ],
      [
        141.0,
        -32.0
      ],
      [
        142.0,
        -31.5
      ],
      [
        143.5,
        -31.0
      ],
      [
        144.5,
        -31.0
      ],
      [
        145.5,
        -31.0
      ],
      [
        146.5,
        -31.5
      ],
      [
        147.0,
        -32.0
      ]
    ]
  },
  {
    "id": "ROW-057",
    "name": "Australia WA 330kV SWIS Backbone",
    "country": "Australia",
    "region": "SWIS",
    "voltage_kv": 330,
    "type": "AC",
    "length_km": 430,
    "operator": "Western Power",
    "status": "Operational",
    "capacity_mw": 1200,
    "coordinates": [
      [
        115.8,
        -32.0
      ],
      [
        116.0,
        -31.5
      ],
      [
        116.5,
        -31.0
      ],
      [
        117.0,
        -30.5
      ],
      [
        117.5,
        -30.0
      ],
      [
        118.0,
        -30.0
      ],
      [
        118.5,
        -30.5
      ],
      [
        119.0,
        -31.0
      ]
    ]
  },
  {
    "id": "ROW-058",
    "name": "Zambia 220kV Kariba-Kafue Backbone",
    "country": "Zambia",
    "region": "Southern Africa",
    "voltage_kv": 220,
    "type": "AC",
    "length_km": 350,
    "operator": "ZESCO",
    "status": "Operational",
    "capacity_mw": 900,
    "coordinates": [
      [
        28.8,
        -16.5
      ],
      [
        28.5,
        -15.5
      ],
      [
        28.0,
        -15.0
      ],
      [
        27.5,
        -15.5
      ],
      [
        27.0,
        -16.0
      ],
      [
        27.5,
        -16.5
      ],
      [
        28.0,
        -17.0
      ],
      [
        28.5,
        -17.5
      ],
      [
        28.8,
        -18.0
      ]
    ]
  },
  {
    "id": "ROW-059",
    "name": "Iraq 400kV Baghdad-Basra Backbone",
    "country": "Iraq",
    "region": "Middle East",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 550,
    "operator": "Ministry of Electricity Iraq",
    "status": "Operational",
    "capacity_mw": 1200,
    "coordinates": [
      [
        44.4,
        33.3
      ],
      [
        44.3,
        32.5
      ],
      [
        44.2,
        31.5
      ],
      [
        44.5,
        31.0
      ],
      [
        45.0,
        30.5
      ],
      [
        46.0,
        30.5
      ],
      [
        47.0,
        30.5
      ],
      [
        47.5,
        30.5
      ]
    ]
  },
  {
    "id": "ROW-060",
    "name": "Saudi Aramco 380kV Eastern Province Grid",
    "country": "Saudi Arabia",
    "region": "Arabian Gulf",
    "voltage_kv": 380,
    "type": "AC",
    "length_km": 600,
    "operator": "SEC",
    "status": "Operational",
    "capacity_mw": 2500,
    "coordinates": [
      [
        50.0,
        26.0
      ],
      [
        50.5,
        25.5
      ],
      [
        51.0,
        25.0
      ],
      [
        51.5,
        24.5
      ],
      [
        51.0,
        24.0
      ],
      [
        50.5,
        23.5
      ],
      [
        50.0,
        23.0
      ],
      [
        49.5,
        22.5
      ]
    ]
  },
  {
    "id": "ROW-061",
    "name": "GCC Qatar-UAE 400kV Interconnect",
    "country": "Qatar",
    "region": "GCC",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 300,
    "operator": "GCCIA / Kahramaa",
    "status": "Operational",
    "capacity_mw": 800,
    "coordinates": [
      [
        51.5,
        25.3
      ],
      [
        51.3,
        25.0
      ],
      [
        51.1,
        24.5
      ],
      [
        51.0,
        24.0
      ],
      [
        51.5,
        23.5
      ],
      [
        52.0,
        23.0
      ],
      [
        53.0,
        23.5
      ],
      [
        54.0,
        24.0
      ]
    ]
  },
  {
    "id": "ROW-062",
    "name": "Namibia 400kV Grid Backbone (NAMPOWER)",
    "country": "Namibia",
    "region": "Southern Africa",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 500,
    "operator": "NamPower",
    "status": "Operational",
    "capacity_mw": 800,
    "coordinates": [
      [
        17.0,
        -22.5
      ],
      [
        17.5,
        -22.0
      ],
      [
        18.0,
        -21.5
      ],
      [
        18.5,
        -21.0
      ],
      [
        19.0,
        -20.5
      ],
      [
        19.5,
        -20.0
      ],
      [
        20.0,
        -19.5
      ],
      [
        20.5,
        -19.0
      ]
    ]
  },
  {
    "id": "ROW-063",
    "name": "India 400kV Northeast Grid Backbone",
    "country": "India",
    "region": "Northeast India",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 600,
    "operator": "PowerGrid India",
    "status": "Operational",
    "capacity_mw": 2000,
    "coordinates": [
      [
        85.5,
        27.0
      ],
      [
        86.0,
        26.5
      ],
      [
        87.0,
        26.0
      ],
      [
        88.0,
        25.5
      ],
      [
        89.0,
        25.5
      ],
      [
        90.0,
        26.0
      ],
      [
        91.0,
        26.2
      ],
      [
        92.0,
        26.5
      ],
      [
        93.0,
        26.0
      ]
    ]
  },
  {
    "id": "ROW-064",
    "name": "Nepal-India 400kV Cross-Border Link",
    "country": "Nepal",
    "region": "South Asia",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 120,
    "operator": "NEA / PowerGrid India",
    "status": "Operational",
    "capacity_mw": 600,
    "coordinates": [
      [
        85.3,
        27.7
      ],
      [
        85.5,
        27.3
      ],
      [
        85.7,
        27.0
      ],
      [
        86.0,
        26.7
      ],
      [
        86.3,
        26.4
      ]
    ]
  },
  {
    "id": "ROW-065",
    "name": "China 500kV Sichuan-Chongqing Corridor",
    "country": "China",
    "region": "Southwest China",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 380,
    "operator": "State Grid",
    "status": "Operational",
    "capacity_mw": 3000,
    "coordinates": [
      [
        104.0,
        30.5
      ],
      [
        104.5,
        30.0
      ],
      [
        105.0,
        29.5
      ],
      [
        105.5,
        29.2
      ],
      [
        106.0,
        29.0
      ],
      [
        106.5,
        29.5
      ],
      [
        107.0,
        30.0
      ]
    ]
  },
  {
    "id": "US-051",
    "name": "WECC 345kV Montana-Wyoming Corridor",
    "country": "USA",
    "region": "Western Interconnection",
    "voltage_kv": 345,
    "type": "AC",
    "length_km": 280,
    "operator": "NorthWestern Energy / Rocky Mtn Power",
    "status": "Operational",
    "capacity_mw": 1400,
    "coordinates": [
      [
        -111.5,
        47.0
      ],
      [
        -110.8,
        46.5
      ],
      [
        -110.0,
        46.0
      ],
      [
        -109.5,
        45.5
      ],
      [
        -109.0,
        45.0
      ],
      [
        -109.5,
        44.5
      ],
      [
        -110.0,
        44.0
      ],
      [
        -110.8,
        43.5
      ]
    ]
  },
  {
    "id": "US-052",
    "name": "WECC 500kV Oregon-Washington Loop",
    "country": "USA",
    "region": "Western Interconnection",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 320,
    "operator": "PGE Oregon / PSE",
    "status": "Operational",
    "capacity_mw": 2000,
    "coordinates": [
      [
        -122.5,
        46.5
      ],
      [
        -122.0,
        46.2
      ],
      [
        -121.5,
        46.0
      ],
      [
        -121.0,
        46.0
      ],
      [
        -120.5,
        46.2
      ],
      [
        -120.0,
        46.5
      ],
      [
        -119.5,
        46.8
      ]
    ]
  },
  {
    "id": "US-053",
    "name": "SRP 345kV Phoenix Metro Ring",
    "country": "USA",
    "region": "Western Interconnection",
    "voltage_kv": 345,
    "type": "AC",
    "length_km": 200,
    "operator": "SRP",
    "status": "Operational",
    "capacity_mw": 1800,
    "coordinates": [
      [
        -112.1,
        33.5
      ],
      [
        -112.5,
        33.5
      ],
      [
        -112.9,
        33.6
      ],
      [
        -112.9,
        33.3
      ],
      [
        -112.5,
        33.1
      ],
      [
        -112.1,
        33.2
      ],
      [
        -112.1,
        33.5
      ]
    ]
  },
  {
    "id": "US-054",
    "name": "Sunrise Powerlink 500kV SDG&E",
    "country": "USA",
    "region": "CAISO",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 350,
    "operator": "SDG&E",
    "status": "Operational",
    "capacity_mw": 1000,
    "coordinates": [
      [
        -116.5,
        33.5
      ],
      [
        -116.0,
        33.0
      ],
      [
        -115.5,
        32.8
      ],
      [
        -115.0,
        32.7
      ],
      [
        -117.1,
        32.7
      ]
    ]
  },
  {
    "id": "US-055",
    "name": "MISO 345kV Wisconsin-Illinois Corridor",
    "country": "USA",
    "region": "MISO",
    "voltage_kv": 345,
    "type": "AC",
    "length_km": 280,
    "operator": "ATC / ComEd",
    "status": "Operational",
    "capacity_mw": 1600,
    "coordinates": [
      [
        -88.0,
        43.0
      ],
      [
        -88.2,
        42.5
      ],
      [
        -88.4,
        42.0
      ],
      [
        -88.4,
        41.5
      ],
      [
        -88.2,
        41.0
      ],
      [
        -87.6,
        41.8
      ]
    ]
  },
  {
    "id": "US-056",
    "name": "PJM 345kV West Virginia-Virginia Corridor",
    "country": "USA",
    "region": "PJM",
    "voltage_kv": 345,
    "type": "AC",
    "length_km": 240,
    "operator": "AEP / Dominion",
    "status": "Operational",
    "capacity_mw": 1500,
    "coordinates": [
      [
        -82.0,
        37.8
      ],
      [
        -81.5,
        37.5
      ],
      [
        -81.0,
        37.2
      ],
      [
        -80.5,
        37.0
      ],
      [
        -80.0,
        37.0
      ],
      [
        -79.5,
        37.2
      ]
    ]
  },
  {
    "id": "US-057",
    "name": "NPCC 345kV New York Upstate Corridor",
    "country": "USA",
    "region": "NPCC",
    "voltage_kv": 345,
    "type": "AC",
    "length_km": 320,
    "operator": "National Grid NY / NYSEG",
    "status": "Operational",
    "capacity_mw": 1600,
    "coordinates": [
      [
        -73.9,
        40.7
      ],
      [
        -74.2,
        41.5
      ],
      [
        -74.0,
        42.0
      ],
      [
        -73.8,
        42.5
      ],
      [
        -73.5,
        43.0
      ],
      [
        -73.0,
        43.5
      ],
      [
        -73.0,
        44.0
      ],
      [
        -73.5,
        44.5
      ]
    ]
  },
  {
    "id": "US-058",
    "name": "SERC 500kV Dominion Virginia Backbone",
    "country": "USA",
    "region": "SERC",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 300,
    "operator": "Dominion Energy",
    "status": "Operational",
    "capacity_mw": 2600,
    "coordinates": [
      [
        -77.5,
        38.8
      ],
      [
        -78.0,
        38.0
      ],
      [
        -78.5,
        37.2
      ],
      [
        -79.0,
        36.8
      ],
      [
        -79.5,
        36.5
      ],
      [
        -80.0,
        36.2
      ],
      [
        -80.5,
        35.8
      ]
    ]
  },
  {
    "id": "US-059",
    "name": "MISO 345kV South Plains Wind South",
    "country": "USA",
    "region": "SPP",
    "voltage_kv": 345,
    "type": "AC",
    "length_km": 400,
    "operator": "SPP / Oncor",
    "status": "Operational",
    "capacity_mw": 1600,
    "coordinates": [
      [
        -100.0,
        34.5
      ],
      [
        -100.5,
        34.0
      ],
      [
        -101.0,
        33.5
      ],
      [
        -101.5,
        33.0
      ],
      [
        -102.0,
        32.5
      ],
      [
        -102.5,
        32.0
      ],
      [
        -103.0,
        31.5
      ]
    ]
  },
  {
    "id": "US-060",
    "name": "MISO 500kV Minnesota-Iowa Wind Backbone",
    "country": "USA",
    "region": "MISO",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 380,
    "operator": "MidAmerican Energy / ITC",
    "status": "Operational",
    "capacity_mw": 2000,
    "coordinates": [
      [
        -95.0,
        47.0
      ],
      [
        -95.0,
        46.0
      ],
      [
        -95.0,
        45.0
      ],
      [
        -95.0,
        44.0
      ],
      [
        -95.0,
        43.0
      ],
      [
        -95.0,
        42.0
      ],
      [
        -95.0,
        41.5
      ]
    ]
  },
  {
    "id": "US-061",
    "name": "PJM 345kV New Jersey-Pennsylvania Corridor",
    "country": "USA",
    "region": "PJM",
    "voltage_kv": 345,
    "type": "AC",
    "length_km": 180,
    "operator": "PSE&G / PPL",
    "status": "Operational",
    "capacity_mw": 1600,
    "coordinates": [
      [
        -74.6,
        40.1
      ],
      [
        -75.0,
        40.2
      ],
      [
        -75.4,
        40.4
      ],
      [
        -75.8,
        40.5
      ],
      [
        -76.2,
        40.6
      ]
    ]
  },
  {
    "id": "US-062",
    "name": "SERC 500kV Entergy Arkansas Backbone",
    "country": "USA",
    "region": "SERC",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 260,
    "operator": "Entergy Arkansas",
    "status": "Operational",
    "capacity_mw": 1800,
    "coordinates": [
      [
        -91.5,
        36.0
      ],
      [
        -91.5,
        35.5
      ],
      [
        -91.5,
        35.0
      ],
      [
        -91.5,
        34.5
      ],
      [
        -91.5,
        34.0
      ],
      [
        -91.5,
        33.5
      ]
    ]
  },
  {
    "id": "US-063",
    "name": "MISO 345kV Michigan-Indiana Corridor",
    "country": "USA",
    "region": "MISO",
    "voltage_kv": 345,
    "type": "AC",
    "length_km": 220,
    "operator": "Consumers Energy / Indiana Michigan Power",
    "status": "Operational",
    "capacity_mw": 1500,
    "coordinates": [
      [
        -86.0,
        42.0
      ],
      [
        -85.5,
        41.8
      ],
      [
        -85.0,
        41.5
      ],
      [
        -84.5,
        41.2
      ],
      [
        -84.0,
        40.8
      ],
      [
        -84.0,
        40.5
      ]
    ]
  },
  {
    "id": "US-064",
    "name": "TVA 500kV West Tennessee Corridor",
    "country": "USA",
    "region": "SERC",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 250,
    "operator": "TVA",
    "status": "Operational",
    "capacity_mw": 2000,
    "coordinates": [
      [
        -90.0,
        35.5
      ],
      [
        -90.0,
        36.0
      ],
      [
        -89.5,
        36.5
      ],
      [
        -89.0,
        36.8
      ],
      [
        -88.5,
        36.5
      ],
      [
        -88.0,
        36.0
      ],
      [
        -87.5,
        35.8
      ]
    ]
  },
  {
    "id": "US-065",
    "name": "PJM 500kV Maryland-Delaware Corridor",
    "country": "USA",
    "region": "PJM",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 200,
    "operator": "BGE / Delmarva",
    "status": "Operational",
    "capacity_mw": 2000,
    "coordinates": [
      [
        -76.9,
        39.3
      ],
      [
        -76.6,
        39.0
      ],
      [
        -76.3,
        38.8
      ],
      [
        -76.0,
        38.6
      ],
      [
        -75.7,
        38.4
      ],
      [
        -75.5,
        38.2
      ]
    ]
  },
  {
    "id": "CA-013",
    "name": "Ontario 500kV Niagara-Toronto Corridor",
    "country": "Canada",
    "region": "Ontario",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 130,
    "operator": "Hydro One",
    "status": "Operational",
    "capacity_mw": 2000,
    "coordinates": [
      [
        -79.0,
        43.1
      ],
      [
        -79.2,
        43.3
      ],
      [
        -79.4,
        43.5
      ],
      [
        -79.4,
        43.7
      ]
    ]
  },
  {
    "id": "CA-014",
    "name": "Quebec 735kV Abitibi-Montreal",
    "country": "Canada",
    "region": "Quebec",
    "voltage_kv": 735,
    "type": "AC",
    "length_km": 580,
    "operator": "Hydro-Quebec",
    "status": "Operational",
    "capacity_mw": 3500,
    "coordinates": [
      [
        -79.0,
        48.5
      ],
      [
        -78.0,
        48.0
      ],
      [
        -77.0,
        47.5
      ],
      [
        -76.0,
        47.0
      ],
      [
        -75.5,
        46.5
      ],
      [
        -74.5,
        46.0
      ],
      [
        -73.5,
        45.7
      ]
    ]
  },
  {
    "id": "CA-015",
    "name": "New Brunswick 345kV Fundy Tidal Region",
    "country": "Canada",
    "region": "New Brunswick",
    "voltage_kv": 345,
    "type": "AC",
    "length_km": 200,
    "operator": "NB Power",
    "status": "Operational",
    "capacity_mw": 700,
    "coordinates": [
      [
        -66.7,
        45.95
      ],
      [
        -66.5,
        46.2
      ],
      [
        -66.0,
        46.5
      ],
      [
        -65.5,
        46.5
      ],
      [
        -65.0,
        46.2
      ],
      [
        -64.8,
        45.8
      ]
    ]
  },
  {
    "id": "EU-073",
    "name": "TenneT 380kV Germany OffshoreHub Cluster",
    "country": "Germany",
    "region": "Offshore Wind",
    "voltage_kv": 380,
    "type": "AC",
    "length_km": 180,
    "operator": "TenneT",
    "status": "Operational",
    "capacity_mw": 2000,
    "coordinates": [
      [
        8.0,
        54.5
      ],
      [
        8.3,
        54.0
      ],
      [
        8.5,
        53.5
      ],
      [
        8.5,
        53.0
      ],
      [
        8.4,
        52.5
      ],
      [
        8.5,
        52.0
      ]
    ]
  },
  {
    "id": "EU-074",
    "name": "Elia Belgium Offshore Hub",
    "country": "Belgium",
    "region": "Offshore Wind",
    "voltage_kv": 380,
    "type": "AC",
    "length_km": 90,
    "operator": "Elia",
    "status": "Operational",
    "capacity_mw": 1400,
    "coordinates": [
      [
        2.5,
        51.8
      ],
      [
        2.8,
        51.7
      ],
      [
        3.0,
        51.6
      ],
      [
        3.2,
        51.5
      ],
      [
        3.5,
        51.5
      ]
    ]
  },
  {
    "id": "EU-075",
    "name": "Sweden 400kV North-Central Backbone",
    "country": "Sweden",
    "region": "Svenska Kraftnat",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 620,
    "operator": "Svenska Kraftnat",
    "status": "Operational",
    "capacity_mw": 2000,
    "coordinates": [
      [
        15.5,
        66.5
      ],
      [
        16.0,
        65.8
      ],
      [
        16.5,
        65.0
      ],
      [
        17.0,
        64.0
      ],
      [
        17.5,
        63.0
      ],
      [
        17.5,
        62.0
      ],
      [
        17.0,
        61.0
      ],
      [
        16.5,
        60.5
      ],
      [
        16.0,
        60.0
      ]
    ]
  },
  {
    "id": "EU-076",
    "name": "Norway 420kV Statnett North Corridor",
    "country": "Norway",
    "region": "Statnett",
    "voltage_kv": 420,
    "type": "AC",
    "length_km": 480,
    "operator": "Statnett",
    "status": "Operational",
    "capacity_mw": 1800,
    "coordinates": [
      [
        15.0,
        65.5
      ],
      [
        16.0,
        66.5
      ],
      [
        17.0,
        67.5
      ],
      [
        17.5,
        68.0
      ],
      [
        18.0,
        68.5
      ],
      [
        18.5,
        69.0
      ],
      [
        19.0,
        69.5
      ],
      [
        20.0,
        70.0
      ]
    ]
  },
  {
    "id": "EU-077",
    "name": "Fingrid 400kV North Finland Grid",
    "country": "Finland",
    "region": "Fingrid",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 500,
    "operator": "Fingrid",
    "status": "Operational",
    "capacity_mw": 1600,
    "coordinates": [
      [
        25.0,
        65.0
      ],
      [
        25.5,
        66.0
      ],
      [
        26.0,
        67.0
      ],
      [
        26.5,
        67.5
      ],
      [
        27.0,
        68.0
      ],
      [
        27.5,
        68.5
      ],
      [
        28.0,
        69.0
      ],
      [
        29.0,
        69.5
      ]
    ]
  },
  {
    "id": "EU-078",
    "name": "Baltic 330kV Lithuania-Poland Link",
    "country": "Lithuania",
    "region": "Cross-Border",
    "voltage_kv": 330,
    "type": "AC",
    "length_km": 130,
    "operator": "Litgrid / PSE",
    "status": "Operational",
    "capacity_mw": 800,
    "coordinates": [
      [
        23.5,
        54.7
      ],
      [
        23.0,
        54.0
      ],
      [
        22.5,
        53.5
      ],
      [
        22.0,
        53.0
      ],
      [
        21.5,
        52.7
      ]
    ]
  },
  {
    "id": "EU-079",
    "name": "PSE 400kV Poland-Belarus Corridor",
    "country": "Poland",
    "region": "Cross-Border",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 120,
    "operator": "PSE",
    "status": "Operational",
    "capacity_mw": 700,
    "coordinates": [
      [
        22.5,
        52.5
      ],
      [
        23.0,
        52.8
      ],
      [
        23.5,
        53.0
      ],
      [
        23.8,
        53.2
      ],
      [
        24.0,
        53.5
      ]
    ]
  },
  {
    "id": "EU-080",
    "name": "Transelectrica 400kV Moldova-Romania",
    "country": "Romania",
    "region": "Cross-Border",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 100,
    "operator": "Transelectrica / Moldelectrica",
    "status": "Operational",
    "capacity_mw": 400,
    "coordinates": [
      [
        27.5,
        47.5
      ],
      [
        27.8,
        47.2
      ],
      [
        28.0,
        47.0
      ],
      [
        28.2,
        46.8
      ],
      [
        28.5,
        46.5
      ]
    ]
  },
  {
    "id": "ROW-066",
    "name": "China 500kV Yunnan-Guangdong HVDC",
    "country": "China",
    "region": "South-West China",
    "voltage_kv": 800,
    "type": "HVDC",
    "length_km": 1418,
    "operator": "China Southern Grid",
    "status": "Operational",
    "capacity_mw": 5000,
    "coordinates": [
      [
        100.5,
        25.0
      ],
      [
        101.0,
        24.5
      ],
      [
        102.0,
        24.0
      ],
      [
        103.0,
        23.5
      ],
      [
        104.0,
        23.0
      ],
      [
        105.0,
        23.0
      ],
      [
        106.0,
        23.5
      ],
      [
        108.0,
        24.0
      ],
      [
        110.0,
        23.5
      ],
      [
        112.0,
        23.0
      ],
      [
        113.0,
        23.2
      ]
    ]
  },
  {
    "id": "ROW-067",
    "name": "China 500kV Xinjiang West Grid",
    "country": "China",
    "region": "Northwest China",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 800,
    "operator": "State Grid",
    "status": "Operational",
    "capacity_mw": 2500,
    "coordinates": [
      [
        80.0,
        40.0
      ],
      [
        82.0,
        40.5
      ],
      [
        84.0,
        41.0
      ],
      [
        86.0,
        41.0
      ],
      [
        87.0,
        43.0
      ],
      [
        88.0,
        43.5
      ],
      [
        89.0,
        43.0
      ],
      [
        90.0,
        43.5
      ],
      [
        91.0,
        43.0
      ]
    ]
  },
  {
    "id": "ROW-068",
    "name": "India 400kV South Karnataka Grid",
    "country": "India",
    "region": "South India",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 450,
    "operator": "POWERGRID / KPTCL",
    "status": "Operational",
    "capacity_mw": 2500,
    "coordinates": [
      [
        74.5,
        15.5
      ],
      [
        75.0,
        15.0
      ],
      [
        75.5,
        14.5
      ],
      [
        76.0,
        14.0
      ],
      [
        76.5,
        13.5
      ],
      [
        77.0,
        13.0
      ],
      [
        77.5,
        13.2
      ],
      [
        77.6,
        12.97
      ]
    ]
  },
  {
    "id": "ROW-069",
    "name": "India 400kV West Coast Maharashtra",
    "country": "India",
    "region": "West India",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 400,
    "operator": "POWERGRID / MSEDCL",
    "status": "Operational",
    "capacity_mw": 2200,
    "coordinates": [
      [
        72.8,
        19.0
      ],
      [
        73.0,
        18.5
      ],
      [
        73.2,
        18.0
      ],
      [
        73.5,
        17.5
      ],
      [
        73.8,
        17.0
      ],
      [
        74.0,
        16.5
      ],
      [
        74.2,
        16.0
      ],
      [
        74.5,
        15.5
      ]
    ]
  },
  {
    "id": "ROW-070",
    "name": "Brazil 500kV North-Northeast Connector",
    "country": "Brazil",
    "region": "North Brazil",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 780,
    "operator": "Eletronorte / Chesf",
    "status": "Operational",
    "capacity_mw": 2000,
    "coordinates": [
      [
        -48.5,
        -1.5
      ],
      [
        -48.0,
        -2.5
      ],
      [
        -47.5,
        -3.5
      ],
      [
        -47.0,
        -4.5
      ],
      [
        -46.5,
        -5.5
      ],
      [
        -46.0,
        -6.5
      ],
      [
        -45.5,
        -7.5
      ],
      [
        -44.5,
        -8.5
      ],
      [
        -44.0,
        -9.5
      ],
      [
        -43.5,
        -10.5
      ],
      [
        -43.0,
        -11.5
      ]
    ]
  },
  {
    "id": "ROW-071",
    "name": "Australia NEM Heywood VIC-SA Interconnect",
    "country": "Australia",
    "region": "NEM",
    "voltage_kv": 275,
    "type": "AC",
    "length_km": 180,
    "operator": "ElectraNet / AusNet",
    "status": "Operational",
    "capacity_mw": 650,
    "coordinates": [
      [
        141.0,
        -38.5
      ],
      [
        140.5,
        -37.5
      ],
      [
        140.0,
        -37.0
      ],
      [
        139.5,
        -36.5
      ],
      [
        139.0,
        -36.0
      ],
      [
        138.5,
        -35.5
      ]
    ]
  },
  {
    "id": "ROW-072",
    "name": "South Africa 400kV East London Grid",
    "country": "South Africa",
    "region": "Eastern Cape",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 560,
    "operator": "Eskom",
    "status": "Operational",
    "capacity_mw": 1500,
    "coordinates": [
      [
        29.5,
        -29.5
      ],
      [
        29.0,
        -30.0
      ],
      [
        28.5,
        -30.5
      ],
      [
        28.0,
        -31.0
      ],
      [
        27.5,
        -31.5
      ],
      [
        27.0,
        -32.0
      ],
      [
        26.5,
        -32.5
      ],
      [
        26.0,
        -33.0
      ],
      [
        25.5,
        -33.5
      ]
    ]
  },
  {
    "id": "ROW-073",
    "name": "Morocco 400kV Nador-Casablanca Corridor",
    "country": "Morocco",
    "region": "North Africa",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 450,
    "operator": "ONEE",
    "status": "Operational",
    "capacity_mw": 1200,
    "coordinates": [
      [
        -2.9,
        35.2
      ],
      [
        -3.5,
        34.8
      ],
      [
        -4.0,
        34.5
      ],
      [
        -4.5,
        34.5
      ],
      [
        -5.0,
        34.8
      ],
      [
        -5.5,
        34.5
      ],
      [
        -6.0,
        34.2
      ],
      [
        -6.5,
        33.8
      ],
      [
        -7.0,
        33.5
      ],
      [
        -7.5,
        33.5
      ]
    ]
  },
  {
    "id": "ROW-074",
    "name": "South Korea 765kV KEPCO Supergrid",
    "country": "South Korea",
    "region": "Korea",
    "voltage_kv": 765,
    "type": "AC",
    "length_km": 360,
    "operator": "KEPCO",
    "status": "Operational",
    "capacity_mw": 6000,
    "coordinates": [
      [
        128.5,
        35.0
      ],
      [
        128.0,
        35.5
      ],
      [
        127.5,
        36.0
      ],
      [
        127.0,
        36.5
      ],
      [
        127.0,
        37.0
      ],
      [
        127.5,
        37.5
      ],
      [
        128.0,
        37.5
      ],
      [
        128.5,
        37.0
      ],
      [
        129.0,
        36.5
      ]
    ]
  },
  {
    "id": "ROW-075",
    "name": "Vietnam 500kV Central Highland Grid",
    "country": "Vietnam",
    "region": "Vietnam",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 380,
    "operator": "EVN Vietnam",
    "status": "Operational",
    "capacity_mw": 1500,
    "coordinates": [
      [
        108.0,
        14.0
      ],
      [
        108.0,
        13.5
      ],
      [
        108.0,
        13.0
      ],
      [
        107.5,
        12.5
      ],
      [
        107.0,
        12.0
      ],
      [
        107.0,
        11.5
      ],
      [
        106.5,
        11.0
      ],
      [
        107.0,
        10.8
      ]
    ]
  },
  {
    "id": "ROW-076",
    "name": "Indonesia 500kV Sumatra North-South",
    "country": "Indonesia",
    "region": "Sumatra",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 800,
    "operator": "PLN",
    "status": "Operational",
    "capacity_mw": 1500,
    "coordinates": [
      [
        95.5,
        5.5
      ],
      [
        97.0,
        4.5
      ],
      [
        98.5,
        3.5
      ],
      [
        100.0,
        2.5
      ],
      [
        101.5,
        1.5
      ],
      [
        103.0,
        0.5
      ],
      [
        104.0,
        -0.5
      ],
      [
        105.0,
        -1.5
      ],
      [
        105.5,
        -2.5
      ],
      [
        106.0,
        -3.5
      ]
    ]
  },
  {
    "id": "ROW-077",
    "name": "Kazakhstan 500kV North-South Backbone",
    "country": "Kazakhstan",
    "region": "Kazakhstan",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 1200,
    "operator": "KEGOC",
    "status": "Operational",
    "capacity_mw": 2500,
    "coordinates": [
      [
        68.5,
        54.0
      ],
      [
        69.0,
        52.5
      ],
      [
        69.5,
        51.5
      ],
      [
        70.0,
        50.5
      ],
      [
        70.5,
        49.5
      ],
      [
        71.0,
        48.5
      ],
      [
        71.5,
        47.5
      ],
      [
        72.0,
        46.5
      ],
      [
        72.5,
        45.5
      ],
      [
        73.0,
        44.5
      ],
      [
        73.5,
        43.5
      ]
    ]
  },
  {
    "id": "ROW-078",
    "name": "Uzbekistan 500kV National Grid",
    "country": "Uzbekistan",
    "region": "Central Asia",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 600,
    "operator": "Uzbekenergo",
    "status": "Operational",
    "capacity_mw": 1800,
    "coordinates": [
      [
        56.5,
        40.5
      ],
      [
        58.0,
        40.5
      ],
      [
        60.0,
        40.5
      ],
      [
        62.0,
        40.5
      ],
      [
        64.0,
        40.5
      ],
      [
        65.5,
        40.8
      ],
      [
        67.0,
        40.8
      ],
      [
        68.5,
        40.5
      ],
      [
        69.2,
        41.3
      ]
    ]
  },
  {
    "id": "ROW-079",
    "name": "Turkey 380kV Eastern Anatolian Grid",
    "country": "Turkey",
    "region": "Turkey",
    "voltage_kv": 380,
    "type": "AC",
    "length_km": 600,
    "operator": "TEIAS",
    "status": "Operational",
    "capacity_mw": 2000,
    "coordinates": [
      [
        36.0,
        38.5
      ],
      [
        37.0,
        38.5
      ],
      [
        38.5,
        38.5
      ],
      [
        39.5,
        38.5
      ],
      [
        40.5,
        39.0
      ],
      [
        41.5,
        39.5
      ],
      [
        42.0,
        40.0
      ],
      [
        43.0,
        40.5
      ]
    ]
  },
  {
    "id": "ROW-080",
    "name": "Egypt 220kV Upper Nile Corridor",
    "country": "Egypt",
    "region": "Egypt",
    "voltage_kv": 220,
    "type": "AC",
    "length_km": 700,
    "operator": "EETC",
    "status": "Operational",
    "capacity_mw": 1200,
    "coordinates": [
      [
        32.5,
        24.0
      ],
      [
        32.5,
        23.0
      ],
      [
        32.5,
        22.0
      ],
      [
        32.5,
        21.5
      ],
      [
        33.0,
        21.0
      ],
      [
        33.0,
        22.0
      ],
      [
        33.0,
        23.0
      ],
      [
        33.0,
        24.0
      ]
    ]
  },
  {
    "id": "ROW-081",
    "name": "Pakistan 220kV Punjab Regional Grid",
    "country": "Pakistan",
    "region": "Pakistan",
    "voltage_kv": 220,
    "type": "AC",
    "length_km": 500,
    "operator": "NTDC / WAPDA",
    "status": "Operational",
    "capacity_mw": 1200,
    "coordinates": [
      [
        73.0,
        30.5
      ],
      [
        73.5,
        31.0
      ],
      [
        74.0,
        31.5
      ],
      [
        74.5,
        32.0
      ],
      [
        75.0,
        32.5
      ],
      [
        75.5,
        32.0
      ],
      [
        76.0,
        31.5
      ],
      [
        75.5,
        31.0
      ],
      [
        75.0,
        30.5
      ]
    ]
  },
  {
    "id": "ROW-082",
    "name": "Bangladesh 230kV East-West Grid",
    "country": "Bangladesh",
    "region": "South Asia",
    "voltage_kv": 230,
    "type": "AC",
    "length_km": 400,
    "operator": "PGCB",
    "status": "Operational",
    "capacity_mw": 800,
    "coordinates": [
      [
        92.0,
        21.5
      ],
      [
        91.5,
        22.0
      ],
      [
        91.0,
        22.5
      ],
      [
        90.5,
        23.0
      ],
      [
        90.0,
        23.5
      ],
      [
        89.5,
        24.0
      ],
      [
        89.0,
        24.5
      ],
      [
        88.5,
        24.5
      ],
      [
        88.0,
        24.0
      ]
    ]
  },
  {
    "id": "ROW-083",
    "name": "Ethiopia 400kV Gilgel Gibe-Addis Corridor",
    "country": "Ethiopia",
    "region": "East Africa",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 350,
    "operator": "EEP",
    "status": "Operational",
    "capacity_mw": 1000,
    "coordinates": [
      [
        37.5,
        8.0
      ],
      [
        38.0,
        8.5
      ],
      [
        38.5,
        9.0
      ],
      [
        38.8,
        9.5
      ],
      [
        38.6,
        10.0
      ],
      [
        38.7,
        9.0
      ],
      [
        38.7,
        10.0
      ],
      [
        38.7,
        11.0
      ]
    ]
  },
  {
    "id": "ROW-084",
    "name": "Tanzania 220kV Backbone",
    "country": "Tanzania",
    "region": "East Africa",
    "voltage_kv": 220,
    "type": "AC",
    "length_km": 400,
    "operator": "TANESCO",
    "status": "Operational",
    "capacity_mw": 500,
    "coordinates": [
      [
        35.0,
        -5.0
      ],
      [
        35.5,
        -6.0
      ],
      [
        36.0,
        -7.0
      ],
      [
        36.5,
        -7.5
      ],
      [
        37.0,
        -8.0
      ],
      [
        37.5,
        -8.5
      ],
      [
        38.0,
        -8.5
      ],
      [
        39.0,
        -7.0
      ],
      [
        39.3,
        -6.8
      ]
    ]
  },
  {
    "id": "ROW-085",
    "name": "Chile 220kV Southern Grid Aysén",
    "country": "Chile",
    "region": "Patagonia",
    "voltage_kv": 220,
    "type": "AC",
    "length_km": 400,
    "operator": "Transelec",
    "status": "Operational",
    "capacity_mw": 600,
    "coordinates": [
      [
        -72.5,
        -42.0
      ],
      [
        -72.8,
        -43.0
      ],
      [
        -73.0,
        -44.0
      ],
      [
        -73.2,
        -45.0
      ],
      [
        -73.0,
        -46.0
      ],
      [
        -72.5,
        -47.0
      ]
    ]
  },
  {
    "id": "ROW-086",
    "name": "Colombia 500kV Pacific Corridor",
    "country": "Colombia",
    "region": "Colombia",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 450,
    "operator": "ISA Colombia",
    "status": "Operational",
    "capacity_mw": 1800,
    "coordinates": [
      [
        -76.5,
        6.5
      ],
      [
        -77.0,
        5.5
      ],
      [
        -77.5,
        5.0
      ],
      [
        -77.0,
        4.5
      ],
      [
        -76.5,
        4.0
      ],
      [
        -76.0,
        3.5
      ],
      [
        -76.5,
        3.0
      ]
    ]
  },
  {
    "id": "ROW-087",
    "name": "Peru 220kV Backbone Mantaro-Lima",
    "country": "Peru",
    "region": "Peru",
    "voltage_kv": 220,
    "type": "AC",
    "length_km": 400,
    "operator": "REP Peru / COES",
    "status": "Operational",
    "capacity_mw": 1000,
    "coordinates": [
      [
        -75.5,
        -12.5
      ],
      [
        -75.0,
        -12.0
      ],
      [
        -74.5,
        -12.0
      ],
      [
        -74.0,
        -12.2
      ],
      [
        -73.5,
        -12.5
      ],
      [
        -72.5,
        -13.0
      ],
      [
        -72.0,
        -13.5
      ],
      [
        -71.5,
        -14.0
      ]
    ]
  },
  {
    "id": "ROW-088",
    "name": "Venezuela 765kV Guri-Caracas Line",
    "country": "Venezuela",
    "region": "Venezuela",
    "voltage_kv": 765,
    "type": "AC",
    "length_km": 760,
    "operator": "Corpoelec",
    "status": "Operational",
    "capacity_mw": 4800,
    "coordinates": [
      [
        -63.0,
        7.8
      ],
      [
        -64.0,
        8.5
      ],
      [
        -65.0,
        9.0
      ],
      [
        -66.0,
        9.5
      ],
      [
        -66.5,
        10.0
      ],
      [
        -66.8,
        10.5
      ]
    ]
  },
  {
    "id": "ROW-089",
    "name": "Saudi Arabia 380kV Hijaz Mountain Grid",
    "country": "Saudi Arabia",
    "region": "Western Saudi",
    "voltage_kv": 380,
    "type": "AC",
    "length_km": 500,
    "operator": "SEC",
    "status": "Operational",
    "capacity_mw": 2000,
    "coordinates": [
      [
        39.0,
        24.5
      ],
      [
        38.5,
        23.5
      ],
      [
        38.0,
        22.5
      ],
      [
        37.5,
        22.0
      ],
      [
        37.0,
        21.5
      ],
      [
        37.5,
        21.0
      ],
      [
        38.0,
        20.5
      ],
      [
        38.5,
        20.0
      ]
    ]
  },
  {
    "id": "ROW-090",
    "name": "Iran 400kV Tehran-Isfahan Corridor",
    "country": "Iran",
    "region": "Iran",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 420,
    "operator": "Tavanir",
    "status": "Operational",
    "capacity_mw": 2000,
    "coordinates": [
      [
        51.5,
        35.7
      ],
      [
        51.4,
        35.0
      ],
      [
        51.3,
        34.5
      ],
      [
        51.0,
        34.0
      ],
      [
        51.2,
        33.5
      ],
      [
        51.3,
        33.0
      ],
      [
        51.5,
        32.7
      ]
    ]
  },
  {
    "id": "ROW-091",
    "name": "Iraq 400kV Mosul-Baghdad Corridor",
    "country": "Iraq",
    "region": "Middle East",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 350,
    "operator": "Ministry of Electricity Iraq",
    "status": "Operational",
    "capacity_mw": 1000,
    "coordinates": [
      [
        43.1,
        36.3
      ],
      [
        43.5,
        35.5
      ],
      [
        43.8,
        35.0
      ],
      [
        44.0,
        34.5
      ],
      [
        44.2,
        34.0
      ],
      [
        44.3,
        33.5
      ],
      [
        44.4,
        33.3
      ]
    ]
  },
  {
    "id": "ROW-092",
    "name": "Syria 400kV Backbone",
    "country": "Syria",
    "region": "Middle East",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 500,
    "operator": "PEEGT Syria",
    "status": "Operational",
    "capacity_mw": 800,
    "coordinates": [
      [
        36.5,
        37.0
      ],
      [
        37.0,
        36.5
      ],
      [
        37.5,
        36.0
      ],
      [
        38.0,
        35.5
      ],
      [
        38.5,
        35.0
      ],
      [
        37.0,
        34.5
      ],
      [
        36.5,
        34.0
      ],
      [
        36.0,
        33.5
      ]
    ]
  },
  {
    "id": "ROW-093",
    "name": "Israel 400kV National Grid",
    "country": "Israel",
    "region": "Middle East",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 280,
    "operator": "IEC",
    "status": "Operational",
    "capacity_mw": 1800,
    "coordinates": [
      [
        34.8,
        31.8
      ],
      [
        34.7,
        32.2
      ],
      [
        34.9,
        32.8
      ],
      [
        35.0,
        33.2
      ],
      [
        35.1,
        33.5
      ]
    ]
  },
  {
    "id": "ROW-094",
    "name": "Jordan 400kV National Grid",
    "country": "Jordan",
    "region": "Middle East",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 330,
    "operator": "NEPCO Jordan",
    "status": "Operational",
    "capacity_mw": 1200,
    "coordinates": [
      [
        38.0,
        32.0
      ],
      [
        37.5,
        31.5
      ],
      [
        37.0,
        31.0
      ],
      [
        36.5,
        30.5
      ],
      [
        36.0,
        30.0
      ],
      [
        37.0,
        29.5
      ],
      [
        38.0,
        29.0
      ]
    ]
  },
  {
    "id": "ROW-095",
    "name": "Myanmar 230kV Northern Grid",
    "country": "Myanmar",
    "region": "Southeast Asia",
    "voltage_kv": 230,
    "type": "AC",
    "length_km": 500,
    "operator": "MOEE Myanmar",
    "status": "Operational",
    "capacity_mw": 600,
    "coordinates": [
      [
        97.0,
        22.0
      ],
      [
        97.5,
        22.5
      ],
      [
        97.5,
        23.5
      ],
      [
        98.0,
        24.5
      ],
      [
        98.0,
        25.5
      ],
      [
        97.5,
        26.0
      ],
      [
        97.0,
        26.5
      ],
      [
        96.5,
        25.5
      ],
      [
        97.0,
        24.0
      ],
      [
        97.0,
        22.5
      ]
    ]
  },
  {
    "id": "ROW-096",
    "name": "Cambodia 230kV National Grid",
    "country": "Cambodia",
    "region": "Southeast Asia",
    "voltage_kv": 230,
    "type": "AC",
    "length_km": 350,
    "operator": "EDC Cambodia",
    "status": "Operational",
    "capacity_mw": 400,
    "coordinates": [
      [
        103.5,
        13.5
      ],
      [
        103.8,
        12.5
      ],
      [
        104.0,
        11.5
      ],
      [
        104.5,
        10.5
      ],
      [
        104.9,
        11.5
      ],
      [
        105.5,
        12.0
      ],
      [
        105.0,
        13.0
      ],
      [
        104.5,
        13.5
      ],
      [
        104.0,
        14.0
      ]
    ]
  },
  {
    "id": "ROW-097",
    "name": "China 500kV Guizhou-Guangdong HVDC",
    "country": "China",
    "region": "South China",
    "voltage_kv": 500,
    "type": "HVDC",
    "length_km": 936,
    "operator": "China Southern Grid",
    "status": "Operational",
    "capacity_mw": 3000,
    "coordinates": [
      [
        106.5,
        26.5
      ],
      [
        107.0,
        26.0
      ],
      [
        108.0,
        25.5
      ],
      [
        109.0,
        25.0
      ],
      [
        110.0,
        24.5
      ],
      [
        111.0,
        24.0
      ],
      [
        112.0,
        23.5
      ],
      [
        113.0,
        23.2
      ]
    ]
  },
  {
    "id": "ROW-098",
    "name": "Nigeria 330kV Lagos-Kano Backbone",
    "country": "Nigeria",
    "region": "West Africa",
    "voltage_kv": 330,
    "type": "AC",
    "length_km": 900,
    "operator": "TCN Nigeria",
    "status": "Operational",
    "capacity_mw": 1000,
    "coordinates": [
      [
        3.4,
        6.5
      ],
      [
        3.5,
        7.5
      ],
      [
        3.8,
        8.5
      ],
      [
        4.5,
        9.5
      ],
      [
        5.5,
        10.5
      ],
      [
        6.5,
        11.0
      ],
      [
        7.5,
        11.5
      ],
      [
        8.5,
        12.0
      ],
      [
        9.0,
        12.5
      ]
    ]
  },
  {
    "id": "ROW-099",
    "name": "Egypt-Libya 220kV Cross-Border",
    "country": "Egypt",
    "region": "North Africa",
    "voltage_kv": 220,
    "type": "AC",
    "length_km": 250,
    "operator": "EETC / GECOL",
    "status": "Operational",
    "capacity_mw": 600,
    "coordinates": [
      [
        25.0,
        31.0
      ],
      [
        25.5,
        31.2
      ],
      [
        26.0,
        31.2
      ],
      [
        26.5,
        31.0
      ],
      [
        27.0,
        31.0
      ],
      [
        27.5,
        31.2
      ],
      [
        28.0,
        31.0
      ]
    ]
  },
  {
    "id": "ROW-100",
    "name": "Chile 220kV Pacific Wind Corridor",
    "country": "Chile",
    "region": "Chile",
    "voltage_kv": 220,
    "type": "AC",
    "length_km": 300,
    "operator": "Transelec",
    "status": "Operational",
    "capacity_mw": 800,
    "coordinates": [
      [
        -71.5,
        -30.0
      ],
      [
        -71.8,
        -29.0
      ],
      [
        -72.0,
        -28.0
      ],
      [
        -72.0,
        -27.0
      ],
      [
        -71.5,
        -26.0
      ],
      [
        -71.0,
        -25.0
      ],
      [
        -70.5,
        -25.5
      ]
    ]
  },
  {
    "id": "US-066",
    "name": "PJM 345kV Delaware Valley Corridor",
    "country": "USA",
    "region": "PJM",
    "voltage_kv": 345,
    "type": "AC",
    "length_km": 160,
    "operator": "PECO / PSE&G",
    "status": "Operational",
    "capacity_mw": 1500,
    "coordinates": [
      [
        -74.9,
        39.8
      ],
      [
        -75.0,
        40.0
      ],
      [
        -75.2,
        40.2
      ],
      [
        -75.5,
        40.4
      ],
      [
        -75.8,
        40.5
      ]
    ]
  },
  {
    "id": "US-067",
    "name": "SERC 500kV Florida West Coast Loop",
    "country": "USA",
    "region": "FRCC",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 260,
    "operator": "Duke Energy Florida",
    "status": "Operational",
    "capacity_mw": 2000,
    "coordinates": [
      [
        -82.5,
        27.5
      ],
      [
        -82.2,
        27.0
      ],
      [
        -82.0,
        26.5
      ],
      [
        -81.8,
        26.0
      ],
      [
        -81.5,
        25.5
      ],
      [
        -81.3,
        26.5
      ],
      [
        -81.5,
        27.0
      ],
      [
        -81.8,
        27.5
      ],
      [
        -82.2,
        27.5
      ]
    ]
  },
  {
    "id": "US-068",
    "name": "MISO 345kV Wisconsin Wolf Run Lake",
    "country": "USA",
    "region": "MISO",
    "voltage_kv": 345,
    "type": "AC",
    "length_km": 200,
    "operator": "ATC",
    "status": "Operational",
    "capacity_mw": 1400,
    "coordinates": [
      [
        -88.5,
        43.5
      ],
      [
        -88.8,
        43.0
      ],
      [
        -89.0,
        42.5
      ],
      [
        -89.2,
        42.0
      ],
      [
        -89.0,
        41.8
      ],
      [
        -88.5,
        42.0
      ],
      [
        -88.2,
        42.5
      ]
    ]
  },
  {
    "id": "US-069",
    "name": "MISO 345kV East Iowa Backbone",
    "country": "USA",
    "region": "MISO",
    "voltage_kv": 345,
    "type": "AC",
    "length_km": 260,
    "operator": "MidAmerican Energy / Alliant",
    "status": "Operational",
    "capacity_mw": 1400,
    "coordinates": [
      [
        -93.0,
        42.5
      ],
      [
        -92.5,
        42.0
      ],
      [
        -92.0,
        41.7
      ],
      [
        -91.5,
        41.5
      ],
      [
        -91.0,
        41.5
      ],
      [
        -91.0,
        42.0
      ],
      [
        -91.5,
        42.5
      ],
      [
        -92.0,
        42.8
      ]
    ]
  },
  {
    "id": "US-070",
    "name": "PJM 345kV Chesapeake Bay Loop",
    "country": "USA",
    "region": "PJM",
    "voltage_kv": 345,
    "type": "AC",
    "length_km": 180,
    "operator": "Pepco / BGE",
    "status": "Operational",
    "capacity_mw": 1400,
    "coordinates": [
      [
        -76.5,
        39.0
      ],
      [
        -76.3,
        38.8
      ],
      [
        -76.0,
        38.5
      ],
      [
        -75.7,
        38.2
      ],
      [
        -75.5,
        38.0
      ],
      [
        -75.5,
        38.8
      ],
      [
        -76.0,
        39.2
      ],
      [
        -76.5,
        39.3
      ]
    ]
  },
  {
    "id": "US-071",
    "name": "WECC 345kV Colorado Rocky Mountain Grid",
    "country": "USA",
    "region": "Western Interconnection",
    "voltage_kv": 345,
    "type": "AC",
    "length_km": 350,
    "operator": "Xcel Energy Colorado",
    "status": "Operational",
    "capacity_mw": 1500,
    "coordinates": [
      [
        -105.0,
        40.0
      ],
      [
        -105.5,
        39.5
      ],
      [
        -106.0,
        39.0
      ],
      [
        -106.5,
        38.5
      ],
      [
        -107.0,
        38.0
      ],
      [
        -107.5,
        37.5
      ],
      [
        -107.5,
        37.0
      ]
    ]
  },
  {
    "id": "US-072",
    "name": "SERC 500kV Santee Cooper Backbone",
    "country": "USA",
    "region": "SERC",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 220,
    "operator": "Santee Cooper / SCE&G",
    "status": "Operational",
    "capacity_mw": 1800,
    "coordinates": [
      [
        -81.2,
        33.8
      ],
      [
        -80.8,
        33.5
      ],
      [
        -80.5,
        33.2
      ],
      [
        -80.2,
        33.0
      ],
      [
        -79.9,
        33.0
      ],
      [
        -80.2,
        33.5
      ]
    ]
  },
  {
    "id": "US-073",
    "name": "NPCC 345kV New Hampshire-Vermont Grid",
    "country": "USA",
    "region": "NPCC",
    "voltage_kv": 345,
    "type": "AC",
    "length_km": 200,
    "operator": "PSNH / Green Mountain Power",
    "status": "Operational",
    "capacity_mw": 1100,
    "coordinates": [
      [
        -71.5,
        43.0
      ],
      [
        -71.8,
        43.5
      ],
      [
        -72.2,
        44.0
      ],
      [
        -72.5,
        44.5
      ],
      [
        -72.8,
        44.0
      ],
      [
        -73.0,
        43.5
      ],
      [
        -72.8,
        43.0
      ]
    ]
  },
  {
    "id": "US-074",
    "name": "NPCC 345kV Maine Grid",
    "country": "USA",
    "region": "NPCC",
    "voltage_kv": 345,
    "type": "AC",
    "length_km": 240,
    "operator": "Central Maine Power",
    "status": "Operational",
    "capacity_mw": 1000,
    "coordinates": [
      [
        -70.2,
        43.8
      ],
      [
        -70.0,
        44.2
      ],
      [
        -70.0,
        44.6
      ],
      [
        -69.8,
        45.0
      ],
      [
        -69.5,
        45.5
      ],
      [
        -69.8,
        46.0
      ],
      [
        -69.0,
        46.5
      ]
    ]
  },
  {
    "id": "US-075",
    "name": "SPP 345kV Nebraska Wind Corridor",
    "country": "USA",
    "region": "SPP",
    "voltage_kv": 345,
    "type": "AC",
    "length_km": 350,
    "operator": "OPPD / Lincoln Electric",
    "status": "Operational",
    "capacity_mw": 1400,
    "coordinates": [
      [
        -101.5,
        42.5
      ],
      [
        -101.0,
        42.0
      ],
      [
        -100.0,
        41.5
      ],
      [
        -99.0,
        41.0
      ],
      [
        -98.0,
        40.5
      ],
      [
        -97.0,
        40.5
      ],
      [
        -96.5,
        41.0
      ],
      [
        -96.0,
        41.5
      ]
    ]
  },
  {
    "id": "US-076",
    "name": "WECC 230kV Colorado-Utah Corridor",
    "country": "USA",
    "region": "Western Interconnection",
    "voltage_kv": 230,
    "type": "AC",
    "length_km": 280,
    "operator": "Xcel Energy / Rocky Mtn Power",
    "status": "Operational",
    "capacity_mw": 800,
    "coordinates": [
      [
        -109.0,
        39.0
      ],
      [
        -109.3,
        39.5
      ],
      [
        -109.5,
        40.0
      ],
      [
        -109.5,
        40.5
      ],
      [
        -110.0,
        41.0
      ],
      [
        -110.5,
        41.5
      ],
      [
        -111.0,
        41.8
      ]
    ]
  },
  {
    "id": "US-077",
    "name": "PNW 115kV Eastern Washington Grid",
    "country": "USA",
    "region": "Western Interconnection",
    "voltage_kv": 115,
    "type": "AC",
    "length_km": 280,
    "operator": "Avista",
    "status": "Operational",
    "capacity_mw": 600,
    "coordinates": [
      [
        -117.4,
        47.7
      ],
      [
        -117.0,
        47.5
      ],
      [
        -116.5,
        47.2
      ],
      [
        -116.0,
        47.0
      ],
      [
        -117.0,
        46.5
      ],
      [
        -117.5,
        46.7
      ],
      [
        -117.7,
        47.0
      ]
    ]
  },
  {
    "id": "CA-016",
    "name": "BC Hydro 230kV Vancouver Island Line",
    "country": "Canada",
    "region": "British Columbia",
    "voltage_kv": 230,
    "type": "AC",
    "length_km": 150,
    "operator": "BC Hydro",
    "status": "Operational",
    "capacity_mw": 800,
    "coordinates": [
      [
        -123.4,
        48.4
      ],
      [
        -123.8,
        48.7
      ],
      [
        -124.5,
        49.1
      ],
      [
        -125.0,
        49.5
      ],
      [
        -125.5,
        49.8
      ],
      [
        -126.0,
        50.1
      ]
    ]
  },
  {
    "id": "CA-017",
    "name": "Manitoba 115kV Rural North Grid",
    "country": "Canada",
    "region": "Manitoba",
    "voltage_kv": 115,
    "type": "AC",
    "length_km": 500,
    "operator": "Manitoba Hydro",
    "status": "Operational",
    "capacity_mw": 400,
    "coordinates": [
      [
        -97.1,
        49.9
      ],
      [
        -97.5,
        51.0
      ],
      [
        -98.0,
        52.0
      ],
      [
        -99.0,
        53.0
      ],
      [
        -99.5,
        54.0
      ],
      [
        -100.0,
        55.0
      ]
    ]
  },
  {
    "id": "MX-004",
    "name": "CFE 400kV Yucatan Peninsula Grid",
    "country": "Mexico",
    "region": "Yucatan",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 320,
    "operator": "CFE",
    "status": "Operational",
    "capacity_mw": 800,
    "coordinates": [
      [
        -90.5,
        19.5
      ],
      [
        -90.0,
        20.5
      ],
      [
        -89.5,
        21.0
      ],
      [
        -88.5,
        21.0
      ],
      [
        -88.0,
        20.5
      ],
      [
        -87.5,
        20.0
      ],
      [
        -87.5,
        21.0
      ],
      [
        -88.0,
        21.5
      ]
    ]
  },
  {
    "id": "MX-005",
    "name": "CFE 400kV Northern Mexico Backbone",
    "country": "Mexico",
    "region": "Northern Mexico",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 700,
    "operator": "CFE",
    "status": "Operational",
    "capacity_mw": 1800,
    "coordinates": [
      [
        -105.2,
        25.5
      ],
      [
        -105.0,
        26.0
      ],
      [
        -105.5,
        26.5
      ],
      [
        -106.0,
        27.5
      ],
      [
        -106.5,
        28.5
      ],
      [
        -107.0,
        29.5
      ],
      [
        -107.5,
        30.5
      ],
      [
        -108.0,
        31.5
      ]
    ]
  },
  {
    "id": "EU-081",
    "name": "ENTSO-E 400kV Greece-North Macedonia Interconnect",
    "country": "Greece",
    "region": "Cross-Border",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 90,
    "operator": "IPTO / MEPSO",
    "status": "Operational",
    "capacity_mw": 500,
    "coordinates": [
      [
        22.0,
        41.2
      ],
      [
        22.2,
        41.0
      ],
      [
        22.5,
        40.8
      ],
      [
        22.8,
        40.5
      ],
      [
        22.8,
        40.8
      ]
    ]
  },
  {
    "id": "EU-082",
    "name": "Ukrenergo 330kV Ukraine South Grid",
    "country": "Ukraine",
    "region": "Ukraine",
    "voltage_kv": 330,
    "type": "AC",
    "length_km": 450,
    "operator": "Ukrenergo",
    "status": "Operational",
    "capacity_mw": 2000,
    "coordinates": [
      [
        30.0,
        47.0
      ],
      [
        30.5,
        46.5
      ],
      [
        31.0,
        46.0
      ],
      [
        31.5,
        45.5
      ],
      [
        32.0,
        45.0
      ],
      [
        32.5,
        45.5
      ],
      [
        33.0,
        46.0
      ],
      [
        33.5,
        46.5
      ],
      [
        34.0,
        46.8
      ]
    ]
  },
  {
    "id": "EU-083",
    "name": "Transelectrica 400kV Dobrogea Wind Corridor",
    "country": "Romania",
    "region": "Romania",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 200,
    "operator": "Transelectrica",
    "status": "Operational",
    "capacity_mw": 1200,
    "coordinates": [
      [
        28.5,
        44.5
      ],
      [
        28.8,
        44.2
      ],
      [
        29.0,
        44.0
      ],
      [
        29.2,
        43.8
      ],
      [
        29.5,
        43.5
      ],
      [
        29.8,
        44.0
      ],
      [
        30.0,
        44.5
      ]
    ]
  },
  {
    "id": "EU-084",
    "name": "IPTO 400kV Greece-Albania Interconnect",
    "country": "Greece",
    "region": "Cross-Border",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 120,
    "operator": "IPTO / OST",
    "status": "Operational",
    "capacity_mw": 400,
    "coordinates": [
      [
        20.5,
        40.5
      ],
      [
        20.3,
        41.0
      ],
      [
        20.0,
        41.3
      ],
      [
        19.8,
        41.5
      ],
      [
        19.5,
        41.8
      ]
    ]
  },
  {
    "id": "EU-085",
    "name": "MEPS Serbia-Croatia 400kV Border",
    "country": "Serbia",
    "region": "Cross-Border",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 80,
    "operator": "EMS / HOPS",
    "status": "Operational",
    "capacity_mw": 600,
    "coordinates": [
      [
        19.5,
        45.8
      ],
      [
        19.3,
        45.5
      ],
      [
        19.2,
        45.2
      ],
      [
        19.0,
        45.0
      ],
      [
        19.0,
        44.8
      ]
    ]
  },
  {
    "id": "EU-086",
    "name": "50Hertz 380kV Saxony-Thuringia Wind",
    "country": "Germany",
    "region": "50Hertz",
    "voltage_kv": 380,
    "type": "AC",
    "length_km": 220,
    "operator": "50Hertz",
    "status": "Operational",
    "capacity_mw": 2400,
    "coordinates": [
      [
        11.0,
        52.5
      ],
      [
        11.5,
        52.0
      ],
      [
        12.0,
        51.5
      ],
      [
        12.5,
        51.0
      ],
      [
        13.0,
        50.5
      ],
      [
        13.5,
        50.2
      ],
      [
        14.0,
        50.2
      ]
    ]
  },
  {
    "id": "EU-087",
    "name": "TenneT 380kV Kiel-Bremen North Backbone",
    "country": "Germany",
    "region": "TenneT",
    "voltage_kv": 380,
    "type": "AC",
    "length_km": 160,
    "operator": "TenneT",
    "status": "Operational",
    "capacity_mw": 3000,
    "coordinates": [
      [
        10.1,
        54.3
      ],
      [
        10.0,
        53.8
      ],
      [
        9.8,
        53.2
      ],
      [
        9.7,
        52.8
      ],
      [
        9.5,
        52.3
      ],
      [
        8.8,
        53.1
      ],
      [
        8.8,
        53.5
      ]
    ]
  },
  {
    "id": "EU-088",
    "name": "Statnett 420kV Skagerrak HVDC",
    "country": "Norway",
    "region": "Cross-Border",
    "voltage_kv": 500,
    "type": "HVDC",
    "length_km": 240,
    "operator": "Statnett / Energinet",
    "status": "Operational",
    "capacity_mw": 1500,
    "coordinates": [
      [
        8.0,
        57.6
      ],
      [
        8.5,
        57.2
      ],
      [
        9.0,
        56.8
      ],
      [
        9.5,
        56.5
      ],
      [
        10.0,
        56.2
      ]
    ]
  },
  {
    "id": "EU-089",
    "name": "REN 400kV Porto-Madrid Interconnect",
    "country": "Portugal",
    "region": "Cross-Border",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 280,
    "operator": "REN / REE",
    "status": "Operational",
    "capacity_mw": 1200,
    "coordinates": [
      [
        -8.6,
        41.2
      ],
      [
        -8.0,
        40.8
      ],
      [
        -7.5,
        40.5
      ],
      [
        -7.0,
        40.2
      ],
      [
        -6.5,
        40.0
      ],
      [
        -6.0,
        40.5
      ],
      [
        -5.5,
        40.8
      ],
      [
        -5.0,
        40.5
      ],
      [
        -4.5,
        40.5
      ],
      [
        -4.0,
        40.4
      ]
    ]
  },
  {
    "id": "EU-090",
    "name": "CEPS 400kV Czech-Slovakia Interconnect",
    "country": "Czech Republic",
    "region": "Cross-Border",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 120,
    "operator": "CEPS / SEPS",
    "status": "Operational",
    "capacity_mw": 1000,
    "coordinates": [
      [
        18.0,
        49.8
      ],
      [
        18.3,
        49.5
      ],
      [
        18.6,
        49.2
      ],
      [
        18.8,
        49.0
      ],
      [
        19.0,
        49.0
      ],
      [
        19.2,
        49.2
      ],
      [
        19.5,
        49.5
      ]
    ]
  },
  {
    "id": "ROW-101",
    "name": "South Korea 345kV KEPCO Busan Grid",
    "country": "South Korea",
    "region": "Korea",
    "voltage_kv": 345,
    "type": "AC",
    "length_km": 200,
    "operator": "KEPCO",
    "status": "Operational",
    "capacity_mw": 2500,
    "coordinates": [
      [
        128.5,
        35.0
      ],
      [
        129.0,
        35.3
      ],
      [
        129.5,
        35.5
      ],
      [
        129.0,
        36.0
      ],
      [
        128.5,
        36.2
      ],
      [
        128.0,
        36.0
      ],
      [
        128.2,
        35.5
      ]
    ]
  },
  {
    "id": "ROW-102",
    "name": "Taiwan 345kV TPC Western Corridor",
    "country": "Taiwan",
    "region": "Taiwan",
    "voltage_kv": 345,
    "type": "AC",
    "length_km": 280,
    "operator": "Taiwan Power Company",
    "status": "Operational",
    "capacity_mw": 2500,
    "coordinates": [
      [
        120.3,
        22.0
      ],
      [
        120.3,
        22.5
      ],
      [
        120.5,
        23.0
      ],
      [
        120.6,
        23.5
      ],
      [
        120.8,
        24.0
      ],
      [
        121.0,
        24.5
      ],
      [
        121.1,
        25.0
      ]
    ]
  },
  {
    "id": "ROW-103",
    "name": "Australia NEM 275kV VIC-NSW Interconnect",
    "country": "Australia",
    "region": "NEM",
    "voltage_kv": 275,
    "type": "AC",
    "length_km": 180,
    "operator": "Transgrid / AusNet",
    "status": "Operational",
    "capacity_mw": 800,
    "coordinates": [
      [
        148.0,
        -37.5
      ],
      [
        148.0,
        -37.0
      ],
      [
        148.0,
        -36.5
      ],
      [
        148.0,
        -36.0
      ],
      [
        148.0,
        -35.5
      ],
      [
        148.5,
        -35.0
      ],
      [
        149.0,
        -34.5
      ]
    ]
  },
  {
    "id": "ROW-104",
    "name": "New Zealand 220kV North Island Grid",
    "country": "New Zealand",
    "region": "New Zealand",
    "voltage_kv": 220,
    "type": "AC",
    "length_km": 420,
    "operator": "Transpower NZ",
    "status": "Operational",
    "capacity_mw": 1500,
    "coordinates": [
      [
        174.7,
        -36.9
      ],
      [
        175.0,
        -37.5
      ],
      [
        175.5,
        -38.5
      ],
      [
        176.0,
        -39.5
      ],
      [
        176.5,
        -40.0
      ],
      [
        175.5,
        -40.5
      ],
      [
        174.8,
        -41.0
      ],
      [
        174.5,
        -41.2
      ]
    ]
  },
  {
    "id": "ROW-105",
    "name": "Philippines 500kV Mindanao Grid (NGCP)",
    "country": "Philippines",
    "region": "Philippines",
    "voltage_kv": 230,
    "type": "AC",
    "length_km": 380,
    "operator": "NGCP",
    "status": "Operational",
    "capacity_mw": 1000,
    "coordinates": [
      [
        124.0,
        7.5
      ],
      [
        124.5,
        8.0
      ],
      [
        125.0,
        8.5
      ],
      [
        125.5,
        9.0
      ],
      [
        125.0,
        9.5
      ],
      [
        124.5,
        9.5
      ],
      [
        124.0,
        9.0
      ],
      [
        123.5,
        8.5
      ]
    ]
  },
  {
    "id": "ROW-106",
    "name": "China 500kV Anhui-Jiangsu Grid",
    "country": "China",
    "region": "East China",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 350,
    "operator": "State Grid",
    "status": "Operational",
    "capacity_mw": 4000,
    "coordinates": [
      [
        117.0,
        31.5
      ],
      [
        117.5,
        31.5
      ],
      [
        118.0,
        31.8
      ],
      [
        118.5,
        32.0
      ],
      [
        119.0,
        32.2
      ],
      [
        119.5,
        32.0
      ],
      [
        120.0,
        32.0
      ]
    ]
  },
  {
    "id": "ROW-107",
    "name": "China 500kV Shanxi-Shaanxi Backbone",
    "country": "China",
    "region": "North China",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 400,
    "operator": "State Grid",
    "status": "Operational",
    "capacity_mw": 3500,
    "coordinates": [
      [
        110.0,
        34.5
      ],
      [
        110.5,
        35.0
      ],
      [
        111.0,
        35.5
      ],
      [
        111.5,
        36.0
      ],
      [
        112.0,
        36.5
      ],
      [
        112.5,
        36.5
      ],
      [
        113.0,
        36.0
      ],
      [
        113.5,
        36.5
      ]
    ]
  },
  {
    "id": "ROW-108",
    "name": "India 400kV Rajasthan Solar Corridor",
    "country": "India",
    "region": "Northwest India",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 500,
    "operator": "PowerGrid India / RRVPNL",
    "status": "Operational",
    "capacity_mw": 3000,
    "coordinates": [
      [
        70.5,
        27.0
      ],
      [
        71.5,
        26.5
      ],
      [
        72.5,
        26.0
      ],
      [
        73.5,
        25.5
      ],
      [
        74.5,
        25.0
      ],
      [
        75.5,
        25.5
      ],
      [
        76.5,
        26.0
      ],
      [
        77.0,
        27.0
      ]
    ]
  },
  {
    "id": "ROW-109",
    "name": "India 400kV Gujarat Coastal Grid",
    "country": "India",
    "region": "West India",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 450,
    "operator": "PowerGrid India / GETCO",
    "status": "Operational",
    "capacity_mw": 2800,
    "coordinates": [
      [
        68.5,
        23.5
      ],
      [
        69.5,
        22.5
      ],
      [
        70.5,
        22.5
      ],
      [
        71.5,
        23.0
      ],
      [
        72.5,
        23.0
      ],
      [
        73.0,
        22.5
      ],
      [
        72.5,
        22.0
      ],
      [
        73.0,
        21.5
      ],
      [
        73.5,
        21.0
      ]
    ]
  },
  {
    "id": "ROW-110",
    "name": "Argentina 500kV Comahue-Buenos Aires",
    "country": "Argentina",
    "region": "Argentina",
    "voltage_kv": 500,
    "type": "AC",
    "length_km": 1100,
    "operator": "Transener",
    "status": "Operational",
    "capacity_mw": 2200,
    "coordinates": [
      [
        -70.0,
        -38.5
      ],
      [
        -68.5,
        -37.0
      ],
      [
        -67.0,
        -36.0
      ],
      [
        -65.5,
        -35.5
      ],
      [
        -64.0,
        -35.5
      ],
      [
        -63.0,
        -35.0
      ],
      [
        -62.0,
        -35.0
      ],
      [
        -60.5,
        -35.0
      ],
      [
        -59.5,
        -34.6
      ],
      [
        -58.5,
        -34.6
      ]
    ]
  },
  {
    "id": "ROW-111",
    "name": "Bolivia 230kV National Backbone",
    "country": "Bolivia",
    "region": "Bolivia",
    "voltage_kv": 230,
    "type": "AC",
    "length_km": 600,
    "operator": "ENDE Bolivia",
    "status": "Operational",
    "capacity_mw": 600,
    "coordinates": [
      [
        -65.0,
        -17.0
      ],
      [
        -65.5,
        -17.5
      ],
      [
        -65.5,
        -18.0
      ],
      [
        -65.0,
        -18.5
      ],
      [
        -64.5,
        -19.0
      ],
      [
        -64.5,
        -19.8
      ],
      [
        -63.5,
        -19.0
      ],
      [
        -63.0,
        -18.0
      ],
      [
        -62.5,
        -17.5
      ],
      [
        -63.0,
        -16.5
      ]
    ]
  },
  {
    "id": "ROW-112",
    "name": "Morocco 400kV Ouarzazate Solar Corridor",
    "country": "Morocco",
    "region": "North Africa",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 300,
    "operator": "ONEE",
    "status": "Operational",
    "capacity_mw": 1000,
    "coordinates": [
      [
        -6.5,
        31.0
      ],
      [
        -6.0,
        31.5
      ],
      [
        -5.5,
        31.8
      ],
      [
        -5.0,
        32.0
      ],
      [
        -4.5,
        32.5
      ],
      [
        -4.0,
        33.0
      ],
      [
        -3.5,
        33.5
      ],
      [
        -3.0,
        34.0
      ]
    ]
  },
  {
    "id": "ROW-113",
    "name": "Tunisia 225kV Central Grid",
    "country": "Tunisia",
    "region": "North Africa",
    "voltage_kv": 225,
    "type": "AC",
    "length_km": 350,
    "operator": "STEG",
    "status": "Operational",
    "capacity_mw": 800,
    "coordinates": [
      [
        8.5,
        36.5
      ],
      [
        9.0,
        36.0
      ],
      [
        9.5,
        35.5
      ],
      [
        10.0,
        35.0
      ],
      [
        10.0,
        34.5
      ],
      [
        9.5,
        34.0
      ],
      [
        9.0,
        33.5
      ],
      [
        8.5,
        33.0
      ],
      [
        8.0,
        33.5
      ]
    ]
  },
  {
    "id": "ROW-114",
    "name": "GCC 400kV Bahrain-Qatar Interconnect",
    "country": "Bahrain",
    "region": "GCC",
    "voltage_kv": 400,
    "type": "AC",
    "length_km": 80,
    "operator": "GCCIA",
    "status": "Operational",
    "capacity_mw": 700,
    "coordinates": [
      [
        50.5,
        26.1
      ],
      [
        50.8,
        25.8
      ],
      [
        51.0,
        25.5
      ],
      [
        51.2,
        25.2
      ],
      [
        51.5,
        25.3
      ]
    ]
  },
  {
    "id": "ROW-115",
    "name": "Sudan 220kV Merowe Backbone",
    "country": "Sudan",
    "region": "East Africa",
    "voltage_kv": 220,
    "type": "AC",
    "length_km": 450,
    "operator": "SEDC Sudan",
    "status": "Operational",
    "capacity_mw": 600,
    "coordinates": [
      [
        30.5,
        18.0
      ],
      [
        31.0,
        17.5
      ],
      [
        31.5,
        17.0
      ],
      [
        32.0,
        16.5
      ],
      [
        32.5,
        16.0
      ],
      [
        32.5,
        15.5
      ],
      [
        32.0,
        15.0
      ],
      [
        31.5,
        14.5
      ],
      [
        31.5,
        14.0
      ],
      [
        32.0,
        13.5
      ]
    ]
  },
  {
    "id": "ROW-116",
    "name": "Ethiopia-Kenya 500kV HVDC Corridor",
    "country": "Ethiopia",
    "region": "East Africa",
    "voltage_kv": 500,
    "type": "HVDC",
    "length_km": 1045,
    "operator": "EEP / KETRACO",
    "status": "Operational",
    "capacity_mw": 2000,
    "coordinates": [
      [
        38.7,
        9.0
      ],
      [
        38.5,
        8.0
      ],
      [
        38.0,
        7.0
      ],
      [
        37.5,
        6.0
      ],
      [
        37.0,
        5.0
      ],
      [
        37.0,
        4.0
      ],
      [
        37.0,
        3.0
      ],
      [
        37.5,
        2.0
      ],
      [
        37.5,
        1.0
      ],
      [
        37.0,
        0.0
      ],
      [
        36.8,
        -1.3
      ]
    ]
  },
  {
    "id": "ROW-117",
    "name": "Angola 220kV Capanda-Luanda Corridor",
    "country": "Angola",
    "region": "Southern Africa",
    "voltage_kv": 220,
    "type": "AC",
    "length_km": 450,
    "operator": "PRODEL Angola",
    "status": "Operational",
    "capacity_mw": 500,
    "coordinates": [
      [
        16.5,
        -9.5
      ],
      [
        15.8,
        -9.0
      ],
      [
        14.8,
        -9.5
      ],
      [
        14.5,
        -10.5
      ],
      [
        14.0,
        -11.5
      ],
      [
        13.5,
        -11.5
      ],
      [
        13.3,
        -11.8
      ],
      [
        13.2,
        -12.5
      ]
    ]
  },
  {
    "id": "ROW-118",
    "name": "Myanmar-Laos 230kV Cross-Border",
    "country": "Myanmar",
    "region": "Southeast Asia",
    "voltage_kv": 230,
    "type": "AC",
    "length_km": 150,
    "operator": "MOEE / EdL",
    "status": "Operational",
    "capacity_mw": 300,
    "coordinates": [
      [
        101.0,
        21.5
      ],
      [
        101.5,
        21.3
      ],
      [
        102.0,
        21.0
      ],
      [
        102.5,
        21.5
      ],
      [
        102.5,
        22.0
      ]
    ]
  }
];

var substations = [
  {
    "id": "SUB-001",
    "name": "Celilo Converter Station",
    "country": "USA",
    "lat": 45.65,
    "lng": -120.98,
    "voltage_kv": 500,
    "type": "converter",
    "operator": "BPA",
    "capacity_mw": 3100
  },
  {
    "id": "SUB-002",
    "name": "Sylmar Converter Station",
    "country": "USA",
    "lat": 34.3,
    "lng": -118.41,
    "voltage_kv": 500,
    "type": "converter",
    "operator": "LADWP",
    "capacity_mw": 3100
  },
  {
    "id": "SUB-003",
    "name": "Intermountain Converter Station",
    "country": "USA",
    "lat": 40.08,
    "lng": -112.53,
    "voltage_kv": 500,
    "type": "converter",
    "operator": "Utah Power",
    "capacity_mw": 1920
  },
  {
    "id": "SUB-004",
    "name": "Adelanto Converter Station",
    "country": "USA",
    "lat": 34.59,
    "lng": -117.47,
    "voltage_kv": 500,
    "type": "converter",
    "operator": "SCE",
    "capacity_mw": 1920
  },
  {
    "id": "SUB-005",
    "name": "Palo Verde 500kV Hub",
    "country": "USA",
    "lat": 33.38,
    "lng": -112.86,
    "voltage_kv": 500,
    "type": "substation",
    "operator": "APS",
    "capacity_mw": 2800
  },
  {
    "id": "SUB-006",
    "name": "Malin 500kV Substation",
    "country": "USA",
    "lat": 42.04,
    "lng": -122.42,
    "voltage_kv": 500,
    "type": "substation",
    "operator": "BPA",
    "capacity_mw": 3200
  },
  {
    "id": "SUB-007",
    "name": "John Day 500kV Substation",
    "country": "USA",
    "lat": 45.71,
    "lng": -120.71,
    "voltage_kv": 500,
    "type": "substation",
    "operator": "BPA",
    "capacity_mw": 2500
  },
  {
    "id": "SUB-008",
    "name": "Eldorado 500kV Switching Station",
    "country": "USA",
    "lat": 35.56,
    "lng": -114.85,
    "voltage_kv": 500,
    "type": "switching",
    "operator": "SCE",
    "capacity_mw": 2400
  },
  {
    "id": "SUB-009",
    "name": "Susquehanna 500kV Substation",
    "country": "USA",
    "lat": 41.1,
    "lng": -76.1,
    "voltage_kv": 500,
    "type": "substation",
    "operator": "PPL",
    "capacity_mw": 2600
  },
  {
    "id": "SUB-010",
    "name": "Amos 765kV Switching Station",
    "country": "USA",
    "lat": 38.47,
    "lng": -81.93,
    "voltage_kv": 765,
    "type": "switching",
    "operator": "AEP",
    "capacity_mw": 4000
  },
  {
    "id": "SUB-011",
    "name": "Indiana-Michigan 765kV Hub",
    "country": "USA",
    "lat": 41.7,
    "lng": -84.8,
    "voltage_kv": 765,
    "type": "substation",
    "operator": "AEP",
    "capacity_mw": 4200
  },
  {
    "id": "SUB-012",
    "name": "Colstrip 500kV Substation",
    "country": "USA",
    "lat": 45.9,
    "lng": -106.65,
    "voltage_kv": 500,
    "type": "substation",
    "operator": "NorthWestern Energy",
    "capacity_mw": 2200
  },
  {
    "id": "SUB-013",
    "name": "Midway 500kV Substation",
    "country": "USA",
    "lat": 35.5,
    "lng": -119.9,
    "voltage_kv": 500,
    "type": "substation",
    "operator": "PG&E",
    "capacity_mw": 2500
  },
  {
    "id": "SUB-014",
    "name": "Minneapolis 345kV Hub",
    "country": "USA",
    "lat": 44.98,
    "lng": -93.27,
    "voltage_kv": 345,
    "type": "substation",
    "operator": "Xcel Energy",
    "capacity_mw": 1600
  },
  {
    "id": "SUB-015",
    "name": "Corpus Christi 345kV Hub",
    "country": "USA",
    "lat": 27.8,
    "lng": -97.4,
    "voltage_kv": 345,
    "type": "substation",
    "operator": "AEP Texas",
    "capacity_mw": 1000
  },
  {
    "id": "SUB-016",
    "name": "Independence 345kV Hub Kansas",
    "country": "USA",
    "lat": 37.22,
    "lng": -95.71,
    "voltage_kv": 345,
    "type": "substation",
    "operator": "Westar Energy",
    "capacity_mw": 1400
  },
  {
    "id": "SUB-017",
    "name": "Plano 345kV Substation ERCOT",
    "country": "USA",
    "lat": 33.02,
    "lng": -96.7,
    "voltage_kv": 345,
    "type": "substation",
    "operator": "Oncor",
    "capacity_mw": 1800
  },
  {
    "id": "SUB-018",
    "name": "Meadow Brook 500kV WV",
    "country": "USA",
    "lat": 38.35,
    "lng": -81.6,
    "voltage_kv": 500,
    "type": "substation",
    "operator": "AEP",
    "capacity_mw": 2400
  },
  {
    "id": "SUB-019",
    "name": "Harry Allen 500kV Nevada",
    "country": "USA",
    "lat": 36.59,
    "lng": -115.02,
    "voltage_kv": 500,
    "type": "substation",
    "operator": "NV Energy",
    "capacity_mw": 1600
  },
  {
    "id": "SUB-020",
    "name": "Denver Area 345kV Hub",
    "country": "USA",
    "lat": 39.74,
    "lng": -104.98,
    "voltage_kv": 345,
    "type": "substation",
    "operator": "Xcel Energy Colorado",
    "capacity_mw": 1800
  },
  {
    "id": "SUB-021",
    "name": "Salt Lake City 345kV Hub",
    "country": "USA",
    "lat": 40.77,
    "lng": -111.89,
    "voltage_kv": 345,
    "type": "substation",
    "operator": "Rocky Mountain Power",
    "capacity_mw": 1800
  },
  {
    "id": "SUB-022",
    "name": "Phoenix Area 500kV Hub",
    "country": "USA",
    "lat": 33.45,
    "lng": -112.07,
    "voltage_kv": 500,
    "type": "substation",
    "operator": "APS",
    "capacity_mw": 2400
  },
  {
    "id": "SUB-023",
    "name": "Tucson 345kV Hub",
    "country": "USA",
    "lat": 32.22,
    "lng": -110.93,
    "voltage_kv": 345,
    "type": "substation",
    "operator": "TEP",
    "capacity_mw": 1200
  },
  {
    "id": "SUB-024",
    "name": "Abilene 345kV Hub ERCOT",
    "country": "USA",
    "lat": 32.45,
    "lng": -99.73,
    "voltage_kv": 345,
    "type": "substation",
    "operator": "Oncor",
    "capacity_mw": 1600
  },
  {
    "id": "SUB-025",
    "name": "New Orleans 345kV Hub",
    "country": "USA",
    "lat": 30.0,
    "lng": -89.97,
    "voltage_kv": 345,
    "type": "substation",
    "operator": "Entergy Louisiana",
    "capacity_mw": 1200
  },
  {
    "id": "SUB-026",
    "name": "Atlanta 500kV Hub",
    "country": "USA",
    "lat": 33.75,
    "lng": -84.39,
    "voltage_kv": 500,
    "type": "substation",
    "operator": "Georgia Power",
    "capacity_mw": 2500
  },
  {
    "id": "SUB-027",
    "name": "Nashville TVA 500kV Hub",
    "country": "USA",
    "lat": 36.16,
    "lng": -86.78,
    "voltage_kv": 500,
    "type": "substation",
    "operator": "TVA",
    "capacity_mw": 2200
  },
  {
    "id": "SUB-028",
    "name": "Charlotte 500kV Hub",
    "country": "USA",
    "lat": 35.23,
    "lng": -80.84,
    "voltage_kv": 500,
    "type": "substation",
    "operator": "Duke Energy",
    "capacity_mw": 2400
  },
  {
    "id": "SUB-029",
    "name": "Washington DC 500kV Hub",
    "country": "USA",
    "lat": 38.89,
    "lng": -77.03,
    "voltage_kv": 500,
    "type": "substation",
    "operator": "Dominion Energy",
    "capacity_mw": 2200
  },
  {
    "id": "SUB-030",
    "name": "Boston 345kV Hub",
    "country": "USA",
    "lat": 42.36,
    "lng": -71.06,
    "voltage_kv": 345,
    "type": "substation",
    "operator": "Eversource",
    "capacity_mw": 1500
  },
  {
    "id": "SUB-031",
    "name": "Chicago 345kV Hub",
    "country": "USA",
    "lat": 41.88,
    "lng": -87.63,
    "voltage_kv": 345,
    "type": "substation",
    "operator": "ComEd",
    "capacity_mw": 2000
  },
  {
    "id": "SUB-032",
    "name": "Detroit 345kV Hub",
    "country": "USA",
    "lat": 42.33,
    "lng": -83.05,
    "voltage_kv": 345,
    "type": "substation",
    "operator": "DTE Energy",
    "capacity_mw": 1800
  },
  {
    "id": "SUB-033",
    "name": "Albuquerque 345kV Hub",
    "country": "USA",
    "lat": 35.08,
    "lng": -106.65,
    "voltage_kv": 345,
    "type": "substation",
    "operator": "PNM",
    "capacity_mw": 1200
  },
  {
    "id": "SUB-034",
    "name": "Portland OR 500kV Hub",
    "country": "USA",
    "lat": 45.52,
    "lng": -122.68,
    "voltage_kv": 500,
    "type": "substation",
    "operator": "PGE Oregon",
    "capacity_mw": 2200
  },
  {
    "id": "SUB-035",
    "name": "Seattle 500kV Hub",
    "country": "USA",
    "lat": 47.61,
    "lng": -122.33,
    "voltage_kv": 500,
    "type": "substation",
    "operator": "PSE",
    "capacity_mw": 2000
  },
  {
    "id": "SUB-036",
    "name": "Sacramento 500kV Hub",
    "country": "USA",
    "lat": 38.58,
    "lng": -121.49,
    "voltage_kv": 500,
    "type": "substation",
    "operator": "SMUD / PG&E",
    "capacity_mw": 2000
  },
  {
    "id": "SUB-037",
    "name": "Los Angeles 500kV Hub",
    "country": "USA",
    "lat": 34.05,
    "lng": -118.24,
    "voltage_kv": 500,
    "type": "substation",
    "operator": "LADWP / SCE",
    "capacity_mw": 3000
  },
  {
    "id": "SUB-038",
    "name": "San Diego 230kV Hub",
    "country": "USA",
    "lat": 32.72,
    "lng": -117.16,
    "voltage_kv": 230,
    "type": "substation",
    "operator": "SDG&E",
    "capacity_mw": 1000
  },
  {
    "id": "SUB-039",
    "name": "Las Vegas 345kV Hub",
    "country": "USA",
    "lat": 36.17,
    "lng": -115.14,
    "voltage_kv": 345,
    "type": "substation",
    "operator": "NV Energy",
    "capacity_mw": 1600
  },
  {
    "id": "SUB-040",
    "name": "Memphis TVA 500kV Hub",
    "country": "USA",
    "lat": 35.15,
    "lng": -90.05,
    "voltage_kv": 500,
    "type": "substation",
    "operator": "TVA",
    "capacity_mw": 2000
  },
  {
    "id": "SUB-041",
    "name": "Radisson 735kV Hydro-Quebec",
    "country": "Canada",
    "lat": 53.82,
    "lng": -77.63,
    "voltage_kv": 735,
    "type": "substation",
    "operator": "Hydro-Quebec",
    "capacity_mw": 5200
  },
  {
    "id": "SUB-042",
    "name": "Nicolet 735kV Hydro-Quebec",
    "country": "Canada",
    "lat": 46.23,
    "lng": -72.63,
    "voltage_kv": 735,
    "type": "substation",
    "operator": "Hydro-Quebec",
    "capacity_mw": 5000
  },
  {
    "id": "SUB-043",
    "name": "Chateauguay HVDC Tie Hydro-Quebec",
    "country": "Canada",
    "lat": 45.32,
    "lng": -73.75,
    "voltage_kv": 735,
    "type": "converter",
    "operator": "Hydro-Quebec",
    "capacity_mw": 2000
  },
  {
    "id": "SUB-044",
    "name": "Dorsey 500kV HVDC Manitoba Hydro",
    "country": "Canada",
    "lat": 49.88,
    "lng": -97.23,
    "voltage_kv": 500,
    "type": "converter",
    "operator": "Manitoba Hydro",
    "capacity_mw": 3620
  },
  {
    "id": "SUB-045",
    "name": "Nelson River Converter Manitoba",
    "country": "Canada",
    "lat": 56.5,
    "lng": -95.8,
    "voltage_kv": 500,
    "type": "converter",
    "operator": "Manitoba Hydro",
    "capacity_mw": 3620
  },
  {
    "id": "SUB-046",
    "name": "Darlington 500kV Hydro One",
    "country": "Canada",
    "lat": 43.87,
    "lng": -78.72,
    "voltage_kv": 500,
    "type": "substation",
    "operator": "Hydro One",
    "capacity_mw": 2800
  },
  {
    "id": "SUB-047",
    "name": "Bruce 500kV Hydro One",
    "country": "Canada",
    "lat": 44.32,
    "lng": -81.58,
    "voltage_kv": 500,
    "type": "substation",
    "operator": "Hydro One",
    "capacity_mw": 3000
  },
  {
    "id": "SUB-048",
    "name": "Keephills 500kV AltaLink Alberta",
    "country": "Canada",
    "lat": 53.55,
    "lng": -114.42,
    "voltage_kv": 500,
    "type": "substation",
    "operator": "AltaLink",
    "capacity_mw": 2000
  },
  {
    "id": "SUB-049",
    "name": "Peace Canyon 500kV BC Hydro",
    "country": "Canada",
    "lat": 56.25,
    "lng": -122.05,
    "voltage_kv": 500,
    "type": "substation",
    "operator": "BC Hydro",
    "capacity_mw": 2800
  },
  {
    "id": "SUB-050",
    "name": "Churchill Falls 735kV Nalcor",
    "country": "Canada",
    "lat": 53.55,
    "lng": -64.0,
    "voltage_kv": 735,
    "type": "substation",
    "operator": "Nalcor Energy",
    "capacity_mw": 5400
  },
  {
    "id": "SUB-051",
    "name": "Grain 400kV National Grid UK",
    "country": "UK",
    "lat": 51.44,
    "lng": 0.72,
    "voltage_kv": 400,
    "type": "substation",
    "operator": "National Grid",
    "capacity_mw": 2400
  },
  {
    "id": "SUB-052",
    "name": "Beauly 400kV Scotland",
    "country": "UK",
    "lat": 57.48,
    "lng": -4.47,
    "voltage_kv": 400,
    "type": "substation",
    "operator": "Scottish HydroElectric",
    "capacity_mw": 1800
  },
  {
    "id": "SUB-053",
    "name": "IFA HVDC Terminal UK",
    "country": "UK",
    "lat": 50.91,
    "lng": 0.96,
    "voltage_kv": 400,
    "type": "converter",
    "operator": "National Grid / RTE",
    "capacity_mw": 2000
  },
  {
    "id": "SUB-054",
    "name": "Viking Link Terminal UK",
    "country": "UK",
    "lat": 52.99,
    "lng": -0.17,
    "voltage_kv": 525,
    "type": "converter",
    "operator": "National Grid",
    "capacity_mw": 1400
  },
  {
    "id": "SUB-055",
    "name": "BritNed Terminal Netherlands",
    "country": "Netherlands",
    "lat": 51.93,
    "lng": 4.1,
    "voltage_kv": 450,
    "type": "converter",
    "operator": "TenneT / BritNed",
    "capacity_mw": 1000
  },
  {
    "id": "SUB-056",
    "name": "NordLink Terminal Germany",
    "country": "Germany",
    "lat": 53.93,
    "lng": 9.38,
    "voltage_kv": 525,
    "type": "converter",
    "operator": "TenneT",
    "capacity_mw": 1400
  },
  {
    "id": "SUB-057",
    "name": "NordLink Terminal Norway",
    "country": "Norway",
    "lat": 58.27,
    "lng": 6.65,
    "voltage_kv": 525,
    "type": "converter",
    "operator": "Statnett",
    "capacity_mw": 1400
  },
  {
    "id": "SUB-058",
    "name": "NorNed Terminal Norway",
    "country": "Norway",
    "lat": 58.3,
    "lng": 6.6,
    "voltage_kv": 420,
    "type": "converter",
    "operator": "Statnett",
    "capacity_mw": 700
  },
  {
    "id": "SUB-059",
    "name": "Viking Link Terminal Denmark",
    "country": "Denmark",
    "lat": 55.1,
    "lng": 9.17,
    "voltage_kv": 525,
    "type": "converter",
    "operator": "Energinet",
    "capacity_mw": 1400
  },
  {
    "id": "SUB-060",
    "name": "Paris 400kV Hub RTE",
    "country": "France",
    "lat": 48.86,
    "lng": 2.35,
    "voltage_kv": 400,
    "type": "substation",
    "operator": "RTE",
    "capacity_mw": 3500
  },
  {
    "id": "SUB-061",
    "name": "Boutre 400kV RTE Provence",
    "country": "France",
    "lat": 43.63,
    "lng": 5.88,
    "voltage_kv": 400,
    "type": "substation",
    "operator": "RTE",
    "capacity_mw": 2000
  },
  {
    "id": "SUB-062",
    "name": "Grand-Couronne 400kV RTE",
    "country": "France",
    "lat": 49.35,
    "lng": 1.01,
    "voltage_kv": 400,
    "type": "substation",
    "operator": "RTE",
    "capacity_mw": 2200
  },
  {
    "id": "SUB-063",
    "name": "IFA Terminal France Bidart",
    "country": "France",
    "lat": 43.44,
    "lng": -1.57,
    "voltage_kv": 400,
    "type": "converter",
    "operator": "RTE",
    "capacity_mw": 1400
  },
  {
    "id": "SUB-064",
    "name": "Barcelona 400kV Hub REE",
    "country": "Spain",
    "lat": 41.38,
    "lng": 2.15,
    "voltage_kv": 400,
    "type": "substation",
    "operator": "REE",
    "capacity_mw": 3000
  },
  {
    "id": "SUB-065",
    "name": "Madrid 400kV Hub REE",
    "country": "Spain",
    "lat": 40.42,
    "lng": -3.7,
    "voltage_kv": 400,
    "type": "substation",
    "operator": "REE",
    "capacity_mw": 3500
  },
  {
    "id": "SUB-066",
    "name": "Lisbon 400kV Hub REN",
    "country": "Portugal",
    "lat": 38.72,
    "lng": -9.14,
    "voltage_kv": 400,
    "type": "substation",
    "operator": "REN",
    "capacity_mw": 2000
  },
  {
    "id": "SUB-067",
    "name": "Brussels 380kV Hub Elia",
    "country": "Belgium",
    "lat": 50.85,
    "lng": 4.35,
    "voltage_kv": 380,
    "type": "substation",
    "operator": "Elia",
    "capacity_mw": 2800
  },
  {
    "id": "SUB-068",
    "name": "Amsterdam 380kV Hub TenneT",
    "country": "Netherlands",
    "lat": 52.37,
    "lng": 4.9,
    "voltage_kv": 380,
    "type": "substation",
    "operator": "TenneT",
    "capacity_mw": 3000
  },
  {
    "id": "SUB-069",
    "name": "Bern 380kV Hub Swissgrid",
    "country": "Switzerland",
    "lat": 46.95,
    "lng": 7.44,
    "voltage_kv": 380,
    "type": "substation",
    "operator": "Swissgrid",
    "capacity_mw": 2200
  },
  {
    "id": "SUB-070",
    "name": "Vienna 380kV Hub APG",
    "country": "Austria",
    "lat": 48.21,
    "lng": 16.37,
    "voltage_kv": 380,
    "type": "substation",
    "operator": "APG",
    "capacity_mw": 2500
  },
  {
    "id": "SUB-071",
    "name": "Hamburg 380kV TenneT",
    "country": "Germany",
    "lat": 53.55,
    "lng": 10.0,
    "voltage_kv": 380,
    "type": "substation",
    "operator": "TenneT",
    "capacity_mw": 3200
  },
  {
    "id": "SUB-072",
    "name": "Berlin 380kV Hub 50Hertz",
    "country": "Germany",
    "lat": 52.52,
    "lng": 13.4,
    "voltage_kv": 380,
    "type": "substation",
    "operator": "50Hertz",
    "capacity_mw": 3500
  },
  {
    "id": "SUB-073",
    "name": "Frankfurt 380kV Hub Amprion",
    "country": "Germany",
    "lat": 50.11,
    "lng": 8.68,
    "voltage_kv": 380,
    "type": "substation",
    "operator": "Amprion",
    "capacity_mw": 3000
  },
  {
    "id": "SUB-074",
    "name": "Munich 380kV Hub TenneT",
    "country": "Germany",
    "lat": 48.14,
    "lng": 11.58,
    "voltage_kv": 380,
    "type": "substation",
    "operator": "TenneT",
    "capacity_mw": 2800
  },
  {
    "id": "SUB-075",
    "name": "Copenhagen 400kV Hub Energinet",
    "country": "Denmark",
    "lat": 55.68,
    "lng": 12.57,
    "voltage_kv": 400,
    "type": "substation",
    "operator": "Energinet",
    "capacity_mw": 2000
  },
  {
    "id": "SUB-076",
    "name": "Oslo 420kV Hub Statnett",
    "country": "Norway",
    "lat": 59.9,
    "lng": 10.75,
    "voltage_kv": 420,
    "type": "substation",
    "operator": "Statnett",
    "capacity_mw": 3000
  },
  {
    "id": "SUB-077",
    "name": "Stockholm 400kV Hub Svenska Kraftnat",
    "country": "Sweden",
    "lat": 59.33,
    "lng": 18.07,
    "voltage_kv": 400,
    "type": "substation",
    "operator": "Svenska Kraftnat",
    "capacity_mw": 3500
  },
  {
    "id": "SUB-078",
    "name": "Helsinki 400kV Hub Fingrid",
    "country": "Finland",
    "lat": 60.17,
    "lng": 24.95,
    "voltage_kv": 400,
    "type": "substation",
    "operator": "Fingrid",
    "capacity_mw": 2500
  },
  {
    "id": "SUB-079",
    "name": "Warsaw 400kV Hub PSE",
    "country": "Poland",
    "lat": 52.23,
    "lng": 21.01,
    "voltage_kv": 400,
    "type": "substation",
    "operator": "PSE",
    "capacity_mw": 2500
  },
  {
    "id": "SUB-080",
    "name": "Prague 400kV Hub CEPS",
    "country": "Czech Republic",
    "lat": 50.08,
    "lng": 14.42,
    "voltage_kv": 400,
    "type": "substation",
    "operator": "CEPS",
    "capacity_mw": 2200
  },
  {
    "id": "SUB-081",
    "name": "Bucharest 400kV Hub Transelectrica",
    "country": "Romania",
    "lat": 44.43,
    "lng": 26.1,
    "voltage_kv": 400,
    "type": "substation",
    "operator": "Transelectrica",
    "capacity_mw": 2000
  },
  {
    "id": "SUB-082",
    "name": "Budapest 400kV Hub MAVIR",
    "country": "Hungary",
    "lat": 47.5,
    "lng": 19.04,
    "voltage_kv": 400,
    "type": "substation",
    "operator": "MAVIR",
    "capacity_mw": 2000
  },
  {
    "id": "SUB-083",
    "name": "Belgrade 400kV Hub EMS",
    "country": "Serbia",
    "lat": 44.81,
    "lng": 20.46,
    "voltage_kv": 400,
    "type": "substation",
    "operator": "EMS",
    "capacity_mw": 1800
  },
  {
    "id": "SUB-084",
    "name": "Zagreb 400kV Hub HOPS",
    "country": "Croatia",
    "lat": 45.81,
    "lng": 15.98,
    "voltage_kv": 400,
    "type": "substation",
    "operator": "HOPS",
    "capacity_mw": 1800
  },
  {
    "id": "SUB-085",
    "name": "Athens 400kV Hub IPTO",
    "country": "Greece",
    "lat": 37.98,
    "lng": 23.73,
    "voltage_kv": 400,
    "type": "substation",
    "operator": "IPTO",
    "capacity_mw": 1500
  },
  {
    "id": "SUB-086",
    "name": "Sofia 400kV Hub ESO",
    "country": "Bulgaria",
    "lat": 42.7,
    "lng": 23.32,
    "voltage_kv": 400,
    "type": "substation",
    "operator": "ESO",
    "capacity_mw": 1600
  },
  {
    "id": "SUB-087",
    "name": "Kyiv 750kV Hub Ukrenergo",
    "country": "Ukraine",
    "lat": 50.45,
    "lng": 30.52,
    "voltage_kv": 750,
    "type": "substation",
    "operator": "Ukrenergo",
    "capacity_mw": 5000
  },
  {
    "id": "SUB-088",
    "name": "Ljubljana 400kV Hub ELES",
    "country": "Slovenia",
    "lat": 46.05,
    "lng": 14.51,
    "voltage_kv": 400,
    "type": "substation",
    "operator": "ELES",
    "capacity_mw": 1200
  },
  {
    "id": "SUB-089",
    "name": "Rome 380kV Hub Terna",
    "country": "Italy",
    "lat": 41.9,
    "lng": 12.5,
    "voltage_kv": 380,
    "type": "substation",
    "operator": "Terna",
    "capacity_mw": 2000
  },
  {
    "id": "SUB-090",
    "name": "Milan 380kV Hub Terna",
    "country": "Italy",
    "lat": 45.46,
    "lng": 9.19,
    "voltage_kv": 380,
    "type": "substation",
    "operator": "Terna",
    "capacity_mw": 3000
  },
  {
    "id": "SUB-091",
    "name": "Sardinia HVDC Terminal Terna",
    "country": "Italy",
    "lat": 40.65,
    "lng": 8.75,
    "voltage_kv": 150,
    "type": "converter",
    "operator": "Terna",
    "capacity_mw": 450
  },
  {
    "id": "SUB-092",
    "name": "Tallinn 330kV Hub Elering",
    "country": "Estonia",
    "lat": 59.44,
    "lng": 24.75,
    "voltage_kv": 330,
    "type": "substation",
    "operator": "Elering",
    "capacity_mw": 1000
  },
  {
    "id": "SUB-093",
    "name": "Riga 330kV Hub AST",
    "country": "Latvia",
    "lat": 56.95,
    "lng": 24.11,
    "voltage_kv": 330,
    "type": "substation",
    "operator": "AST",
    "capacity_mw": 800
  },
  {
    "id": "SUB-094",
    "name": "Vilnius 330kV Hub Litgrid",
    "country": "Lithuania",
    "lat": 54.69,
    "lng": 25.28,
    "voltage_kv": 330,
    "type": "substation",
    "operator": "Litgrid",
    "capacity_mw": 800
  },
  {
    "id": "SUB-095",
    "name": "Zhundong ±1100kV Converter",
    "country": "China",
    "lat": 44.5,
    "lng": 87.0,
    "voltage_kv": 1100,
    "type": "converter",
    "operator": "State Grid",
    "capacity_mw": 12000
  },
  {
    "id": "SUB-096",
    "name": "Wannan ±1100kV Converter",
    "country": "China",
    "lat": 31.0,
    "lng": 117.5,
    "voltage_kv": 1100,
    "type": "converter",
    "operator": "State Grid",
    "capacity_mw": 12000
  },
  {
    "id": "SUB-097",
    "name": "Hami ±800kV Converter",
    "country": "China",
    "lat": 42.8,
    "lng": 93.5,
    "voltage_kv": 800,
    "type": "converter",
    "operator": "State Grid",
    "capacity_mw": 8000
  },
  {
    "id": "SUB-098",
    "name": "Zhengzhou ±800kV Converter",
    "country": "China",
    "lat": 34.75,
    "lng": 113.65,
    "voltage_kv": 800,
    "type": "converter",
    "operator": "State Grid",
    "capacity_mw": 8000
  },
  {
    "id": "SUB-099",
    "name": "Xiluodu ±800kV Converter",
    "country": "China",
    "lat": 28.0,
    "lng": 103.5,
    "voltage_kv": 800,
    "type": "converter",
    "operator": "State Grid",
    "capacity_mw": 7200
  },
  {
    "id": "SUB-100",
    "name": "Shanghai 500kV Hub",
    "country": "China",
    "lat": 31.23,
    "lng": 121.48,
    "voltage_kv": 500,
    "type": "substation",
    "operator": "State Grid",
    "capacity_mw": 5000
  },
  {
    "id": "SUB-101",
    "name": "Beijing 500kV Hub",
    "country": "China",
    "lat": 39.91,
    "lng": 116.39,
    "voltage_kv": 500,
    "type": "substation",
    "operator": "State Grid",
    "capacity_mw": 6000
  },
  {
    "id": "SUB-102",
    "name": "Guangzhou 500kV Hub",
    "country": "China",
    "lat": 23.13,
    "lng": 113.27,
    "voltage_kv": 500,
    "type": "substation",
    "operator": "China Southern Grid",
    "capacity_mw": 5000
  },
  {
    "id": "SUB-103",
    "name": "Chengdu 500kV Hub",
    "country": "China",
    "lat": 30.67,
    "lng": 104.07,
    "voltage_kv": 500,
    "type": "substation",
    "operator": "State Grid",
    "capacity_mw": 4000
  },
  {
    "id": "SUB-104",
    "name": "Wuhan 500kV Hub",
    "country": "China",
    "lat": 30.59,
    "lng": 114.31,
    "voltage_kv": 500,
    "type": "substation",
    "operator": "State Grid",
    "capacity_mw": 4000
  },
  {
    "id": "SUB-105",
    "name": "Delhi 765kV Hub PowerGrid",
    "country": "India",
    "lat": 28.61,
    "lng": 77.21,
    "voltage_kv": 765,
    "type": "substation",
    "operator": "PowerGrid India",
    "capacity_mw": 4000
  },
  {
    "id": "SUB-106",
    "name": "Mumbai 400kV Hub Tata Power",
    "country": "India",
    "lat": 19.08,
    "lng": 72.88,
    "voltage_kv": 400,
    "type": "substation",
    "operator": "Tata Power",
    "capacity_mw": 2000
  },
  {
    "id": "SUB-107",
    "name": "Champa 800kV Converter PowerGrid",
    "country": "India",
    "lat": 22.0,
    "lng": 82.5,
    "voltage_kv": 800,
    "type": "converter",
    "operator": "PowerGrid India",
    "capacity_mw": 3000
  },
  {
    "id": "SUB-108",
    "name": "Kurukshetra 800kV Converter",
    "country": "India",
    "lat": 30.0,
    "lng": 76.5,
    "voltage_kv": 800,
    "type": "converter",
    "operator": "PowerGrid India",
    "capacity_mw": 3000
  },
  {
    "id": "SUB-109",
    "name": "Hyderabad 400kV Hub PowerGrid",
    "country": "India",
    "lat": 17.38,
    "lng": 78.49,
    "voltage_kv": 400,
    "type": "substation",
    "operator": "PowerGrid India",
    "capacity_mw": 2500
  },
  {
    "id": "SUB-110",
    "name": "Bangalore 400kV Hub PowerGrid",
    "country": "India",
    "lat": 12.97,
    "lng": 77.59,
    "voltage_kv": 400,
    "type": "substation",
    "operator": "PowerGrid India",
    "capacity_mw": 2000
  },
  {
    "id": "SUB-111",
    "name": "Xingu ±800kV Converter Norte Energia",
    "country": "Brazil",
    "lat": -3.5,
    "lng": -52.0,
    "voltage_kv": 800,
    "type": "converter",
    "operator": "Norte Energia",
    "capacity_mw": 8000
  },
  {
    "id": "SUB-112",
    "name": "Itaipu 765kV Station",
    "country": "Brazil",
    "lat": -25.4,
    "lng": -54.5,
    "voltage_kv": 765,
    "type": "substation",
    "operator": "Itaipu Binacional",
    "capacity_mw": 14000
  },
  {
    "id": "SUB-113",
    "name": "Sao Paulo 500kV Hub",
    "country": "Brazil",
    "lat": -23.55,
    "lng": -46.63,
    "voltage_kv": 500,
    "type": "substation",
    "operator": "Eletropaulo",
    "capacity_mw": 4000
  },
  {
    "id": "SUB-114",
    "name": "Rio de Janeiro 500kV Hub",
    "country": "Brazil",
    "lat": -22.9,
    "lng": -43.17,
    "voltage_kv": 500,
    "type": "substation",
    "operator": "Eletrobras",
    "capacity_mw": 3000
  },
  {
    "id": "SUB-115",
    "name": "Apollo 400kV Converter Eskom",
    "country": "South Africa",
    "lat": -25.93,
    "lng": 28.05,
    "voltage_kv": 400,
    "type": "converter",
    "operator": "Eskom",
    "capacity_mw": 1920
  },
  {
    "id": "SUB-116",
    "name": "Cahora Bassa 533kV HCB Mozambique",
    "country": "Mozambique",
    "lat": -15.62,
    "lng": 32.5,
    "voltage_kv": 533,
    "type": "converter",
    "operator": "HCB / Eskom",
    "capacity_mw": 2075
  },
  {
    "id": "SUB-117",
    "name": "Johannesburg 400kV Hub Eskom",
    "country": "South Africa",
    "lat": -26.2,
    "lng": 28.04,
    "voltage_kv": 400,
    "type": "substation",
    "operator": "Eskom",
    "capacity_mw": 3000
  },
  {
    "id": "SUB-118",
    "name": "Cape Town 400kV Hub Eskom",
    "country": "South Africa",
    "lat": -33.93,
    "lng": 18.42,
    "voltage_kv": 400,
    "type": "substation",
    "operator": "Eskom",
    "capacity_mw": 1500
  },
  {
    "id": "SUB-119",
    "name": "Tokyo 500kV Hub TEPCO",
    "country": "Japan",
    "lat": 35.69,
    "lng": 139.69,
    "voltage_kv": 500,
    "type": "substation",
    "operator": "TEPCO",
    "capacity_mw": 4500
  },
  {
    "id": "SUB-120",
    "name": "Osaka 500kV Hub Kansai Electric",
    "country": "Japan",
    "lat": 34.7,
    "lng": 135.5,
    "voltage_kv": 500,
    "type": "substation",
    "operator": "Kansai Electric",
    "capacity_mw": 4000
  },
  {
    "id": "SUB-121",
    "name": "Sakuma HVDC Tie Japan",
    "country": "Japan",
    "lat": 35.56,
    "lng": 137.87,
    "voltage_kv": 300,
    "type": "converter",
    "operator": "TEPCO / Chubu Electric",
    "capacity_mw": 300
  },
  {
    "id": "SUB-122",
    "name": "Dubai 400kV Hub DEWA",
    "country": "UAE",
    "lat": 25.2,
    "lng": 55.27,
    "voltage_kv": 400,
    "type": "substation",
    "operator": "DEWA",
    "capacity_mw": 3000
  },
  {
    "id": "SUB-123",
    "name": "Abu Dhabi 400kV Hub TRANSCO",
    "country": "UAE",
    "lat": 24.47,
    "lng": 54.37,
    "voltage_kv": 400,
    "type": "substation",
    "operator": "TRANSCO",
    "capacity_mw": 3500
  },
  {
    "id": "SUB-124",
    "name": "Riyadh 380kV Hub SEC",
    "country": "Saudi Arabia",
    "lat": 24.69,
    "lng": 46.72,
    "voltage_kv": 380,
    "type": "substation",
    "operator": "SEC",
    "capacity_mw": 4000
  },
  {
    "id": "SUB-125",
    "name": "Al-Fadhili 380kV SEC",
    "country": "Saudi Arabia",
    "lat": 26.97,
    "lng": 49.12,
    "voltage_kv": 380,
    "type": "substation",
    "operator": "SEC",
    "capacity_mw": 3500
  },
  {
    "id": "SUB-126",
    "name": "Bangkok 500kV Hub EGAT",
    "country": "Thailand",
    "lat": 13.76,
    "lng": 100.5,
    "voltage_kv": 500,
    "type": "substation",
    "operator": "EGAT",
    "capacity_mw": 2500
  },
  {
    "id": "SUB-127",
    "name": "Jakarta 500kV Hub PLN",
    "country": "Indonesia",
    "lat": -6.2,
    "lng": 106.82,
    "voltage_kv": 500,
    "type": "substation",
    "operator": "PLN",
    "capacity_mw": 3000
  },
  {
    "id": "SUB-128",
    "name": "Ho Chi Minh City 500kV Hub EVN",
    "country": "Vietnam",
    "lat": 10.82,
    "lng": 106.63,
    "voltage_kv": 500,
    "type": "substation",
    "operator": "EVN",
    "capacity_mw": 2500
  },
  {
    "id": "SUB-129",
    "name": "Kuala Lumpur 275kV Hub TNB",
    "country": "Malaysia",
    "lat": 3.15,
    "lng": 101.72,
    "voltage_kv": 275,
    "type": "substation",
    "operator": "TNB",
    "capacity_mw": 2500
  },
  {
    "id": "SUB-130",
    "name": "Seoul 345kV Hub KEPCO",
    "country": "South Korea",
    "lat": 37.57,
    "lng": 126.98,
    "voltage_kv": 345,
    "type": "substation",
    "operator": "KEPCO",
    "capacity_mw": 4000
  },
  {
    "id": "SUB-131",
    "name": "Taipei 345kV Hub Taiwan Power",
    "country": "Taiwan",
    "lat": 25.04,
    "lng": 121.56,
    "voltage_kv": 345,
    "type": "substation",
    "operator": "Taiwan Power Co",
    "capacity_mw": 2800
  },
  {
    "id": "SUB-132",
    "name": "Istanbul 380kV Hub TEIAS",
    "country": "Turkey",
    "lat": 41.02,
    "lng": 28.98,
    "voltage_kv": 380,
    "type": "substation",
    "operator": "TEIAS",
    "capacity_mw": 3000
  },
  {
    "id": "SUB-133",
    "name": "Ankara 380kV Hub TEIAS",
    "country": "Turkey",
    "lat": 39.92,
    "lng": 32.85,
    "voltage_kv": 380,
    "type": "substation",
    "operator": "TEIAS",
    "capacity_mw": 2500
  },
  {
    "id": "SUB-134",
    "name": "Tehran 400kV Hub Tavanir",
    "country": "Iran",
    "lat": 35.7,
    "lng": 51.42,
    "voltage_kv": 400,
    "type": "substation",
    "operator": "Tavanir",
    "capacity_mw": 2500
  },
  {
    "id": "SUB-135",
    "name": "Karachi 500kV Hub HESCO",
    "country": "Pakistan",
    "lat": 24.86,
    "lng": 67.01,
    "voltage_kv": 500,
    "type": "substation",
    "operator": "HESCO",
    "capacity_mw": 2000
  },
  {
    "id": "SUB-136",
    "name": "Lahore 500kV Hub NTDC",
    "country": "Pakistan",
    "lat": 31.52,
    "lng": 74.35,
    "voltage_kv": 500,
    "type": "substation",
    "operator": "NTDC",
    "capacity_mw": 2000
  },
  {
    "id": "SUB-137",
    "name": "Cairo 500kV Hub EETC",
    "country": "Egypt",
    "lat": 30.06,
    "lng": 31.25,
    "voltage_kv": 500,
    "type": "substation",
    "operator": "EETC",
    "capacity_mw": 2500
  },
  {
    "id": "SUB-138",
    "name": "Perth 330kV Hub Western Power",
    "country": "Australia",
    "lat": -31.95,
    "lng": 115.86,
    "voltage_kv": 330,
    "type": "substation",
    "operator": "Western Power",
    "capacity_mw": 1500
  },
  {
    "id": "SUB-139",
    "name": "Sydney 330kV Hub Transgrid",
    "country": "Australia",
    "lat": -33.87,
    "lng": 151.21,
    "voltage_kv": 330,
    "type": "substation",
    "operator": "Transgrid",
    "capacity_mw": 2200
  },
  {
    "id": "SUB-140",
    "name": "Melbourne 330kV Hub AusNet",
    "country": "Australia",
    "lat": -37.81,
    "lng": 144.96,
    "voltage_kv": 330,
    "type": "substation",
    "operator": "AusNet Services",
    "capacity_mw": 2000
  },
  {
    "id": "SUB-141",
    "name": "Brisbane 275kV Hub Powerlink",
    "country": "Australia",
    "lat": -27.47,
    "lng": 153.02,
    "voltage_kv": 275,
    "type": "substation",
    "operator": "Powerlink Queensland",
    "capacity_mw": 2000
  },
  {
    "id": "SUB-142",
    "name": "Snowy Mountains 330kV Snowy Hydro",
    "country": "Australia",
    "lat": -36.4,
    "lng": 148.25,
    "voltage_kv": 330,
    "type": "substation",
    "operator": "Snowy Hydro",
    "capacity_mw": 4100
  },
  {
    "id": "SUB-143",
    "name": "Manila 230kV Hub NGCP",
    "country": "Philippines",
    "lat": 14.6,
    "lng": 121.0,
    "voltage_kv": 230,
    "type": "substation",
    "operator": "NGCP",
    "capacity_mw": 2000
  },
  {
    "id": "SUB-144",
    "name": "Singapore 400kV Hub SP Group",
    "country": "Singapore",
    "lat": 1.35,
    "lng": 103.82,
    "voltage_kv": 400,
    "type": "substation",
    "operator": "SP Group",
    "capacity_mw": 2200
  },
  {
    "id": "SUB-145",
    "name": "Bogota 500kV Hub ISA Colombia",
    "country": "Colombia",
    "lat": 4.71,
    "lng": -74.07,
    "voltage_kv": 500,
    "type": "substation",
    "operator": "ISA Colombia",
    "capacity_mw": 2000
  },
  {
    "id": "SUB-146",
    "name": "Santiago 220kV Hub Transelec",
    "country": "Chile",
    "lat": -33.46,
    "lng": -70.65,
    "voltage_kv": 220,
    "type": "substation",
    "operator": "Transelec",
    "capacity_mw": 2000
  },
  {
    "id": "SUB-147",
    "name": "Buenos Aires 500kV Hub Transener",
    "country": "Argentina",
    "lat": -34.61,
    "lng": -58.38,
    "voltage_kv": 500,
    "type": "substation",
    "operator": "Transener",
    "capacity_mw": 2500
  },
  {
    "id": "SUB-148",
    "name": "Wellington 110kV Hub Transpower NZ",
    "country": "New Zealand",
    "lat": -41.28,
    "lng": 174.78,
    "voltage_kv": 110,
    "type": "substation",
    "operator": "Transpower",
    "capacity_mw": 1200
  },
  {
    "id": "SUB-149",
    "name": "Benmore 220kV South Island NZ",
    "country": "New Zealand",
    "lat": -44.52,
    "lng": 170.22,
    "voltage_kv": 220,
    "type": "substation",
    "operator": "Transpower",
    "capacity_mw": 1200
  },
  {
    "id": "SUB-150",
    "name": "Nairobi 400kV Hub KETRACO",
    "country": "Kenya",
    "lat": -1.29,
    "lng": 36.82,
    "voltage_kv": 400,
    "type": "substation",
    "operator": "KETRACO",
    "capacity_mw": 600
  },
  {
    "id": "SUB-151",
    "name": "Lagos 330kV Hub TCN Nigeria",
    "country": "Nigeria",
    "lat": 6.52,
    "lng": 3.38,
    "voltage_kv": 330,
    "type": "substation",
    "operator": "TCN Nigeria",
    "capacity_mw": 1000
  },
  {
    "id": "SUB-152",
    "name": "Casablanca 400kV Hub ONEE",
    "country": "Morocco",
    "lat": 33.59,
    "lng": -7.62,
    "voltage_kv": 400,
    "type": "substation",
    "operator": "ONEE",
    "capacity_mw": 1500
  },
  {
    "id": "SUB-153",
    "name": "Mexico City 400kV Hub CFE",
    "country": "Mexico",
    "lat": 19.43,
    "lng": -99.13,
    "voltage_kv": 400,
    "type": "substation",
    "operator": "CFE",
    "capacity_mw": 3000
  },
  {
    "id": "SUB-154",
    "name": "Guadalajara 400kV Hub CFE",
    "country": "Mexico",
    "lat": 20.68,
    "lng": -103.35,
    "voltage_kv": 400,
    "type": "substation",
    "operator": "CFE",
    "capacity_mw": 2000
  },
  {
    "id": "SUB-155",
    "name": "Monterrey 400kV Hub CFE",
    "country": "Mexico",
    "lat": 25.67,
    "lng": -100.31,
    "voltage_kv": 400,
    "type": "substation",
    "operator": "CFE",
    "capacity_mw": 2000
  },
  {
    "id": "SUB-156",
    "name": "Lima 220kV Hub REP Peru",
    "country": "Peru",
    "lat": -12.05,
    "lng": -77.03,
    "voltage_kv": 220,
    "type": "substation",
    "operator": "REP Peru",
    "capacity_mw": 1200
  },
  {
    "id": "SUB-157",
    "name": "Brasilia 500kV Hub ONS",
    "country": "Brazil",
    "lat": -15.78,
    "lng": -47.93,
    "voltage_kv": 500,
    "type": "substation",
    "operator": "ONS Brazil",
    "capacity_mw": 2500
  },
  {
    "id": "SUB-158",
    "name": "Addis Ababa 400kV Hub EEP",
    "country": "Ethiopia",
    "lat": 9.03,
    "lng": 38.74,
    "voltage_kv": 400,
    "type": "substation",
    "operator": "EEP Ethiopia",
    "capacity_mw": 800
  },
  {
    "id": "SUB-159",
    "name": "Kathmandu 132kV Hub NEA Nepal",
    "country": "Nepal",
    "lat": 27.71,
    "lng": 85.31,
    "voltage_kv": 132,
    "type": "substation",
    "operator": "NEA Nepal",
    "capacity_mw": 500
  },
  {
    "id": "SUB-160",
    "name": "Colombo 220kV Hub CEB",
    "country": "Sri Lanka",
    "lat": 6.93,
    "lng": 79.85,
    "voltage_kv": 220,
    "type": "substation",
    "operator": "CEB",
    "capacity_mw": 800
  },
  {
    "id": "SUB-161",
    "name": "Dhaka 230kV Hub PGCB",
    "country": "Bangladesh",
    "lat": 23.82,
    "lng": 90.42,
    "voltage_kv": 230,
    "type": "substation",
    "operator": "PGCB",
    "capacity_mw": 1000
  },
  {
    "id": "SUB-162",
    "name": "Lusaka 220kV Hub ZESCO",
    "country": "Zambia",
    "lat": -15.42,
    "lng": 28.28,
    "voltage_kv": 220,
    "type": "substation",
    "operator": "ZESCO",
    "capacity_mw": 900
  },
  {
    "id": "SUB-163",
    "name": "Maputo 110kV Hub EDM",
    "country": "Mozambique",
    "lat": -25.97,
    "lng": 32.59,
    "voltage_kv": 110,
    "type": "substation",
    "operator": "EDM",
    "capacity_mw": 500
  },
  {
    "id": "SUB-164",
    "name": "Baghdad 400kV Hub Iraq",
    "country": "Iraq",
    "lat": 33.34,
    "lng": 44.4,
    "voltage_kv": 400,
    "type": "substation",
    "operator": "Ministry of Electricity Iraq",
    "capacity_mw": 1500
  },
  {
    "id": "SUB-165",
    "name": "GCCIA Al-Khobar 400kV Hub",
    "country": "Saudi Arabia",
    "lat": 26.29,
    "lng": 50.21,
    "voltage_kv": 400,
    "type": "substation",
    "operator": "GCCIA",
    "capacity_mw": 2000
  },
  {
    "id": "SUB-166",
    "name": "Kuwait City 400kV Hub",
    "country": "Kuwait",
    "lat": 29.37,
    "lng": 47.98,
    "voltage_kv": 400,
    "type": "substation",
    "operator": "MEW Kuwait",
    "capacity_mw": 1500
  },
  {
    "id": "SUB-167",
    "name": "Muscat 220kV Hub Oman Power",
    "country": "Oman",
    "lat": 23.61,
    "lng": 58.59,
    "voltage_kv": 220,
    "type": "substation",
    "operator": "Oman Power",
    "capacity_mw": 1200
  },
  {
    "id": "SUB-168",
    "name": "Doha 400kV Hub Kahramaa Qatar",
    "country": "Qatar",
    "lat": 25.29,
    "lng": 51.53,
    "voltage_kv": 400,
    "type": "substation",
    "operator": "Kahramaa",
    "capacity_mw": 2000
  },
  {
    "id": "SUB-169",
    "name": "Gothenburg 400kV Svenska Kraftnat",
    "country": "Sweden",
    "lat": 57.7,
    "lng": 11.97,
    "voltage_kv": 400,
    "type": "substation",
    "operator": "Svenska Kraftnat",
    "capacity_mw": 3000
  },
  {
    "id": "SUB-170",
    "name": "Kvilldal 420kV Statnett Norway",
    "country": "Norway",
    "lat": 59.5,
    "lng": 6.75,
    "voltage_kv": 420,
    "type": "substation",
    "operator": "Statnett",
    "capacity_mw": 3000
  },
  {
    "id": "SUB-171",
    "name": "Malmoe 400kV Svenska Kraftnat",
    "country": "Sweden",
    "lat": 55.6,
    "lng": 13.0,
    "voltage_kv": 400,
    "type": "substation",
    "operator": "Svenska Kraftnat",
    "capacity_mw": 2500
  },
  {
    "id": "SUB-172",
    "name": "Manchester 400kV National Grid",
    "country": "UK",
    "lat": 53.48,
    "lng": -2.24,
    "voltage_kv": 400,
    "type": "substation",
    "operator": "National Grid",
    "capacity_mw": 2400
  },
  {
    "id": "SUB-173",
    "name": "Dublin 400kV Hub EirGrid",
    "country": "Ireland",
    "lat": 53.33,
    "lng": -6.25,
    "voltage_kv": 400,
    "type": "substation",
    "operator": "EirGrid",
    "capacity_mw": 1000
  },
  {
    "id": "SUB-174",
    "name": "Lodz 400kV Hub PSE Poland",
    "country": "Poland",
    "lat": 51.77,
    "lng": 19.47,
    "voltage_kv": 400,
    "type": "substation",
    "operator": "PSE",
    "capacity_mw": 2000
  },
  {
    "id": "SUB-175",
    "name": "Krakow 400kV Hub PSE Poland",
    "country": "Poland",
    "lat": 50.06,
    "lng": 19.94,
    "voltage_kv": 400,
    "type": "substation",
    "operator": "PSE",
    "capacity_mw": 1800
  },
  {
    "id": "SUB-176",
    "name": "Almeria 400kV Hub REE Spain",
    "country": "Spain",
    "lat": 36.84,
    "lng": -2.47,
    "voltage_kv": 400,
    "type": "substation",
    "operator": "REE",
    "capacity_mw": 1500
  },
  {
    "id": "SUB-177",
    "name": "Porto 400kV Hub REN Portugal",
    "country": "Portugal",
    "lat": 41.15,
    "lng": -8.61,
    "voltage_kv": 400,
    "type": "substation",
    "operator": "REN",
    "capacity_mw": 1800
  },
  {
    "id": "SUB-178",
    "name": "Genoa 380kV Hub Terna Italy",
    "country": "Italy",
    "lat": 44.41,
    "lng": 8.93,
    "voltage_kv": 380,
    "type": "substation",
    "operator": "Terna",
    "capacity_mw": 2000
  },
  {
    "id": "SUB-179",
    "name": "Naples 380kV Hub Terna Italy",
    "country": "Italy",
    "lat": 40.85,
    "lng": 14.27,
    "voltage_kv": 380,
    "type": "substation",
    "operator": "Terna",
    "capacity_mw": 1800
  },
  {
    "id": "SUB-180",
    "name": "Thessaloniki 400kV IPTO Greece",
    "country": "Greece",
    "lat": 40.64,
    "lng": 22.94,
    "voltage_kv": 400,
    "type": "substation",
    "operator": "IPTO",
    "capacity_mw": 1200
  },
  {
    "id": "SUB-181",
    "name": "Turin 380kV Hub Terna Italy",
    "country": "Italy",
    "lat": 45.07,
    "lng": 7.69,
    "voltage_kv": 380,
    "type": "substation",
    "operator": "Terna",
    "capacity_mw": 2200
  },
  {
    "id": "SUB-182",
    "name": "Lyon 400kV Hub RTE France",
    "country": "France",
    "lat": 45.75,
    "lng": 4.85,
    "voltage_kv": 400,
    "type": "substation",
    "operator": "RTE",
    "capacity_mw": 2500
  },
  {
    "id": "SUB-183",
    "name": "Bordeaux 400kV Hub RTE",
    "country": "France",
    "lat": 44.84,
    "lng": -0.58,
    "voltage_kv": 400,
    "type": "substation",
    "operator": "RTE",
    "capacity_mw": 2000
  },
  {
    "id": "SUB-184",
    "name": "Marseille 400kV Hub RTE",
    "country": "France",
    "lat": 43.3,
    "lng": 5.37,
    "voltage_kv": 400,
    "type": "substation",
    "operator": "RTE",
    "capacity_mw": 2200
  },
  {
    "id": "SUB-185",
    "name": "Cologne 380kV Hub Amprion",
    "country": "Germany",
    "lat": 50.94,
    "lng": 6.96,
    "voltage_kv": 380,
    "type": "substation",
    "operator": "Amprion",
    "capacity_mw": 3000
  },
  {
    "id": "SUB-186",
    "name": "Stuttgart 380kV Hub TransnetBW",
    "country": "Germany",
    "lat": 48.78,
    "lng": 9.18,
    "voltage_kv": 380,
    "type": "substation",
    "operator": "TransnetBW",
    "capacity_mw": 2400
  },
  {
    "id": "SUB-187",
    "name": "Leipzig 380kV Hub 50Hertz",
    "country": "Germany",
    "lat": 51.34,
    "lng": 12.38,
    "voltage_kv": 380,
    "type": "substation",
    "operator": "50Hertz",
    "capacity_mw": 2600
  },
  {
    "id": "SUB-188",
    "name": "Bratislava 400kV Hub SEPS Slovakia",
    "country": "Slovakia",
    "lat": 48.15,
    "lng": 17.11,
    "voltage_kv": 400,
    "type": "substation",
    "operator": "SEPS",
    "capacity_mw": 1600
  },
  {
    "id": "SUB-189",
    "name": "Ljubljana 400kV Hub ELES Slovenia",
    "country": "Slovenia",
    "lat": 46.05,
    "lng": 14.51,
    "voltage_kv": 400,
    "type": "substation",
    "operator": "ELES",
    "capacity_mw": 1200
  },
  {
    "id": "SUB-190",
    "name": "Anchorage 115kV Hub Chugach",
    "country": "USA",
    "lat": 61.22,
    "lng": -149.9,
    "voltage_kv": 115,
    "type": "substation",
    "operator": "Chugach Electric",
    "capacity_mw": 300
  },
  {
    "id": "SUB-191",
    "name": "Addis Ababa EEP 230kV Hub",
    "country": "Ethiopia",
    "lat": 9.0,
    "lng": 38.76,
    "voltage_kv": 230,
    "type": "substation",
    "operator": "EEP",
    "capacity_mw": 600
  },
  {
    "id": "SUB-192",
    "name": "Hanoi 500kV Hub EVN Vietnam",
    "country": "Vietnam",
    "lat": 21.03,
    "lng": 105.85,
    "voltage_kv": 500,
    "type": "substation",
    "operator": "EVN",
    "capacity_mw": 2000
  },
  {
    "id": "SUB-193",
    "name": "Yangon 230kV Hub MOEE Myanmar",
    "country": "Myanmar",
    "lat": 16.85,
    "lng": 96.17,
    "voltage_kv": 230,
    "type": "substation",
    "operator": "MOEE",
    "capacity_mw": 800
  },
  {
    "id": "SUB-194",
    "name": "Phnom Penh 115kV Hub EDC Cambodia",
    "country": "Cambodia",
    "lat": 11.56,
    "lng": 104.93,
    "voltage_kv": 115,
    "type": "substation",
    "operator": "EDC Cambodia",
    "capacity_mw": 400
  },
  {
    "id": "SUB-195",
    "name": "Colombo 220kV Hub CEB Sri Lanka",
    "country": "Sri Lanka",
    "lat": 6.93,
    "lng": 79.85,
    "voltage_kv": 220,
    "type": "substation",
    "operator": "CEB",
    "capacity_mw": 800
  },
  {
    "id": "SUB-196",
    "name": "Almaty 500kV Hub Kazakhstan",
    "country": "Kazakhstan",
    "lat": 43.26,
    "lng": 76.95,
    "voltage_kv": 500,
    "type": "substation",
    "operator": "KEGOC",
    "capacity_mw": 2500
  },
  {
    "id": "SUB-197",
    "name": "Nur-Sultan 500kV Hub Kazakhstan",
    "country": "Kazakhstan",
    "lat": 51.18,
    "lng": 71.45,
    "voltage_kv": 500,
    "type": "substation",
    "operator": "KEGOC",
    "capacity_mw": 2000
  },
  {
    "id": "SUB-198",
    "name": "Tashkent 500kV Hub Uzbekenergo",
    "country": "Uzbekistan",
    "lat": 41.3,
    "lng": 69.24,
    "voltage_kv": 500,
    "type": "substation",
    "operator": "Uzbekenergo",
    "capacity_mw": 2000
  },
  {
    "id": "SUB-199",
    "name": "Baku 500kV Hub Azerenerji",
    "country": "Azerbaijan",
    "lat": 40.41,
    "lng": 49.87,
    "voltage_kv": 500,
    "type": "substation",
    "operator": "Azerenerji",
    "capacity_mw": 1500
  },
  {
    "id": "SUB-200",
    "name": "Tbilisi 500kV Hub GSE Georgia",
    "country": "Georgia",
    "lat": 41.69,
    "lng": 44.83,
    "voltage_kv": 500,
    "type": "substation",
    "operator": "GSE",
    "capacity_mw": 1200
  },
  {
    "id": "SUB-201",
    "name": "Vancouver 500kV Hub BC Hydro",
    "country": "Canada",
    "lat": 49.28,
    "lng": -123.12,
    "voltage_kv": 500,
    "type": "substation",
    "operator": "BC Hydro",
    "capacity_mw": 2500
  },
  {
    "id": "SUB-202",
    "name": "Edmonton 500kV Hub AltaLink",
    "country": "Canada",
    "lat": 53.55,
    "lng": -113.49,
    "voltage_kv": 500,
    "type": "substation",
    "operator": "AltaLink",
    "capacity_mw": 2000
  },
  {
    "id": "SUB-203",
    "name": "Calgary 500kV Hub AltaLink",
    "country": "Canada",
    "lat": 51.05,
    "lng": -114.07,
    "voltage_kv": 500,
    "type": "substation",
    "operator": "AltaLink",
    "capacity_mw": 2000
  },
  {
    "id": "SUB-204",
    "name": "Toronto 500kV Hub Hydro One",
    "country": "Canada",
    "lat": 43.65,
    "lng": -79.38,
    "voltage_kv": 500,
    "type": "substation",
    "operator": "Hydro One",
    "capacity_mw": 3000
  },
  {
    "id": "SUB-205",
    "name": "Montreal 735kV Hub Hydro-Quebec",
    "country": "Canada",
    "lat": 45.51,
    "lng": -73.55,
    "voltage_kv": 735,
    "type": "substation",
    "operator": "Hydro-Quebec",
    "capacity_mw": 4000
  }
];
