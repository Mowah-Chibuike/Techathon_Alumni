import React, { useState, useEffect } from "react";
import classes from "./Dashboard.module.css";
import maleAvatar from "./avatar-gb154e779f_640-removebg-preview.png";
import femaleAvatar from "./teacher-g5389312c3_640-removebg-preview.png";

const Dashboard = () => {
  const [userData, setUserData] = useState({});

  console.log(userData);

  useEffect(() => {
    const user = sessionStorage.getItem("user");
    const userData = JSON.parse(user);
    userData && setUserData(userData);
  }, []);

  return (
    <section className={classes.dashboard}>
      <div className={classes.avatar}>
        {userData.gender === "Male" && <img src={maleAvatar} alt="" />}
        {userData.gender === "Female" && <img src={femaleAvatar} alt="" />}
      </div>
      <h2>
        Welcome <span>{userData.firstName}</span>
      </h2>
      <p>
        {userData.age > 16
          ? "Congratulations, you are qualifield to join our Job board"
          : `Sorry ${
              userData.firstName
            }, I believe age is just a number but community policy entails that you are up to 17 to join our Job board. Try again in ${
              17 - userData.age
            } years`}
      </p>
    </section>
  );
};

export default Dashboard;
