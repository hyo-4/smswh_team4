import { addDoc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import pic1 from './pic1.png'
import { dbService } from "../firebaseSetup";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import './Profile.scss';


const Profile = ({ userObj }) => {

    return (
        <div>
            <div className="Profile">
                <h2>   Profile  </h2></div>
            <div className="Profileimage">
                <img src={require("./pic1.png").default} /></div>
            <div className="Name">
                <h1>{userObj.displayName}</h1>
                <h1>{userObj.email}</h1>
            </div>
            <button className="fb1" type="submit">
                <div className="ftext"> tag1</div></button>
            <button className="fb1" type="submit"><div className="ftext"> tag2</div></button>
            <button className="fb1" type="submit"><div className="ftext"> tag3</div></button>
            <button className="fb1" type="submit"><div className="ftext"> tag4</div></button>
            <button className="fb1" type="submit"><div className="ftext"> tag5</div></button>
            <button className="fb1" type="submit"><div className="ftext"> tag6</div></button>



        </div>
    );
}
export default Profile;