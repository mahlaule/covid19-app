// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBE_1r5py6PXZndrspO4HD6XDgHB95sWJs",
  authDomain: "covid19-app-af6bf.firebaseapp.com",
  projectId: "covid19-app-af6bf",
  storageBucket: "covid19-app-af6bf.appspot.com",
  messagingSenderId: "585089754306",
  appId: "1:585089754306:web:e07f7f4910ce99c624c75b",
  measurementId: "G-1M5X2T9GS3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);