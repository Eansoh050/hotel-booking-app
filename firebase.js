import { initializeApp } from "firebase/app";
import { getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFireStore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCoeyadcL7AYQJls8EoIZ0fliSOsI6M6ls",
  authDomain: "booking-project-3bcc8.firebaseapp.com",
  projectId: "booking-project-3bcc8",
  storageBucket: "booking-project-3bcc8.appspot.com",
  messagingSenderId: "935999358885",
  appId: "1:935999358885:web:5e4bfcbceecbe11a390a4c",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFireStore();

export { auth, db };
