import React from "react";
import Education from "./education/Education";
import Expertise from "./expertise/Expertise";
import Classes from "./Content.module.css";
import Work from "./work/work";

const content = () => {
  return (
    <div className={Classes.education_expertise}>
      <div className={Classes.box}>
        <div className={Classes.content}>
          <Education />
        </div>
        <div className={Classes.content}>
          <Work />
        </div>
      </div>
      <div className={Classes.box}>
        <div className={Classes.content}>
          <Expertise />
        </div>
      </div>
    </div>
  );
};
export default content;
