// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  GoogleAuthProvider, 
  signInWithPopup, 
  sendPasswordResetEmail 
} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
 

const firebaseConfig = {
    apiKey: "AIzaSyA6jaYK4e7LFtqzycT-KO5sDYi7ipWf4oA",
    authDomain: "api-verse-dc2bc.firebaseapp.com",
    projectId: "api-verse-dc2bc",
    storageBucket: "api-verse-dc2bc.firebasestorage.app",
    messagingSenderId: "692038670622",
    appId: "1:692038670622:web:3ed37cf8f741078bb8910f",
    measurementId: "G-9YF1DR0SFZ"
  };

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
const auth = getAuth(app);
 
export { 
  auth, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  sendPasswordResetEmail,
 
};
