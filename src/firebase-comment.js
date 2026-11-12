import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyBx3OfJXkiEI2R4-3m3EM7IcPCsKOH_A7E",

  authDomain: "vladislavdev-f1a00.firebaseapp.com",

  projectId: "vladislavdev-f1a00",

  storageBucket: "vladislavdev-f1a00.firebasestorage.app",

  messagingSenderId: "554005939382",

  appId: "1:554005939382:web:8a9626c09eddacd633d217",

  measurementId: "G-DG0F49TFH8"

};

  
  
  
  
  
// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };