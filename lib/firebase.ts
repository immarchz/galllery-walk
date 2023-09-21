import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAcehZ1CuluOySPGLl6LOm-HP6gIvSlDKE",
  authDomain: "gallery-walk-5a404.firebaseapp.com",
  projectId: "gallery-walk-5a404",
  storageBucket: "gallery-walk-5a404.appspot.com",
  messagingSenderId: "904558761214",
  appId: "1:904558761214:web:8322dbe455935b6f4301af",
};

const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);
const storage = getStorage(app);

export { auth, storage, ref, uploadBytes, getDownloadURL, googleProvider };
