import React, { Component } from "react";
import Classes from "./Project.module.css";
import img1 from "../../../../assests/projects/clothing-sales.PNG";
import img2 from "../../../../assests/projects/T-shrit-ecom.PNG";
import img3 from "../../../../assests/projects/covid.PNG";
import img4 from "../../../../assests/projects/face-detection.PNG";
import img5 from "../../../../assests/projects/onlineshae.PNG";
import img6 from "../../../../assests/projects/ReactportfiloDesihgn.PNG";
import img7 from "../../../../assests/projects/RoboFreinds.PNG";
import img8 from "../../../../assests/projects/manage-your-time-TODO-app.PNG";

class Project extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          id: 1,
          img: img1,
          alt: "Clothing Sales",
          topic: "Clothing Sales",
          link: "https://github.com/arunsinghsnd/crwn-clothing",
          link1: "https://clothing-sales.herokuapp.com/",
        },
        {
          id: 2,
          img: img2,
          alt: "T-Shirt Store",
          topic: "T-Shirt Store",
          link: "https://github.com/arunsinghsnd/e-commerce-frontend",
          link1: "https://github.com/arunsinghsnd/e-commerce-frontend",
        },
        {
          id: 3,
          img: img3,
          alt: "Covid-19 Tracking Updates",
          topic: "Covid-19 Tracking Updates",
          link: "https://github.com/arunsinghsnd/covid19-tracking-updates",
          link1: "https://covid19-tracking-updates.netlify.app/",
        },
        {
          id: 4,
          img: img4,
          alt: "face-detecting-webapp",
          topic: "face-detecting-webapp",
          link: "https://github.com/arunsinghsnd/facedetecting-webapp",
          link1: "https://arunsinghsnd.github.io/facedetecting-webapp/",
        },
        {
          id: 5,
          img: img5,
          alt: "Online Share",
          topic: "Online Share",
          link: "https://github.com/arunsinghsnd/onlineshare",
          link1: "https://onlineshare.herokuapp.com/",
        },
        {
          id: 6,
          img: img6,
          alt: "React Portfolio Desgin",
          topic: "React Portfolio Desgin",
          link: "https://github.com/arunsinghsnd/React-Portfolio-Desgin",
          link1: "https://react-portfolio-desgin.netlify.app/",
        },
        {
          id: 7,
          img: img7,
          alt: "Robo Friends",
          topic: "Robo Friends",
          link: "https://github.com/arunsinghsnd/robofriends",
          link1: "https://arunsinghsnd.github.io/robofriends/",
        },
        {
          id: 8,
          img: img8,
          alt: "React ToDoList",
          topic: "React ToDoList",
          link: "https://github.com/arunsinghsnd/manage-your-time-TODO-app",
          link1: "https://manage-your-entry.herokuapp.com/",
        },
      ],
    };
  }
  render() {
    return (
      <div className={Classes.content}>
        {this.state.projects.map(project => {
          return (
            <div key={project.id} className={Classes.box}>
              <span className={Classes.topic}>
                <span>{project.topic}</span>
              </span>
              <img
                src={project.img}
                alt={project.alt}
                style={{ width: "100%", height: "100%" }}
              />
              <a href={project.link1} rel="noopener noreferrer" target="_blank">
                <button className={Classes.liveView}> View in Live</button>
              </a>
              <a href={project.link} rel="noopener noreferrer" target="_blank">
                <button className={Classes.githubbut}>View in Github</button>
              </a>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Project;
