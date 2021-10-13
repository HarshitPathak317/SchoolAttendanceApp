 import firebase from "firebase";

  var firebaseConfig = {
    apiKey: "AIzaSyDBcV3Z0Apsw7iBt9sawEPaevRzA2PwLRo",
    authDomain: "school-attendance-app-pro-60.firebaseapp.com",
    databaseURL: "https://school-attendance-app-pro-60-default-rtdb.firebaseio.com",
    projectId: "school-attendance-app-pro-60",
    storageBucket: "school-attendance-app-pro-60.appspot.com",
    messagingSenderId: "273842318794",
    appId: "1:273842318794:web:bb857dda4f155f6580f333"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database()
 

  