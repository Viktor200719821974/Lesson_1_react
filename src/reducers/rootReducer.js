import {FETCH_USERS, PUSH_USER} from "./actions/actionTypes";
export const rootReducer = (state={users: []}, action) => {

    switch (action.type) {
        case FETCH_USERS:
            return {...state, users: [...action.payload]};
        case PUSH_USER:
            // console.log(action.payload);
            return {...state, users: [...state.users, action.payload]};

        default:
            return state;
    }
}