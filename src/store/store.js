import {createStore} from 'redux';
import rootReducer from './reducers';
import {setLocalStorage} from "./localStorage/localStorage";

const store = createStore(rootReducer);

store.subscribe(()=>{
    setLocalStorage('store', store.getState().favorite)
});
export default store;