// ===== CEA FEEDBACK MODAL =====
// Triggered by Log Out button. Collects quick feedback before ending session.

(function() {

  var questions = [
    {
      id: 'q1',
      text: 'How easy was it to navigate the map and find projects?',
      choices: [
        'Very easy — I found what I needed right away',
        'Pretty easy — took a little exploring',
        'Somewhat difficult — I needed the tour to figure it out',
        'Difficult — I had trouble finding things'
      ]
    },
    {
      id: 'q2',
      text: 'How would you rate the depth and accuracy of the project data?',
      choices: [
        'Excellent — comprehensive and accurate',
        'Good — mostly what I expected',
        'Fair — some gaps or missing projects I expected to find',
        'Needs improvement — significant data missing'
      ]
    },
    {
      id: 'q3',
      text: 'Which feature did you find most valuable?',
      choices: [
        'The interactive map with all energy layers',
        'Clicking a project to see detailed data',
        'The pipeline / projects under development',
        'The ability to filter and search projects',
        'The news feed and current energy updates'
      ]
    },
    {
      id: 'q4',
      text: 'What would most improve Clean Energy Atlas for you?',
      choices: [
        'More projects and countries covered',
        'Better map navigation (zoom, labels, search)',
        'More detailed financial and investment data',
        'Ability to export or share data more easily',
        'A mobile app version'
      ]
    },
    {
      id: 'q5',
      text: 'How likely are you to recommend Clean Energy Atlas to a colleague?',
      choices: [
        'Definitely — I already have',
        'Very likely — it is genuinely impressive',
        'Probably — once a few things are added',
        'Not sure yet — need more time with it'
      ]
    }
  ];

  var answers = {};

  function buildModal() {
    if (document.getElementById('cea-feedback-modal')) return;

    var modal = document.createElement('div');
    modal.id = 'cea-feedback-modal';
    modal.className = 'cea-feedback-modal';

    var questionsHTML = questions.map(function(q, qi) {
      var choicesHTML = q.choices.map(function(c, ci) {
        return '<label class="cea-fb-choice">' +
          '<input type="radio" name="' + q.id + '" value="' + ci + '">' +
          '<span class="cea-fb-choice-text">' + c + '</span>' +
          '</label>';
      }).join('');

      return '<div class="cea-fb-question" id="cea-fbq-' + qi + '">' +
        '<div class="cea-fb-q-num">Question ' + (qi + 1) + ' of ' + questions.length + '</div>' +
        '<div class="cea-fb-q-text">' + q.text + '</div>' +
        '<div class="cea-fb-choices">' + choicesHTML + '</div>' +
        '</div>';
    }).join('');

    modal.innerHTML =
      '<div class="cea-feedback-card">' +
        '<div class="cea-fb-header">' +
          '<div class="cea-fb-icon">📋</div>' +
          '<div>' +
            '<div class="cea-fb-title">Quick Feedback</div>' +
            '<div class="cea-fb-subtitle">Takes about 60 seconds — your input shapes what we build next</div>' +
          '</div>' +
        '</div>' +
        '<div class="cea-fb-body">' +
          questionsHTML +
          '<div class="cea-fb-question" id="cea-fbq-done" style="display:none">' +
            '<div class="cea-fb-thankyou">' +
              '<div class="cea-fb-ty-icon">⚡</div>' +
              '<div class="cea-fb-ty-title">Thank you!</div>' +
              '<div class="cea-fb-ty-msg">Your feedback helps us build a better atlas.<br>We look forward to having you back soon.</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="cea-fb-footer">' +
          '<button class="cea-fb-btn-skip" id="cea-fb-skip">Skip &amp; Log Out</button>' +
          '<button class="cea-fb-btn-next" id="cea-fb-next">Next →</button>' +
        '</div>' +
      '</div>';

    document.body.appendChild(modal);

    showQuestion(0);

    document.getElementById('cea-fb-next').addEventListener('click', handleNext);
    document.getElementById('cea-fb-skip').addEventListener('click', doLogout);
  }

  var currentQ = 0;

  function showQuestion(idx) {
    questions.forEach(function(q, i) {
      var el = document.getElementById('cea-fbq-' + i);
      if (el) el.style.display = (i === idx) ? 'block' : 'none';
    });
    var done = document.getElementById('cea-fbq-done');
    if (done) done.style.display = 'none';

    var nextBtn = document.getElementById('cea-fb-next');
    var skipBtn = document.getElementById('cea-fb-skip');
    if (nextBtn) nextBtn.textContent = (idx < questions.length - 1) ? 'Next →' : 'Submit & Log Out';
    if (skipBtn) skipBtn.style.display = 'inline-flex';
    currentQ = idx;
  }

  function handleNext() {
    // Record answer if selected
    var q = questions[currentQ];
    var selected = document.querySelector('input[name="' + q.id + '"]:checked');
    if (selected) {
      answers[q.id] = {
        question: q.text,
        answer: q.choices[parseInt(selected.value)]
      };
    }

    if (currentQ < questions.length - 1) {
      showQuestion(currentQ + 1);
    } else {
      // Show thank-you screen
      questions.forEach(function(q, i) {
        var el = document.getElementById('cea-fbq-' + i);
        if (el) el.style.display = 'none';
      });
      var done = document.getElementById('cea-fbq-done');
      if (done) done.style.display = 'block';

      var nextBtn = document.getElementById('cea-fb-next');
      var skipBtn = document.getElementById('cea-fb-skip');
      if (nextBtn) nextBtn.style.display = 'none';
      if (skipBtn) {
        skipBtn.textContent = 'Close & Log Out';
        skipBtn.style.display = 'inline-flex';
      }

      // Log answers to console (future: send to server/email)
      console.log('CEA Feedback:', JSON.stringify(answers, null, 2));

      // Auto-logout after 3 seconds
      setTimeout(doLogout, 3000);
    }
  }

  function doLogout() {
    sessionStorage.removeItem('cea_auth');
    window.location.href = 'login.html';
  }

  window.openFeedbackModal = function() {
    buildModal();
    var modal = document.getElementById('cea-feedback-modal');
    if (modal) {
      modal.classList.add('open');
      // Reset to first question
      answers = {};
      showQuestion(0);
      // Uncheck all radios
      document.querySelectorAll('#cea-feedback-modal input[type="radio"]').forEach(function(r) {
        r.checked = false;
      });
      var nextBtn = document.getElementById('cea-fb-next');
      if (nextBtn) nextBtn.style.display = 'inline-flex';
      var skipBtn = document.getElementById('cea-fb-skip');
      if (skipBtn) { skipBtn.textContent = 'Skip & Log Out'; skipBtn.style.display = 'inline-flex'; }
    }
  };

})();
