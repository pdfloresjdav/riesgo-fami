import { types } from '../types/types';


export const authReducer = (state = {}, action ) => {

    switch ( action.type ) {
        case types.login:
            localStorage.setItem('userToken', action.payload.token);
            return {
                ...action.payload,
                logged: true
            }

        case types.logout:
            localStorage.removeItem("userToken");
            return {
                logged: false
            }
    
        default:
            return state;
    }

}