/* ── Shared Nav & Footer injection ─────────────────────────
   Each page sets window.ACTIVE_NAV before loading this script.
   ─────────────────────────────────────────────────────────── */

const LOGO_IMG = `<img src="sps_logo.png" class="nav-logo-img" alt="Steel Plant Specialities">`;

const NAV_ITEMS = [
  { label: 'Home',       href: 'index.html',      key: 'home' },
  { label: 'Products',   href: 'products.html',   key: 'products' },
  { label: 'Industries', href: 'industries.html', key: 'industries' },
  { label: 'Technical Resources', href: 'resources.html', key: 'resources' },
  { label: 'About',      href: 'about.html',      key: 'about' },
  { label: 'Contact',    href: 'contact.html',    key: 'contact' },
];

function renderUtilityBar() {
  return `
  <div class="utility-bar">
    <div class="container">
      <div class="utility-right">
        <a href="https://www.linkedin.com/company/steel-plant-specialities" target="_blank" rel="noopener"><i class="fab fa-linkedin-in"></i></a>
        <a href="https://www.youtube.com/@srikarshenoy" target="_blank" rel="noopener"><i class="fab fa-youtube"></i></a>
        <span class="utility-sep"></span>
        <a href="tel:+919820493373" class="utility-contact"><i class="fas fa-phone"></i><span>+91 98204 93373</span></a>
        <a href="mailto:info@steelplantspecialities.com" class="utility-contact"><i class="fas fa-envelope"></i><span>info@steelplantspecialities.com</span></a>
        <a href="https://wa.me/919820493373" class="utility-contact"><i class="fab fa-whatsapp"></i><span>WhatsApp</span></a>
      </div>
    </div>
  </div>`;
}

function renderNav(activeKey) {
  const links = NAV_ITEMS.map(item =>
    `<a href="${item.href}" class="${item.key === activeKey ? 'active' : ''}">${item.label}</a>`
  ).join('');
  return `
  <nav class="navbar">
    <div class="container">
      <a href="index.html" class="nav-logo">
        ${LOGO_IMG}
        <img src="sps_title_grey.png" class="nav-title-img" alt="Steel Plant Specialities LLP">
      </a>
      <div class="nav-links" id="nav-links">
        <div class="nav-panel-header">
          <span>Menu</span>
          <button class="nav-close-btn" id="nav-close-btn" aria-label="Close menu">
            <i class="fas fa-times"></i>
          </button>
        </div>
        ${links}
        <div class="nav-panel-contact">
          <a href="tel:+919820493373"><i class="fas fa-phone"></i><span>+91 98204 93373</span></a>
          <a href="mailto:info@steelplantspecialities.com"><i class="fas fa-envelope"></i><span>info@steelplantspecialities.com</span></a>
          <a href="https://wa.me/919820493373"><i class="fab fa-whatsapp"></i><span>WhatsApp</span></a>
          <div class="nav-panel-social">
            <a href="https://www.linkedin.com/company/steel-plant-specialities" target="_blank" rel="noopener"><i class="fab fa-linkedin-in"></i></a>
            <a href="https://www.youtube.com/@srikarshenoy" target="_blank" rel="noopener"><i class="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
      <div class="nav-overlay" id="nav-overlay"></div>
      <div class="nav-cta">
        <button class="nav-search-btn" id="nav-search-btn" aria-label="Search">
          <svg class="search-icon-default" width="22" height="22" viewBox="0 -960 960 960" fill="currentColor"><path d="M796-121 533-384q-30 26-70 40.5T378-329q-108 0-183-75t-75-181q0-106 75-181t182-75q106 0 180.5 75T632-585q0 43-14 83t-42 75l264 262-44 44ZM377-389q81 0 138-57.5T572-585q0-81-57-138.5T377-781q-82 0-139.5 57.5T180-585q0 81 57.5 138.5T377-389Z"/></svg>
          <svg class="search-icon-active" width="22" height="22" viewBox="0 -960 960 960" fill="currentColor" style="display:none"><path d="M136-136q-56-56-56-134t56-134q56-56 134-56t134 56q56 56 56 134t-56 134q-56 56-134 56t-134-56Zm700 16L573-383q-14 11-31.5 21.5T508-344q-5-14-11-28.5T483-399q54-21 91.5-69.5T612-584q0-81-57-138.5T417-780q-82 0-139.5 57.5T220-584q0 17 3.5 35.5T232-517q-13 2-29 6.5T174-500q-7-18-10.5-40t-3.5-44q0-107 75-181.5T417-840q106 0 180.5 75T672-584q0 43-15 85t-41 73l264 262-44 44Zm-635-56 69-69 68 68 23-23-69-69 71-71-23-23-70 70-70-70-23 23 70 70-70 70 24 24Z"/></svg>
        </button>
        <button class="nav-hamburger" id="nav-hamburger" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </nav>
  <div class="search-strip" id="search-strip">
    <div class="search-strip-wrap">
      <div class="container" style="padding-top:16px;padding-bottom:16px">
        <div class="search-strip-inner">
          <i class="fas fa-search search-strip-icon"></i>
          <input type="text" id="search-input" placeholder="Search products, industries, articles..." autocomplete="off">
          <button class="search-clear-btn" id="search-clear-btn" aria-label="Clear search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        <div class="search-results" id="search-results"></div>
      </div>
    </div>
  </div>`;
}

