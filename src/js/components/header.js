// ----------------------------------------------------
// HEADER & NAVIGATION DRAWER COMPONENT
// Top bar, side drawer menu, and mobile bottom bar
// ----------------------------------------------------

export function renderHeader(containerEl, onNavSelect, onSearchClick) {
  const headerHTML = `
    <header class="site-header" id="siteHeader">
      <!-- Left: Drawer Toggle & Brand Logo -->
      <div class="logo-container">
        <button type="button" class="menu-toggle-btn" id="openDrawerBtn" aria-label="Open Navigation Menu">
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" height="22" width="22">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        <a href="#" class="neonflix-logo" id="logoBtn">
          <div class="logo-icon">N</div>
          <span class="gradient-text">Neonflix</span>
        </a>
      </div>

      <!-- Center: Search Trigger Input Bar -->
      <div class="header-search-bar">
        <button type="button" class="search-trigger-btn" id="headerSearchBtn">
          <span>Search movies, shows, anime…</span>
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" height="18" width="18">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
          </svg>
        </button>
      </div>

      <!-- Right: User Profile (No Download link!) -->
      <div class="header-right-actions">
        <button type="button" class="icon-circle-btn" id="profileBtn" aria-label="User Profile">
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" height="22" width="22">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          </svg>
        </button>
      </div>
    </header>

    <!-- Side Navigation Drawer -->
    <div class="drawer-overlay" id="drawerOverlay"></div>
    <div class="side-drawer" id="sideDrawer">
      <div class="drawer-header">
        <div class="neonflix-logo">
          <div class="logo-icon">N</div>
          <span class="gradient-text">Neonflix</span>
        </div>
        <button type="button" class="icon-circle-btn" id="closeDrawerBtn" aria-label="Close menu">
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" height="20" width="20">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <ul class="drawer-nav-list">
        <li class="drawer-nav-item active" data-tab="home">
          <button type="button">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" height="20" width="20">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg>
            <span>Home</span>
          </button>
        </li>
        <li class="drawer-nav-item" data-tab="movie">
          <button type="button">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" height="20" width="20">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"></path>
            </svg>
            <span>Movies</span>
          </button>
        </li>
        <li class="drawer-nav-item" data-tab="tv">
          <button type="button">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" height="20" width="20">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            <span>TV Shows</span>
          </button>
        </li>
        <li class="drawer-nav-item" data-tab="anime">
          <button type="button">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" height="20" width="20">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
            </svg>
            <span>Anime</span>
          </button>
        </li>
        <li class="drawer-nav-item" data-tab="watchlist">
          <button type="button">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" height="20" width="20">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
            </svg>
            <span>My Watchlist</span>
          </button>
        </li>
      </ul>
    </div>

    <!-- Mobile Floating Bottom Navigation Bar -->
    <div class="mobile-bottom-bar">
      <div class="bottom-nav-container">
        <button type="button" class="nav-tab-btn active" data-tab="home" aria-label="Home">
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" height="22" width="22">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
          </svg>
        </button>
        <button type="button" class="nav-tab-btn" data-tab="movie" aria-label="Movies">
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" height="22" width="22">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"></path>
          </svg>
        </button>
        <button type="button" class="nav-tab-btn" data-tab="tv" aria-label="TV">
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" height="22" width="22">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
        </button>
        <button type="button" class="nav-tab-btn" data-tab="anime" aria-label="Anime">
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" height="22" width="22">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
          </svg>
        </button>
        <button type="button" class="nav-tab-btn" id="mobileSearchBtn" aria-label="Search">
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" height="22" width="22">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
          </svg>
        </button>
      </div>
    </div>
  `;

  containerEl.innerHTML = headerHTML;

  // Bind Header Event Listeners
  const openDrawerBtn = document.getElementById('openDrawerBtn');
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');
  const sideDrawer = document.getElementById('sideDrawer');
  const drawerOverlay = document.getElementById('drawerOverlay');
  const headerSearchBtn = document.getElementById('headerSearchBtn');
  const mobileSearchBtn = document.getElementById('mobileSearchBtn');
  const logoBtn = document.getElementById('logoBtn');

  function openDrawer() {
    sideDrawer.classList.add('active');
    drawerOverlay.classList.add('active');
  }

  function closeDrawer() {
    sideDrawer.classList.remove('active');
    drawerOverlay.classList.remove('active');
  }

  openDrawerBtn.addEventListener('click', openDrawer);
  closeDrawerBtn.addEventListener('click', closeDrawer);
  drawerOverlay.addEventListener('click', closeDrawer);

  headerSearchBtn?.addEventListener('click', onSearchClick);
  mobileSearchBtn?.addEventListener('click', onSearchClick);

  logoBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    onNavSelect('home');
  });

  // Handle Nav Tab Switching (Side Drawer & Mobile Bottom Bar)
  const allNavItems = document.querySelectorAll('.drawer-nav-item, .nav-tab-btn');
  allNavItems.forEach(item => {
    item.addEventListener('click', () => {
      const tab = item.getAttribute('data-tab');
      if (tab) {
        // Update active class
        document.querySelectorAll('.drawer-nav-item').forEach(el => {
          el.classList.toggle('active', el.getAttribute('data-tab') === tab);
        });
        document.querySelectorAll('.nav-tab-btn').forEach(el => {
          el.classList.toggle('active', el.getAttribute('data-tab') === tab);
        });

        closeDrawer();
        onNavSelect(tab);
      }
    });
  });

  // Scroll Header backdrop effect
  window.addEventListener('scroll', () => {
    const siteHeader = document.getElementById('siteHeader');
    if (window.scrollY > 40) {
      siteHeader?.classList.add('scrolled');
    } else {
      siteHeader?.classList.remove('scrolled');
    }
  });
}
