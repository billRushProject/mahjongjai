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
  apiKey: "AIzaSyAR2u2UEMVfWYuyBnLcluGuGiNvTLagMmk",
  authDomain: "partyroom-calendar.firebaseapp.com",
  databaseURL: "https://partyroom-calendar-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "partyroom-calendar",
  storageBucket: "partyroom-calendar.appspot.com",
  messagingSenderId: "886378014469",
  appId: "1:886378014469:web:1be75202e9ddfd6f8cb96c",
  measurementId: "G-EM1RBTZC3Z"
};

  const app =initializeApp(firebaseConfig);
  const db =getFirestore(app);
  export default db;