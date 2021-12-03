import {initializeApp,getApps,getApp} from 'firebase/app';
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyDhlouGObLnPol_ElPKlyGmM9wzgfuMxW8",
    authDomain: "instagram2-45bea.firebaseapp.com",
    projectId: "instagram2-45bea",
    storageBucket: "instagram2-45bea.appspot.com",
    messagingSenderId: "219328528162",
    appId: "1:219328528162:web:f925db355016ed9d03af7b",
    measurementId: "G-GLBZKK006X"
  };

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp;
const db = getFirestore();
const storage = getStorage();


export {app,db,storage}