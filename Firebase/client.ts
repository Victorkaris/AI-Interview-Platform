import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAxQcUH_Zk97eUYPqrWM6MZ72quN59h_s8",
  authDomain: "prepwise-23dff.firebaseapp.com",
  projectId: "prepwise-23dff",
  storageBucket: "prepwise-23dff.firebasestorage.app",
  messagingSenderId: "430726754226",
  appId: "1:430726754226:web:3b76cdd884e41914bafeab",
  measurementId: "G-7W18N0K33R"
};


// Initialize Firebase
const app = !getApps.length ?    initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);