import React from "react";
import "./Services.css";
import HeartEmoji from "../img/heartemoji.png";
import Glasses from "../img/glasses.png";
import Humble from "../img/humble.png";
import Card from "../Components/Card/Card";
import { motion } from "framer-motion";

const Services = () => {
  const transition = { duration: 2, type: "spring" };
  return (
    <div className="services" id="services">
      <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <span>
          Now I am MERN stack Developer.
          <br /> <br /> I give servises to companies in developing website.
        </span>
        <button className="button s-button">Download CV</button>
      </div>
      <div className="cards">
        <motion.div
          initial={{ left: "18rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
          style={{ left: "14rem" }}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Frontend Developer"}
            details={"Html, Css, Javascript, React, Redux, Bootstrap"}
          />
        </motion.div>
        <motion.div
          initial={{ left: "-6rem" }}
          whileInView={{ left: "-3rem" }}
          transition={transition}
          style={{ left: "-3rem", top: "12rem" }}
        >
          <Card
            emoji={Glasses}
            heading={"Competitive Coder"}
            details={"C++ , Data Structures And Algorithms"}
          />
        </motion.div>
        <motion.div
          initial={{ left: "20rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
          style={{ left: "14rem", top: "19rem" }}
        >
          <Card
            emoji={Humble}
            heading={"Backend Developer"}
            details={"NODE.JS, EXPRESS JS, MONGODB"}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
