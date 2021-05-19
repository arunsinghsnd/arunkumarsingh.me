import React from "react";
import Icons from "./SocilaIcons/Icons";
import Typed from "react-typed";
import Particles from "./Particles/Particles";
import Auxillary from "../../../hoc/Auxillary";
import Classes from "./Home.module.css";
const home = () => {
  return (
    <Auxillary>
      <Particles />

      <div className={Classes.container}>
        <div className={Classes.box}>
          <div className={Classes.content}>
            <h1>
              Hi, I am <br />
              <span>Arun Kumar Singh</span>
            </h1>
            <Typed
              strings={[
                "React Developer",
                "Nodejs Developer",
                "MERN Stack Developer",
                "React Native Developer",
              ]}
              typeSpeed={40}
              backSpeed={50}
              className={Classes.typedcursor}
              loop
            ></Typed>
            <h1>I Eat Sleep Code Repeat With React.</h1>
            <div class={Classes.socila_icons}>
              <Icons />
            </div>
            <a
              href="mailto:arunsinghsnd@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-primary">
                <strong>Hire Me</strong>
              </button>
            </a>
            <br />
            <br />
            <a
              href="tel:+918427825355"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-primary">
                <strong>Call Me</strong>
              </button>
            </a>
          </div>
        </div>
      </div>
    </Auxillary>
  );
};
export default home;
