import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getStorage} from 'firebase/storage';
import {getFirestore} from 'firebase/firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAZ2VJw32PbenWzOpzcTrurBCneW9TFii8',
  authDomain: 'chat-app-tutorial-c9d12.firebaseapp.com',
  projectId: 'chat-app-tutorial-c9d12',
  storageBucket: 'chat-app-tutorial-c9d12.appspot.com',
  messagingSenderId: '1081916968142',
  appId: '1:1081916968142:web:8366cfe05155843abd549f'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
