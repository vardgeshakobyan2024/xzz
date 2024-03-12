import { ADD_NEW_ITEM, DELETE_TODOS_ITEM} from "./type";

export const initalToDos = [];

export const toDosReducer = (state = initalToDos, action) => {
    switch (action.type) {
        case ADD_NEW_ITEM:
            const newItem = {
                id: new Date().getTime().toString(),
                task: action.payload
            }
            return [...state, newItem]
        case DELETE_TODOS_ITEM:
            return state.filter((el) => el.id !== action.payload);
        default:
            return state
    }
}