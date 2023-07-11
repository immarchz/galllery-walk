import { initializeApp } from "firebase/app";
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
