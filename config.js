import * as firebase from "firebase";
require("@firebase/firestore");





var firebaseConfig = {

    apiKey: "AIzaSyDGVFIHH7Tx57sE9BxhmG9uzXKW7PvaL7Y",
    authDomain: "project-77-a0e5b.firebaseapp.com",
    projectId: "project-77-a0e5b",
    storageBucket: "project-77-a0e5b.appspot.com",
    messagingSenderId: "309732650764",
    appId: "1:309732650764:web:b0d04e5b363d3b33c42329"
  };
  const firebaseApp=  firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore()
  // Initialize Firebase

  export default db;