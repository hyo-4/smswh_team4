import './App.css';
import React, { useReducer, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, authService } from "./firebaseSetup";
import SignUp from "./signup";
import Login from "./login";
//import { authService } from "firebaseSetup.js";
import Home from './Home';


function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if(user){
        setUserObj({
          displayName: user.displayName,
          uid:user.uid
        });
      }
      setInit(true);
    });
  }, []);
  return (
    <div className="App">
      {init? <Login/> : "Initializing"}
    </div>

  );
}



export default App;