// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getAuth } from "firebase/auth"
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzChYlQ51qiO3XRTxMp-RqB-91_dkg94E",
  authDomain: "simple-notes-firebase-7661d.firebaseapp.com",
  projectId: "simple-notes-firebase-7661d",
  storageBucket: "simple-notes-firebase-7661d.appspot.com",
  messagingSenderId: "490177955936",
  appId: "1:490177955936:web:fde317747ad5f5b6f0db05",
  measurementId: "G-TYTRQD5B7Y",
  databaseURL:
    "https://simple-notes-firebase-7661d-default-rtdb.asia-southeast1.firebasedatabase.app/",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const auth = getAuth(app)
const database = getDatabase(app)

export { app, analytics, auth, database }
