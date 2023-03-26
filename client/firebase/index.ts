import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = { 
    apiKey: "AIzaSyB1f5FwbSRlF9caqDldqDUZOhq84twECN8",
    authDomain: "thirdfunding.firebaseapp.com",
    databaseURL: "https://thirdfunding-default-rtdb.firebaseio.com",
    projectId: "thirdfunding",
    storageBucket: "thirdfunding.appspot.com",
    messagingSenderId: "144480579927",
    appId: "1:144480579927:web:f07ee10321cf1f455bce12"
 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// services
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

const provider = new GoogleAuthProvider()

export {app,auth, db, provider, storage }