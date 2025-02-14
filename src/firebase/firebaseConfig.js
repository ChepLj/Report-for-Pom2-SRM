// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getDatabase, ref } from 'firebase/database'
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// const firebaseConfig = {
//    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
//    authDomain: 'report-a1483.firebaseapp.com',
//    projectId: 'report-a1483',
//    storageBucket: 'report-a1483.appspot.com',
//    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDERID,
//    appId: process.env.REACT_APP_FIREBASE_APPID,
//    databaseURL: 'https://report-a1483-default-rtdb.asia-southeast1.firebasedatabase.app/',
// }

const firebaseConfig = {
  apiKey: "AIzaSyDuzYJ9OBHbAM88dgahOFsHCnXwXUknuAo",
  authDomain: "reportpomina2-srm.firebaseapp.com",
  databaseURL: "https://sotaynauan-a9463-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sotaynauan-a9463",
  storageBucket: "sotaynauan-a9463.appspot.com",
  messagingSenderId: "690984598165",
  appId: "1:690984598165:web:59ae72cd04df7458f8b99c",
  measurementId: "G-T6S4YYGLYR"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
// const dbFT = getFirestore(app)
const dbRT = ref(getDatabase(app))
// const providerFB = new FacebookAuthProvider()
const providerGG = new GoogleAuthProvider()
const storage = getStorage(app);
export { auth, providerGG, dbRT ,storage}
