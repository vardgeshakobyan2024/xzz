import { GET_INPUT_VALUE, RESET_INPUT_VALUE } from "./type";

export const actionGetInputValue = (payload) => ({type: GET_INPUT_VALUE, payload});
export const actionResetInputValue = () => ({type: RESET_INPUT_VALUE});

export const selectorText = (state) => state.text;