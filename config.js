import * as firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyAA9cW-O2cFgRhQh8uDpExoN08FxWjnvxo",
  authDomain: "c34-pro-real.firebaseapp.com",
  databaseURL: "https://c34-pro-real.firebaseio.com",
  projectId: "c34-pro-real",
  storageBucket: "c34-pro-real.appspot.com",
  messagingSenderId: "517300432287",
  appId: "1:517300432287:web:147ff4dfa80decc7c4e1aa"
};
 
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();