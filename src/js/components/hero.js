// ----------------------------------------------------
// HERO SLIDER COMPONENT
// Dynamic featured movie/show banner section
// ----------------------------------------------------

export function renderHeroSlider(containerEl, items, onPlayClick, onDetailsClick) {
  if (!items || items.length === 0) return;

  // Max 6 items for the slider
  const sliderItems = items.slice(0, 6);
  let currentIndex = 0;
  let cycleInterval = null;

  function buildHeroHTML(item) {
    const isMovie = item.type === 'movie';
    const isAnime = item.type === 'anime';
    const badgeLabel = isMovie ? 'Movie' : (isAnime ? 'Anime' : 'TV Series');

    return `
      <section class="hero-slider-section" id="heroSection">
        <!-- Backdrop Banner Image -->
        <div class="hero-backdrop" id="heroBackdrop" style="background-image: url('${item.backdrop}')"></div>
        
        <!-- Gradient Grayscale Overlays -->
        <div class="hero-overlay"></div>

        <!-- Featured Media Info -->
        <div class="hero-content-container">
          <div class="hero-badge-row">
            <span class="badge-tag badge-neon">#${currentIndex + 1} Featured</span>
            <span class="badge-tag badge-quality">${badgeLabel}</span>
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

        <!-- Left & Right Arrow controls -->
        <button type="button" class="hero-arrow hero-arrow-left" id="heroLeftBtn" aria-label="Previous Slide">
          <svg stroke="currentColor" fill="none" stroke-width="2.5" viewBox="0 0 24 24" height="22" width="22">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        <button type="button" class="hero-arrow hero-arrow-right" id="heroRightBtn" aria-label="Next Slide">
          <svg stroke="currentColor" fill="none" stroke-width="2.5" viewBox="0 0 24 24" height="22" width="22">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>

        <!-- Slide Indicators -->
        <div class="hero-indicators">
          ${sliderItems.map((_, idx) => `
            <span class="indicator-dot ${idx === currentIndex ? 'active' : ''}" data-index="${idx}"></span>
          `).join('')}
        </div>
      </section>
    `;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % sliderItems.length;
    updateHero();
    resetAutoCycle();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
    updateHero();
    resetAutoCycle();
  }

  function updateHero() {
    const item = sliderItems[currentIndex];
    containerEl.innerHTML = buildHeroHTML(item);

    // Bind item click actions
    document.getElementById('heroPlayBtn')?.addEventListener('click', () => {
      onPlayClick(item);
    });

    document.getElementById('heroInfoBtn')?.addEventListener('click', () => {
      onDetailsClick(item);
    });

    // Bind arrow click controls
    document.getElementById('heroLeftBtn')?.addEventListener('click', prevSlide);
    document.getElementById('heroRightBtn')?.addEventListener('click', nextSlide);

    // Bind indicator dot clicks
    containerEl.querySelectorAll('.indicator-dot').forEach(dot => {
      dot.addEventListener('click', () => {
        const idx = parseInt(dot.getAttribute('data-index'), 10);
        currentIndex = idx;
        updateHero();
        resetAutoCycle();
      });
    });

    // Bind touch gestures for mobile swipe
    const heroSection = document.getElementById('heroSection');
    if (heroSection) {
      let touchStartX = 0;
      let touchEndX = 0;

      heroSection.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });

      heroSection.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const swipeThreshold = 55;
        if (touchStartX - touchEndX > swipeThreshold) {
          nextSlide(); // Swiped left -> next
        } else if (touchEndX - touchStartX > swipeThreshold) {
          prevSlide(); // Swiped right -> prev
        }
      }, { passive: true });
    }
  }

  function startAutoCycle() {
    cycleInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % sliderItems.length;
      updateHero();
    }, 7000);
  }

  function resetAutoCycle() {
    if (cycleInterval) {
      clearInterval(cycleInterval);
      startAutoCycle();
    }
  }

  updateHero();
  startAutoCycle();
}
