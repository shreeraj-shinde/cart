import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7EXBvtnQWaSpWTZMXjCs9rs8AfniqDPU",
  authDomain: "cart-e3e3d.firebaseapp.com",
  projectId: "cart-e3e3d",
  storageBucket: "cart-e3e3d.appspot.com",
  messagingSenderId: "336159987051",
  appId: "1:336159987051:web:c43c48f588db80af1f282e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
export default db;
