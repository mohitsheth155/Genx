// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcpS2cRmlL7krUQPfhGJTFZEpNBUZ8EIQ",
  authDomain: "genx1-5225e.firebaseapp.com",
  projectId: "genx1-5225e",
  storageBucket: "genx1-5225e.appspot.com",
  messagingSenderId: "409603272242",
  appId: "1:409603272242:web:aadf6fda006ada13f2162b",
  measurementId: "G-D6WXEK7JK5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)