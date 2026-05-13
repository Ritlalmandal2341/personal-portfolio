/* ============================================
   PERSONAL PORTFOLIO — MAIN JAVASCRIPT
   Navigation, Theme, Animations, Form Logic
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ---------- DOM References ----------
  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
  const themeToggle = document.querySelector('.theme-toggle');
  const sections = document.querySelectorAll('.section');
  const reveals = document.querySelectorAll('.reveal, .reveal-children');
  const skillFills = document.querySelectorAll('.skill-level-fill');
  const contactForm = document.getElementById('contact-form');
  const spotlight = document.querySelector('.spotlight');

  // ---------- Spotlight Effect ----------
  window.addEventListener('mousemove', (e) => {
    spotlight.style.setProperty('--x', `${e.clientX}px`);
    spotlight.style.setProperty('--y', `${e.clientY}px`);
  });

  const backToTop = document.getElementById('back-to-top');

  // ---------- Sticky Navbar & Back to Top ----------
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    backToTop.classList.toggle('visible', window.scrollY > 300);
    updateActiveNav();
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ---------- Mobile Hamburger Menu ----------
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  // Close mobile menu on link click
  navAnchors.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });

  // ---------- Smooth Scroll Navigation ----------
  navAnchors.forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        const offset = navbar.offsetHeight + 16;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ---------- Active Nav Link Highlight ----------
  function updateActiveNav() {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
    navAnchors.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  // ---------- Dark / Light Theme Toggle ----------
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateThemeIcon(next);
  });

  function updateThemeIcon(theme) {
    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    themeToggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
  }

  // ---------- Scroll Reveal Animations (Intersection Observer) ----------
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(el => revealObserver.observe(el));

  // ---------- Skill Bar Animation ----------
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target;
        fill.style.width = fill.dataset.level + '%';
      }
    });
  }, { threshold: 0.3 });

  skillFills.forEach(fill => skillObserver.observe(fill));

  // ---------- Contact Form Validation ----------
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // Clear previous errors
      contactForm.querySelectorAll('.form-group').forEach(g => g.classList.remove('error'));

      // Name validation
      const name = contactForm.querySelector('#name');
      if (!name.value.trim()) {
        showError(name, 'Please enter your name');
        isValid = false;
      }

      // Email validation
      const email = contactForm.querySelector('#email');
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.value.trim()) {
        showError(email, 'Please enter your email');
        isValid = false;
      } else if (!emailPattern.test(email.value)) {
        showError(email, 'Please enter a valid email');
        isValid = false;
      }

      // Message validation
      const message = contactForm.querySelector('#message');
      if (!message.value.trim()) {
        showError(message, 'Please enter a message');
        isValid = false;
      }

      if (isValid) {
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerHTML;
        
        // Show loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML = '⌛ Sending...';

        const formData = new FormData(contactForm);
        
        fetch(contactForm.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        }).then(response => {
          if (response.ok) {
            // Show success message
            const successEl = contactForm.querySelector('.form-success');
            successEl.classList.add('show');
            contactForm.reset();
            setTimeout(() => successEl.classList.remove('show'), 4000);
          } else {
            alert("Oops! There was a problem sending your message. Please try again.");
          }
        }).catch(error => {
          alert("Oops! There was a problem connecting to the server.");
        }).finally(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;
        });
      }
    });
  }

  function showError(input, msg) {
    const group = input.closest('.form-group');
    group.classList.add('error');
    group.querySelector('.form-error').textContent = msg;
  }

  // ---------- Initialize ----------
  updateActiveNav();
});
