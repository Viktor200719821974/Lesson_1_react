import moviesReducer from "./moviesReducer";
import genresReducer from "./genresReducer";
import {combineReducers} from 'redux';
export default combineReducers({
    moviesReducer,
    genresReducer
})