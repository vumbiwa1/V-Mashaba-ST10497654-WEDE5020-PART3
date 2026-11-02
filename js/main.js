document.addEventListener('DOMContentLoaded', () => {
  'use strict';
  try {
    // Update the copyright year and South African date/time every second on every page.
    const updateClock = () => {
      const now = new Date();
      document.querySelectorAll('.year').forEach(el => { el.textContent = now.getFullYear(); });
      const formatted = new Intl.DateTimeFormat('en-ZA', {
        timeZone: 'Africa/Johannesburg', dateStyle: 'full', timeStyle: 'medium'
      }).format(now);
      document.querySelectorAll('.live-date-time').forEach(el => { el.textContent = formatted; });
    };
    updateClock();
    window.setInterval(updateClock, 1000);

    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.main-nav');
    if (toggle && nav) toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    });

    document.querySelectorAll('.accordion-trigger').forEach(btn => btn.addEventListener('click', () => {
      const panel = btn.nextElementSibling;
      const open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      if (panel) panel.classList.toggle('open', !open);
    }));

    const search = document.querySelector('#productSearch');
    if (search) {
      const cards = [...document.querySelectorAll('.product-card')];
      const status = document.querySelector('#searchStatus');
      const none = document.querySelector('#noProducts');
      search.addEventListener('input', () => {
        const q = search.value.trim().toLowerCase(); let count = 0;
        cards.forEach(card => {
          const match = (card.dataset.name || '').toLowerCase().includes(q) || card.innerText.toLowerCase().includes(q);
          card.hidden = !match; if (match) count++;
        });
        if (status) status.textContent = `Showing ${count} of ${cards.length} products/services.`;
        if (none) none.hidden = count !== 0;
      });
    }

    // Lightbox slideshow: previous/next buttons and keyboard arrow navigation.
    const dialog = document.querySelector('#lightbox');
    const lightImg = document.querySelector('#lightboxImage');
    if (dialog && lightImg) {
      const buttons = [...document.querySelectorAll('.gallery-button')];
      let current = 0;
      const showImage = index => {
        current = (index + buttons.length) % buttons.length;
        const button = buttons[current], img = button.querySelector('img');
        lightImg.src = button.dataset.full; lightImg.alt = img.alt;
        const caption = document.querySelector('#lightboxCaption');
        if (caption) caption.textContent = button.closest('figure')?.querySelector('figcaption')?.textContent || img.alt;
      };
      buttons.forEach((button, index) => button.addEventListener('click', () => {
        showImage(index); if (!dialog.open) dialog.showModal();
      }));
      dialog.querySelector('.lightbox-close')?.addEventListener('click', () => dialog.close());
      dialog.querySelector('.lightbox-prev')?.addEventListener('click', () => showImage(current - 1));
      dialog.querySelector('.lightbox-next')?.addEventListener('click', () => showImage(current + 1));
      dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
      dialog.addEventListener('keydown', e => {
        if (e.key === 'ArrowLeft') showImage(current - 1);
        if (e.key === 'ArrowRight') showImage(current + 1);
      });
    }

    const date = document.querySelector('#eventDate');
    if (date) {
      const today = new Date();
      date.min = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`;
    }

    // Netlify Forms handles delivery after deployment; this script validates before normal POST.
    ['contactForm', 'enquiryForm'].forEach(id => {
      const form = document.getElementById(id);
      if (!form) return;
      form.addEventListener('submit', event => {
        try {
          if (!form.reportValidity()) { event.preventDefault(); return; }
          const result = form.querySelector('.form-message');
          if (result) result.textContent = 'Submitting your details…';
          // Do not prevent the browser's POST: Netlify receives the form submission.
        } catch (error) {
          event.preventDefault();
          const result = form.querySelector('.form-message');
          if (result) result.textContent = 'Sorry, there was a problem validating this form. Please check your details and try again.';
          console.error('Form validation error:', error);
        }
      });
    });
  } catch (error) {
    console.error('Website script error:', error);
  }
});
