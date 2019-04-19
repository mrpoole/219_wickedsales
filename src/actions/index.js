import types from './types';

export function signIn(user){
    return {
        type: types.SIGN_IN,
        email: user.email
    }
}

export function signOut(){
    return {
        type: types.SIGN_OUT
    }
}