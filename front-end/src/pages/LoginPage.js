import React, { useState } from "react";
import "./LoginPage.css";
import { useHistory } from "react-router-dom";

export const LoginPage = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const history = useHistory();

  const onLoginClicked = async () => {};

  return (
    <div className="content-container">
      <h1>Login</h1>
      {errorMessage && <div className="fail">{errorMessage}</div>}

      <input
        value={emailValue}
        placeholder="example@email.com"
        onChange={(e) => setEmailValue(e.target.value)}
      />

      <input
        value={passwordValue}
        type="password"
        placeholder="Password"
        onChange={(e) => setPasswordValue(e.target.value)}
      />

      <hr />

      <button disabled={!emailValue || !passwordValue} onClick={onLoginClicked}>
        Login
      </button>
      <button onClick={() => history.push("/forgot-password")}>
        Forgot password?
      </button>
      <button onClick={() => history.push("/sign-up")}>
        Dont have an account?
      </button>
    </div>
  );
};
