// Global Wind Farm Database
// Types: "onshore" | "offshore" | "floating" | "construction"
// Capacity in MW

var windFarms = [
  // ===== CHINA =====
  { name: "Gansu Wind Farm (Phase I-XI)", country: "China", lat: 39.8, lng: 97.3, capacity: 7965, turbines: 3500, type: "onshore", year: 2015, status: "Operational", owner: "China Three Gorges", developer: "China Three Gorges", cost_usd: 9550, investment_grade: "Government Backed" },
  { name: "Xinjiang Dabancheng", country: "China", lat: 43.4, lng: 87.7, capacity: 500, turbines: 400, type: "onshore", year: 2010, status: "Operational", owner: "China Huaneng", developer: "China Huaneng", cost_usd: 800, investment_grade: "Government Backed" },
  { name: "Inner Mongolia Huitengxile", country: "China", lat: 41.5, lng: 113.2, capacity: 2000, turbines: 900, type: "onshore", year: 2014, status: "Operational", owner: "State Power Investment", developer: "State Power Investment", cost_usd: 3200, investment_grade: "Government Backed" },
  { name: "Rudong Offshore", country: "China", lat: 32.3, lng: 121.9, capacity: 1200, turbines: 200, type: "offshore", year: 2022, status: "Operational", owner: "Goldwind", developer: "Goldwind", cost_usd: 4200, investment_grade: "Investment Grade A" },
  { name: "Yangjiang Offshore Phase 1", country: "China", lat: 21.9, lng: 111.6, capacity: 1000, turbines: 125, type: "offshore", year: 2023, status: "Operational", owner: "Envision", developer: "Envision", cost_usd: 4000, investment_grade: "Investment Grade B" },
  { name: "Guigang Offshore", country: "China", lat: 23.1, lng: 121.5, capacity: 800, turbines: 100, type: "offshore", year: 2023, status: "Operational", owner: "China Energy Investment", developer: "China Energy Investment", cost_usd: 3600, investment_grade: "Government Backed" },
  { name: "Changhua Offshore", country: "China", lat: 24.1, lng: 120.2, capacity: 600, turbines: 80, type: "offshore", year: 2022, status: "Operational", owner: "China Datang", developer: "China Datang", cost_usd: 2100, investment_grade: "Government Backed" },
  { name: "Shandong Offshore Mega Project", country: "China", lat: 37.5, lng: 121.0, capacity: 3000, turbines: 300, type: "construction", year: 2026, status: "Under Construction", owner: "China Three Gorges", developer: "China Three Gorges", cost_usd: 6000, investment_grade: "Government Backed" },
  { name: "Qinghai Wind Corridor", country: "China", lat: 36.8, lng: 100.0, capacity: 1500, turbines: 600, type: "onshore", year: 2020, status: "Operational", owner: "China Huaneng", developer: "China Huaneng", cost_usd: 1800, investment_grade: "Government Backed" },
  { name: "Yunnan Dali Wind Farm", country: "China", lat: 25.6, lng: 100.2, capacity: 400, turbines: 200, type: "onshore", year: 2018, status: "Operational", owner: "State Power Investment", developer: "State Power Investment", cost_usd: 560, investment_grade: "Government Backed" },
  { name: "Hebei Zhangjiakou Wind Base", country: "China", lat: 41.1, lng: 114.9, capacity: 2400, turbines: 800, type: "onshore", year: 2021, status: "Operational", owner: "Goldwind", developer: "Goldwind", cost_usd: 2900, investment_grade: "Investment Grade A" },
  { name: "Fujian Pingtan Offshore", country: "China", lat: 25.5, lng: 119.8, capacity: 900, turbines: 120, type: "offshore", year: 2023, status: "Operational", owner: "Envision", developer: "Envision", cost_usd: 3150, investment_grade: "Investment Grade B" },
  { name: "Liaoning Suizhong Offshore", country: "China", lat: 40.1, lng: 120.4, capacity: 700, turbines: 100, type: "offshore", year: 2022, status: "Operational", owner: "China Energy Investment", developer: "China Energy Investment", cost_usd: 2800, investment_grade: "Government Backed" },
  { name: "Jiangsu Yancheng Offshore", country: "China", lat: 33.4, lng: 121.2, capacity: 1100, turbines: 165, type: "offshore", year: 2021, status: "Operational", owner: "China Datang", developer: "China Datang", cost_usd: 4950, investment_grade: "Government Backed" },
  { name: "Xinjiang Hami Wind Base", country: "China", lat: 42.8, lng: 93.5, capacity: 1800, turbines: 600, type: "onshore", year: 2019, status: "Operational", owner: "China Three Gorges", developer: "China Three Gorges", cost_usd: 2150, investment_grade: "Government Backed" },
  { name: "Inner Mongolia Baotou Wind Farm", country: "China", lat: 40.6, lng: 109.8, capacity: 1200, turbines: 400, type: "onshore", year: 2018, status: "Operational", owner: "China Huaneng", developer: "China Huaneng", cost_usd: 1450, investment_grade: "Government Backed" },
  { name: "Guangdong Yangxi Offshore", country: "China", lat: 21.8, lng: 111.4, capacity: 1400, turbines: 175, type: "offshore", year: 2024, status: "Operational", owner: "State Power Investment", developer: "State Power Investment", cost_usd: 6300, investment_grade: "Government Backed" },
  { name: "Zhejiang Zhoushan Offshore", country: "China", lat: 29.9, lng: 122.3, capacity: 500, turbines: 70, type: "offshore", year: 2022, status: "Operational", owner: "Goldwind", developer: "Goldwind", cost_usd: 2250, investment_grade: "Investment Grade A" },
  { name: "Jilin Baicheng Wind Farm", country: "China", lat: 45.6, lng: 123.0, capacity: 600, turbines: 240, type: "onshore", year: 2017, status: "Operational", owner: "Envision", developer: "Envision", cost_usd: 720, investment_grade: "Investment Grade B" },
  { name: "Ningxia Shapotou Wind Base", country: "China", lat: 37.5, lng: 105.2, capacity: 1000, turbines: 400, type: "onshore", year: 2020, status: "Operational", owner: "China Energy Investment", developer: "China Energy Investment", cost_usd: 1400, investment_grade: "Government Backed" },
  { name: "Bohai Bay Offshore Project", country: "China", lat: 38.6, lng: 118.8, capacity: 2500, turbines: 250, type: "construction", year: 2027, status: "Under Construction", owner: "China Datang", developer: "China Datang", cost_usd: 5000, investment_grade: "Government Backed" },
  { name: "Guangxi Fangchenggang Offshore", country: "China", lat: 21.6, lng: 108.3, capacity: 600, turbines: 80, type: "offshore", year: 2023, status: "Operational", owner: "China Three Gorges", developer: "China Three Gorges", cost_usd: 2100, investment_grade: "Government Backed" },
  { name: "Hunan Xiangtan Onshore", country: "China", lat: 27.8, lng: 112.9, capacity: 250, turbines: 100, type: "onshore", year: 2019, status: "Operational", owner: "China Huaneng", developer: "China Huaneng", cost_usd: 350, investment_grade: "Government Backed" },
  { name: "Sichuan Liangshan Wind Farm", country: "China", lat: 27.5, lng: 102.3, capacity: 300, turbines: 120, type: "onshore", year: 2021, status: "Operational", owner: "State Power Investment", developer: "State Power Investment", cost_usd: 360, investment_grade: "Government Backed" },

  // ===== UNITED STATES =====
  { name: "Alta Wind Energy Center", country: "USA", lat: 35.1, lng: -118.4, capacity: 1548, turbines: 586, type: "onshore", year: 2013, status: "Operational", owner: "NextEra Energy", developer: "NextEra Energy", cost_usd: 1850, investment_grade: "Investment Grade A" },
  { name: "SunZia Wind Project", country: "USA", lat: 34.5, lng: -105.8, capacity: 3500, turbines: 916, type: "onshore", year: 2026, status: "Under Construction", owner: "Pattern Energy", developer: "Pattern Energy", cost_usd: 8000, investment_grade: "Investment Grade A" },
  { name: "Mountain View Wind Repower", country: "USA", lat: 33.8900, lng: -116.6000, capacity: 67, turbines: 16, type: "onshore", year: 2022, status: "Operational", owner: "AES Corporation", developer: "AES Corporation", cost_usd: 100, investment_grade: "Investment Grade A" },
  { name: "Roscoe Wind Farm", country: "USA", lat: 32.4, lng: -100.5, capacity: 781, turbines: 627, type: "onshore", year: 2009, status: "Operational", owner: "Avangrid", developer: "Avangrid", cost_usd: 1100, investment_grade: "Investment Grade A" },
  { name: "Horse Heaven Hills", country: "USA", lat: 46.1, lng: -119.7, capacity: 1150, turbines: 222, type: "onshore", year: 2023, status: "Operational", owner: "Enel Green Power", developer: "Enel Green Power", cost_usd: 1600, investment_grade: "Investment Grade A" },
  { name: "Vineyard Wind 1", country: "USA", lat: 41.4, lng: -70.5, capacity: 806, turbines: 62, type: "offshore", year: 2024, status: "Operational", owner: "Invenergy", developer: "Invenergy", cost_usd: 3650, investment_grade: "Investment Grade B" },
  { name: "Revolution Wind", country: "USA", lat: 41.2, lng: -71.1, capacity: 704, turbines: 65, type: "offshore", year: 2025, status: "Operational", owner: "Pattern Energy", developer: "Pattern Energy", cost_usd: 3150, investment_grade: "Investment Grade B" },
  { name: "Sunrise Wind", country: "USA", lat: 40.8, lng: -72.8, capacity: 924, turbines: 84, type: "construction", year: 2026, status: "Under Construction", owner: "AES Clean Energy", developer: "AES Clean Energy", cost_usd: 2950, investment_grade: "Investment Grade A" },
  { name: "Empire Wind", country: "USA", lat: 40.5, lng: -73.2, capacity: 2076, turbines: 147, type: "construction", year: 2027, status: "Under Construction", owner: "Berkshire Hathaway Energy", developer: "MidAmerican Energy", cost_usd: 4800, investment_grade: "Investment Grade A" },
  { name: "Biglow Canyon Wind Farm", country: "USA", lat: 45.4, lng: -120.8, capacity: 450, turbines: 218, type: "onshore", year: 2011, status: "Operational", owner: "Dominion Energy", developer: "Dominion Energy", cost_usd: 540, investment_grade: "Investment Grade A" },
  { name: "Meadow Lake Wind Farm", country: "USA", lat: 40.9, lng: -87.0, capacity: 801, turbines: 304, type: "onshore", year: 2012, status: "Operational", owner: "Duke Energy", developer: "Duke Energy Renewables", cost_usd: 960, investment_grade: "Investment Grade A" },
  { name: "Panther Creek Wind Farm", country: "USA", lat: 31.8, lng: -100.6, capacity: 458, turbines: 229, type: "onshore", year: 2009, status: "Operational", owner: "Ørsted", developer: "Ørsted", cost_usd: 730, investment_grade: "Investment Grade A" },
  { name: "Sweetwater Wind Farm", country: "USA", lat: 32.5, lng: -100.4, capacity: 585, turbines: 394, type: "onshore", year: 2008, status: "Operational", owner: "BP", developer: "BP Alternative Energy", cost_usd: 700, investment_grade: "Investment Grade A" },
  { name: "Ocotillo Wind Energy Facility", country: "USA", lat: 32.7, lng: -116.1, capacity: 265, turbines: 112, type: "onshore", year: 2013, status: "Operational", owner: "Shell", developer: "Shell New Energies", cost_usd: 370, investment_grade: "Investment Grade A" },
  { name: "Crazy Mountain Wind Farm", country: "USA", lat: 45.9, lng: -110.1, capacity: 303, turbines: 101, type: "onshore", year: 2020, status: "Operational", owner: "NextEra Energy", developer: "NextEra Energy", cost_usd: 360, investment_grade: "Investment Grade A" },
  { name: "Chokecherry Sierra Madre", country: "USA", lat: 41.7, lng: -106.5, capacity: 3000, turbines: 500, type: "construction", year: 2026, status: "Under Construction", owner: "Avangrid", developer: "Avangrid", cost_usd: 6000, investment_grade: "Investment Grade A" },
  { name: "Nolan County Wind", country: "USA", lat: 32.3, lng: -100.6, capacity: 400, turbines: 200, type: "onshore", year: 2018, status: "Operational", owner: "Enel Green Power", developer: "Enel Green Power", cost_usd: 560, investment_grade: "Investment Grade A" },
  { name: "Colorado Wind Energy Center", country: "USA", lat: 40.6, lng: -103.8, capacity: 300, turbines: 100, type: "onshore", year: 2017, status: "Operational", owner: "Invenergy", developer: "Invenergy", cost_usd: 360, investment_grade: "Investment Grade B" },
  { name: "South Fork Wind", country: "USA", lat: 40.9, lng: -72.0, capacity: 132, turbines: 12, type: "offshore", year: 2024, status: "Operational", owner: "Pattern Energy", developer: "Pattern Energy", cost_usd: 460, investment_grade: "Investment Grade B" },
  { name: "Midland Wind Project", country: "USA", lat: 43.6, lng: -84.2, capacity: 144, turbines: 48, type: "onshore", year: 2019, status: "Operational", owner: "AES Clean Energy", developer: "AES Clean Energy", cost_usd: 170, investment_grade: "Investment Grade A" },
  { name: "Minco Wind Farm", country: "USA", lat: 35.3, lng: -98.0, capacity: 540, turbines: 180, type: "onshore", year: 2020, status: "Operational", owner: "Berkshire Hathaway Energy", developer: "MidAmerican Energy", cost_usd: 650, investment_grade: "Investment Grade A" },
  { name: "Rail Splitter Wind Farm", country: "USA", lat: 40.4, lng: -89.2, capacity: 100, turbines: 67, type: "onshore", year: 2009, status: "Operational", owner: "Dominion Energy", developer: "Dominion Energy", cost_usd: 140, investment_grade: "Investment Grade A" },
  { name: "Snyder Wind Farm", country: "USA", lat: 32.7, lng: -100.9, capacity: 165, turbines: 55, type: "onshore", year: 2016, status: "Operational", owner: "Duke Energy", developer: "Duke Energy Renewables", cost_usd: 200, investment_grade: "Investment Grade A" },
  { name: "Traverse Wind Energy Center", country: "USA", lat: 36.0, lng: -98.5, capacity: 998, turbines: 356, type: "onshore", year: 2021, status: "Operational", owner: "Ørsted", developer: "Ørsted", cost_usd: 1600, investment_grade: "Investment Grade A" },
  { name: "Gunsight Mountain Wind", country: "USA", lat: 62.1, lng: -150.3, capacity: 213, turbines: 71, type: "onshore", year: 2024, status: "Operational", owner: "BP", developer: "BP Alternative Energy", cost_usd: 260, investment_grade: "Investment Grade A" },
  { name: "Golden Hills Wind", country: "USA", lat: 37.6, lng: -121.5, capacity: 130, turbines: 65, type: "onshore", year: 2014, status: "Operational", owner: "Shell", developer: "Shell New Energies", cost_usd: 180, investment_grade: "Investment Grade A" },
  { name: "Goodnight Wind Farm", country: "USA", lat: 35.0, lng: -100.4, capacity: 287, turbines: 123, type: "onshore", year: 2022, status: "Operational", owner: "NextEra Energy", developer: "NextEra Energy", cost_usd: 460, investment_grade: "Investment Grade A" },
  { name: "Permian Basin Wind Farm", country: "USA", lat: 31.5, lng: -103.0, capacity: 500, turbines: 167, type: "onshore", year: 2022, status: "Operational", owner: "Avangrid", developer: "Avangrid", cost_usd: 800, investment_grade: "Investment Grade A" },
  { name: "Coastal Virginia Offshore", country: "USA", lat: 37.0, lng: -75.7, capacity: 2600, turbines: 176, type: "construction", year: 2026, status: "Under Construction", owner: "Enel Green Power", developer: "Enel Green Power", cost_usd: 5200, investment_grade: "Investment Grade A" },
  { name: "New England Wind", country: "USA", lat: 42.6, lng: -72.9, capacity: 204, turbines: 68, type: "onshore", year: 2023, status: "Operational", owner: "Invenergy", developer: "Invenergy", cost_usd: 240, investment_grade: "Investment Grade B" },
  { name: "Thunder Ranch Wind", country: "USA", lat: 36.4, lng: -96.5, capacity: 298, turbines: 121, type: "onshore", year: 2022, status: "Operational", owner: "Pattern Energy", developer: "Pattern Energy", cost_usd: 420, investment_grade: "Investment Grade B" },
  { name: "Galveston LNG Offshore", country: "USA", lat: 29.2, lng: -94.8, capacity: 800, turbines: 60, type: "construction", year: 2027, status: "Under Construction", owner: "AES Clean Energy", developer: "AES Clean Energy", cost_usd: 1600, investment_grade: "Investment Grade A" },
  { name: "Columbia Basin Wind", country: "USA", lat: 46.5, lng: -118.9, capacity: 263, turbines: 88, type: "onshore", year: 2015, status: "Operational", owner: "Berkshire Hathaway Energy", developer: "MidAmerican Energy", cost_usd: 420, investment_grade: "Investment Grade A" },

  // ===== GERMANY =====
  { name: "Bard Offshore 1", country: "Germany", lat: 54.4, lng: 6.0, capacity: 400, turbines: 80, type: "offshore", year: 2013, status: "Operational", owner: "EDF Renewables", developer: "EDF Renewables", cost_usd: 1600, investment_grade: "Investment Grade A" },
  { name: "DanTysk", country: "Germany", lat: 55.5, lng: 7.7, capacity: 288, turbines: 80, type: "offshore", year: 2015, status: "Operational", owner: "EnBW", developer: "EnBW", cost_usd: 1000, investment_grade: "Investment Grade A" },
  { name: "EnBW Hohe See", country: "Germany", lat: 54.5, lng: 6.4, capacity: 497, turbines: 71, type: "offshore", year: 2019, status: "Operational", owner: "RWE Renewables", developer: "RWE Renewables", cost_usd: 2250, investment_grade: "Investment Grade A" },
  { name: "Merkur Offshore", country: "Germany", lat: 54.0, lng: 6.5, capacity: 396, turbines: 66, type: "offshore", year: 2019, status: "Operational", owner: "Vattenfall", developer: "Vattenfall", cost_usd: 1400, investment_grade: "Investment Grade A" },
  { name: "Gode Wind 1&2", country: "Germany", lat: 54.2, lng: 7.0, capacity: 582, turbines: 97, type: "offshore", year: 2016, status: "Operational", owner: "E.ON", developer: "E.ON", cost_usd: 2050, investment_grade: "Investment Grade A" },
  { name: "Eggebek Onshore Cluster", country: "Germany", lat: 54.6, lng: 9.4, capacity: 300, turbines: 75, type: "onshore", year: 2020, status: "Operational", owner: "Ørsted", developer: "Ørsted", cost_usd: 360, investment_grade: "Investment Grade A" },
  { name: "He Dreiht Offshore", country: "Germany", lat: 54.0, lng: 6.3, capacity: 960, turbines: 64, type: "construction", year: 2025, status: "Under Construction", owner: "Siemens Gamesa", developer: "Siemens Gamesa", cost_usd: 1900, investment_grade: "Investment Grade A" },
  { name: "Trianel Windpark Borkum", country: "Germany", lat: 53.8, lng: 6.1, capacity: 400, turbines: 40, type: "offshore", year: 2015, status: "Operational", owner: "EDF Renewables", developer: "EDF Renewables", cost_usd: 1600, investment_grade: "Investment Grade A" },
  { name: "Veja Mate Offshore", country: "Germany", lat: 54.5, lng: 5.9, capacity: 402, turbines: 67, type: "offshore", year: 2017, status: "Operational", owner: "EnBW", developer: "EnBW", cost_usd: 1400, investment_grade: "Investment Grade A" },
  { name: "Windpark Usedom", country: "Germany", lat: 54.0, lng: 14.1, capacity: 180, turbines: 60, type: "onshore", year: 2018, status: "Operational", owner: "RWE Renewables", developer: "RWE Renewables", cost_usd: 220, investment_grade: "Investment Grade A" },
  { name: "Windpark Prenzlau", country: "Germany", lat: 53.3, lng: 13.9, capacity: 130, turbines: 52, type: "onshore", year: 2014, status: "Operational", owner: "Vattenfall", developer: "Vattenfall", cost_usd: 180, investment_grade: "Investment Grade A" },
  { name: "Amrumbank West", country: "Germany", lat: 54.7, lng: 7.7, capacity: 302, turbines: 80, type: "offshore", year: 2015, status: "Operational", owner: "E.ON", developer: "E.ON", cost_usd: 1350, investment_grade: "Investment Grade A" },
  { name: "Butendiek Offshore", country: "Germany", lat: 55.0, lng: 7.5, capacity: 288, turbines: 80, type: "offshore", year: 2015, status: "Operational", owner: "Ørsted", developer: "Ørsted", cost_usd: 1000, investment_grade: "Investment Grade A" },
  { name: "Nordsee One", country: "Germany", lat: 53.9, lng: 6.8, capacity: 332, turbines: 54, type: "offshore", year: 2017, status: "Operational", owner: "Siemens Gamesa", developer: "Siemens Gamesa", cost_usd: 1500, investment_grade: "Investment Grade A" },
  { name: "Windpark Wolmirstedt", country: "Germany", lat: 52.3, lng: 11.7, capacity: 120, turbines: 40, type: "onshore", year: 2021, status: "Operational", owner: "EDF Renewables", developer: "EDF Renewables", cost_usd: 140, investment_grade: "Investment Grade A" },

  // ===== UNITED KINGDOM =====
  { name: "Hornsea Project One", country: "UK", lat: 53.9, lng: 1.8, capacity: 1218, turbines: 174, type: "offshore", year: 2020, status: "Operational", owner: "EnBW", developer: "EnBW", cost_usd: 4250, investment_grade: "Investment Grade A" },
  { name: "Hornsea Project Two", country: "UK", lat: 53.9, lng: 2.1, capacity: 1386, turbines: 165, type: "offshore", year: 2022, status: "Operational", owner: "EDF Renewables", developer: "EDF Renewables", cost_usd: 4850, investment_grade: "Investment Grade A" },
  { name: "Hornsea Project Three", country: "UK", lat: 54.0, lng: 2.4, capacity: 2400, turbines: 200, type: "construction", year: 2027, status: "Under Construction", owner: "Ørsted", developer: "Ørsted", cost_usd: 4800, investment_grade: "Investment Grade A" },
  { name: "Dogger Bank A", country: "UK", lat: 54.8, lng: 2.5, capacity: 1200, turbines: 95, type: "offshore", year: 2024, status: "Operational", owner: "Vattenfall", developer: "Vattenfall", cost_usd: 4200, investment_grade: "Investment Grade A" },
  { name: "Dogger Bank B", country: "UK", lat: 54.9, lng: 2.7, capacity: 1200, turbines: 95, type: "construction", year: 2025, status: "Under Construction", owner: "RWE Renewables", developer: "RWE Renewables", cost_usd: 2400, investment_grade: "Investment Grade A" },
  { name: "London Array", country: "UK", lat: 51.6, lng: 1.5, capacity: 630, turbines: 175, type: "offshore", year: 2013, status: "Operational", owner: "SSE Renewables", developer: "SSE Renewables", cost_usd: 2200, investment_grade: "Investment Grade A" },
  { name: "Walney Extension", country: "UK", lat: 54.1, lng: -3.5, capacity: 659, turbines: 87, type: "offshore", year: 2018, status: "Operational", owner: "ScottishPower Renewables", developer: "ScottishPower Renewables", cost_usd: 2950, investment_grade: "Investment Grade A" },
  { name: "Sheringham Shoal", country: "UK", lat: 53.1, lng: 1.2, capacity: 317, turbines: 88, type: "offshore", year: 2012, status: "Operational", owner: "BP", developer: "BP Alternative Energy", cost_usd: 1450, investment_grade: "Investment Grade A" },
  { name: "Whitelee Wind Farm", country: "UK", lat: 55.7, lng: -4.3, capacity: 539, turbines: 215, type: "onshore", year: 2012, status: "Operational", owner: "Equinor", developer: "Equinor", cost_usd: 860, investment_grade: "Investment Grade A" },
  { name: "Clyde Wind Farm", country: "UK", lat: 55.4, lng: -3.7, capacity: 350, turbines: 152, type: "onshore", year: 2012, status: "Operational", owner: "EnBW", developer: "EnBW", cost_usd: 560, investment_grade: "Investment Grade A" },
  { name: "Beatrice Offshore", country: "UK", lat: 58.1, lng: -2.8, capacity: 588, turbines: 84, type: "offshore", year: 2019, status: "Operational", owner: "EDF Renewables", developer: "EDF Renewables", cost_usd: 2050, investment_grade: "Investment Grade A" },
  { name: "Seagreen Alpha", country: "UK", lat: 56.6, lng: -2.0, capacity: 1075, turbines: 114, type: "offshore", year: 2023, status: "Operational", owner: "Ørsted", developer: "Ørsted", cost_usd: 4300, investment_grade: "Investment Grade A" },
  { name: "Sofia Offshore", country: "UK", lat: 55.1, lng: 2.0, capacity: 1400, turbines: 100, type: "construction", year: 2026, status: "Under Construction", owner: "Vattenfall", developer: "Vattenfall", cost_usd: 2800, investment_grade: "Investment Grade A" },
  { name: "East Anglia One", country: "UK", lat: 52.3, lng: 2.5, capacity: 714, turbines: 102, type: "offshore", year: 2020, status: "Operational", owner: "RWE Renewables", developer: "RWE Renewables", cost_usd: 2500, investment_grade: "Investment Grade A" },
  { name: "Thanet Offshore", country: "UK", lat: 51.5, lng: 1.7, capacity: 300, turbines: 100, type: "offshore", year: 2010, status: "Operational", owner: "SSE Renewables", developer: "SSE Renewables", cost_usd: 1050, investment_grade: "Investment Grade A" },
  { name: "Rampion Offshore", country: "UK", lat: 50.7, lng: -0.2, capacity: 400, turbines: 116, type: "offshore", year: 2018, status: "Operational", owner: "ScottishPower Renewables", developer: "ScottishPower Renewables", cost_usd: 1600, investment_grade: "Investment Grade A" },
  { name: "Neart na Gaoithe", country: "UK", lat: 56.2, lng: -2.3, capacity: 448, turbines: 54, type: "offshore", year: 2023, status: "Operational", owner: "BP", developer: "BP Alternative Energy", cost_usd: 1800, investment_grade: "Investment Grade A" },
  { name: "Moray East Offshore", country: "UK", lat: 57.8, lng: -2.0, capacity: 950, turbines: 100, type: "offshore", year: 2022, status: "Operational", owner: "Equinor", developer: "Equinor", cost_usd: 4300, investment_grade: "Investment Grade A" },
  { name: "Strathy North Wind Farm", country: "UK", lat: 58.5, lng: -4.1, capacity: 228, turbines: 76, type: "onshore", year: 2020, status: "Operational", owner: "EnBW", developer: "EnBW", cost_usd: 270, investment_grade: "Investment Grade A" },
  { name: "Viking Wind Farm", country: "UK", lat: 60.2, lng: -1.4, capacity: 443, turbines: 103, type: "construction", year: 2026, status: "Under Construction", owner: "EDF Renewables", developer: "EDF Renewables", cost_usd: 1300, investment_grade: "Investment Grade A" },

  // ===== DENMARK =====
  { name: "Anholt Offshore", country: "Denmark", lat: 56.6, lng: 11.2, capacity: 400, turbines: 111, type: "offshore", year: 2013, status: "Operational", owner: "Ørsted", developer: "Ørsted", cost_usd: 1600, investment_grade: "Investment Grade A" },
  { name: "Horns Rev 3", country: "Denmark", lat: 55.8, lng: 7.7, capacity: 407, turbines: 49, type: "offshore", year: 2019, status: "Operational", owner: "Vattenfall", developer: "Vattenfall", cost_usd: 1850, investment_grade: "Investment Grade A" },
  { name: "Middelgrunden", country: "Denmark", lat: 55.7, lng: 12.7, capacity: 40, turbines: 20, type: "offshore", year: 2001, status: "Operational", owner: "European Energy", developer: "European Energy", cost_usd: 160, investment_grade: "Investment Grade B" },
  { name: "Thor Offshore", country: "Denmark", lat: 56.2, lng: 7.5, capacity: 1000, turbines: 72, type: "construction", year: 2027, status: "Under Construction", owner: "Energi Danmark", developer: "Energi Danmark", cost_usd: 2000, investment_grade: "Investment Grade B" },
  { name: "Kriegers Flak", country: "Denmark", lat: 55.1, lng: 12.9, capacity: 605, turbines: 72, type: "offshore", year: 2021, status: "Operational", owner: "PensionDanmark", developer: "Ørsted", cost_usd: 2700, investment_grade: "Government Backed" },
  { name: "Isefjord Wind Farm", country: "Denmark", lat: 55.8, lng: 11.8, capacity: 180, turbines: 60, type: "onshore", year: 2018, status: "Operational", owner: "Ørsted", developer: "Ørsted", cost_usd: 220, investment_grade: "Investment Grade A" },

  // ===== NETHERLANDS =====
  { name: "Borssele I & II", country: "Netherlands", lat: 51.7, lng: 3.2, capacity: 752, turbines: 94, type: "offshore", year: 2020, status: "Operational", owner: "Ørsted", developer: "Ørsted", cost_usd: 3400, investment_grade: "Investment Grade A" },
  { name: "Borssele III & IV", country: "Netherlands", lat: 51.7, lng: 3.1, capacity: 731, turbines: 77, type: "offshore", year: 2021, status: "Operational", owner: "Vattenfall", developer: "Vattenfall", cost_usd: 3300, investment_grade: "Investment Grade A" },
  { name: "Hollandse Kust Noord", country: "Netherlands", lat: 52.6, lng: 4.4, capacity: 760, turbines: 69, type: "offshore", year: 2023, status: "Operational", owner: "Shell", developer: "Shell New Energies", cost_usd: 3050, investment_grade: "Investment Grade A" },
  { name: "Hollandse Kust West", country: "Netherlands", lat: 52.3, lng: 4.2, capacity: 1500, turbines: 102, type: "construction", year: 2026, status: "Under Construction", owner: "SDE", developer: "Shell New Energies", cost_usd: 3000, investment_grade: "Investment Grade A" },

  // ===== BELGIUM =====
  { name: "Thanet Offshore (BE)", country: "Belgium", lat: 51.1, lng: 2.8, capacity: 325, turbines: 36, type: "offshore", year: 2010, status: "Operational", owner: "Ørsted", developer: "Ørsted", cost_usd: 1300, investment_grade: "Investment Grade A" },
  { name: "Norther Offshore", country: "Belgium", lat: 51.5, lng: 2.9, capacity: 370, turbines: 44, type: "offshore", year: 2019, status: "Operational", owner: "RWE Renewables", developer: "RWE Renewables", cost_usd: 1500, investment_grade: "Investment Grade A" },
  { name: "Seamade Offshore", country: "Belgium", lat: 51.3, lng: 2.7, capacity: 487, turbines: 58, type: "offshore", year: 2020, status: "Operational", owner: "Parkwind", developer: "Parkwind", cost_usd: 1950, investment_grade: "Investment Grade B" },

  // ===== FRANCE =====
  { name: "Saint-Nazaire Offshore", country: "France", lat: 47.3, lng: -2.6, capacity: 480, turbines: 80, type: "offshore", year: 2022, status: "Operational", owner: "Total Energies", developer: "Total Energies", cost_usd: 1700, investment_grade: "Investment Grade A" },
  { name: "Fécamp Offshore", country: "France", lat: 49.8, lng: 0.4, capacity: 500, turbines: 71, type: "offshore", year: 2023, status: "Operational", owner: "RWE Renewables", developer: "RWE Renewables", cost_usd: 2250, investment_grade: "Investment Grade A" },
  { name: "Provence Grand Large (Floating)", country: "France", lat: 43.3, lng: 5.5, capacity: 25, turbines: 3, type: "floating", year: 2023, status: "Operational", owner: "EDF Renewables", developer: "EDF Renewables", cost_usd: 100, investment_grade: "Investment Grade A" },
  { name: "Parc du Cotentin", country: "France", lat: 49.7, lng: -1.3, capacity: 448, turbines: 64, type: "offshore", year: 2024, status: "Operational", owner: "Engie", developer: "Engie", cost_usd: 1800, investment_grade: "Investment Grade A" },

  // ===== INDIA =====
  { name: "Muppandal Wind Farm", country: "India", lat: 8.2, lng: 77.6, capacity: 1500, turbines: 3000, type: "onshore", year: 2010, status: "Operational", owner: "Greenko", developer: "Greenko", cost_usd: 1800, investment_grade: "Investment Grade B" },
  { name: "Jaisalmer Wind Park", country: "India", lat: 27.0, lng: 70.9, capacity: 1064, turbines: 730, type: "onshore", year: 2012, status: "Operational", owner: "Suzlon Energy", developer: "Suzlon Energy", cost_usd: 1700, investment_grade: "Investment Grade B" },
  { name: "Brahmanvel Wind Farm", country: "India", lat: 20.9, lng: 74.2, capacity: 528, turbines: 176, type: "onshore", year: 2012, status: "Operational", owner: "Tata Power", developer: "Tata Power Renewable Energy", cost_usd: 630, investment_grade: "Investment Grade A" },
  { name: "Etalin Arunachal Project", country: "India", lat: 28.0, lng: 96.0, capacity: 400, turbines: 200, type: "construction", year: 2026, status: "Under Construction", owner: "JSW Energy", developer: "JSW Energy", cost_usd: 800, investment_grade: "Investment Grade B" },
  { name: "Gujarat Offshore Wind", country: "India", lat: 22.3, lng: 69.5, capacity: 1000, turbines: 100, type: "construction", year: 2027, status: "Under Construction", owner: "Torrent Power", developer: "Torrent Power", cost_usd: 2000, investment_grade: "Investment Grade B" },

  // ===== BRAZIL =====
  { name: "Alto Sertão Wind Complex", country: "Brazil", lat: -11.0, lng: -41.5, capacity: 294, turbines: 184, type: "onshore", year: 2012, status: "Operational", owner: "Enel Green Power", developer: "Enel Green Power", cost_usd: 350, investment_grade: "Investment Grade A" },
  { name: "Chapada do Piauí", country: "Brazil", lat: -8.2, lng: -42.4, capacity: 386, turbines: 193, type: "onshore", year: 2016, status: "Operational", owner: "EDP Renewables", developer: "EDPR", cost_usd: 620, investment_grade: "Investment Grade A" },
  { name: "Ventos de São Januário", country: "Brazil", lat: -6.1, lng: -35.2, capacity: 470, turbines: 134, type: "onshore", year: 2021, status: "Operational", owner: "Casa dos Ventos", developer: "Casa dos Ventos", cost_usd: 750, investment_grade: "Investment Grade B" },
  { name: "Tucano Wind Complex", country: "Brazil", lat: -10.9, lng: -38.7, capacity: 228, turbines: 57, type: "onshore", year: 2023, status: "Operational", owner: "Neoenergia", developer: "Neoenergia", cost_usd: 270, investment_grade: "Investment Grade A" },

  // ===== SPAIN =====
  { name: "Maranchón Wind Farm", country: "Spain", lat: 41.0, lng: -2.2, capacity: 208, turbines: 104, type: "onshore", year: 2008, status: "Operational", owner: "Acciona", developer: "Acciona Energía", cost_usd: 290, investment_grade: "Investment Grade A" },
  { name: "La Muela Wind Farm", country: "Spain", lat: 41.6, lng: -1.1, capacity: 550, turbines: 220, type: "onshore", year: 2006, status: "Operational", owner: "EDP Renovaveis", developer: "EDPR", cost_usd: 770, investment_grade: "Investment Grade A" },
  { name: "Parque Eólico de Guzmán", country: "Spain", lat: 41.8, lng: -3.6, capacity: 150, turbines: 60, type: "onshore", year: 2012, status: "Operational", owner: "Endesa", developer: "Endesa", cost_usd: 180, investment_grade: "Investment Grade A" },

  // ===== SWEDEN =====
  { name: "Markbygden Wind Farm", country: "Sweden", lat: 65.7, lng: 21.0, capacity: 1101, turbines: 440, type: "onshore", year: 2021, status: "Operational", owner: "Arise", developer: "Arise", cost_usd: 1300, investment_grade: "Investment Grade B" },
  { name: "Stor-Rotliden", country: "Sweden", lat: 64.9, lng: 18.7, capacity: 78, turbines: 40, type: "onshore", year: 2011, status: "Operational", owner: "Vattenfall", developer: "Vattenfall", cost_usd: 95, investment_grade: "Investment Grade A" },
  { name: "Kårehamn", country: "Sweden", lat: 57.3, lng: 17.2, capacity: 48, turbines: 16, type: "offshore", year: 2013, status: "Operational", owner: "Statkraft", developer: "Statkraft", cost_usd: 170, investment_grade: "Government Backed" },
  { name: "Gotland Offshore", country: "Sweden", lat: 57.5, lng: 18.8, capacity: 200, turbines: 40, type: "construction", year: 2026, status: "Under Construction", owner: "Eolus Vind", developer: "Eolus Vind", cost_usd: 400, investment_grade: "Investment Grade B" },
  { name: "Blaiken Wind Farm", country: "Sweden", lat: 65.0, lng: 17.0, capacity: 250, turbines: 100, type: "onshore", year: 2014, status: "Operational", owner: "OX2", developer: "OX2", cost_usd: 350, investment_grade: "Investment Grade B" },
  { name: "Lillgrund Offshore", country: "Sweden", lat: 55.5, lng: 12.8, capacity: 110, turbines: 48, type: "offshore", year: 2008, status: "Operational", owner: "Arise", developer: "Arise", cost_usd: 500, investment_grade: "Investment Grade B" },
  { name: "Sodra Lankar Wind", country: "Sweden", lat: 57.6, lng: 15.9, capacity: 160, turbines: 64, type: "onshore", year: 2016, status: "Operational", owner: "Vattenfall", developer: "Vattenfall", cost_usd: 220, investment_grade: "Investment Grade A" },

  // ===== NORWAY =====
  { name: "Hywind Scotland (Floating)", country: "Norway/UK", lat: 57.5, lng: -1.0, capacity: 30, turbines: 5, type: "floating", year: 2017, status: "Operational", owner: "Equinor", developer: "Equinor", cost_usd: 100, investment_grade: "Investment Grade A" },
  { name: "Fosen Vind", country: "Norway", lat: 63.7, lng: 9.6, capacity: 1057, turbines: 278, type: "onshore", year: 2020, status: "Operational", owner: "Aneo", developer: "Aneo", cost_usd: 1500, investment_grade: "Investment Grade B" },
  { name: "Hywind Tampen (Floating)", country: "Norway", lat: 61.2, lng: 2.0, capacity: 88, turbines: 11, type: "floating", year: 2023, status: "Operational", owner: "Statkraft", developer: "Statkraft", cost_usd: 350, investment_grade: "Government Backed" },
  { name: "Havsul 1 Offshore", country: "Norway", lat: 62.5, lng: 5.2, capacity: 350, turbines: 70, type: "construction", year: 2026, status: "Under Construction", owner: "Equinor", developer: "Equinor", cost_usd: 700, investment_grade: "Investment Grade A" },
  { name: "Sørlige Nordsjø II", country: "Norway", lat: 57.0, lng: 4.5, capacity: 1400, turbines: 140, type: "construction", year: 2028, status: "Under Construction", owner: "Fred. Olsen Renewables", developer: "Fred. Olsen Renewables", cost_usd: 2800, investment_grade: "Investment Grade B" },
  { name: "Roan Vind", country: "Norway", lat: 64.1, lng: 10.2, capacity: 255, turbines: 71, type: "onshore", year: 2019, status: "Operational", owner: "Aneo", developer: "Aneo", cost_usd: 310, investment_grade: "Investment Grade B" },
  { name: "Midtfjellet Wind Farm", country: "Norway", lat: 60.6, lng: 5.2, capacity: 110, turbines: 44, type: "onshore", year: 2013, status: "Operational", owner: "Statkraft", developer: "Statkraft", cost_usd: 180, investment_grade: "Government Backed" },

  // ===== FINLAND =====
  { name: "Tahkoluoto Offshore", country: "Finland", lat: 61.6, lng: 21.3, capacity: 42, turbines: 10, type: "offshore", year: 2017, status: "Operational", owner: "Neoen", developer: "Neoen", cost_usd: 150, investment_grade: "Investment Grade B" },
  { name: "Raahe Wind Farm", country: "Finland", lat: 64.7, lng: 24.7, capacity: 400, turbines: 100, type: "onshore", year: 2023, status: "Operational", owner: "OX2", developer: "OX2", cost_usd: 560, investment_grade: "Investment Grade B" },
  { name: "Kalajoki Wind Park", country: "Finland", lat: 64.2, lng: 24.2, capacity: 230, turbines: 77, type: "onshore", year: 2021, status: "Operational", owner: "Vattenfall", developer: "Vattenfall", cost_usd: 370, investment_grade: "Investment Grade A" },
  { name: "Pyhäjoki Wind Farm", country: "Finland", lat: 64.5, lng: 24.3, capacity: 195, turbines: 65, type: "onshore", year: 2022, status: "Operational", owner: "Fortum", developer: "Fortum", cost_usd: 230, investment_grade: "Investment Grade A" },
  { name: "Tornio Röyttä Offshore", country: "Finland", lat: 65.6, lng: 24.2, capacity: 800, turbines: 80, type: "construction", year: 2027, status: "Under Construction", owner: "wpd", developer: "wpd", cost_usd: 1600, investment_grade: "Investment Grade B" },
  { name: "Lappeenranta Wind Farm", country: "Finland", lat: 61.1, lng: 28.5, capacity: 140, turbines: 56, type: "onshore", year: 2020, status: "Operational", owner: "Neoen", developer: "Neoen", cost_usd: 220, investment_grade: "Investment Grade B" },

  // ===== AUSTRALIA =====
  { name: "MacArthur Wind Farm", country: "Australia", lat: -38.1, lng: 142.1, capacity: 420, turbines: 140, type: "onshore", year: 2013, status: "Operational", owner: "Acciona Energía", developer: "Acciona Energía", cost_usd: 500, investment_grade: "Investment Grade A" },
  { name: "Coopers Gap Wind Farm", country: "Australia", lat: -26.7, lng: 151.6, capacity: 453, turbines: 123, type: "onshore", year: 2020, status: "Operational", owner: "AGL Energy", developer: "AGL Energy", cost_usd: 540, investment_grade: "Investment Grade A" },
  { name: "Western Downs Wind Farm", country: "Australia", lat: -26.9, lng: 151.0, capacity: 396, turbines: 132, type: "onshore", year: 2023, status: "Operational", owner: "Origin Energy", developer: "Origin Energy", cost_usd: 480, investment_grade: "Investment Grade A" },
  { name: "Star of the South Offshore", country: "Australia", lat: -38.8, lng: 147.6, capacity: 2200, turbines: 200, type: "construction", year: 2028, status: "Under Construction", owner: "Meridian Energy", developer: "Meridian Energy", cost_usd: 4400, investment_grade: "Investment Grade A" },
  { name: "Stockyard Hill Wind Farm", country: "Australia", lat: -37.5, lng: 143.5, capacity: 530, turbines: 149, type: "onshore", year: 2021, status: "Operational", owner: "Tilt Renewables", developer: "Tilt Renewables", cost_usd: 850, investment_grade: "Investment Grade B" },
  { name: "Bald Hills Wind Farm", country: "Australia", lat: -38.5, lng: 146.4, capacity: 107, turbines: 52, type: "onshore", year: 2015, status: "Operational", owner: "CWP Energy", developer: "CWP Energy", cost_usd: 170, investment_grade: "Investment Grade B" },
  { name: "Ryan Corner Wind Farm", country: "Australia", lat: -37.8, lng: 142.5, capacity: 209, turbines: 71, type: "onshore", year: 2021, status: "Operational", owner: "Neoen", developer: "Neoen", cost_usd: 330, investment_grade: "Investment Grade B" },
  { name: "Lake Bonney Wind Farm", country: "Australia", lat: -37.4, lng: 140.3, capacity: 239, turbines: 115, type: "onshore", year: 2005, status: "Operational", owner: "Acciona Energía", developer: "Acciona Energía", cost_usd: 380, investment_grade: "Investment Grade A" },
  { name: "Lemnos Wind Farm", country: "Australia", lat: -37.2, lng: 147.2, capacity: 52, turbines: 13, type: "onshore", year: 2018, status: "Operational", owner: "AGL Energy", developer: "AGL Energy", cost_usd: 75, investment_grade: "Investment Grade A" },

  // ===== NEW ZEALAND =====
  { name: "Te Apiti Wind Farm", country: "New Zealand", lat: -40.2, lng: 175.8, capacity: 91, turbines: 55, type: "onshore", year: 2004, status: "Operational", owner: "Mercury NZ", developer: "Mercury NZ", cost_usd: 130, investment_grade: "Investment Grade A" },
  { name: "Tararua Wind Farm", country: "New Zealand", lat: -40.6, lng: 175.7, capacity: 161, turbines: 121, type: "onshore", year: 2007, status: "Operational", owner: "Contact Energy", developer: "Contact Energy", cost_usd: 260, investment_grade: "Investment Grade A" },
  { name: "Hau Nui Wind Farm", country: "New Zealand", lat: -41.3, lng: 175.8, capacity: 8.6, turbines: 15, type: "onshore", year: 2004, status: "Operational", owner: "Mercury NZ", developer: "Mercury NZ", cost_usd: 15, investment_grade: "Investment Grade B" },
  { name: "Waverley Wind Farm", country: "New Zealand", lat: -39.8, lng: 174.7, capacity: 143, turbines: 49, type: "onshore", year: 2020, status: "Operational", owner: "Genesis Energy", developer: "Genesis Energy", cost_usd: 230, investment_grade: "Investment Grade B" },
  { name: "Te Uku Wind Farm", country: "New Zealand", lat: -37.8, lng: 174.9, capacity: 64, turbines: 28, type: "onshore", year: 2011, status: "Operational", owner: "Turitea Wind Farm", developer: "Meridian Energy", cost_usd: 90, investment_grade: "Investment Grade A" },

  // ===== CANADA =====
  { name: "Blackspring Ridge", country: "Canada", lat: 50.1, lng: -112.9, capacity: 300, turbines: 166, type: "onshore", year: 2014, status: "Operational", owner: "EDF Renewables", developer: "EDF Renewables", cost_usd: 360, investment_grade: "Investment Grade A" },
  { name: "Rivière-du-Moulin Wind Farm", country: "Canada", lat: 48.4, lng: -70.7, capacity: 300, turbines: 150, type: "onshore", year: 2014, status: "Operational", owner: "Hydro-Quebec", developer: "Hydro-Quebec", cost_usd: 360, investment_grade: "Government Backed" },
  { name: "Grand Renewable Wind Farm", country: "Canada", lat: 42.9, lng: -80.3, capacity: 149, turbines: 67, type: "onshore", year: 2016, status: "Operational", owner: "Boralex", developer: "Boralex", cost_usd: 240, investment_grade: "Investment Grade B" },
  { name: "Anse-à-Valleau Wind Farm", country: "Canada", lat: 49.2, lng: -65.9, capacity: 100, turbines: 50, type: "onshore", year: 2012, status: "Operational", owner: "Enbridge", developer: "Enbridge", cost_usd: 140, investment_grade: "Investment Grade A" },
  { name: "Enbridge Ontario Wind", country: "Canada", lat: 44.1, lng: -81.3, capacity: 189, turbines: 126, type: "onshore", year: 2008, status: "Operational", owner: "TransAlta", developer: "TransAlta", cost_usd: 230, investment_grade: "Investment Grade B" },
  { name: "Manitoulin Island Wind", country: "Canada", lat: 45.7, lng: -82.3, capacity: 150, turbines: 60, type: "onshore", year: 2020, status: "Operational", owner: "Capital Power", developer: "Capital Power", cost_usd: 180, investment_grade: "Investment Grade B" },
  { name: "Pincher Creek Wind Farm", country: "Canada", lat: 49.5, lng: -114.0, capacity: 200, turbines: 89, type: "onshore", year: 2004, status: "Operational", owner: "Northland Power", developer: "Northland Power", cost_usd: 320, investment_grade: "Investment Grade B" },
  { name: "Shear Wind Nova Scotia", country: "Canada", lat: 45.2, lng: -61.6, capacity: 170, turbines: 68, type: "onshore", year: 2015, status: "Operational", owner: "EDF Renewables", developer: "EDF Renewables", cost_usd: 270, investment_grade: "Investment Grade A" },
  { name: "Highview Wind Farm", country: "Canada", lat: 43.9, lng: -80.6, capacity: 132, turbines: 52, type: "onshore", year: 2016, status: "Operational", owner: "Hydro-Quebec", developer: "Hydro-Quebec", cost_usd: 160, investment_grade: "Government Backed" },
  { name: "Cape Scott Wind Project", country: "Canada", lat: 50.8, lng: -128.4, capacity: 180, turbines: 60, type: "construction", year: 2027, status: "Under Construction", owner: "Boralex", developer: "Boralex", cost_usd: 360, investment_grade: "Investment Grade B" },
  { name: "Bekevar Wind Farm SK", country: "Canada", lat: 50.5, lng: -104.8, capacity: 177, turbines: 59, type: "onshore", year: 2014, status: "Operational", owner: "Enbridge", developer: "Enbridge", cost_usd: 210, investment_grade: "Investment Grade A" },

  // ===== MEXICO =====
  { name: "La Venta Wind Farm", country: "Mexico", lat: 16.5, lng: -94.7, capacity: 85, turbines: 98, type: "onshore", year: 2009, status: "Operational", owner: "EDF Renewables", developer: "EDF Renewables", cost_usd: 120, investment_grade: "Investment Grade A" },
  { name: "Parques Ecológicos de México", country: "Mexico", lat: 17.0, lng: -94.5, capacity: 396, turbines: 132, type: "onshore", year: 2021, status: "Operational", owner: "Iberdrola", developer: "Iberdrola", cost_usd: 480, investment_grade: "Investment Grade A" },
  { name: "Energia Sierra Juarez", country: "Mexico", lat: 32.0, lng: -116.1, capacity: 155, turbines: 47, type: "onshore", year: 2015, status: "Operational", owner: "Zuma Energia", developer: "Zuma Energia", cost_usd: 250, investment_grade: "Investment Grade B" },
  { name: "Fuerza Eolica Baja", country: "Mexico", lat: 30.5, lng: -115.9, capacity: 130, turbines: 52, type: "onshore", year: 2017, status: "Operational", owner: "Vive Energia", developer: "Vive Energia", cost_usd: 180, investment_grade: "Speculative" },
  { name: "Ventika Wind Farm", country: "Mexico", lat: 24.8, lng: -100.4, capacity: 252, turbines: 84, type: "onshore", year: 2016, status: "Operational", owner: "Macquarie", developer: "Macquarie Green Investment", cost_usd: 300, investment_grade: "Investment Grade B" },
  { name: "El Cortijo Wind Farm", country: "Mexico", lat: 16.9, lng: -94.6, capacity: 150, turbines: 50, type: "onshore", year: 2014, status: "Operational", owner: "Enel Green Power", developer: "Enel Green Power", cost_usd: 180, investment_grade: "Investment Grade A" },
  { name: "Zopiloapan Wind Farm", country: "Mexico", lat: 17.1, lng: -96.8, capacity: 200, turbines: 80, type: "onshore", year: 2018, status: "Operational", owner: "Acciona", developer: "Acciona Energía", cost_usd: 320, investment_grade: "Investment Grade A" },

  // ===== TAIWAN =====
  { name: "Formosa 1", country: "Taiwan", lat: 24.0, lng: 120.5, capacity: 128, turbines: 22, type: "offshore", year: 2020, status: "Operational", owner: "Taipower", developer: "Taipower", cost_usd: 580, investment_grade: "Government Backed" },
  { name: "Changfang & Xidao", country: "Taiwan", lat: 23.8, lng: 120.2, capacity: 900, turbines: 100, type: "offshore", year: 2023, status: "Operational", owner: "Copenhagen Infrastructure Partners", developer: "CIP", cost_usd: 3150, investment_grade: "Investment Grade A" },
  { name: "Greater Changhua 1 & 2a", country: "Taiwan", lat: 23.9, lng: 120.0, capacity: 900, turbines: 90, type: "offshore", year: 2022, status: "Operational", owner: "Ørsted", developer: "Ørsted", cost_usd: 3150, investment_grade: "Investment Grade A" },

  // ===== SOUTH KOREA =====
  { name: "Tamra Offshore", country: "South Korea", lat: 33.4, lng: 126.6, capacity: 30, turbines: 10, type: "offshore", year: 2012, status: "Operational", owner: "SK E&S", developer: "SK E&S", cost_usd: 100, investment_grade: "Investment Grade A" },
  { name: "Yellow Sea Offshore Project", country: "South Korea", lat: 35.0, lng: 125.8, capacity: 2400, turbines: 200, type: "construction", year: 2027, status: "Under Construction", owner: "Doosan", developer: "Doosan", cost_usd: 4800, investment_grade: "Investment Grade A" },

  // ===== JAPAN =====
  { name: "Fukushima Floating Demo", country: "Japan", lat: 37.4, lng: 141.1, capacity: 14, turbines: 3, type: "floating", year: 2016, status: "Operational", owner: "Eurus Energy", developer: "Eurus Energy", cost_usd: 65, investment_grade: "Investment Grade A" },
  { name: "Kitakyushu Offshore", country: "Japan", lat: 33.9, lng: 130.9, capacity: 14, turbines: 3, type: "offshore", year: 2013, status: "Operational", owner: "Japan Wind Development", developer: "Japan Wind Development", cost_usd: 65, investment_grade: "Investment Grade B" },
  { name: "Akita Noshiro Offshore", country: "Japan", lat: 40.0, lng: 139.8, capacity: 140, turbines: 20, type: "offshore", year: 2023, status: "Operational", owner: "Hitachi", developer: "Hitachi", cost_usd: 630, investment_grade: "Investment Grade A" },

  // ===== VIETNAM =====
  { name: "Trung Nam Wind Farm", country: "Vietnam", lat: 11.5, lng: 109.0, capacity: 152, turbines: 76, type: "onshore", year: 2021, status: "Operational", owner: "T&T Group", developer: "T&T Group", cost_usd: 240, investment_grade: "Speculative" },
  { name: "BIM Wind Farm", country: "Vietnam", lat: 11.6, lng: 108.7, capacity: 88, turbines: 22, type: "offshore", year: 2020, status: "Operational", owner: "SuperEnergy", developer: "SuperEnergy", cost_usd: 350, investment_grade: "Speculative" },
  { name: "Thang Long Offshore", country: "Vietnam", lat: 10.8, lng: 109.5, capacity: 3400, turbines: 300, type: "construction", year: 2026, status: "Under Construction", owner: "EVN", developer: "EVN", cost_usd: 6800, investment_grade: "Government Backed" },

  // ===== SOUTH AFRICA =====
  { name: "Loeriesfontein 2", country: "South Africa", lat: -30.5, lng: 19.5, capacity: 140, turbines: 61, type: "onshore", year: 2017, status: "Operational", owner: "Vestas", developer: "Vestas", cost_usd: 220, investment_grade: "Investment Grade A" },
  { name: "Cookhouse Wind Farm", country: "South Africa", lat: -33.4, lng: 25.7, capacity: 138, turbines: 66, type: "onshore", year: 2014, status: "Operational", owner: "Engie", developer: "Engie", cost_usd: 170, investment_grade: "Investment Grade A" },
  { name: "Nxuba Wind Farm", country: "South Africa", lat: -32.5, lng: 26.3, capacity: 148, turbines: 57, type: "onshore", year: 2020, status: "Operational", owner: "Eskom", developer: "Eskom", cost_usd: 210, investment_grade: "Government Backed" },

  // ===== EGYPT =====
  { name: "Zafarana Wind Farm", country: "Egypt", lat: 29.1, lng: 32.6, capacity: 545, turbines: 700, type: "onshore", year: 2010, status: "Operational", owner: "Siemens Gamesa", developer: "Siemens Gamesa", cost_usd: 870, investment_grade: "Investment Grade A" },
  { name: "Gulf of Suez Wind Farm", country: "Egypt", lat: 28.7, lng: 32.9, capacity: 500, turbines: 250, type: "construction", year: 2026, status: "Under Construction", owner: "ACWA Power", developer: "ACWA Power", cost_usd: 1000, investment_grade: "Investment Grade B" },

  // ===== MOROCCO =====
  { name: "Tarfaya Wind Farm", country: "Morocco", lat: 27.9, lng: -12.9, capacity: 301, turbines: 131, type: "onshore", year: 2014, status: "Operational", owner: "Siemens Gamesa", developer: "Siemens Gamesa", cost_usd: 420, investment_grade: "Investment Grade A" },
  { name: "Midelt Wind Farm", country: "Morocco", lat: 32.7, lng: -4.7, capacity: 210, turbines: 70, type: "onshore", year: 2022, status: "Operational", owner: "ACWA Power", developer: "ACWA Power", cost_usd: 250, investment_grade: "Investment Grade B" },

  // ===== KENYA =====
  { name: "Lake Turkana Wind Power", country: "Kenya", lat: 2.8, lng: 37.0, capacity: 310, turbines: 365, type: "onshore", year: 2019, status: "Operational", owner: "KenGen", developer: "KenGen", cost_usd: 430, investment_grade: "Government Backed" },

  // ===== TURKEY =====
  { name: "Rotor Wind Farm", country: "Turkey", lat: 38.6, lng: 26.9, capacity: 258, turbines: 86, type: "onshore", year: 2017, status: "Operational", owner: "Borusan EnBW Energy", developer: "Borusan EnBW Energy", cost_usd: 310, investment_grade: "Investment Grade B" },
  { name: "Soma Wind Farm", country: "Turkey", lat: 39.2, lng: 27.4, capacity: 135, turbines: 45, type: "onshore", year: 2014, status: "Operational", owner: "Akfen Renewable Energy", developer: "Akfen Renewable Energy", cost_usd: 160, investment_grade: "Speculative" },

  // ===== POLAND =====
  { name: "Baltic Power Offshore", country: "Poland", lat: 55.0, lng: 17.5, capacity: 1200, turbines: 76, type: "construction", year: 2026, status: "Under Construction", owner: "RWE Renewables", developer: "RWE Renewables", cost_usd: 2400, investment_grade: "Investment Grade A" },
  { name: "Nowa Sarzyna Wind Farm", country: "Poland", lat: 50.3, lng: 22.3, capacity: 120, turbines: 48, type: "onshore", year: 2013, status: "Operational", owner: "Innogy", developer: "Innogy", cost_usd: 140, investment_grade: "Investment Grade B" },
  { name: "Potegowo Wind Farm", country: "Poland", lat: 54.6, lng: 17.6, capacity: 185, turbines: 37, type: "onshore", year: 2018, status: "Operational", owner: "Polenergia", developer: "Polenergia", cost_usd: 300, investment_grade: "Investment Grade B" },
  { name: "Pomeranian Wind Farm", country: "Poland", lat: 54.3, lng: 16.8, capacity: 150, turbines: 60, type: "onshore", year: 2017, status: "Operational", owner: "EDF Renewables", developer: "EDF Renewables", cost_usd: 180, investment_grade: "Investment Grade A" },
  { name: "Tczew Wind Project", country: "Poland", lat: 53.8, lng: 18.8, capacity: 90, turbines: 45, type: "onshore", year: 2015, status: "Operational", owner: "Ørsted", developer: "Ørsted", cost_usd: 110, investment_grade: "Investment Grade A" },
  { name: "Wronki Wind Farm", country: "Poland", lat: 52.7, lng: 16.4, capacity: 80, turbines: 32, type: "onshore", year: 2016, status: "Operational", owner: "RWE Renewables", developer: "RWE Renewables", cost_usd: 130, investment_grade: "Investment Grade A" },

  // ===== PORTUGAL =====
  { name: "Alto Minho Wind Farm", country: "Portugal", lat: 41.9, lng: -8.5, capacity: 240, turbines: 120, type: "onshore", year: 2008, status: "Operational", owner: "Iberdrola", developer: "Iberdrola", cost_usd: 290, investment_grade: "Investment Grade A" },
  { name: "WindFloat Atlantic (Floating)", country: "Portugal", lat: 41.7, lng: -9.0, capacity: 25, turbines: 3, type: "floating", year: 2020, status: "Operational", owner: "Galp", developer: "Galp", cost_usd: 100, investment_grade: "Investment Grade B" },

  // ===== IRELAND =====
  { name: "Galway Wind Park", country: "Ireland", lat: 53.3, lng: -8.9, capacity: 169, turbines: 61, type: "onshore", year: 2016, status: "Operational", owner: "ESB", developer: "ESB", cost_usd: 240, investment_grade: "Government Backed" },
  { name: "Arklow Bank Wind Park 2", country: "Ireland", lat: 52.8, lng: -5.9, capacity: 800, turbines: 67, type: "construction", year: 2027, status: "Under Construction", owner: "SSE Renewables", developer: "SSE Renewables", cost_usd: 1600, investment_grade: "Investment Grade A" },

  // ===== CZECH REPUBLIC =====
  { name: "Doupov Wind Farm", country: "Czech Republic", lat: 50.3, lng: 13.1, capacity: 51, turbines: 34, type: "onshore", year: 2010, status: "Operational", owner: "ČEZ", developer: "ČEZ", cost_usd: 60, investment_grade: "Government Backed" },
  { name: "Chomutov Wind Farm", country: "Czech Republic", lat: 50.5, lng: 13.4, capacity: 75, turbines: 30, type: "onshore", year: 2013, status: "Operational", owner: "E.ON", developer: "E.ON", cost_usd: 90, investment_grade: "Investment Grade A" },
  { name: "Bohumin Wind Project", country: "Czech Republic", lat: 49.9, lng: 18.3, capacity: 60, turbines: 20, type: "onshore", year: 2016, status: "Operational", owner: "Bohemia Energy", developer: "Bohemia Energy", cost_usd: 70, investment_grade: "Investment Grade B" },
  { name: "Krušné Hory Wind Park", country: "Czech Republic", lat: 50.6, lng: 13.0, capacity: 80, turbines: 32, type: "onshore", year: 2014, status: "Operational", owner: "ČEZ", developer: "ČEZ", cost_usd: 130, investment_grade: "Government Backed" },

  // ===== ESTONIA =====
  { name: "Pakri Wind Farm", country: "Estonia", lat: 59.4, lng: 23.9, capacity: 18, turbines: 6, type: "offshore", year: 2012, status: "Operational", owner: "Nelja Energia", developer: "Nelja Energia", cost_usd: 65, investment_grade: "Investment Grade B" },
  { name: "Enefit Green Aulepa", country: "Estonia", lat: 58.9, lng: 23.5, capacity: 48, turbines: 16, type: "onshore", year: 2020, status: "Operational", owner: "Eesti Energia", developer: "Eesti Energia", cost_usd: 60, investment_grade: "Government Backed" },

  // ===== KAZAKHSTAN =====
  { name: "Shelek Wind Farm", country: "Kazakhstan", lat: 43.4, lng: 78.2, capacity: 1000, turbines: 250, type: "construction", year: 2026, status: "Under Construction", owner: "Samruk-Energy", developer: "Samruk-Energy", cost_usd: 2000, investment_grade: "Government Backed" },

  // ===== SAUDI ARABIA =====
  { name: "Dumat Al-Jandal Wind Farm", country: "Saudi Arabia", lat: 29.8, lng: 39.9, capacity: 400, turbines: 99, type: "onshore", year: 2023, status: "Operational", owner: "Saudi Aramco", developer: "Saudi Aramco", cost_usd: 560, investment_grade: "Government Backed" },

  // ===== UAE / Middle East =====
  { name: "Al Dhafra Wind (UAE)", country: "UAE", lat: 23.5, lng: 53.8, capacity: 103, turbines: 30, type: "construction", year: 2026, status: "Under Construction", owner: "DEWA", developer: "DEWA", cost_usd: 300, investment_grade: "Government Backed" },

  // ===== PAKISTAN =====
  { name: "Three Gorges Second Wind Farm", country: "Pakistan", lat: 24.8, lng: 67.5, capacity: 100, turbines: 58, type: "onshore", year: 2017, status: "Operational", owner: "Fauji Fertilizer", developer: "Fauji Energy", cost_usd: 140, investment_grade: "Speculative" },

  // ===== RUSSIA =====
  { name: "Ulyanovsk Wind Cluster", country: "Russia", lat: 54.3, lng: 48.4, capacity: 115, turbines: 34, type: "onshore", year: 2019, status: "Operational", owner: "NovAtek", developer: "NovAtek", cost_usd: 160, investment_grade: "Government Backed" },

  // ===== UKRAINE =====
  { name: "Orlovska Wind Farm", country: "Ukraine", lat: 47.7, lng: 36.5, capacity: 100, turbines: 40, type: "onshore", year: 2020, status: "Operational", owner: "DTEK", developer: "DTEK", cost_usd: 140, investment_grade: "Speculative" },
  { name: "Syvash Wind Farm", country: "Ukraine", lat: 45.9, lng: 33.7, capacity: 250, turbines: 100, type: "onshore", year: 2020, status: "Operational", owner: "Windcraft Ukraine", developer: "Windcraft Ukraine", cost_usd: 350, investment_grade: "Speculative" },
  { name: "Primorska Wind Farm", country: "Ukraine", lat: 46.7, lng: 35.5, capacity: 200, turbines: 80, type: "onshore", year: 2019, status: "Operational", owner: "NBT", developer: "NBT", cost_usd: 320, investment_grade: "Speculative" },
  { name: "Kherson Steppe Wind", country: "Ukraine", lat: 46.8, lng: 32.9, capacity: 150, turbines: 60, type: "onshore", year: 2018, status: "Operational", owner: "Acciona", developer: "Acciona Energía", cost_usd: 180, investment_grade: "Speculative" },

  // ===== INDONESIA =====
  { name: "Sidrap Wind Farm", country: "Indonesia", lat: -3.7, lng: 119.9, capacity: 75, turbines: 30, type: "onshore", year: 2018, status: "Operational", owner: "PLN", developer: "PLN", cost_usd: 90, investment_grade: "Government Backed" },

  // ===== PHILIPPINES =====
  { name: "Burgos Wind Farm", country: "Philippines", lat: 18.5, lng: 120.6, capacity: 150, turbines: 50, type: "onshore", year: 2014, status: "Operational", owner: "Energy Development Corporation", developer: "EDC", cost_usd: 180, investment_grade: "Investment Grade B" },

  // ===== AUSTRIA =====
  { name: "Windpark Mitterberg", country: "Austria", lat: 47.4, lng: 14.8, capacity: 85, turbines: 34, type: "onshore", year: 2015, status: "Operational", owner: "Envia-M", developer: "Envia-M", cost_usd: 120, investment_grade: "Investment Grade B" },
  { name: "Windpark Steinriegel", country: "Austria", lat: 47.1, lng: 15.3, capacity: 69, turbines: 23, type: "onshore", year: 2018, status: "Operational", owner: "IG Windkraft", developer: "IG Windkraft", cost_usd: 85, investment_grade: "Investment Grade B" },
  { name: "Windpark Pretul", country: "Austria", lat: 47.5, lng: 15.4, capacity: 38, turbines: 10, type: "onshore", year: 2017, status: "Operational", owner: "EVN", developer: "EVN", cost_usd: 60, investment_grade: "Investment Grade B" },

  // ===== SWITZERLAND =====
  { name: "Windpark Mont Crosin", country: "Switzerland", lat: 47.1, lng: 7.1, capacity: 43, turbines: 16, type: "onshore", year: 2013, status: "Operational", owner: "Axpo", developer: "Axpo", cost_usd: 60, investment_grade: "Investment Grade B" },
  { name: "Windpark Gries", country: "Switzerland", lat: 46.5, lng: 8.3, capacity: 17, turbines: 4, type: "onshore", year: 2019, status: "Operational", owner: "Alpiq", developer: "Alpiq", cost_usd: 25, investment_grade: "Investment Grade B" },
  { name: "Windpark Entlebuch", country: "Switzerland", lat: 46.9, lng: 8.1, capacity: 22, turbines: 5, type: "onshore", year: 2022, status: "Operational", owner: "BKW", developer: "BKW", cost_usd: 30, investment_grade: "Investment Grade B" },

  // ===== ROMANIA =====
  { name: "Fantanele-Cogealac Wind Farm", country: "Romania", lat: 44.5, lng: 28.6, capacity: 600, turbines: 240, type: "onshore", year: 2012, status: "Operational", owner: "Enel Green Power", developer: "Enel Green Power", cost_usd: 720, investment_grade: "Investment Grade A" },
  { name: "Crucea Wind Farm", country: "Romania", lat: 44.2, lng: 28.3, capacity: 108, turbines: 54, type: "onshore", year: 2014, status: "Operational", owner: "Vestas", developer: "Vestas", cost_usd: 130, investment_grade: "Investment Grade A" },
  { name: "Pestera Wind Farm", country: "Romania", lat: 44.1, lng: 28.2, capacity: 70, turbines: 35, type: "onshore", year: 2016, status: "Operational", owner: "EDF Renewables", developer: "EDF Renewables", cost_usd: 100, investment_grade: "Investment Grade A" },
  { name: "Dobrogea Wind Project", country: "Romania", lat: 43.9, lng: 28.4, capacity: 90, turbines: 45, type: "onshore", year: 2017, status: "Operational", owner: "CEZ", developer: "CEZ", cost_usd: 110, investment_grade: "Investment Grade B" },

  // ===== BULGARIA =====
  { name: "Kavarna Wind Farm", country: "Bulgaria", lat: 43.4, lng: 28.4, capacity: 156, turbines: 78, type: "onshore", year: 2012, status: "Operational", owner: "EDF Renewables", developer: "EDF Renewables", cost_usd: 190, investment_grade: "Investment Grade A" },
  { name: "Shabla Wind Farm", country: "Bulgaria", lat: 43.5, lng: 28.5, capacity: 120, turbines: 60, type: "onshore", year: 2013, status: "Operational", owner: "EVN", developer: "EVN", cost_usd: 140, investment_grade: "Investment Grade B" },
  { name: "Sveti Nikola Wind Farm", country: "Bulgaria", lat: 43.2, lng: 28.1, capacity: 72, turbines: 36, type: "onshore", year: 2010, status: "Operational", owner: "Windpark Bulgaria", developer: "Windpark Bulgaria", cost_usd: 85, investment_grade: "Speculative" },

  // ===== HUNGARY =====
  { name: "Eger Wind Farm", country: "Hungary", lat: 47.9, lng: 20.4, capacity: 84, turbines: 42, type: "onshore", year: 2009, status: "Operational", owner: "EDF Renewables", developer: "EDF Renewables", cost_usd: 100, investment_grade: "Investment Grade A" },
  { name: "Pakozd Wind Farm", country: "Hungary", lat: 47.2, lng: 18.6, capacity: 63, turbines: 21, type: "onshore", year: 2011, status: "Operational", owner: "Duna Energia", developer: "Duna Energia", cost_usd: 75, investment_grade: "Speculative" },
  { name: "Kishajmas Wind Project", country: "Hungary", lat: 47.5, lng: 16.9, capacity: 50, turbines: 20, type: "onshore", year: 2015, status: "Operational", owner: "EON", developer: "EON", cost_usd: 80, investment_grade: "Investment Grade B" },

  // ===== CROATIA =====
  { name: "Lukovac Wind Farm", country: "Croatia", lat: 43.9, lng: 16.2, capacity: 48, turbines: 16, type: "onshore", year: 2013, status: "Operational", owner: "HEP", developer: "HEP", cost_usd: 60, investment_grade: "Government Backed" },
  { name: "Korlat Wind Farm", country: "Croatia", lat: 44.1, lng: 15.9, capacity: 57, turbines: 19, type: "onshore", year: 2018, status: "Operational", owner: "Adria Wind Power", developer: "Adria Wind Power", cost_usd: 70, investment_grade: "Speculative" },
  { name: "Rudine Wind Farm", country: "Croatia", lat: 43.7, lng: 16.5, capacity: 30, turbines: 10, type: "onshore", year: 2015, status: "Operational", owner: "EDF Renewables", developer: "EDF Renewables", cost_usd: 35, investment_grade: "Investment Grade A" },

  // ===== SERBIA =====
  { name: "Cibuk 1 Wind Farm", country: "Serbia", lat: 44.8, lng: 21.3, capacity: 158, turbines: 57, type: "onshore", year: 2019, status: "Operational", owner: "MK Group", developer: "MK Group", cost_usd: 250, investment_grade: "Speculative" },
  { name: "Kovacica Wind Farm", country: "Serbia", lat: 45.1, lng: 20.6, capacity: 102, turbines: 34, type: "onshore", year: 2019, status: "Operational", owner: "CWP Global", developer: "CWP Global", cost_usd: 120, investment_grade: "Speculative" },
  { name: "Maestrale Wind Farm", country: "Serbia", lat: 44.6, lng: 20.2, capacity: 105, turbines: 35, type: "onshore", year: 2021, status: "Operational", owner: "EDF Renewables", developer: "EDF Renewables", cost_usd: 130, investment_grade: "Investment Grade A" },

  // ===== LITHUANIA =====
  { name: "Vydmantai Wind Farm", country: "Lithuania", lat: 56.1, lng: 21.6, capacity: 92, turbines: 46, type: "onshore", year: 2012, status: "Operational", owner: "Enefit Green", developer: "Enefit Green", cost_usd: 150, investment_grade: "Investment Grade B" },
  { name: "Vėjo Projektas Wind Farm", country: "Lithuania", lat: 56.4, lng: 23.1, capacity: 60, turbines: 30, type: "onshore", year: 2015, status: "Operational", owner: "Ignitis Group", developer: "Ignitis Group", cost_usd: 70, investment_grade: "Government Backed" },
  { name: "Pagegiai Wind Farm", country: "Lithuania", lat: 55.2, lng: 22.0, capacity: 70, turbines: 35, type: "onshore", year: 2019, status: "Operational", owner: "Enel Green Power", developer: "Enel Green Power", cost_usd: 100, investment_grade: "Investment Grade A" },

  // ===== LATVIA =====
  { name: "Nicas Wind Farm", country: "Latvia", lat: 56.3, lng: 21.0, capacity: 68, turbines: 34, type: "onshore", year: 2011, status: "Operational", owner: "Latvenergo", developer: "Latvenergo", cost_usd: 110, investment_grade: "Government Backed" },
  { name: "Saldus Wind Farm", country: "Latvia", lat: 56.7, lng: 22.5, capacity: 50, turbines: 25, type: "onshore", year: 2014, status: "Operational", owner: "Enefit Green", developer: "Enefit Green", cost_usd: 80, investment_grade: "Investment Grade B" },
  { name: "Aizpute Wind Park", country: "Latvia", lat: 56.7, lng: 21.6, capacity: 45, turbines: 15, type: "onshore", year: 2016, status: "Operational", owner: "Vestas", developer: "Vestas", cost_usd: 55, investment_grade: "Investment Grade A" },

  // ===== ALBANIA =====
  { name: "Karavasta Wind Farm", country: "Albania", lat: 41.0, lng: 19.6, capacity: 50, turbines: 25, type: "onshore", year: 2021, status: "Operational", owner: "Statkraft", developer: "Statkraft", cost_usd: 80, investment_grade: "Government Backed" },
  { name: "Vlora Wind Farm", country: "Albania", lat: 40.4, lng: 19.7, capacity: 30, turbines: 12, type: "onshore", year: 2019, status: "Operational", owner: "Geo-Celle", developer: "Geo-Celle", cost_usd: 35, investment_grade: "Speculative" },
  { name: "Lushnje Wind Project", country: "Albania", lat: 40.9, lng: 19.7, capacity: 40, turbines: 16, type: "construction", year: 2026, status: "Under Construction", owner: "EDF Renewables", developer: "EDF Renewables", cost_usd: 80, investment_grade: "Investment Grade A" },

  // ===== LUXEMBOURG =====
  { name: "Hautes Fagnes Wind Farm", country: "Luxembourg", lat: 49.7, lng: 6.4, capacity: 22, turbines: 11, type: "onshore", year: 2014, status: "Operational", owner: "EDF Renewables", developer: "EDF Renewables", cost_usd: 30, investment_grade: "Investment Grade A" },
  { name: "Roodt Wind Farm", country: "Luxembourg", lat: 49.9, lng: 6.3, capacity: 18, turbines: 9, type: "onshore", year: 2018, status: "Operational", owner: "Enel Green Power", developer: "Enel Green Power", cost_usd: 20, investment_grade: "Investment Grade A" },

  // ===== SLOVAKIA =====
  { name: "Cerova Wind Farm", country: "Slovakia", lat: 48.5, lng: 17.1, capacity: 50, turbines: 20, type: "onshore", year: 2012, status: "Operational", owner: "Enel Green Power", developer: "Enel Green Power", cost_usd: 80, investment_grade: "Investment Grade A" },
  { name: "Skalite Wind Farm", country: "Slovakia", lat: 49.4, lng: 18.8, capacity: 38, turbines: 19, type: "onshore", year: 2015, status: "Operational", owner: "SE", developer: "SE", cost_usd: 60, investment_grade: "Government Backed" },
  { name: "Hornad Wind Project", country: "Slovakia", lat: 48.7, lng: 21.2, capacity: 45, turbines: 18, type: "onshore", year: 2017, status: "Operational", owner: "VSE", developer: "VSE", cost_usd: 55, investment_grade: "Investment Grade B" },

  // ===== THAILAND =====
  { name: "Khao Kho Wind Farm", country: "Thailand", lat: 16.5, lng: 101.0, capacity: 103, turbines: 24, type: "onshore", year: 2015, status: "Operational", owner: "Gulf Energy", developer: "Gulf Energy", cost_usd: 140, investment_grade: "Investment Grade B" },
  { name: "Hua Sai Wind Farm", country: "Thailand", lat: 8.1, lng: 100.4, capacity: 90, turbines: 36, type: "onshore", year: 2012, status: "Operational", owner: "B.Grimm Power", developer: "B.Grimm Power", cost_usd: 110, investment_grade: "Investment Grade B" },
  { name: "Pattani Wind Farm", country: "Thailand", lat: 6.9, lng: 101.2, capacity: 60, turbines: 24, type: "onshore", year: 2018, status: "Operational", owner: "Electricity Generating Authority", developer: "EGAT", cost_usd: 70, investment_grade: "Government Backed" },

  // ===== MALAYSIA =====
  { name: "Samso Malaysia Wind", country: "Malaysia", lat: 5.4, lng: 118.1, capacity: 50, turbines: 20, type: "onshore", year: 2018, status: "Operational", owner: "Gentari", developer: "Gentari", cost_usd: 80, investment_grade: "Investment Grade B" },
  { name: "Bukit Selambau Wind", country: "Malaysia", lat: 5.7, lng: 100.4, capacity: 35, turbines: 14, type: "onshore", year: 2016, status: "Operational", owner: "Tenaga Nasional", developer: "Tenaga Nasional", cost_usd: 55, investment_grade: "Government Backed" },
  { name: "Tanjung Batu Wind Project", country: "Malaysia", lat: 4.9, lng: 115.1, capacity: 60, turbines: 24, type: "construction", year: 2026, status: "Under Construction", owner: "Cypark Resources", developer: "Cypark Resources", cost_usd: 120, investment_grade: "Speculative" },

  // ===== MONGOLIA =====
  { name: "Sainshand Wind Farm", country: "Mongolia", lat: 44.9, lng: 110.1, capacity: 200, turbines: 80, type: "onshore", year: 2020, status: "Operational", owner: "Mongolian Wind Energy", developer: "Mongolian Wind Energy", cost_usd: 320, investment_grade: "Speculative" },
  { name: "Tsetsii Wind Farm", country: "Mongolia", lat: 43.6, lng: 103.8, capacity: 150, turbines: 60, type: "onshore", year: 2021, status: "Operational", owner: "Clean Energy Asia", developer: "Clean Energy Asia", cost_usd: 180, investment_grade: "Speculative" },
  { name: "Salkhit Wind Farm", country: "Mongolia", lat: 47.6, lng: 107.5, capacity: 50, turbines: 31, type: "onshore", year: 2013, status: "Operational", owner: "Newcom", developer: "Newcom", cost_usd: 80, investment_grade: "Speculative" },

  // ===== BANGLADESH =====
  { name: "Feni Wind Farm", country: "Bangladesh", lat: 22.9, lng: 91.4, capacity: 30, turbines: 15, type: "onshore", year: 2017, status: "Operational", owner: "US-Bangla Energy", developer: "US-Bangla Energy", cost_usd: 35, investment_grade: "Speculative" },
  { name: "Cox's Bazar Wind Project", country: "Bangladesh", lat: 21.5, lng: 92.0, capacity: 50, turbines: 20, type: "construction", year: 2026, status: "Under Construction", owner: "BPDB", developer: "BPDB", cost_usd: 100, investment_grade: "Government Backed" },

  // ===== SRI LANKA =====
  { name: "Mannar Wind Power", country: "Sri Lanka", lat: 8.9, lng: 79.9, capacity: 100, turbines: 25, type: "onshore", year: 2023, status: "Operational", owner: "Windforce", developer: "Windforce", cost_usd: 140, investment_grade: "Speculative" },
  { name: "Puttalam Wind Farm", country: "Sri Lanka", lat: 8.0, lng: 79.8, capacity: 50, turbines: 20, type: "onshore", year: 2020, status: "Operational", owner: "Ceylon Electricity Board", developer: "CEB", cost_usd: 80, investment_grade: "Government Backed" },

  // ===== MYANMAR =====
  { name: "Magway Wind Farm", country: "Myanmar", lat: 20.1, lng: 94.9, capacity: 80, turbines: 40, type: "onshore", year: 2020, status: "Operational", owner: "ENEX", developer: "ENEX", cost_usd: 130, investment_grade: "Speculative" },
  { name: "Kayah Wind Project", country: "Myanmar", lat: 19.2, lng: 97.2, capacity: 45, turbines: 18, type: "construction", year: 2026, status: "Under Construction", owner: "Myanmar Energy Master Plan", developer: "Myanmar Energy", cost_usd: 90, investment_grade: "Speculative" },

  // ===== JORDAN =====
  { name: "Tafila Wind Farm", country: "Jordan", lat: 30.8, lng: 35.6, capacity: 117, turbines: 38, type: "onshore", year: 2015, status: "Operational", owner: "Mainstream Renewable Power", developer: "Mainstream Renewable Power", cost_usd: 140, investment_grade: "Investment Grade B" },
  { name: "Aqaba Wind Farm", country: "Jordan", lat: 29.6, lng: 35.0, capacity: 90, turbines: 36, type: "onshore", year: 2019, status: "Operational", owner: "ACWA Power", developer: "ACWA Power", cost_usd: 110, investment_grade: "Investment Grade B" },

  // ===== IRAN =====
  { name: "Otaghvar Wind Farm", country: "Iran", lat: 35.2, lng: 50.8, capacity: 100, turbines: 50, type: "onshore", year: 2015, status: "Operational", owner: "Farab Energy", developer: "Farab Energy", cost_usd: 140, investment_grade: "Government Backed" },
  { name: "Manjil Wind Farm", country: "Iran", lat: 36.7, lng: 49.4, capacity: 91, turbines: 131, type: "onshore", year: 2009, status: "Operational", owner: "Tavanir", developer: "Tavanir", cost_usd: 130, investment_grade: "Government Backed" },
  { name: "Zabol Wind Farm", country: "Iran", lat: 31.0, lng: 61.5, capacity: 250, turbines: 100, type: "onshore", year: 2021, status: "Operational", owner: "MAPNA Group", developer: "MAPNA Group", cost_usd: 350, investment_grade: "Government Backed" },

  // ===== OMAN =====
  { name: "Dhofar Wind Farm", country: "Oman", lat: 17.0, lng: 54.0, capacity: 50, turbines: 13, type: "onshore", year: 2020, status: "Operational", owner: "OPWP", developer: "OPWP", cost_usd: 80, investment_grade: "Government Backed" },
  { name: "Duqm Wind Project", country: "Oman", lat: 19.7, lng: 57.8, capacity: 100, turbines: 40, type: "construction", year: 2026, status: "Under Construction", owner: "Masdar", developer: "Masdar", cost_usd: 200, investment_grade: "Government Backed" },

  // ===== KUWAIT =====
  { name: "Shagaya Wind Farm", country: "Kuwait", lat: 29.1, lng: 47.6, capacity: 70, turbines: 35, type: "construction", year: 2026, status: "Under Construction", owner: "KNPC", developer: "KNPC", cost_usd: 140, investment_grade: "Government Backed" },

  // ===== BAHRAIN =====
  { name: "Bahrain Wind Energy Project", country: "Bahrain", lat: 26.2, lng: 50.6, capacity: 30, turbines: 12, type: "construction", year: 2027, status: "Under Construction", owner: "Nogaholding", developer: "Nogaholding", cost_usd: 60, investment_grade: "Government Backed" },

  // ===== ETHIOPIA =====
  { name: "Adama Wind Farm I", country: "Ethiopia", lat: 8.4, lng: 39.4, capacity: 51, turbines: 34, type: "onshore", year: 2012, status: "Operational", owner: "Scatec", developer: "Scatec", cost_usd: 60, investment_grade: "Investment Grade B" },
  { name: "Adama Wind Farm II", country: "Ethiopia", lat: 8.3, lng: 39.3, capacity: 153, turbines: 102, type: "onshore", year: 2015, status: "Operational", owner: "Africa50", developer: "Africa50", cost_usd: 180, investment_grade: "Speculative" },
  { name: "Ashegoda Wind Farm", country: "Ethiopia", lat: 13.5, lng: 39.5, capacity: 120, turbines: 84, type: "onshore", year: 2014, status: "Operational", owner: "Ethiopian Electric Power", developer: "EEP", cost_usd: 140, investment_grade: "Government Backed" },
  { name: "Debre Birhan Wind Farm", country: "Ethiopia", lat: 9.7, lng: 39.5, capacity: 100, turbines: 50, type: "onshore", year: 2021, status: "Operational", owner: "Vestas", developer: "Vestas", cost_usd: 140, investment_grade: "Investment Grade A" },

  // ===== TANZANIA =====
  { name: "Singida Wind Farm", country: "Tanzania", lat: -4.8, lng: 34.7, capacity: 300, turbines: 126, type: "construction", year: 2026, status: "Under Construction", owner: "TANESCO", developer: "TANESCO", cost_usd: 600, investment_grade: "Government Backed" },
  { name: "Kipengere Wind Farm", country: "Tanzania", lat: -9.2, lng: 34.2, capacity: 100, turbines: 40, type: "onshore", year: 2022, status: "Operational", owner: "Scatec", developer: "Scatec", cost_usd: 140, investment_grade: "Investment Grade B" },
  { name: "Arusha Wind Project", country: "Tanzania", lat: -3.4, lng: 36.7, capacity: 75, turbines: 30, type: "onshore", year: 2023, status: "Operational", owner: "Africa Energy Management Platform", developer: "AEMP", cost_usd: 90, investment_grade: "Speculative" },

  // ===== NIGERIA =====
  { name: "Katsina Wind Farm", country: "Nigeria", lat: 13.0, lng: 7.6, capacity: 10, turbines: 37, type: "onshore", year: 2010, status: "Operational", owner: "FIRS", developer: "FIRS", cost_usd: 15, investment_grade: "Government Backed" },
  { name: "Kankara Wind Farm", country: "Nigeria", lat: 12.5, lng: 7.5, capacity: 50, turbines: 25, type: "construction", year: 2026, status: "Under Construction", owner: "Sterling Energy", developer: "Sterling Energy", cost_usd: 100, investment_grade: "Speculative" },
  { name: "Jigawa Wind Project", country: "Nigeria", lat: 12.2, lng: 9.4, capacity: 100, turbines: 40, type: "construction", year: 2027, status: "Under Construction", owner: "Mainstream Renewable Power", developer: "Mainstream Renewable Power", cost_usd: 200, investment_grade: "Investment Grade B" },

  // ===== MOZAMBIQUE =====
  { name: "Namaacha Wind Farm", country: "Mozambique", lat: -26.0, lng: 32.1, capacity: 70, turbines: 28, type: "onshore", year: 2021, status: "Operational", owner: "EDM", developer: "EDM", cost_usd: 100, investment_grade: "Government Backed" },
  { name: "Macuze Wind Farm", country: "Mozambique", lat: -18.5, lng: 36.3, capacity: 120, turbines: 48, type: "construction", year: 2026, status: "Under Construction", owner: "Enel Green Power", developer: "Enel Green Power", cost_usd: 240, investment_grade: "Investment Grade A" },
  { name: "Maputo Wind Project", country: "Mozambique", lat: -25.8, lng: 32.6, capacity: 60, turbines: 24, type: "onshore", year: 2022, status: "Operational", owner: "Mainstream Renewable Power", developer: "Mainstream Renewable Power", cost_usd: 70, investment_grade: "Investment Grade B" },

  // ===== NAMIBIA =====
  { name: "Lüderitz Wind Farm", country: "Namibia", lat: -26.6, lng: 15.2, capacity: 45, turbines: 18, type: "onshore", year: 2020, status: "Operational", owner: "Namibia Power Corporation", developer: "NamPower", cost_usd: 55, investment_grade: "Government Backed" },
  { name: "Swakopmund Wind Farm", country: "Namibia", lat: -22.7, lng: 14.5, capacity: 60, turbines: 24, type: "onshore", year: 2022, status: "Operational", owner: "Scatec", developer: "Scatec", cost_usd: 70, investment_grade: "Investment Grade B" },
  { name: "Namibia Coastal Wind", country: "Namibia", lat: -23.5, lng: 14.6, capacity: 200, turbines: 80, type: "construction", year: 2026, status: "Under Construction", owner: "Mainstream Renewable Power", developer: "Mainstream Renewable Power", cost_usd: 400, investment_grade: "Investment Grade B" },

  // ===== TUNISIA =====
  { name: "Sidi Daoud Wind Farm", country: "Tunisia", lat: 37.0, lng: 11.1, capacity: 54, turbines: 35, type: "onshore", year: 2009, status: "Operational", owner: "STEG", developer: "STEG", cost_usd: 65, investment_grade: "Government Backed" },
  { name: "Bir Mcherga Wind Farm", country: "Tunisia", lat: 36.3, lng: 9.7, capacity: 120, turbines: 48, type: "onshore", year: 2020, status: "Operational", owner: "EDF Renewables", developer: "EDF Renewables", cost_usd: 140, investment_grade: "Investment Grade A" },
  { name: "Thala Wind Project", country: "Tunisia", lat: 35.6, lng: 8.7, capacity: 90, turbines: 36, type: "construction", year: 2026, status: "Under Construction", owner: "Enel Green Power", developer: "Enel Green Power", cost_usd: 180, investment_grade: "Investment Grade A" },

  // ===== ALGERIA =====
  { name: "Adrar Wind Farm", country: "Algeria", lat: 27.9, lng: -0.3, capacity: 120, turbines: 60, type: "onshore", year: 2019, status: "Operational", owner: "Sonelgaz", developer: "Sonelgaz", cost_usd: 140, investment_grade: "Government Backed" },
  { name: "Tindouf Wind Project", country: "Algeria", lat: 27.7, lng: -8.1, capacity: 200, turbines: 80, type: "construction", year: 2027, status: "Under Construction", owner: "EDF Renewables", developer: "EDF Renewables", cost_usd: 400, investment_grade: "Investment Grade A" },
  { name: "Kabertene Wind Farm", country: "Algeria", lat: 29.2, lng: 1.8, capacity: 150, turbines: 60, type: "onshore", year: 2022, status: "Operational", owner: "Vestas", developer: "Vestas", cost_usd: 180, investment_grade: "Investment Grade A" },

  // ===== GHANA =====
  { name: "Ayitepa Wind Farm", country: "Ghana", lat: 5.6, lng: -0.1, capacity: 50, turbines: 20, type: "onshore", year: 2020, status: "Operational", owner: "GRIDCO", developer: "GRIDCO", cost_usd: 80, investment_grade: "Government Backed" },
  { name: "Accra Wind Energy", country: "Ghana", lat: 5.7, lng: -0.2, capacity: 40, turbines: 16, type: "onshore", year: 2022, status: "Operational", owner: "Blue Power Energy", developer: "Blue Power Energy", cost_usd: 55, investment_grade: "Speculative" },
  { name: "Cape Three Points Offshore", country: "Ghana", lat: 4.8, lng: -2.1, capacity: 120, turbines: 30, type: "construction", year: 2027, status: "Under Construction", owner: "Lekela Power", developer: "Lekela Power", cost_usd: 240, investment_grade: "Investment Grade B" },

  // ===== COLOMBIA =====
  { name: "Jepirachi Wind Farm", country: "Colombia", lat: 12.2, lng: -72.2, capacity: 20, turbines: 15, type: "onshore", year: 2004, status: "Operational", owner: "AES Colombia", developer: "AES Colombia", cost_usd: 30, investment_grade: "Investment Grade A" },
  { name: "Alta Guajira Wind Farm", country: "Colombia", lat: 11.9, lng: -72.4, capacity: 500, turbines: 166, type: "construction", year: 2026, status: "Under Construction", owner: "Celsia", developer: "Celsia", cost_usd: 1000, investment_grade: "Investment Grade B" },
  { name: "Guajira 1 Wind Farm", country: "Colombia", lat: 11.6, lng: -72.5, capacity: 200, turbines: 67, type: "onshore", year: 2022, status: "Operational", owner: "Enel Green Power", developer: "Enel Green Power", cost_usd: 320, investment_grade: "Investment Grade A" },
  { name: "Los Laureles Wind Farm", country: "Colombia", lat: 11.3, lng: -72.6, capacity: 150, turbines: 50, type: "onshore", year: 2023, status: "Operational", owner: "EDF Renewables", developer: "EDF Renewables", cost_usd: 180, investment_grade: "Investment Grade A" },

  // ===== PERU =====
  { name: "Cupisnique Wind Farm", country: "Peru", lat: -7.5, lng: -79.5, capacity: 83, turbines: 45, type: "onshore", year: 2014, status: "Operational", owner: "Fenix Power", developer: "Fenix Power", cost_usd: 130, investment_grade: "Investment Grade B" },
  { name: "Talara Wind Farm", country: "Peru", lat: -4.6, lng: -81.3, capacity: 30, turbines: 11, type: "onshore", year: 2012, status: "Operational", owner: "Enel Green Power", developer: "Enel Green Power", cost_usd: 35, investment_grade: "Investment Grade A" },
  { name: "Wayra I Wind Farm", country: "Peru", lat: -14.0, lng: -75.8, capacity: 132, turbines: 45, type: "onshore", year: 2014, status: "Operational", owner: "Engie Peru", developer: "Engie Peru", cost_usd: 160, investment_grade: "Investment Grade A" },

  // ===== ECUADOR =====
  { name: "Villonaco Wind Farm", country: "Ecuador", lat: -3.9, lng: -79.4, capacity: 16, turbines: 11, type: "onshore", year: 2013, status: "Operational", owner: "EDF Renewables", developer: "EDF Renewables", cost_usd: 20, investment_grade: "Investment Grade A" },
  { name: "Minas de Huascachaca", country: "Ecuador", lat: -2.8, lng: -79.1, capacity: 50, turbines: 20, type: "onshore", year: 2019, status: "Operational", owner: "Mainstream Renewable Power", developer: "Mainstream Renewable Power", cost_usd: 80, investment_grade: "Investment Grade B" },
  { name: "El Aromo Wind Farm", country: "Ecuador", lat: -0.9, lng: -80.7, capacity: 100, turbines: 40, type: "construction", year: 2026, status: "Under Construction", owner: "Corporación Eléctrica del Ecuador", developer: "CELEC", cost_usd: 200, investment_grade: "Government Backed" },

  // ===== BOLIVIA =====
  { name: "Warnes Wind Farm", country: "Bolivia", lat: -17.5, lng: -63.2, capacity: 75, turbines: 30, type: "onshore", year: 2020, status: "Operational", owner: "EDF Renewables", developer: "EDF Renewables", cost_usd: 90, investment_grade: "Investment Grade A" },
  { name: "Oruro Wind Project", country: "Bolivia", lat: -17.9, lng: -67.1, capacity: 100, turbines: 40, type: "construction", year: 2026, status: "Under Construction", owner: "ENDE", developer: "ENDE", cost_usd: 200, investment_grade: "Government Backed" },

  // ===== URUGUAY =====
  { name: "El Parque Eólico Pepe Núñez", country: "Uruguay", lat: -31.4, lng: -57.5, capacity: 70, turbines: 28, type: "onshore", year: 2015, status: "Operational", owner: "EDF Renewables", developer: "EDF Renewables", cost_usd: 100, investment_grade: "Investment Grade A" },
  { name: "Palmatir Wind Farm", country: "Uruguay", lat: -32.8, lng: -56.5, capacity: 65, turbines: 26, type: "onshore", year: 2014, status: "Operational", owner: "Enercon", developer: "Enercon", cost_usd: 100, investment_grade: "Investment Grade B" },
  { name: "Valentines Wind Farm", country: "Uruguay", lat: -33.0, lng: -55.8, capacity: 70, turbines: 28, type: "onshore", year: 2014, status: "Operational", owner: "UTE", developer: "UTE", cost_usd: 100, investment_grade: "Government Backed" },
  { name: "Artilleros Wind Farm", country: "Uruguay", lat: -34.2, lng: -58.0, capacity: 50, turbines: 20, type: "onshore", year: 2017, status: "Operational", owner: "Acciona", developer: "Acciona Energía", cost_usd: 80, investment_grade: "Investment Grade A" },

  // ===== PARAGUAY =====
  { name: "Paraguay San Juan Wind Farm", country: "Paraguay", lat: -23.3, lng: -57.5, capacity: 45, turbines: 18, type: "onshore", year: 2021, status: "Operational", owner: "EDF Renewables", developer: "EDF Renewables", cost_usd: 55, investment_grade: "Investment Grade A" },
  { name: "Itapua Wind Project", country: "Paraguay", lat: -27.0, lng: -55.8, capacity: 60, turbines: 24, type: "construction", year: 2026, status: "Under Construction", owner: "ANDE", developer: "ANDE", cost_usd: 120, investment_grade: "Government Backed" },

  // ===== VENEZUELA =====
  { name: "La Guajira Wind Farm", country: "Venezuela", lat: 11.8, lng: -72.3, capacity: 36, turbines: 18, type: "onshore", year: 2012, status: "Operational", owner: "CORPOELEC", developer: "CORPOELEC", cost_usd: 45, investment_grade: "Government Backed" },
  { name: "Paraguana Wind Farm", country: "Venezuela", lat: 11.9, lng: -70.3, capacity: 100, turbines: 40, type: "onshore", year: 2020, status: "Operational", owner: "EDF Renewables", developer: "EDF Renewables", cost_usd: 140, investment_grade: "Speculative" },
  { name: "Zulia Wind Project", country: "Venezuela", lat: 10.8, lng: -71.9, capacity: 80, turbines: 32, type: "onshore", year: 2019, status: "Operational", owner: "Elecnor", developer: "Elecnor", cost_usd: 130, investment_grade: "Speculative" },

  // ===== PANAMA =====
  { name: "Penita Wind Farm", country: "Panama", lat: 7.8, lng: -80.6, capacity: 60, turbines: 20, type: "onshore", year: 2014, status: "Operational", owner: "EDF Renewables", developer: "EDF Renewables", cost_usd: 70, investment_grade: "Investment Grade A" },
  { name: "Los Santos Wind Farm", country: "Panama", lat: 7.6, lng: -80.4, capacity: 80, turbines: 32, type: "onshore", year: 2018, status: "Operational", owner: "AES Panama", developer: "AES Panama", cost_usd: 130, investment_grade: "Investment Grade A" },

  // ===== COSTA RICA =====
  { name: "Altamira Wind Farm", country: "Costa Rica", lat: 10.3, lng: -84.7, capacity: 50, turbines: 20, type: "onshore", year: 2012, status: "Operational", owner: "Enel Green Power", developer: "Enel Green Power", cost_usd: 80, investment_grade: "Investment Grade A" },
  { name: "Windpark Tejona", country: "Costa Rica", lat: 10.7, lng: -85.4, capacity: 20, turbines: 10, type: "onshore", year: 2006, status: "Operational", owner: "Renovalia", developer: "Renovalia Energy", cost_usd: 30, investment_grade: "Speculative" },
  { name: "Valle Central Wind Farm", country: "Costa Rica", lat: 10.0, lng: -84.1, capacity: 50, turbines: 20, type: "onshore", year: 2018, status: "Operational", owner: "ICE", developer: "ICE", cost_usd: 80, investment_grade: "Government Backed" },

  // ===== ARGENTINA =====
  { name: "Loma Blanca Wind Farm", country: "Argentina", lat: -43.0, lng: -65.0, capacity: 100, turbines: 50, type: "onshore", year: 2018, status: "Operational", owner: "YPF", developer: "YPF Luz", cost_usd: 140, investment_grade: "Government Backed" },
  { name: "Vientos Los Hércules", country: "Argentina", lat: -46.0, lng: -68.5, capacity: 124, turbines: 40, type: "onshore", year: 2022, status: "Operational", owner: "PowerChina", developer: "PowerChina", cost_usd: 170, investment_grade: "Speculative" },

  // ===== CHILE =====
  { name: "Sarco Wind Farm", country: "Chile", lat: -30.7, lng: -71.6, capacity: 169, turbines: 52, type: "onshore", year: 2018, status: "Operational", owner: "Acciona", developer: "Acciona Energía", cost_usd: 240, investment_grade: "Investment Grade A" },
  { name: "Cabo Leones I", country: "Chile", lat: -28.2, lng: -71.1, capacity: 115, turbines: 46, type: "onshore", year: 2014, status: "Operational", owner: "Mainstream Renewable Power", developer: "Mainstream Renewable Power", cost_usd: 160, investment_grade: "Investment Grade B" },

  // ===== ITALY =====
  { name: "Troia Wind Farm", country: "Italy", lat: 41.3, lng: 15.3, capacity: 106, turbines: 53, type: "onshore", year: 2009, status: "Operational", owner: "ERG", developer: "ERG", cost_usd: 150, investment_grade: "Investment Grade B" },
  { name: "Melissa-Strongoli", country: "Italy", lat: 39.3, lng: 17.1, capacity: 108, turbines: 36, type: "onshore", year: 2011, status: "Operational", owner: "Falck Renewables", developer: "Falck Renewables", cost_usd: 130, investment_grade: "Investment Grade B" },

  // ===== GREECE =====
  { name: "Thrace Wind Farm", country: "Greece", lat: 41.2, lng: 25.8, capacity: 250, turbines: 100, type: "onshore", year: 2020, status: "Operational", owner: "RWE Renewables", developer: "RWE Renewables", cost_usd: 350, investment_grade: "Investment Grade A" },

  // ===== SCOTLAND / NORTH SEA =====

  // ===== CENTRAL ASIA: UZBEKISTAN =====
  { name: "Zarafshan Wind Farm", country: "Uzbekistan", lat: 41.6, lng: 64.2, capacity: 1500, turbines: 300, type: "construction", year: 2026, status: "Under Construction", owner: "Uzbekenergo", developer: "Uzbekenergo", cost_usd: 3000, investment_grade: "Government Backed" },
  { name: "Nukus Wind Project", country: "Uzbekistan", lat: 42.5, lng: 59.6, capacity: 100, turbines: 40, type: "onshore", year: 2023, status: "Operational", owner: "ACWA Power", developer: "ACWA Power", cost_usd: 140, investment_grade: "Speculative" },
  { name: "Samarkand Wind Farm", country: "Uzbekistan", lat: 39.6, lng: 66.9, capacity: 80, turbines: 32, type: "onshore", year: 2022, status: "Operational", owner: "Total Energies", developer: "Total Energies", cost_usd: 130, investment_grade: "Investment Grade A" },

  // ===== TURKMENISTAN =====
  { name: "Balkanabad Wind Farm", country: "Turkmenistan", lat: 39.5, lng: 54.3, capacity: 100, turbines: 40, type: "onshore", year: 2022, status: "Operational", owner: "ACWA Power", developer: "ACWA Power", cost_usd: 140, investment_grade: "Speculative" },
  { name: "Turkmenbashi Wind Project", country: "Turkmenistan", lat: 40.0, lng: 53.0, capacity: 150, turbines: 60, type: "construction", year: 2027, status: "Under Construction", owner: "Turkmengaz", developer: "Turkmengaz", cost_usd: 300, investment_grade: "Government Backed" },

  // ===== KYRGYZSTAN =====
  { name: "Issyk-Kul Wind Farm", country: "Kyrgyzstan", lat: 42.5, lng: 76.8, capacity: 50, turbines: 20, type: "onshore", year: 2021, status: "Operational", owner: "Kyrgyzenergo", developer: "Kyrgyzenergo", cost_usd: 80, investment_grade: "Government Backed" },
  { name: "Toktogul Wind Project", country: "Kyrgyzstan", lat: 41.9, lng: 72.9, capacity: 40, turbines: 16, type: "construction", year: 2026, status: "Under Construction", owner: "ACWA Power", developer: "ACWA Power", cost_usd: 80, investment_grade: "Speculative" },

  // ===== TAJIKISTAN =====
  { name: "Dushanbe Wind Farm", country: "Tajikistan", lat: 38.6, lng: 68.8, capacity: 40, turbines: 16, type: "onshore", year: 2021, status: "Operational", owner: "ACWA Power", developer: "ACWA Power", cost_usd: 55, investment_grade: "Speculative" },
  { name: "Murghab Wind Project", country: "Tajikistan", lat: 38.2, lng: 73.9, capacity: 30, turbines: 12, type: "construction", year: 2026, status: "Under Construction", owner: "Barki Tojik", developer: "Barki Tojik", cost_usd: 60, investment_grade: "Government Backed" },

  // ===== FIJI =====
  { name: "Butoni Wind Farm", country: "Fiji", lat: -18.2, lng: 178.0, capacity: 10, turbines: 5, type: "onshore", year: 2012, status: "Operational", owner: "Pacific Hydro", developer: "Pacific Hydro", cost_usd: 15, investment_grade: "Speculative" },
  { name: "Yasawa Wind Project", country: "Fiji", lat: -16.9, lng: 177.5, capacity: 20, turbines: 8, type: "construction", year: 2026, status: "Under Construction", owner: "EFL", developer: "EFL", cost_usd: 40, investment_grade: "Government Backed" },

  // ===== MORE GERMANY =====
  { name: "WindMW Offshore", country: "Germany", lat: 54.3, lng: 6.7, capacity: 288, turbines: 80, type: "offshore", year: 2016, status: "Operational", owner: "Ørsted", developer: "Ørsted", cost_usd: 1000, investment_grade: "Investment Grade A" },

  // ===== MORE SPAIN =====
  { name: "Parque Eólico Villanueva", country: "Spain", lat: 42.1, lng: -1.5, capacity: 120, turbines: 48, type: "onshore", year: 2010, status: "Operational", owner: "Endesa", developer: "Endesa", cost_usd: 140, investment_grade: "Investment Grade A" },
  { name: "Sierra de Avila Wind Farm", country: "Spain", lat: 40.6, lng: -5.0, capacity: 90, turbines: 36, type: "onshore", year: 2013, status: "Operational", owner: "Enel Green Power", developer: "Enel Green Power", cost_usd: 110, investment_grade: "Investment Grade A" },
  { name: "Parque Eólico Alentejo", country: "Spain", lat: 37.8, lng: -7.4, capacity: 75, turbines: 30, type: "onshore", year: 2015, status: "Operational", owner: "Iberdrola", developer: "Iberdrola", cost_usd: 90, investment_grade: "Investment Grade A" },

  // ===== MORE ITALY =====
  { name: "Alta Murgia Wind Farm", country: "Italy", lat: 40.9, lng: 16.2, capacity: 140, turbines: 56, type: "onshore", year: 2013, status: "Operational", owner: "EDF Renewables", developer: "EDF Renewables", cost_usd: 220, investment_grade: "Investment Grade A" },
  { name: "San Marco in Lamis Wind", country: "Italy", lat: 41.7, lng: 15.6, capacity: 90, turbines: 36, type: "onshore", year: 2014, status: "Operational", owner: "Enel Green Power", developer: "Enel Green Power", cost_usd: 110, investment_grade: "Investment Grade A" },
  { name: "Parco Eolico Lucano", country: "Italy", lat: 40.5, lng: 15.9, capacity: 80, turbines: 32, type: "onshore", year: 2016, status: "Operational", owner: "ERG", developer: "ERG", cost_usd: 130, investment_grade: "Investment Grade B" },

  // ===== MORE GREECE =====
  { name: "Crete Wind Farm", country: "Greece", lat: 35.2, lng: 24.8, capacity: 150, turbines: 60, type: "onshore", year: 2018, status: "Operational", owner: "Iberdrola", developer: "Iberdrola", cost_usd: 180, investment_grade: "Investment Grade A" },
  { name: "Epirus Wind Farm", country: "Greece", lat: 39.7, lng: 20.8, capacity: 120, turbines: 48, type: "onshore", year: 2016, status: "Operational", owner: "RWE Renewables", developer: "RWE Renewables", cost_usd: 140, investment_grade: "Investment Grade A" },
  { name: "Aegean Sea Wind Project", country: "Greece", lat: 37.9, lng: 26.3, capacity: 200, turbines: 50, type: "construction", year: 2027, status: "Under Construction", owner: "Enel Green Power", developer: "Enel Green Power", cost_usd: 400, investment_grade: "Investment Grade A" },

  // ===== MORE INDIA =====
  { name: "Kutch Wind Park", country: "India", lat: 23.4, lng: 68.9, capacity: 750, turbines: 375, type: "onshore", year: 2016, status: "Operational", owner: "Adani Green Energy", developer: "Adani Green Energy", cost_usd: 900, investment_grade: "Investment Grade A" },
  { name: "Sirocco Wind Energy Rajasthan", country: "India", lat: 26.5, lng: 73.3, capacity: 400, turbines: 200, type: "onshore", year: 2018, status: "Operational", owner: "ReNew Power", developer: "ReNew Power", cost_usd: 560, investment_grade: "Investment Grade B" },
  { name: "Karnataka Wind Complex", country: "India", lat: 14.8, lng: 75.7, capacity: 600, turbines: 240, type: "onshore", year: 2020, status: "Operational", owner: "Greenko", developer: "Greenko", cost_usd: 720, investment_grade: "Investment Grade B" },
  { name: "Andhra Pradesh Coastal Wind", country: "India", lat: 14.2, lng: 80.1, capacity: 500, turbines: 200, type: "onshore", year: 2019, status: "Operational", owner: "Suzlon Energy", developer: "Suzlon Energy", cost_usd: 800, investment_grade: "Investment Grade B" },

  // ===== MORE BRAZIL =====
  { name: "Delta do Parnaiba Wind Complex", country: "Brazil", lat: -2.9, lng: -41.8, capacity: 320, turbines: 80, type: "onshore", year: 2020, status: "Operational", owner: "Engie Brasil", developer: "Engie Brasil", cost_usd: 510, investment_grade: "Investment Grade A" },
  { name: "Rio Grande do Norte Wind", country: "Brazil", lat: -5.2, lng: -36.8, capacity: 350, turbines: 88, type: "onshore", year: 2021, status: "Operational", owner: "Voltalia", developer: "Voltalia", cost_usd: 560, investment_grade: "Investment Grade B" },
  { name: "Ceará Offshore Wind", country: "Brazil", lat: -3.7, lng: -38.3, capacity: 1800, turbines: 180, type: "construction", year: 2027, status: "Under Construction", owner: "Rio Energy", developer: "Rio Energy", cost_usd: 3600, investment_grade: "Investment Grade B" },

  // ===== MORE ARGENTINA =====
  { name: "Vientos Patagónicos", country: "Argentina", lat: -51.4, lng: -69.2, capacity: 77, turbines: 33, type: "onshore", year: 2019, status: "Operational", owner: "Vestas", developer: "Vestas", cost_usd: 120, investment_grade: "Investment Grade A" },
  { name: "Puerto Madryn Wind Farm", country: "Argentina", lat: -42.8, lng: -65.1, capacity: 80, turbines: 22, type: "onshore", year: 2021, status: "Operational", owner: "IMPSA", developer: "IMPSA", cost_usd: 130, investment_grade: "Speculative" },
  { name: "Bahia Blanca Wind", country: "Argentina", lat: -38.7, lng: -62.3, capacity: 100, turbines: 40, type: "onshore", year: 2020, status: "Operational", owner: "Envision", developer: "Envision", cost_usd: 140, investment_grade: "Investment Grade B" },
  { name: "Mar del Plata Wind Farm", country: "Argentina", lat: -37.9, lng: -57.8, capacity: 66, turbines: 22, type: "onshore", year: 2018, status: "Operational", owner: "Loma Blanca Wind Farm", developer: "Genneia", cost_usd: 80, investment_grade: "Investment Grade B" },

  // ===== MORE CHILE =====
  { name: "Punta Palmeras Wind Farm", country: "Chile", lat: -30.3, lng: -71.5, capacity: 90, turbines: 36, type: "onshore", year: 2019, status: "Operational", owner: "Engie Chile", developer: "Engie Chile", cost_usd: 110, investment_grade: "Investment Grade A" },
  { name: "El Arrayán Wind Farm", country: "Chile", lat: -30.0, lng: -71.4, capacity: 115, turbines: 50, type: "onshore", year: 2014, status: "Operational", owner: "Colbún", developer: "Colbún", cost_usd: 160, investment_grade: "Investment Grade B" },
  { name: "Atacama Wind Farm", country: "Chile", lat: -24.8, lng: -70.2, capacity: 220, turbines: 88, type: "onshore", year: 2022, status: "Operational", owner: "Enel Green Power", developer: "Enel Green Power", cost_usd: 310, investment_grade: "Investment Grade A" },

  // ===== MORE SOUTH AFRICA =====
  { name: "Sere Wind Farm", country: "South Africa", lat: -31.9, lng: 18.5, capacity: 100, turbines: 46, type: "onshore", year: 2015, status: "Operational", owner: "Lekela Power", developer: "Lekela Power", cost_usd: 140, investment_grade: "Investment Grade B" },
  { name: "West Coast 1 Wind Farm", country: "South Africa", lat: -32.7, lng: 18.3, capacity: 95, turbines: 38, type: "onshore", year: 2016, status: "Operational", owner: "Enel Green Power", developer: "Enel Green Power", cost_usd: 150, investment_grade: "Investment Grade A" },
  { name: "Dorper Wind Farm", country: "South Africa", lat: -31.3, lng: 20.3, capacity: 97, turbines: 40, type: "onshore", year: 2014, status: "Operational", owner: "Vestas", developer: "Vestas", cost_usd: 140, investment_grade: "Investment Grade A" },

  // ===== MORE KENYA =====
  { name: "Kipeto Wind Farm", country: "Kenya", lat: -2.1, lng: 36.8, capacity: 100, turbines: 60, type: "onshore", year: 2021, status: "Operational", owner: "Vestas", developer: "Vestas", cost_usd: 140, investment_grade: "Investment Grade A" },
  { name: "Kinangop Wind Park", country: "Kenya", lat: -0.6, lng: 36.6, capacity: 60, turbines: 37, type: "onshore", year: 2022, status: "Operational", owner: "Craftskills Wind Energy", developer: "Craftskills Wind Energy", cost_usd: 70, investment_grade: "Speculative" },

  // ===== MORE MOROCCO =====
  { name: "Akhfenir Wind Farm", country: "Morocco", lat: 28.2, lng: -12.3, capacity: 200, turbines: 100, type: "onshore", year: 2014, status: "Operational", owner: "NAREVA", developer: "NAREVA", cost_usd: 320, investment_grade: "Government Backed" },
  { name: "Taza Wind Farm", country: "Morocco", lat: 34.2, lng: -4.1, capacity: 150, turbines: 75, type: "onshore", year: 2016, status: "Operational", owner: "EDF Renewables", developer: "EDF Renewables", cost_usd: 180, investment_grade: "Investment Grade A" },

  // ===== MORE TURKEY =====
  { name: "Karaburun Wind Farm", country: "Turkey", lat: 38.6, lng: 26.4, capacity: 135, turbines: 45, type: "onshore", year: 2015, status: "Operational", owner: "Akfen Renewable Energy", developer: "Akfen Renewable Energy", cost_usd: 160, investment_grade: "Speculative" },
  { name: "Sivas Wind Farm", country: "Turkey", lat: 39.7, lng: 37.0, capacity: 160, turbines: 64, type: "onshore", year: 2018, status: "Operational", owner: "Zorlu Energy", developer: "Zorlu Energy", cost_usd: 220, investment_grade: "Speculative" },
  { name: "Çanakkale Wind Farm", country: "Turkey", lat: 40.2, lng: 26.4, capacity: 180, turbines: 60, type: "onshore", year: 2020, status: "Operational", owner: "Enerjisa", developer: "Enerjisa", cost_usd: 220, investment_grade: "Speculative" },
  { name: "Bandirma Offshore", country: "Turkey", lat: 40.4, lng: 27.9, capacity: 300, turbines: 75, type: "construction", year: 2027, status: "Under Construction", owner: "Borusan EnBW Energy", developer: "Borusan EnBW Energy", cost_usd: 600, investment_grade: "Investment Grade B" },

  // ===== MORE PAKISTAN =====
  { name: "Jhimpir Wind Farm", country: "Pakistan", lat: 25.0, lng: 67.9, capacity: 150, turbines: 75, type: "onshore", year: 2013, status: "Operational", owner: "Three Gorges Pakistan", developer: "China Three Gorges", cost_usd: 180, investment_grade: "Government Backed" },
  { name: "Gharo Wind Farm", country: "Pakistan", lat: 24.7, lng: 67.6, capacity: 100, turbines: 58, type: "onshore", year: 2016, status: "Operational", owner: "CPHGC", developer: "CPHGC", cost_usd: 140, investment_grade: "Government Backed" },

  // ===== MORE RUSSIA =====
  { name: "Kola Wind Farm", country: "Russia", lat: 68.5, lng: 33.1, capacity: 201, turbines: 57, type: "onshore", year: 2021, status: "Operational", owner: "Rosatom", developer: "Rosatom", cost_usd: 240, investment_grade: "Government Backed" },
  { name: "Adygea Wind Cluster", country: "Russia", lat: 44.8, lng: 40.2, capacity: 150, turbines: 60, type: "onshore", year: 2020, status: "Operational", owner: "Fortum Russia", developer: "Fortum Russia", cost_usd: 180, investment_grade: "Speculative" },
  { name: "Stavropol Wind Farm", country: "Russia", lat: 45.1, lng: 42.0, capacity: 100, turbines: 34, type: "onshore", year: 2019, status: "Operational", owner: "Enel Russia", developer: "Enel Russia", cost_usd: 140, investment_grade: "Speculative" },

  // ===== MORE INDONESIA =====
  { name: "Jeneponto Wind Farm", country: "Indonesia", lat: -5.7, lng: 119.7, capacity: 72, turbines: 20, type: "onshore", year: 2017, status: "Operational", owner: "Equis Energy", developer: "Equis Energy", cost_usd: 85, investment_grade: "Investment Grade B" },
  { name: "Selayar Wind Project", country: "Indonesia", lat: -6.3, lng: 120.5, capacity: 70, turbines: 28, type: "onshore", year: 2021, status: "Operational", owner: "PLN", developer: "PLN", cost_usd: 100, investment_grade: "Government Backed" },

  // ===== MORE PHILIPPINES =====
  { name: "Caparispisan Wind Farm", country: "Philippines", lat: 18.4, lng: 120.7, capacity: 81, turbines: 27, type: "onshore", year: 2014, status: "Operational", owner: "Vestas Philippines", developer: "Vestas", cost_usd: 95, investment_grade: "Investment Grade A" },
  { name: "Ilocos Norte Wind Farm", country: "Philippines", lat: 18.0, lng: 120.5, capacity: 33, turbines: 15, type: "onshore", year: 2009, status: "Operational", owner: "ACEN", developer: "ACEN Corporation", cost_usd: 40, investment_grade: "Investment Grade B" },

  // ===== MORE VIETNAM =====
  { name: "Mui Dinh Wind Farm", country: "Vietnam", lat: 11.3, lng: 109.0, capacity: 37, turbines: 20, type: "onshore", year: 2017, status: "Operational", owner: "SuperEnergy", developer: "SuperEnergy", cost_usd: 50, investment_grade: "Speculative" },
  { name: "Quang Tri Offshore Wind", country: "Vietnam", lat: 16.9, lng: 107.5, capacity: 1800, turbines: 180, type: "construction", year: 2027, status: "Under Construction", owner: "EVN", developer: "EVN", cost_usd: 3600, investment_grade: "Government Backed" },

  // ===== JAPAN ADDITIONAL =====
  { name: "Happou Onshore Wind", country: "Japan", lat: 40.6, lng: 140.0, capacity: 58, turbines: 22, type: "onshore", year: 2019, status: "Operational", owner: "Marubeni", developer: "Marubeni", cost_usd: 80, investment_grade: "Investment Grade A" },
  { name: "Oma Wind Farm", country: "Japan", lat: 41.5, lng: 141.0, capacity: 40, turbines: 16, type: "offshore", year: 2021, status: "Operational", owner: "Renova", developer: "Renova", cost_usd: 160, investment_grade: "Investment Grade B" },
  { name: "Noto Offshore Wind", country: "Japan", lat: 37.4, lng: 137.0, capacity: 220, turbines: 20, type: "construction", year: 2026, status: "Under Construction", owner: "Eurus Energy", developer: "Eurus Energy", cost_usd: 440, investment_grade: "Investment Grade A" },

  // ===== SOUTH KOREA ADDITIONAL =====
  { name: "Jeju Offshore Wind Phase 2", country: "South Korea", lat: 33.5, lng: 126.4, capacity: 100, turbines: 20, type: "offshore", year: 2023, status: "Operational", owner: "Korea Electric Power", developer: "KEPCO", cost_usd: 400, investment_grade: "Government Backed" },
  { name: "Ulsan Floating Offshore Demo", country: "South Korea", lat: 35.5, lng: 129.5, capacity: 200, turbines: 20, type: "floating", year: 2024, status: "Operational", owner: "SK E&S", developer: "SK E&S", cost_usd: 900, investment_grade: "Investment Grade A" },

  // ===== MORE TAIWAN =====
  { name: "Zhong Neng Offshore", country: "Taiwan", lat: 23.7, lng: 119.8, capacity: 300, turbines: 30, type: "construction", year: 2026, status: "Under Construction", owner: "Taipower", developer: "Taipower", cost_usd: 600, investment_grade: "Government Backed" },
  { name: "Formosa 2 Offshore", country: "Taiwan", lat: 24.2, lng: 120.7, capacity: 376, turbines: 47, type: "offshore", year: 2023, status: "Operational", owner: "Copenhagen Infrastructure Partners", developer: "CIP", cost_usd: 1500, investment_grade: "Investment Grade A" },

  // ===== MORE AUSTRALIA =====
  { name: "Murra Warra Wind Farm", country: "Australia", lat: -36.6, lng: 142.0, capacity: 428, turbines: 107, type: "onshore", year: 2019, status: "Operational", owner: "Origin Energy", developer: "Origin Energy", cost_usd: 680, investment_grade: "Investment Grade A" },
  { name: "Collector Wind Farm", country: "Australia", lat: -34.9, lng: 149.5, capacity: 227, turbines: 73, type: "onshore", year: 2022, status: "Operational", owner: "Meridian Energy", developer: "Meridian Energy", cost_usd: 360, investment_grade: "Investment Grade A" },
  { name: "Silverton Wind Farm", country: "Australia", lat: -31.8, lng: 141.4, capacity: 200, turbines: 58, type: "onshore", year: 2019, status: "Operational", owner: "Tilt Renewables", developer: "Tilt Renewables", cost_usd: 320, investment_grade: "Investment Grade B" },

  // ===== MORE IRELAND =====
  { name: "Clahane Wind Farm", country: "Ireland", lat: 52.6, lng: -8.6, capacity: 21, turbines: 7, type: "onshore", year: 2014, status: "Operational", owner: "ESB", developer: "ESB", cost_usd: 25, investment_grade: "Government Backed" },
  { name: "Moneypoint Offshore", country: "Ireland", lat: 52.6, lng: -9.4, capacity: 1440, turbines: 96, type: "construction", year: 2028, status: "Under Construction", owner: "SSE Renewables", developer: "SSE Renewables", cost_usd: 2900, investment_grade: "Investment Grade A" },

  // ===== MORE PORTUGAL =====
  { name: "Parque Eólico da Serra da Cangalha", country: "Portugal", lat: 39.6, lng: -7.9, capacity: 112, turbines: 56, type: "onshore", year: 2009, status: "Operational", owner: "Iberdrola", developer: "Iberdrola", cost_usd: 160, investment_grade: "Investment Grade A" },
  { name: "Parque Eólico Cabeço Norte", country: "Portugal", lat: 40.8, lng: -8.2, capacity: 90, turbines: 36, type: "onshore", year: 2012, status: "Operational", owner: "Galp", developer: "Galp", cost_usd: 110, investment_grade: "Investment Grade B" },

  // ===== FRANCE ADDITIONAL =====
  { name: "Noirmoutier Offshore", country: "France", lat: 47.0, lng: -2.5, capacity: 480, turbines: 62, type: "construction", year: 2026, status: "Under Construction", owner: "Vattenfall", developer: "Vattenfall", cost_usd: 960, investment_grade: "Investment Grade A" },
  { name: "Gruissan Offshore", country: "France", lat: 43.1, lng: 3.2, capacity: 270, turbines: 30, type: "floating", year: 2027, status: "Under Construction", owner: "Total Energies", developer: "Total Energies", cost_usd: 940, investment_grade: "Investment Grade A" },

  // ===== NETHERLANDS ADDITIONAL =====
  { name: "IJmuiden Ver Wind Farm", country: "Netherlands", lat: 52.8, lng: 3.8, capacity: 4000, turbines: 267, type: "construction", year: 2030, status: "Under Construction", owner: "Vattenfall", developer: "Vattenfall", cost_usd: 8000, investment_grade: "Investment Grade A" },

  // ===== MORE CZECH REPUBLIC =====
  { name: "Lipno Wind Park", country: "Czech Republic", lat: 48.7, lng: 14.2, capacity: 45, turbines: 18, type: "onshore", year: 2011, status: "Operational", owner: "Bohemia Energy", developer: "Bohemia Energy", cost_usd: 55, investment_grade: "Investment Grade B" },

  // ===== EGYPT ADDITIONAL =====
  { name: "Gabal El-Zeit Wind Farm", country: "Egypt", lat: 28.0, lng: 33.3, capacity: 240, turbines: 120, type: "onshore", year: 2014, status: "Operational", owner: "EDF Renewables", developer: "EDF Renewables", cost_usd: 290, investment_grade: "Investment Grade A" },
  { name: "Ras Gharib Wind Park", country: "Egypt", lat: 28.4, lng: 33.1, capacity: 200, turbines: 100, type: "onshore", year: 2016, status: "Operational", owner: "Scatec", developer: "Scatec", cost_usd: 320, investment_grade: "Investment Grade B" },

  // ===== CANADA ADDITIONAL =====
  { name: "Niagara Region Wind Farm", country: "Canada", lat: 43.1, lng: -79.5, capacity: 230, turbines: 77, type: "onshore", year: 2016, status: "Operational", owner: "Boralex", developer: "Boralex", cost_usd: 370, investment_grade: "Investment Grade B" },
  { name: "Prince Wind Farm Ontario", country: "Canada", lat: 46.7, lng: -82.3, capacity: 189, turbines: 126, type: "onshore", year: 2006, status: "Operational", owner: "Enbridge", developer: "Enbridge", cost_usd: 230, investment_grade: "Investment Grade A" },

  // ===== SWEDEN ADDITIONAL =====
  { name: "Oxäskogen Wind Farm", country: "Sweden", lat: 58.8, lng: 17.1, capacity: 130, turbines: 52, type: "onshore", year: 2017, status: "Operational", owner: "Vattenfall", developer: "Vattenfall", cost_usd: 180, investment_grade: "Investment Grade A" },
  { name: "Norra Kärr Wind Farm", country: "Sweden", lat: 58.1, lng: 14.8, capacity: 88, turbines: 44, type: "onshore", year: 2016, status: "Operational", owner: "Statkraft", developer: "Statkraft", cost_usd: 120, investment_grade: "Government Backed" },

  // ===== DENMARK ADDITIONAL =====
  { name: "Vesterhav Nord Offshore", country: "Denmark", lat: 56.7, lng: 8.2, capacity: 170, turbines: 20, type: "offshore", year: 2023, status: "Operational", owner: "European Energy", developer: "European Energy", cost_usd: 760, investment_grade: "Investment Grade B" },
  { name: "Bornholm Offshore", country: "Denmark", lat: 55.0, lng: 14.9, capacity: 1400, turbines: 112, type: "construction", year: 2028, status: "Under Construction", owner: "Energi Danmark", developer: "Energi Danmark", cost_usd: 2800, investment_grade: "Investment Grade B" },

  // ===== NORWAY ADDITIONAL =====
  { name: "Tonstad Wind Farm", country: "Norway", lat: 58.7, lng: 6.7, capacity: 208, turbines: 52, type: "onshore", year: 2019, status: "Operational", owner: "Aneo", developer: "Aneo", cost_usd: 290, investment_grade: "Investment Grade B" },
  { name: "Guleslettene Wind Farm", country: "Norway", lat: 61.5, lng: 5.5, capacity: 180, turbines: 50, type: "onshore", year: 2018, status: "Operational", owner: "Statkraft", developer: "Statkraft", cost_usd: 220, investment_grade: "Government Backed" },

  // ===== MORE POLAND =====
  { name: "Karcino Wind Farm", country: "Poland", lat: 54.2, lng: 16.6, capacity: 90, turbines: 36, type: "onshore", year: 2014, status: "Operational", owner: "RWE Renewables", developer: "RWE Renewables", cost_usd: 110, investment_grade: "Investment Grade A" },

  // ===== INDONESIA ADDITIONAL =====
  { name: "Dili Wind Farm", country: "Indonesia", lat: 1.3, lng: 124.8, capacity: 45, turbines: 18, type: "onshore", year: 2022, status: "Operational", owner: "Binatek Energy", developer: "Binatek Energy", cost_usd: 55, investment_grade: "Speculative" },

  // ===== ISRAEL =====
  { name: "Golan Heights Wind Farm", country: "Israel", lat: 33.0, lng: 35.7, capacity: 70, turbines: 28, type: "onshore", year: 2019, status: "Operational", owner: "Nofar Energy", developer: "Nofar Energy", cost_usd: 100, investment_grade: "Investment Grade B" },
  { name: "Emek HaMaayanot Wind Farm", country: "Israel", lat: 32.5, lng: 35.5, capacity: 55, turbines: 22, type: "onshore", year: 2016, status: "Operational", owner: "Enlight Renewable Energy", developer: "Enlight Renewable Energy", cost_usd: 75, investment_grade: "Investment Grade B" },

  // ===== EGYPT THIRD WAVE =====
  { name: "Taba Wind Farm", country: "Egypt", lat: 29.5, lng: 34.9, capacity: 100, turbines: 50, type: "onshore", year: 2020, status: "Operational", owner: "ACWA Power", developer: "ACWA Power", cost_usd: 140, investment_grade: "Investment Grade B" },

  // ===== IRAN ADDITIONAL =====
  { name: "Ahar Wind Farm", country: "Iran", lat: 38.5, lng: 47.1, capacity: 80, turbines: 40, type: "onshore", year: 2020, status: "Operational", owner: "Iran Renewable Energy Organization", developer: "SUNA", cost_usd: 130, investment_grade: "Government Backed" },

  // ===== SAUDI ARABIA ADDITIONAL =====
  { name: "Yanbu Wind Farm", country: "Saudi Arabia", lat: 24.1, lng: 38.1, capacity: 500, turbines: 125, type: "construction", year: 2026, status: "Under Construction", owner: "Saudi Aramco", developer: "Saudi Aramco", cost_usd: 1000, investment_grade: "Government Backed" },

  // ===== UAE ADDITIONAL =====
  { name: "Hatta Floating Wind", country: "UAE", lat: 24.8, lng: 56.1, capacity: 60, turbines: 8, type: "floating", year: 2026, status: "Under Construction", owner: "Masdar", developer: "Masdar", cost_usd: 210, investment_grade: "Government Backed" },

  // ===== BRAZIL ADDITIONAL =====
  { name: "Brotas de Macaúbas Wind", country: "Brazil", lat: -11.9, lng: -42.7, capacity: 200, turbines: 50, type: "onshore", year: 2022, status: "Operational", owner: "Casa dos Ventos", developer: "Casa dos Ventos", cost_usd: 320, investment_grade: "Investment Grade B" },
  { name: "Eólica Paraíba Wind", country: "Brazil", lat: -7.0, lng: -37.5, capacity: 150, turbines: 50, type: "onshore", year: 2023, status: "Operational", owner: "Neoenergia", developer: "Neoenergia", cost_usd: 180, investment_grade: "Investment Grade A" },

  // ===== MORE KAZAKSTAN =====
  { name: "Astana Wind Farm", country: "Kazakhstan", lat: 51.2, lng: 71.5, capacity: 100, turbines: 50, type: "onshore", year: 2022, status: "Operational", owner: "Windad", developer: "Windad", cost_usd: 140, investment_grade: "Speculative" },
  { name: "Aktau Wind Project", country: "Kazakhstan", lat: 43.7, lng: 51.2, capacity: 150, turbines: 60, type: "construction", year: 2026, status: "Under Construction", owner: "Samruk-Energy", developer: "Samruk-Energy", cost_usd: 300, investment_grade: "Government Backed" },

  // ===== BELARUS =====
  { name: "Sel'tso Wind Farm", country: "Belarus", lat: 52.9, lng: 30.2, capacity: 44, turbines: 22, type: "onshore", year: 2017, status: "Operational", owner: "State Committee", developer: "State Committee", cost_usd: 70, investment_grade: "Government Backed" },
  { name: "Grodno Wind Project", country: "Belarus", lat: 53.7, lng: 23.8, capacity: 60, turbines: 30, type: "onshore", year: 2019, status: "Operational", owner: "Belarusian Energy", developer: "Belarusian Energy", cost_usd: 70, investment_grade: "Government Backed" },
  { name: "Mozyr Wind Farm", country: "Belarus", lat: 52.0, lng: 29.2, capacity: 35, turbines: 14, type: "onshore", year: 2021, status: "Operational", owner: "State Committee", developer: "State Committee", cost_usd: 55, investment_grade: "Government Backed" },

  // ===== MORE UKRAINE =====
  { name: "Botievo Wind Farm", country: "Ukraine", lat: 46.6, lng: 35.1, capacity: 200, turbines: 65, type: "onshore", year: 2013, status: "Operational", owner: "DTEK", developer: "DTEK", cost_usd: 320, investment_grade: "Speculative" },

  // ===== MORE CZECH REPUBLIC =====
  { name: "Brezany Wind Farm", country: "Czech Republic", lat: 50.5, lng: 14.0, capacity: 36, turbines: 12, type: "onshore", year: 2017, status: "Operational", owner: "Bohemia Energy", developer: "Bohemia Energy", cost_usd: 45, investment_grade: "Investment Grade B" },

  // ===== MORE ESTONIA =====
  { name: "Virtsu Wind Farm", country: "Estonia", lat: 58.6, lng: 23.5, capacity: 35, turbines: 14, type: "onshore", year: 2018, status: "Operational", owner: "Enefit Green", developer: "Enefit Green", cost_usd: 55, investment_grade: "Investment Grade B" },
  { name: "Tootsi Wind Farm", country: "Estonia", lat: 58.6, lng: 24.8, capacity: 200, turbines: 50, type: "onshore", year: 2022, status: "Operational", owner: "Nelja Energia", developer: "Nelja Energia", cost_usd: 320, investment_grade: "Investment Grade B" },

  // ===== MORE FINLAND =====
  { name: "Simo Wind Farm", country: "Finland", lat: 65.7, lng: 25.0, capacity: 225, turbines: 75, type: "onshore", year: 2020, status: "Operational", owner: "Vattenfall", developer: "Vattenfall", cost_usd: 270, investment_grade: "Investment Grade A" },

  // ===== SCOTLAND / UK ADDITIONAL =====
  { name: "Kintyre Wind Farm", country: "UK", lat: 55.4, lng: -5.5, capacity: 46, turbines: 23, type: "onshore", year: 2013, status: "Operational", owner: "Ørsted", developer: "Ørsted", cost_usd: 65, investment_grade: "Investment Grade A" },
  { name: "Black Law Wind Farm", country: "UK", lat: 55.7, lng: -3.8, capacity: 124, turbines: 54, type: "onshore", year: 2005, status: "Operational", owner: "Vattenfall", developer: "Vattenfall", cost_usd: 170, investment_grade: "Investment Grade A" },

  // ===== MORE COLOMBIA =====
  { name: "Guajira Offshore Wind", country: "Colombia", lat: 12.0, lng: -72.8, capacity: 350, turbines: 88, type: "construction", year: 2027, status: "Under Construction", owner: "AES Colombia", developer: "AES Colombia", cost_usd: 700, investment_grade: "Investment Grade A" },

  // ===== MORE PERU =====
  { name: "Tres Hermanas Wind Farm", country: "Peru", lat: -14.5, lng: -76.1, capacity: 90, turbines: 45, type: "onshore", year: 2015, status: "Operational", owner: "Enel Green Power", developer: "Enel Green Power", cost_usd: 110, investment_grade: "Investment Grade A" },

  // ===== MORE ECUADOR =====
  { name: "Galapagos Wind Farm", country: "Ecuador", lat: -0.9, lng: -91.0, capacity: 12, turbines: 3, type: "onshore", year: 2015, status: "Operational", owner: "Statkraft", developer: "Statkraft", cost_usd: 15, investment_grade: "Government Backed" },

  // ===== MORE COSTA RICA =====
  { name: "Chiripa Wind Farm", country: "Costa Rica", lat: 10.6, lng: -85.2, capacity: 50, turbines: 20, type: "onshore", year: 2015, status: "Operational", owner: "Enel Green Power", developer: "Enel Green Power", cost_usd: 80, investment_grade: "Investment Grade A" },


  // ===== ADDITIONAL GLOBAL FARMS =====
  // More USA
  { name: "Shiloh Wind Power Plant", country: "USA", lat: 38.1, lng: -121.8, capacity: 150, turbines: 100, type: "onshore", year: 2006, status: "Operational", owner: "Invenergy", developer: "Invenergy", cost_usd: 180, investment_grade: "Investment Grade B" },
  { name: "Dry Lake Wind Power", country: "USA", lat: 34.3, lng: -110.4, capacity: 120, turbines: 60, type: "onshore", year: 2009, status: "Operational", owner: "Pattern Energy", developer: "Pattern Energy", cost_usd: 140, investment_grade: "Investment Grade B" },
  { name: "Lone Star Wind Farm", country: "USA", lat: 33.2, lng: -100.8, capacity: 400, turbines: 200, type: "onshore", year: 2010, status: "Operational", owner: "AES Clean Energy", developer: "AES Clean Energy", cost_usd: 560, investment_grade: "Investment Grade A" },
  { name: "Settlers Trail Wind Farm", country: "USA", lat: 43.8, lng: -98.7, capacity: 250, turbines: 83, type: "onshore", year: 2019, status: "Operational", owner: "Berkshire Hathaway Energy", developer: "MidAmerican Energy", cost_usd: 350, investment_grade: "Investment Grade A" },
  { name: "Dodge City Wind Farm", country: "USA", lat: 37.7, lng: -99.9, capacity: 190, turbines: 57, type: "onshore", year: 2017, status: "Operational", owner: "Dominion Energy", developer: "Dominion Energy", cost_usd: 270, investment_grade: "Investment Grade A" },

  // More UK
  { name: "Greater Gabbard Offshore", country: "UK", lat: 52.0, lng: 2.1, capacity: 504, turbines: 140, type: "offshore", year: 2012, status: "Operational", owner: "RWE Renewables", developer: "RWE Renewables", cost_usd: 1750, investment_grade: "Investment Grade A" },
  { name: "Race Bank Offshore", country: "UK", lat: 53.3, lng: 0.9, capacity: 573, turbines: 91, type: "offshore", year: 2018, status: "Operational", owner: "SSE Renewables", developer: "SSE Renewables", cost_usd: 2000, investment_grade: "Investment Grade A" },
  { name: "Lincs Offshore", country: "UK", lat: 53.3, lng: 0.5, capacity: 270, turbines: 75, type: "offshore", year: 2013, status: "Operational", owner: "ScottishPower Renewables", developer: "ScottishPower Renewables", cost_usd: 940, investment_grade: "Investment Grade A" },

  // More China
  { name: "Hainan Offshore Phase I", country: "China", lat: 19.3, lng: 110.4, capacity: 500, turbines: 71, type: "offshore", year: 2023, status: "Operational", owner: "China Three Gorges", developer: "China Three Gorges", cost_usd: 2250, investment_grade: "Government Backed" },
  { name: "Tianjin Bohai Offshore", country: "China", lat: 38.9, lng: 119.2, capacity: 800, turbines: 100, type: "construction", year: 2026, status: "Under Construction", owner: "China Huaneng", developer: "China Huaneng", cost_usd: 1600, investment_grade: "Government Backed" },

  // More Scandinavia
  { name: "Markbygden ETT", country: "Sweden", lat: 65.5, lng: 20.8, capacity: 650, turbines: 179, type: "onshore", year: 2022, status: "Operational", owner: "Eolus Vind", developer: "Eolus Vind", cost_usd: 1050, investment_grade: "Investment Grade B" },
  { name: "Vindpark Vänern", country: "Sweden", lat: 58.7, lng: 13.2, capacity: 100, turbines: 40, type: "onshore", year: 2016, status: "Operational", owner: "OX2", developer: "OX2", cost_usd: 140, investment_grade: "Investment Grade B" },
  { name: "Holmsjö Wind Farm", country: "Sweden", lat: 56.4, lng: 15.6, capacity: 80, turbines: 32, type: "onshore", year: 2014, status: "Operational", owner: "Arise", developer: "Arise", cost_usd: 130, investment_grade: "Investment Grade B" },
  { name: "Stenbrottet Wind Farm", country: "Sweden", lat: 58.6, lng: 11.8, capacity: 90, turbines: 36, type: "onshore", year: 2013, status: "Operational", owner: "Vattenfall", developer: "Vattenfall", cost_usd: 110, investment_grade: "Investment Grade A" },

  // More Denmark
  { name: "Rønland Offshore", country: "Denmark", lat: 56.9, lng: 8.4, capacity: 17, turbines: 4, type: "offshore", year: 2003, status: "Operational", owner: "Vattenfall", developer: "Vattenfall", cost_usd: 75, investment_grade: "Investment Grade A" },
  { name: "Nysted Offshore", country: "Denmark", lat: 54.6, lng: 11.6, capacity: 166, turbines: 72, type: "offshore", year: 2003, status: "Operational", owner: "European Energy", developer: "European Energy", cost_usd: 660, investment_grade: "Investment Grade B" },

  // More Norway
  { name: "Storheia Wind Farm", country: "Norway", lat: 63.8, lng: 9.9, capacity: 288, turbines: 80, type: "onshore", year: 2020, status: "Operational", owner: "Aneo", developer: "Aneo", cost_usd: 350, investment_grade: "Investment Grade B" },

  // More Finland
  { name: "Liettee Wind Farm", country: "Finland", lat: 63.3, lng: 27.8, capacity: 170, turbines: 68, type: "onshore", year: 2021, status: "Operational", owner: "OX2", developer: "OX2", cost_usd: 270, investment_grade: "Investment Grade B" },

  // More Germany
  { name: "Sandbank Offshore", country: "Germany", lat: 55.4, lng: 7.8, capacity: 288, turbines: 72, type: "offshore", year: 2017, status: "Operational", owner: "E.ON", developer: "E.ON", cost_usd: 1000, investment_grade: "Investment Grade A" },

  // More Netherlands
  { name: "Princess Amalia Wind Farm", country: "Netherlands", lat: 52.6, lng: 4.2, capacity: 120, turbines: 60, type: "offshore", year: 2008, status: "Operational", owner: "Eneco", developer: "Eneco", cost_usd: 420, investment_grade: "Investment Grade B" },

  // More Belgium
  { name: "Rentel Offshore", country: "Belgium", lat: 51.4, lng: 2.8, capacity: 309, turbines: 42, type: "offshore", year: 2018, status: "Operational", owner: "DEME Concessions", developer: "DEME Concessions", cost_usd: 1100, investment_grade: "Investment Grade B" },

  // More France
  { name: "Eolien Maritime France", country: "France", lat: 46.8, lng: -1.9, capacity: 500, turbines: 80, type: "construction", year: 2027, status: "Under Construction", owner: "Total Energies", developer: "Total Energies", cost_usd: 1000, investment_grade: "Investment Grade A" },

  // Additional Africa
  { name: "Kahone Wind Farm", country: "Senegal", lat: 13.9, lng: -15.5, capacity: 60, turbines: 24, type: "onshore", year: 2021, status: "Operational", owner: "Lekela Power", developer: "Lekela Power", cost_usd: 70, investment_grade: "Investment Grade B" },
  { name: "Taiba Ndiaye Wind Farm", country: "Senegal", lat: 15.0, lng: -17.0, capacity: 158, turbines: 46, type: "onshore", year: 2020, status: "Operational", owner: "Engie", developer: "Engie", cost_usd: 250, investment_grade: "Investment Grade A" },
  { name: "Menengai Wind Farm", country: "Kenya", lat: -0.2, lng: 36.1, capacity: 60, turbines: 30, type: "onshore", year: 2023, status: "Operational", owner: "Craftskills Wind Energy", developer: "Craftskills Wind Energy", cost_usd: 70, investment_grade: "Speculative" },

  // Additional Middle East
  { name: "Jazan Wind Farm", country: "Saudi Arabia", lat: 16.9, lng: 42.6, capacity: 100, turbines: 40, type: "construction", year: 2027, status: "Under Construction", owner: "Saudi Aramco", developer: "Saudi Aramco", cost_usd: 200, investment_grade: "Government Backed" },
  { name: "Masdar Wind Project", country: "UAE", lat: 24.4, lng: 54.7, capacity: 100, turbines: 40, type: "construction", year: 2026, status: "Under Construction", owner: "DEWA", developer: "DEWA", cost_usd: 200, investment_grade: "Government Backed" },

  // More Asia
  { name: "Gujranwala Wind Farm", country: "Pakistan", lat: 32.2, lng: 74.3, capacity: 100, turbines: 40, type: "onshore", year: 2020, status: "Operational", owner: "Zorlu Enerji Pakistan", developer: "Zorlu Energy", cost_usd: 140, investment_grade: "Speculative" },
  { name: "Khyber Wind Project", country: "Pakistan", lat: 34.0, lng: 71.6, capacity: 50, turbines: 20, type: "onshore", year: 2022, status: "Operational", owner: "Fauji Fertilizer", developer: "Fauji Energy", cost_usd: 80, investment_grade: "Speculative" },
  { name: "Chiang Mai Wind Farm", country: "Thailand", lat: 18.7, lng: 98.9, capacity: 60, turbines: 24, type: "onshore", year: 2019, status: "Operational", owner: "Electricity Generating Authority", developer: "EGAT", cost_usd: 70, investment_grade: "Government Backed" },
  { name: "Rayong Wind Farm", country: "Thailand", lat: 12.7, lng: 101.5, capacity: 45, turbines: 18, type: "onshore", year: 2020, status: "Operational", owner: "Ratch Group", developer: "Ratch Group", cost_usd: 55, investment_grade: "Investment Grade B" },
  { name: "Preah Sihanouk Wind", country: "Cambodia", lat: 10.6, lng: 103.5, capacity: 50, turbines: 20, type: "construction", year: 2026, status: "Under Construction", owner: "Hydropower EDPGE", developer: "EDPGE", cost_usd: 100, investment_grade: "Speculative" },
  { name: "Vang Vieng Wind Farm", country: "Laos", lat: 18.9, lng: 102.4, capacity: 60, turbines: 24, type: "onshore", year: 2022, status: "Operational", owner: "Hydropower Laos", developer: "Hydropower Laos", cost_usd: 70, investment_grade: "Speculative" },
  { name: "Tashkent Wind Farm", country: "Uzbekistan", lat: 41.3, lng: 69.3, capacity: 50, turbines: 20, type: "onshore", year: 2022, status: "Operational", owner: "Uzbekenergo", developer: "Uzbekenergo", cost_usd: 80, investment_grade: "Government Backed" },

  // More Pacific
  { name: "Taupo Wind Farm", country: "New Zealand", lat: -38.7, lng: 175.6, capacity: 42, turbines: 21, type: "onshore", year: 2018, status: "Operational", owner: "Tilt Renewables", developer: "Tilt Renewables", cost_usd: 50, investment_grade: "Investment Grade B" },
  { name: "Turitea Wind Farm", country: "New Zealand", lat: -40.3, lng: 175.8, capacity: 840, turbines: 222, type: "onshore", year: 2022, status: "Operational", owner: "TrustPower", developer: "TrustPower", cost_usd: 1000, investment_grade: "Investment Grade B" },

  // More Latin America
  { name: "Rawson Wind Farm", country: "Argentina", lat: -43.3, lng: -65.1, capacity: 77, turbines: 33, type: "onshore", year: 2011, status: "Operational", owner: "Genneia", developer: "Genneia", cost_usd: 120, investment_grade: "Investment Grade B" },
  { name: "Calpulalpan Wind Farm", country: "Mexico", lat: 19.6, lng: -98.6, capacity: 160, turbines: 64, type: "onshore", year: 2020, status: "Operational", owner: "Acciona", developer: "Acciona Energía", cost_usd: 220, investment_grade: "Investment Grade A" },
  { name: "Minuano Wind Complex", country: "Brazil", lat: -28.3, lng: -53.0, capacity: 270, turbines: 90, type: "onshore", year: 2019, status: "Operational", owner: "Casa dos Ventos", developer: "Casa dos Ventos", cost_usd: 320, investment_grade: "Investment Grade B" },
  { name: "Paracatu Wind Farm", country: "Brazil", lat: -17.2, lng: -46.8, capacity: 300, turbines: 75, type: "onshore", year: 2021, status: "Operational", owner: "Neoenergia", developer: "Neoenergia", cost_usd: 360, investment_grade: "Investment Grade A" },
  { name: "Viento Norte Argentina", country: "Argentina", lat: -24.2, lng: -65.3, capacity: 100, turbines: 40, type: "onshore", year: 2023, status: "Operational", owner: "Loma Blanca Wind Farm", developer: "Genneia", cost_usd: 140, investment_grade: "Investment Grade B" },

  // More Europe
  { name: "Fecamp Onshore Cluster", country: "France", lat: 49.7, lng: 0.4, capacity: 120, turbines: 40, type: "onshore", year: 2017, status: "Operational", owner: "Total Energies", developer: "Total Energies", cost_usd: 140, investment_grade: "Investment Grade A" },
  { name: "Senne Wind Farm", country: "Belgium", lat: 50.7, lng: 4.3, capacity: 42, turbines: 14, type: "onshore", year: 2016, status: "Operational", owner: "RWE Renewables", developer: "RWE Renewables", cost_usd: 50, investment_grade: "Investment Grade A" },
  { name: "Hohe Tauern Wind Farm", country: "Austria", lat: 47.1, lng: 13.2, capacity: 60, turbines: 20, type: "onshore", year: 2014, status: "Operational", owner: "Envia-M", developer: "Envia-M", cost_usd: 70, investment_grade: "Investment Grade B" },
  { name: "Windpark Zurndorf", country: "Austria", lat: 48.0, lng: 17.0, capacity: 51, turbines: 17, type: "onshore", year: 2012, status: "Operational", owner: "IG Windkraft", developer: "IG Windkraft", cost_usd: 60, investment_grade: "Investment Grade B" },
  { name: "Dobrogea Central Wind", country: "Romania", lat: 44.3, lng: 28.0, capacity: 120, turbines: 60, type: "onshore", year: 2018, status: "Operational", owner: "Enel Green Power", developer: "Enel Green Power", cost_usd: 140, investment_grade: "Investment Grade A" },
  { name: "Balchik Wind Farm", country: "Bulgaria", lat: 43.4, lng: 28.2, capacity: 90, turbines: 45, type: "onshore", year: 2015, status: "Operational", owner: "EVN", developer: "EVN", cost_usd: 110, investment_grade: "Investment Grade B" },


  // ===== FINAL BATCH =====
  { name: "El Hierro Wind Farm", country: "Spain", lat: 27.7, lng: -18.0, capacity: 11, turbines: 5, type: "onshore", year: 2015, status: "Operational", owner: "Enel Green Power", developer: "Enel Green Power", cost_usd: 20, investment_grade: "Investment Grade A" },
  { name: "Fuerteventura Wind Park", country: "Spain", lat: 28.4, lng: -14.0, capacity: 73, turbines: 29, type: "onshore", year: 2011, status: "Operational", owner: "Iberdrola", developer: "Iberdrola", cost_usd: 100, investment_grade: "Investment Grade A" },
  { name: "Parque Eólico Lebeña", country: "Spain", lat: 43.2, lng: -4.6, capacity: 60, turbines: 24, type: "onshore", year: 2013, status: "Operational", owner: "Acciona", developer: "Acciona Energía", cost_usd: 70, investment_grade: "Investment Grade A" },
  { name: "Pinios Wind Farm", country: "Greece", lat: 39.8, lng: 22.2, capacity: 90, turbines: 36, type: "onshore", year: 2019, status: "Operational", owner: "Terna Energy", developer: "Terna Energy", cost_usd: 110, investment_grade: "Investment Grade B" },
  { name: "Evros Wind Farm", country: "Greece", lat: 41.5, lng: 26.2, capacity: 120, turbines: 48, type: "onshore", year: 2021, status: "Operational", owner: "Iberdrola", developer: "Iberdrola", cost_usd: 140, investment_grade: "Investment Grade A" },
  { name: "Zephyros Wind Farm", country: "Greece", lat: 36.5, lng: 25.4, capacity: 100, turbines: 40, type: "onshore", year: 2020, status: "Operational", owner: "RWE Renewables", developer: "RWE Renewables", cost_usd: 140, investment_grade: "Investment Grade A" },
  { name: "Ngazidja Wind Farm", country: "Comoros", lat: -11.7, lng: 43.3, capacity: 12, turbines: 4, type: "onshore", year: 2021, status: "Operational", owner: "MA-MWE", developer: "MA-MWE", cost_usd: 15, investment_grade: "Government Backed" },
  { name: "Djibouti Wind Farm", country: "Djibouti", lat: 11.8, lng: 43.1, capacity: 40, turbines: 16, type: "onshore", year: 2020, status: "Operational", owner: "EDD", developer: "EDD", cost_usd: 55, investment_grade: "Government Backed" },
  { name: "Ruwais Wind Farm", country: "UAE", lat: 24.1, lng: 52.7, capacity: 120, turbines: 40, type: "construction", year: 2027, status: "Under Construction", owner: "Total Energies", developer: "Total Energies", cost_usd: 240, investment_grade: "Investment Grade A" },
  { name: "Sohar Wind Project", country: "Oman", lat: 24.4, lng: 56.7, capacity: 80, turbines: 32, type: "construction", year: 2027, status: "Under Construction", owner: "Masdar", developer: "Masdar", cost_usd: 160, investment_grade: "Government Backed" },
  { name: "Parana Wind Farm", country: "Brazil", lat: -25.4, lng: -50.0, capacity: 150, turbines: 50, type: "onshore", year: 2022, status: "Operational", owner: "Enel Green Power", developer: "Enel Green Power", cost_usd: 180, investment_grade: "Investment Grade A" },
  { name: "Agaue Wind Farm", country: "Mauritania", lat: 19.7, lng: -16.1, capacity: 100, turbines: 40, type: "construction", year: 2026, status: "Under Construction", owner: "SOMELEC", developer: "SOMELEC", cost_usd: 200, investment_grade: "Government Backed" },

];
