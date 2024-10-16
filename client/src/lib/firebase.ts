// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrkbI90Ggin-nmE1NY3oRUrxmwXuLNeT4",
  authDomain: "e-commmerecs.firebaseapp.com",
  projectId: "e-commmerecs",
  storageBucket: "e-commmerecs.appspot.com",
  messagingSenderId: "53525896317",
  appId: "1:53525896317:web:92bfadc494fc1bad7aa514",
  measurementId: "G-Y3YHGNZW4L"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
