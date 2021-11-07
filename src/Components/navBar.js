import React from "react";
import './navBar.scss';

const NavBar = ({handleProfile, handleFeed, handleSearch, handleHome }) => {
  const changeColor = () => {
    const all = document.getElementsByClassName('menu');
    for (let i=0;i<all.length;i++){
      all[i].style.color = 'black';
    }
  };

  const changeProfile = (event) => {
    handleProfile();
    changeColor();
    event.target.style.color = 'pink';
  };

  const changeFeed = (event) => {
    handleFeed();
    changeColor();
    event.target.style.color = 'pink';
  };

  const changeSearch = (event) => {
    handleSearch();
    changeColor();
    event.target.style.color = 'pink';
  };

  const changeHome = (event) => {
    handleHome();
    changeColor();
    event.target.style.color = 'pink';
  }
  
  return(
      <nav>
        <h2 className='menu' onClick={changeProfile}>Profile </h2>
        &nbsp;
        <h2 className='menu' onClick={changeFeed}>Feed </h2>
        &nbsp;
        <h2 className='menu' onClick={changeSearch}>Search </h2>
        &nbsp;
        <h2 className='menu' onClick={changeHome}>Home</h2>
        <hr/>
      </nav>
  );
}

export default NavBar;