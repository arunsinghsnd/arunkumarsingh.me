import React from "react";
//import myimage from "../../../../assests/about/arun.jpg";
import myimage from "../../../../assests/about/arun2.jpg";
import Table from "./Table/Table";
import mycv from "../../../../assests/CV/myname.pdf";
import Classes from "./Aboutdetails.module.css";

const aboutdetailes = () => {
  const table = ["table table-borderless", Classes.textcolor];
  return (
    <div className={Classes.aboutdetailes}>
      {/* <div className={Classes.myimage}>
        <a href={myimage}>
          <img src={myimage} alt="Arun Kumar Singh" />
        </a>
      </div> */}
      <div className={Classes.mydetails}>
        <h2>
          I am <span>Arun Kumar Singh</span>
        </h2>
        <p>
          I am self-motivated and hardworking Web Developer who always seeking an
          opportunity to work in a challenging environment to prove my skills
          utilize and my knowledge of the database in the growth of the
          organization. Innovative Web Developer, number of experience in
          website design and Back-end . Demonstrated talent for front and
          back-end web development to optimize online presence. Seasoned expert
          in languages such as HTML,CSS,React and as well as scripting languages
          and JavaScript.
        </p>

        <h2>
          Currently,
          <span>
            {" "}
            Software Engineer <br />
          </span>
          At DAZN, Hyderabad, India
        </h2>
        <table className={table.join(" ")}>
          <Table />
        </table>
        <a href={mycv} download>
          <button className="btn btn-primary">DOWNLOAD CV</button>
        </a>
      </div>
      <div className={Classes.myimage}>
        <img
          src={myimage}
          alt="Arun Kumar Singh"
          style={{ height: "650px", width: "450px" }}
        />
      </div>
    </div>
  );
};
export default aboutdetailes;
