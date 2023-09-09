// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6tA3RC9j6iVR3SDVapqjcol8Ua988lwY",
  authDomain: "netflix-gpt-ac812.firebaseapp.com",
  projectId: "netflix-gpt-ac812",
  storageBucket: "netflix-gpt-ac812.appspot.com",
  messagingSenderId: "690267965515",
  appId: "1:690267965515:web:385e589725a7427286e5ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();