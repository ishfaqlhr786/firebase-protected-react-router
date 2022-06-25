// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyCkT5dtSifQt1TuWWsriErKijU3XgyLjo0",
    authDomain: "fir-17june.firebaseapp.com",
    projectId: "fir-17june",
    storageBucket: "fir-17june.appspot.com",
    messagingSenderId: "690881520264",
    appId: "1:690881520264:web:d684c68ab3bf909379753d",
    measurementId: "G-BEQPTRZ12Y"
  };
  


// Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
   export {app,auth}
//const analytics = getAnalytics(app);