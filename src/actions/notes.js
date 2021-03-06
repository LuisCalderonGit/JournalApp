import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import Swal from "sweetalert2";

import { db } from "../firebase/firebase-config";
import { loadNotes } from "../helpers/LoadNotes";
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
});

export const startLoadingNotes = (uid) => {
    return async (dispatch) => {
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    }
};

export const setNotes = (notes) => ({
    type: types.notesLoad,
    payload: notes,
});

export const startSaveNote = (note) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;

        if (!note.url)
            delete note.url;

        const noteToFirestore = { ...note };
        delete noteToFirestore.id;
        const noteRef = doc(db, `${uid}/journal/notes/${note.id}`);
        await updateDoc(noteRef, noteToFirestore);

        dispatch(refreshNote(note.id, noteToFirestore));
        Swal.fire('Saved', note.title, 'success')
    }
};


export const refreshNote = (id, note) => ({
    type: types.notesUpdated,
    payload: {
        id,
        note: {
            id,
            ...note,
        }
    }
})