import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBVb51x9E67AHERJl1_4yG1jcRsG7jdXbY",
  authDomain: "disney-auth-45405.firebaseapp.com",
  projectId: "disney-auth-45405",
  storageBucket: "disney-auth-45405.appspot.com",
  messagingSenderId: "800374716548",
  appId: "1:800374716548:web:cd60e160cd3e9a168faad1",
  measurementId: "G-HWQD0HYE08"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;