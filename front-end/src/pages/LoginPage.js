import React, { useState } from "react";
import "./LoginPage.css";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useToken } from "../auth/useToken";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

export const LoginPage = () => {
  const [token, setToken] = useToken();

  const [errorMessage, setErrorMessage] = useState("");

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const history = useHistory();

  const onLoginClicked = async () => {
    const response = await axios.post("/api/login", {
      email: emailValue,
      password: passwordValue,
    });
    const { token } = response.data;
    setToken(token);
    history.push("/");
  };

  return (
    <div className="content-container">
      <h1>Login</h1>
      {errorMessage && <div className="fail">{errorMessage}</div>}

      <div className="input-container">
        <FaUserAlt className="icon" />
        <input
          className="input-field"
          value={emailValue}
          placeholder="example@email.com"
          onChange={(e) => setEmailValue(e.target.value)}
        />
      </div>

      <div className="input-container">
        <RiLockPasswordFill className="icon" />
        <input
          className="input-field"
          value={passwordValue}
          type="password"
          placeholder="Password"
          onChange={(e) => setPasswordValue(e.target.value)}
        />
      </div>

      <hr />

      <div className="links-container">
        <a className="links" onClick={() => history.push("/forgot-password")}>
          Forgot password?
        </a>
        <a className="links" onClick={() => history.push("/sign-up")}>
          Dont have an account?
        </a>
      </div>

      <button disabled={!emailValue || !passwordValue} onClick={onLoginClicked}>
        Login
      </button>
    </div>
  );
};
