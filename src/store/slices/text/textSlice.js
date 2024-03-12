import { GET_INPUT_VALUE, RESET_INPUT_VALUE } from "./type";

export const initalText = "";

export const textReducer = (state = initalText, action) => {
    switch (action.type) {
        case GET_INPUT_VALUE:
            return action.payload
        case RESET_INPUT_VALUE:
            return ""
        default: 
            return state
    }
}