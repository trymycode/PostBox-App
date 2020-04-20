import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyBPZAqChmaudLsTC2QHL0zsQX0OhUrkWQ4",
  authDomain: "social-media-app-postbox.firebaseapp.com",
  databaseURL: "https://social-media-app-postbox.firebaseio.com",
  projectId: "social-media-app-postbox",
  storageBucket: "social-media-app-postbox.appspot.com",
  messagingSenderId: "164712208613",
  appId: "1:164712208613:web:8551a5d490079f27779c0c",
  measurementId: "G-VKN24J9ZC3",
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
