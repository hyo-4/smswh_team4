import React from "react";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "../Home.js";
import Feed from "../Feed.js";
import Search from "../Search.js";
import Navigation from "./Navigation.js";

const AppRouter = () => {
  return (
    <HashRouter>
      <>
      <Navigation/>
        <Routes>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/feed">
            <Feed />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Navigate from="*" to="/"/>
        </Routes>
        
      </>
    </HashRouter>
  );
}
export default AppRouter;
