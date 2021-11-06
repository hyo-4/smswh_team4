import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { authService } from "../firebaseSetup.js";
import "./login.scss";
import mysome1 from './mysome1.PNG'


const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleOnChange = (e) => {
        const type = e.target.name;
        if (type === "name") {
            setName(e.target.value);
        } else if (type === "password") {
            setPassword(e.target.value);
        } else if (type === "email") {
            setEmail(e.target.value);
        }
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        if (email !== "" && password !== "") {
            try {
                await signInWithEmailAndPassword(authService, email, password);
                console.log("login Success");
                //signIn(name, password).then((res) => console.log(res));
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <div className="sign-container">

            <div className="sign-wrap">
                <h1 className="title">Login</h1>
            </div>
            <form className="sign-form" onSubmit={handleOnSubmit}>
                <div>

                    <input className='n1'
                        type="name"
                        placeholder="이름을 입력하세요."
                        name="name"
                        value={name}
                        onChange={handleOnChange}
                    />
                </div>
                <div>
                    <input className='n1'
                        type="email"
                        placeholder="이메일을 입력하세요."
                        name="email"
                        value={email}
                        onChange={handleOnChange}
                    />
                </div>
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
                    <button className='b1' type="submit">
                        <div className='text'>login</div>
                    </button>

                </div>
            </form>
            <hr></hr>
            <p className='mention'>
                회원이 아니신가?
            </p>
        </div>

    );
}

export default Login;

//<Link to="/signup">회원가입</Link>
//<div className='img'>
               // <img src={require("./mysome1.PNG").default} /></div>