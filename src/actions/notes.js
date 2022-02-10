import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebase-config";
import { types } from "../types/types";


export const startNewNote = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        };

        const refDoc = await addDoc(collection(db, `${uid}/journal/notes`), newNote);
        // console.log(refDoc.id)
        dispatch(activeNote(refDoc.id, newNote));
    }
};

export const activeNote = (id, note) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note,
    }
})