// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAQyBwAee7UtORYV7XgXDfUGfG_QAxI3vs",
  authDomain: "ashu-chatapp-2102d.firebaseapp.com",
  projectId: "ashu-chatapp-2102d",
  storageBucket: "ashu-chatapp-2102d.appspot.com",
  messagingSenderId: "969983332538",
  appId: "1:969983332538:web:9b730e051910ec97b77283",
  measurementId: "G-DDKPVPB5CC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);