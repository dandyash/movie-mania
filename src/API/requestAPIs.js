const API_KEY = "032f0bbdf8a95e629c1a2e2c338a448b";

const API_LIST = {

    // fetchImage: "https://image.tmdb.org/t/p/",

    // fetch Images of Diff Sizes
    fetchPosterImageW92: "https://image.tmdb.org/t/p/w92",
    fetchPosterImageW154: "https://image.tmdb.org/t/p/w154",
    fetchPosterImageW185: "https://image.tmdb.org/t/p/w185",
    fetchBackdrop_LogoImageW300: "https://image.tmdb.org/t/p/w300",
    fetchPosterImageW342: "https://image.tmdb.org/t/p/w342",
    fetchPosterImageW500: "https://image.tmdb.org/t/p/W500",
    fetchPoster_BackdropImageW780: "https://image.tmdb.org/t/p/w780",
    fetchBackdropImageW1280: "https://image.tmdb.org/t/p/w1280",
    fetchImageOriginal: "https://image.tmdb.org/t/p/original",

    // 
    fetchNetflixOriginals: "/discover/tv?api_key=" + API_KEY + "&with_networks=213",
    fetchNowPlayingMovies: "/movie/now_playing?api_key=" + API_KEY + "&language=en-US",
    fetchPopularMovies: "/movie/popular?api_key=" + API_KEY + "&language=en-US",
    fetchTopRatedMovies: "/movie/top_rated?api_key=" + API_KEY + "&language=en-US",
    fetchUpcomingMovies: "/movie/upcoming?api_key=" + API_KEY + "&language=en-US",
    fetchAllTrending: "/trending/all/day?api_key=" + API_KEY,
    fetchDayTrendingMovies: "/trending/movie/day?api_key=" + API_KEY,
    fetchWeekTrendingMovies: "/trending/movie/week?api_key=" + API_KEY,
    fetchDayTrendingTv: "/trending/tv/day?api_key=" + API_KEY,
    fetchMovieByGenre: "/discover/movie?api_key=" + API_KEY + "&sort_by=popularity.desc&with_genres=",
    fetchTvByGenre: "/discover/tv?api_key=" + API_KEY + "&sort_by=popularity.desc&with_genres=",
    fetchWeekTrendingTv: "/trending/tv/week?api_key=" + API_KEY,
    searchQuery: "/search/multi?api_key=" + API_KEY + "&query=",
    fetchAiringTodayTV: "/tv/airing_today?api_key=" + API_KEY + "&language=en-US&page=1",
    fetchOnAirTV: "/tv/on_the_air?api_key=" + API_KEY + "&language=en-US&page=1",
    fetchPopularTV: "/tv/popular?api_key=" + API_KEY + "&language=en-US&page=1",
    fetchTopRatedTV: "/tv/top_rated?api_key=" + API_KEY + "&language=en-US&page=1",
}

export { API_KEY };
export default API_LIST;