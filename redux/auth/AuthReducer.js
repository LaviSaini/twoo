import {LOGIN_SUCCESS,LOGINI_FAILURE,LOGOUT,GETTREEDATA} from '../types';

const initialState = {
    isAuth: false,
    user: {},
}

const AuthReducer= (state = initialState ,action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                isAuth: true,
                user: action.payload
            }
        case LOGINI_FAILURE:
            return {
                isAuth: false
            }
        case LOGOUT:
            return {
                isAuth: false,
                tree:[],
                user:  {}
            }
        case GETTREEDATA:
            return{
                ...state,
                tree:action.payload
            }
        default:
            return state
    }
}
export default AuthReducer;