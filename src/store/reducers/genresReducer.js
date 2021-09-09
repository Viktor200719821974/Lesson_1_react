import {ADD_GENRES} from "../constans/actionsTypes";
const initialState = 'Hello';
const genresReducer = (state =initialState , action)=>{
    switch (action.type){
        case ADD_GENRES:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}
export default genresReducer;