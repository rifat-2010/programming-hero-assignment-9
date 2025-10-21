// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7aulC0Kq0iLYOJuXrx4J1_EZIREjDnA4",
  authDomain: "programming-hero-assignm-b29db.firebaseapp.com",
  projectId: "programming-hero-assignm-b29db",
  storageBucket: "programming-hero-assignm-b29db.firebasestorage.app",
  messagingSenderId: "849506046517",
  appId: "1:849506046517:web:05e6d9dcac5456753a577c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);