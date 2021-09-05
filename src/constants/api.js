const apiBaseUrl = 'https://api.themoviedb.org/3';
const apiBaseUrlPlusMovies = '/discover/movie';
const apiBasePage = '/?page=';
const apiMoviesUrl = apiBaseUrl+apiBaseUrlPlusMovies+apiBasePage;
const urlBaseImage = 'https://image.tmdb.org/t/p/w500';
const urlGeners = apiBaseUrl +'/genre/movie/list'
export {apiBaseUrl, apiMoviesUrl,urlBaseImage, apiBaseUrlPlusMovies, apiBasePage,urlGeners}
