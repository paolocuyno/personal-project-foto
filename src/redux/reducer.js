import axios from 'axios';

const initialState={
    username:'',
    profile_pic:''
}

const UPDATE_USER='UPDATE_USER'
const LOGOUT_USER='LOGOUT_USER'

export function updateUser(usernameStr){
    return{
        type:UPDATE_USER,
        payload:usernameStr
    }
}

export function logout(state = initialState, action) {
    switch(action.type) {
       
        case LOGOUT_USER:
            return initialState;
        default: return state;
    }
}
export default function reducer(state=initialState, action){
    switch(action.type){
        case UPDATE_USER:
            return{
                ...state,
                username: action.payload, 
            }
        default: return state
    }
}

