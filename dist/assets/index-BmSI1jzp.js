(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(r){if(r.ep)return;r.ep=!0;const i=o(r);fetch(r.href,i)}})();function ie(e,t,o){const a=`
    <header class="site-header" id="siteHeader">
      <!-- Left: Brand Logo -->
      <div class="logo-container">
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

      <!-- Right: User Profile -->
      <div class="header-right-actions">
        <button type="button" class="icon-circle-btn" id="profileBtn" aria-label="User Profile">
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" height="22" width="22">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          </svg>
        </button>
      </div>
    </header>

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
  `;e.innerHTML=a;const r=document.getElementById("headerSearchBtn"),i=document.getElementById("mobileSearchBtn"),s=document.getElementById("logoBtn");r==null||r.addEventListener("click",o),i==null||i.addEventListener("click",o),s==null||s.addEventListener("click",l=>{l.preventDefault(),t("home")}),document.querySelectorAll(".nav-tab-btn").forEach(l=>{l.addEventListener("click",()=>{const u=l.getAttribute("data-tab");u&&(document.querySelectorAll(".nav-tab-btn").forEach(c=>{c.classList.toggle("active",c.getAttribute("data-tab")===u)}),t(u))})}),window.addEventListener("scroll",()=>{const l=document.getElementById("siteHeader");window.scrollY>40?l==null||l.classList.add("scrolled"):l==null||l.classList.remove("scrolled")})}function se(e,t,o,a){if(!t||t.length===0)return;const r=t.slice(0,6);let i=0,s=null;function p(v){const y=v.type==="movie",k=v.type==="anime",d=y?"Movie":k?"Anime":"TV Series";return`
      <section class="hero-slider-section" id="heroSection">
        <!-- Backdrop Banner Image -->
        <div class="hero-backdrop" id="heroBackdrop" style="background-image: url('${v.backdrop}')"></div>
        
        <!-- Gradient Grayscale Overlays -->
        <div class="hero-overlay"></div>

        <!-- Featured Media Info -->
        <div class="hero-content-container">
          <div class="hero-badge-row">
            <span class="badge-tag badge-neon">#${i+1} Featured</span>
            <span class="badge-tag badge-quality">${d}</span>
            <span class="badge-tag badge-rating">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="14" width="14">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
              </svg>
              ${v.rating}
            </span>
            <span class="badge-tag badge-quality">${v.year}</span>
          </div>

          <h1 class="hero-title">${v.title}</h1>
          
          <p class="hero-overview">${v.overview}</p>

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
          ${r.map((g,m)=>`
            <span class="indicator-dot ${m===i?"active":""}" data-index="${m}"></span>
          `).join("")}
        </div>
      </section>
    `}function l(){i=(i+1)%r.length,c(),f()}function u(){i=(i-1+r.length)%r.length,c(),f()}function c(){var k,d,g,m;const v=r[i];e.innerHTML=p(v),(k=document.getElementById("heroPlayBtn"))==null||k.addEventListener("click",()=>{o(v)}),(d=document.getElementById("heroInfoBtn"))==null||d.addEventListener("click",()=>{a(v)}),(g=document.getElementById("heroLeftBtn"))==null||g.addEventListener("click",u),(m=document.getElementById("heroRightBtn"))==null||m.addEventListener("click",l),e.querySelectorAll(".indicator-dot").forEach(h=>{h.addEventListener("click",()=>{i=parseInt(h.getAttribute("data-index"),10),c(),f()})});const y=document.getElementById("heroSection");if(y){let h=0,b=0;y.addEventListener("touchstart",M=>{h=M.changedTouches[0].screenX},{passive:!0}),y.addEventListener("touchend",M=>{b=M.changedTouches[0].screenX;const B=55;h-b>B?l():b-h>B&&u()},{passive:!0})}}function n(){s=setInterval(()=>{i=(i+1)%r.length,c()},7e3)}function f(){s&&(clearInterval(s),n())}c(),n()}const X=[{id:101,title:"Dune: Part Two",original_title:"Dune: Part Two",type:"movie",poster:"https://image.tmdb.org/t/p/w500/6izwz7rsy95ARzTR3poZ8H6c5pp.jpg",backdrop:"https://image.tmdb.org/t/p/w1280/eZ239CUp1d6OryZEBPnO2n87gMG.jpg",rating:8.6,year:"2024",quality:"4K UHD",duration:"2h 46m",genres:["Sci-Fi","Adventure","Action"],overview:"Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the universe.",trailerKey:"Way9Dexny3w",cast:["Timothée Chalamet","Zendaya","Rebecca Ferguson","Javier Bardem"],servers:[{name:"Server 1 (Fast)",url:"https://www.youtube.com/embed/Way9Dexny3w?autoplay=1"},{name:"Server 2 (HD)",url:"https://vidsrc.to/embed/movie/693134"},{name:"Server 3 (Ultra)",url:"https://autoembed.to/movie/tmdb/693134"}]},{id:102,title:"Arcane: Season 2",original_title:"Arcane",type:"tv",poster:"https://image.tmdb.org/t/p/w500/fqldf2t8ztc9aiwn3k6mlX3tvRT.jpg",backdrop:"https://image.tmdb.org/t/p/w1280/q8eejQcg1bAqImEV8jh8RtBD4uH.jpg",rating:9,year:"2024",quality:"4K UHD",duration:"9 Episodes",genres:["Animation","Sci-Fi","Action"],overview:"Amid the escalating tensions between the utopian city of Piltover and the oppressed underground city of Zaun, sisters Vi and Jinx find themselves on opposing sides of a war.",trailerKey:"fXmAurh012s",cast:["Hailee Steinfeld","Ella Purnell","Katie Leung"],servers:[{name:"Server 1 (Fast)",url:"https://www.youtube.com/embed/fXmAurh012s?autoplay=1"},{name:"Server 2 (HD)",url:"https://vidsrc.to/embed/tv/94605"}]}],Q=[{id:1,title:"Deadpool & Wolverine",type:"movie",poster:"https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",backdrop:"https://image.tmdb.org/t/p/w500/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg",rating:8.4,year:"2024",quality:"4K UHD",genres:["Action","Comedy","Sci-Fi"],overview:"Wolverine is recovering from his injuries when he crosses paths with the loudmouth Deadpool. They team up to defeat a common enemy.",trailerKey:"73_1biulkYk",servers:[{name:"Server 1 (Trailer)",url:"https://www.youtube.com/embed/73_1biulkYk?autoplay=1"},{name:"Server 2 (HD)",url:"https://vidsrc.to/embed/movie/533535"}]},{id:2,title:"Oppenheimer",type:"movie",poster:"https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",backdrop:"https://image.tmdb.org/t/p/w500/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",rating:8.9,year:"2023",quality:"4K UHD",genres:["Drama","History","Biography"],overview:"The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",trailerKey:"uYPbbksJxIg",servers:[{name:"Server 1 (Trailer)",url:"https://www.youtube.com/embed/uYPbbksJxIg?autoplay=1"},{name:"Server 2 (HD)",url:"https://vidsrc.to/embed/movie/872585"}]},{id:3,title:"Interstellar",type:"movie",poster:"https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",backdrop:"https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo6LEuPJflrHJ.jpg",rating:8.7,year:"2014",quality:"4K UHD",genres:["Sci-Fi","Adventure","Drama"],overview:"A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",trailerKey:"zSWdZVtXT7E",servers:[{name:"Server 1 (Trailer)",url:"https://www.youtube.com/embed/zSWdZVtXT7E?autoplay=1"},{name:"Server 2 (HD)",url:"https://vidsrc.to/embed/movie/157336"}]},{id:4,title:"Spider-Man: Across the Spider-Verse",type:"movie",poster:"https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",backdrop:"https://image.tmdb.org/t/p/w500/4XM8DUTQb3lhKWwFi21juCmgvE.jpg",rating:8.8,year:"2023",quality:"4K UHD",genres:["Animation","Action","Adventure"],overview:"Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence.",trailerKey:"cqGjhVJWtEg",servers:[{name:"Server 1 (Trailer)",url:"https://www.youtube.com/embed/cqGjhVJWtEg?autoplay=1"},{name:"Server 2 (HD)",url:"https://vidsrc.to/embed/movie/569094"}]},{id:5,title:"The Dark Knight",type:"movie",poster:"https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",backdrop:"https://image.tmdb.org/t/p/w500/nMK28FiismUDh85GD9TSuYfZjeB.jpg",rating:9,year:"2008",quality:"4K UHD",genres:["Action","Crime","Drama"],overview:"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological tests.",trailerKey:"EXeTwQWrcwY",servers:[{name:"Server 1 (Trailer)",url:"https://www.youtube.com/embed/EXeTwQWrcwY?autoplay=1"},{name:"Server 2 (HD)",url:"https://vidsrc.to/embed/movie/155"}]},{id:6,title:"Avatar: The Way of Water",type:"movie",poster:"https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeKjPyRm.jpg",backdrop:"https://image.tmdb.org/t/p/w500/s16H6vEUm9sE9vCvoq2moudC8qB.jpg",rating:8.2,year:"2022",quality:"4K UHD",genres:["Sci-Fi","Action","Adventure"],overview:"Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri.",trailerKey:"d9MyW72ELq0",servers:[{name:"Server 1 (Trailer)",url:"https://www.youtube.com/embed/d9MyW72ELq0?autoplay=1"},{name:"Server 2 (HD)",url:"https://vidsrc.to/embed/movie/76600"}]}],Z=[{id:201,title:"Stranger Things",type:"tv",poster:"https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",backdrop:"https://image.tmdb.org/t/p/w500/56v2KjBlU4XaOv9r1kyp7d8Bx67.jpg",rating:8.7,year:"2022",quality:"HD",genres:["Sci-Fi","Horror","Drama"],overview:"When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",trailerKey:"b9EkMc79ZSU",seasons:[{season:1,episodes:[1,2,3,4,5,6,7,8]},{season:2,episodes:[1,2,3,4,5,6,7,8,9]},{season:3,episodes:[1,2,3,4,5,6,7,8]},{season:4,episodes:[1,2,3,4,5,6,7,8,9]}],servers:[{name:"Server 1 (Trailer)",url:"https://www.youtube.com/embed/b9EkMc79ZSU?autoplay=1"},{name:"Server 2 (HD)",url:"https://vidsrc.to/embed/tv/66732"}]},{id:202,title:"The Last of Us",type:"tv",poster:"https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmrdD1yKVwYBEA9Z8.jpg",backdrop:"https://image.tmdb.org/t/p/w500/9691b1w0W0v4N0w414l6F4e0Fp2.jpg",rating:8.8,year:"2023",quality:"4K UHD",genres:["Drama","Action","Sci-Fi"],overview:"After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanity's last hope.",trailerKey:"uLtkt8BonwM",seasons:[{season:1,episodes:[1,2,3,4,5,6,7,8,9]}],servers:[{name:"Server 1 (Trailer)",url:"https://www.youtube.com/embed/uLtkt8BonwM?autoplay=1"},{name:"Server 2 (HD)",url:"https://vidsrc.to/embed/tv/100088"}]},{id:203,title:"House of the Dragon",type:"tv",poster:"https://image.tmdb.org/t/p/w500/1X4h40fcB4WWUmIBK0auT4zRBAV.jpg",backdrop:"https://image.tmdb.org/t/p/w500/etj8E2o0Visual.jpg",rating:8.5,year:"2024",quality:"4K UHD",genres:["Action","Drama","Fantasy"],overview:"The Targaryen dynasty is at the absolute apex of its power, with more than 15 dragons under their command.",trailerKey:"DotnJ7tTA34",seasons:[{season:1,episodes:[1,2,3,4,5,6,7,8,9,10]},{season:2,episodes:[1,2,3,4,5,6,7,8]}],servers:[{name:"Server 1 (Trailer)",url:"https://www.youtube.com/embed/DotnJ7tTA34?autoplay=1"},{name:"Server 2 (HD)",url:"https://vidsrc.to/embed/tv/94997"}]},{id:204,title:"Breaking Bad",type:"tv",poster:"https://image.tmdb.org/t/p/w500/ztWlU2c65cnSqToj9XBjL223jOo.jpg",backdrop:"https://image.tmdb.org/t/p/w500/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg",rating:9.5,year:"2013",quality:"HD",genres:["Crime","Drama","Thriller"],overview:"A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine.",trailerKey:"HhesaQXLuRY",seasons:[{season:1,episodes:[1,2,3,4,5,6,7]},{season:2,episodes:[1,2,3,4,5,6,7,8,9,10,11,12,13]}],servers:[{name:"Server 1 (Trailer)",url:"https://www.youtube.com/embed/HhesaQXLuRY?autoplay=1"},{name:"Server 2 (HD)",url:"https://vidsrc.to/embed/tv/1396"}]}],ee=[{id:301,title:"Solo Leveling",type:"anime",poster:"https://image.tmdb.org/t/p/w500/geCROc3855a9wc647i565mGvhyB.jpg",backdrop:"https://image.tmdb.org/t/p/w500/xOM08GoAFMu4Wor2xR2d4hM1me0.jpg",rating:8.8,year:"2024",quality:"HD",genres:["Anime","Action","Fantasy"],overview:"In a world where hunters, humans who possess magical abilities, must battle deadly monsters to protect the human race from certain annihilation.",trailerKey:"9A04X7vPq1U",seasons:[{season:1,episodes:[1,2,3,4,5,6,7,8,9,10,11,12]}],servers:[{name:"Server 1 (Trailer)",url:"https://www.youtube.com/embed/9A04X7vPq1U?autoplay=1"},{name:"Server 2 (HD)",url:"https://vidsrc.to/embed/tv/214497"}]},{id:302,title:"Attack on Titan",type:"anime",poster:"https://image.tmdb.org/t/p/w500/hTP1LToHSwVWYImrWjMzSQWqWC.jpg",backdrop:"https://image.tmdb.org/t/p/w500/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg",rating:9.1,year:"2023",quality:"HD",genres:["Anime","Action","Mystery"],overview:"After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans.",trailerKey:"MGRm4IzK1SQ",seasons:[{season:1,episodes:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]},{season:2,episodes:[1,2,3,4,5,6,7,8,9,10,11,12]}],servers:[{name:"Server 1 (Trailer)",url:"https://www.youtube.com/embed/MGRm4IzK1SQ?autoplay=1"},{name:"Server 2 (HD)",url:"https://vidsrc.to/embed/tv/1429"}]},{id:303,title:"Demon Slayer: Kimetsu no Yaiba",type:"anime",poster:"https://image.tmdb.org/t/p/w500/xUfVStA1chwsNxBQqjo5Jd2bXds.jpg",backdrop:"https://image.tmdb.org/t/p/w500/nMK28FiismUDh85GD9TSuYfZjeB.jpg",rating:8.9,year:"2024",quality:"4K UHD",genres:["Anime","Action","Supernatural"],overview:"A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon herself.",trailerKey:"VQGCKyvzIM4",seasons:[{season:1,episodes:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]},{season:2,episodes:[1,2,3,4,5,6,7,8,9,10,11]}],servers:[{name:"Server 1 (Trailer)",url:"https://www.youtube.com/embed/VQGCKyvzIM4?autoplay=1"},{name:"Server 2 (HD)",url:"https://vidsrc.to/embed/tv/85937"}]},{id:304,title:"Jujutsu Kaisen",type:"anime",poster:"https://image.tmdb.org/t/p/w500/h14a6p3B5a3a2p16J5x4vG2m4t9.jpg",backdrop:"https://image.tmdb.org/t/p/w500/4XM8DUTQb3lhKWwFi21juCmgvE.jpg",rating:8.6,year:"2023",quality:"HD",genres:["Anime","Action","Supernatural"],overview:"A boy swallows a cursed talisman - the finger of a demon - and becomes cursed himself. He enters a shaman's school to be able to locate the demon's other body parts.",trailerKey:"pkZXnC3LwUQ",seasons:[{season:1,episodes:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]}],servers:[{name:"Server 1 (Trailer)",url:"https://www.youtube.com/embed/pkZXnC3LwUQ?autoplay=1"},{name:"Server 2 (HD)",url:"https://vidsrc.to/embed/tv/95479"}]}];function N(e,t=null){try{const o=localStorage.getItem(e);if(o)return JSON.parse(o)}catch{}return t}function O(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch{}}let W=N("neonflix_movies",null),R=N("neonflix_tv",null),F=N("neonflix_anime",null),U=N("neonflix_korean",null);function j(){return W||Q}function z(){return R||Z}function P(){return F||ee}function V(){return U||[]}function $(){const e=j(),t=z(),o=P(),a=V();return[...e,...t,...o,...a,...X]}function ne(e){if(!e||e.trim()==="")return[];const t=e.toLowerCase().trim();return $().filter(o=>o.title.toLowerCase().includes(t)||o.overview&&o.overview.toLowerCase().includes(t)||o.genres&&o.genres.some(a=>a.toLowerCase().includes(t)))}function le(e="all",t="all"){let o=$();if(e!=="all"&&(o=o.filter(a=>a.type===e)),t!=="all"){const a=t.toLowerCase().trim();if(a==="korean"||a==="k-drama"){const r=V(),i=o.filter(s=>s.genres&&s.genres.some(p=>p.toLowerCase()==="korean"));o=i.length>0?i:r.length>0?r:o}else o=o.filter(r=>r.genres&&r.genres.some(i=>i.toLowerCase()===a))}return o.sort((a,r)=>(r.rating||0)-(a.rating||0))}function T(){return"fc6d85b3839330e3458701b975195487"}const te={28:"Action",12:"Adventure",16:"Anime",35:"Comedy",80:"Crime",99:"Documentary",18:"Drama",10751:"Family",14:"Fantasy",36:"History",27:"Horror",10402:"Music",9648:"Mystery",10749:"Romance",878:"Sci-Fi",10770:"TV Movie",53:"Thriller",10752:"War",37:"Western",10759:"Action & Adventure",10762:"Kids",10763:"News",10764:"Reality",10765:"Sci-Fi & Fantasy",10766:"Soap",10767:"Talk",10768:"War & Politics"},de={hi:"Hindi",en:"English",pa:"Punjabi",ko:"Korean",ja:"Japanese",ta:"Tamil",te:"Telugu",ur:"Urdu",es:"Spanish",fr:"French",de:"German",zh:"Chinese",cn:"Chinese"};function ce(e){if(!e)return"Hindi";const t=e.toLowerCase().trim();return de[t]||t.charAt(0).toUpperCase()+t.slice(1)}function pe(e){const t=(e||[]).map(o=>te[o]).filter(Boolean);return t.length>0?t.slice(0,3):["Drama"]}function E(e,t){const o=t==="movie",a=e.id,r=!o&&(e.genre_ids&&e.genre_ids.includes(16)&&e.original_language==="ja"||e.genres&&e.genres.some(n=>n.name==="Animation")&&e.original_language==="ja"),i=o?"movie":r?"anime":"tv",s=e.poster_path?`https://image.tmdb.org/t/p/w500${e.poster_path}`:"https://via.placeholder.com/300x450/15151e/ffffff?text="+encodeURIComponent(e.title||e.name),p=e.backdrop_path?`https://image.tmdb.org/t/p/w1280${e.backdrop_path}`:"https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1025&auto=format&fit=crop",l=o?[{name:"Server 1 (Fast)",url:`https://vidsrc.to/embed/movie/${a}`},{name:"Server 2 (Auto)",url:`https://autoembed.to/movie/tmdb/${a}`}]:[{name:"Server 1 (Fast)",url:`https://vidsrc.to/embed/tv/${a}/1/1`},{name:"Server 2 (Auto)",url:`https://autoembed.to/tv/tmdb/${a}/1/1`}],u=o?[]:[{season:1,episodes:[1,2,3,4,5,6,7,8,9,10,11,12]}],c=ce(e.original_language);return{id:a,title:e.title||e.name||"Untitled",type:i,poster:s,backdrop:p,rating:e.vote_average?parseFloat(e.vote_average.toFixed(1)):7,year:(e.release_date||e.first_air_date||"2024").substring(0,4),quality:c,language:c,genres:(()=>{const n=pe(e.genre_ids||[]);return e.original_language==="ko"&&!n.includes("Korean")&&n.unshift("Korean"),n})(),overview:e.overview||"No description available.",servers:l,seasons:u,trailerKey:""}}async function C(e=1){const t=T();try{const a=await(await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${t}&page=${e}`)).json();if(a&&a.results){const r=a.results.map(i=>E(i,"movie"));return e===1?(W=r,O("neonflix_movies",r)):W=[...W||[],...r],r}}catch(o){console.error("Live trending movies failed",o)}return Q}async function H(e=1){const t=T();try{const a=await(await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${t}&page=${e}`)).json();if(a&&a.results){const r=a.results.map(i=>E(i,"tv"));return e===1?(R=r,O("neonflix_tv",r)):R=[...R||[],...r],r}}catch(o){console.error("Live popular TV failed",o)}return Z}async function D(e=1){const t=T();try{const a=await(await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${t}&with_genres=16&with_original_language=ja&sort_by=popularity.desc&page=${e}`)).json();if(a&&a.results){const r=a.results.map(i=>E(i,"tv"));return e===1?(F=r,O("neonflix_anime",r)):F=[...F||[],...r],r}}catch(o){console.error("Live anime failed",o)}return ee}async function G(e=1){const t=T();try{const a=await(await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${t}&with_original_language=ko&sort_by=popularity.desc&page=${e}`)).json();if(a&&a.results){const r=a.results.map(i=>E(i,"tv"));return e===1?(U=r,O("neonflix_korean",r)):U=[...U||[],...r],r}}catch(o){console.error("Live Korean media failed",o)}return[]}async function ue(e){const t=T();try{const a=await(await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${t}&query=${encodeURIComponent(e)}`)).json();if(a&&a.results)return a.results.filter(r=>r.media_type==="movie"||r.media_type==="tv").map(r=>E(r,r.media_type))}catch(o){console.error("Live search failed",o)}return ne(e)}function ve(e){const t=e.toLowerCase().trim();if(t==="anime")return 16;if(t==="korean"||t==="k-drama")return"ko";for(const[o,a]of Object.entries(te))if(a.toLowerCase()===t)return parseInt(o,10);return null}async function re(e,t,o=1){const a=T(),r=ve(t);if(!r&&t.toLowerCase()!=="all")return[];try{let i="",s="movie";if(r==="ko"||t.toLowerCase()==="korean")s="tv",i=`https://api.themoviedb.org/3/discover/tv?api_key=${a}&with_original_language=ko&sort_by=popularity.desc&page=${o}`;else if(e==="movie")s="movie",i=`https://api.themoviedb.org/3/discover/movie?api_key=${a}&sort_by=popularity.desc&page=${o}`,r&&(i+=`&with_genres=${r}`);else if(e==="tv")s="tv",i=`https://api.themoviedb.org/3/discover/tv?api_key=${a}&sort_by=popularity.desc&page=${o}`,r&&(i+=`&with_genres=${r}`);else if(e==="anime")s="tv",i=`https://api.themoviedb.org/3/discover/tv?api_key=${a}&with_genres=16&with_original_language=ja&sort_by=popularity.desc&page=${o}`;else{const u=typeof r=="number",[c,n]=await Promise.all([fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${a}&sort_by=popularity.desc&page=${o}${u?`&with_genres=${r}`:""}`).then(d=>d.json()),fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${a}&sort_by=popularity.desc&page=${o}${u?`&with_genres=${r}`:""}`).then(d=>d.json())]),f=(c.results||[]).map(d=>E(d,"movie")),v=(n.results||[]).map(d=>E(d,"tv")),y=[],k=Math.max(f.length,v.length);for(let d=0;d<k;d++)d<f.length&&y.push(f[d]),d<v.length&&y.push(v[d]);return y}const l=await(await fetch(i)).json();if(l&&l.results)return l.results.map(u=>E(u,s))}catch(i){console.error(`Discover genre ${t} failed`,i)}return[]}async function he(e,t="movie"){const o=T();if(!e)return null;const a=t==="movie"?"movie":"tv";try{const i=await(await fetch(`https://api.themoviedb.org/3/${a}/${e}/videos?api_key=${o}`)).json();if(i&&i.results&&i.results.length>0){const s=i.results.find(p=>p.site==="YouTube"&&p.type==="Trailer")||i.results.find(p=>p.site==="YouTube");if(s)return s.key}}catch(r){console.error("Fetch TMDB trailer failed",r)}return null}function _(e){return`
    <div class="poster-card" data-id="${e.id}" data-type="${e.type}">
      <div class="poster-image-wrap">
        <img class="poster-image" src="${e.poster}" alt="${e.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/300x450/15151e/ffffff?text=${encodeURIComponent(e.title)}'" />
        <div class="poster-overlay-gradient"></div>
        
        <div class="card-top-badges">
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
        </div>
      </div>
    </div>
  `}function me(e,t,o,a){const r=`
    <div class="category-filter-section">
      <div class="genre-scroll-bar">
        <button type="button" class="genre-pill ${o==="all"?"active":""}" data-genre="all">
          🏠 Home
        </button>
        ${t.map(i=>`
          <button type="button" class="genre-pill ${o===i?"active":""}" data-genre="${i}">
            ${i}
          </button>
        `).join("")}
      </div>
    </div>
  `;e.innerHTML=r,e.querySelectorAll(".genre-pill").forEach(i=>{i.addEventListener("click",()=>{const s=i.getAttribute("data-genre");a(s)})})}function Y(e,t,o,a){if(!o||o.length===0)return;const r=`
    <section class="media-section">
      <div class="section-header">
        <h2 class="section-title">
          <span class="title-accent"></span>
          <span>${t}</span>
        </h2>
      </div>

      <div class="media-grid">
        ${o.map(s=>_(s)).join("")}
      </div>
    </section>
  `;e.insertAdjacentHTML("beforeend",r),e.querySelectorAll(".poster-card").forEach(s=>{s.addEventListener("click",()=>{const p=s.getAttribute("data-id"),l=o.find(u=>u.id==p)||$().find(u=>u.id==p);l&&a(l)})})}function ge(e){let t=!1,o,a,r=!1;e.addEventListener("mousedown",i=>{t=!0,r=!1,e.classList.add("grabbing"),o=i.pageX-e.offsetLeft,a=e.scrollLeft}),e.addEventListener("mouseleave",()=>{t=!1,e.classList.remove("grabbing")}),e.addEventListener("mouseup",()=>{t=!1,e.classList.remove("grabbing")}),e.addEventListener("mousemove",i=>{if(!t)return;i.preventDefault();const s=i.pageX-e.offsetLeft,p=(s-o)*1.5;Math.abs(s-o)>8&&(r=!0),e.scrollLeft=a-p}),e.addEventListener("click",i=>{r&&(i.preventDefault(),i.stopPropagation())},!0)}function K(e,t,o,a,r,i,s){if(!o||o.length===0)return;let p=1,l=!1;const c=`
    <section class="media-section" id="${`section-${a}`}">
      <div class="section-header">
        <h2 class="section-title">
          <span class="title-accent"></span>
          <span>${t}</span>
        </h2>
        
        <button type="button" class="see-all-btn" id="see-all-${a}">
          <span>See All</span>
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" height="15" width="15">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>

      <div class="media-carousel-wrapper">
        <!-- Left Scroll Button -->
        <button type="button" class="carousel-arrow carousel-arrow-left" id="arrow-left-${a}" aria-label="Scroll Left">
          <svg stroke="currentColor" fill="none" stroke-width="2.5" viewBox="0 0 24 24" height="20" width="20">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>

        <div class="media-carousel" id="carousel-${a}">
          ${o.map(g=>_(g)).join("")}
        </div>

        <!-- Right Scroll Button -->
        <button type="button" class="carousel-arrow carousel-arrow-right" id="arrow-right-${a}" aria-label="Scroll Right">
          <svg stroke="currentColor" fill="none" stroke-width="2.5" viewBox="0 0 24 24" height="20" width="20">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </section>
  `;e.insertAdjacentHTML("beforeend",c);const n=document.getElementById(`carousel-${a}`),f=document.getElementById(`arrow-left-${a}`),v=document.getElementById(`arrow-right-${a}`),y=document.getElementById(`see-all-${a}`);y&&s&&y.addEventListener("click",s);function k(g){g.querySelectorAll(".poster-card").forEach(m=>{m.dataset.bound||(m.dataset.bound="true",m.addEventListener("click",()=>{const h=m.getAttribute("data-id"),M=$().find(B=>B.id==h);M&&i(M)}))})}k(n),ge(n),f.addEventListener("click",()=>{n.scrollBy({left:-n.clientWidth*.75,behavior:"smooth"})}),v.addEventListener("click",()=>{n.scrollBy({left:n.clientWidth*.75,behavior:"smooth"})});function d(){n.scrollLeft<=5?f.classList.remove("visible"):f.classList.add("visible");const g=n.scrollWidth-n.clientWidth;n.scrollLeft>=g-5?v.classList.remove("visible"):v.classList.add("visible")}n.addEventListener("scroll",async()=>{var g,m;if(d(),!l&&n.scrollLeft+n.clientWidth>=n.scrollWidth-350){l=!0,p++;const h=`loader-${a}-${p}`;n.insertAdjacentHTML("beforeend",`
        <div class="poster-card spinner-card" id="${h}" style="display:flex; align-items:center; justify-content:center; flex: 0 0 170px; width: 170px; height: 250px; background:var(--bg-card); border:1px dashed var(--border-light);">
          <div style="border: 3px solid rgba(255,255,255,0.1); border-top-color: var(--color-neon-cyan); border-radius: 50%; width: 28px; height: 28px; animation: spin 0.8s linear infinite;"></div>
        </div>
      `);try{const b=await r(p);if((g=document.getElementById(h))==null||g.remove(),b&&b.length>0){const M=b.map(B=>_(B)).join("");n.insertAdjacentHTML("beforeend",M),k(n),d()}}catch(b){console.error("Load more carousel failed",b),(m=document.getElementById(h))==null||m.remove()}finally{l=!1}}}),setTimeout(d,150)}function fe(e,t,o,a){let r=0,i=0,s=1;document.body.style.overflow="hidden",t.servers||(t.servers=[{name:"Server 1 (Fast)",url:`https://vidsrc.to/embed/${t.type==="movie"?"movie":"tv"}/${t.id}`}]);const p=(t.type==="tv"||t.type==="anime")&&t.seasons&&t.seasons.length>0;function l(){return t.servers&&t.servers[r]?t.servers[r].url:`https://www.youtube.com/embed/${t.trailerKey||"Way9Dexny3w"}?autoplay=1`}function u(){return`
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
              src="${l()}" 
              title="${t.title}"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen>
            </iframe>
          </div>

          <!-- Video Controls & Server Selector -->
          <div class="player-controls-bar">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;">
              <div>
                <h2 style="font-size:1.35rem; font-weight:800; color:#fff; line-height:1.3;">${t.title}</h2>
                <div style="display:flex; align-items:center; gap:0.75rem; font-size:0.88rem; color:var(--text-muted); margin-top:0.35rem;">
                  <span>${t.year}</span>
                  <span>•</span>
                  <span style="color:#ffc107; font-weight:700;">★ ${t.rating}</span>
                  <span>•</span>
                  <span>${t.genres?t.genres.join(", "):""}</span>
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
                  <svg stroke="currentColor" fill="${a?"#00f2fe":"none"}" stroke-width="2" viewBox="0 0 24 24" height="18" width="18">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                  </svg>
                  <span>${a?"Saved":"+ Watchlist"}</span>
                </button>
              </div>
            </div>

            <!-- Server Selector Pills -->
            <div class="server-selector-row" id="serversRow">
              <span style="font-size:0.85rem; font-weight:700; color:var(--text-muted);">SELECT SERVER:</span>
              ${t.servers.map((d,g)=>`
                <button type="button" class="server-btn ${g===r?"active":""}" data-index="${g}">
                  ${d.name}
                </button>
              `).join("")}
            </div>

            <p style="font-size:0.92rem; color:var(--text-muted); line-height:1.65; margin:0;">${t.overview}</p>
          </div>

          <!-- Season & Episode Selector (For TV Series / Anime) -->
          ${p?`
            <div class="episodes-section">
              <div style="display:flex; align-items:center; gap:0.75rem; overflow-x:auto; padding-bottom:0.5rem;">
                ${t.seasons.map((d,g)=>`
                  <button type="button" class="server-btn season-tab ${g===i?"active":""}" data-season-idx="${g}">
                    Season ${d.season}
                  </button>
                `).join("")}
              </div>

              <div class="episodes-grid" id="episodesGrid">
                ${t.seasons[i].episodes.map(d=>`
                  <button type="button" class="episode-btn ${d===s?"active":""}" data-ep="${d}">
                    Episode ${d}
                  </button>
                `).join("")}
              </div>
            </div>
          `:""}
        </div>
      </div>
    `}e.innerHTML=u();const c=document.getElementById("playerModalBackdrop"),n=document.getElementById("closePlayerModalBtn"),f=document.getElementById("videoIframe"),v=document.getElementById("modalWatchlistBtn"),y=document.getElementById("playTrailerBtn");function k(){c.classList.remove("active"),document.body.style.overflow="",setTimeout(()=>{e.innerHTML=""},300)}n.addEventListener("click",k),c.addEventListener("click",d=>{d.target===c&&k()}),he(t.id,t.type).then(d=>{if(d){t.trailerKey=d;const g=`https://www.youtube.com/embed/${d}?autoplay=1`;if(!t.servers.some(m=>m.name.includes("Trailer"))){t.servers.push({name:"🎬 Official Trailer",url:g});const m=document.getElementById("serversRow");m&&(m.innerHTML=`
              <span style="font-size:0.85rem; font-weight:700; color:var(--text-muted);">SELECT SERVER:</span>
              ${t.servers.map((h,b)=>`
                <button type="button" class="server-btn ${b===r?"active":""}" data-index="${b}">
                  ${h.name}
                </button>
              `).join("")}
            `,m.querySelectorAll(".server-btn").forEach(h=>{h.addEventListener("click",()=>{const b=parseInt(h.getAttribute("data-index"),10);r=b,m.querySelectorAll(".server-btn").forEach(M=>M.classList.remove("active")),h.classList.add("active"),t.servers[b]&&(f.src=t.servers[b].url)})}))}y==null||y.addEventListener("click",()=>{f.src=g;const m=t.servers.findIndex(h=>h.name.includes("Trailer"));if(m!==-1){r=m;const h=document.getElementById("serversRow");h&&h.querySelectorAll(".server-btn").forEach((b,M)=>{b.classList.toggle("active",M===m)})}})}}),e.querySelectorAll(".server-btn:not(.season-tab)").forEach(d=>{d.addEventListener("click",()=>{const g=parseInt(d.getAttribute("data-index"),10);r=g,e.querySelectorAll(".server-btn:not(.season-tab)").forEach(m=>m.classList.remove("active")),d.classList.add("active"),t.servers&&t.servers[g]&&(f.src=t.servers[g].url)})}),e.querySelectorAll(".season-tab").forEach(d=>{d.addEventListener("click",()=>{const g=parseInt(d.getAttribute("data-season-idx"),10);i=g,e.querySelectorAll(".season-tab").forEach(h=>h.classList.remove("active")),d.classList.add("active");const m=document.getElementById("episodesGrid");m&&t.seasons[g]&&(m.innerHTML=t.seasons[g].episodes.map(h=>`
          <button type="button" class="episode-btn ${h===s?"active":""}" data-ep="${h}">
            Episode ${h}
          </button>
        `).join(""),m.querySelectorAll(".episode-btn").forEach(h=>{h.addEventListener("click",()=>{m.querySelectorAll(".episode-btn").forEach(b=>b.classList.remove("active")),h.classList.add("active")})}))})}),v==null||v.addEventListener("click",()=>{o(t);const d=!a;a=d,v.querySelector("span").textContent=d?"Saved":"+ Watchlist",v.querySelector("svg path")&&v.querySelector("svg").setAttribute("fill",d?"#00f2fe":"none")})}function ye(e,t){const o=`
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
  `;e.innerHTML=o;const a=document.getElementById("searchModalBackdrop"),r=document.getElementById("closeSearchModalBtn"),i=document.getElementById("modalSearchInput"),s=document.getElementById("searchResultsArea");let p="all";function l(){a.classList.remove("active"),setTimeout(()=>{e.innerHTML=""},300)}r.addEventListener("click",l),a.addEventListener("click",c=>{c.target===a&&l()}),i.focus();async function u(){const c=i.value.trim();let n=[];if(c?n=await ue(c):n=$().slice(0,12),p!=="all"&&(n=n.filter(f=>f.type===p)),n.length===0){s.innerHTML=`
        <div style="text-align:center; padding:3rem 1rem; color:var(--text-muted);">
          <p style="font-size:1.1rem; color:#fff; font-weight:700;">No results found</p>
          <p style="font-size:0.9rem; margin-top:0.5rem;">Try searching for a different movie title or genre.</p>
        </div>
      `;return}s.innerHTML=`
      <div class="media-grid">
        ${n.map(f=>_(f)).join("")}
      </div>
    `,s.querySelectorAll(".poster-card").forEach(f=>{f.addEventListener("click",()=>{const v=f.getAttribute("data-id"),y=n.find(k=>k.id==v)||$().find(k=>k.id==v);y&&(l(),t(y))})})}i.addEventListener("input",u),e.querySelectorAll(".search-type-pill").forEach(c=>{c.addEventListener("click",()=>{e.querySelectorAll(".search-type-pill").forEach(n=>n.classList.remove("active")),c.classList.add("active"),p=c.getAttribute("data-type"),u()})}),u()}const oe="neonflix_watchlist_v1";function J(){try{const e=localStorage.getItem(oe);return e?JSON.parse(e):[]}catch{return[]}}function be(e){return J().some(o=>o.id==e)}function we(e){let t=J();const o=t.some(a=>a.id==e.id);return o?t=t.filter(a=>a.id!=e.id):t.unshift(e),localStorage.setItem(oe,JSON.stringify(t)),!o}function ae(e,t){const o=J();if(o.length===0){e.innerHTML=`
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
          <span>My Saved Watchlist (${o.length})</span>
        </h2>
      </div>

      <div class="media-grid">
        ${o.map(r=>_(r)).join("")}
      </div>
    </section>
  `;e.innerHTML=a,e.querySelectorAll(".poster-card").forEach(r=>{r.addEventListener("click",()=>{const i=r.getAttribute("data-id"),s=o.find(p=>p.id==i);s&&t(s)})})}let w="home",x="all",L=null,I={movie:1,tv:1,anime:1,korean:1},q=!1;const ke=["Action","Sci-Fi","Drama","Adventure","Anime","Korean","Comedy","Horror","Fantasy","Crime"];function S(e){const t=document.getElementById("playerModalContainer"),o=be(e.id);fe(t,e,a=>{we(a),w==="watchlist"&&ae(document.getElementById("mainContent"),S)},o)}function Le(){const e=document.getElementById("searchModalContainer");ye(e,S)}function A(){var i;const e=document.getElementById("mainContent");if(e.innerHTML="",w==="watchlist"){ae(e,S),window.scrollTo({top:0,behavior:"smooth"});return}if(L){const p={movie:{title:"🔥 All Trending Movies",loadFn:C,getItems:j,type:"movie"},tv:{title:"📺 All Popular TV Series",loadFn:H,getItems:z,type:"tv"},anime:{title:"⚡ All Latest Anime Releases",loadFn:D,getItems:P,type:"anime"},korean:{title:"All Popular Korean Dramas",loadFn:G,getItems:V,type:"korean"}}[L],l=p?p.getItems():[],u=document.createElement("div");u.style="max-width:1400px; margin: 1.5rem auto 0.5rem auto; padding: 0 1.5rem; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:1rem;",u.innerHTML=`
      <div style="display:flex; align-items:center; gap: 1rem;">
        <button type="button" id="backToHomeBtn" class="btn-secondary-info" style="height: 40px; padding: 0 1rem; font-size: 0.85rem;">
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" height="18" width="18">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          <span>Back to Home</span>
        </button>
        <h1 style="font-size: 1.6rem; font-weight: 800;">${p?p.title:"All Results"}</h1>
      </div>
    `,e.appendChild(u),(i=u.querySelector("#backToHomeBtn"))==null||i.addEventListener("click",()=>{L=null,A()}),Y(e,"",l,S),window.scrollTo({top:0,behavior:"smooth"});return}const t=document.createElement("div");t.id="heroWrapper",e.appendChild(t);let o=X;w==="movie"?o=j():w==="tv"?o=z():w==="anime"?o=P():o=j().length>0?j():X,se(t,o,S,S);const a=document.createElement("div");a.id="genreWrapper",e.appendChild(a),me(a,ke,x,s=>{x=s;const p=`${w}_${s}`;if(I[p]=1,s!=="all"&&T()){A();const l=document.querySelector(".media-grid");l&&(l.innerHTML='<div style="display:flex; justify-content:center; align-items:center; min-height:30vh; width:100%; grid-column: 1/-1;"><div style="border: 3px solid rgba(255,255,255,0.1); border-top-color: var(--color-neon-cyan); border-radius: 50%; width: 32px; height: 32px; animation: spin 0.8s linear infinite;"></div></div>'),re(w==="home"?"all":w,s,1).then(u=>{l&&(u&&u.length>0?(l.innerHTML=u.map(c=>`
                <div class="poster-card" data-id="${c.id}" data-type="${c.type}">
                  <div class="poster-image-wrap">
                    <img class="poster-image" src="${c.poster}" alt="${c.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/300x450/15151e/ffffff?text=${encodeURIComponent(c.title)}'" />
                    <div class="poster-overlay-gradient"></div>
                    
                    <div class="card-top-badges">
                      <span class="rating-chip">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="12" width="12">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                        </svg>
                        ${c.rating}
                      </span>
                    </div>
                  </div>

                  <div class="card-content-info">
                    <h3 class="card-title" title="${c.title}">${c.title}</h3>
                    <div class="card-meta-row">
                      <span>${c.year}</span>
                    </div>
                  </div>
                </div>
              `).join(""),l.querySelectorAll(".poster-card").forEach(c=>{c.addEventListener("click",()=>{const n=c.getAttribute("data-id"),f=$(),v=u.find(y=>y.id==n)||f.find(y=>y.id==n);v&&S(v)})})):l.innerHTML='<div style="grid-column: 1/-1; text-align:center; padding: 3rem; color:var(--text-muted);">No items found for this category.</div>')})}else A()});const r=le(w==="home"?"all":w,x);if(w==="home"&&x==="all")K(e,"🔥 Trending Movies",j().slice(0,12),"movie",C,S,()=>{L="movie",A()}),K(e,"📺 Popular TV Series",z().slice(0,12),"tv",H,S,()=>{L="tv",A()}),K(e,"⚡ Latest Anime Releases",P().slice(0,12),"anime",D,S,()=>{L="anime",A()}),K(e,"All Popular Korean Dramas",V().slice(0,12),"korean",G,S,()=>{L="korean",A()});else{const s={home:`Results (${r.length})`,movie:`Movies (${r.length})`,tv:`TV Series (${r.length})`,anime:`Anime (${r.length})`};Y(e,s[w],r,S)}}async function Se(){await Promise.all([C(),H(),D(),G()])}function Me(){const e=document.getElementById("headerApp");ie(e,o=>{w=o,x="all",L=null,I={movie:1,tv:1,anime:1,korean:1},A()},Le),A(),Se().then(()=>{w==="home"&&x==="all"&&!L&&A()});const t=document.getElementById("scrollTopBtn");window.addEventListener("scroll",()=>{window.scrollY>300?t==null||t.classList.add("visible"):t==null||t.classList.remove("visible")}),t==null||t.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),window.addEventListener("scroll",async()=>{if(w!=="watchlist"&&!(w==="home"&&x==="all"&&!L)&&!q&&window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-700){q=!0;const a=`${L||w}_${x}`;I[a]||(I[a]=1),I[a]++;const r=I[a];let i=null;if(L?L==="movie"?i=C:L==="tv"?i=H:L==="anime"?i=D:L==="korean"&&(i=G):x==="all"?(w==="movie"&&(i=C),w==="tv"&&(i=H),w==="anime"&&(i=D)):i=s=>re(w==="home"?"all":w,x,s),i){const p=document.getElementById("mainContent").querySelector(".media-grid"),l=document.createElement("div");l.id="vertical-loader",l.style="display:flex; justify-content:center; padding: 2.5rem 0; width:100%; grid-column: 1 / -1;",l.innerHTML='<div style="border: 3px solid rgba(255,255,255,0.1); border-top-color: var(--color-neon-cyan); border-radius: 50%; width: 32px; height: 32px; animation: spin 0.8s linear infinite;"></div>',p&&p.appendChild(l);try{const u=await i(r);if(l.remove(),u&&u.length>0&&p){const c=u.map(n=>`
                <div class="poster-card" data-id="${n.id}" data-type="${n.type}">
                  <div class="poster-image-wrap">
                    <img class="poster-image" src="${n.poster}" alt="${n.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/300x450/15151e/ffffff?text=${encodeURIComponent(n.title)}'" />
                    <div class="poster-overlay-gradient"></div>
                    
                    <div class="card-top-badges">
                      <span class="rating-chip">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="12" width="12">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                        </svg>
                        ${n.rating}
                      </span>
                    </div>
                  </div>

                  <div class="card-content-info">
                    <h3 class="card-title" title="${n.title}">${n.title}</h3>
                    <div class="card-meta-row">
                      <span>${n.year}</span>
                    </div>
                  </div>
                </div>
              `).join("");p.insertAdjacentHTML("beforeend",c),p.querySelectorAll(".poster-card").forEach(n=>{n.dataset.bound||(n.dataset.bound="true",n.addEventListener("click",()=>{const f=n.getAttribute("data-id"),y=$().find(k=>k.id==f);y&&S(y)}))})}}catch(u){console.error("Vertical lazy load failed",u),l.remove()}finally{q=!1}}else q=!1}})}document.addEventListener("DOMContentLoaded",Me);
