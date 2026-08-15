// ----------------------------------------------------
// VIDEO PLAYER MODAL & SEASON/EPISODE SELECTOR COMPONENT
// Multi-server video stream player with episode selection (NO download links)
// ----------------------------------------------------

export function renderPlayerModal(containerEl, item, onToggleWatchlist, isSavedInWatchlist) {
  let currentServerIndex = 0;
  let currentSeasonIndex = 0;
  let currentEpisodeNumber = 1;

  const isSeriesOrAnime = (item.type === 'tv' || item.type === 'anime') && item.seasons && item.seasons.length > 0;

  function getActiveEmbedUrl() {
    if (item.servers && item.servers[currentServerIndex]) {
      return item.servers[currentServerIndex].url;
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
                <h2 style="font-size:1.3rem; font-weight:800; color:#fff;">${item.title}</h2>
                <div style="display:flex; align-items:center; gap:0.75rem; font-size:0.85rem; color:var(--text-muted); margin-top:0.25rem;">
                  <span>${item.year}</span>
                  <span>•</span>
                  <span style="color:#ffc107; font-weight:700;">★ ${item.rating}</span>
                  <span>•</span>
                  <span>${item.genres ? item.genres.join(', ') : ''}</span>
                </div>
              </div>

              <!-- Add to Watchlist Action -->
              <button type="button" class="btn-secondary-info" id="modalWatchlistBtn" style="height:42px; padding:0 1.25rem; font-size:0.9rem;">
                <svg stroke="currentColor" fill="${isSavedInWatchlist ? '#00f2fe' : 'none'}" stroke-width="2" viewBox="0 0 24 24" height="18" width="18">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                </svg>
                <span>${isSavedInWatchlist ? 'Saved' : '+ Watchlist'}</span>
              </button>
            </div>

            <!-- Server Selector Pills -->
            <div class="server-selector-row">
              <span style="font-size:0.85rem; font-weight:700; color:var(--text-muted);">SELECT SERVER:</span>
              ${(item.servers || [{ name: 'Server 1 (Trailer)', url: getActiveEmbedUrl() }]).map((srv, idx) => `
                <button type="button" class="server-btn ${idx === currentServerIndex ? 'active' : ''}" data-index="${idx}">
                  ${srv.name}
                </button>
              `).join('')}
            </div>

            <p style="font-size:0.9rem; color:var(--text-muted); line-height:1.6;">${item.overview}</p>
          </div>

          <!-- Season & Episode Selector (For TV Series / Anime) -->
          ${isSeriesOrAnime ? `
            <div class="episodes-section">
              <div style="display:flex; align-items:center; gap:0.75rem; overflow-x:auto;">
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

  // Server button listeners
  containerEl.querySelectorAll('.server-btn:not(.season-tab)').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-index'), 10);
      currentServerIndex = idx;
      
      containerEl.querySelectorAll('.server-btn:not(.season-tab)').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      if (item.servers && item.servers[idx]) {
        iframe.src = item.servers[idx].url;
      }
    });
  });

  // Season button listeners
  containerEl.querySelectorAll('.season-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      const seasonIdx = parseInt(btn.getAttribute('data-season-idx'), 10);
      currentSeasonIndex = seasonIdx;
      
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

        // Bind episode buttons
        episodesGrid.querySelectorAll('.episode-btn').forEach(epBtn => {
          epBtn.addEventListener('click', () => {
            episodesGrid.querySelectorAll('.episode-btn').forEach(b => b.classList.remove('active'));
            epBtn.classList.add('active');
          });
        });
      }
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
  });
}
