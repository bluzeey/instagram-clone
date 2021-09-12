import Firebase from 'firebase/compat/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAeYCFJVRqAmk24QXhdqQCkZLOyCx9j9Vk",
  authDomain: "instagram-clone-9e2ac.firebaseapp.com",
  projectId: "instagram-clone-9e2ac",
  storageBucket: "instagram-clone-9e2ac.appspot.com",
  messagingSenderId: "364450652842",
  appId: "1:364450652842:web:1d882b13a65d9dc40a66d3",
  measurementId: "G-KT4THSGG3C"
}

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
