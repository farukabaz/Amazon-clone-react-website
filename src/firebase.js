import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyChQ47NwSxoCbxSOADA7WkoAAb6we0skXg",
    authDomain: "clone-71e78.firebaseapp.com",
    databaseURL: "https://clone-71e78.firebaseio.com",
    projectId: "clone-71e78",
    storageBucket: "clone-71e78.appspot.com",
    messagingSenderId: "220369551932",
    appId: "1:220369551932:web:736b2e1323f615d57a3939",
    measurementId: "G-SKDVFJN8ZC"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};