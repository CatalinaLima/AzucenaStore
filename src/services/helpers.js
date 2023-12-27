//Para exportar los datos de forma local hacia Firebase

import { initializeApp } from "firebase/app";
import {getFirestore, collection, addDoc, writeBatch} from 'firebase/firestore'
import productsStore from '../data/productsStore'


const firebaseConfig = {
  apiKey: "AIzaSyAcua1-Rgo6tKzlAdNB_WxhCCgYJx8L1gI",
  authDomain: "azucena-homestore.firebaseapp.com",
  projectId: "azucena-homestore",
  storageBucket: "azucena-homestore.appspot.com",
  messagingSenderId: "389198513523",
  appId: "1:389198513523:web:7c23951d85f24f4493f106"
};


  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp)

  export async function exportData() {
    const productsCollectionRef = collection(db, "products");
  
    for (let item of productsStore) {
      item.index = item.id;
      delete item.id;
      const res = await addDoc(productsCollectionRef, item);
      console.log("Documento creado:", res.id);
    }
  }

