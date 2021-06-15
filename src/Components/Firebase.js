import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyBIavEabWC4a2_B1Tsk8OFogQbwfjBpLu0",
    authDomain: "fir-basics-34f2e.firebaseapp.com",
    projectId: "fir-basics-34f2e",
    storageBucket: "fir-basics-34f2e.appspot.com",
    messagingSenderId: "325752928654",
    appId: "1:325752928654:web:2652cf76fcb0203cae0cdf",
    measurementId: "G-KZFD65PDKR"
  };
  // Initialize Firebase
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebase.firestore();
  firebase.analytics();
  export default firebaseApp;