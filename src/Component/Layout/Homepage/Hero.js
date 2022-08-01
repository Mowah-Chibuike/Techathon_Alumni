import React from "react";
import classes from "./Home.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <h2>Welcome to the Alumni</h2>
      <p>
        A community for React developers of all Levels from Beginners to Experts
      </p>
    </section>
  );
};

export default Hero;
