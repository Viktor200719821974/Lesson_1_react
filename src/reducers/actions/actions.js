import {FETCH_USERS, PUSH_USER} from "./actionTypes";
const fetchUser= (value) =>{
    return {type: FETCH_USERS, payload: value}
}
const pushUser = (value) =>{
    return {type: PUSH_USER, payload: value}
}
export {fetchUser, pushUser};