import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrsmqWemOhFHzMbeBjjjleDVZG4pQ06Kc",
  authDomain: "e-ride-a9bd3.firebaseapp.com",
  projectId: "e-ride-a9bd3",
  storageBucket: "e-ride-a9bd3.appspot.com",
  messagingSenderId: "718602706766",
  appId: "1:718602706766:web:4f62cb113716319aaf881f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
