import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
   apiKey: "AIzaSyAzrodNZzXJJXYQqFAYmWbJ8jvSmVOtPoE",
   authDomain: "thirdfunding-be159.firebaseapp.com",
   projectId: "thirdfunding-be159",
   storageBucket: "thirdfunding-be159.appspot.com",
   messagingSenderId: "861312471868",
   appId: "1:861312471868:web:0f54531be2db93ab8b4439",
   measurementId: "G-CFSN7V611T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// services
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

const provider = new GoogleAuthProvider()

export { app, auth, db, provider, storage }