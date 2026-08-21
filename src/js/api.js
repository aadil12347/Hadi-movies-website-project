// ----------------------------------------------------
// NEONFLIX MEDIA DATASET & API SERVICE
// High quality movies, TV shows & anime dataset with live TMDB support
// ----------------------------------------------------

export const MEDIA_TYPES = {
  MOVIE: 'movie',
  TV: 'tv',
  ANIME: 'anime'
};

export const FEATURED_DATASET = [
  {
    id: 693134,
    title: "Dune: Part Two",
    original_title: "Dune: Part Two",
    type: "movie",
    poster: "https://image.tmdb.org/t/p/w500/6izwz7rsy95ARzTR3poZ8H6c5pp.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/eZ239CUp1d6OryZEBPnO2n87gMG.jpg",
    rating: 8.6,
    year: "2024",
    quality: "4K UHD",
    duration: "2h 46m",
    genres: ["Sci-Fi", "Adventure", "Action"],
    overview: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the universe.",
    trailerKey: "Way9Dexny3w",
    cast: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson", "Javier Bardem"]
  },
  {
    id: 94605,
    title: "Arcane: Season 2",
    original_title: "Arcane",
    type: "tv",
    poster: "https://image.tmdb.org/t/p/w500/fqldf2t8ztc9aiwn3k6mlX3tvRT.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/q8eejQcg1bAqImEV8jh8RtBD4uH.jpg",
    rating: 9.0,
    year: "2024",
    quality: "4K UHD",
    duration: "9 Episodes",
    genres: ["Animation", "Sci-Fi", "Action"],
    overview: "Amid the escalating tensions between the utopian city of Piltover and the oppressed underground city of Zaun, sisters Vi and Jinx find themselves on opposing sides of a war.",
    trailerKey: "fXmAurh012s",
    cast: ["Hailee Steinfeld", "Ella Purnell", "Katie Leung"],
    seasons: [
      { season: 1, episodes: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
      { season: 2, episodes: [1, 2, 3, 4, 5, 6, 7, 8, 9] }
    ]
  }
];

// Let's create a solid, clean, rich list of movies, TV shows, and anime with working TMDB poster CDN links
export const MOVIES_LIST = [
  {
    id: 533535,
    title: "Deadpool & Wolverine",
    type: "movie",
    poster: "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
    backdrop: "https://image.tmdb.org/t/p/w500/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg",
    rating: 8.4,
    year: "2024",
    quality: "4K UHD",
    genres: ["Action", "Comedy", "Sci-Fi"],
    overview: "Wolverine is recovering from his injuries when he crosses paths with the loudmouth Deadpool. They team up to defeat a common enemy.",
    trailerKey: "73_1biulkYk"
  },
  {
    id: 872585,
    title: "Oppenheimer",
    type: "movie",
    poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    backdrop: "https://image.tmdb.org/t/p/w500/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
    rating: 8.9,
    year: "2023",
    quality: "4K UHD",
    genres: ["Drama", "History", "Biography"],
    overview: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
    trailerKey: "uYPbbksJxIg"
  },
  {
    id: 157336,
    title: "Interstellar",
    type: "movie",
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    backdrop: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo6LEuPJflrHJ.jpg",
    rating: 8.7,
    year: "2014",
    quality: "4K UHD",
    genres: ["Sci-Fi", "Adventure", "Drama"],
    overview: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    trailerKey: "zSWdZVtXT7E"
  },
  {
    id: 569094,
    title: "Spider-Man: Across the Spider-Verse",
    type: "movie",
    poster: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    backdrop: "https://image.tmdb.org/t/p/w500/4XM8DUTQb3lhKWwFi21juCmgvE.jpg",
    rating: 8.8,
    year: "2023",
    quality: "4K UHD",
    genres: ["Animation", "Action", "Adventure"],
    overview: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence.",
    trailerKey: "cqGjhVJWtEg"
  },
  {
    id: 155,
    title: "The Dark Knight",
    type: "movie",
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    backdrop: "https://image.tmdb.org/t/p/w500/nMK28FiismUDh85GD9TSuYfZjeB.jpg",
    rating: 9.0,
    year: "2008",
    quality: "4K UHD",
    genres: ["Action", "Crime", "Drama"],
    overview: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological tests.",
    trailerKey: "EXeTwQWrcwY"
  },
  {
    id: 76600,
    title: "Avatar: The Way of Water",
    type: "movie",
    poster: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeKjPyRm.jpg",
    backdrop: "https://image.tmdb.org/t/p/w500/s16H6vEUm9sE9vCvoq2moudC8qB.jpg",
    rating: 8.2,
    year: "2022",
    quality: "4K UHD",
    genres: ["Sci-Fi", "Action", "Adventure"],
    overview: "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri.",
    trailerKey: "d9MyW72ELq0"
  }
];

export const TV_SHOWS_LIST = [
  {
    id: 66732,
    title: "Stranger Things",
    type: "tv",
    poster: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
    backdrop: "https://image.tmdb.org/t/p/w500/56v2KjBlU4XaOv9r1kyp7d8Bx67.jpg",
    rating: 8.7,
    year: "2022",
    quality: "HD",
    genres: ["Sci-Fi", "Horror", "Drama"],
    overview: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
    trailerKey: "b9EkMc79ZSU",
    seasons: [
      { season: 1, episodes: [1, 2, 3, 4, 5, 6, 7, 8] },
      { season: 2, episodes: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
      { season: 3, episodes: [1, 2, 3, 4, 5, 6, 7, 8] },
      { season: 4, episodes: [1, 2, 3, 4, 5, 6, 7, 8, 9] }
    ]
  },
  {
    id: 100088,
    title: "The Last of Us",
    type: "tv",
    poster: "https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmrdD1yKVwYBEA9Z8.jpg",
    backdrop: "https://image.tmdb.org/t/p/w500/9691b1w0W0v4N0w414l6F4e0Fp2.jpg",
    rating: 8.8,
    year: "2023",
    quality: "4K UHD",
    genres: ["Drama", "Action", "Sci-Fi"],
    overview: "After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanity's last hope.",
    trailerKey: "uLtkt8BonwM",
    seasons: [
      { season: 1, episodes: [1, 2, 3, 4, 5, 6, 7, 8, 9] }
    ]
  },
  {
    id: 94997,
    title: "House of the Dragon",
    type: "tv",
    poster: "https://image.tmdb.org/t/p/w500/1X4h40fcB4WWUmIBK0auT4zRBAV.jpg",
    backdrop: "https://image.tmdb.org/t/p/w500/etj8E2o0Visual.jpg",
    rating: 8.5,
    year: "2024",
    quality: "4K UHD",
    genres: ["Action", "Drama", "Fantasy"],
    overview: "The Targaryen dynasty is at the absolute apex of its power, with more than 15 dragons under their command.",
    trailerKey: "DotnJ7tTA34",
    seasons: [
      { season: 1, episodes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
      { season: 2, episodes: [1, 2, 3, 4, 5, 6, 7, 8] }
    ]
  },
  {
    id: 1396,
    title: "Breaking Bad",
    type: "tv",
    poster: "https://image.tmdb.org/t/p/w500/ztWlU2c65cnSqToj9XBjL223jOo.jpg",
    backdrop: "https://image.tmdb.org/t/p/w500/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg",
    rating: 9.5,
    year: "2013",
    quality: "HD",
    genres: ["Crime", "Drama", "Thriller"],
    overview: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine.",
    trailerKey: "HhesaQXLuRY",
    seasons: [
      { season: 1, episodes: [1, 2, 3, 4, 5, 6, 7] },
      { season: 2, episodes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] }
    ]
  }
];

export const ANIME_LIST = [
  {
    id: 214497,
    title: "Solo Leveling",
    type: "anime",
    poster: "https://image.tmdb.org/t/p/w500/geCROc3855a9wc647i565mGvhyB.jpg",
    backdrop: "https://image.tmdb.org/t/p/w500/xOM08GoAFMu4Wor2xR2d4hM1me0.jpg",
    rating: 8.8,
    year: "2024",
    quality: "HD",
    genres: ["Anime", "Action", "Fantasy"],
    overview: "In a world where hunters, humans who possess magical abilities, must battle deadly monsters to protect the human race from certain annihilation.",
    trailerKey: "9A04X7vPq1U",
    seasons: [
      { season: 1, episodes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] }
    ]
  },
  {
    id: 1429,
    title: "Attack on Titan",
    type: "anime",
    poster: "https://image.tmdb.org/t/p/w500/hTP1LToHSwVWYImrWjMzSQWqWC.jpg",
    backdrop: "https://image.tmdb.org/t/p/w500/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg",
    rating: 9.1,
    year: "2023",
    quality: "HD",
    genres: ["Anime", "Action", "Mystery"],
    overview: "After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans.",
    trailerKey: "MGRm4IzK1SQ",
    seasons: [
      { season: 1, episodes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25] },
      { season: 2, episodes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] }
    ]
  },
  {
    id: 85937,
    title: "Demon Slayer: Kimetsu no Yaiba",
    type: "anime",
    poster: "https://image.tmdb.org/t/p/w500/xUfVStA1chwsNxBQqjo5Jd2bXds.jpg",
    backdrop: "https://image.tmdb.org/t/p/w500/nMK28FiismUDh85GD9TSuYfZjeB.jpg",
    rating: 8.9,
    year: "2024",
    quality: "4K UHD",
    genres: ["Anime", "Action", "Supernatural"],
    overview: "A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon herself.",
    trailerKey: "VQGCKyvzIM4",
    seasons: [
      { season: 1, episodes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26] },
      { season: 2, episodes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] }
    ]
  },
  {
    id: 95479,
    title: "Jujutsu Kaisen",
    type: "anime",
    poster: "https://image.tmdb.org/t/p/w500/h14a6p3B5a3a2p16J5x4vG2m4t9.jpg",
    backdrop: "https://image.tmdb.org/t/p/w500/4XM8DUTQb3lhKWwFi21juCmgvE.jpg",
    rating: 8.6,
    year: "2023",
    quality: "HD",
    genres: ["Anime", "Action", "Supernatural"],
    overview: "A boy swallows a cursed talisman - the finger of a demon - and becomes cursed himself. He enters a shaman's school to be able to locate the demon's other body parts.",
    trailerKey: "pkZXnC3LwUQ",
    seasons: [
      { season: 1, episodes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24] }
    ]
  }
];

function loadCachedStorage(key, fallback = null) {
  try {
    const saved = localStorage.getItem(key);
    if (saved) return JSON.parse(saved);
  } catch (e) {}
  return fallback;
}

function saveCachedStorage(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {}
}

// Clear legacy cache if present
try {
  ['neonflix_movies', 'neonflix_tv', 'neonflix_anime', 'neonflix_korean'].forEach(k => localStorage.removeItem(k));
} catch(e) {}

export let cacheMovies = loadCachedStorage('neonflix_movies_v2', null);
export let cacheTv = loadCachedStorage('neonflix_tv_v2', null);
export let cacheAnime = loadCachedStorage('neonflix_anime_v2', null);
export let cacheKorean = loadCachedStorage('neonflix_korean_v2', null);

export function getMoviesList() {
  return cacheMovies || MOVIES_LIST;
}

export function getTvShowsList() {
  return cacheTv || TV_SHOWS_LIST;
}

export function getAnimeList() {
  return cacheAnime || ANIME_LIST;
}

export function getKoreanList() {
  return cacheKorean || [];
}

// Helper to getAllMedia combined
export function getAllMedia() {
  const movies = getMoviesList();
  const tv = getTvShowsList();
  const anime = getAnimeList();
  const korean = getKoreanList();
  return [...movies, ...tv, ...anime, ...korean, ...FEATURED_DATASET];
}

// Search Function
export function searchMedia(query) {
  if (!query || query.trim() === '') return [];
  const q = query.toLowerCase().trim();
  return getAllMedia().filter(item => 
    item.title.toLowerCase().includes(q) ||
    (item.overview && item.overview.toLowerCase().includes(q)) ||
    (item.genres && item.genres.some(g => g.toLowerCase().includes(q)))
  );
}

// Filter Function by Genre & Type
export function filterMedia(type = 'all', genre = 'all') {
  let list = getAllMedia();
  
  if (type !== 'all') {
    list = list.filter(item => item.type === type);
  }
  
  if (genre !== 'all') {
    const gLower = genre.toLowerCase().trim();
    if (gLower === 'korean' || gLower === 'k-drama') {
      const kList = getKoreanList();
      const filtered = list.filter(item => item.genres && item.genres.some(g => g.toLowerCase() === 'korean'));
      list = filtered.length > 0 ? filtered : (kList.length > 0 ? kList : list);
    } else {
      list = list.filter(item => item.genres && item.genres.some(g => g.toLowerCase() === gLower));
    }
  }
  
  // Sort items by rating in descending order so top trending items remain at the top!
  return list.sort((a, b) => (b.rating || 0) - (a.rating || 0));
}

// --- LIVE TMDB API SUPPORT ---

export function getApiKey() {
  return 'fc6d85b3839330e3458701b975195487';
}

export function setApiKey(key) {
  // Embedded key is fixed
}

const GENRE_MAP = {
  28: 'Action', 12: 'Adventure', 16: 'Anime', 35: 'Comedy', 80: 'Crime',
  99: 'Documentary', 18: 'Drama', 10751: 'Family', 14: 'Fantasy', 36: 'History',
  27: 'Horror', 10402: 'Music', 9648: 'Mystery', 10749: 'Romance', 878: 'Sci-Fi',
  10770: 'TV Movie', 53: 'Thriller', 10752: 'War', 37: 'Western', 10759: 'Action & Adventure',
  10762: 'Kids', 10763: 'News', 10764: 'Reality', 10765: 'Sci-Fi & Fantasy', 10766: 'Soap',
  10767: 'Talk', 10768: 'War & Politics'
};

const LANGUAGE_MAP = {
  hi: 'Hindi',
  en: 'English',
  pa: 'Punjabi',
  ko: 'Korean',
  ja: 'Japanese',
  ta: 'Tamil',
  te: 'Telugu',
  ur: 'Urdu',
  es: 'Spanish',
  fr: 'French',
  de: 'German',
  zh: 'Chinese',
  cn: 'Chinese'
};

function getLanguageLabel(langCode) {
  if (!langCode) return 'Hindi';
  const code = langCode.toLowerCase().trim();
  return LANGUAGE_MAP[code] || (code.charAt(0).toUpperCase() + code.slice(1));
}

function getGenreNames(genreIds) {
  const names = (genreIds || []).map(id => GENRE_MAP[id]).filter(Boolean);
  return names.length > 0 ? names.slice(0, 3) : ['Drama'];
}

function mapTmdbItem(item, mediaType) {
  const isMovie = mediaType === 'movie';
  const tmdbId = item.id;
  const isAnime = !isMovie && (
    (item.genre_ids && item.genre_ids.includes(16) && item.original_language === 'ja') ||
    (item.genres && item.genres.some(g => g.name === 'Animation') && item.original_language === 'ja')
  );
  
  const finalType = isMovie ? 'movie' : (isAnime ? 'anime' : 'tv');

  const posterUrl = item.poster_path 
    ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
    : 'https://via.placeholder.com/300x450/15151e/ffffff?text=' + encodeURIComponent(item.title || item.name);

  const backdropUrl = item.backdrop_path
    ? `https://image.tmdb.org/t/p/w1280${item.backdrop_path}`
    : 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1025&auto=format&fit=crop';

  const servers = [
    { id: "peachify", name: "Server 1 (HD)", url: "" }
  ];

  const seasons = !isMovie ? [
    { season: 1, episodes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] }
  ] : [];

  const lang = getLanguageLabel(item.original_language);

  return {
    id: tmdbId,
    title: item.title || item.name || 'Untitled',
    type: finalType,
    poster: posterUrl,
    backdrop: backdropUrl,
    rating: item.vote_average ? parseFloat(item.vote_average.toFixed(1)) : 7.0,
    year: (item.release_date || item.first_air_date || '2024').substring(0, 4),
    quality: lang,
    language: lang,
    genres: (() => {
      const gNames = getGenreNames(item.genre_ids || []);
      if (item.original_language === 'ko' && !gNames.includes('Korean')) {
        gNames.unshift('Korean');
      }
      return gNames;
    })(),
    overview: item.overview || 'No description available.',
    servers: servers,
    seasons: seasons,
    trailerKey: ""
  };
}

