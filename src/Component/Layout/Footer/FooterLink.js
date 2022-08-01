import React from "react";
import { NavLink } from "react-router-dom";

const FooterLink = ({ text, to }) => {
  return (
    <div className="footer-link">
      <NavLink to={to}>{text}</NavLink>
    </div>
  );
};

export default FooterLink;
