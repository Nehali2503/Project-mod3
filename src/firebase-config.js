import { initializeApp } from 'firebase/app';
import {getAuth} from "firebase/auth";
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBf1qO_9tt3J5Y-LVu-7C8NpmO_3WDTKNY",
    authDomain: "phone-auth-9a28a.firebaseapp.com",
    projectId: "phone-auth-9a28a",
    storageBucket: "phone-auth-9a28a.appspot.com",
    messagingSenderId: "757681046898",
    appId: "1:757681046898:web:6e9ed5d5573f76444509eb"
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);