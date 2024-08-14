// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJUAXODSX3cCe_r9N47HdqJx0N2-YkN10",
  authDomain: "gamesbazaar-ad0de.firebaseapp.com",
  projectId: "gamesbazaar-ad0de",
  storageBucket: "gamesbazaar-ad0de.appspot.com",
  messagingSenderId: "621293494957",
  appId: "1:621293494957:web:25aad9d4a7044793169c24",
  measurementId: "G-G0QMZT64ZZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
