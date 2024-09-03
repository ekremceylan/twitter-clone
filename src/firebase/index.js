// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth ,GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASnADH99LUlpSP8onYOebuTGDV_QuXesU",
  authDomain: "hs-twitter-8b5d0.firebaseapp.com",
  projectId: "hs-twitter-8b5d0",
  storageBucket: "hs-twitter-8b5d0.appspot.com",
  messagingSenderId: "110680314338",
  appId: "1:110680314338:web:c1629f1410a58ea4aa29bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//kimlik doğrulama yapısının referansını al
export const auth=getAuth(app);
//google kurulumu
export const provider=new GoogleAuthProvider()
//veritabanının referansını verir
export const db=getFirestore(app);
//Storage in referansını verir
export const storage=getStorage(app);