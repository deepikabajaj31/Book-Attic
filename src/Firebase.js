// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDSkfBbYoE9go87lpRfmlE1Tyj0Skfq1lU",
    authDomain: "groceteria-9073d.firebaseapp.com",
    projectId: "groceteria-9073d",
    storageBucket: "groceteria-9073d.appspot.com",
    messagingSenderId: "900451481176",
    appId: "1:900451481176:web:3844b17b6fee4ac3297c2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
export { db, auth };