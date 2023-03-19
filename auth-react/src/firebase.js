// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD8KTvpqa_sTKz3w1IMMjNTZ3OuhVoej94",
    authDomain: "auth-project-33517.firebaseapp.com",
    projectId: "auth-project-33517",
    storageBucket: "auth-project-33517.appspot.com",
    messagingSenderId: "984960349258",
    appId: "1:984960349258:web:99936d06d03a83ab0f22b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
