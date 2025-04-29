import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAfTQy11VJotpdE4pAaqCAjk7-sxEumHRI",
  authDomain: "react-notes-7879a.firebaseapp.com",
  projectId: "react-notes-7879a",
  storageBucket: "react-notes-7879a.firebasestorage.app",
  messagingSenderId: "494417041699",
  appId: "1:494417041699:web:8d76817f57f34b0dc59496"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
