import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfDGbEt_MCwGDLkWHsF4sFQmkJigu2AxQ",
  authDomain: "life-journal-33e14.firebaseapp.com",
  projectId: "life-journal-33e14",
  storageBucket: "life-journal-33e14.firebasestorage.app",
  messagingSenderId: "311523382666",
  appId: "1:311523382666:web:27fa6318fa7274e8472473"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);