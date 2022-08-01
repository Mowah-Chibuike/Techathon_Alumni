import React, { useContext, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import AuthContext from "../../Helper/auth-context/AuthContext";
import "./NavBar.css";

const NavBar = () => {
  const [displayNav, setDisplayNav] = useState(false);
  const handleHamburgerClick = () => {
    setDisplayNav((prev) => !prev);
  };
  const ctx = useContext(AuthContext);
  const { isLoggedIn, onLogout } = ctx;
  const Location = useLocation();
  const homeLocation = Location.pathname === "/";
  const registerLocation = Location.pathname === "/register";
  const loginLocation = Location.pathname === "/login";

  const handleLogout = () => {
    onLogout();
  };

  return (
    <div className={"head"}>
      <div className={"header"}>
        <Link className={"logo"} to={"/"}>
          <h2>ALUMNI</h2>
        </Link>
        <div
          className={` ${displayNav ? "hamburger active" : "hamburger"}`}
          onClick={handleHamburgerClick}
        ></div>
        <div className={` ${displayNav ? "navigation show" : "navigation"}`}>
          <ul className={"headerEl"}>
            <li>
              <NavLink
                className={homeLocation ? "link active" : "link"}
                to={"/"}
                onClick={handleHamburgerClick}
              >
                Home
              </NavLink>
            </li>
            {isLoggedIn && (
              <li>
                <NavLink
                  className={registerLocation ? "link active" : "link"}
                  to={"dashboard"}
                  onClick={handleHamburgerClick}
                >
                  Dashboard
                </NavLink>
              </li>
            )}
            {!isLoggedIn && (
              <li>
                <NavLink
                  className={registerLocation ? "link active" : "link"}
                  to={"register"}
                  onClick={handleHamburgerClick}
                >
                  Register
                </NavLink>
              </li>
            )}
            {!isLoggedIn && (
              <li>
                <NavLink
                  className={loginLocation ? "link active" : "link"}
                  to={"login"}
                  onClick={handleHamburgerClick}
                >
                  Login
                </NavLink>
              </li>
            )}
            {isLoggedIn && (
              <button
                className={"log-out"}
                onClick={() => {
                  handleHamburgerClick();
                  handleLogout();
                }}
              >
                Log Out
              </button>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
