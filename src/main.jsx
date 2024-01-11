import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0LF19jpH8eSLTRp3yw-ldVdX5o61jFSs",
  authDomain: "my-project-of-react.firebaseapp.com",
  projectId: "my-project-of-react",
  storageBucket: "my-project-of-react.appspot.com",
  messagingSenderId: "73888488199",
  appId: "1:73888488199:web:23511ea818c51464a803a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <ChakraProvider>
      <App />
      </ChakraProvider>
    </React.StrictMode>
)
