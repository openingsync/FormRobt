import React from "react";
import rot from "../assets/robot.png";
import "../App.css";
import { Zoom } from "react-reveal";

const Robot = ({ value }) => {
  return (
    <Zoom top cascade>
      <div className="section_rot">
        <div className="robot_img">
          <img src={rot} />
        </div>

        <div className="eyes_container">
          <div className="eye left-eye">
            <div
              className="pupil"
              style={{
                transform: `translateX(${value.length * 0.2}px)`,
                top: value.length >= 1 ? "55%" : "28%",
                left: value.length >= 1 ? "0%" : "28%",
              }}
            ></div>
          </div>

          <div className="eye right-eye">
            <div
              className="pupil"
              style={{
                transform: `translateX(${value.length * 0.2}px)`,
                top: value.length >= 1 ? "55%" : "28%",
                left: value.length >= 1 ? "0%" : "28%",
              }}
            ></div>
          </div>
        </div>
      </div>
    </Zoom>
  );
};

export default Robot;
