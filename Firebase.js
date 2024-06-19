// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyC8pf_ARalc7FQi2FM1CdfXe1f1omis_p4",
  authDomain: "vloggersfood-5cdf1.firebaseapp.com",
  projectId: "vloggersfood-5cdf1",
  storageBucket: "vloggersfood-5cdf1.appspot.com",
  messagingSenderId: "1083253671365",
  appId: "1:1083253671365:web:d5f0ebc0c8af68361b37ac",
  measurementId: "G-60WYKC0FHG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage=getStorage(app)


export {auth, provider,db, storage }