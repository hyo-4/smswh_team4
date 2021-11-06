import React, { useState } from "react";
import Login from "./login";
import SignUp from "./signup";

const NoLogin = () => {
  const [state,setState] = useState(false);
  const toggleState = () => setState((prev) => !prev);
  return(
    <div>
      <button onClick={toggleState}>{state?"Go To Login":"Go To SignUp"}</button>
      {state?<SignUp/>:<Login/>}
    </div>
    
  );
};

export default NoLogin;