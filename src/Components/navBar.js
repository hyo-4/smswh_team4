import React from "react";

const NavBar = ({handleProfile, handleFeed, handleSearch }) => {
  return(
      <div>
        <h2 onClick={handleProfile}>Profile</h2>
        <hr/>
        <h2 onClick={handleFeed}>Feed</h2>
        <hr/>
        <h2 onClick={handleSearch}>Search</h2>
        <hr/>
      </div>
  );
}

export default NavBar;