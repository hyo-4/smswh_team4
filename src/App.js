import './App.css';
import Feed from "./Feed.js";
import Home from "./Home.js";
import AppRouter from "./routes/Router.js";
import React, { useReducer, useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "./firebaseSetup";
import SignUp from "./signup";
import Login from "./login";


function App() {
  return (
    <div className="App">
      <AppRouter></AppRouter>
    </div>

  );
}



export default App;
