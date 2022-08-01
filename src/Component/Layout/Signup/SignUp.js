import React, { Fragment, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import classes from "./SignUp.module.css";
import Button from "../../UI/Button/Button";
import useInput from "../../Hooks/use-input";
import Message from "../../UI/Message/Message";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

const SignUp = () => {
  const navigate = useNavigate();

  const [errorState, setErrorState] = useState({
    msgDisplay: false,
    hasError: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: FirstNameInputHasError,
    handleValueChange: handleFirstNameChanged,
    handleValueBlur: handleFirstNameBlurred,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    isValid: LastNameIsValid,
    hasError: LastNameHasError,
    handleValueChange: handleLastNameChanged,
    handleValueBlur: handleLastNameBlurred,
    reset: resetLastNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: EmailIsValid,
    hasError: EmailHasError,
    handleValueChange: handleEmailChanged,
    handleValueBlur: handleEmailBlurred,
    reset: resetEmailInput,
  } = useInput((value) => value.trim().includes("@"));

  const {
    value: enteredAge,
    isValid: AgeIsValid,
    hasError: AgeHasError,
    handleValueChange: handleAgeChanged,
    handleValueBlur: handleAgeBlurred,
    reset: resetAgeInput,
  } = useInput((value) => Number(value) > 0);

  const {
    value: enteredPassword,
    isValid: PasswordIsValid,
    hasError: PasswordHasError,
    handleValueChange: handlePasswordChanged,
    handleValueBlur: handlePasswordBlurred,
    reset: resetPasswordInput,
  } = useInput((value) => value.length > 6);

  const {
    value: confirmedPassword,
    isValid: confirmPasswordIsValid,
    hasError: confirmPasswordHasError,
    handleValueChange: handleConfirmPasswordChanged,
    handleValueBlur: handleConfirmPasswordBlurred,
    reset: resetConfirmedPasswordInput,
  } = useInput((value) => value === enteredPassword);

  const {
    value: enteredGender,
    isValid: GenderIsValid,
    hasError: GenderHasError,
    handleValueChange: handleGenderChanged,
    handleValueBlur: handleGenderBlurred,
    reset: resetGenderInput,
  } = useInput((value) => value !== "");

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

  let formIsValid = false;

  if (
    enteredFirstNameIsValid &&
    LastNameIsValid &&
    EmailIsValid &&
    AgeIsValid &&
    GenderIsValid &&
    PasswordIsValid &&
    confirmPasswordIsValid
  ) {
    formIsValid = true;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formIsValid) {
      const userData = {
        firstName: enteredFirstName,
        lastName: enteredLastName,
        email: enteredEmail,
        age: enteredAge,
        gender: enteredGender,
        password: enteredPassword,
      };

      localStorage.setItem("user", JSON.stringify(userData));
      setErrorState((prev) => {
        return { ...prev, hasError: false };
      });
      displayMessage();
      setTimeout(() => {
        navigate("/login");
      }, 1500);

      resetNameInput();
      resetLastNameInput();
      resetEmailInput();
      resetAgeInput();
      resetGenderInput();
      resetPasswordInput();
      resetConfirmedPasswordInput();
      return;
    }
  };

  let message = "Registration successful";
  if (errorState.hasError) {
    message = "Registration failed";
  }

  const handlePasswordEyeClick = () => {
    setShowPassword((prev) => !prev);
  };

  const handleConfirmPasswordEyeClick = () => {
    setShowConfirmPassword((prev) => !prev);
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
          Sign <span>Up</span>
        </h2>
        <p>
          Do you already have an account? Then{" "}
          <span>
            <Link className={classes.link} to={"/Login"}>
              sign-in
            </Link>
          </span>
        </p>
        <form onSubmit={handleSubmit}>
          <div
            className={`${classes.control} ${
              FirstNameInputHasError && classes.invalid
            }`}
          >
            <label htmlFor="first-name">First-name</label>
            <input
              id="first-name"
              name="firstName"
              type={"text"}
              value={enteredFirstName}
              onChange={handleFirstNameChanged}
              onBlur={handleFirstNameBlurred}
            />
            {FirstNameInputHasError && <p>Please fill in this field</p>}
          </div>

          <div
            className={`${classes.control} ${
              LastNameHasError && classes.invalid
            }`}
          >
            <label htmlFor="last-name">Last-name</label>
            <input
              id="last-name"
              name="lastName"
              type={"text"}
              value={enteredLastName}
              onChange={handleLastNameChanged}
              onBlur={handleLastNameBlurred}
            />
            {LastNameHasError && (
              <p className={classes.errortext}>Please fill in this field</p>
            )}
          </div>

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
            className={`${classes.control} ${AgeHasError && classes.invalid}`}
          >
            <label htmlFor="Age">Age</label>
            <input
              id="Age"
              name="Age"
              type={"Age"}
              value={enteredAge}
              onChange={handleAgeChanged}
              onBlur={handleAgeBlurred}
            />
            {AgeHasError && (
              <p className={classes.errortext}>Please enter a valid age</p>
            )}
          </div>

          <div
            className={`${classes.control} ${
              GenderHasError && classes.invalid
            }`}
          >
            <label htmlFor="Gender">Gender</label>
            <select
              id="Gender"
              name="Gender"
              value={enteredGender}
              onChange={handleGenderChanged}
              onBlur={handleGenderBlurred}
            >
              <option value={""}>Choose your gender</option>
              <option value={"Male"}>Male</option>
              <option value={"Female"}>Female</option>
              <option value={"Neither"}>Rather Not Say</option>
            </select>
            {GenderHasError && (
              <p className={classes.errortext}>Please choose your gender</p>
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
              <p className={classes.errortext}>
                Password length should not be less than 7 characters
              </p>
            )}
          </div>

          <div
            className={`${classes.control} ${
              confirmPasswordHasError && classes.invalid
            }`}
          >
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className={classes.group}>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "Password"}
                value={confirmedPassword}
                onChange={handleConfirmPasswordChanged}
                onBlur={handleConfirmPasswordBlurred}
              />
              <FontAwesomeIcon
                className={classes.eye}
                icon={!showConfirmPassword ? faEye : faEyeSlash}
                onClick={handleConfirmPasswordEyeClick}
              />
            </div>

            {confirmPasswordHasError && (
              <p className={classes.errortext}>
                Input doesn't match the password
              </p>
            )}
          </div>

          <div className={classes.actions}>
            <Button
              type={"submit"}
              className={classes.submit}
              disabled={!formIsValid}
            >
              Sign up
            </Button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default SignUp;
