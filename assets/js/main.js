/* =========================================================
   株式会社縁 — Common JS
========================================================= */

(() => {
  // Header scroll state
  const header = document.querySelector('.header');
  const onScroll = () => {
    if (!header) return;
    if (window.scrollY > 8) header.classList.add('is-scrolled');
    else header.classList.remove('is-scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu
  const toggle = document.querySelector('.menu-toggle');
  const gnav = document.querySelector('.gnav');
  if (toggle && gnav) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('is-open');
      gnav.classList.toggle('is-open');
    });
  }

  // Filter (works)
  const filterButtons = document.querySelectorAll('.filter-btn');
  const works = document.querySelectorAll('.work');
  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.cat;
      filterButtons.forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      works.forEach((w) => {
        w.style.display = cat === 'all' || w.dataset.cat === cat ? '' : 'none';
      });
    });
  });

  // Form (sample, prevent submit)
  const form = document.querySelector('.form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('サンプル画面のためお問合せは送信されません。\n本番ではメールとLINE公式に通知が届く設計です。');
    });
  }

  // Reveal on scroll
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));
})();
