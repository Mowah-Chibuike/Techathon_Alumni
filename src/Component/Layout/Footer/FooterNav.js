import React, { useContext } from "react";
import classes from "./FooterNav.module.css";
import { NavLink } from "react-router-dom";
import AuthContext from "../../Helper/auth-context/AuthContext";

const FooterNav = ({ link1, link2, link3, link4 }) => {
  const ctx = useContext(AuthContext);
  const { isLoggedIn } = ctx;

  return (
    <>
      <ul className={classes.FooterLinks}>
        <li>
          <NavLink className={classes.link} to={"/"}>
            Home
          </NavLink>
        </li>
        {!isLoggedIn && (
          <li>
            <NavLink className={classes.link} to={"/register"}>
              Register
            </NavLink>
          </li>
        )}
        {!isLoggedIn && (
          <li>
            <NavLink className={classes.link} to={"/login"}>
              Login
            </NavLink>
          </li>
        )}

        {/* <li>
          {isLoggedIn && (
            <NavLink className={classes.link} to={"/login"}>
              Login
            </NavLink>
          )}
        </li> */}
      </ul>
    </>
  );
};

export default FooterNav;
