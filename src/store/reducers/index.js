import moviesReducer from "./moviesReducer";
import genresReducer from "./genresReducer";
import {combineReducers} from 'redux';
import userInfo from "./userInfo";
export default combineReducers({
    moviesReducer,
    genresReducer,
    userInfo
})