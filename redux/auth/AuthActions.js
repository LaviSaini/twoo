import {LOGIN_SUCCESS,LOGIN_FAILURE,LOGOUT} from "../types";
import axios from "axios"

const baseURL = "http://18.207.182.108:8085";

export const login =  (email,password) => async dispatch => {
    try {
        const {data} = await axios.post(baseURL+ "/user/login",{email,password},{headers: {
            "Content-Type": "application/json"
        }});
        
        if (data.success) {
            dispatch({type: LOGIN_SUCCESS,payload: data})
        }

    } catch (error) {
        console.log(error);
        dispatch({type: LOGIN_FAILURE})
    }
}

export const logout = () => dispatch => {
    dispatch({type: LOGOUT})
}