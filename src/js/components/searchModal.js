// ----------------------------------------------------
// SEARCH & FILTER MODAL COMPONENT
// Real-time search overlay with instant poster results
// ----------------------------------------------------

import { searchMedia, getAllMedia, fetchLiveSearch } from '../api.js';
import { renderMediaCard } from './movieGrid.js';

export function renderSearchModal(containerEl, onItemClick) {
  const searchModalHTML = `
    <div class="modal-backdrop active" id="searchModalBackdrop">
      <div class="modal-content-box search-modal-container">
        <!-- Search Input Header -->
        <div class="search-input-header">
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" height="22" width="22" style="color:var(--color-neon-red); flex-shrink:0;">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
          </svg>
          <input type="text" id="modalSearchInput" placeholder="Search title, genre, cast..." autofocus />
          <button type="button" class="modal-close-btn" id="closeSearchModalBtn" style="position:static;" aria-label="Close search">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" height="20" width="20">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <!-- Filter Chips -->
        <div style="display:flex; gap:0.5rem; padding:0.75rem 1.5rem; border-bottom:1px solid var(--border-light); background:#121219;">
          <button type="button" class="genre-pill active search-type-pill" data-type="all">All</button>
          <button type="button" class="genre-pill search-type-pill" data-type="movie">Movies</button>
          <button type="button" class="genre-pill search-type-pill" data-type="tv">TV Shows</button>
          <button type="button" class="genre-pill search-type-pill" data-type="anime">Anime</button>
        </div>

        <!-- Search Results Grid Area -->
        <div class="search-results-area" id="searchResultsArea">
          <div style="text-align:center; padding:3rem 1rem; color:var(--text-muted);">
            <svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" height="48" width="48" style="margin:0 auto 1rem auto; color:rgba(255,255,255,0.2);">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
            </svg>
            <p>Type to start searching movies, TV series, and anime...</p>
          </div>
        </div>
      </div>
    </div>
  `;

  containerEl.innerHTML = searchModalHTML;

  const backdrop = document.getElementById('searchModalBackdrop');
  const closeBtn = document.getElementById('closeSearchModalBtn');
  const input = document.getElementById('modalSearchInput');
  const resultsArea = document.getElementById('searchResultsArea');

  let activeTypeFilter = 'all';

  function closeModal() {
    backdrop.classList.remove('active');
    setTimeout(() => {
      containerEl.innerHTML = '';
    }, 300);
  }

  closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeModal();
  });

  input.focus();

  async function updateResults() {
    const query = input.value.trim();
    let results = [];
    
    if (query) {
      results = await fetchLiveSearch(query);
    } else {
      results = getAllMedia().slice(0, 12);
    }

    if (activeTypeFilter !== 'all') {
      results = results.filter(i => i.type === activeTypeFilter);
    }

    if (results.length === 0) {
      resultsArea.innerHTML = `
        <div style="text-align:center; padding:3rem 1rem; color:var(--text-muted);">
          <p style="font-size:1.1rem; color:#fff; font-weight:700;">No results found</p>
          <p style="font-size:0.9rem; margin-top:0.5rem;">Try searching for a different movie title or genre.</p>
        </div>
      `;
      return;
    }

    resultsArea.innerHTML = `
      <div class="media-grid">
        ${results.map(item => renderMediaCard(item)).join('')}
      </div>
    `;

    // Bind card clicks
    resultsArea.querySelectorAll('.poster-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        const item = results.find(i => i.id == id) || getAllMedia().find(i => i.id == id);
        if (item) {
          closeModal();
          onItemClick(item);
        }
      });
    });
  }

  input.addEventListener('input', updateResults);

  // Type filter pills handler
  containerEl.querySelectorAll('.search-type-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      containerEl.querySelectorAll('.search-type-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeTypeFilter = btn.getAttribute('data-type');
      updateResults();
    });
  });

  // Initial show top popular items
  updateResults();
}
