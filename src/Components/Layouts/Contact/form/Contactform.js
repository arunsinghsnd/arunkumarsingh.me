import React from "react";
import Classes from "./Contactform.module.css";

const contactform = (props) => {
  const formcontrol = ["form-control", Classes.input];
  const { nameerror, emailerror, phoneerror } = props.error;
  const { namefocus, emailfocus, phonefocus } = props.focus;

  return (
    <form method="post" onSubmit={props.handleSubmit}>
      <div className="form-group">
        <label htmlFor="Name">Enter Your Name</label>
        <input
          type="text"
          className={formcontrol.join(" ")}
          name="name"
          onChange={props.handleChange}
          value={props.name}
          placeholder="name"
        />
        <span style={{ color: "red" }}>{nameerror}</span>
        <span style={{ color: "red" }}>{namefocus}</span>
      </div>
      <div className="form-group">
        <label htmlFor="Name">Enter Your Email</label>
        <input
          type="text"
          className={formcontrol.join(" ")}
          name="email"
          onChange={props.handleChange}
          value={props.email}
          placeholder="email"
        />
        <span style={{ color: "red" }}>{emailerror}</span>
        <span style={{ color: "red" }}>{emailfocus}</span>
      </div>
      <div className="form-group">
        <label htmlFor="Name">Enter Your Number</label>
        <input
          type="text"
          className={formcontrol.join(" ")}
          name="phone"
          onChange={props.handleChange}
          value={props.phone}
          placeholder="mobile no."
        />
        <span style={{ color: "red" }}>{phoneerror}</span>
        <span style={{ color: "red" }}>{phonefocus}</span>
      </div>
      {props.buttondisabled}
    </form>
  );
};
export default contactform;
