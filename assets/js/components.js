/* ── Shared Nav & Footer injection ─────────────────────────
   Each page sets window.ACTIVE_NAV before loading this script.
   ─────────────────────────────────────────────────────────── */

const LOGO_IMG = `<img src="spslogo.webp" class="nav-logo-img" alt="Steel Plant Specialities">`;

const NAV_ITEMS = [
  { label: 'Home',       href: 'index.html',      key: 'home' },
  { label: 'Products',   href: 'products.html',   key: 'products' },
  { label: 'Industries', href: 'industries.html', key: 'industries' },
  { label: 'Resources',  href: 'resources.html',  key: 'resources' },
  { label: 'About',      href: 'about.html',      key: 'about' },
  { label: 'Contact',    href: 'contact.html',    key: 'contact' },
];

function renderUtilityBar() {
  return `
  <div class="utility-bar">
    <div class="container">
      <div class="utility-left">
        <span><i class="fas fa-phone"></i><a href="tel:+919820493373">+91 98204 93373</a></span>
        <span><i class="fas fa-envelope"></i><a href="mailto:info@steelplantspecialities.com">info@steelplantspecialities.com</a></span>
        <span><i class="fab fa-whatsapp"></i><a href="#">WhatsApp</a></span>
      </div>
      <div class="utility-right">
        <a href="#"><i class="fab fa-linkedin-in"></i></a>
        <a href="#"><i class="fab fa-youtube"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
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
        <div class="nav-logo-text">
          <strong>Steel Plant Specialities</strong>
          <span>LLP &nbsp;·&nbsp; Est. 1985 &nbsp;·&nbsp; Mumbai</span>
        </div>
      </a>
      <div class="nav-links" id="nav-links">
        <div class="nav-panel-header">
          <span>Menu</span>
          <button class="nav-close-btn" id="nav-close-btn" aria-label="Close menu">
            <i class="fas fa-times"></i>
          </button>
        </div>
        ${links}
      </div>
      <div class="nav-overlay" id="nav-overlay"></div>
      <div class="nav-cta">
        <a href="contact.html" class="btn btn-primary btn-sm">
          <i class="fas fa-flask"></i> Request a Sample
        </a>
        <button class="nav-hamburger" id="nav-hamburger" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </nav>`;
}

function renderFooter() {
  return `
  <footer>
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="index.html" class="nav-logo">
            ${LOGO_IMG}
            <div class="nav-logo-text">
              <strong style="color:#fff">Steel Plant Specialities</strong>
              <span style="color:rgba(255,255,255,.35)">LLP · Est. 1985 · Mumbai</span>
            </div>
          </a>
          <p>Innovative protective coatings and lubricants for hot forging, hot rolling, and heat treatment industries. Engineered by IIT metallurgists. Trusted by market leaders worldwide.</p>
          <div class="footer-social">
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
            <a href="#"><i class="fab fa-youtube"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
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
            <li><a href="products.html">Anti-Scale Coatings</a></li>
            <li><a href="products.html">Refractory Coatings</a></li>
            <li><a href="products.html">Forging Die Lubricants</a></li>
            <li><a href="products.html">Anti-Nitriding Paste</a></li>
            <li><a href="products.html">EP Grease</a></li>
            <li><a href="products.html">Oil Cleaning Liquids</a></li>
            <li><a href="products.html">Die Spray Systems</a></li>
            <li><a href="products.html">Decarb Control Coatings</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Industries</h4>
          <ul>
            <li><a href="industries.html">Hot Forging</a></li>
            <li><a href="industries.html">Hot Rolling</a></li>
            <li><a href="industries.html">Heat Treatment</a></li>
            <li><a href="industries.html">Die Casting</a></li>
            <li><a href="industries.html">Titanium &amp; Super-Alloys</a></li>
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
          <div style="margin-top:20px">
            <a href="contact.html" class="btn btn-primary btn-sm" style="width:100%;justify-content:center">
              <i class="fas fa-flask"></i> Request a Sample
            </a>
          </div>
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
  const previewBanner = document.getElementById('preview-banner');
  if (previewBanner) {
    previewBanner.insertAdjacentHTML('afterend', renderUtilityBar() + renderNav(active));
  }
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
});
