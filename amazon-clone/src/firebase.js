import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAZpNzkXnQosHzyw4IiQQ7xqK8RgYEgc9k",
  authDomain: "e-clone-f8b59.firebaseapp.com",
  projectId: "e-clone-f8b59",
  storageBucket: "e-clone-f8b59.appspot.com",
  messagingSenderId: "306390544975",
  appId: "1:306390544975:web:4fd113d9a5e189e56fb03a",
  measurementId: "G-BXRPHER68Y"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};