function renderFooter() {
  return `
  <footer>
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="index.html" class="nav-logo">
            ${LOGO_IMG}
            <img src="sps_title_grey.png" class="nav-title-img" alt="Steel Plant Specialities LLP">
          </a>
          <p>Innovative protective coatings and lubricants for hot forging, hot rolling, and heat treatment industries. Engineered by IIT metallurgists. Trusted by market leaders worldwide.</p>
          <div class="footer-social">
            <a href="https://www.linkedin.com/company/steel-plant-specialities" target="_blank" rel="noopener"><i class="fab fa-linkedin-in"></i></a>
            <a href="https://www.youtube.com/@srikarshenoy" target="_blank" rel="noopener"><i class="fab fa-youtube"></i></a>
          </div>
          <div class="footer-newsletter">
            <h5>Product updates & technical articles</h5>
            <div class="newsletter-form">
              <input type="email" placeholder="your@email.com">
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        <div class="footer-col">
          <h4>Products</h4>
          <ul>
            <li><a href="products-anti-scale.html">Anti-Scale Coatings</a></li>
            <li><a href="products-refractory.html">Refractory Coatings</a></li>
            <li><a href="products-die-lubricants.html">Forging Die Lubricants</a></li>
            <li><a href="products-anti-nitriding.html">Anti-Nitriding Paste</a></li>
            <li><a href="products-ep-grease.html">EP Grease</a></li>
            <li><a href="products-oil-cleaning.html">Oil Cleaning Liquids</a></li>
            <li><a href="products-spray-systems.html">Die Spray Systems</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Industries</h4>
          <ul>
            <li><a href="industries.html#hot-rolling">Hot Rolling</a></li>
            <li><a href="industries.html#hot-forging">Hot Forging</a></li>
            <li><a href="industries.html#heat-treatment">Heat Treatment</a></li>
            <li><a href="industries.html#die-casting">Die Casting</a></li>
            <li><a href="industries.html#superalloys">Titanium &amp; Super-Alloys</a></li>
          </ul>
          <h4 style="margin-top:24px">Company</h4>
          <ul>
            <li><a href="about.html">About Us</a></li>
            <li><a href="resources.html">Technical Articles</a></li>
            <li><a href="contact.html">Contact Us</a></li>
            <li><a href="contact.html">Become a Distributor</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Contact</h4>
          <div class="footer-contact-item"><i class="fas fa-map-marker-alt"></i><span>211 Raikar Chambers, Govandi East, Mumbai — 400088, India</span></div>
          <div class="footer-contact-item"><i class="fas fa-phone"></i><a href="tel:+919820493373" style="color:rgba(255,255,255,.55)">+91 98204 93373</a></div>
          <div class="footer-contact-item"><i class="fas fa-phone"></i><a href="tel:+912267978060" style="color:rgba(255,255,255,.55)">+91-22-6797 8060</a></div>
          <div class="footer-contact-item"><i class="fas fa-envelope"></i><a href="mailto:info@steelplantspecialities.com" style="color:rgba(255,255,255,.55)">info@steelplantspecialities.com</a></div>
          <div class="footer-contact-item"><i class="fas fa-clock"></i><span>Mon–Fri: 7:00am – 6:00pm IST</span></div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 Steel Plant Specialities LLP. All rights reserved.</span>
        <div class="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </div>
  </footer>`;
}

