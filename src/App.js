import './App.css';
import React, { useReducer, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, authService } from "./firebaseSetup";
import SignUp from "./Components/signup";
import Login from "./Components/login";
//import { authService } from "firebaseSetup.js";
//import Home from './Components/Home';
import NoLogin from './Components/noLoginComponent';
import MainComponent from './Components/MainComponent';

function App() {

  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  
  const handleIsLogin = () => {
    setIsLogin(false);
    console.log("handled it");
  }

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      console.log(user);
      if(user){
        setUserObj({
          displayName: user.displayName,
          uid:user.uid,
          email:user.email
        });
        setIsLogin(true);
        console.log(userObj);
      } else {
        setIsLogin(false);
      }
      setInit(true);
    });
  }, []);


  return (
    <div className="App">
      {init ? (
        <>
          {isLogin?<MainComponent userObj={userObj} handleIsLogin={handleIsLogin}/>:<NoLogin/>}
          
        </>
      ) : "Initializing"}
    </div>

  );
}



export default App;