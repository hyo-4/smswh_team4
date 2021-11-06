import React, { useState } from "react";
import { Link } from "react-router-dom";


function Login() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleOnChange = (e) => {
        const type = e.target.name;
        if (type === "name") {
            setName(e.target.value);
        } else if (type === "password") {
            setPassword(e.target.value);
        }
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        if (name !== "" && password !== "") {
            try {
                await signIn(name, password).then((res) => console.log(res));
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <div className="sign-container">
            <div className="sign-wrap">
                <h1 className="title">로그인</h1>
                <form className="sign-form" onSubmit={handleOnSubmit}>
                    <div>
                        <input
                            type="name"
                            placeholder="이름을 입력하세요."
                            name="name"
                            value={name}
                            onChange={handleOnChange}
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="비밀번호를 입력하세요."
                            name="password"
                            value={password}
                            onChange={handleOnChange}
                        />
                    </div>
                    <div>
                        <button type="submit">로그인</button>
                    </div>
                </form>
                <hr></hr>
                <p>
                    회원이 아니신가? <Link to="/signup">회원가입</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;