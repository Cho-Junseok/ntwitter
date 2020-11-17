import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA711_uwu_TRd3B0R7xztfaxNv1ju6kT2U",
  authDomain: "ntwitter-d7313.firebaseapp.com",
  databaseURL: "https://ntwitter-d7313.firebaseio.com",
  projectId: "ntwitter-d7313",
  storageBucket: "ntwitter-d7313.appspot.com",
  messagingSenderId: "608468988500",
  appId: "1:608468988500:web:3076b585adaae48e02b3c1",
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();
