import {ADD_MOVIE_TO_FAVORITE, REMOVE_MOVIE_TO_FAVORITE} from "../constans/actionsTypes";

const initialState = 'Hello';
const userInfo = (state =initialState , action)=>{
    switch (action.type){
        case ADD_MOVIE_TO_FAVORITE:
            return {
                ...state,
                ...action.payload
            }
                case REMOVE_MOVIE_TO_FAVORITE:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state;
    }
}
export default userInfo;