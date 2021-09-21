import {REMOVE_MOVIE_TO_FAVORITE,ADD_MOVIE_TO_FAVORITE} from "../constans/actionsTypes";

export const setMovieToFavorite = movie =>({
    type: ADD_MOVIE_TO_FAVORITE,
    payload: movie
})
export const removeMovieFromFavorite = movieId =>({
    type: REMOVE_MOVIE_TO_FAVORITE,
    payload: movieId
})