// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJDnWXRLOes2GrO8Knp_FxsqH8CUCHBXU",
  authDomain: "fir-authentication-330d1.firebaseapp.com",
  projectId: "fir-authentication-330d1",
  storageBucket: "fir-authentication-330d1.appspot.com",
  messagingSenderId: "181696522661",
  appId: "1:181696522661:web:a7085f27f9b65483aea04c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app