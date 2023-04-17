
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth,GithubAuthProvider, GoogleAuthProvider} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyAN3nFrPar9kZ-3vfy-EJNlsUgx1-LTBig",
  authDomain: "blogware-ad6b7.firebaseapp.com",
  projectId: "blogware-ad6b7",
  storageBucket: "blogware-ad6b7.appspot.com",
  messagingSenderId: "645762173327",
  appId: "1:645762173327:web:5ebd46465c4a74e4fce3fa",
};

const app = initializeApp(firebaseConfig);

export const auth= getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);