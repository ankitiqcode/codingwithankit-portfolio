/* ==========================================================================
   CodingWithAnkit — Blog Home
   Vanilla JavaScript — no dependencies
   ========================================================================== */
(() => {
  'use strict';

  /* ------------------------------------------------------------------
     1. POST DATA
     Single source of truth for the grid — powers render + search + filter.
     Swap this for a fetch() to a JSON/CMS endpoint later without touching
     any other code.
  ------------------------------------------------------------------ */
  const posts = [
    {
      id: 'python-interview-questions',
      title: '100+ Python Interview Questions and Answers (2026)',
      desc: 'Master Python interview preparation with 100+ carefully selected beginner to advanced questions, real coding examples, expected outputs, and clear explanations to help you crack technical interviews with confidence.',
      category: 'python',
      categoryLabel: 'Python',
      author: 'Ankit Verma',
      date: '2026-07-21',
      dateLabel: 'Jul 21, 2026',
      readTime: '35 min read',
      img: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=800&q=60', 
      url: 'python-interview-questions.html' 
    },
    
    /* -------- {
      id: 'python-pandas-cheatsheet',
      title: 'The Only Pandas Cheat Sheet You Need for Data Cleaning',
      desc: 'Filter, group, merge and reshape data frames fast — every method explained with a one-line example you can copy straight into a notebook.',
      category: 'python',
      categoryLabel: 'Python',
      author: 'Ankit Verma',
      date: '2026-07-10',
      dateLabel: 'Jul 10, 2026',
      readTime: '7 min read',
      img: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=800&q=60',
      url: '/blog/pandas-cheatsheet-for-data-cleaning/'
    },
    {
      id: 'powerbi-dax-measures',
      title: 'DAX Measures That Every Power BI Dashboard Actually Needs',
      desc: 'Stop copy-pasting DAX from forums. Learn the handful of measure patterns — running totals, YoY growth, ranking — that cover 90% of real dashboards.',
      category: 'powerbi',
      categoryLabel: 'Power BI',
      author: 'Ankit Verma',
      date: '2026-07-05',
      dateLabel: 'Jul 5, 2026',
      readTime: '11 min read',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=60',
      url: '/blog/dax-measures-power-bi-dashboards/'
    },
    {
      id: 'ml-overfitting',
      title: 'Overfitting Explained: Why Your Model Aces Training and Fails in Production',
      desc: 'A visual, math-light walkthrough of bias vs variance, with the exact regularization and validation tricks that fix it in scikit-learn.',
      category: 'ml',
      categoryLabel: 'Machine Learning',
      author: 'Ankit Verma',
      date: '2026-06-29',
      dateLabel: 'Jun 29, 2026',
      readTime: '10 min read',
      img: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=60',
      url: '/blog/overfitting-explained-bias-variance/'
    },
    {
      id: 'analytics-funnel',
      title: 'Building a Funnel Analysis From Raw Event Data (Step by Step)',
      desc: 'Turn a messy events table into a clean conversion funnel using SQL and a simple analytics framework product teams actually trust.',
      category: 'analytics',
      categoryLabel: 'Data Analytics',
      author: 'Ankit Verma',
      date: '2026-06-21',
      dateLabel: 'Jun 21, 2026',
      readTime: '8 min read',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=60',
      url: '/blog/funnel-analysis-from-event-data/'
    },
    {
      id: 'js-async-await',
      title: 'Async/Await in JavaScript: A Mental Model That Finally Clicks',
      desc: 'Forget the callback-hell horror stories. Here is the mental model that makes promises, async/await and error handling click for good.',
      category: 'javascript',
      categoryLabel: 'JavaScript',
      author: 'Ankit Verma',
      date: '2026-06-14',
      dateLabel: 'Jun 14, 2026',
      readTime: '6 min read',
      img: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&w=800&q=60',
      url: '/blog/async-await-mental-model/'
    },
    {
      id: 'css-grid-layouts',
      title: '5 CSS Grid Layouts Every Front-End Developer Should Know by Heart',
      desc: 'From holy-grail layouts to responsive card grids — five patterns, copy-paste ready, with zero media-query spaghetti.',
      category: 'htmlcss',
      categoryLabel: 'HTML/CSS',
      author: 'Ankit Verma',
      date: '2026-06-08',
      dateLabel: 'Jun 8, 2026',
      readTime: '5 min read',
      img: 'https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&w=800&q=60',
      url: '/blog/css-grid-layouts-developers-should-know/'
    },
    {
      id: 'sql-indexes',
      title: 'How Indexes Actually Speed Up SQL Queries (With EXPLAIN Plans)',
      desc: 'B-trees, seeks vs scans, and the exact moment an index stops helping — explained by reading real EXPLAIN output line by line.',
      category: 'sql',
      categoryLabel: 'SQL',
      author: 'Ankit Verma',
      date: '2026-06-02',
      dateLabel: 'Jun 2, 2026',
      readTime: '9 min read',
      img: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=60',
      url: '/blog/how-sql-indexes-speed-up-queries/'
    },
    {
      id: 'python-decorators',
      title: 'Python Decorators Demystified: Build Your Own in 10 Minutes',
      desc: 'Decorators stop being magic once you build three of your own — a timer, a cache and a retry decorator, from scratch.',
      category: 'python',
      categoryLabel: 'Python',
      author: 'Ankit Verma',
      date: '2026-05-27',
      dateLabel: 'May 27, 2026',
      readTime: '7 min read',
      img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=60',
      url: '/blog/python-decorators-demystified/'
    },
    {
      id: 'powerbi-vs-tableau',
      title: 'Power BI vs Tableau in 2026: Which One Should You Actually Learn?',
      desc: 'An honest comparison from someone who ships dashboards in both — pricing, learning curve, DAX vs calculated fields, and who wins where.',
      category: 'powerbi',
      categoryLabel: 'Power BI',
      author: 'Ankit Verma',
      date: '2026-05-20',
      dateLabel: 'May 20, 2026',
      readTime: '8 min read',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=60',
      url: '/blog/power-bi-vs-tableau-2026/'
    }----- */
  ];

  const grid = document.getElementById('postsGrid');
  const noResults = document.getElementById('noResults');

  /* ------------------------------------------------------------------
     2. RENDER GRID
  ------------------------------------------------------------------ */
  function cardTemplate(post){
    return `
      <article class="card" data-category="${post.category}" data-search="${(post.title + ' ' + post.desc + ' ' + post.categoryLabel).toLowerCase()}">
        <a href="${post.url}" class="card__media">
          <img src="${post.img}" alt="Cover image for the article: ${post.title}" loading="lazy" width="400" height="250">
          <span class="badge badge--category">${post.categoryLabel}</span>
        </a>
        <div class="card__body">
          <div class="post-meta">
            <time class="post-meta__date" datetime="${post.date}">${post.dateLabel}</time>
            <span class="post-meta__dot" aria-hidden="true">•</span>
            <span class="post-meta__read">${post.readTime}</span>
          </div>
          <h3 class="card__title"><a href="${post.url}">${post.title}</a></h3>
          <p class="card__desc">${post.desc}</p>
          <div class="card__footer">
            <span class="post-meta__author">By ${post.author}</span>
            <a href="${post.url}" class="card__readmore">Read More →</a>
          </div>
        </div>
      </article>`;
  }

  function renderPosts(list){
    if(!grid) return;
    grid.innerHTML = list.map(cardTemplate).join('');
    noResults.hidden = list.length !== 0;
    // (Re)observe newly injected cards for reveal animation
    grid.querySelectorAll('.card').forEach(card => {
      card.classList.add('reveal');
      revealObserver.observe(card);
    });
  }

  /* ------------------------------------------------------------------
     3. SEARCH + CATEGORY FILTER
  ------------------------------------------------------------------ */
  const searchInput = document.getElementById('searchInput');
  const searchClear = document.getElementById('searchClear');
  const categoryList = document.getElementById('categoryList');
  let activeCategory = 'all';

  function applyFilters(){
    const query = searchInput.value.trim().toLowerCase();
    searchClear.hidden = query.length === 0;

    const filtered = posts.filter(post => {
      const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
      const haystack = (post.title + ' ' + post.desc + ' ' + post.categoryLabel).toLowerCase();
      const matchesQuery = query === '' || haystack.includes(query);
      return matchesCategory && matchesQuery;
    });

    renderPosts(filtered);
  }

  if(searchInput){
    searchInput.addEventListener('input', debounce(applyFilters, 150));
  }
  if(searchClear){
    searchClear.addEventListener('click', () => {
      searchInput.value = '';
      searchClear.hidden = true;
      searchInput.focus();
      applyFilters();
    });
  }
  if(categoryList){
    categoryList.addEventListener('click', (e) => {
      const chip = e.target.closest('.category-chip');
      if(!chip) return;
      categoryList.querySelectorAll('.category-chip').forEach(c => {
        c.classList.remove('is-active');
        c.setAttribute('aria-selected', 'false');
      });
      chip.classList.add('is-active');
      chip.setAttribute('aria-selected', 'true');
      activeCategory = chip.dataset.category;
      applyFilters();
    });
  }

  function debounce(fn, delay){
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  }

  /* ------------------------------------------------------------------
     4. STICKY NAVBAR + MOBILE MENU
  ------------------------------------------------------------------ */
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const primaryNav = document.getElementById('primaryNav');

  window.addEventListener('scroll', debounce(() => {
    navbar.classList.toggle('is-scrolled', window.scrollY > 8);
    toggleBackToTop();
  }, 20), { passive: true });

  if(navToggle && primaryNav){
    navToggle.addEventListener('click', () => {
      const isOpen = primaryNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    primaryNav.querySelectorAll('.navbar__link').forEach(link => {
      link.addEventListener('click', () => {
        primaryNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ------------------------------------------------------------------
     5. BACK TO TOP
  ------------------------------------------------------------------ */
  const backToTop = document.getElementById('backToTop');
  function toggleBackToTop(){
    if(!backToTop) return;
    const show = window.scrollY > 480;
    backToTop.hidden = false;
    backToTop.classList.toggle('is-visible', show);
  }
  if(backToTop){
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ------------------------------------------------------------------
     6. SCROLL REVEAL ANIMATIONS
  ------------------------------------------------------------------ */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  /* ------------------------------------------------------------------
     7. HERO TERMINAL — TYPING EFFECT (signature element)
  ------------------------------------------------------------------ */
  const typedCodeEl = document.getElementById('typedCode');
  const codeSnippet =
`import pandas as pd

df = pd.read_csv("sales.csv")
top = (
    df.groupby("region")["revenue"]
      .sum()
      .sort_values(ascending=False)
)

print(top.head(3))
# -> North   1,204,300
#    West      998,120
#    South     874,050`;

  function typeCode(el, text, speed = 18){
    if(!el) return;
    let i = 0;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(prefersReduced){ el.textContent = text; return; }

    (function tick(){
      el.textContent = text.slice(0, i);
      i++;
      if(i <= text.length){
        setTimeout(tick, speed);
      }
    })();
  }

  const heroPanel = document.querySelector('.hero__panel');
  if(heroPanel && typedCodeEl){
    const startTyping = () => {
      typeCode(typedCodeEl, codeSnippet);
    };
    // Start once the hero panel is visible (and after its fade-in)
    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          setTimeout(startTyping, 400);
          heroObserver.disconnect();
        }
      });
    }, { threshold: 0.2 });
    heroObserver.observe(heroPanel);
  }

  /* ------------------------------------------------------------------
     8. NEWSLETTER — FRONTEND VALIDATION ONLY
  ------------------------------------------------------------------ */
  const newsletterForm = document.getElementById('newsletterForm');
  const newsletterEmail = document.getElementById('newsletterEmail');
  const newsletterMsg = document.getElementById('newsletterMsg');
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if(newsletterForm){
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const value = newsletterEmail.value.trim();

      if(value === '' || !EMAIL_RE.test(value)){
        newsletterEmail.classList.add('is-invalid');
        newsletterMsg.textContent = 'Please enter a valid email address.';
        newsletterMsg.className = 'newsletter__msg error';
        newsletterEmail.focus();
        return;
      }

      newsletterEmail.classList.remove('is-invalid');
      newsletterMsg.textContent = `Thanks! A confirmation link is on its way to ${value}.`;
      newsletterMsg.className = 'newsletter__msg success';
      newsletterForm.reset();
    });

    newsletterEmail.addEventListener('input', () => {
      newsletterEmail.classList.remove('is-invalid');
      newsletterMsg.textContent = '';
    });
  }

  /* ------------------------------------------------------------------
     9. FOOTER YEAR
  ------------------------------------------------------------------ */
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  /* ------------------------------------------------------------------
     10. INITIAL RENDER
  ------------------------------------------------------------------ */
  renderPosts(posts);
  toggleBackToTop();

})();

/* ==========================================================================
   ARTICLE PAGE ADD-ONS
   Appended for individual blog article pages (e.g. python-interview-questions.html).
   Runs in its own IIFE so it never touches the variables/scope above.
   Every selector is guarded, so on pages without these elements (like the
   blog homepage) this block simply does nothing — existing behaviour above
   this line is untouched.
   ========================================================================== */
(() => {
  'use strict';

  /* ---------- Reading progress bar ---------- */
  const progressBar = document.getElementById('readingProgressBar');
  function updateProgress(){
    if(!progressBar) return;
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = pct + '%';
  }
  if(progressBar){
    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  }

  /* ---------- TOC scrollspy ---------- */
  const tocLinks = document.querySelectorAll('.toc__list a');
  const qaSections = Array.from(document.querySelectorAll('.qa-section[id]'));
  if(tocLinks.length && qaSections.length){
    const spyObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const link = document.querySelector(`.toc__list a[href="#${entry.target.id}"]`);
        if(!link) return;
        if(entry.isIntersecting){
          tocLinks.forEach(l => l.classList.remove('is-active'));
          link.classList.add('is-active');
        }
      });
    }, { rootMargin: '-30% 0px -60% 0px', threshold: 0 });
    qaSections.forEach(sec => spyObserver.observe(sec));
  }

  /* ---------- Copy code buttons ---------- */
  document.querySelectorAll('.code-block__copy').forEach(btn => {
    btn.addEventListener('click', async () => {
      const codeEl = btn.closest('.code-block').querySelector('.code-block__code');
      if(!codeEl) return;
      try{
        await navigator.clipboard.writeText(codeEl.textContent);
        const original = btn.textContent;
        btn.textContent = 'Copied!';
        btn.classList.add('is-copied');
        setTimeout(() => { btn.textContent = original; btn.classList.remove('is-copied'); }, 1800);
      }catch(err){
        console.error('Copy failed', err);
      }
    });
  });

  /* ---------- Copy article link ---------- */
  const copyLinkBtn = document.getElementById('copyLinkBtn');
  if(copyLinkBtn){
    copyLinkBtn.addEventListener('click', async () => {
      try{
        await navigator.clipboard.writeText(window.location.href);
        copyLinkBtn.classList.add('is-copied');
        setTimeout(() => copyLinkBtn.classList.remove('is-copied'), 1800);
      }catch(err){
        console.error('Copy failed', err);
      }
    });
  }

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll('.faq-item__q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const answer = item.querySelector('.faq-item__a');
      const isOpen = btn.getAttribute('aria-expanded') === 'true';

      document.querySelectorAll('.faq-item__q').forEach(other => {
        if(other !== btn){
          other.setAttribute('aria-expanded', 'false');
          other.closest('.faq-item').querySelector('.faq-item__a').style.maxHeight = null;
        }
      });

      btn.setAttribute('aria-expanded', String(!isOpen));
      answer.style.maxHeight = isOpen ? null : answer.scrollHeight + 'px';
    });
  });

})();
/* ========================== END ARTICLE PAGE ADD-ONS ========================== */