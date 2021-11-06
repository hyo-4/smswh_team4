import { addDoc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import pic1 from './pic1.png'
import { dbService } from "../firebaseSetup";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import './Profile.scss';


const Profile = ({userObj}) => {

    return (
        <div>
            <div className="Profile">
                <h2>Profile</h2>
                <img src={require("./pic1.png").default} /></div>
            <div className="Name">
                <h1>{userObj.displayName}</h1>
                <h1>{userObj.email}</h1>
            </div>
            <button type="submit">태그1</button>
            <button type="submit">태그2</button>
            <button type="submit">태그3</button>
            <button type="submit">태그4</button>
            <button type="submit">태그5</button>
            <button type="submit">태그6</button>



        </div>
    );
}
export default Profile;