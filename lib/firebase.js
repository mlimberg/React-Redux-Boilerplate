var firebase = require("firebase");
require("firebase/database");

const config = {
    apiKey: "AIzaSyCzK0qwF11YypCSmUALIWpAqgG5l7pNzaA",
    authDomain: "bracket-app.firebaseapp.com",
    databaseURL: "https://bracket-app.firebaseio.com",
    storageBucket: "bracket-app.appspot.com",
    messagingSenderId: "642780956332"
  };
  firebase.initializeApp(config);

const database = firebase.database();
// export const reference = firebase.database().ref('contacts');
export default firebase;