export async function fetchLiveTrendingMovies(page = 1) {
  const apiKey = getApiKey();
  if (!apiKey) {
    cacheMovies = null;
    return MOVIES_LIST;
  }
  try {
    const res = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&page=${page}&language=en-US`);
    const data = await res.json();
    if (data && data.results) {
      const items = data.results.map(item => mapTmdbItem(item, 'movie'));
      if (page === 1) {
        cacheMovies = items;
        saveCachedStorage('neonflix_movies_v2', items);
      } else {
        cacheMovies = [...(cacheMovies || []), ...items];
      }
      return items;
    }
  } catch (e) {
    console.error("Live trending movies failed", e);
  }
  return MOVIES_LIST;
}

export async function fetchLivePopularTv(page = 1) {
  const apiKey = getApiKey();
  if (!apiKey) {
    cacheTv = null;
    return TV_SHOWS_LIST;
  }
  try {
    const res = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&page=${page}&language=en-US`);
    const data = await res.json();
    if (data && data.results) {
      const items = data.results.map(item => mapTmdbItem(item, 'tv'));
      if (page === 1) {
        cacheTv = items;
        saveCachedStorage('neonflix_tv_v2', items);
      } else {
        cacheTv = [...(cacheTv || []), ...items];
      }
      return items;
    }
  } catch (e) {
    console.error("Live popular TV failed", e);
  }
  return TV_SHOWS_LIST;
}

export async function fetchLiveAnime(page = 1) {
  const apiKey = getApiKey();
  if (!apiKey) {
    cacheAnime = null;
    return ANIME_LIST;
  }
  try {
    const res = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&with_genres=16&with_original_language=ja&sort_by=popularity.desc&page=${page}&language=en-US`);
    const data = await res.json();
    if (data && data.results) {
      const items = data.results.map(item => mapTmdbItem(item, 'tv'));
      if (page === 1) {
        cacheAnime = items;
        saveCachedStorage('neonflix_anime_v2', items);
      } else {
        cacheAnime = [...(cacheAnime || []), ...items];
      }
      return items;
    }
  } catch (e) {
    console.error("Live anime failed", e);
  }
  return ANIME_LIST;
}

export async function fetchLiveKoreanMedia(page = 1) {
  const apiKey = getApiKey();
  if (!apiKey) {
    cacheKorean = null;
    return [];
  }
  try {
    const res = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&with_original_language=ko&sort_by=popularity.desc&page=${page}&language=en-US`);
    const data = await res.json();
    if (data && data.results) {
      const items = data.results.map(item => mapTmdbItem(item, 'tv'));
      if (page === 1) {
        cacheKorean = items;
        saveCachedStorage('neonflix_korean_v2', items);
      } else {
        cacheKorean = [...(cacheKorean || []), ...items];
      }
      return items;
    }
  } catch (e) {
    console.error("Live Korean media failed", e);
  }
  return [];
}


