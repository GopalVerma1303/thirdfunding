import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = { 
   //firebase keys
 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// services
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

const provider = new GoogleAuthProvider()

export {app,auth, db, provider, storage }