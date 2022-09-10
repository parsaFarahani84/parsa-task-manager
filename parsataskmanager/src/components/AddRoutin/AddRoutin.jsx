import React from "react";
import "./AddRoutin.css";
import { RiTimerFill, RiIncreaseDecreaseFill } from "react-icons/ri";
import { BsFillFileCheckFill } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";
import img from "../../img/add-routine.svg";

function AddRoutin(props) {
  const [active, setActive] = useState("check");

  const timerActive = function () {
    setActive("timer");
  };

  const plusActive = function () {
    setActive("plus-minus");
  };

  const checkActive = function () {
    setActive("check");
  };

  const [nameValue, setNameValue] = useState("");
  const [value, setValue] = useState("");
  const [hours, sethours] = useState("0");
  const [minuts, setminuts] = useState("0");
  const [seconds, setseconds] = useState("0");

  const submitHandler = function (e) {
    e.preventDefault();
    if (value === "") {
      return;
    }
    if (nameValue === "") {
      return;
    }

    props.passData({
      icon: <BsFillFileCheckFill />,
      iconTitle: `${nameValue}`,
      time: value,
      type: active,
      id: Math.random() * 10000,
      complete: false,
      houers: hours,
      minuts: minuts,
      seconds: seconds,
      num: 0,
      activeTmer: false,
      delete: false,
    });

    //-------------------
    setNameValue("");
    setValue("");
    sethours("");
    setminuts("");
    setseconds("");
  };

  const titleHandler = function (e) {
    setNameValue(e.target.value);
  };

  const valueHandler = function (e) {
    setValue(e.target.value);
  };

  const hoursHandler = function (e) {
    sethours(e.target.value);
  };

  const minutsHandler = function (e) {
    setminuts(e.target.value);
  };
  const secondsHandler = function (e) {
    setseconds(e.target.value);
  };

  const timeChecker = function () {
    if (active === "check") {
      return (
        <input
          className="title-input"
          type="text"
          placeholder="Add your time"
          onChange={valueHandler}
          value={value}
        ></input>
      );
    }
    if (active === "plus-minus") {
      return (
        <input
          className="title-input"
          type="number"
          placeholder="Add your number"
          onChange={valueHandler}
          value={value}
        ></input>
      );
    }
    if (active === "timer") {
      return (
        <div className="timer-input">
          <span>
            <input
              className="title-input"
              type="text"
              placeholder="Add your time"
              onChange={valueHandler}
              value={value}
            ></input>
            <p>hours:</p>
            <input
              type="number"
              className="timer-filler"
              onChange={hoursHandler}
              value={hours}
            ></input>
          </span>
          <span>
            <p>minuts:</p>
            <input
              type="number"
              className="timer-filler"
              onChange={minutsHandler}
              value={minuts}
            ></input>
          </span>

          <span>
            <p>seconds:</p>
            <input
              type="number"
              className="timer-filler"
              onChange={secondsHandler}
              value={seconds}
            ></input>
          </span>
        </div>
      );
    }
  };

  return (
    <div className="fff">
      <form className="add-new" onSubmit={submitHandler}>
        <div className="whole">
          <div className="addH">
            <h1 className="a-h1">Let's add a Routin</h1>
            <img src={img} className="ilu" />
          </div>
          <div className="add-con">
            <h3>Title:</h3>
            <input
              className="title-input"
              type="text"
              placeholder="Add your routin"
              onChange={titleHandler}
              value={nameValue}
            ></input>
            <h3 style={{ marginTop: "1rem" }}>Time:</h3>
            {timeChecker()}
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
                  color: `${active === "plus-minus" ? "#35bdfc" : ""}`,
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
              <div>
                <button className="btny" type="submit" onClick={submitHandler}>
                  submit
                </button>
              </div>

              <Link to="/manager">
                <button className="btny">back</button>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddRoutin;
