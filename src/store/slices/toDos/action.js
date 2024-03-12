import { ADD_NEW_ITEM, DELETE_TODOS_ITEM} from "./type";

export const actionAddNewItem = (payload) => ({type: ADD_NEW_ITEM, payload});
export const actionDeleteItem = (payload) => ({type: DELETE_TODOS_ITEM, payload});

export const selectorToDos = (state) => state.toDos;