import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-analytics.js";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut
} from "https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB70KVKR2qFqxjKtw7Dg1WngHH9BAz3OM4",
  authDomain: "tian-pinjam-buku.firebaseapp.com",
  databaseURL: "https://tian-pinjam-buku-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tian-pinjam-buku",
  storageBucket: "tian-pinjam-buku.firebasestorage.app",
  messagingSenderId: "212230335494",
  appId: "1:212230335494:web:518350c50c3c8ae6ef2787",
  measurementId: "G-XD6FD5SQMH"
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);

export const auth = getAuth(app);

export async function applyPersistence(remember) {
  await setPersistence(
    auth,
    remember ? browserLocalPersistence : browserSessionPersistence
  );
}

export const watchAuth = (cb) => onAuthStateChanged(auth, cb);

export const loginUser = (email, pass, remember) => {
  return applyPersistence(remember).then(() =>
    signInWithEmailAndPassword(auth, email, pass)
  );
};

export const registerUser = (email, pass, remember) => {
  return applyPersistence(remember).then(() =>
    createUserWithEmailAndPassword(auth, email, pass)
  );
};

export const resetPassword = (email) =>
  sendPasswordResetEmail(auth, email);

export const logoutUser = () => signOut(auth);