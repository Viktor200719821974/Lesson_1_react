import {apiMoviesUrl, urlBaseImage,apiBasePage} from "../constants/api";
const getUrl = (backdrop_path, category) =>{
return category + backdrop_path;
}
export const getMoviesImage = (backdrop_path)=> getUrl(backdrop_path,urlBaseImage);
const getNextPage = (nextPageNew, category) =>{
    return category + nextPageNew;
}
export const newNextPageUrl = (nextPageNew) => getNextPage(nextPageNew,apiMoviesUrl);
const getPrevPage = (prevPageNew, category) =>{
    return category + prevPageNew;
}
export const newPrevPageUrl = (prevPageNew) => getPrevPage(prevPageNew,apiMoviesUrl);
export const getMoviePageId = (url)=>{
    const pos = url.lastIndexOf(apiBasePage);
    const id = url.slice(pos+apiBasePage.length, url.length);
    return Number(id);

}
