import changeTheNumber from "./upDown";
import multTheNumber from "./mulDiv";
import addTaskThing from "./addTask";

import { combineReducers } from "redux";   // multiple reducers how to combine from thats method 

const rootReducer = combineReducers({
    changeTheNumber,multTheNumber,addTaskThing
})

export default rootReducer;