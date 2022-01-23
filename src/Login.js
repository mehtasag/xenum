import React from "react";
import "./Login.css";
import metamask1 from "./metamask.svg";
function Login() {
  return (
    <div className="login">
      <h4 className="login__Note">
        You can connect with your wallet by using following provider
      </h4>
      <div className="login__Provider">
        <div className="demo">
          <img src={metamask1} className="login__Icon" />
          <a href="https://metamask.io/">Connect with Metamask1</a>
        </div>
        <div className="demo">
          <img src={metamask1} className="login__Icon" />
          <a href="https://metamask.io/">Connect with Wallet 2</a>
        </div>
        <div className="demo">
          <img src={metamask1} className="login__Icon" />
          <a href="https://metamask.io/">Connect with Wallet 3</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
