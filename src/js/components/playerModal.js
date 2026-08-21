import { fetchMovieTrailer, getApiKey } from '../api.js';

export function showToast(message, type = 'info') {
  let toastContainer = document.getElementById('toastContainer');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toastContainer';
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = `toast-message toast-${type}`;
  toast.innerHTML = `
    <div class="toast-content">
      <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" height="18" width="18">
        <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
      <span>${message}</span>
    </div>
  `;

  toastContainer.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

export function renderPlayerModal(containerEl, item, onToggleWatchlist, isSavedInWatchlist) {
  let currentServerIndex = 0;
  let currentSeasonIndex = 0;
  let currentEpisodeNumber = 1;

  // Lock background scroll when modal is open
  document.body.style.overflow = 'hidden';

  item.servers = [
    { id: "peachify", name: "🍑 Server 1 (Peachify)", url: "" }
  ];

  const isSeriesOrAnime = (item.type === 'tv' || item.type === 'anime') && item.seasons && item.seasons.length > 0;

  function getEmbedUrl(serverIdx, seasonNum, epNum) {
    const srv = item.servers[serverIdx];
    if (!srv) return '';

    const isMovie = item.type === 'movie';
    const tmdbId = item.id;

    if (srv.id === 'peachify') {
      return isMovie
        ? `https://peachify.pro/embed/movie/${tmdbId}`
        : `https://peachify.pro/embed/tv/${tmdbId}/${seasonNum}/${epNum}`;
    }
    
    return srv.url;
  }

  function getActiveEmbedUrl() {
    if (item.servers && item.servers[currentServerIndex]) {
      return getEmbedUrl(currentServerIndex, currentSeasonIndex + 1, currentEpisodeNumber);
    }
    return `https://www.youtube.com/embed/${item.trailerKey || 'Way9Dexny3w'}?autoplay=1`;
  }

  function buildModalHTML() {
    return `
      <div class="modal-backdrop active" id="playerModalBackdrop">
        <div class="modal-content-box">
          <button type="button" class="modal-close-btn" id="closePlayerModalBtn" aria-label="Close Video Player">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" height="20" width="20">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          <!-- Video Player Box -->
          <div class="player-container">
            <div class="player-loader-spinner" id="playerLoaderSpinner">
              <div class="spinner"></div>
              <span>Connecting stream source...</span>
            </div>
            <iframe 
              id="videoIframe"
              src="${getActiveEmbedUrl()}" 
              title="${item.title}"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen>
            </iframe>
          </div>

          <!-- Video Controls & Server Selector -->
          <div class="player-controls-bar">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;">
              <div>
                <h2 style="font-size:1.4rem; font-weight:800; color:#fff; line-height:1.3;">${item.title}</h2>
                <div style="display:flex; align-items:center; gap:0.75rem; font-size:0.88rem; color:var(--text-muted); margin-top:0.4rem; flex-wrap:wrap;">
                  <span class="badge-tag badge-quality">${item.year}</span>
                  <span class="badge-tag badge-rating">★ IMDb ${item.rating}</span>
                  <span style="color:var(--text-dim);">${item.genres ? item.genres.join(' • ') : ''}</span>
                </div>
              </div>

              <div style="display:flex; align-items:center; gap:0.75rem;">
                <!-- Watch Trailer Button -->
                <button type="button" class="btn-primary-play" id="playTrailerBtn" style="height:42px; padding:0 1.25rem; font-size:0.88rem;">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="18" width="18">
                    <path d="M8 5v14l11-7z"></path>
                  </svg>
                  <span>Trailer</span>
                </button>

                <!-- Add to Watchlist Action -->
                <button type="button" class="btn-secondary-info" id="modalWatchlistBtn" style="height:42px; padding:0 1.25rem; font-size:0.88rem;">
                  <svg stroke="currentColor" fill="${isSavedInWatchlist ? '#00f2fe' : 'none'}" stroke-width="2" viewBox="0 0 24 24" height="18" width="18">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                  </svg>
                  <span>${isSavedInWatchlist ? 'Saved' : '+ Watchlist'}</span>
                </button>
              </div>
            </div>

            <!-- Server Selector Pills -->
            <div class="server-selector-row" id="serversRow">
              <span class="server-row-label">
                <span class="server-status-dot"></span>
                SERVERS:
              </span>
              ${item.servers.map((srv, idx) => `
                <button type="button" class="server-btn ${idx === currentServerIndex ? 'active' : ''}" data-index="${idx}">
                  ${srv.name}
                </button>
              `).join('')}
            </div>

            <p style="font-size:0.92rem; color:var(--text-muted); line-height:1.65; margin:0;">${item.overview}</p>
          </div>

          <!-- Season & Episode Selector (For TV Series / Anime) -->
          ${isSeriesOrAnime ? `
            <div class="episodes-section">
              <div style="display:flex; align-items:center; gap:0.75rem; overflow-x:auto; padding-bottom:0.5rem;">
                ${item.seasons.map((s, idx) => `
                  <button type="button" class="server-btn season-tab ${idx === currentSeasonIndex ? 'active' : ''}" data-season-idx="${idx}">
                    Season ${s.season}
                  </button>
                `).join('')}
              </div>

              <div class="episodes-grid" id="episodesGrid">
                ${item.seasons[currentSeasonIndex].episodes.map(epNum => `
                  <button type="button" class="episode-btn ${epNum === currentEpisodeNumber ? 'active' : ''}" data-ep="${epNum}">
                    Episode ${epNum}
                  </button>
                `).join('')}
              </div>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }

  containerEl.innerHTML = buildModalHTML();

  const backdrop = document.getElementById('playerModalBackdrop');
  const closeBtn = document.getElementById('closePlayerModalBtn');
  const iframe = document.getElementById('videoIframe');
  const watchlistBtn = document.getElementById('modalWatchlistBtn');
  const playTrailerBtn = document.getElementById('playTrailerBtn');

  function closeModal() {
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
    setTimeout(() => {
      containerEl.innerHTML = '';
    }, 300);
  }

  closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeModal();
  });

  // Helper to change iframe source and show loading spinner
  function changeIframeSource(url) {
    const spinner = document.getElementById('playerLoaderSpinner');
    if (spinner) spinner.style.display = 'flex';
    iframe.src = url;
  }

  // Hide loading spinner when iframe completes loading
  iframe.addEventListener('load', () => {
    const spinner = document.getElementById('playerLoaderSpinner');
    if (spinner) spinner.style.display = 'none';
  });

  // Load official YouTube Trailer from TMDB dynamically
  if (getApiKey()) {
    fetchMovieTrailer(item.id, item.type).then(trailerKey => {
      if (trailerKey) {
        item.trailerKey = trailerKey;
        const trailerUrl = `https://www.youtube.com/embed/${trailerKey}?autoplay=1`;
        
        // Add Trailer server option if not already present
        if (!item.servers.some(s => s.name.includes('Trailer'))) {
          item.servers.push({ id: 'trailer', name: '🎬 Official Trailer', url: trailerUrl });
          
          // Re-render server buttons row
          const serversRow = document.getElementById('serversRow');
          if (serversRow) {
            serversRow.innerHTML = `
              <span class="server-row-label">
                <span class="server-status-dot"></span>
                SERVERS:
              </span>
              ${item.servers.map((srv, idx) => `
                <button type="button" class="server-btn ${idx === currentServerIndex ? 'active' : ''}" data-index="${idx}">
                  ${srv.name}
                </button>
              `).join('')}
            `;

            // Re-bind server buttons
            serversRow.querySelectorAll('.server-btn').forEach(btn => {
              btn.addEventListener('click', () => {
                const idx = parseInt(btn.getAttribute('data-index'), 10);
                currentServerIndex = idx;
                serversRow.querySelectorAll('.server-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                if (item.servers[idx]) changeIframeSource(getEmbedUrl(idx, currentSeasonIndex + 1, currentEpisodeNumber));
                showToast(`Switched to ${item.servers[idx].name}`);
              });
            });
          }
        }

        playTrailerBtn?.addEventListener('click', () => {
          changeIframeSource(trailerUrl);
          showToast('Playing official trailer');
          const trailerIdx = item.servers.findIndex(s => s.name.includes('Trailer'));
          if (trailerIdx !== -1) {
            currentServerIndex = trailerIdx;
            const serversRow = document.getElementById('serversRow');
            if (serversRow) {
              serversRow.querySelectorAll('.server-btn').forEach((b, i) => {
                b.classList.toggle('active', i === trailerIdx);
              });
            }
          }
        });
      }
    });
  }

  // Server button listeners
  containerEl.querySelectorAll('.server-btn:not(.season-tab)').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-index'), 10);
      currentServerIndex = idx;
      
      containerEl.querySelectorAll('.server-btn:not(.season-tab)').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      if (item.servers && item.servers[idx]) {
        changeIframeSource(getActiveEmbedUrl());
        showToast(`Switched stream server to Option ${idx + 1}`);
      }
    });
  });

  // Episode click binder helper
  function bindEpisodeClicks(grid) {
    grid.querySelectorAll('.episode-btn').forEach(epBtn => {
      epBtn.addEventListener('click', () => {
        const epNum = parseInt(epBtn.getAttribute('data-ep'), 10);
        currentEpisodeNumber = epNum;
        
        grid.querySelectorAll('.episode-btn').forEach(b => b.classList.remove('active'));
        epBtn.classList.add('active');
        
        changeIframeSource(getActiveEmbedUrl());
        showToast(`Loading Season ${currentSeasonIndex + 1} Episode ${epNum}`);
      });
    });
  }

  // Bind initial episode buttons if they exist
  const initialEpisodesGrid = document.getElementById('episodesGrid');
  if (initialEpisodesGrid) {
    bindEpisodeClicks(initialEpisodesGrid);
  }

  // Season button listeners
  containerEl.querySelectorAll('.season-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      const seasonIdx = parseInt(btn.getAttribute('data-season-idx'), 10);
      currentSeasonIndex = seasonIdx;
      currentEpisodeNumber = 1; // reset episode to 1 on season change
      
      containerEl.querySelectorAll('.season-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Update episode grid
      const episodesGrid = document.getElementById('episodesGrid');
      if (episodesGrid && item.seasons[seasonIdx]) {
        episodesGrid.innerHTML = item.seasons[seasonIdx].episodes.map(epNum => `
          <button type="button" class="episode-btn ${epNum === currentEpisodeNumber ? 'active' : ''}" data-ep="${epNum}">
            Episode ${epNum}
          </button>
        `).join('');

        bindEpisodeClicks(episodesGrid);
      }
      
      changeIframeSource(getActiveEmbedUrl());
      showToast(`Loading Season ${seasonIdx + 1}`);
    });
  });

  // Watchlist toggle
  watchlistBtn?.addEventListener('click', () => {
    onToggleWatchlist(item);
    const updatedStatus = !isSavedInWatchlist;
    isSavedInWatchlist = updatedStatus;
    
    watchlistBtn.querySelector('span').textContent = updatedStatus ? 'Saved' : '+ Watchlist';
    const svgPath = watchlistBtn.querySelector('svg path');
    if (svgPath) {
      watchlistBtn.querySelector('svg').setAttribute('fill', updatedStatus ? '#00f2fe' : 'none');
    }

    showToast(updatedStatus ? `Added "${item.title}" to Watchlist` : `Removed "${item.title}" from Watchlist`);
  });
}
