const API_KEY = process.env.API_KEY;

export default {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&lang=en-US`,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `/top_rated/all/week?api_key=${API_KEY}&lang=en-US`,
  },
  fetchActionMovies: {
    title: "Action",
    url: `/discover/movie?api_key=${API_KEY}&wih_genres=28`,
  },
  fetchHorrorMovies: {
    title: "horror",
    url: `/discover/movie?api_key=${API_KEY}&wih_genres=27`,
  },
  fetchComedyMovies: {
    title: "Comedy",
    url: `/discover/movie?api_key=${API_KEY}&wih_genres=35`,
  },
  fetchRomanceMovies: {
    title: "Romance",
    url: `/discover/movie?api_key=${API_KEY}&wih_genres=10749`,
  },
  fetchMystery: {
    title: "Mystery",
    url: `/discover/movie?api_key=${API_KEY}&wih_genres=9648`,
  },
  fetchScifi: {
    title: "Scifi",
    url: `/discover/movie?api_key=${API_KEY}&wih_genres=878`,
  },
  fetchWestern: {
    title: "Western",
    url: `/discover/movie?api_key=${API_KEY}&wih_genres=37`,
  },
  fetchAnimation: {
    title: "Animation",
    url: `/discover/movie?api_key=${API_KEY}&wih_genres=16`,
  },
  fetchTV: {
    title: "TV",
    url: `/discover/movie?api_key=${API_KEY}&wih_genres=10770`,
  },
};
