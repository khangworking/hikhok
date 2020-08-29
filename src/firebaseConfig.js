import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC59YOYziUq0Lay1UzmFt9lPfDL3h4-mQc",
  authDomain: "hikhok-47b02.firebaseapp.com",
  databaseURL: "https://hikhok-47b02.firebaseio.com",
  projectId: "hikhok-47b02",
  storageBucket: "hikhok-47b02.appspot.com",
  messagingSenderId: "193917479587",
  appId: "1:193917479587:web:21f360c2d0e56e799b6d16"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()

export default db;