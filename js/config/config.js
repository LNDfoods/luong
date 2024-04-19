/**
 * @file config.js
 * @author Sanjay Sunil
 * @license MIT
 */

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

var firebaseConfig = {
  apiKey: "AIzaSyAXco-dKRlDgrzN6K4No73LarstGdzQZ9c",
  authDomain: "lnd-nhan-vien.firebaseapp.com",
  databaseURL: "https://lnd-nhan-vien-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "lnd-nhan-vien",
  storageBucket: "lnd-nhan-vien.appspot.com",
  messagingSenderId: "573851940489",
  appId: "1:573851940489:web:281fa21341b8b43274f858",
  measurementId: "G-NSS0XSRM13"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
