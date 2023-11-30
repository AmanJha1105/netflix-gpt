// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDbdNznGgX4VLdbQoNIxBVyp2Bue3A5-c",
  authDomain: "netflix-gpt-812f5.firebaseapp.com",
  projectId: "netflix-gpt-812f5",
  storageBucket: "netflix-gpt-812f5.appspot.com",
  messagingSenderId: "939672366336",
  appId: "1:939672366336:web:5f45a9c079b980d5dbd7e5",
  measurementId: "G-Q94ZPLQGLZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth= getAuth();