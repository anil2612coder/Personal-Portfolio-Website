import React from "react";
import "./Portfolio.css";
import Socialmedia from "../../img/socialmedia.jpg";
import Ecommerce from "../../img/Ecommerce.jpg";
import portfolio from "../../img/Portfolio.jpg";

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <div className="recentProject">
        <span>Recent Project</span>
        <span>Portfolio</span>
      </div>
      <div className="project">
        <div>
          <a href="">
            <img src={Socialmedia} alt="" />
          </a>
          <div>Socila Media Website With MERN Stack</div>
        </div>
        <div>
          <a href="">
            <img src={Ecommerce} alt="" />
          </a>
          <div>Ecommerce Website With MERN Stack</div>
        </div>
        <div>
          <a href="">
            <img src={portfolio} alt="" />
          </a>
          <div>Personal Portfolio Website With MERN Stack</div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
