import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDWDgwSBkVSi40Rn--Y6VTvzt1jtyz9yOc",
    authDomain: "restaurant-ce49a.firebaseapp.com",
    projectId: "restaurant-ce49a",
    storageBucket: "restaurant-ce49a.appspot.com",
    messagingSenderId: "768858658134",
    appId: "1:768858658134:web:eb0d57626841318cbcb2f7"
  };
  // Initialize Firebase
   export const app = firebase.initializeApp(firebaseConfig);