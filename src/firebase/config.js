// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5ONZ2GPSzcnb1553xh3eG5DZ_IuYG9xs",
  authDomain: "rj-38040.firebaseapp.com",
  projectId: "rj-38040",
  storageBucket: "rj-38040.appspot.com",
  messagingSenderId: "15628119514",
  appId: "1:15628119514:web:8b2fc177d27a14541f64e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)