// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import {initializeApp,getApps,getApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
const firebaseConfig = {

  apiKey: "AIzaSyAeYCFJVRqAmk24QXhdqQCkZLOyCx9j9Vk",
  authDomain: "instagram-clone-9e2ac.firebaseapp.com",
  databaseURL: "https://instagram-clone-9e2ac-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "instagram-clone-9e2ac",
  storageBucket: "instagram-clone-9e2ac.appspot.com",
  messagingSenderId: "364450652842",
  appId: "1:364450652842:web:1d882b13a65d9dc40a66d3",
  measurementId: "G-KT4THSGG3C"

};


const app =!getApps().length ? initializeApp(firebaseConfig): getApp();
const db=getFirestore()
const storage=getStorage()

export { app, db, storage}