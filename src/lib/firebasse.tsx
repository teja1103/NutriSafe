import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAKFqeueSSRTL5dV5ZOid_jg8e0HOBpvaE",
    authDomain: "solutions-challenge-aebb8.firebaseapp.com",
    projectId: "solutions-challenge-aebb8",
    storageBucket: "solutions-challenge-aebb8.appspot.com",
    messagingSenderId: "989274902393",
    appId: "1:989274902393:web:1faf23ccabf6683d73e9a8",
    measurementId: "G-S0M4Y5ZFEZ"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig); // Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default auth;
