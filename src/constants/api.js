const apiBaseUrl = 'https://api.themoviedb.org/3';
const apiBaseUrlPlusMovies = '/discover/movie';
const apiBasePage = '/?page=';
const apiMoviesUrl = apiBaseUrl+apiBaseUrlPlusMovies+apiBasePage;
const apiMovieUrlId = apiBaseUrl+'/movie';
const urlBaseImage = 'https://image.tmdb.org/t/p/w500';
const urlBaseImageInfo ='https://image.tmdb.org/t/p/w300';
const urlGeners = apiBaseUrl +'/genre/movie/list'
export {apiBaseUrl, apiMoviesUrl,urlBaseImage, apiBaseUrlPlusMovies, apiBasePage,urlGeners,apiMovieUrlId,urlBaseImageInfo}
