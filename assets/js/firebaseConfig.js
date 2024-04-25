// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js"

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyASXwMyNldbXLbsyb5iKDulJcQeUjUlaTs",
authDomain: "grand-hotell-karl-arne.firebaseapp.com",
projectId: "grand-hotell-karl-arne",
storageBucket: "grand-hotell-karl-arne.appspot.com",
messagingSenderId: "860613009055",
appId: "1:860613009055:web:2b260cbcc3a7f753630caa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export { db };