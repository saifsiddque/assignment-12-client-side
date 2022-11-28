// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyD3IwBzxARqWr7qbirSaUBjVezRuoVolqc",
  // authDomain: "doctors-portal-93244.firebaseapp.com",
  // projectId: "doctors-portal-93244",
  // storageBucket: "doctors-portal-93244.appspot.com",
  // messagingSenderId: "127292068100",
  // appId: "1:127292068100:web:2aba5830c6769a47c90051"



  apiKey:process.env.REACT_APP_NO_apiKey,
  authDomain:process.env.REACT_APP_NO_authDomain,
  projectId:process.env.REACT_APP_NO_projectId,
  storageBucket:process.env.REACT_APP_NO_storageBucket,
  messagingSenderId:process.env.REACT_APP_NO_messagingSenderId,
  appId:process.env.REACT_APP_NO_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app ;