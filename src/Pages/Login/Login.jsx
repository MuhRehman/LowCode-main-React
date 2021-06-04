import React, { useState } from "react";
import { Checkbox } from "@progress/kendo-react-inputs";
import {
  Notification,
  NotificationGroup,
} from "@progress/kendo-react-notification";

import logo from "../../Assets/Images/clogo.png";
import Input from "../../Components/Input/input";
import Button from "../../Components/Button/button";

import "./Login.scss";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, seterror] = useState(false);
  const [message, setMessage] = useState('');

  const onsubmit=(e)=>{
    e.preventDefault()
    if(email==='' || password===''){
      seterror(true)
      setMessage('Email and Password must be required')
      return
    }
    if (
      !email.match(
        /(?:[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g
      )
    ){
      seterror(true)
      setMessage('Invalid Email..')
      return
    }
    props.history.push('/page-list')
  }

  return (
    <div className="login-wrap">
      <div className="bg-container">
        <div className="login-wrapper">
          <div className="login-head">
            <img src={logo} alt="logo" width="60px" height="50px" />
            <h1 className="login-head-title">VAR Street</h1>
          </div>
          <form className="login-form">
            <h2 className="login-form-title">Login</h2>
            <label>Email</label>
            <Input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="input-field" placeholder="Email" />
            <br />
            <label>Password</label>
            <Input
              type="password"
              className="input-field"
              placeholder="Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
            <div className="login-form-footer">
              <Button className="login-btn" onClick={(e) => onsubmit(e)}>
                Login
              </Button>
              <div className="footer-items">
                <Checkbox>Remember me</Checkbox>
              </div>
            </div>

            <span
              className="forgot-password"
              onClick={() => props.history.push("/forgot-password")}
            >
              Forgot Password?
            </span>

            <div className="register">
              <p>Don't have an account ?</p>
              <p onClick={() => props.history.push("/register")}>Register</p>
            </div>
          </form>
        </div>
        <NotificationGroup
          style={{
            right: 25,
            bottom: 15,
            alignItems: "flex-start",
            flexWrap: "wrap-reverse",
          }}
        >
          {error && (
            <Notification
              type={{
                style: "error",
              }}
              closable={true}
              onClose={() => {seterror(false);setMessage('')}}
            >
              <span>{message}</span>
            </Notification>
          )}
        </NotificationGroup>
      </div>
    </div>
  );
};

export default Login;
