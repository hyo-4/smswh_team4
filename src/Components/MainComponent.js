import React, { useState } from "react";
import Feed from "./Feed";
import { authService } from "../firebaseSetup";
import Profile from "./Profile";
import NavBar from "./navBar";
import SearchFeed from "./FeedSearch";
import Home from "./Home";
import './MainComponent.scss';

const MainComponent = ({ userObj, handleIsLogin }) => {
  const [state, setState] = useState(3);

  const onLogOutClick = () => {
    authService.signOut();
    handleIsLogin();
  }

  const handleProfile = () => {
    setState(0);
  }

  const handleFeed = () => {
    setState(1);
  }

  const handleSearch = () => {
    setState(2);
  }

  const handleHome = () => {
    setState(3);
  }

  return (
    <div>
      <div>
        <NavBar handleProfile={handleProfile} handleFeed={handleFeed} handleSearch={handleSearch} handleHome={handleHome}/>
        
        {state===0? <Profile userObj={userObj} handleSearch={handleSearch}/>:
        <>
        {
        state===1?<Feed userObj={userObj}/>:
        <>
        {state===2?<SearchFeed userObj={userObj}/>:<Home userObj={userObj}/>}
        </>
        }
        </>
        }  

      </div>
      <button className="Logout" onClick={onLogOutClick}>Log Out</button>
    </div>
  );
};

export default MainComponent;