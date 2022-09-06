import React, { useState, useEffect } from "react";
import "./Routins.css";
import { AiFillPlusCircle } from "react-icons/ai";
import { MdWork } from "react-icons/md";
import { FaBed } from "react-icons/fa";
import { BsPlayCircleFill, BsFillPauseCircleFill } from "react-icons/bs";
import { BiReset } from "react-icons/bi";
import { AiFillMinusCircle, AiFillCheckCircle } from "react-icons/ai";
import { BiCircle } from "react-icons/bi";
import { GiWaterFlask, GiMeditation, GiPartyPopper } from "react-icons/gi";
// import AddRoutin from "../AddRoutin/AddRoutin";

function Routins() {
  const [button, setButton] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [minuts, setMinuts] = useState(0);
  const [houers, setHouers] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [num, setNum] = useState(0);
  const [active, setActive] = useState(false);
  const [complete, setcomplete] = useState(false);

  //   setRoutin(newRoutin);

  const [rData, setRdata] = useState([
    {
      icon: <GiWaterFlask className="icons" />,
      iconTitle: "Glass of Water",
      time: "8 Times",
      type: "plus-minus",
      id: Math.random() * 10000,
      complete: false,
    },

    {
      icon: <GiMeditation className="icons" />,
      iconTitle: "Meditation",
      time: "10m a day",
      type: "timer",
      id: Math.random() * 10000,
      complete: false,
    },
    {
      icon: <MdWork className="icons" />,
      iconTitle: "Work",
      time: "8h every day",
      type: "check",
      id: Math.random() * 10000,
      complete: false,
    },
    {
      icon: <FaBed className="icons" />,
      iconTitle: "Sleep well",
      time: "8h",
      type: "check",
      id: Math.random() * 10000,
      complete: false,
    },
    {
      icon: <GiPartyPopper className="icons" />,
      iconTitle: "Learn a New Skill",
      time: "1 per month",
      type: "check",
      id: Math.random() * 10000,
      complete: false,
    },
  ]);

  const checkType = function (e) {
    // if (e.type === "plus-minus") {
    //   return (
    //     <div className="counting">
    //       <AiFillMinusCircle className="icont" onClick={decNum} />
    //       {num}
    //       <AiFillPlusCircle className="icont" onClick={increaseNum} />
    //     </div>
    //   );
    // } else if (e.type === "check") {
    //   return (
    //     <div className="check">
    //       {!button ? (
    //         <BiCircle
    //           className="small-check"
    //           onClick={() => {
    //             setButton(true);
    //             if (button) {
    //               setButton(false);
    //             }
    //           }}
    //         />
    //       ) : (
    //         <AiFillCheckCircle
    //           className="small-check"
    //           onClick={() => {
    //             setButton(true);
    //             if (button) {
    //               setButton(false);
    //             }
    //           }}
    //         />
    //       )}
    //     </div>
    //   );
    // } else if (e.type === "timer") {
    //   return (
    //     <div>
    //       <div className="time">
    //         <div className="timer">
    //           {houers}h , {minuts}m , {seconds}s
    //         </div>
    //       </div>
    //       <div className="check">
    //         <div className="box">
    //           <div className="row">
    //             {!isActive ? (
    //               <BsPlayCircleFill
    //                 className="small-check"
    //                 onClick={toggle}
    //               ></BsPlayCircleFill>
    //             ) : (
    //               <BsFillPauseCircleFill
    //                 className="small-check"
    //                 onClick={toggle}
    //               ></BsFillPauseCircleFill>
    //             )}
    //             <BiReset className="small-check" onClick={reset}></BiReset>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   );
    // }
  };

  const func = function (e) {
    if (e.type === "plus-minus") {
      return {
        backgroundColor: num >= 8 ? "#3c498b" : "",
        color: num >= 8 ? "white" : "",
      };
    } else if (e.type === "timer") {
      return {
        backgroundColor: minuts >= 10 ? "#3c498b" : "",
        color: minuts >= 10 ? "white" : "",
      };
    } else if (e.type === "check") {
      return {
        backgroundColor: button ? "#3c498b" : "",
        color: button ? "white" : "",
      };
    }
  };

  const increaseNum = function () {
    if (num >= 7) {
      setActive(true);
    }

    return setNum(num + 1);
  };

  const decNum = function () {
    if (num < 9) {
      setActive(false);
      console.log("NO");
    }
    if (num <= 0) {
      return;
    } else {
      return setNum(num - 1);
    }
  };

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setMinuts(0);
    setHouers(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
        if (seconds === 59) {
          setSeconds(0);
          setMinuts((m) => m + 1);
        }
        if (minuts === 59) {
          setMinuts(0);
          setHouers((h) => h + 1);
        }
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const completeTodo = (id) => {
    let updated = rData.map((e) => {
      if (e.id === id) {
        e.complete = !e.complete;
        console.log(e.complete);
      }
      return e;
    });
    console.log(rData);
    setRdata(updated);
  };

  return (
    <div className="rutins">
      {/* <AddRoutin /> */}
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
            {/* {checkType(prop)} */}
            <div className="check">
              <BiCircle
                className="small-check"
                onClick={() => {
                  completeTodo(prop.id);
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Routins;
