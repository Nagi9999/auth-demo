// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-6b9b4.firebaseapp.com",
  projectId: "mern-auth-6b9b4",
  storageBucket: "mern-auth-6b9b4.appspot.com",
  messagingSenderId: "270340938832",
  appId: "1:270340938832:web:3c37729f457817c3a64555"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);