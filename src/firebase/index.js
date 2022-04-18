//configuration de firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA9Ky90zhksnZHpbOjvGu8LpZWc25tK_AE",
  authDomain: "loginform-87021.firebaseapp.com",
  projectId: "loginform-87021",
  storageBucket: "loginform-87021.appspot.com",
  messagingSenderId: "534164312892",
  appId: "1:534164312892:web:bffa6243aced1808f30439"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {auth}