import store from "../store";
import types from "../types";
import { saveUserData } from "../reducers/auth";

const {dispatch } = store;


export const login = (data) => {
    dispatch(saveUserData(data))
}

export function logout() {
    dispatch({type: types.CLEAR_REDUX_STATE})
    
}