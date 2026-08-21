// ----------------------------------------------------
// HEADER & NAVIGATION COMPONENT
// Top header bar with live instant search dropdown & mobile bottom nav bar
// ----------------------------------------------------

import { fetchLiveSearch, getAllMedia } from '../api.js';

export function renderHeader(containerEl, onNavSelect, onItemClick) {
  const headerHTML = `
    <header class="site-header" id="siteHeader">
      <!-- Left: Brand Logo -->
      <div class="logo-container">
        <a href="#" class="neonflix-logo" id="logoBtn">
          <div class="logo-icon neon-glow-box">
            <span>M</span>
            <div class="logo-pulse-ring"></div>
          </div>
          <span class="neon-text-logo">MOVIE<span class="neon-text-accent"> HUB</span></span>
        </a>
      </div>

      <!-- Right: Expanding Search Glass Icon & Profile Dropdown -->
      <div class="header-right-actions">
        <!-- Expanding Search Box (Pill expands to the LEFT from glass icon) -->
        <div class="searchBox" id="headerSearchContainer">
          <input type="text" class="searchInput" id="globalSearchInput" placeholder="Search movies, TV shows, anime..." autocomplete="off" spellcheck="false" />
          <button type="button" class="searchButton" id="headerSearchToggleBtn" aria-label="Search" title="Search">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" height="20" width="20">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
            </svg>
          </button>

          <!-- Floating Live Search Results Dropdown -->
          <div class="search-dropdown-menu" id="searchDropdownMenu">
            <div class="search-dropdown-scroll" id="searchDropdownResults"></div>
          </div>
        </div>

        <!-- Profile Dropdown Wrapper -->
        <div class="profile-dropdown-wrapper" id="profileDropdownWrapper">
          <button type="button" class="icon-circle-btn profile-btn" id="profileBtn" aria-label="User Profile" title="Profile & Menu">
            <div class="profile-avatar">H</div>
          </button>

          <!-- Profile Dropdown Menu -->
          <div class="profile-dropdown-menu" id="profileDropdownMenu">
            <div class="profile-menu-header">
              <div class="profile-avatar-large">H</div>
              <div class="profile-user-info">
                <span class="profile-user-name">Hadi Awan</span>
              </div>
            </div>
            <div class="profile-menu-divider"></div>
            <div class="profile-menu-items">
              <button type="button" class="profile-menu-item" id="profileWatchlistBtn">
                <div class="menu-item-icon">
                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" height="18" width="18">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                  </svg>
                </div>
                <div class="menu-item-content">
                  <span class="menu-item-title">My Watchlist</span>
                  <span class="menu-item-sub">Saved movies & series</span>
                </div>
              </button>

              <button type="button" class="profile-menu-item" id="profileSettingsBtn">
                <div class="menu-item-icon">
                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" height="18" width="18">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div class="menu-item-content">
                  <span class="menu-item-title">Settings</span>
                  <span class="menu-item-sub">Performance & preferences</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Mobile Floating Bottom Navigation Bar (4 Essential Clean Tabs) -->
    <div class="mobile-bottom-bar">
      <div class="bottom-nav-container">
        <button type="button" class="nav-tab-btn active" data-tab="home" aria-label="Home">
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" height="20" width="20">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
          </svg>
          <span>Home</span>
        </button>
        <button type="button" class="nav-tab-btn" data-tab="movie" aria-label="Movies">
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" height="20" width="20">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"></path>
          </svg>
          <span>Movies</span>
        </button>
        <button type="button" class="nav-tab-btn" data-tab="tv" aria-label="TV">
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" height="20" width="20">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
          <span>TV</span>
        </button>
        <button type="button" class="nav-tab-btn" data-tab="watchlist" aria-label="Watchlist">
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" height="20" width="20">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
          </svg>
          <span>Saved</span>
        </button>
      </div>
    </div>
  `;

  containerEl.innerHTML = headerHTML;

  const searchInput = document.getElementById('globalSearchInput');
  const searchClearBtn = document.getElementById('searchClearBtn');
  const dropdownMenu = document.getElementById('searchDropdownMenu');
  const dropdownResults = document.getElementById('searchDropdownResults');
  const mobileSearchBtn = document.getElementById('mobileSearchBtn');
  const headerWatchlistBtn = document.getElementById('headerWatchlistBtn');
  const logoBtn = document.getElementById('logoBtn');
  const searchContainer = document.getElementById('headerSearchContainer');

  let debounceTimer = null;

  function closeDropdown() {
    dropdownMenu?.classList.remove('active');
  }

  function renderDropdownItems(results) {
    if (!results || results.length === 0) {
      dropdownResults.innerHTML = `
        <div class="search-no-results">
          <p>No results found for "${searchInput.value.trim()}"</p>
        </div>
      `;
      dropdownMenu.classList.add('active');
      return;
    }

    const html = results.map(item => `
      <div class="search-result-item" data-id="${item.id}">
        <img class="search-result-poster" src="${item.poster}" alt="${item.title}" loading="lazy" />
        <div class="search-result-info">
          <span class="search-result-title">${item.title}</span>
          <div class="search-result-meta">
            <span class="badge-type">${item.type}</span>
            <span>${item.year}</span>
            <span class="rating">★ ${item.rating}</span>
          </div>
        </div>
      </div>
    `).join('');

    dropdownResults.innerHTML = html;
    dropdownMenu.classList.add('active');

    // Bind item selection with touch & pointer support for Android WebView & Mobile browsers
    dropdownResults.querySelectorAll('.search-result-item').forEach(el => {
      const handleSelect = (e) => {
        e.preventDefault();
        const id = el.getAttribute('data-id');
        const item = results.find(r => r.id == id) || getAllMedia().find(i => i.id == id);
        if (item) {
          closeDropdown();
          if (searchInput) {
            searchInput.value = '';
            searchInput.blur();
          }
          if (searchClearBtn) searchClearBtn.style.display = 'none';
          searchContainer?.classList.remove('mobile-visible');
          onItemClick(item);
        }
      };

      el.addEventListener('pointerdown', handleSelect);
      el.addEventListener('click', handleSelect);
    });
  }

  const siteHeader = document.getElementById('siteHeader');

  function expandSearch() {
    siteHeader?.classList.add('search-active');
    searchContainer?.classList.add('active');
  }

  function collapseSearch() {
    if (!searchInput?.value.trim() && document.activeElement !== searchInput) {
      siteHeader?.classList.remove('search-active');
      searchContainer?.classList.remove('active');
    }
  }

  async function handleSearchInput() {
    const query = searchInput.value.trim();
    if (!query) {
      const topItems = getAllMedia().slice(0, 5);
      renderDropdownItems(topItems);
      return;
    }

    if (debounceTimer) clearTimeout(debounceTimer);
    debounceTimer = setTimeout(async () => {
      const results = await fetchLiveSearch(query);
      renderDropdownItems(results);
    }, 200);
  }

  searchInput?.addEventListener('input', handleSearchInput);
  searchInput?.addEventListener('focus', () => {
    expandSearch();
    handleSearchInput();
  });

  searchInput?.addEventListener('blur', () => {
    setTimeout(() => {
      collapseSearch();
    }, 220);
  });

  searchContainer?.addEventListener('mouseenter', () => {
    expandSearch();
  });

  searchContainer?.addEventListener('mouseleave', () => {
    setTimeout(() => {
      collapseSearch();
    }, 220);
  });

  const headerSearchToggleBtn = document.getElementById('headerSearchToggleBtn');
  headerSearchToggleBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    expandSearch();
    setTimeout(() => searchInput?.focus(), 50);
    if (searchInput && searchInput.value.trim().length > 0) {
      handleSearchInput();
    }
  });

  const profileDropdownMenu = document.getElementById('profileDropdownMenu');
  const profileDropdownWrapper = document.getElementById('profileDropdownWrapper');
  const profileWatchlistBtn = document.getElementById('profileWatchlistBtn');
  const profileSettingsBtn = document.getElementById('profileSettingsBtn');

  function toggleProfileMenu() {
    profileDropdownMenu?.classList.toggle('active');
  }

  function closeProfileMenu() {
    profileDropdownMenu?.classList.remove('active');
  }

  // Click outside to close dropdowns
  document.addEventListener('click', (e) => {
    if (searchContainer && !searchContainer.contains(e.target)) {
      closeDropdown();
      collapseSearch();
    }
    if (profileDropdownWrapper && !profileDropdownWrapper.contains(e.target)) {
      closeProfileMenu();
    }
  });

  // Keyboard Escape to close
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDropdown();
      closeProfileMenu();
    }
  });

  // Navigation handlers
  logoBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    setActiveTab('home');
    onNavSelect('home');
  });

  const profileBtn = document.getElementById('profileBtn');

  profileBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleProfileMenu();
  });

  profileWatchlistBtn?.addEventListener('click', () => {
    closeProfileMenu();
    setActiveTab('watchlist');
    onNavSelect('watchlist');
  });

  profileSettingsBtn?.addEventListener('click', () => {
    closeProfileMenu();
    if (typeof window.openSettingsModal === 'function') {
      window.openSettingsModal();
    }
  });

  function setActiveTab(tab) {
    document.querySelectorAll('.nav-tab-btn').forEach(el => {
      el.classList.toggle('active', el.getAttribute('data-tab') === tab);
    });
  }

  document.querySelectorAll('.nav-tab-btn[data-tab]').forEach(item => {
    item.addEventListener('click', () => {
      const tab = item.getAttribute('data-tab');
      if (tab) {
        setActiveTab(tab);
        onNavSelect(tab);
      }
    });
  });

  // Scroll Header backdrop
  window.addEventListener('scroll', () => {
    const siteHeader = document.getElementById('siteHeader');
    if (window.scrollY > 30) {
      siteHeader?.classList.add('scrolled');
    } else {
      siteHeader?.classList.remove('scrolled');
    }
  });
}
