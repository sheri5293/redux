import {createStore} from 'redux';    //get the store from redux
import rootReducer from "./reducers/index";

const store = createStore(rootReducer , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;