import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  // CREDITIONAL_DATA & API_KEY FROM USER FIRESTORE ACCOUNT
});
// Initialize Firebase
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
export { db, auth, storage };
