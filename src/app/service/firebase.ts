// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPB9xBxhtblJefsAwfuh1rQvT1Y2RU5kY",
  authDomain: "next-auth-6b3e6.firebaseapp.com",
  projectId: "next-auth-6b3e6",
  storageBucket: "next-auth-6b3e6.appspot.com",
  messagingSenderId: "389678494986",
  appId: "1:389678494986:web:4520c1ec21b348af15b6f3",
  measurementId: "G-RL308RE12M"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app);