export async function fetchLiveSearch(query) {
  const apiKey = getApiKey();
  if (!apiKey) return searchMedia(query);
  try {
    const res = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${encodeURIComponent(query)}&language=en-US`);
    const data = await res.json();
    if (data && data.results) {
      return data.results
        .filter(item => item.media_type === 'movie' || item.media_type === 'tv')
        .map(item => mapTmdbItem(item, item.media_type));
    }
  } catch (e) {
    console.error("Live search failed", e);
  }
  return searchMedia(query);
}

function getGenreIdByName(name) {
  const n = name.toLowerCase().trim();
  if (n === 'anime') return 16;
  if (n === 'korean' || n === 'k-drama') return 'ko';
  for (const [id, val] of Object.entries(GENRE_MAP)) {
    if (val.toLowerCase() === n) {
      return parseInt(id, 10);
    }
  }
  return null;
}

export async function fetchLiveGenreMedia(type, genre, page = 1) {
  const apiKey = getApiKey();
  if (!apiKey) return [];

  const genreId = getGenreIdByName(genre);
  if (!genreId && genre.toLowerCase() !== 'all') return [];

  try {
    let url = '';
    let mediaType = 'movie';

    if (genreId === 'ko' || genre.toLowerCase() === 'korean') {
      mediaType = 'tv';
      url = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&with_original_language=ko&sort_by=popularity.desc&page=${page}&language=en-US`;
    } else if (type === 'movie') {
      mediaType = 'movie';
      url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&page=${page}&language=en-US`;
      if (genreId) url += `&with_genres=${genreId}`;
    } else if (type === 'tv') {
      mediaType = 'tv';
      url = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&sort_by=popularity.desc&page=${page}&language=en-US`;
      if (genreId) url += `&with_genres=${genreId}`;
    } else if (type === 'anime') {
      mediaType = 'tv';
      url = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&with_genres=16&with_original_language=ja&sort_by=popularity.desc&page=${page}&language=en-US`;
    } else {
      // For type === 'all' or 'home'
      const isNumGenre = typeof genreId === 'number';
      const [moviesRes, tvRes] = await Promise.all([
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&page=${page}&language=en-US${isNumGenre ? `&with_genres=${genreId}` : ''}`).then(r => r.json()),
        fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&sort_by=popularity.desc&page=${page}&language=en-US${isNumGenre ? `&with_genres=${genreId}` : ''}`).then(r => r.json())
      ]);

      const movieItems = (moviesRes.results || []).map(item => mapTmdbItem(item, 'movie'));
      const tvItems = (tvRes.results || []).map(item => mapTmdbItem(item, 'tv'));

      const combined = [];
      const maxLength = Math.max(movieItems.length, tvItems.length);
      for (let i = 0; i < maxLength; i++) {
        if (i < movieItems.length) combined.push(movieItems[i]);
        if (i < tvItems.length) combined.push(tvItems[i]);
      }
      return combined;
    }

    const res = await fetch(url);
    const data = await res.json();
    if (data && data.results) {
      return data.results.map(item => mapTmdbItem(item, mediaType));
    }
  } catch (e) {
    console.error(`Discover genre ${genre} failed`, e);
  }
  return [];
}

export async function fetchMovieTrailer(tmdbId, type = 'movie') {
  const apiKey = getApiKey();
  if (!apiKey || !tmdbId) return null;
  
  const endpointType = (type === 'movie') ? 'movie' : 'tv';
  try {
    const res = await fetch(`https://api.themoviedb.org/3/${endpointType}/${tmdbId}/videos?api_key=${apiKey}`);
    const data = await res.json();
    if (data && data.results && data.results.length > 0) {
      const trailer = data.results.find(v => v.site === 'YouTube' && v.type === 'Trailer') || 
                      data.results.find(v => v.site === 'YouTube');
      if (trailer) {
        return trailer.key;
      }
    }
  } catch (e) {
    console.error("Fetch TMDB trailer failed", e);
  }
  return null;
}

export async function fetchTvDetails(tmdbId) {
  const apiKey = getApiKey();
  if (!apiKey || !tmdbId) return null;
  try {
    const res = await fetch(`https://api.themoviedb.org/3/tv/${tmdbId}?api_key=${apiKey}&language=en-US`);
    const data = await res.json();
    if (data && data.seasons) {
      const seasons = data.seasons
        .filter(s => s.season_number > 0 && s.episode_count > 0)
        .map(s => {
          const episodes = [];
          for (let i = 1; i <= s.episode_count; i++) {
            episodes.push(i);
          }
          return {
            season: s.season_number,
            episodes: episodes
          };
        });
      return {
        seasons: seasons,
        overview: data.overview || '',
        genres: data.genres ? data.genres.map(g => g.name).slice(0, 3) : []
      };
    }
  } catch (e) {
    console.error("Fetch TV details failed", e);
  }
  return null;
}

export async function fetchMovieLogo(tmdbId, type = 'movie') {
  const apiKey = getApiKey();
  if (!apiKey || !tmdbId) return null;
  const endpointType = (type === 'movie') ? 'movie' : 'tv';
  try {
    const res = await fetch(`https://api.themoviedb.org/3/${endpointType}/${tmdbId}/images?api_key=${apiKey}&include_image_language=en,null`);
    const data = await res.json();
    if (data && data.logos && data.logos.length > 0) {
      const englishLogo = data.logos.find(l => l.iso_639_1 === 'en') || data.logos[0];
      if (englishLogo && englishLogo.file_path) {
        return `https://image.tmdb.org/t/p/w500${englishLogo.file_path}`;
      }
    }
  } catch (e) {
    console.error("Fetch TMDB logo failed", e);
  }
  return null;
}

