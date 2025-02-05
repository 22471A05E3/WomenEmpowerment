// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {
  getDatabase,
  ref,
  push,
  set,
  get,
  update,
  remove,
  onValue,
} from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmB_IRjDBkhmKrQ6Bz1ahc8EfuvXlKgGE",
  authDomain: "backend-6a790.firebaseapp.com",
  databaseURL: "https://backend-6a790-default-rtdb.firebaseio.com/",
  projectId: "backend-6a790",
  storageBucket: "backend-6a790.firebasestorage.app",
  messagingSenderId: "753769746545",
  appId: "1:753769746545:web:98672ab85e181795474bd0",
  measurementId: "G-5SQ4WC8D60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app);
export const db = getDatabase(app);

export {ref,push,set,get,update,remove,onValue};
