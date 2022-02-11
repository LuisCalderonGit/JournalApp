import { db } from '../firebase/firebase-config';
import { getDocs, collection } from 'firebase/firestore'




export const loadNotes = async (uid) => {

    const notesLoaded = await getDocs(collection(db, `${uid}/journal/notes`));
    const notes = [];

    notesLoaded.forEach(note => notes.push({
        id: note.id,
        ...note.data()
    }));

    return notes;

}