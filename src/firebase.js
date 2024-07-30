import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBW2OsUfc7uGDp2FGo0wZ6IwnUPG9w7sDg",
    authDomain: "manage-app-91f60.firebaseapp.com",
    projectId: "manage-app-91f60",
    storageBucket: "manage-app-91f60.appspot.com",
    messagingSenderId: "238843020699",
    appId: "1:238843020699:web:7ca8797b104c667ee3cd3e",
    measurementId: "G-DW6M1CJE2T"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
