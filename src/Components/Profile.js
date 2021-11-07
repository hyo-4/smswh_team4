import { addDoc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import pic1 from './pic1.png'
import { dbService } from "../firebaseSetup";
import { where, collection, query, onSnapshot } from "firebase/firestore";
import './Profile.scss';


const Profile = ({ userObj, handleSearch }) => {
    const [tags, setTags] = useState([]);

    useEffect(() => {
        const q = query(
            collection(dbService, "accounts"),
            where("creatorID", "==", userObj.uid)
        );
        onSnapshot(q, (snapshot) => {
                const tempArr = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            console.log(tempArr[0].type);
            setTags(tempArr[0].type);
        });
        console.log(tags);
        //console.log(refArr);
        //console.log(refArr[0].allArr);
    
        //console.log(value);
    }, []);

    const onClick = (event) => {
        const {
            target: value,
        } = event;
        console.log(value.innerText);
        handleSearch(value.innerText);
        const menu = document.getElementsByClassName("menu");

        
        menu[0].style.color="black";
        menu[2].style.color="pink";
    };

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
            {tags.map((el) => {
                return <button onClick={onClick} className="fb1" type="submit"><div className="ftext">{el}</div></button>;
            })}
        </div>
    );
}
export default Profile;