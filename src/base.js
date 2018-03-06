import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD5_t9IlRXRURqtj4_ePP-ngaSncPVPm-4",
    authDomain: "catch-of-the-day-bsasscer.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-bsasscer.firebaseio.com"
})

const base = Rebase.createClass(firebase.database());

// Named export
export { firebaseApp };

// Default export
export default base;
