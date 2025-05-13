// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsI9W4UhyRXlq0hVIpuqpxNRzCMQMk--s",
  authDomain: "prepwise-9e4ba.firebaseapp.com",
  projectId: "prepwise-9e4ba",
  storageBucket: "prepwise-9e4ba.firebasestorage.app",
  messagingSenderId: "342693939677",
  appId: "1:342693939677:web:263316bbf2ffaa550f0e34",
  measurementId: "G-CTRTGPZXEG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);