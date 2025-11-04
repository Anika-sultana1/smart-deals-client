// Import the functions you need from the SDKs you need
// DANGER TO SEND GITHUB


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBZ5LzA7_aHkJKwj1NhcDgQsVpPPEmzXc",
  authDomain: "smart-deals-auth-b601c.firebaseapp.com",
  projectId: "smart-deals-auth-b601c",
  storageBucket: "smart-deals-auth-b601c.firebasestorage.app",
  messagingSenderId: "925316579321",
  appId: "1:925316579321:web:be01495d0ca814a0164728",
  measurementId: "G-WD3BC4CHDG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);