import firebase from "firebase"
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCXUEo7uFvbS1XLxX2hMAmXWz02eCrGgpk",
  authDomain: "login-a0a58.firebaseapp.com",
  projectId: "login-a0a58",
  storageBucket: "login-a0a58.appspot.com",
  messagingSenderId: "661746513594",
  appId: "1:661746513594:web:e9d522d33d965aff693483"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
