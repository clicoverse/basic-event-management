// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8YEiLhuBWa8gbiPn15-gJuYTaINF2QeY",
  authDomain: "event-on-model-photoshoot.firebaseapp.com",
  projectId: "event-on-model-photoshoot",
  storageBucket: "event-on-model-photoshoot.appspot.com",
  messagingSenderId: "374941347488",
  appId: "1:374941347488:web:09522a85701cee5670e3c5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
