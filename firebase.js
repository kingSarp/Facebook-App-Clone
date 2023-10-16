// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDV2Wk-5NgzByPJIGvddk1S7WIsO-lqwJE",
  authDomain: "facebook-clone-b90a1.firebaseapp.com",
  projectId: "facebook-clone-b90a1",
  storageBucket: "facebook-clone-b90a1.appspot.com",
  messagingSenderId: "78086186575",
  appId: "1:78086186575:web:793b79d3de76db0a9a6c3a"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export { firebaseConfig };
