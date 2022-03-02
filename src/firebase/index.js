import firebase from 'firebase/app';
import 'firebase/firestore'

// Your web app's Firebase configuration
/* const firebaseConfig = {
    apiKey: "AIzaSyDZMg5EgsLnoF5HhWBSkORUmZo_rQwd8Pc",
    authDomain: "dezapas-96a76.firebaseapp.com",
    projectId: "dezapas-96a76",
    storageBucket: "dezapas-96a76.appspot.com",
    messagingSenderId: "735173958047",
    appId: "1:735173958047:web:489b8d571ed3a10ddf85aa"
  }; */

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
  }; 

  const app = firebase.initializeApp(firebaseConfig);

  export const getFirebase = () => app;

  export const getFirestore = () => {
      return firebase.firestore(app);
  }

  export const fire = app;
