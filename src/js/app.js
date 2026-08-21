// ----------------------------------------------------
// MAIN APPLICATION ORCHESTRATOR
// State management, routing tabs, modal triggers
// ----------------------------------------------------

import { renderHeader } from './components/header.js';
import { renderHeroSlider } from './components/hero.js';
import { renderGenreFilterBar, renderMediaGridSection, renderMediaCarouselSection, renderMediaCard } from './components/movieGrid.js';
import { renderPlayerModal } from './components/playerModal.js';
import { renderSearchModal } from './components/searchModal.js';
import { renderWatchlistView, toggleWatchlist, isInWatchlist } from './components/watchlist.js';
import { initSettingsModal } from './components/settingsModal.js';
import {
  FEATURED_DATASET,
  getMoviesList,
  getTvShowsList,
  getAnimeList,
  getKoreanList,
  getAllMedia,
  filterMedia,
  getApiKey,
  setApiKey,
  fetchLiveTrendingMovies,
  fetchLivePopularTv,
  fetchLiveAnime,
  fetchLiveKoreanMedia,
  fetchLiveSearch,
  fetchLiveGenreMedia,
  fetchTvDetails
} from './api.js';

let currentTab = 'home';
let activeGenre = 'all';
let activeSeeAllSection = null; // 'movie' | 'tv' | 'anime' | 'korean'
let verticalPages = { movie: 1, tv: 1, anime: 1, korean: 1 };
let loadingVertical = false;

const GENRES_LIST = ['Action', 'Sci-Fi', 'Drama', 'Adventure', 'Anime', 'Korean', 'Comedy', 'Horror', 'Fantasy', 'Crime'];

async function openPlayerForItem(item) {
  const playerContainer = document.getElementById('playerModalContainer');
  const isSaved = isInWatchlist(item.id);

  // If TV series or anime, load complete real seasons & episodes from TMDB before opening
  if ((item.type === 'tv' || item.type === 'anime') && item.id < 1000000) {
    const needsFetch = !item.seasons || item.seasons.length === 0 ||
      (item.seasons.length === 1 && item.seasons[0].episodes.length === 12 && item.seasons[0].season === 1);
    if (needsFetch) {
      // Show loading toast while fetching from TMDB API
      const loadingToast = document.createElement('div');
      loadingToast.className = 'toast-message toast-info show';
      loadingToast.innerHTML = `
        <div class="toast-content">
          <div style="border: 2px solid rgba(255,255,255,0.1); border-top-color: var(--color-neon-cyan); border-radius: 50%; width: 14px; height: 14px; animation: spin 0.8s linear infinite;"></div>
          <span>Loading seasons data from TMDB...</span>
        </div>
      `;
      let toastContainer = document.getElementById('toastContainer');
      if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.id = 'toastContainer';
        toastContainer.className = 'toast-container';
        document.body.appendChild(toastContainer);
      }
      toastContainer.appendChild(loadingToast);

      const details = await fetchTvDetails(item.id);
      loadingToast.remove();

      if (details) {
        item.seasons = details.seasons;
        if (details.overview) item.overview = details.overview;
        if (details.genres && details.genres.length > 0) item.genres = details.genres;
      }
    }
  }

  renderPlayerModal(playerContainer, item, (toggledItem) => {
    toggleWatchlist(toggledItem);
    // If currently on watchlist tab, refresh watchlist view
    if (currentTab === 'watchlist') {
      renderWatchlistView(document.getElementById('mainContent'), openPlayerForItem);
    }
  }, isSaved);
}

function openSearchModal() {
  const searchContainer = document.getElementById('searchModalContainer');
  renderSearchModal(searchContainer, openPlayerForItem);
}

