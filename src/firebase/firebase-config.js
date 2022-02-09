
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";


import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC_HubNOB2D4VHkeEeKX4eAXyIFJjBi6u8",
    authDomain: "react-journalapp-lc.firebaseapp.com",
    projectId: "react-journalapp-lc",
    storageBucket: "react-journalapp-lc.appspot.com",
    messagingSenderId: "348757097561",
    appId: "1:348757097561:web:9243e87121ba2a1b660548"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig); /*base de datos */
initializeApp(firebaseConfig);
const db = getFirestore()                                    /*  */;
const googleAuthProvider = new GoogleAuthProvider();      /*  */

export {
    db,
    googleAuthProvider,
}