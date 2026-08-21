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
            <span>N</span>
            <div class="logo-pulse-ring"></div>
          </div>
          <span class="neon-text-logo">NEON<span class="neon-text-accent">FLIX</span></span>
        </a>
      </div>

      <!-- Center: Instant Live Search Input Bar & Floating Dropdown -->
      <div class="header-search-bar" id="headerSearchContainer">
        <div class="header-search-input-wrapper">
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" height="18" width="18" style="color:var(--color-neon-red); flex-shrink:0;">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
          </svg>
          <input type="text" class="header-search-input" id="globalSearchInput" placeholder="Search movies, TV shows, anime..." autocomplete="off" />
          <button type="button" class="search-clear-btn" id="searchClearBtn" style="display:none;" aria-label="Clear search">&times;</button>
        </div>

        <!-- Floating Live Search Results Dropdown -->
        <div class="search-dropdown-menu" id="searchDropdownMenu">
          <div class="search-dropdown-scroll" id="searchDropdownResults"></div>
        </div>
      </div>

      <!-- Right: Watchlist Shortcut & Profile -->
      <div class="header-right-actions">
        <button type="button" class="icon-circle-btn" id="headerWatchlistBtn" title="My Watchlist" aria-label="Watchlist">
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" height="20" width="20">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
          </svg>
        </button>
        <button type="button" class="icon-circle-btn profile-btn" id="profileBtn" aria-label="User Profile">
          <div class="profile-avatar">H</div>
        </button>
      </div>
    </header>

    <!-- Mobile Floating Bottom Navigation Bar -->
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
        <button type="button" class="nav-tab-btn" data-tab="anime" aria-label="Anime">
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" height="20" width="20">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
          </svg>
          <span>Anime</span>
        </button>
        <button type="button" class="nav-tab-btn" data-tab="watchlist" aria-label="Watchlist">
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" height="20" width="20">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
          </svg>
          <span>Saved</span>
        </button>
        <button type="button" class="nav-tab-btn" id="mobileSearchBtn" aria-label="Search">
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" height="20" width="20">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
          </svg>
          <span>Search</span>
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

    // Bind item click
    dropdownResults.querySelectorAll('.search-result-item').forEach(el => {
      el.addEventListener('click', () => {
        const id = el.getAttribute('data-id');
        const item = results.find(r => r.id == id) || getAllMedia().find(i => i.id == id);
        if (item) {
          closeDropdown();
          searchInput.value = '';
          searchClearBtn.style.display = 'none';
          onItemClick(item);
        }
      });
    });
  }

  async function handleSearchInput() {
    const query = searchInput.value.trim();
    if (!query) {
      searchClearBtn.style.display = 'none';
      closeDropdown();
      return;
    }

    searchClearBtn.style.display = 'block';

    if (debounceTimer) clearTimeout(debounceTimer);
    debounceTimer = setTimeout(async () => {
      const results = await fetchLiveSearch(query);
      renderDropdownItems(results);
    }, 200);
  }

  searchInput?.addEventListener('input', handleSearchInput);
  searchInput?.addEventListener('focus', () => {
    if (searchInput.value.trim().length > 0) {
      handleSearchInput();
    }
  });

  searchClearBtn?.addEventListener('click', () => {
    searchInput.value = '';
    searchClearBtn.style.display = 'none';
    closeDropdown();
    searchInput.focus();
  });

  // Mobile search button handler
  mobileSearchBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      searchInput?.focus();
    }, 300);
  });

  // Click outside to close dropdown
  document.addEventListener('click', (e) => {
    if (searchContainer && !searchContainer.contains(e.target)) {
      closeDropdown();
    }
  });

  // Keyboard Escape to close
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDropdown();
    }
  });

  // Navigation handlers
  logoBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    setActiveTab('home');
    onNavSelect('home');
  });

  headerWatchlistBtn?.addEventListener('click', () => {
    setActiveTab('watchlist');
    onNavSelect('watchlist');
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
