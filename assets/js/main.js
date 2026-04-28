/* ========================================
   株式会社縁 サンプルサイト v1 - Common JS
======================================== */

(() => {
  // ---------- Mobile menu ----------
  const toggle = document.querySelector('.menu-toggle');
  const gnav = document.querySelector('.gnav');
  if (toggle && gnav) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('is-open');
      gnav.classList.toggle('is-open');
    });
  }

  // ---------- Filter (works page) ----------
  const filterButtons = document.querySelectorAll('.filter-btn');
  const workCards = document.querySelectorAll('.work-card');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.cat;
      filterButtons.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      workCards.forEach(card => {
        if (cat === 'all' || card.dataset.cat === cat) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ---------- Form (sample, prevent submit) ----------
  const form = document.querySelector('.form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('サンプル画面のためお問合せは送信されません。\n本番では入力内容がメールとLINE公式に通知されます。');
    });
  }

  // ---------- Fade in on scroll ----------
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('[data-fade]').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.7s, transform 0.7s';
    observer.observe(el);
  });
  document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.textContent = '[data-fade].is-visible { opacity: 1 !important; transform: translateY(0) !important; }';
    document.head.appendChild(style);
  });
})();
