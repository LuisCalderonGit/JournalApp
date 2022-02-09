import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile, signInWithPopup, signOut } from 'firebase/auth';
import { googleAuthProvider } from '../firebase/firebase-config';


import { types } from "../types/types";
import { finishLoading, startLoading } from './ui';

const auth = getAuth();

export const startLoginEmailPassword = (email, pasword) => {

    return (dispatch) => {

        dispatch(startLoading());
        // const auth = getAuth();
        signInWithEmailAndPassword(auth, email, pasword)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName));
                dispatch(finishLoading());
            })
            .catch(e => {
                console.log(e);
                dispatch(finishLoading);
            })
    }
};


export const startRegisterWithEmailPassword = (email, password, name) => {
    return (dispatch) => {
        // const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
                await updateProfile(auth.currentUser, { displayName: name });
                dispatch(login(user.uid, user.displayName));
            })
            .catch(e => {
                console.log(e);
            })
    }

};

export const startGoogleLogin = () => {
    return (dispatch) => {

        signInWithPopup(auth, googleAuthProvider)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName))
            });

    }
};

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName,
    }
});

export const logout = () => ({
    type: types.logout
});

export const startLogout = () => {
    return async (dispatch) => {
        await signOut(auth);
        dispatch(logout())
    }
}


// export const login = (uid, displayName) => {
//     return {
//         type: types.login,
//         payload: {
//             uid,
//             displayName
//         }
//     }
// }