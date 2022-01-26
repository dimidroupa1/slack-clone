import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAX8QWPeqzMIydCsLfc59WYbAcijzGpvUA",
  authDomain: "slack-clone-fa690.firebaseapp.com",
  projectId: "slack-clone-fa690",
  storageBucket: "slack-clone-fa690.appspot.com",
  messagingSenderId: "965665816850",
  appId: "1:965665816850:web:55accc10303f55875733cb",
  measurementId: "G-JMMRQ7HC45"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };