import React from "react";
import classes from "./Profile.module.css";
import arun from "../../../../assests/profile/arun.jpg";

const profile = () => {
  return (
    <div className={classes.profile}>
      <img src={arun} alt="Arun Kumar Singh" />
    </div>
  );
};
export default profile;
