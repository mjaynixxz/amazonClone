import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkuKd7Ui3f8firwbZW-aCcf_lr3YyLzrU",
  authDomain: "eclone-c2621.firebaseapp.com",
  projectId: "eclone-c2621",
  storageBucket: "eclone-c2621.appspot.com",
  messagingSenderId: "498302182129",
  appId: "1:498302182129:web:8b1a56cdcbe218f2a77f50",
  measurementId: "G-VFRJBWR6XQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
