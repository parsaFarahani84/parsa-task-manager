import React from "react";
import "./AddRoutin.css";
import { RiTimerFill, RiIncreaseDecreaseFill } from "react-icons/ri";
import { BsFillFileCheckFill } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";

function AddRoutin(props) {
  const [active, setActive] = useState("check");
  // const [input, setInput] = useState("");

  const timerActive = function () {
    setActive("timer");
  };

  const plusActive = function () {
    setActive("increaseDecrease");
  };

  const checkActive = function () {
    setActive("check");
  };

  return (
    <div className="add-new">
      <div className="whole">
        <h1 className="a-h1">Let's add a Routin</h1>
        <div className="add-con">
          <h3>Title:</h3>
          <input
            className="title-input"
            type="text"
            placeholder="Add your routin"
          ></input>
          <h3 style={{ marginTop: "1rem" }}>Time:</h3>
          <input
            type="text"
            placeholder="add your time"
            className="time-input"
          ></input>

          <h3 style={{ marginTop: "1rem" }}>Type:</h3>
          <div className="choose-type">
            <RiTimerFill
              className="icona"
              style={{ color: `${active === "timer" ? "#35bdfc" : ""}` }}
              onClick={timerActive}
            />
            <RiIncreaseDecreaseFill
              className="icona"
              style={{
                color: `${active === "increaseDecrease" ? "#35bdfc" : ""}`,
              }}
              onClick={plusActive}
            />
            <BsFillFileCheckFill
              className="icona"
              style={{ color: `${active === "check" ? "#35bdfc" : ""}` }}
              onClick={checkActive}
            />
          </div>
          <div className="flex-b">
            <Link to="/manager">
              <button className="btn">submit</button>
            </Link>
            <Link to="/manager">
              <button className="btn">cancel</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddRoutin;
