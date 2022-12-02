import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD4A80CFihEiAx-wjMbLqpB0JsVmLEdm2k",
  authDomain: "blog-react-da49d.firebaseapp.com",
  projectId: "blog-react-da49d",
  storageBucket: "blog-react-da49d.appspot.com",
  messagingSenderId: "703165485978",
  appId: "1:703165485978:web:ca8a0af37d4018309a2023"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
