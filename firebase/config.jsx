import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore/lite";


const firebaseConfig = {
  apiKey: "AIzaSyBPZewMpILBSc6v3mzIPm34whZx_J7mK0g",
  authDomain: "il-vianno.firebaseapp.com",
  projectId: "il-vianno",
  storageBucket: "il-vianno.firebasestorage.app",
  messagingSenderId: "13911707398",
  appId: "1:13911707398:web:152756a57850ed6f4f1887"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const db = getFirestore (app)