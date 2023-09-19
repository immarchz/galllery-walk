import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCCpuDcqdAJU5iR-T9Wwk5fYDMHRUIRY_U",
  authDomain: "gallery-walk-b3312.firebaseapp.com",
  projectId: "gallery-walk-b3312",
  storageBucket: "gallery-walk-b3312.appspot.com",
  messagingSenderId: "212046405718",
  appId: "1:212046405718:web:816da28c19950ae98e9bf7",
};

const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);

export { auth, googleProvider };
