// ----------------------------------------------------
// WATCHLIST MANAGER & VIEW RENDERER
// LocalStorage bookmarking & saved items gallery
// ----------------------------------------------------

import { renderMediaCard } from './movieGrid.js';

const STORAGE_KEY = 'neonflix_watchlist_v1';

export function getWatchlist() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
}

export function isInWatchlist(itemId) {
  const list = getWatchlist();
  return list.some(item => item.id == itemId);
}

export function toggleWatchlist(item) {
  let list = getWatchlist();
  const exists = list.some(i => i.id == item.id);

  if (exists) {
    list = list.filter(i => i.id != item.id);
  } else {
    list.unshift(item);
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  return !exists; // returns true if now added, false if removed
}

export function renderWatchlistView(containerEl, onItemClick) {
  const watchlist = getWatchlist();

  if (watchlist.length === 0) {
    containerEl.innerHTML = `
      <section class="media-section" style="min-height: 60vh; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center;">
        <div style="width:80px; height:80px; border-radius:50%; background:rgba(0,242,254,0.1); border:1px solid var(--color-neon-cyan); display:flex; align-items:center; justify-content:center; margin-bottom:1.5rem; color:var(--color-neon-cyan);">
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" height="40" width="40">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
          </svg>
        </div>
        <h2 style="font-size:1.8rem; font-weight:800; margin-bottom:0.5rem;" class="gradient-text">Your Watchlist is Empty</h2>
        <p style="color:var(--text-muted); max-width:420px; margin-bottom:1.5rem;">Explore our vast collection of movies, TV series, and anime. Click "+ Watchlist" to save your favorite titles here.</p>
      </section>
    `;
    return;
  }

  const html = `
    <section class="media-section">
      <div class="section-header">
        <h2 class="section-title">
          <span class="title-accent"></span>
          <span>My Saved Watchlist (${watchlist.length})</span>
        </h2>
      </div>

      <div class="media-grid">
        ${watchlist.map(item => renderMediaCard(item)).join('')}
      </div>
    </section>
  `;

  containerEl.innerHTML = html;

  containerEl.querySelectorAll('.poster-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-id');
      const item = watchlist.find(i => i.id == id);
      if (item) {
        onItemClick(item);
      }
    });
  });
}
