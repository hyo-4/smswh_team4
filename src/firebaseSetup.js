// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrDU2Gh4m97c-pJT3kP0X9rYSETKwz9D0",
  authDomain: "mysome-47c20.firebaseapp.com",
  projectId: "mysome-47c20",
  storageBucket: "mysome-47c20.appspot.com",
  messagingSenderId: "270507813467",
  appId: "1:270507813467:web:0ada638d666066ef11ad7e"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const authService = getAuth();
export const dbService = getFirestore();