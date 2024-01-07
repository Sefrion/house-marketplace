// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBWGzzNX86fMieP1SXVsXMSzxGip-T9uFc',
	authDomain: 'house-marketplace-app-76fd3.firebaseapp.com',
	projectId: 'house-marketplace-app-76fd3',
	storageBucket: 'house-marketplace-app-76fd3.appspot.com',
	messagingSenderId: '161572229094',
	appId: '1:161572229094:web:d9329d604ef648f7759027',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