function renderMainView() {
  const mainContent = document.getElementById('mainContent');
  mainContent.innerHTML = '';

  if (currentTab === 'watchlist') {
    renderWatchlistView(mainContent, openPlayerForItem);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  // Handle dedicated "See All" section view
  if (activeSeeAllSection) {
    const sectionInfoMap = {
      movie: { title: '🔥 All Trending Movies', loadFn: fetchLiveTrendingMovies, getItems: getMoviesList, type: 'movie' },
      tv: { title: '📺 All Popular TV Series', loadFn: fetchLivePopularTv, getItems: getTvShowsList, type: 'tv' },
      anime: { title: '⚡ All Latest Anime Releases', loadFn: fetchLiveAnime, getItems: getAnimeList, type: 'anime' },
      korean: { title: 'All Popular Korean Dramas', loadFn: fetchLiveKoreanMedia, getItems: getKoreanList, type: 'korean' }
    };

    const sec = sectionInfoMap[activeSeeAllSection];
    const initialItems = sec ? sec.getItems() : [];

    const headerWrapper = document.createElement('div');
    headerWrapper.style = "max-width:1400px; margin: 1.5rem auto 0.5rem auto; padding: 0 1.5rem; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:1rem;";
    headerWrapper.innerHTML = `
      <div style="display:flex; align-items:center; gap: 1rem;">
        <button type="button" id="backToHomeBtn" class="btn-secondary-info" style="height: 40px; padding: 0 1rem; font-size: 0.85rem;">
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" height="18" width="18">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          <span>Back to Home</span>
        </button>
        <h1 style="font-size: 1.6rem; font-weight: 800;">${sec ? sec.title : 'All Results'}</h1>
      </div>
    `;
    mainContent.appendChild(headerWrapper);

    headerWrapper.querySelector('#backToHomeBtn')?.addEventListener('click', () => {
      activeSeeAllSection = null;
      renderMainView();
    });

    renderMediaGridSection(mainContent, '', initialItems, openPlayerForItem);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  // Render Hero Section
  const heroWrapper = document.createElement('div');
  heroWrapper.id = 'heroWrapper';
  mainContent.appendChild(heroWrapper);

  let featuredItems = FEATURED_DATASET;
  if (currentTab === 'movie') {
    featuredItems = getMoviesList();
  } else if (currentTab === 'tv') {
    featuredItems = getTvShowsList();
  } else if (currentTab === 'anime') {
    featuredItems = getAnimeList();
  } else {
    featuredItems = getMoviesList().length > 0 ? getMoviesList() : FEATURED_DATASET;
  }
  renderHeroSlider(heroWrapper, featuredItems, openPlayerForItem, openPlayerForItem);

  // Render Genre Filter Bar
  const genreWrapper = document.createElement('div');
  genreWrapper.id = 'genreWrapper';
  mainContent.appendChild(genreWrapper);

  renderGenreFilterBar(genreWrapper, GENRES_LIST, activeGenre, (selectedGenre) => {
    activeGenre = selectedGenre;

    // Reset page count for this specific genre filter
    const pageKey = `${currentTab}_${selectedGenre}`;
    verticalPages[pageKey] = 1;

    if (selectedGenre !== 'all' && getApiKey()) {
      renderMainView(); // Draw structural grid container first

      const gridSection = document.querySelector('.media-grid');
      if (gridSection) {
        gridSection.innerHTML = `<div style="display:flex; justify-content:center; align-items:center; min-height:30vh; width:100%; grid-column: 1/-1;"><div style="border: 3px solid rgba(255,255,255,0.1); border-top-color: var(--color-neon-cyan); border-radius: 50%; width: 32px; height: 32px; animation: spin 0.8s linear infinite;"></div></div>`;
      }

      fetchLiveGenreMedia(currentTab === 'home' ? 'all' : currentTab, selectedGenre, 1).then(genreItems => {
        if (gridSection) {
          if (genreItems && genreItems.length > 0) {
            gridSection.innerHTML = genreItems.map(item => renderMediaCard(item)).join('');

            // Bind click handler for newly appended grid items
            gridSection.querySelectorAll('.poster-card').forEach(card => {
              card.addEventListener('click', () => {
                const id = card.getAttribute('data-id');
                const allItems = getAllMedia();
                const item = genreItems.find(i => i.id == id) || allItems.find(i => i.id == id);
                if (item) openPlayerForItem(item);
              });
            });
          } else {
            gridSection.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding: 3rem; color:var(--text-muted);">No items found for this category.</div>`;
          }
        }
      });
    } else {
      renderMainView();
    }
  });

  // Render Media Horizontal Swipe Carousel Sections
  const filteredItems = filterMedia(currentTab === 'home' ? 'all' : currentTab, activeGenre);

  if (activeGenre === 'all' && !activeSeeAllSection) {
    if (currentTab === 'home') {
      renderMediaCarouselSection(mainContent, '🔥 Trending Movies', getMoviesList().slice(0, 15), 'movie', fetchLiveTrendingMovies, openPlayerForItem, () => {
        activeSeeAllSection = 'movie';
        renderMainView();
      });
      renderMediaCarouselSection(mainContent, '📺 Popular TV Series', getTvShowsList().slice(0, 15), 'tv', fetchLivePopularTv, openPlayerForItem, () => {
        activeSeeAllSection = 'tv';
        renderMainView();
      });
      renderMediaCarouselSection(mainContent, '⚡ Latest Anime Releases', getAnimeList().slice(0, 15), 'anime', fetchLiveAnime, openPlayerForItem, () => {
        activeSeeAllSection = 'anime';
        renderMainView();
      });
      renderMediaCarouselSection(mainContent, '🍿 Popular Korean Dramas', getKoreanList().slice(0, 15), 'korean', fetchLiveKoreanMedia, openPlayerForItem, () => {
        activeSeeAllSection = 'korean';
        renderMainView();
      });
    } else if (currentTab === 'movie') {
      const movies = getMoviesList();
      renderMediaCarouselSection(mainContent, '🔥 Trending Blockbusters', movies.slice(0, 15), 'movie-trending', fetchLiveTrendingMovies, openPlayerForItem);
      renderMediaCarouselSection(mainContent, '🎬 Action & Adventure Movies', movies.filter(m => m.genres?.includes('Action') || m.genres?.includes('Adventure')).concat(movies).slice(0, 15), 'movie-action', null, openPlayerForItem);
      renderMediaCarouselSection(mainContent, '🔮 Sci-Fi & Fantasy Movies', movies.filter(m => m.genres?.includes('Sci-Fi') || m.genres?.includes('Fantasy')).concat(movies.slice(5)).slice(0, 15), 'movie-scifi', null, openPlayerForItem);
    } else if (currentTab === 'tv') {
      const tvs = getTvShowsList();
      renderMediaCarouselSection(mainContent, '📺 Popular TV Series', tvs.slice(0, 15), 'tv-popular', fetchLivePopularTv, openPlayerForItem);
      renderMediaCarouselSection(mainContent, '⭐ Top Rated TV Dramas', tvs.filter(t => t.rating >= 8).concat(tvs).slice(0, 15), 'tv-toprated', null, openPlayerForItem);
    } else if (currentTab === 'anime') {
      const animes = getAnimeList();
      renderMediaCarouselSection(mainContent, '⚡ Latest Anime Releases', animes.slice(0, 15), 'anime-latest', fetchLiveAnime, openPlayerForItem);
      renderMediaCarouselSection(mainContent, '🔥 Action & Fantasy Anime', animes.filter(a => a.genres?.includes('Action') || a.genres?.includes('Fantasy')).concat(animes).slice(0, 15), 'anime-action', null, openPlayerForItem);
    }
  } else {
    const titleMap = {
      home: `Results (${filteredItems.length})`,
      movie: `Movies (${filteredItems.length})`,
      tv: `TV Series (${filteredItems.length})`,
      anime: `Anime (${filteredItems.length})`
    };
    renderMediaGridSection(mainContent, titleMap[currentTab] || 'Category Results', filteredItems, openPlayerForItem);
  }
}

async function loadLiveData() {
  const apiKey = getApiKey();
  if (apiKey) {
    await Promise.all([
      fetchLiveTrendingMovies(),
      fetchLivePopularTv(),
      fetchLiveAnime(),
      fetchLiveKoreanMedia()
    ]);
  }
}

function showToast(msg) {
  let toastContainer = document.getElementById('toastContainer');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toastContainer';
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }
  const toast = document.createElement('div');
  toast.className = 'toast-message show';
  toast.innerHTML = `<span>${msg}</span>`;
  toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

function initApp() {
  initSettingsModal();
  const headerApp = document.getElementById('headerApp');

  // Render Top & Bottom Navbar
  renderHeader(headerApp, (selectedTab) => {
    currentTab = selectedTab;
    activeGenre = 'all';
    activeSeeAllSection = null;
    verticalPages = { movie: 1, tv: 1, anime: 1, korean: 1 };
    renderMainView();
  }, openPlayerForItem);

  // Global Capture Handler for Poster Card Click / Double Click / Double Tap
  let clickTimeout = null;
  let lastClickTime = 0;
  let lastClickedCard = null;

  document.addEventListener('click', (e) => {
    const card = e.target.closest('.poster-card');
    if (!card) return;

    // Check if the click was on the watchlist button itself
    const watchBtn = e.target.closest('.card-watchlist-btn');
    if (watchBtn) {
      e.stopPropagation();
      e.preventDefault();
      const id = watchBtn.getAttribute('data-id');
      const allItems = getAllMedia();
      const item = allItems.find(i => i.id == id);
      if (item) {
        const nowSaved = toggleWatchlist(item);
        document.querySelectorAll(`.card-watchlist-btn[data-id="${id}"]`).forEach(b => {
          b.classList.toggle('active', nowSaved);
          const svg = b.querySelector('svg');
          if (svg) svg.setAttribute('fill', nowSaved ? 'currentColor' : 'none');
          b.setAttribute('title', nowSaved ? 'Remove from Watchlist' : 'Add to Watchlist');
        });
        showToast(nowSaved ? `Added "${item.title}" to Watchlist` : `Removed "${item.title}" from Watchlist`);
        if (currentTab === 'watchlist' && !nowSaved) {
          const cardEl = watchBtn.closest('.poster-card');
          if (cardEl) {
            cardEl.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
            cardEl.style.opacity = '0';
            cardEl.style.transform = 'scale(0.85)';
            setTimeout(() => {
              cardEl.remove();
              const mainContent = document.getElementById('mainContent');
              if (mainContent && mainContent.querySelectorAll('.poster-card').length === 0) {
                renderWatchlistView(mainContent, openPlayerForItem);
              }
            }, 250);
          }
        }
      }
      return;
    }

    // Intercept card body click
    e.stopPropagation();
    e.preventDefault();

    const currentTime = new Date().getTime();
    const timeDiff = currentTime - lastClickTime;
    const id = card.getAttribute('data-id');
    const allItems = getAllMedia();
    const item = allItems.find(i => i.id == id);
    if (!item) return;

    if (lastClickedCard === card && timeDiff < 300) {
      // DOUBLE CLICK / DOUBLE TAP DETECTED
      if (clickTimeout) {
        clearTimeout(clickTimeout);
        clickTimeout = null;
      }
      lastClickedCard = null;
      lastClickTime = 0;

      // Toggle watchlist state
      const nowSaved = toggleWatchlist(item);

      // Update watchlist buttons across page
      document.querySelectorAll(`.card-watchlist-btn[data-id="${id}"]`).forEach(b => {
        b.classList.toggle('active', nowSaved);
        const svg = b.querySelector('svg');
        if (svg) svg.setAttribute('fill', nowSaved ? 'currentColor' : 'none');
        b.setAttribute('title', nowSaved ? 'Remove from Watchlist' : 'Add to Watchlist');
      });

      // Show Double Tap heart animation feedback
      const imageWrap = card.querySelector('.poster-image-wrap');
      if (imageWrap) {
        imageWrap.querySelectorAll('.double-tap-feedback').forEach(el => el.remove());
        const feedback = document.createElement('div');
        feedback.className = 'double-tap-feedback';
        feedback.innerHTML = `
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="60" width="60">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
          </svg>
        `;
        imageWrap.appendChild(feedback);
        setTimeout(() => feedback.remove(), 600);
      }

      showToast(nowSaved ? `Added "${item.title}" to Watchlist` : `Removed "${item.title}" from Watchlist`);

      // If on watchlist tab and item was un-saved, smoothly remove its card
      if (currentTab === 'watchlist' && !nowSaved) {
        card.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
        card.style.opacity = '0';
        card.style.transform = 'scale(0.85)';
        setTimeout(() => {
          card.remove();
          const mainContent = document.getElementById('mainContent');
          if (mainContent && mainContent.querySelectorAll('.poster-card').length === 0) {
            renderWatchlistView(mainContent, openPlayerForItem);
          }
        }, 250);
      }
    } else {
      // First click: hold it for 250ms to check if second click follows
      lastClickTime = currentTime;
      lastClickedCard = card;

      clickTimeout = setTimeout(() => {
        openPlayerForItem(item);
        lastClickedCard = null;
        lastClickTime = 0;
      }, 250);
    }
  }, true); // useCapture = true

  // 1. Instant 0ms First Render from Local Cache
  renderMainView();

  // 2. Background Stale-While-Revalidate Sync with TMDB
  loadLiveData().then(() => {
    if (currentTab === 'home' && activeGenre === 'all' && !activeSeeAllSection) {
      renderMainView();
    }
  });

  // Scroll To Top Handler
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollTopBtn?.classList.add('visible');
    } else {
      scrollTopBtn?.classList.remove('visible');
    }
  });

  scrollTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Window scroll listener for infinite vertical loading
  window.addEventListener('scroll', async () => {
    if (currentTab === 'watchlist') return;
    if (currentTab === 'home' && activeGenre === 'all' && !activeSeeAllSection) return;
    if (loadingVertical) return;

    // Check if scrolled near the bottom of the page
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 700) {
      loadingVertical = true;

      const targetSec = activeSeeAllSection || currentTab;
      const pageKey = `${targetSec}_${activeGenre}`;
      if (!verticalPages[pageKey]) verticalPages[pageKey] = 1;
      verticalPages[pageKey]++;
      const nextPage = verticalPages[pageKey];

      let loadFn = null;
      if (activeSeeAllSection) {
        if (activeSeeAllSection === 'movie') loadFn = fetchLiveTrendingMovies;
        else if (activeSeeAllSection === 'tv') loadFn = fetchLivePopularTv;
        else if (activeSeeAllSection === 'anime') loadFn = fetchLiveAnime;
        else if (activeSeeAllSection === 'korean') loadFn = fetchLiveKoreanMedia;
      } else if (activeGenre === 'all') {
        if (currentTab === 'movie') loadFn = fetchLiveTrendingMovies;
        if (currentTab === 'tv') loadFn = fetchLivePopularTv;
        if (currentTab === 'anime') loadFn = fetchLiveAnime;
      } else {
        loadFn = (p) => fetchLiveGenreMedia(currentTab === 'home' ? 'all' : currentTab, activeGenre, p);
      }

      if (loadFn) {
        const mainContent = document.getElementById('mainContent');
        const gridContainer = mainContent.querySelector('.media-grid');

        // Render simple inline spinner at bottom
        const loaderEl = document.createElement('div');
        loaderEl.id = 'vertical-loader';
        loaderEl.style = "display:flex; justify-content:center; padding: 2.5rem 0; width:100%; grid-column: 1 / -1;";
        loaderEl.innerHTML = `<div style="border: 3px solid rgba(255,255,255,0.1); border-top-color: var(--color-neon-cyan); border-radius: 50%; width: 32px; height: 32px; animation: spin 0.8s linear infinite;"></div>`;

        if (gridContainer) {
          gridContainer.appendChild(loaderEl);
        }

        try {
          const newItems = await loadFn(nextPage);
          loaderEl.remove();

          if (newItems && newItems.length > 0 && gridContainer) {
            const cardsHTML = newItems.map(item => renderMediaCard(item)).join('');

            gridContainer.insertAdjacentHTML('beforeend', cardsHTML);

            // Bind click handler for newly appended grid items
            gridContainer.querySelectorAll('.poster-card').forEach(card => {
              if (!card.dataset.bound) {
                card.dataset.bound = "true";
                card.addEventListener('click', () => {
                  const id = card.getAttribute('data-id');
                  const allItems = getAllMedia();
                  const item = allItems.find(i => i.id == id);
                  if (item) openPlayerForItem(item);
                });
              }
            });
          }
        } catch (e) {
          console.error("Vertical lazy load failed", e);
          loaderEl.remove();
        } finally {
          loadingVertical = false;
        }
      } else {
        loadingVertical = false;
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', initApp);

