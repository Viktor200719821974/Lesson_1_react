import {ADD_MOVIES} from "../constans/actionsTypes";
const initialReducer = 'Hello';
const moviesReducer = (state = initialReducer, action)=>{
    switch (action.type){
        case ADD_MOVIES:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}
export default moviesReducer;