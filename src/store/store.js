import { combineReducers, createStore } from "redux";
import { textReducer } from "./slices/text/textSlice";
import { toDosReducer } from "./slices/toDos/toDosSlice";

const store = createStore(combineReducers({
    text: textReducer,
    toDos: toDosReducer
}))

export default store;