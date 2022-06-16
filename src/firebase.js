/**
    * @description      : 
    * @author           : LKY
    * @group            : 
    * @created          : 01/06/2022 - 17:29:16
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 01/06/2022
    * - Author          : LKY
    * - Modification    : 
**/

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

import {initializeApp}from 'firebase/app';
import {getFirestore}from 'firebase/firestore';



const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_API_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

  const app =initializeApp(firebaseConfig);
  const db =getFirestore(app);
  export default db;