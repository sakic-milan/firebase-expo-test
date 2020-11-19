import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2cGp1PZfR5bDYCHqEtEziA_daXEJLpqg",
  authDomain: "rn-firebase-mobx-c1d79.firebaseapp.com",
  databaseURL: "https://rn-firebase-mobx-c1d79.firebaseio.com",
  projectId: "rn-firebase-mobx-c1d79",
  storageBucket: "rn-firebase-mobx-c1d79.appspot.com",
  messagingSenderId: "350103546469",
  appId: "1:350103546469:web:106104232cb1a9c29fb48c",
  measurementId: "G-4GDVVB5F5F",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();

export { firebase, auth };
