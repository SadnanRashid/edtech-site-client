import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA1C_KUqeuDlPQ7f5sJ9bNoP55Y8mbN-cI",
  authDomain: "course-site-ph.firebaseapp.com",
  projectId: "course-site-ph",
  storageBucket: "course-site-ph.appspot.com",
  messagingSenderId: "1027191557737",
  appId: "1:1027191557737:web:5bdd67bf386e7615ff1cf8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
