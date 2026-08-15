import { getAllMedia } from '../api.js';

// ----------------------------------------------------
// MEDIA GRIDS & CATEGORY SLIDERS COMPONENT
// Poster grid cards with glowing hover effects & genre filter bar
// ----------------------------------------------------

export function renderMediaCard(item) {
  const isMovie = item.type === 'movie';
  const isAnime = item.type === 'anime';
  const badgeLabel = isMovie ? 'Movie' : (isAnime ? 'Anime' : 'TV Series');

  return `
    <div class="poster-card" data-id="${item.id}" data-type="${item.type}">
      <div class="poster-image-wrap">
        <img class="poster-image" src="${item.poster}" alt="${item.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/300x450/15151e/ffffff?text=${encodeURIComponent(item.title)}'" />
        <div class="poster-overlay-gradient"></div>
        
        <div class="card-top-badges">
          <span class="type-chip">${badgeLabel}</span>
          <span class="rating-chip">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="12" width="12">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
            </svg>
            ${item.rating}
          </span>
        </div>
      </div>

      <div class="card-content-info">
        <h3 class="card-title" title="${item.title}">${item.title}</h3>
        <div class="card-meta-row">
          <span>${item.year}</span>
          <span>${item.quality || 'HD'}</span>
        </div>
      </div>
    </div>
  `;
}

export function renderGenreFilterBar(containerEl, genres, activeGenre, onSelectGenre) {
  const html = `
    <div class="category-filter-section">
      <div class="genre-scroll-bar">
        <button type="button" class="genre-pill ${activeGenre === 'all' ? 'active' : ''}" data-genre="all">
          🔥 All Categories
        </button>
        ${genres.map(g => `
          <button type="button" class="genre-pill ${activeGenre === g ? 'active' : ''}" data-genre="${g}">
            ${g}
          </button>
        `).join('')}
      </div>
    </div>
  `;

  containerEl.innerHTML = html;

  containerEl.querySelectorAll('.genre-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      const g = btn.getAttribute('data-genre');
      onSelectGenre(g);
    });
  });
}

export function renderMediaGridSection(containerEl, title, items, onItemClick) {
  if (!items || items.length === 0) return;

  const sectionHTML = `
    <section class="media-section">
      <div class="section-header">
        <h2 class="section-title">
          <span class="title-accent"></span>
          <span>${title}</span>
        </h2>
      </div>

      <div class="media-grid">
        ${items.map(item => renderMediaCard(item)).join('')}
      </div>
    </section>
  `;

  containerEl.insertAdjacentHTML('beforeend', sectionHTML);

  // Bind click handlers to cards
  const cards = containerEl.querySelectorAll('.poster-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-id');
      const item = items.find(i => i.id == id) || getAllMedia().find(i => i.id == id);
      if (item) {
        onItemClick(item);
      }
    });
  });
}

export function renderMediaCarouselSection(containerEl, title, items, type, loadMoreFn, onItemClick) {
  if (!items || items.length === 0) return;

  let currentPage = 1;
  let loading = false;

  const sectionId = `section-${type}`;
  const carouselHTML = `
    <section class="media-section" id="${sectionId}">
      <div class="section-header">
        <h2 class="section-title">
          <span class="title-accent"></span>
          <span>${title}</span>
        </h2>
      </div>

      <div class="media-carousel" id="carousel-${type}">
        ${items.map(item => renderMediaCard(item)).join('')}
      </div>
    </section>
  `;

  containerEl.insertAdjacentHTML('beforeend', carouselHTML);

  const carousel = document.getElementById(`carousel-${type}`);
  
  function bindClicks(parentEl) {
    parentEl.querySelectorAll('.poster-card').forEach(card => {
      if (!card.dataset.bound) {
        card.dataset.bound = "true";
        card.addEventListener('click', () => {
          const id = card.getAttribute('data-id');
          const allItems = getAllMedia();
          const item = allItems.find(i => i.id == id);
          if (item) onItemClick(item);
        });
      }
    });
  }

  bindClicks(carousel);

  // Scroll listener to load more posters as user moves carousel
  carousel.addEventListener('scroll', async () => {
    if (loading) return;
    
    if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 350) {
      loading = true;
      currentPage++;
      
      const loaderId = `loader-${type}-${currentPage}`;
      carousel.insertAdjacentHTML('beforeend', `
        <div class="poster-card spinner-card" id="${loaderId}" style="display:flex; align-items:center; justify-content:center; flex: 0 0 170px; width: 170px; height: 250px; background:var(--bg-card); border:1px dashed var(--border-light);">
          <div style="border: 3px solid rgba(255,255,255,0.1); border-top-color: var(--color-neon-cyan); border-radius: 50%; width: 28px; height: 28px; animation: spin 0.8s linear infinite;"></div>
        </div>
      `);

      try {
        const newItems = await loadMoreFn(currentPage);
        document.getElementById(loaderId)?.remove();

        if (newItems && newItems.length > 0) {
          const cardsHTML = newItems.map(item => renderMediaCard(item)).join('');
          carousel.insertAdjacentHTML('beforeend', cardsHTML);
          bindClicks(carousel);
        }
      } catch (e) {
        console.error("Load more carousel failed", e);
        document.getElementById(loaderId)?.remove();
      } finally {
        loading = false;
      }
    }
  });
}
