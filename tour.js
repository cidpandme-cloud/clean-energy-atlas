/* ============================================================
   Clean Energy Atlas — Guided Reviewer Tour
   Auto-launches on first visit; replay via "Start Tour" button
   ============================================================ */

(function () {
  const TOUR_KEY = 'cea_tour_seen_v1';

  const steps = [
    {
      title: "Welcome to Clean Energy Atlas",
      text: "This quick tour walks you through the key features in about 2 minutes. Click <strong>Next</strong> to begin — or <strong>Skip Tour</strong> to explore on your own.",
      target: null,
      position: 'center'
    },
    {
      title: "The Layer Panel",
      text: "Click the <strong>⚡ icon</strong> on the left to open the Layers panel. Toggle any of the 8 energy technologies — Solar, Wind, Hydro, Nuclear, Geothermal, Biomass, Storage, and Data Centers — on and off.",
      target: '#layer-panel-expand',
      position: 'right'
    },
    {
      title: "Explore Projects",
      text: "<strong>Click any colored dot</strong> on the map to open a Project Detail panel. You'll see the project name, country, capacity (MW), technology type, status, and owner. Close it with the × button.",
      target: null,
      position: 'center'
    },
    {
      title: "Cluster Zoom (NEW)",
      text: "When zoomed out, projects group into numbered clusters. <strong>Click any cluster once</strong> to zoom in and expand it. Keep clicking until individual projects appear. Works for all 8 layers.",
      target: null,
      position: 'center'
    },
    {
      title: "Project Pipeline",
      text: "Scroll down in the Layers panel and click <strong>\"Show Pipeline\"</strong> to see 461 proposed US energy projects. Ring color shows approval stage (Applied → Under Construction). <strong>Hover over a pipeline cluster</strong> for a project dropdown.",
      target: '#btn-pipeline',
      position: 'right'
    },
    {
      title: "Filter the Pipeline",
      text: "Use the <strong>Type chips</strong> (Wind, Solar, Storage…) and <strong>Stage chips</strong> (Applied, Permitted…) to filter pipeline projects. Download data in CSV, JSON, TXT, or PDF format.",
      target: '#pipeline-type-chips',
      position: 'right'
    },
    {
      title: "News Feed",
      text: "Click the <strong>📰 news icon</strong> (top right) to open 56 clean energy news articles. Filter by technology, click headlines to read full articles, or save as PDF.",
      target: '#news-toggle',
      position: 'left'
    },
    {
      title: "Help & Documentation",
      text: "Click the <strong>? help icon</strong> (top right) for full in-app documentation covering every feature.",
      target: '#help-toggle',
      position: 'left'
    },
    {
      title: "More Controls",
      text: "<strong>🌙 Theme</strong> — toggle dark/light mode<br><strong>🔥 Heatmap</strong> — wind energy density overlay<br><strong>🔗 DC Links</strong> — data center connections<br><strong>🗄️ Database</strong> — browse all projects in a searchable table",
      target: '#theme-toggle',
      position: 'left'
    },
    {
      title: "You're Ready to Explore!",
      text: "That's the full tour. We'd love your feedback — especially on <strong>ease of use</strong>, the <strong>pipeline feature</strong>, and anything that felt confusing or missing. Thank you for being a reviewer!",
      target: null,
      position: 'center'
    }
  ];

  let currentStep = 0;
  let overlay, spotlight, tooltip, replayBtn;

  function buildOverlay() {
    // Remove existing
    const old = document.getElementById('cea-tour-overlay');
    if (old) old.remove();
    const oldBtn = document.getElementById('cea-tour-replay-btn');
    if (oldBtn) oldBtn.remove();

    // Overlay
    overlay = document.createElement('div');
    overlay.id = 'cea-tour-overlay';
    overlay.innerHTML = `
      <div id="cea-tour-spotlight"></div>
      <div id="cea-tour-tooltip">
        <div id="cea-tour-step-badge"></div>
        <div id="cea-tour-title"></div>
        <div id="cea-tour-text"></div>
        <div id="cea-tour-actions">
          <button id="cea-tour-skip">Skip Tour</button>
          <div id="cea-tour-nav">
            <button id="cea-tour-prev">← Back</button>
            <button id="cea-tour-next">Next →</button>
          </div>
        </div>
        <div id="cea-tour-dots"></div>
      </div>
    `;
    document.body.appendChild(overlay);

    spotlight = document.getElementById('cea-tour-spotlight');
    tooltip   = document.getElementById('cea-tour-tooltip');

    document.getElementById('cea-tour-skip').addEventListener('click', endTour);
    document.getElementById('cea-tour-prev').addEventListener('click', () => goTo(currentStep - 1));
    document.getElementById('cea-tour-next').addEventListener('click', () => {
      if (currentStep === steps.length - 1) endTour();
      else goTo(currentStep + 1);
    });
  }

  function buildDots() {
    const dots = document.getElementById('cea-tour-dots');
    dots.innerHTML = '';
    steps.forEach((_, i) => {
      const d = document.createElement('span');
      d.className = 'cea-tour-dot' + (i === currentStep ? ' active' : '');
      d.addEventListener('click', () => goTo(i));
      dots.appendChild(d);
    });
  }

  function goTo(index) {
    if (index < 0 || index >= steps.length) return;
    currentStep = index;
    renderStep();
  }

  function renderStep() {
    const step = steps[currentStep];
    const isLast = currentStep === steps.length - 1;
    const isFirst = currentStep === 0;

    document.getElementById('cea-tour-step-badge').textContent = `Step ${currentStep + 1} of ${steps.length}`;
    document.getElementById('cea-tour-title').textContent = step.title;
    document.getElementById('cea-tour-text').innerHTML = step.text;
    document.getElementById('cea-tour-next').textContent = isLast ? 'Finish ✓' : 'Next →';
    document.getElementById('cea-tour-prev').style.display = isFirst ? 'none' : 'inline-block';
    buildDots();

    // Position tooltip
    positionTooltip(step);
  }

  function positionTooltip(step) {
    // Hide spotlight by default
    spotlight.style.display = 'none';

    if (step.target) {
      const el = document.querySelector(step.target);
      if (el) {
        const rect = el.getBoundingClientRect();
        const pad = 8;

        // Spotlight
        spotlight.style.display = 'block';
        spotlight.style.top    = (rect.top - pad) + 'px';
        spotlight.style.left   = (rect.left - pad) + 'px';
        spotlight.style.width  = (rect.width + pad * 2) + 'px';
        spotlight.style.height = (rect.height + pad * 2) + 'px';

        // Tooltip near target
        const ttW = 320, ttH = 220;
        let top, left;

        if (step.position === 'right') {
          left = rect.right + 16;
          top  = rect.top + rect.height / 2 - ttH / 2;
        } else if (step.position === 'left') {
          left = rect.left - ttW - 16;
          top  = rect.top + rect.height / 2 - ttH / 2;
        } else {
          left = window.innerWidth / 2 - ttW / 2;
          top  = window.innerHeight / 2 - ttH / 2;
        }

        // Clamp to viewport
        top  = Math.max(80, Math.min(top,  window.innerHeight - ttH - 20));
        left = Math.max(10, Math.min(left, window.innerWidth  - ttW - 10));

        tooltip.style.top  = top + 'px';
        tooltip.style.left = left + 'px';
        tooltip.style.transform = 'none';
        return;
      }
    }

    // Centered
    tooltip.style.top       = '50%';
    tooltip.style.left      = '50%';
    tooltip.style.transform = 'translate(-50%, -50%)';
  }

  function endTour() {
    localStorage.setItem(TOUR_KEY, '1');
    const ol = document.getElementById('cea-tour-overlay');
    if (ol) {
      ol.style.opacity = '0';
      ol.style.transition = 'opacity 0.4s';
      setTimeout(() => ol.remove(), 400);
    }
    showReplayButton();
  }

  function showReplayButton() {
    const old = document.getElementById('cea-tour-replay-btn');
    if (old) return;
    replayBtn = document.createElement('button');
    replayBtn.id = 'cea-tour-replay-btn';
    replayBtn.innerHTML = '🗺️ Tour';
    replayBtn.title = 'Start guided tour';
    replayBtn.addEventListener('click', startTour);
    document.body.appendChild(replayBtn);
  }

  function startTour() {
    currentStep = 0;
    buildOverlay();
    renderStep();
  }

  // Init
  function init() {
    showReplayButton();
    const seen = localStorage.getItem(TOUR_KEY);
    if (!seen) {
      // Small delay so map finishes loading
      setTimeout(startTour, 2200);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
