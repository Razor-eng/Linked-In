import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD5_G2cnx9Tn0Apo_JPHri6o2weeq1qY04",
    authDomain: "linkedin-rajat.firebaseapp.com",
    projectId: "linkedin-rajat",
    storageBucket: "linkedin-rajat.appspot.com",
    messagingSenderId: "320475767569",
    appId: "1:320475767569:web:8e6e4182be9aaa2eeb22b0"
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();

export { db, auth };