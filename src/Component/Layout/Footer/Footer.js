import React from "react";
import classes from "./Footer.module.css";
import { NavLink } from "react-router-dom";
import FooterNav from "./FooterNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <NavLink className={classes.logo} to={"/"}>
        <h2>ALUMNI</h2>
      </NavLink>
      <FooterNav />
      <div className={classes.contact}>
        <div className={classes.contactInfo}>
          <FontAwesomeIcon icon={faPhone} />
          <p>+234 811 154 6777</p>
        </div>
        <div className={classes.contactInfo}>
          <FontAwesomeIcon icon={faEnvelope} />

          <p>techalumni@gmail.com</p>
        </div>
      </div>
      <div className={classes.socials}>
        <FontAwesomeIcon className={classes.socialIcon} icon={faFacebookF} />
        <FontAwesomeIcon className={classes.socialIcon} icon={faTwitter} />
        <FontAwesomeIcon className={classes.socialIcon} icon={faInstagram} />
      </div>
    </footer>
  );
};

export default Footer;
