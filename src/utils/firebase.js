// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXGtCBZ9PIbH77z_Ym8H9P0_TXv2s0bws",
  authDomain: "netflixgpt-43e7a.firebaseapp.com",
  projectId: "netflixgpt-43e7a",
  storageBucket: "netflixgpt-43e7a.appspot.com",
  messagingSenderId: "297822116577",
  appId: "1:297822116577:web:84deba54ddba9df77b35a0",
  measurementId: "G-V7P3Z7XY96",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
