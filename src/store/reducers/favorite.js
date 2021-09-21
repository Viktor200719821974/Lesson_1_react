import {ADD_MOVIE_TO_FAVORITE, REMOVE_MOVIE_TO_FAVORITE} from "../constans/actionsTypes";
import {omit} from 'lodash';
import {getLocalStarage} from "../localStorage/localStorage";

const initialState = getLocalStarage('store');
const favorite = (state =initialState , action)=>{
    switch (action.type){
        case ADD_MOVIE_TO_FAVORITE:
            return {
                ...state,
                ...action.payload
            }
        case REMOVE_MOVIE_TO_FAVORITE:
            return omit(state,[action.payload])

        default:
            return state;
    }
}
export default favorite;