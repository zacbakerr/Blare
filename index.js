import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyAMx5mrVNnjG9SWePtWE4BoJKzydZb8K0Q",
    authDomain: "squares-9c376.firebaseapp.com",
    projectId: "squares-9c376",
    storageBucket: "squares-9c376.appspot.com",
    messagingSenderId: "927468153452",
    appId: "1:927468153452:web:dc7a1a2a29e21b4c708649"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

import { createUserWithEmailAndPassword } from "firebase/auth";

const authh = getAuth();
createUserWithEmailAndPassword(authh, email, password)
.then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
})
.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
});