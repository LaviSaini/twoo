import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, GETTREEDATA } from "../types";
import axios from "axios"


const baseURL = "http://18.207.182.108:8085";

export const login = (email, password) => async dispatch => {
    try {
        const { data } = await axios.post(baseURL + "/user/login", { email, password }, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (data.success) {
            dispatch({ type: LOGIN_SUCCESS, payload: data })
            console.log(data)
        }

    } catch (error) {
        console.log(error);
        dispatch({ type: LOGIN_FAILURE })
    }
}

export const logout = () => dispatch => {
    dispatch({ type: LOGOUT })
}
export const getBinaryTreeData = (userid) => async dispatch => {

    try {
        const { data } = await axios.get(baseURL + `/user/getTree/zlJp6nhMZ7ZgYRa7r8czJKNfQEKuKMkk3t`);

        if (data.success) {
            dispatch({ type: GETTREEDATA, payload: data.tree })
            console.log(data)
        }

    } catch (error) {
        console.log(error);

    }
}
