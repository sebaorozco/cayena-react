import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Aqui mi BDD*********************************************************
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9soMumtLis5CERyYHBiaa7LO2czj_0KE",
  authDomain: "cayena-dietetica.firebaseapp.com",
  projectId: "cayena-dietetica",
  storageBucket: "cayena-dietetica.appspot.com",
  messagingSenderId: "991213790407",
  appId: "1:991213790407:web:1bca56772c3d5eb92f0ae2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Hasta Aqui***************************************************************

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
