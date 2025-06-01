import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore} from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDY-sSvhMdoW1FR_OzH2HmHGK3dFTFlYiQ",
  authDomain: "pitchmind-5aa3d.firebaseapp.com",
  projectId: "pitchmind-5aa3d",
  storageBucket: "pitchmind-5aa3d.firebasestorage.app",
  messagingSenderId: "413977522869",
  appId: "1:413977522869:web:4d3797133d7e53124f44fc",
  measurementId: "G-17KN62S3EF"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app)
export const db = getFirestore(app)
