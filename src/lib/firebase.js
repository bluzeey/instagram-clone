import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
//import { seedDatabase } from '../seed';

const config={
  apiKey: "AIzaSyAeYCFJVRqAmk24QXhdqQCkZLOyCx9j9Vk",
  authDomain: "instagram-clone-9e2ac.firebaseapp.com",
  projectId: "instagram-clone-9e2ac",
  storageBucket: "instagram-clone-9e2ac.appspot.com",
  messagingSenderId: "364450652842",
  appId: "1:364450652842:web:1d882b13a65d9dc40a66d3",
  measurementId: "G-KT4THSGG3C"
}

const Firebase =firebase.initializeApp(config);
const FieldValue=firebase.firestore;


//seedDatabase(Firebase);

export {Firebase,FieldValue}