  import firebase from 'firebase/app';
  import 'firebase/firestore';
  import 'firebase/auth';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCV4d6viVpsZaQhF446NXSP5wzC7LTWu6E",
    authDomain: "group-board-f813b.firebaseapp.com",
    databaseURL: "https://group-board-f813b.firebaseio.com",
    projectId: "group-board-f813b",
    storageBucket: "group-board-f813b.appspot.com",
    messagingSenderId: "281537906035",
    appId: "1:281537906035:web:1b15dc57e237ee3ba07106",
    measurementId: "G-1BPG15EMTW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export default firebase;