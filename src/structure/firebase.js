import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBX7o_2V0-YpKb8-TT0_yT3p7DuigklSiE",
    authDomain: "crud-fotos-ii.firebaseapp.com",
    projectId: "crud-fotos-ii",
    storageBucket: "crud-fotos-ii.appspot.com",
    messagingSenderId: "319788598968",
    appId: "1:319788598968:web:699a8d5fe18776e7d0564d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export { db }