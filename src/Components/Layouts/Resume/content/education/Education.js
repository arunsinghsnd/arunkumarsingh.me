import React from "react";
import Auxillary from "../../../../../hoc/Auxillary";

const education = () => {
  return (
    <Auxillary>
      <span>
        <i className="fas fa-graduation-cap"></i>
      </span>
      <h5>Education</h5>
      <h6>Bachelor Of Technology in Compter Science (June 2017 - July 2021)</h6>
      <p>Lovely Professional Universitry, Punjab</p>
      <p>
        I have compeleted my B.Tech in Computer Science and Engineering(CSE)
        from LPU and I have got 7.42 CGPA Overall.
      </p>
      <hr />
      <h6>Intermediate (12th) From CBSE Board (Apr 2015 - Mar 2017) </h6>
      <p>Saraswati Vidya Mandir, Sindri, Dhanbad, Jharkhand </p>
      <p>
        In 12th standard I had chosen Science stream(PCM) and Passed with 71.6
        %.
      </p>
      <hr />
      <h6>Matriculation (10th) From CBSE Board (Apr 2014 - Mar 2015)</h6>
      <p>Saraswati Vidya Mandir, Sindri, Dhanbad, Jharkhand </p>
      <p>I had successfully Passed with a 8.8 CGPA</p>

      <hr
        style={{
          border: "3px solid rgb(3, 127, 255)",
          color: "rgb(3, 127, 255)",
        }}
      />
    </Auxillary>
  );
};
export default education;
