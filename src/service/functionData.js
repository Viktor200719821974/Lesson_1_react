import {urlBaseImage} from "../constants/api";
const getUrl = (backdrop_path, category) =>{
return category + backdrop_path;
}
export const getMoviesImage = (backdrop_path)=> getUrl(backdrop_path,urlBaseImage);
