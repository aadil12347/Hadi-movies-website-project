// ----------------------------------------------------
// HERO SLIDER COMPONENT
// Dynamic featured movie/show banner section
// ----------------------------------------------------

export function renderHeroSlider(containerEl, items, onPlayClick, onDetailsClick) {
  if (!items || items.length === 0) return;

  let currentIndex = 0;

  function buildHeroHTML(item) {
    return `
      <section class="hero-slider-section" id="heroSection">
        <!-- Backdrop Banner Image -->
        <div class="hero-backdrop" id="heroBackdrop" style="background-image: url('${item.backdrop}')"></div>
        
        <!-- Gradient Grayscale Overlays -->
        <div class="hero-overlay"></div>

        <!-- Featured Media Info -->
        <div class="hero-content-container">
          <div class="hero-badge-row">
            <span class="badge-tag badge-neon">#1 Trending</span>
            <span class="badge-tag badge-quality">${item.quality || '4K UHD'}</span>
            <span class="badge-tag badge-rating">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="14" width="14">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
              </svg>
              ${item.rating}
            </span>
            <span class="badge-tag badge-quality">${item.year}</span>
          </div>

          <h1 class="hero-title">${item.title}</h1>
          
          <p class="hero-overview">${item.overview}</p>

          <div class="hero-actions-row">
            <button type="button" class="btn-primary-play" id="heroPlayBtn">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="22" width="22">
                <path d="M8 5v14l11-7z"></path>
              </svg>
              <span>Watch Now</span>
            </button>
            <button type="button" class="btn-secondary-info" id="heroInfoBtn">
              <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" height="20" width="20">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>Details</span>
            </button>
          </div>
        </div>
      </section>
    `;
  }

  function updateHero() {
    const item = items[currentIndex];
    containerEl.innerHTML = buildHeroHTML(item);

    document.getElementById('heroPlayBtn')?.addEventListener('click', () => {
      onPlayClick(item);
    });

    document.getElementById('heroInfoBtn')?.addEventListener('click', () => {
      onDetailsClick(item);
    });
  }

  updateHero();

  // Auto cycle hero items every 7 seconds
  setInterval(() => {
    currentIndex = (currentIndex + 1) % items.length;
    updateHero();
  }, 7000);
}
