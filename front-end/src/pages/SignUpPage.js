import React, { useState } from "react";
import "./SignUpPage.css";
import { useHistory } from "react-router-dom";

export const SignupPage = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");

  const history = useHistory();

  const onSignUpClicked = async () => {};

  return (
    <div className="content-container">
      <h1>Sign-up</h1>
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

      <input
        value={confirmPasswordValue}
        type="password"
        placeholder="Confirm Password"
        onChange={(e) => setConfirmPasswordValue(e.target.value)}
      />

      <hr />

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
      <button onClick={() => history.push("/login")}>
        Already have an account?
      </button>
    </div>
  );
};