// Inject on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  const active = window.ACTIVE_NAV || 'home';
  document.body.insertAdjacentHTML('afterbegin', renderUtilityBar() + renderNav(active));
  const footerMount = document.getElementById('footer-mount');
  if (footerMount) footerMount.outerHTML = renderFooter();

  // Hamburger / panel toggle
  const burger   = document.getElementById('nav-hamburger');
  const navLinks = document.getElementById('nav-links');
  const closeBtn = document.getElementById('nav-close-btn');
  const overlay  = document.getElementById('nav-overlay');

  function openNav() {
    burger.classList.add('open');
    navLinks.classList.add('open');
    if (overlay) overlay.classList.add('open');
  }
  function closeNav() {
    burger.classList.remove('open');
    navLinks.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
  }

  if (burger && navLinks) {
    burger.addEventListener('click', () =>
      navLinks.classList.contains('open') ? closeNav() : openNav()
    );
    if (closeBtn) closeBtn.addEventListener('click', closeNav);
    if (overlay)  overlay.addEventListener('click', closeNav);
    navLinks.querySelectorAll('a').forEach(link =>
      link.addEventListener('click', closeNav)
    );
  }

  // ── Search ──────────────────────────────────────────────
  const searchBtn     = document.getElementById('nav-search-btn');
  const searchStrip   = document.getElementById('search-strip');
  const searchInput   = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  if (!searchBtn || !searchStrip) return;

  var fuse = null;
  var searchClearBtn = document.getElementById('search-clear-btn');
  var iconDefault = searchBtn.querySelector('.search-icon-default');
  var iconActive  = searchBtn.querySelector('.search-icon-active');

  function toggleSearch() {
    var isOpen = searchStrip.classList.toggle('open');
    iconDefault.style.display = isOpen ? 'none' : '';
    iconActive.style.display  = isOpen ? '' : 'none';
    if (isOpen) {
      setTimeout(function() { searchInput.focus(); }, 100);
      loadFuse();
    } else {
      searchInput.value = '';
      searchResults.innerHTML = '';
      if (searchClearBtn) searchClearBtn.style.visibility = 'hidden';
    }
  }

  function updateClearBtn() {
    if (searchClearBtn) searchClearBtn.style.visibility = searchInput.value.length ? 'visible' : 'hidden';
  }

  searchBtn.addEventListener('click', toggleSearch);
  if (searchClearBtn) searchClearBtn.addEventListener('click', function() {
    searchInput.value = '';
    searchResults.innerHTML = '';
    searchClearBtn.style.visibility = 'hidden';
    searchInput.focus();
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && searchStrip.classList.contains('open')) {
      toggleSearch();
    }
  });

  var fuseLoading = false;
  function loadFuse() {
    if (fuse || fuseLoading) return;
    fuseLoading = true;
    if (typeof Fuse === 'function') {
      initFuse();
      return;
    }
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/fuse.js@7.0.0/dist/fuse.min.js';
    script.onload = function() { initFuse(); };
    script.onerror = function() { fuseLoading = false; };
    document.head.appendChild(script);
  }

  function initFuse() {
    fetch('assets/js/search-index.json')
      .then(function(r) { return r.json(); })
      .then(function(data) {
        fuse = new Fuse(data, {
          keys: [
            { name: 'title', weight: 0.4 },
            { name: 'keywords', weight: 0.35 },
            { name: 'desc', weight: 0.25 }
          ],
          threshold: 0.35,
          includeScore: true,
          minMatchCharLength: 2
        });
        var q = searchInput.value.trim();
        if (q.length >= 2) doSearch(q);
      })
      .catch(function() { fuseLoading = false; });
  }

  var debounceTimer;
  searchInput.addEventListener('input', function() {
    clearTimeout(debounceTimer);
    updateClearBtn();
    var q = this.value.trim();
    if (q.length < 2) { searchResults.innerHTML = ''; return; }
    debounceTimer = setTimeout(function() { doSearch(q); }, 150);
  });

  function doSearch(q) {
    if (!fuse) return;
    var results = fuse.search(q, { limit: 8 });
    if (!results.length) {
      searchResults.innerHTML = '<div class="search-no-results">No results found</div>';
      return;
    }
    searchResults.innerHTML = results.map(function(r) {
      var item = r.item;
      return '<a href="' + item.url + '" class="search-result-item">' +
        '<span class="search-result-type">' + item.type + '</span>' +
        '<span class="search-result-title">' + item.title + '</span>' +
        '<span class="search-result-desc">' + item.desc + '</span>' +
      '</a>';
    }).join('');
  }

  document.addEventListener('click', function(e) {
    if (searchStrip.classList.contains('open') &&
        !searchStrip.contains(e.target) &&
        !searchBtn.contains(e.target)) {
      toggleSearch();
    }
  });
});
