// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGFUtRk_m46afwRvv6l_IdnzoqmJzwDLM",
  authDomain: "dragon-news-127db.firebaseapp.com",
  projectId: "dragon-news-127db",
  storageBucket: "dragon-news-127db.firebasestorage.app",
  messagingSenderId: "390064910833",
  appId: "1:390064910833:web:e92a14f820be8d0cb2d450"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
