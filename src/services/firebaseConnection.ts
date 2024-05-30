import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyAfTy5anlL3_jWnMdOOdI_2OIahx0cFMSE",
  authDomain: "dev-link-b88b4.firebaseapp.com",
  projectId: "dev-link-b88b4",
  storageBucket: "dev-link-b88b4.appspot.com",
  messagingSenderId: "932571155617",
  appId: "1:932571155617:web:f4f36bb4373c1ef93134e0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }