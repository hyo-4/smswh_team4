import React from "react";
import pic1 from './pic1.png'

const Profile = () => {
    return (
        <div>
            <p>Profile</p>
            <img src={require("./pic1.png").default} />
            <h>Name</h>
            <p>Email</p>
        </div>
    );
}
export default Profile;