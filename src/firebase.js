import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCusUoz1nhiKcQLwf-teQuTsZCK80P6p5s',
  authDomain: 'chat-app-ff85a.firebaseapp.com',
  projectId: 'chat-app-ff85a',
  storageBucket: 'chat-app-ff85a.appspot.com',
  messagingSenderId: '2259136012',
  appId: '1:2259136012:web:9de61494191a4086ac8829'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
