// ----------------------------------------------------
// HEADER & NAVIGATION COMPONENT
// Top header bar & mobile bottom bar (Side drawer menu removed)
// ----------------------------------------------------

export function renderHeader(containerEl, onNavSelect, onSearchClick) {
  const headerHTML = `
    <header class="site-header" id="siteHeader">
      <!-- Left: Brand Logo -->
      <div class="logo-container">
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

      <!-- Right: User Profile -->
      <div class="header-right-actions">
        <button type="button" class="icon-circle-btn" id="profileBtn" aria-label="User Profile">
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" height="22" width="22">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          </svg>
        </button>
      </div>
    </header>

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
  const headerSearchBtn = document.getElementById('headerSearchBtn');
  const mobileSearchBtn = document.getElementById('mobileSearchBtn');
  const logoBtn = document.getElementById('logoBtn');

  headerSearchBtn?.addEventListener('click', onSearchClick);
  mobileSearchBtn?.addEventListener('click', onSearchClick);

  logoBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    onNavSelect('home');
  });

  // Handle Nav Tab Switching
  const allNavItems = document.querySelectorAll('.nav-tab-btn');
  allNavItems.forEach(item => {
    item.addEventListener('click', () => {
      const tab = item.getAttribute('data-tab');
      if (tab) {
        document.querySelectorAll('.nav-tab-btn').forEach(el => {
          el.classList.toggle('active', el.getAttribute('data-tab') === tab);
        });
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
