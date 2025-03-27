import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBTH2nA0nHar1aDx4wG2RjpLod1WSCZqBo",
  authDomain: "crwn-clothing-database-5566c.firebaseapp.com",
  projectId: "crwn-clothing-database-5566c",
  storageBucket: "crwn-clothing-database-5566c.firebasestorage.app",
  messagingSenderId: "603606090203",
  appId: "1:603606090203:web:e8db1f28686d3f5fab67fe"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);