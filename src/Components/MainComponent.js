import React from "react";
import Feed from "./Feed";
import { authService } from "../firebaseSetup";

const MainComponent = ({userObj, handleIsLogin}) => {
  
  const onLogOutClick = () => {
    authService.signOut();
    handleIsLogin();
  }

  return(
    <div>
      {userObj.email}
      {userObj.displayName}
      <button onClick={onLogOutClick}>Log Out</button>
      <Feed userObj={userObj}/>
    </div>
  );
};

export default MainComponent;