// ----------------------------------------------------
// MAIN APPLICATION ORCHESTRATOR
// State management, routing tabs, modal triggers
// ----------------------------------------------------

import { renderHeader } from './components/header.js';
import { renderHeroSlider } from './components/hero.js';
import { renderGenreFilterBar, renderMediaGridSection, renderMediaCarouselSection } from './components/movieGrid.js';
import { renderPlayerModal } from './components/playerModal.js';
import { renderSearchModal } from './components/searchModal.js';
import { renderWatchlistView, toggleWatchlist, isInWatchlist } from './components/watchlist.js';
import { 
  FEATURED_DATASET, 
  getMoviesList,
  getTvShowsList,
  getAnimeList,
  getAllMedia, 
  filterMedia,
  getApiKey,
  setApiKey,
  fetchLiveTrendingMovies,
  fetchLivePopularTv,
  fetchLiveAnime,
  fetchLiveSearch
} from './api.js';

let currentTab = 'home';
let activeGenre = 'all';

const GENRES_LIST = ['Action', 'Sci-Fi', 'Drama', 'Adventure', 'Anime', 'Comedy', 'Horror', 'Fantasy', 'Crime'];

function openPlayerForItem(item) {
  const playerContainer = document.getElementById('playerModalContainer');
  const isSaved = isInWatchlist(item.id);

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

  // Render Hero Section
  const heroWrapper = document.createElement('div');
  heroWrapper.id = 'heroWrapper';
  mainContent.appendChild(heroWrapper);

  const featuredItems = currentTab === 'movie' ? getMoviesList() : (currentTab === 'tv' ? getTvShowsList() : (currentTab === 'anime' ? getAnimeList() : FEATURED_DATASET));
  renderHeroSlider(heroWrapper, featuredItems, openPlayerForItem, openPlayerForItem);

  // Render Genre Filter Bar
  const genreWrapper = document.createElement('div');
  genreWrapper.id = 'genreWrapper';
  mainContent.appendChild(genreWrapper);

  renderGenreFilterBar(genreWrapper, GENRES_LIST, activeGenre, (selectedGenre) => {
    activeGenre = selectedGenre;
    renderMainView();
  });

  // Render Media Grid Sections
  const filteredItems = filterMedia(currentTab === 'home' ? 'all' : currentTab, activeGenre);

  if (currentTab === 'home' && activeGenre === 'all') {
    renderMediaCarouselSection(mainContent, '🔥 Trending Movies', getMoviesList().slice(0, 12), 'movie', fetchLiveTrendingMovies, openPlayerForItem);
    renderMediaCarouselSection(mainContent, '📺 Popular TV Series', getTvShowsList().slice(0, 12), 'tv', fetchLivePopularTv, openPlayerForItem);
    renderMediaCarouselSection(mainContent, '⚡ Latest Anime Releases', getAnimeList().slice(0, 12), 'anime', fetchLiveAnime, openPlayerForItem);
  } else {
    const titleMap = {
      home: `Results (${filteredItems.length})`,
      movie: `Movies (${filteredItems.length})`,
      tv: `TV Series (${filteredItems.length})`,
      anime: `Anime (${filteredItems.length})`
    };
    renderMediaGridSection(mainContent, titleMap[currentTab], filteredItems, openPlayerForItem);
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

async function loadLiveData() {
  const apiKey = getApiKey();
  if (apiKey) {
    await Promise.all([
      fetchLiveTrendingMovies(),
      fetchLivePopularTv(),
      fetchLiveAnime()
    ]);
  }
}

function initApp() {
  const headerApp = document.getElementById('headerApp');
  
  // Render Top & Bottom Navbar
  renderHeader(headerApp, (selectedTab) => {
    currentTab = selectedTab;
    activeGenre = 'all';
    renderMainView();
  }, openSearchModal);

  // Load live TMDB data and re-render once done
  loadLiveData().then(() => {
    renderMainView();
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
}

document.addEventListener('DOMContentLoaded', initApp);

