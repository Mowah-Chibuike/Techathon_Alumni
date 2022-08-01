import React, { Fragment, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "../Signup/SignUp.module.css";
import useInput from "../../Hooks/use-input";
import Button from "../../UI/Button/Button";
import Message from "../../UI/Message/Message";
import AuthContext from "../../Helper/auth-context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

const SignIn = () => {
  const ctx = useContext(AuthContext);
  const { onLogin } = ctx;
  const [userData, setUserData] = useState({});
  const [errorState, setErrorState] = useState({
    msgDisplay: false,
    hasError: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    value: enteredEmail,
    isValid: EmailIsValid,
    hasError: EmailHasError,
    handleValueChange: handleEmailChanged,
    handleValueBlur: handleEmailBlurred,
    reset: resetEmailInput,
  } = useInput((value) => value.trim().includes("@"));

  const {
    value: enteredPassword,
    hasError: PasswordHasError,
    isValid: PasswordIsValid,
    handleValueChange: handlePasswordChanged,
    handleValueBlur: handlePasswordBlurred,
    reset: resetPasswordInput,
  } = useInput((value) => value.length > 0);
  let formIsValid = false;

  if (EmailIsValid && PasswordIsValid) {
    formIsValid = true;
  }

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    setUserData(userData);
  }, []);

  const displayMessage = () => {
    setErrorState((prev) => {
      return { ...prev, msgDisplay: true };
    });
    setTimeout(() => {
      setErrorState((prev) => {
        return { ...prev, msgDisplay: false };
      });
    }, 1500);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (formIsValid) {
      if (
        userData?.email === enteredEmail &&
        userData?.password === enteredPassword
      ) {
        sessionStorage.setItem("isLoggedIn", "true");
        sessionStorage.setItem("user", JSON.stringify(userData));
        onLogin();
        displayMessage();
        navigate("/dashboard");
        resetEmailInput();
        resetPasswordInput();
        return;
      }
      setErrorState((prev) => {
        return { ...prev, hasError: true };
      });
      displayMessage();
      resetEmailInput();
      resetPasswordInput();
    }
  };

  let message = "Authentication successful";
  if (errorState.hasError) {
    message = "Authentication failed";
  }

  const handlePasswordEyeClick = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Fragment>
      {errorState.msgDisplay && (
        <Message
          style={{ color: `${errorState.hasError ? "red" : "green"}` }}
          message={message}
        />
      )}
      <div className={classes.login}>
        <h2>
          Sign <span>In</span>
        </h2>
        <p>
          Don't have an account? Then{" "}
          <span>
            <Link className={classes.link} to={"/register"}>
              sign-up
            </Link>
          </span>
        </p>
        <form onSubmit={handleFormSubmit}>
          <div
            className={`${classes.control} ${EmailHasError && classes.invalid}`}
          >
            <label htmlFor="Email">Email</label>
            <input
              id="Email"
              name="Email"
              type={"email"}
              value={enteredEmail}
              onChange={handleEmailChanged}
              onBlur={handleEmailBlurred}
            />
            {EmailHasError && (
              <p className={classes.errortext}>
                Please enter a valid Email Address
              </p>
            )}
          </div>

          <div
            className={`${classes.control} ${
              PasswordHasError && classes.invalid
            }`}
          >
            <label htmlFor="Password">Password</label>
            <div className={classes.group}>
              <input
                id="Password"
                name="Password"
                type={showPassword ? "text" : "Password"}
                value={enteredPassword}
                onChange={handlePasswordChanged}
                onBlur={handlePasswordBlurred}
              />
              <FontAwesomeIcon
                className={classes.eye}
                icon={!showPassword ? faEye : faEyeSlash}
                onClick={handlePasswordEyeClick}
              />
            </div>
            {PasswordHasError && (
              <p className={classes.errortext}>Please enter your password</p>
            )}
          </div>

          <div className={classes.actions}>
            <Button
              type={"submit"}
              className={classes.submit}
              disabled={!formIsValid}
            >
              Sign In
            </Button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default SignIn;
