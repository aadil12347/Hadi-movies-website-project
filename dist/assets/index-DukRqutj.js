(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();function R(e,t,r){const a=`
    <header class="site-header" id="siteHeader">
      <!-- Left: Drawer Toggle & Brand Logo -->
      <div class="logo-container">
        <button type="button" class="menu-toggle-btn" id="openDrawerBtn" aria-label="Open Navigation Menu">
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" height="22" width="22">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        <a href="#" class="neonflix-logo" id="logoBtn">
          <div class="logo-icon">N</div>
          <span class="gradient-text">Neonflix</span>
        </a>
      </div>

      <!-- Center: Search Trigger Input Bar -->
      <div class="header-search-bar">
        <button type="button" class="search-trigger-btn" id="headerSearchBtn">
          <span>Search movies, shows, anime…</span>
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" height="18" width="18">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
          </svg>
        </button>
      </div>

      <!-- Right: User Profile (No Download link!) -->
      <div class="header-right-actions">
        <button type="button" class="icon-circle-btn" id="profileBtn" aria-label="User Profile">
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" height="22" width="22">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          </svg>
        </button>
      </div>
    </header>

    <!-- Side Navigation Drawer -->
    <div class="drawer-overlay" id="drawerOverlay"></div>
    <div class="side-drawer" id="sideDrawer">
      <div class="drawer-header">
        <div class="neonflix-logo">
          <div class="logo-icon">N</div>
          <span class="gradient-text">Neonflix</span>
        </div>
        <button type="button" class="icon-circle-btn" id="closeDrawerBtn" aria-label="Close menu">
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" height="20" width="20">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <ul class="drawer-nav-list">
        <li class="drawer-nav-item active" data-tab="home">
          <button type="button">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" height="20" width="20">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg>
            <span>Home</span>
          </button>
        </li>
        <li class="drawer-nav-item" data-tab="movie">
          <button type="button">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" height="20" width="20">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"></path>
            </svg>
            <span>Movies</span>
          </button>
        </li>
        <li class="drawer-nav-item" data-tab="tv">
          <button type="button">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" height="20" width="20">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            <span>TV Shows</span>
          </button>
        </li>
        <li class="drawer-nav-item" data-tab="anime">
          <button type="button">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" height="20" width="20">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
            </svg>
            <span>Anime</span>
          </button>
        </li>
        <li class="drawer-nav-item" data-tab="watchlist">
          <button type="button">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" height="20" width="20">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
            </svg>
            <span>My Watchlist</span>
          </button>
        </li>
      </ul>
    </div>

    <!-- Mobile Floating Bottom Navigation Bar -->
    <div class="mobile-bottom-bar">
      <div class="bottom-nav-container">
        <button type="button" class="nav-tab-btn active" data-tab="home" aria-label="Home">
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" height="22" width="22">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
          </svg>
        </button>
        <button type="button" class="nav-tab-btn" data-tab="movie" aria-label="Movies">
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" height="22" width="22">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"></path>
          </svg>
        </button>
        <button type="button" class="nav-tab-btn" data-tab="tv" aria-label="TV">
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" height="22" width="22">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
        </button>
        <button type="button" class="nav-tab-btn" data-tab="anime" aria-label="Anime">
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" height="22" width="22">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
          </svg>
        </button>
        <button type="button" class="nav-tab-btn" id="mobileSearchBtn" aria-label="Search">
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" height="22" width="22">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
          </svg>
        </button>
      </div>
    </div>
  `;e.innerHTML=a;const o=document.getElementById("openDrawerBtn"),s=document.getElementById("closeDrawerBtn"),i=document.getElementById("sideDrawer"),l=document.getElementById("drawerOverlay"),v=document.getElementById("headerSearchBtn"),u=document.getElementById("mobileSearchBtn"),d=document.getElementById("logoBtn");function g(){i.classList.add("active"),l.classList.add("active")}function h(){i.classList.remove("active"),l.classList.remove("active")}o.addEventListener("click",g),s.addEventListener("click",h),l.addEventListener("click",h),v==null||v.addEventListener("click",r),u==null||u.addEventListener("click",r),d==null||d.addEventListener("click",p=>{p.preventDefault(),t("home")}),document.querySelectorAll(".drawer-nav-item, .nav-tab-btn").forEach(p=>{p.addEventListener("click",()=>{const n=p.getAttribute("data-tab");n&&(document.querySelectorAll(".drawer-nav-item").forEach(c=>{c.classList.toggle("active",c.getAttribute("data-tab")===n)}),document.querySelectorAll(".nav-tab-btn").forEach(c=>{c.classList.toggle("active",c.getAttribute("data-tab")===n)}),h(),t(n))})}),window.addEventListener("scroll",()=>{const p=document.getElementById("siteHeader");window.scrollY>40?p==null||p.classList.add("scrolled"):p==null||p.classList.remove("scrolled")})}function G(e,t,r,a){if(!t||t.length===0)return;let o=0;function s(l){return`
      <section class="hero-slider-section" id="heroSection">
        <!-- Backdrop Banner Image -->
        <div class="hero-backdrop" id="heroBackdrop" style="background-image: url('${l.backdrop}')"></div>
        
        <!-- Gradient Grayscale Overlays -->
        <div class="hero-overlay"></div>

        <!-- Featured Media Info -->
        <div class="hero-content-container">
          <div class="hero-badge-row">
            <span class="badge-tag badge-neon">#1 Trending</span>
            <span class="badge-tag badge-quality">${l.quality||"4K UHD"}</span>
            <span class="badge-tag badge-rating">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="14" width="14">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
              </svg>
              ${l.rating}
            </span>
            <span class="badge-tag badge-quality">${l.year}</span>
          </div>

          <h1 class="hero-title">${l.title}</h1>
          
          <p class="hero-overview">${l.overview}</p>

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
    `}function i(){var v,u;const l=t[o];e.innerHTML=s(l),(v=document.getElementById("heroPlayBtn"))==null||v.addEventListener("click",()=>{r(l)}),(u=document.getElementById("heroInfoBtn"))==null||u.addEventListener("click",()=>{a(l)})}i(),setInterval(()=>{o=(o+1)%t.length,i()},7e3)}const H=[{id:101,title:"Dune: Part Two",original_title:"Dune: Part Two",type:"movie",poster:"https://image.tmdb.org/t500/1pdfLPoLcGh9-6uCwrmp0d2ImzZ.jpg",backdrop:"https://image.tmdb.org/t500/xOM08GoAFMu4Wor2xR2d4hM1me0.jpg",rating:8.6,year:"2024",quality:"4K UHD",duration:"2h 46m",genres:["Sci-Fi","Adventure","Action"],overview:"Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the universe.",trailerKey:"Way9Dexny3w",cast:["Timothée Chalamet","Zendaya","Rebecca Ferguson","Javier Bardem"],servers:[{name:"Server 1 (Fast)",url:"https://www.youtube.com/embed/Way9Dexny3w?autoplay=1"},{name:"Server 2 (HD)",url:"https://vidsrc.to/embed/movie/693134"},{name:"Server 3 (Ultra)",url:"https://autoembed.to/movie/tmdb/693134"}]},{id:102,title:"Arcane: Season 2",original_title:"Arcane",type:"tv",poster:"https://image.tmdb.org/t500/fq24874c.jpg",backdrop:"https://image.tmdb.org/t500/56v2KjBlU4XaOv9r1kyp7d8Bx67.jpg",rating:9,year:"2024",quality:"4K UHD",duration:"9 Episodes",genres:["Animation","Sci-Fi","Action"],overview:"Amid the escalating tensions between the utopian city of Piltover and the oppressed underground city of Zaun, sisters Vi and Jinx find themselves on opposing sides of a war.",trailerKey:"fXmAurh012s",cast:["Hailee Steinfeld","Ella Purnell","Katie Leung"],servers:[{name:"Server 1 (Fast)",url:"https://www.youtube.com/embed/fXmAurh012s?autoplay=1"},{name:"Server 2 (HD)",url:"https://vidsrc.to/embed/tv/94605"}]}],I=[{id:1,title:"Deadpool & Wolverine",type:"movie",poster:"https://image.tmdb.org/t500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",backdrop:"https://image.tmdb.org/t500/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg",rating:8.4,year:"2024",quality:"4K UHD",genres:["Action","Comedy","Sci-Fi"],overview:"Wolverine is recovering from his injuries when he crosses paths with the loudmouth Deadpool. They team up to defeat a common enemy.",trailerKey:"73_1biulkYk",servers:[{name:"Server 1 (Trailer)",url:"https://www.youtube.com/embed/73_1biulkYk?autoplay=1"},{name:"Server 2 (HD)",url:"https://vidsrc.to/embed/movie/533535"}]},{id:2,title:"Oppenheimer",type:"movie",poster:"https://image.tmdb.org/t500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",backdrop:"https://image.tmdb.org/t500/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",rating:8.9,year:"2023",quality:"4K UHD",genres:["Drama","History","Biography"],overview:"The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",trailerKey:"uYPbbksJxIg",servers:[{name:"Server 1 (Trailer)",url:"https://www.youtube.com/embed/uYPbbksJxIg?autoplay=1"},{name:"Server 2 (HD)",url:"https://vidsrc.to/embed/movie/872585"}]},{id:3,title:"Interstellar",type:"movie",poster:"https://image.tmdb.org/t500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",backdrop:"https://image.tmdb.org/t500/rAiYTfKGqDCRIIqo6LEuPJflrHJ.jpg",rating:8.7,year:"2014",quality:"4K UHD",genres:["Sci-Fi","Adventure","Drama"],overview:"A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",trailerKey:"zSWdZVtXT7E",servers:[{name:"Server 1 (Trailer)",url:"https://www.youtube.com/embed/zSWdZVtXT7E?autoplay=1"},{name:"Server 2 (HD)",url:"https://vidsrc.to/embed/movie/157336"}]},{id:4,title:"Spider-Man: Across the Spider-Verse",type:"movie",poster:"https://image.tmdb.org/t500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",backdrop:"https://image.tmdb.org/t500/4XM8DUTQb3lhKWwFi21juCmgvE.jpg",rating:8.8,year:"2023",quality:"4K UHD",genres:["Animation","Action","Adventure"],overview:"Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence.",trailerKey:"cqGjhVJWtEg",servers:[{name:"Server 1 (Trailer)",url:"https://www.youtube.com/embed/cqGjhVJWtEg?autoplay=1"},{name:"Server 2 (HD)",url:"https://vidsrc.to/embed/movie/569094"}]},{id:5,title:"The Dark Knight",type:"movie",poster:"https://image.tmdb.org/t500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",backdrop:"https://image.tmdb.org/t500/nMK28FiismUDh85GD9TSuYfZjeB.jpg",rating:9,year:"2008",quality:"4K UHD",genres:["Action","Crime","Drama"],overview:"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological tests.",trailerKey:"EXeTwQWrcwY",servers:[{name:"Server 1 (Trailer)",url:"https://www.youtube.com/embed/EXeTwQWrcwY?autoplay=1"},{name:"Server 2 (HD)",url:"https://vidsrc.to/embed/movie/155"}]},{id:6,title:"Avatar: The Way of Water",type:"movie",poster:"https://image.tmdb.org/t500/t6HIqrRAclMCA60NsSmeKjPyRm.jpg",backdrop:"https://image.tmdb.org/t500/s16H6vEUm9sE9vCvoq2moudC8qB.jpg",rating:8.2,year:"2022",quality:"4K UHD",genres:["Sci-Fi","Action","Adventure"],overview:"Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri.",trailerKey:"d9MyW72ELq0",servers:[{name:"Server 1 (Trailer)",url:"https://www.youtube.com/embed/d9MyW72ELq0?autoplay=1"},{name:"Server 2 (HD)",url:"https://vidsrc.to/embed/movie/76600"}]}],C=[{id:201,title:"Stranger Things",type:"tv",poster:"https://image.tmdb.org/t500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",backdrop:"https://image.tmdb.org/t500/56v2KjBlU4XaOv9r1kyp7d8Bx67.jpg",rating:8.7,year:"2022",quality:"HD",genres:["Sci-Fi","Horror","Drama"],overview:"When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",trailerKey:"b9EkMc79ZSU",seasons:[{season:1,episodes:[1,2,3,4,5,6,7,8]},{season:2,episodes:[1,2,3,4,5,6,7,8,9]},{season:3,episodes:[1,2,3,4,5,6,7,8]},{season:4,episodes:[1,2,3,4,5,6,7,8,9]}],servers:[{name:"Server 1 (Trailer)",url:"https://www.youtube.com/embed/b9EkMc79ZSU?autoplay=1"},{name:"Server 2 (HD)",url:"https://vidsrc.to/embed/tv/66732"}]},{id:202,title:"The Last of Us",type:"tv",poster:"https://image.tmdb.org/t500/uKvVjHNqB5VmrdD1yKVwYBEA9Z8.jpg",backdrop:"https://image.tmdb.org/t500/9691b1w0W0v4N0w414l6F4e0Fp2.jpg",rating:8.8,year:"2023",quality:"4K UHD",genres:["Drama","Action","Sci-Fi"],overview:"After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanity's last hope.",trailerKey:"uLtkt8BonwM",seasons:[{season:1,episodes:[1,2,3,4,5,6,7,8,9]}],servers:[{name:"Server 1 (Trailer)",url:"https://www.youtube.com/embed/uLtkt8BonwM?autoplay=1"},{name:"Server 2 (HD)",url:"https://vidsrc.to/embed/tv/100088"}]},{id:203,title:"House of the Dragon",type:"tv",poster:"https://image.tmdb.org/t500/1X4h40fcB4WWUmIBK0auT4zRBAV.jpg",backdrop:"https://image.tmdb.org/t500/etj8E2o0Visual.jpg",rating:8.5,year:"2024",quality:"4K UHD",genres:["Action","Drama","Fantasy"],overview:"The Targaryen dynasty is at the absolute apex of its power, with more than 15 dragons under their command.",trailerKey:"DotnJ7tTA34",seasons:[{season:1,episodes:[1,2,3,4,5,6,7,8,9,10]},{season:2,episodes:[1,2,3,4,5,6,7,8]}],servers:[{name:"Server 1 (Trailer)",url:"https://www.youtube.com/embed/DotnJ7tTA34?autoplay=1"},{name:"Server 2 (HD)",url:"https://vidsrc.to/embed/tv/94997"}]},{id:204,title:"Breaking Bad",type:"tv",poster:"https://image.tmdb.org/t500/ztWlU2c65cnSqToj9XBjL223jOo.jpg",backdrop:"https://image.tmdb.org/t500/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg",rating:9.5,year:"2013",quality:"HD",genres:["Crime","Drama","Thriller"],overview:"A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine.",trailerKey:"HhesaQXLuRY",seasons:[{season:1,episodes:[1,2,3,4,5,6,7]},{season:2,episodes:[1,2,3,4,5,6,7,8,9,10,11,12,13]}],servers:[{name:"Server 1 (Trailer)",url:"https://www.youtube.com/embed/HhesaQXLuRY?autoplay=1"},{name:"Server 2 (HD)",url:"https://vidsrc.to/embed/tv/1396"}]}],$=[{id:301,title:"Solo Leveling",type:"anime",poster:"https://image.tmdb.org/t500/geCROc3855a9wc647i565mGvhyB.jpg",backdrop:"https://image.tmdb.org/t500/xOM08GoAFMu4Wor2xR2d4hM1me0.jpg",rating:8.8,year:"2024",quality:"HD",genres:["Anime","Action","Fantasy"],overview:"In a world where hunters, humans who possess magical abilities, must battle deadly monsters to protect the human race from certain annihilation.",trailerKey:"9A04X7vPq1U",seasons:[{season:1,episodes:[1,2,3,4,5,6,7,8,9,10,11,12]}],servers:[{name:"Server 1 (Trailer)",url:"https://www.youtube.com/embed/9A04X7vPq1U?autoplay=1"},{name:"Server 2 (HD)",url:"https://vidsrc.to/embed/tv/214497"}]},{id:302,title:"Attack on Titan",type:"anime",poster:"https://image.tmdb.org/t500/hTP1LToHSwVWYImrWjMzSQWqWC.jpg",backdrop:"https://image.tmdb.org/t500/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg",rating:9.1,year:"2023",quality:"HD",genres:["Anime","Action","Mystery"],overview:"After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans.",trailerKey:"MGRm4IzK1SQ",seasons:[{season:1,episodes:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]},{season:2,episodes:[1,2,3,4,5,6,7,8,9,10,11,12]}],servers:[{name:"Server 1 (Trailer)",url:"https://www.youtube.com/embed/MGRm4IzK1SQ?autoplay=1"},{name:"Server 2 (HD)",url:"https://vidsrc.to/embed/tv/1429"}]},{id:303,title:"Demon Slayer: Kimetsu no Yaiba",type:"anime",poster:"https://image.tmdb.org/t500/xUfVStA1chwsNxBQqjo5Jd2bXds.jpg",backdrop:"https://image.tmdb.org/t500/nMK28FiismUDh85GD9TSuYfZjeB.jpg",rating:8.9,year:"2024",quality:"4K UHD",genres:["Anime","Action","Supernatural"],overview:"A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon herself.",trailerKey:"VQGCKyvzIM4",seasons:[{season:1,episodes:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]},{season:2,episodes:[1,2,3,4,5,6,7,8,9,10,11]}],servers:[{name:"Server 1 (Trailer)",url:"https://www.youtube.com/embed/VQGCKyvzIM4?autoplay=1"},{name:"Server 2 (HD)",url:"https://vidsrc.to/embed/tv/85937"}]},{id:304,title:"Jujutsu Kaisen",type:"anime",poster:"https://image.tmdb.org/t500/h14a6p3B5a3a2p16J5x4vG2m4t9.jpg",backdrop:"https://image.tmdb.org/t500/4XM8DUTQb3lhKWwFi21juCmgvE.jpg",rating:8.6,year:"2023",quality:"HD",genres:["Anime","Action","Supernatural"],overview:"A boy swallows a cursed talisman - the finger of a demon - and becomes cursed himself. He enters a shaman's school to be able to locate the demon's other body parts.",trailerKey:"pkZXnC3LwUQ",seasons:[{season:1,episodes:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]}],servers:[{name:"Server 1 (Trailer)",url:"https://www.youtube.com/embed/pkZXnC3LwUQ?autoplay=1"},{name:"Server 2 (HD)",url:"https://vidsrc.to/embed/tv/95479"}]}];let q=null,K=null,W=null;function x(){return q||I}function B(){return K||C}function T(){return W||$}function k(){const e=x(),t=B(),r=T();return[...e,...t,...r,...H]}function O(e){if(!e||e.trim()==="")return[];const t=e.toLowerCase().trim();return k().filter(r=>r.title.toLowerCase().includes(t)||r.overview&&r.overview.toLowerCase().includes(t)||r.genres&&r.genres.some(a=>a.toLowerCase().includes(t)))}function N(e="all",t="all"){let r=k();return e!=="all"&&(r=r.filter(a=>a.type===e)),t!=="all"&&(r=r.filter(a=>a.genres&&a.genres.some(o=>o.toLowerCase()===t.toLowerCase()))),r}function S(){return"fc6d85b3839330e3458701b975195487"}const X={28:"Action",12:"Adventure",16:"Anime",35:"Comedy",80:"Crime",99:"Documentary",18:"Drama",10751:"Family",14:"Fantasy",36:"History",27:"Horror",10402:"Music",9648:"Mystery",10749:"Romance",878:"Sci-Fi",10770:"TV Movie",53:"Thriller",10752:"War",37:"Western",10759:"Action & Adventure",10762:"Kids",10763:"News",10764:"Reality",10765:"Sci-Fi & Fantasy",10766:"Soap",10767:"Talk",10768:"War & Politics"};function J(e){const t=(e||[]).map(r=>X[r]).filter(Boolean);return t.length>0?t.slice(0,3):["Drama"]}function A(e,t){const r=t==="movie",a=e.id,o=!r&&(e.genre_ids&&e.genre_ids.includes(16)&&e.original_language==="ja"||e.genres&&e.genres.some(d=>d.name==="Animation")&&e.original_language==="ja"),s=r?"movie":o?"anime":"tv",i=e.poster_path?`https://image.tmdb.org/t/p/w500${e.poster_path}`:"https://via.placeholder.com/300x450/15151e/ffffff?text="+encodeURIComponent(e.title||e.name),l=e.backdrop_path?`https://image.tmdb.org/t/p/w1280${e.backdrop_path}`:"https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1025&auto=format&fit=crop",v=r?[{name:"Server 1 (Fast)",url:`https://vidsrc.to/embed/movie/${a}`},{name:"Server 2 (Auto)",url:`https://autoembed.to/movie/tmdb/${a}`}]:[{name:"Server 1 (Fast)",url:`https://vidsrc.to/embed/tv/${a}/1/1`},{name:"Server 2 (Auto)",url:`https://autoembed.to/tv/tmdb/${a}/1/1`}],u=r?[]:[{season:1,episodes:[1,2,3,4,5,6,7,8,9,10,11,12]}];return{id:a,title:e.title||e.name||"Untitled",type:s,poster:i,backdrop:l,rating:e.vote_average?parseFloat(e.vote_average.toFixed(1)):7,year:(e.release_date||e.first_air_date||"2024").substring(0,4),quality:"4K UHD",genres:J(e.genre_ids||[]),overview:e.overview||"No description available.",servers:v,seasons:u,trailerKey:""}}async function U(){const e=S();try{const r=await(await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${e}`)).json();if(r&&r.results){const a=r.results.slice(0,12).map(o=>A(o,"movie"));return q=a,a}}catch(t){console.error("Live trending movies failed",t)}return I}async function F(){const e=S();try{const r=await(await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${e}`)).json();if(r&&r.results){const a=r.results.slice(0,12).map(o=>A(o,"tv"));return K=a,a}}catch(t){console.error("Live popular TV failed",t)}return C}async function V(){const e=S();try{const r=await(await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${e}&with_genres=16&with_original_language=ja&sort_by=popularity.desc`)).json();if(r&&r.results){const a=r.results.slice(0,12).map(o=>A(o,"tv"));return W=a,a}}catch(t){console.error("Live anime failed",t)}return $}async function Y(e){const t=S();try{const a=await(await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${t}&query=${encodeURIComponent(e)}`)).json();if(a&&a.results)return a.results.filter(o=>o.media_type==="movie"||o.media_type==="tv").map(o=>A(o,o.media_type))}catch(r){console.error("Live search failed",r)}return O(e)}function L(e){const t=e.type==="movie",r=e.type==="anime",a=t?"Movie":r?"Anime":"TV Series";return`
    <div class="poster-card" data-id="${e.id}" data-type="${e.type}">
      <div class="poster-image-wrap">
        <img class="poster-image" src="${e.poster}" alt="${e.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/300x450/15151e/ffffff?text=${encodeURIComponent(e.title)}'" />
        <div class="poster-overlay-gradient"></div>
        
        <div class="card-top-badges">
          <span class="type-chip">${a}</span>
          <span class="rating-chip">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="12" width="12">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
            </svg>
            ${e.rating}
          </span>
        </div>
      </div>

      <div class="card-content-info">
        <h3 class="card-title" title="${e.title}">${e.title}</h3>
        <div class="card-meta-row">
          <span>${e.year}</span>
          <span>${e.quality||"HD"}</span>
        </div>
      </div>
    </div>
  `}function Q(e,t,r,a){const o=`
    <div class="category-filter-section">
      <div class="genre-scroll-bar">
        <button type="button" class="genre-pill ${r==="all"?"active":""}" data-genre="all">
          🔥 All Categories
        </button>
        ${t.map(s=>`
          <button type="button" class="genre-pill ${r===s?"active":""}" data-genre="${s}">
            ${s}
          </button>
        `).join("")}
      </div>
    </div>
  `;e.innerHTML=o,e.querySelectorAll(".genre-pill").forEach(s=>{s.addEventListener("click",()=>{const i=s.getAttribute("data-genre");a(i)})})}function Z(e,t,r,a){if(!r||r.length===0)return;const o=`
    <section class="media-section">
      <div class="section-header">
        <h2 class="section-title">
          <span class="title-accent"></span>
          <span>${t}</span>
        </h2>
      </div>

      <div class="media-grid">
        ${r.map(i=>L(i)).join("")}
      </div>
    </section>
  `;e.insertAdjacentHTML("beforeend",o),e.querySelectorAll(".poster-card").forEach(i=>{i.addEventListener("click",()=>{const l=i.getAttribute("data-id"),v=r.find(u=>u.id==l)||k().find(u=>u.id==l);v&&a(v)})})}function E(e,t,r,a,o,s){if(!r||r.length===0)return;let i=1,l=!1;const u=`
    <section class="media-section" id="${`section-${a}`}">
      <div class="section-header">
        <h2 class="section-title">
          <span class="title-accent"></span>
          <span>${t}</span>
        </h2>
      </div>

      <div class="media-carousel" id="carousel-${a}">
        ${r.map(h=>L(h)).join("")}
      </div>
    </section>
  `;e.insertAdjacentHTML("beforeend",u);const d=document.getElementById(`carousel-${a}`);function g(h){h.querySelectorAll(".poster-card").forEach(m=>{m.dataset.bound||(m.dataset.bound="true",m.addEventListener("click",()=>{const p=m.getAttribute("data-id"),c=k().find(y=>y.id==p);c&&s(c)}))})}g(d),d.addEventListener("scroll",async()=>{var h,m;if(!l&&d.scrollLeft+d.clientWidth>=d.scrollWidth-350){l=!0,i++;const p=`loader-${a}-${i}`;d.insertAdjacentHTML("beforeend",`
        <div class="poster-card spinner-card" id="${p}" style="display:flex; align-items:center; justify-content:center; flex: 0 0 170px; width: 170px; height: 250px; background:var(--bg-card); border:1px dashed var(--border-light);">
          <div style="border: 3px solid rgba(255,255,255,0.1); border-top-color: var(--color-neon-cyan); border-radius: 50%; width: 28px; height: 28px; animation: spin 0.8s linear infinite;"></div>
        </div>
      `);try{const n=await o(i);if((h=document.getElementById(p))==null||h.remove(),n&&n.length>0){const c=n.map(y=>L(y)).join("");d.insertAdjacentHTML("beforeend",c),g(d)}}catch(n){console.error("Load more carousel failed",n),(m=document.getElementById(p))==null||m.remove()}finally{l=!1}}})}function ee(e,t,r,a){let o=0,s=0,i=1;const l=(t.type==="tv"||t.type==="anime")&&t.seasons&&t.seasons.length>0;function v(){return t.servers&&t.servers[o]?t.servers[o].url:`https://www.youtube.com/embed/${t.trailerKey||"Way9Dexny3w"}?autoplay=1`}function u(){return`
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
              src="${v()}" 
              title="${t.title}"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen>
            </iframe>
          </div>

          <!-- Video Controls & Server Selector -->
          <div class="player-controls-bar">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;">
              <div>
                <h2 style="font-size:1.3rem; font-weight:800; color:#fff;">${t.title}</h2>
                <div style="display:flex; align-items:center; gap:0.75rem; font-size:0.85rem; color:var(--text-muted); margin-top:0.25rem;">
                  <span>${t.year}</span>
                  <span>•</span>
                  <span style="color:#ffc107; font-weight:700;">★ ${t.rating}</span>
                  <span>•</span>
                  <span>${t.genres?t.genres.join(", "):""}</span>
                </div>
              </div>

              <!-- Add to Watchlist Action -->
              <button type="button" class="btn-secondary-info" id="modalWatchlistBtn" style="height:42px; padding:0 1.25rem; font-size:0.9rem;">
                <svg stroke="currentColor" fill="${a?"#00f2fe":"none"}" stroke-width="2" viewBox="0 0 24 24" height="18" width="18">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                </svg>
                <span>${a?"Saved":"+ Watchlist"}</span>
              </button>
            </div>

            <!-- Server Selector Pills -->
            <div class="server-selector-row">
              <span style="font-size:0.85rem; font-weight:700; color:var(--text-muted);">SELECT SERVER:</span>
              ${(t.servers||[{name:"Server 1 (Trailer)",url:v()}]).map((n,c)=>`
                <button type="button" class="server-btn ${c===o?"active":""}" data-index="${c}">
                  ${n.name}
                </button>
              `).join("")}
            </div>

            <p style="font-size:0.9rem; color:var(--text-muted); line-height:1.6;">${t.overview}</p>
          </div>

          <!-- Season & Episode Selector (For TV Series / Anime) -->
          ${l?`
            <div class="episodes-section">
              <div style="display:flex; align-items:center; gap:0.75rem; overflow-x:auto;">
                ${t.seasons.map((n,c)=>`
                  <button type="button" class="server-btn season-tab ${c===s?"active":""}" data-season-idx="${c}">
                    Season ${n.season}
                  </button>
                `).join("")}
              </div>

              <div class="episodes-grid" id="episodesGrid">
                ${t.seasons[s].episodes.map(n=>`
                  <button type="button" class="episode-btn ${n===i?"active":""}" data-ep="${n}">
                    Episode ${n}
                  </button>
                `).join("")}
              </div>
            </div>
          `:""}
        </div>
      </div>
    `}e.innerHTML=u();const d=document.getElementById("playerModalBackdrop"),g=document.getElementById("closePlayerModalBtn"),h=document.getElementById("videoIframe"),m=document.getElementById("modalWatchlistBtn");function p(){d.classList.remove("active"),setTimeout(()=>{e.innerHTML=""},300)}g.addEventListener("click",p),d.addEventListener("click",n=>{n.target===d&&p()}),e.querySelectorAll(".server-btn:not(.season-tab)").forEach(n=>{n.addEventListener("click",()=>{const c=parseInt(n.getAttribute("data-index"),10);o=c,e.querySelectorAll(".server-btn:not(.season-tab)").forEach(y=>y.classList.remove("active")),n.classList.add("active"),t.servers&&t.servers[c]&&(h.src=t.servers[c].url)})}),e.querySelectorAll(".season-tab").forEach(n=>{n.addEventListener("click",()=>{const c=parseInt(n.getAttribute("data-season-idx"),10);s=c,e.querySelectorAll(".season-tab").forEach(w=>w.classList.remove("active")),n.classList.add("active");const y=document.getElementById("episodesGrid");y&&t.seasons[c]&&(y.innerHTML=t.seasons[c].episodes.map(w=>`
          <button type="button" class="episode-btn ${w===i?"active":""}" data-ep="${w}">
            Episode ${w}
          </button>
        `).join(""),y.querySelectorAll(".episode-btn").forEach(w=>{w.addEventListener("click",()=>{y.querySelectorAll(".episode-btn").forEach(_=>_.classList.remove("active")),w.classList.add("active")})}))})}),m==null||m.addEventListener("click",()=>{r(t);const n=!a;a=n,m.querySelector("span").textContent=n?"Saved":"+ Watchlist",m.querySelector("svg path")&&m.querySelector("svg").setAttribute("fill",n?"#00f2fe":"none")})}function te(e,t){const r=`
    <div class="modal-backdrop active" id="searchModalBackdrop">
      <div class="modal-content-box search-modal-container">
        <!-- Search Input Header -->
        <div class="search-input-header">
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" height="22" width="22" style="color:var(--color-neon-cyan); flex-shrink:0;">
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
  `;e.innerHTML=r;const a=document.getElementById("searchModalBackdrop"),o=document.getElementById("closeSearchModalBtn"),s=document.getElementById("modalSearchInput"),i=document.getElementById("searchResultsArea");let l="all";function v(){a.classList.remove("active"),setTimeout(()=>{e.innerHTML=""},300)}o.addEventListener("click",v),a.addEventListener("click",d=>{d.target===a&&v()}),s.focus();async function u(){const d=s.value.trim();let g=[];if(d?g=await Y(d):g=k().slice(0,12),l!=="all"&&(g=g.filter(h=>h.type===l)),g.length===0){i.innerHTML=`
        <div style="text-align:center; padding:3rem 1rem; color:var(--text-muted);">
          <p style="font-size:1.1rem; color:#fff; font-weight:700;">No results found</p>
          <p style="font-size:0.9rem; margin-top:0.5rem;">Try searching for a different movie title or genre.</p>
        </div>
      `;return}i.innerHTML=`
      <div class="media-grid">
        ${g.map(h=>L(h)).join("")}
      </div>
    `,i.querySelectorAll(".poster-card").forEach(h=>{h.addEventListener("click",()=>{const m=h.getAttribute("data-id"),p=g.find(n=>n.id==m)||k().find(n=>n.id==m);p&&(v(),t(p))})})}s.addEventListener("input",u),e.querySelectorAll(".search-type-pill").forEach(d=>{d.addEventListener("click",()=>{e.querySelectorAll(".search-type-pill").forEach(g=>g.classList.remove("active")),d.classList.add("active"),l=d.getAttribute("data-type"),u()})}),u()}const z="neonflix_watchlist_v1";function D(){try{const e=localStorage.getItem(z);return e?JSON.parse(e):[]}catch{return[]}}function re(e){return D().some(r=>r.id==e)}function ae(e){let t=D();const r=t.some(a=>a.id==e.id);return r?t=t.filter(a=>a.id!=e.id):t.unshift(e),localStorage.setItem(z,JSON.stringify(t)),!r}function P(e,t){const r=D();if(r.length===0){e.innerHTML=`
      <section class="media-section" style="min-height: 60vh; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center;">
        <div style="width:80px; height:80px; border-radius:50%; background:rgba(0,242,254,0.1); border:1px solid var(--color-neon-cyan); display:flex; align-items:center; justify-content:center; margin-bottom:1.5rem; color:var(--color-neon-cyan);">
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" height="40" width="40">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
          </svg>
        </div>
        <h2 style="font-size:1.8rem; font-weight:800; margin-bottom:0.5rem;" class="gradient-text">Your Watchlist is Empty</h2>
        <p style="color:var(--text-muted); max-width:420px; margin-bottom:1.5rem;">Explore our vast collection of movies, TV series, and anime. Click "+ Watchlist" to save your favorite titles here.</p>
      </section>
    `;return}const a=`
    <section class="media-section">
      <div class="section-header">
        <h2 class="section-title">
          <span class="title-accent"></span>
          <span>My Saved Watchlist (${r.length})</span>
        </h2>
      </div>

      <div class="media-grid">
        ${r.map(o=>L(o)).join("")}
      </div>
    </section>
  `;e.innerHTML=a,e.querySelectorAll(".poster-card").forEach(o=>{o.addEventListener("click",()=>{const s=o.getAttribute("data-id"),i=r.find(l=>l.id==s);i&&t(i)})})}let b="home",M="all";const oe=["Action","Sci-Fi","Drama","Adventure","Anime","Comedy","Horror","Fantasy","Crime"];function f(e){const t=document.getElementById("playerModalContainer"),r=re(e.id);ee(t,e,a=>{ae(a),b==="watchlist"&&P(document.getElementById("mainContent"),f)},r)}function se(){const e=document.getElementById("searchModalContainer");te(e,f)}function j(){const e=document.getElementById("mainContent");if(e.innerHTML="",b==="watchlist"){P(e,f),window.scrollTo({top:0,behavior:"smooth"});return}const t=document.createElement("div");t.id="heroWrapper",e.appendChild(t);const r=b==="movie"?x():b==="tv"?B():b==="anime"?T():H;G(t,r,f,f);const a=document.createElement("div");a.id="genreWrapper",e.appendChild(a),Q(a,oe,M,s=>{M=s,j()});const o=N(b==="home"?"all":b,M);if(b==="home"&&M==="all")E(e,"🔥 Trending Movies",x().slice(0,12),"movie",U,f),E(e,"📺 Popular TV Series",B().slice(0,12),"tv",F,f),E(e,"⚡ Latest Anime Releases",T().slice(0,12),"anime",V,f);else{const s={home:`Results (${o.length})`,movie:`Movies (${o.length})`,tv:`TV Series (${o.length})`,anime:`Anime (${o.length})`};Z(e,s[b],o,f)}window.scrollTo({top:0,behavior:"smooth"})}async function ne(){await Promise.all([U(),F(),V()])}function ie(){const e=document.getElementById("headerApp");R(e,r=>{b=r,M="all",j()},se),ne().then(()=>{j()});const t=document.getElementById("scrollTopBtn");window.addEventListener("scroll",()=>{window.scrollY>300?t==null||t.classList.add("visible"):t==null||t.classList.remove("visible")}),t==null||t.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})})}document.addEventListener("DOMContentLoaded",ie);
