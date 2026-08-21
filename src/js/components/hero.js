// ----------------------------------------------------
// HERO SLIDER COMPONENT
// Dynamic featured movie/show banner section with cinematic cross-fade transitions
// ----------------------------------------------------

import { fetchMovieLogo, fetchMovieTrailer } from '../api.js';

export function renderHeroSlider(containerEl, items, onPlayClick, onDetailsClick) {
  if (!items || items.length === 0) return;

  const sliderItems = items.slice(0, 6);
  let currentIndex = 0;
  let cycleInterval = null;
  let activeBackdropLayer = 'A'; // 'A' or 'B'
  let isTransitioning = false;

  function buildCardContentHTML(item, index) {
    const isMovie = item.type === 'movie';
    const isAnime = item.type === 'anime';
    const badgeLabel = isMovie ? 'Movie' : (isAnime ? 'Anime' : 'TV Series');
    const genreText = item.genres ? item.genres.slice(0, 3).join(' • ') : 'Action • Thriller';

    const titleMarkup = item.logoUrl
      ? `<img class="hero-title-logo" id="heroTitleElement" src="${item.logoUrl}" alt="${item.title}" />`
      : `<h1 class="hero-title" id="heroTitleElement">${item.title}</h1>`;

    return `
      <div class="hero-badge-row">
        <span class="badge-tag badge-neon">
          <span class="pulse-dot"></span>
          #${index + 1} Trending Now
        </span>
        <span class="badge-tag badge-quality">${badgeLabel}</span>
        <span class="badge-tag badge-rating">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="14" width="14">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
          </svg>
          IMDb ${item.rating}
        </span>
        <span class="badge-tag badge-quality">${item.year}</span>
        <span class="badge-tag badge-hdr">4K ULTRA HD</span>
      </div>

      ${titleMarkup}
      
      <div class="hero-genres-row">
        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" height="14" width="14" style="color:var(--color-neon-red);">
          <path stroke-linecap="round" stroke-linejoin="round" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"></path>
        </svg>
        <span>${genreText}</span>
      </div>

      <div class="hero-actions-row">
        <button type="button" class="btn-primary-play" id="heroPlayBtn">
          <div class="play-icon-glow">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="22" width="22">
              <path d="M8 5v14l11-7z"></path>
            </svg>
          </div>
          <span>Stream Now</span>
        </button>
      </div>
    `;
  }

  // Initial Section Layout Setup (Rendered Once)
  containerEl.innerHTML = `
    <section class="hero-slider-section" id="heroSection">
      <div class="hero-backdrop active" id="heroBackdropA" style="background-image: url('${sliderItems[0].backdrop}')"></div>
      <div class="hero-backdrop" id="heroBackdropB"></div>
      
      <div class="hero-overlay"></div>
      <div class="hero-vignette-overlay"></div>

      <div class="hero-content-container">
        <div class="hero-glass-card" id="heroGlassCard">
          ${buildCardContentHTML(sliderItems[0], 0)}
        </div>
      </div>

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

      <div class="hero-indicators" id="heroIndicators">
        ${sliderItems.map((_, idx) => `
          <span class="indicator-dot ${idx === 0 ? 'active' : ''}" data-index="${idx}"></span>
        `).join('')}
      </div>
    </section>
  `;

  const heroGlassCard = document.getElementById('heroGlassCard');
  const heroBackdropA = document.getElementById('heroBackdropA');
  const heroBackdropB = document.getElementById('heroBackdropB');
  const heroIndicators = document.getElementById('heroIndicators');

  function bindCardEvents(item) {
    document.getElementById('heroPlayBtn')?.addEventListener('click', () => {
      onPlayClick({ ...item, isTrailerMode: false });
    });
  }

  function fetchLogoForCurrentItem(item) {
    if (!item.logoUrl && item.id) {
      fetchMovieLogo(item.id, item.type).then(logoUrl => {
        if (logoUrl) {
          item.logoUrl = logoUrl;
          if (sliderItems[currentIndex].id === item.id) {
            const titleEl = document.getElementById('heroTitleElement');
            if (titleEl) {
              const newLogo = document.createElement('img');
              newLogo.className = 'hero-title-logo';
              newLogo.id = 'heroTitleElement';
              newLogo.src = logoUrl;
              newLogo.alt = item.title;
              titleEl.replaceWith(newLogo);
            }
          }
        }
      });
    }
  }

  // Initial event bindings
  bindCardEvents(sliderItems[0]);
  fetchLogoForCurrentItem(sliderItems[0]);

  function transitionToSlide(targetIndex) {
    if (targetIndex === currentIndex || isTransitioning) return;
    isTransitioning = true;
    currentIndex = targetIndex;

    const item = sliderItems[currentIndex];

    // 1. Cross-fade Backdrops
    const currentLayerEl = activeBackdropLayer === 'A' ? heroBackdropA : heroBackdropB;
    const nextLayerEl = activeBackdropLayer === 'A' ? heroBackdropB : heroBackdropA;
    activeBackdropLayer = activeBackdropLayer === 'A' ? 'B' : 'A';

    nextLayerEl.style.backgroundImage = `url('${item.backdrop}')`;
    nextLayerEl.classList.add('active');
    currentLayerEl.classList.remove('active');

    // 2. Smooth Text & Card Transition
    heroGlassCard.classList.add('fading-out');

    setTimeout(() => {
      heroGlassCard.innerHTML = buildCardContentHTML(item, currentIndex);
      bindCardEvents(item);
      fetchLogoForCurrentItem(item);

      // Update indicator dots
      heroIndicators.querySelectorAll('.indicator-dot').forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentIndex);
      });

      heroGlassCard.classList.remove('fading-out');
      isTransitioning = false;
    }, 250);
  }

  function nextSlide() {
    const target = (currentIndex + 1) % sliderItems.length;
    transitionToSlide(target);
    resetAutoCycle();
  }

  function prevSlide() {
    const target = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
    transitionToSlide(target);
    resetAutoCycle();
  }

  // Arrow controls
  document.getElementById('heroLeftBtn')?.addEventListener('click', prevSlide);
  document.getElementById('heroRightBtn')?.addEventListener('click', nextSlide);

  // Indicator controls
  heroIndicators.querySelectorAll('.indicator-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.getAttribute('data-index'), 10);
      transitionToSlide(idx);
      resetAutoCycle();
    });
  });

  // Mobile Touch Gestures
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
        nextSlide();
      } else if (touchEndX - touchStartX > swipeThreshold) {
        prevSlide();
      }
    }, { passive: true });
  }

  function startAutoCycle() {
    cycleInterval = setInterval(() => {
      const target = (currentIndex + 1) % sliderItems.length;
      transitionToSlide(target);
    }, 7000);
  }

  function resetAutoCycle() {
    if (cycleInterval) {
      clearInterval(cycleInterval);
      startAutoCycle();
    }
  }

  startAutoCycle();
}
