import React, { useState, useEffect } from "react";
import "./Routins.css";
import { AiFillPlusCircle } from "react-icons/ai";

import { BsPlayCircleFill, BsFillPauseCircleFill } from "react-icons/bs";
import { BiReset } from "react-icons/bi";
import { AiFillMinusCircle, AiFillCheckCircle } from "react-icons/ai";
import { BiCircle } from "react-icons/bi";

// import AddRoutin from "../AddRoutin/AddRoutin";
import { BsPlusSquareFill } from "react-icons/bs";

import { Link } from "react-router-dom";

function Routins(props) {
  const [rData, setRdata] = useState(props.getData);

  const increaseNum = function (id) {
    let updated = rData.map((e) => {
      if (id === e.id) {
        e.num = e.num + 1;

        console.log(e.num, e.time);
        if (e.num == e.time) {
          e.complete = true;
        }
        if (e.num < e.time) {
          e.complete = false;
        }
      }
      return e;
    });
    setRdata(updated);
  };

  const decNum = function (id) {
    let updated = rData.map((e) => {
      if (e.id === id) {
        if (e.num > 0) {
          e.num = e.num - 1;
        }
        if (e.num == e.time) {
          e.complete = true;
        }
        if (e.num < e.time) {
          e.complete = false;
        }
      }
      return e;
    });

    setRdata(updated);
  };

  // const Effect = function (e) {
  //   useEffect(() => {
  //     let interval = null;

  //     if (e.activeTimer) {
  //       interval = setInterval(() => {
  //         e.seconds = e.seconds + 1;
  //         if (e.seconds === 59) {
  //           e.seconds = 0;
  //           e.minuts = e.minuts + 1;
  //         }
  //         if (e.minuts === 59) {
  //           e.minuts = 0;
  //           e.houers = e.houers + 1;
  //         }
  //       }, 1000);
  //     } else if (!e.activeTimer && e.seconds !== 0) {
  //       clearInterval(interval);
  //     }

  //     return () => clearInterval(interval);
  //   }, [e.activeTimer, e.seconds]);
  // };

  function toggle(id) {
    let updated = rData.map((e) => {
      if (id === e.id) {
        e.activeTimer = !e.activeTimer;
        console.log(e.activeTimer);
      }
      return e;
    });
    setRdata(updated);
  }

  function reset(e) {
    e.seconds = 0;
    e.minuts = 0;
    e.houers = 0;
    e.activeTimer = false;
  }

  const completeTodo = (id) => {
    let updated = rData.map((e) => {
      if (e.id === id) {
        e.complete = !e.complete;
      }
      return e;
    });
    console.log(rData);
    setRdata(updated);
  };

  const checking = function (prop) {
    if (prop.type === "check") {
      return (
        <div className="check">
          {!prop.complete ? (
            <BiCircle
              className="small-check"
              onClick={() => {
                completeTodo(prop.id);
              }}
            />
          ) : (
            <AiFillCheckCircle
              className="small-check"
              onClick={() => {
                completeTodo(prop.id);
              }}
            />
          )}
        </div>
      );
    } else if (prop.type === "plus-minus") {
      return (
        <div className="counting">
          <AiFillMinusCircle
            className="icont"
            onClick={() => {
              decNum(prop.id);
            }}
          />
          {prop.num}
          <AiFillPlusCircle
            className="icont"
            onClick={() => {
              increaseNum(prop.id);
            }}
          />
        </div>
      );
    } else if (prop.type === "timer") {
      return (
        <div>
          <div className="time">
            <div className="timer">
              {prop.houers}h , {prop.minuts}m , {prop.seconds}s
            </div>
          </div>
          <div className="check">
            <div className="box">
              <div className="row">
                {!prop.activeTimer ? (
                  <BsPlayCircleFill
                    className="small-check"
                    onClick={() => toggle(prop.id)}
                  ></BsPlayCircleFill>
                ) : (
                  <BsFillPauseCircleFill
                    className="small-check"
                    onClick={() => toggle(prop.id)}
                  ></BsFillPauseCircleFill>
                )}
                <BiReset
                  className="small-check"
                  onClick={() => reset(prop)}
                ></BiReset>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="rutins">
      <Link to="/add-routin">
        <BsPlusSquareFill className="add" />
      </Link>
      <div className="ro">
        {rData.map((prop) => (
          <div
            className={prop.complete ? "styles active" : "styles"}
            key={prop.id}
          >
            <div className="water-h containers">
              {prop.icon}
              <h3 className="font-h">{prop.iconTitle}</h3>
            </div>
            <div className="time">
              <h1>{prop.time}</h1>
            </div>
            {checking(prop)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Routins;
