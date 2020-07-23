import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDUEdTa6OpPzb_DTn_9sp-mdx7uk2bWMNU",
    authDomain: "clothing-db-c2ace.firebaseapp.com",
    databaseURL: "https://clothing-db-c2ace.firebaseio.com",
    projectId: "clothing-db-c2ace",
    storageBucket: "clothing-db-c2ace.appspot.com",
    messagingSenderId: "1007076743124",
    appId: "1:1007076743124:web:115283783b03aa5b0fa841",
    measurementId: "G-1J3XC0JVJ2"
};

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;