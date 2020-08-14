import firebase from "firebase";

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyCBh2Yxmt5uIihqPkIzaDTU5Eu7v10scyU",
    authDomain: "instagram-clone-react-fi-91d29.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-fi-91d29.firebaseio.com",
    projectId: "instagram-clone-react-fi-91d29",
    storageBucket: "instagram-clone-react-fi-91d29.appspot.com",
    messagingSenderId: "715356302298",
    appId: "1:715356302298:web:9e5f0e5d8780441d696ee3",
    measurementId: "G-F2W4P0YHTS"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { db, auth, storage};