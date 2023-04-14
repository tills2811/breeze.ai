
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBUVkZJVLkWk7_xlnTf3MiH-BADyIteOQ8",
    authDomain: "breeze-60736.firebaseapp.com",
    projectId: "breeze-60736",
    storageBucket: "breeze-60736.appspot.com",
    messagingSenderId: "1098078078841",
    appId: "1:1098078078841:web:6b695ac122fad592b351a8",
    measurementId: "G-R0PTSK8E6G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
