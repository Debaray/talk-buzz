import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDprD0M-MBVFa3pFOIh0UKiVRdfpB9tI70",
    authDomain: "talk-buzz-ba00f.firebaseapp.com",
    projectId: "talk-buzz-ba00f",
    storageBucket: "talk-buzz-ba00f.appspot.com",
    messagingSenderId: "600369073879",
    appId: "1:600369073879:web:ad7edfc8512e1eaf4a2a92",
    measurementId: "G-9W9FWTS6T5"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
