import React, { useState } from "react";
import Feed from "./Feed";
import { authService } from "../firebaseSetup";
import Profile from "./Profile";
import Search from "./Search";
import NavBar from "./navBar";

const MainComponent = ({userObj, handleIsLogin}) => {
  const [state,setState] = useState(0);

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

  return(
    <div>
      <p>{userObj.email}</p>
      <p>{userObj.displayName}</p>
      <div>
        <NavBar handleProfile={handleProfile} handleFeed={handleFeed} handleSearch={handleSearch}/>
        
        {state===0? <Profile/>:
        <>
        {state===1?<Feed userObj={userObj}/>:<Search userObj={userObj}/>}
        </>
        }  

      </div>
      <button onClick={onLogOutClick}>Log Out</button>
    </div>
  );
};

export default MainComponent;