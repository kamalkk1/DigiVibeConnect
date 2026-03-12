/* ═══════════════════════════════════════════════════════
   DIGIVIBE — Landing Page Interactions
   Handles: scroll reveals, FAQ accordion, mobile nav,
   smooth scroll, and a subtle exit-intent popup.
   ═══════════════════════════════════════════════════════ */

(function () {
  'use strict';

  // ─── SCROLL REVEAL ───
  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  reveals.forEach((el) => revealObserver.observe(el));

  // ─── FAQ ACCORDION ───
  const faqItems = document.querySelectorAll('.faq__item');
  faqItems.forEach((item) => {
    const btn = item.querySelector('.faq__question');
    btn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      // Close all first
      faqItems.forEach((i) => i.classList.remove('active'));
      // Toggle current
      if (!isActive) item.classList.add('active');
    });
  });

  // ─── MOBILE NAV TOGGLE ───
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  const navCta = document.getElementById('nav-cta');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      const isOpen = navLinks.classList.contains('active');
      navLinks.classList.toggle('active');
      navCta.classList.toggle('active');
      hamburger.textContent = isOpen ? '☰' : '✕';
    });

    // Close mobile nav when a link is clicked
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        navCta.classList.remove('active');
        hamburger.textContent = '☰';
      });
    });
  }

  // ─── SMOOTH SCROLL FOR ANCHOR LINKS ───
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const bannerHeight = document.getElementById('top-banner')?.offsetHeight || 0;
        const offset = navbarHeight + bannerHeight + 10;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    });
  });

  // ─── NAVBAR BACKGROUND ON SCROLL ───
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 100) {
      navbar.style.borderBottomColor = 'rgba(124, 58, 237, 0.15)';
    } else {
      navbar.style.borderBottomColor = 'rgba(148, 163, 184, 0.08)';
    }
    lastScroll = currentScroll;
  });

  // ─── COUNTER ANIMATION FOR STATS ───
  const costItems = document.querySelectorAll('.pain__cost-item .number');
  const costObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const text = el.textContent;
          // Simple "pop in" animation with scale
          el.style.transform = 'scale(0.5)';
          el.style.opacity = '0';
          el.style.transition = 'transform 0.6s cubic-bezier(0.34,1.56,0.64,1), opacity 0.4s ease';
          requestAnimationFrame(() => {
            el.style.transform = 'scale(1)';
            el.style.opacity = '1';
          });
          costObserver.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );
  costItems.forEach((el) => costObserver.observe(el));

  // ─── EXIT INTENT POPUP (desktop only) ───
  let exitShown = false;
  document.addEventListener('mouseout', (e) => {
    if (
      !exitShown &&
      e.clientY < 5 &&
      !e.relatedTarget &&
      !e.toElement &&
      window.innerWidth > 768
    ) {
      exitShown = true;
      showExitPopup();
    }
  });

  function showExitPopup() {
    const overlay = document.createElement('div');
    overlay.id = 'exit-overlay';
    overlay.style.cssText = `
      position: fixed; inset: 0; z-index: 10000;
      background: rgba(0,0,0,0.7); backdrop-filter: blur(8px);
      display: flex; align-items: center; justify-content: center;
      animation: fadeIn 0.3s ease;
    `;

    const popup = document.createElement('div');
    popup.style.cssText = `
      background: #111127; border: 1px solid rgba(124,58,237,0.3);
      border-radius: 20px; padding: 3rem; max-width: 480px; width: 90%;
      text-align: center; position: relative;
      box-shadow: 0 0 60px rgba(124,58,237,0.2);
      animation: popIn 0.4s cubic-bezier(0.34,1.56,0.64,1);
    `;

    popup.innerHTML = `
      <button id="exit-close" style="
        position: absolute; top: 1rem; right: 1rem;
        background: none; border: none; color: #64748B;
        font-size: 1.5rem; cursor: pointer; padding: 0.5rem;
      ">✕</button>
      <div style="font-size: 2.5rem; margin-bottom: 1rem;">🎙️</div>
      <h3 style="font-size: 1.5rem; font-weight: 800; margin-bottom: 0.75rem; color: #F8FAFC;">
        Wait — Hear the AI First
      </h3>
      <p style="color: #94A3B8; line-height: 1.7; margin-bottom: 1.5rem;">
        Before you go, try calling our Voice AI. It answers in real-time — 
        just like a trained receptionist. 
        <strong style="color: #F8FAFC;">Hear what your customers will hear.</strong>
      </p>
      <a href="https://wa.me/919780267246?text=Hi!%20I%20want%20to%20hear%20the%20Voice%20AI%20demo." 
         target="_blank" style="
        display: inline-flex; align-items: center; gap: 0.5rem;
        padding: 1rem 2rem; background: linear-gradient(135deg, #7C3AED, #A855F7, #EC4899);
        color: #fff; border: none; border-radius: 12px; font-size: 1rem;
        font-weight: 600; cursor: pointer; text-decoration: none;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      ">🎯 Get Free AI Demo</a>
      <p style="color: #64748B; font-size: 0.8rem; margin-top: 1rem;">
        No spam. No sales pressure. Just a demo.
      </p>
    `;

    overlay.appendChild(popup);
    document.body.appendChild(overlay);

    // Close handlers
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeExitPopup();
    });
    document.getElementById('exit-close').addEventListener('click', closeExitPopup);

    function closeExitPopup() {
      overlay.style.animation = 'fadeOut 0.2s ease forwards';
      setTimeout(() => overlay.remove(), 200);
    }
  }

  // ─── ANIMATION KEYFRAMES (injected) ───
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes fadeOut { from { opacity: 1; } to { opacity: 0; } }
    @keyframes popIn { from { opacity: 0; transform: scale(0.9) translateY(20px); } 
                        to { opacity: 1; transform: scale(1) translateY(0); } }
  `;
  document.head.appendChild(style);

  // ═══════════════════════════════════════════════════════
  // AI READINESS AUDIT — QUIZ ENGINE
  // ═══════════════════════════════════════════════════════

  const auditTrigger = document.getElementById('audit-trigger');
  const auditModal = document.getElementById('audit-modal');
  const auditClose = document.getElementById('audit-close');
  const auditProgress = document.getElementById('audit-progress');
  const auditResults = document.getElementById('audit-results');
  const auditSuccess = document.getElementById('audit-success');
  const auditForm = document.getElementById('audit-form');
  const auditSubmit = document.getElementById('audit-submit');

  const TOTAL_STEPS = 7;
  let currentStep = 1;
  let answers = [];
  let totalScore = 0;

  // ─── OPEN / CLOSE MODAL ───
  if (auditTrigger && auditModal) {
    auditTrigger.addEventListener('click', () => {
      auditModal.classList.add('open');
      auditTrigger.classList.add('hidden');
    });

    auditClose.addEventListener('click', () => {
      auditModal.classList.remove('open');
      auditTrigger.classList.remove('hidden');
    });
  }

  // ─── OPTION CLICK → AUTO-ADVANCE ───
  document.querySelectorAll('.audit-step').forEach((stepEl) => {
    const options = stepEl.querySelectorAll('.audit-option');
    options.forEach((opt) => {
      opt.addEventListener('click', () => {
        // Mark selected
        options.forEach((o) => o.classList.remove('selected'));
        opt.classList.add('selected');

        // Record answer
        const stepNum = parseInt(stepEl.dataset.step);
        const score = parseInt(opt.dataset.score);
        answers[stepNum - 1] = {
          question: stepEl.querySelector('.audit-step__question').textContent,
          answer: opt.textContent.trim(),
          score: score,
        };

        // Auto-advance after brief delay
        setTimeout(() => {
          if (currentStep < TOTAL_STEPS) {
            goToStep(currentStep + 1);
          } else {
            showResults();
          }
        }, 350);
      });
    });
  });

  function goToStep(step) {
    // Hide current step
    document.querySelector(`.audit-step[data-step="${currentStep}"]`).classList.remove('active');
    // Show next step
    currentStep = step;
    document.querySelector(`.audit-step[data-step="${currentStep}"]`).classList.add('active');
    // Update progress
    const pct = Math.round((currentStep / TOTAL_STEPS) * 100);
    auditProgress.style.width = pct + '%';
  }

  function showResults() {
    // Hide quiz steps
    document.querySelectorAll('.audit-step').forEach((s) => s.classList.remove('active'));

    // Calculate score
    totalScore = answers.reduce((sum, a) => sum + (a ? a.score : 0), 0);
    const maxScore = TOTAL_STEPS * 3; // 21

    // Determine level
    let level, levelClass, desc;
    const pct = totalScore / maxScore;

    if (pct <= 0.3) {
      level = '🚨 Critical — You\'re Losing Revenue Daily';
      levelClass = 'critical';
      desc = 'Your business has significant gaps in lead capture and follow-up. You\'re likely losing 40-60% of potential customers to competitors who respond faster. AI automation would have an immediate, dramatic impact.';
    } else if (pct <= 0.55) {
      level = '⚠️ At Risk — Leads Are Slipping Through';
      levelClass = 'at-risk';
      desc = 'You have some systems in place, but major gaps remain — especially in after-hours coverage and follow-up speed. AI could help you capture 2-3x more leads from the traffic you already have.';
    } else if (pct <= 0.8) {
      level = '👍 Good — But There\'s Room to Grow';
      levelClass = 'good';
      desc = 'You\'re doing better than most, but there are still gaps where leads fall through — especially with automation and 24/7 availability. AI could optimize your existing processes significantly.';
    } else {
      level = '🏆 Optimized — You\'re Ahead of the Game';
      levelClass = 'optimized';
      desc = 'Your lead capture process is strong! AI could still add incremental value — especially for scaling without adding headcount. Let\'s see if there are advanced automations that fit your setup.';
    }

    // Update progress bar to 100%
    auditProgress.style.width = '100%';

    // Render results
    const gauge = document.getElementById('audit-gauge');
    const scoreEl = document.getElementById('audit-score');
    const levelEl = document.getElementById('audit-level');
    const descEl = document.getElementById('audit-desc');

    scoreEl.textContent = totalScore;
    levelEl.textContent = level;
    levelEl.className = 'audit-results__level ' + levelClass;
    descEl.textContent = desc;

    // Set gauge color
    gauge.className = 'audit-results__gauge ' + levelClass;
    gauge.style.setProperty('--pct', Math.round(pct * 100) + '%');

    // Show results
    auditResults.classList.add('active');
  }

  // ─── LEAD CAPTURE FORM SUBMIT ───
  if (auditSubmit) {
    auditSubmit.addEventListener('click', () => {
      const name = document.getElementById('audit-name').value.trim();
      const phone = document.getElementById('audit-phone').value.trim();
      const industry = document.getElementById('audit-industry').value;

      // Basic validation
      if (!name) {
        document.getElementById('audit-name').style.borderColor = 'var(--accent-rose)';
        document.getElementById('audit-name').focus();
        return;
      }
      if (!phone || phone.length < 10) {
        document.getElementById('audit-phone').style.borderColor = 'var(--accent-rose)';
        document.getElementById('audit-phone').focus();
        return;
      }
      if (!industry) {
        document.getElementById('audit-industry').style.borderColor = 'var(--accent-rose)';
        document.getElementById('audit-industry').focus();
        return;
      }

      // Build WhatsApp message with all data
      const answerSummary = answers
        .map((a, i) => `Q${i + 1}: ${a.answer} (${a.score}/3)`)
        .join('\n');

      const waMsg = encodeURIComponent(
        `🔎 AI Readiness Audit — New Lead!\n\n` +
          `👤 Name: ${name}\n` +
          `📱 Phone: ${phone}\n` +
          `🏢 Industry: ${industry}\n` +
          `📊 Score: ${totalScore}/21\n\n` +
          `Answers:\n${answerSummary}`
      );

      // Update the success screen WhatsApp link with personalized message
      const successCta = document.querySelector('.audit-success__cta');
      if (successCta) {
        successCta.href = `https://wa.me/919780267246?text=${encodeURIComponent(
          `Hi Digivibe! I just took the AI Readiness Audit.\n\nMy name is ${name}, I'm in ${industry}.\nMy score was ${totalScore}/21.\n\nPlease send my detailed report!`
        )}`;
      }

      // Switch to success screen
      auditResults.classList.remove('active');
      auditForm.style.display = 'none';
      auditSuccess.classList.add('active');

      // Log to console (in production, send to your backend/webhook)
      console.log('🎯 AUDIT LEAD CAPTURED:', {
        name,
        phone,
        industry,
        score: totalScore,
        answers: answers,
        timestamp: new Date().toISOString(),
      });
    });
  }
})();

