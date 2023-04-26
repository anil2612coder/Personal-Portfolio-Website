import React from "react";
import "./Intro.css";
import GitHub from "../../img/github.png";
import Instagram from "../../img/instagram.png";
import Linkedin from "../../img/linkedin.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";

const Intro = () => {
  return (
    <div className="Intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hi! I Am </span>
          <span>Anil Kumar</span>
          <span>
            Full Stack Developer With High level of experience in web
            developement, producting the Qulity work
          </span>
        </div>
        <button className="i-button button">Hire me</button>
        <div className="i-icons">
          <img src={GitHub} alt="" />
          <img src={Linkedin} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <img src={glassesimoji} alt="" />
        <div style={{ top: "-4%", left: "60%" }}>
          <FloatingDiv image={crown} txt1="Full Stack" txt2="Developer" />
        </div>
        <div style={{ top: "70%", left: "-10%" }}>
          <FloatingDiv image={thumbup} txt1="Competitive" txt2="Coder" />
        </div>
        {/* blur div */}

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{ background: "#C1F5FF", top: "55%", left: "-25%" }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
