import React from "react";
import "./Skills.css";
import { motion } from "framer-motion";

const Skills = () => {
  const transition = { duration: 2, type: "spring" };
  return (
    <div className="skills" id="skills">
      <div>
        <span>Skills-</span>
        <span className="s-percentage"></span>
      </div>
      <div>
        <div className="left-skills">
          <div className="score">
            <div className="s-score">
              <span>HTML</span>
              <span>98%</span>
            </div>
            <div className="percentage">
              <div
                style={{
                  position: "absolute",
                  backgroundColor: "var(--orange)",
                  width: "98%",
                  height: "0.5rem",
                }}
              ></div>
            </div>
          </div>
          <div className="score">
            <div className="s-score">
              <span>CSS</span>
              <span>92%</span>
            </div>
            <div className="percentage">
              <div
                style={{
                  position: "absolute",
                  backgroundColor: "var(--orange)",
                  width: "92%",
                  height: "0.5rem",
                }}
              ></div>
            </div>
          </div>
          <div className="score">
            <div className="s-score">
              <span>JAVASCRIPT</span>
              <span>90%</span>
            </div>
            <div className="percentage">
              <div
                style={{
                  position: "absolute",
                  backgroundColor: "var(--orange)",
                  width: "90%",
                  height: "0.5rem",
                }}
              ></div>
            </div>
          </div>
          <div className="score">
            <div className="s-score">
              <span>REACT</span>
              <span>88%</span>
            </div>
            <div className="percentage">
              <div
                style={{
                  position: "absolute",
                  backgroundColor: "var(--orange)",
                  width: "88%",
                  height: "0.5rem",
                }}
              ></div>
            </div>
          </div>
          <div className="score">
            <div className="s-score">
              <span>REDUX</span>
              <span>85%</span>
            </div>
            <div className="percentage">
              <div
                style={{
                  position: "absolute",
                  backgroundColor: "var(--orange)",
                  width: "85%",
                  height: "0.5rem",
                }}
              ></div>
            </div>
          </div>
          <div className="score">
            <div className="s-score">
              <span>BOOTSTRAP</span>
              <span>95%</span>
            </div>
            <div className="percentage">
              <div
                style={{
                  position: "absolute",
                  backgroundColor: "var(--orange)",
                  width: "95%",
                  height: "0.5rem",
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="right-skills">
          <div className="score">
            <div className="s-score">
              <span>NODEJS</span>
              <span>80%</span>
            </div>
            <div className="percentage">
              <div
                style={{
                  position: "absolute",
                  backgroundColor: "var(--orange)",
                  width: "80%",
                  height: "0.5rem",
                }}
              ></div>
            </div>
          </div>
          <div className="score">
            <div className="s-score">
              <span>EXPRESS JS</span>
              <span>90%</span>
            </div>
            <div className="percentage">
              <div
                style={{
                  position: "absolute",
                  backgroundColor: "var(--orange)",
                  width: "90%",
                  height: "0.5rem",
                }}
              ></div>
            </div>
          </div>
          <div className="score">
            <div className="s-score">
              <span>MONGODB</span>
              <span>95%</span>
            </div>
            <div className="percentage">
              <div
                style={{
                  position: "absolute",
                  backgroundColor: "var(--orange)",
                  width: "95%",
                  height: "0.5rem",
                }}
              ></div>
            </div>
          </div>
          <div className="score">
            <div className="s-score">
              <span>C++</span>
              <span>90%</span>
            </div>
            <div className="percentage">
              <div
                style={{
                  position: "absolute",
                  backgroundColor: "var(--orange)",
                  width: "90%",
                  height: "0.5rem",
                }}
              ></div>
            </div>
          </div>
          <div className="score">
            <div className="s-score">
              <span>DATA STRUCTURES AND ALGORITHMS</span>
              <span>85%</span>
            </div>
            <div className="percentage">
              <div
                style={{
                  position: "absolute",
                  backgroundColor: "var(--orange)",
                  width: "85%",
                  height: "0.5rem",
                }}
              ></div>
            </div>
          </div>
          <div className="score">
            <div className="s-score">
              <span>OOPS</span>
              <span>85%</span>
            </div>
            <div className="percentage">
              <div
                style={{
                  position: "absolute",
                  backgroundColor: "var(--orange)",
                  width: "85%",
                  height: "0.5rem",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
