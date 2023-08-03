import { initializeApp } from "firebase/app";
<<<<<<< HEAD
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcehZ1CuluOySPGLl6LOm-HP6gIvSlDKE",
  authDomain: "gallery-walk-5a404.firebaseapp.com",
  projectId: "gallery-walk-5a404",
  storageBucket: "gallery-walk-5a404.appspot.com",
  messagingSenderId: "904558761214",
  appId: "1:904558761214:web:8322dbe455935b6f4301af",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
=======
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
>>>>>>> March
