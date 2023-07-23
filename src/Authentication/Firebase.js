import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBYPZXI7kN4JhTCOyiVUHDG58EWXKUz0ts",
  authDomain: "coinbase-898d6.firebaseapp.com",
  projectId: "coinbase-898d6",
  storageBucket: "coinbase-898d6.appspot.com",
  messagingSenderId: "728443354847",
  appId: "1:728443354847:web:a3720be39d42cc4c71336a"
};

export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore();