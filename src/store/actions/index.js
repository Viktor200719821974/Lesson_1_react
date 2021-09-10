import {ADD_MOVIES, ADD_GENRES,REMOVE_MOVIE_TO_FAVORITE,ADD_MOVIE_TO_FAVORITE} from "../constans/actionsTypes";
export const setMoviesRedux = () =>({
    type: ADD_MOVIES,
    payload: ''
})
export const setGenresRedux = () =>({
    type: ADD_GENRES,
    payload: ''
})
export const setMovieToFavorite = () =>({
    type: ADD_MOVIE_TO_FAVORITE,
    payload: ''
})
export const removeMovieFromFavorite = () =>({
    type: REMOVE_MOVIE_TO_FAVORITE,
    payload: ''
})