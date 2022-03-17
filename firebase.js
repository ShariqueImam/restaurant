// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBKPNmlDFw0YZ9-K3nPybzTroc5STEyEp4",
    authDomain: "shariq-restaurant.firebaseapp.com",
    projectId: "shariq-restaurant",
    storageBucket: "shariq-restaurant.appspot.com",
    messagingSenderId: "110597235229",
    appId: "1:110597235229:web:b2d9ce4a026b9c2e811cf4",
    measurementId: "G-1V72PY7QMC"
  };

// Initialize Firebase
initializeApp(firebaseConfig);
export default getFirestore()


