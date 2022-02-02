import changeTheNumber from "./upDown";
import multTheNumber from "./mulDiv";

import { combineReducers } from "redux";   // multiple reducers how to combine from thats method 

const rootReducer = combineReducers({
    changeTheNumber,multTheNumber
})

export default rootReducer;