import React, { useState } from "react";
import "./SignUpPage.css";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useToken } from "../auth/useToken";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

export const SignupPage = () => {
  const [token, setToken] = useToken();

  const [errorMessage, setErrorMessage] = useState("");

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");

  const history = useHistory();

  const onSignUpClicked = async () => {
    const response = await axios.post("/api/sign-up", {
      email: emailValue,
      password: passwordValue,
    });
    const { token } = response.data;
    setToken(token);
    history.push("/");
  };

  return (
    <div className="content-container">
      <h1>Sign-up</h1>
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

      <div className="input-container">
        <RiLockPasswordFill className="icon" />
        <input
          className="input-field"
          value={confirmPasswordValue}
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPasswordValue(e.target.value)}
        />
      </div>

      <hr />

      <div className="signup-page-links-container">
        <a className="links" onClick={() => history.push("/login")}>
          Already have an account?
        </a>
      </div>

      <button
        disabled={
          !emailValue ||
          !passwordValue ||
          passwordValue !== confirmPasswordValue
        }
        onClick={onSignUpClicked}
      >
        Sign-up
      </button>
    </div>
  );
};
