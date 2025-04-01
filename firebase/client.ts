import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCfJu1a_EqV_0L3vsJAUuSTzwgeKZyXkPA",
  authDomain: "ai-interview-prep-8a235.firebaseapp.com",
  projectId: "ai-interview-prep-8a235",
  storageBucket: "ai-interview-prep-8a235.firebasestorage.app",
  messagingSenderId: "177365326508",
  appId: "1:177365326508:web:4ef0281c41db3908e05d09",
  measurementId: "G-JSQPM19DZ1"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);