import React from "react";
import "./Services.css";
import HeartEmoji from "../img/heartemoji.png";
import Glasses from "../img/glasses.png";
import Humble from "../img/humble.png";
import Card from "../Components/Card/Card";

const Services = () => {
  return (
    <div className="services">
      <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elitsijdgfgsdighfj
          kjsgdgf <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo.
        </span>
        <button className="button s-button">Download CV</button>
      </div>
      <div className="cards">
        <div style={{ left: "14rem" }}>
          <Card
            emoji={HeartEmoji}
            heading={"Frontend Developer"}
            details={"Html, Css, Javascript, React, Redux, Bootstrap"}
          />
        </div>
        <div style={{ left: "-3rem", top: "12rem" }}>
          <Card
            emoji={Glasses}
            heading={"Competitive Coder"}
            details={"C++ , Data Structures And Algorithms"}
          />
        </div>
        <div style={{ left: "14rem", top: "19rem" }}>
          <Card
            emoji={Humble}
            heading={"Backend Developer"}
            details={"NODE.JS, EXPRESS JS, MONGODB"}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
