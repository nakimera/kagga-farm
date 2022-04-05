const firebase = require("firebase");
require("firebase/firestore");
const firebaseui = require('firebaseui');

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: '### FIREBASE API KEY ###',
    authDomain: '### FIREBASE AUTH DOMAIN ###',
    projectId: '### CLOUD FIRESTORE PROJECT ID ###'
});

const db = firebase.firestore();

const auth = firebase.auth();

export {
    db,
    auth
}