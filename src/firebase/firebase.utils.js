import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAWddUSUAwmvZiiJsCbg379OcXpl11Iik8",
  authDomain: "smnv-db.firebaseapp.com",
  projectId: "smnv-db",
  storageBucket: "smnv-db.appspot.com",
  messagingSenderId: "1033949933411",
  appId: "1:1033949933411:web:000e7f9c60d5c0e8472d56",
  measurementId: "G-FYMVEJWPY3",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
