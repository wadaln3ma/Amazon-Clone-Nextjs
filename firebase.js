import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

 const firebaseConfig = {
  apiKey: "AIzaSyBxY-FmbpyNdb-LgXvp28o2RrXbp61BxxE",
  authDomain: "amazn-clone-nextjs.firebaseapp.com",
  projectId: "amazn-clone-nextjs",
  storageBucket: "amazn-clone-nextjs.appspot.com",
  messagingSenderId: "3865431533",
  appId: "1:3865431533:web:2dde72e8819f90b0e1abe4"
};

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export default db
