import './App.css';
import React, { useReducer, useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "./firebaseSetup";
import SignUp from "./signup";
import Login from "./login";


function App() {
  return (
    <div className="App">
      <p>mySoMe</p>
    </div>

  );
}



export default App;
