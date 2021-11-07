import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { authService } from "../firebaseSetup";
import './signup.scss';

function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleOnChange = (e) => {
        const type = e.target.name;
        if (type === "email") {
            setEmail(e.target.value);
        } else if (type === "password") {
            setPassword(e.target.value);
        } else if (type === "name") {
            setName(e.target.value);
        }
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        if (email !== "" && password !== "" && name !== "") {
            try {
                await createUserWithEmailAndPassword(authService, email, password);
                //signUp(email, password);
                //console.log(name);
                const profileObj = { displayName: name };
                await updateProfile(authService.currentUser, profileObj);
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <div className="sign-container">
            <div className="sign-up-wrap">
                <h1 className="title">Register</h1>
                <form className="sign-up-form" onSubmit={handleOnSubmit}>
                    <div className='input'>
                        <input className='n1'
                            type="name"
                            placeholder="이름을 입력하세요."
                            name="name"
                            value={name}
                            onChange={handleOnChange}
                        />
                        <div>
                            <input className='n1'
                                type="email"
                                placeholder="이메일을 입력하세요."
                                name="email"
                                value={email}
                                onChange={handleOnChange}
                            />
                            <div>
                                <input className='n1'
                                    type="password"
                                    placeholder="비밀번호를 입력하세요."
                                    name="password"
                                    value={password}
                                    onChange={handleOnChange}
                                />
                            </div>
                            <div>
                            </div>
                        </div>
                        <button className='b2' type="submit">
                            <div className='text'>register</div></button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
//<Link to="/login">로그인</Link>