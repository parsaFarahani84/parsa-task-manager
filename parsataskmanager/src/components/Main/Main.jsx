import React, { useState, useEffect } from "react";
import "./Main.css";
import "boxicons";
import img from "../../img/p.svg";
import img2 from "../../img/p1.svg";
import img3 from "../../img/p2.svg";
import img4 from "../../img/p3.svg";
import wave1 from "../../img/wave1.svg";
import wave2 from "../../img/wave2.svg";
import wave3 from "../../img/wave3.svg";
import wave4 from "../../img/wave4.svg";
import logo from "../../img/PTM2.png";

import { AiFillPlusCircle } from "react-icons/ai";
import { MdWork } from "react-icons/md";
import { FaBed } from "react-icons/fa";
import { BsPlayCircleFill } from "react-icons/bs";
import { GrPowerReset } from "react-icons/gr";
import { GiPartyPopper } from "react-icons/gi";
import { AiFillMinusCircle } from "react-icons/ai";
import { BiCircle } from "react-icons/bi";
import { GiWaterFlask } from "react-icons/gi";
import { GiMeditation } from "react-icons/gi";

function Main() {
  const [num, setNum] = useState(0);

  const data = [
    {
      title: "Today",
      icon: `${img}`,
      border: "4px solid #2b4865",
      wave: `${wave1}`,
    },
    {
      title: "This Week",
      icon: `${img2}`,
      border: "4px solid #2b4865",
      wave: `${wave2}`,
    },
    {
      title: "This Month",
      icon: `${img3}`,
      border: "4px solid #2b4865",
      wave: `${wave3}`,
    },

    {
      title: "Preorities",
      icon: `${img4}`,
      border: "4px solid #2b4865",
      wave: `${wave4}`,
    },
  ];

  const increaseNum = function () {
    return setNum(num + 1);
  };

  const decNum = function () {
    if (num <= 0) {
      return;
    } else {
      return setNum(num - 1);
    }
  };

  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="main-container">
      <div className="main-tasks">
        {data.map((e) => (
          <div className="card" style={{ border: `${e.border}` }}>
            <div className="flex">
              <h2>{e.title}</h2>
              <img className="icon" src={e.icon} />
            </div>
            <button className="mbtn">Let's see</button>
            {/* <img src={`${e.wave}`} className="wave" /> */}
          </div>
        ))}
      </div>
      <div className="rutins">
        <div className="ro">
          <div className="right styles">
            <div className="water-h containers">
              <GiWaterFlask className="icons" />
              <h3 className="font-h">Glass of Water</h3>
            </div>
            <div className="time">
              <h1 clas>8 Times</h1>
            </div>
            <div className="counting">
              <AiFillMinusCircle className="icont" onClick={decNum} />
              {num}
              <AiFillPlusCircle className="icont" onClick={increaseNum} />
            </div>
          </div>
          <div className="right styles">
            <div className="medit-h containers">
              <GiMeditation className="icont" />
              <h3 className="font-h">Meditation</h3>
            </div>
            <div className="time">
              <h1 clas>10m a day</h1>
            </div>

            <div className="check">
              <BiCircle className="small-check" />
              <div className="timer">{seconds}s</div>

              <div className="row">
                <BsPlayCircleFill
                  className="small-check"
                  onClick={toggle}
                ></BsPlayCircleFill>
                <GrPowerReset className="small-check" onClick={reset}>
                  Reset
                </GrPowerReset>
              </div>
            </div>
            <div className="timer"></div>
          </div>
          <div className="right styles">
            <div className="work-h containers">
              <MdWork className="icont" />
              <h3 className="font-h">Work </h3>
            </div>
            <div className="time">
              <h1 clas>8h every day</h1>
            </div>
            <div className="check">
              <BiCircle className="small-check" />
            </div>
          </div>
          <div className="right styles ">
            <div className="night-h containers">
              <FaBed className="icont" />
              <h3 className="font-h">Sleep well</h3>
            </div>
            <div className="time">
              <h1 clas>8h</h1>
            </div>
            <div className="check">
              <BiCircle className="small-check" />
            </div>
          </div>
          <div className="styles">
            <div className="containers">
              <div className="he">
                <GiPartyPopper className="icont" />
                <h3 className="font-h">Learn a New Skill</h3>
              </div>
            </div>
            <div className="time">
              <h1 clas>1 per month</h1>
            </div>
            <div className="check">
              <BiCircle className="small-check" />
            </div>
          </div>
        </div>
      </div>

      <div className="menu">
        <div className="header-m">
          <img src={logo} className="m-logo" style={{ borderRadius: "50%" }} />
          <h3>MENU</h3>
        </div>

        <ul className="items">
          <li className="item">
            Today<box-icon type="solid" name="calendar-event"></box-icon>
          </li>
          <li className="item">
            This Week<box-icon name="calendar" type="solid"></box-icon>
          </li>
          <li className="item">
            This Month<box-icon type="solid" name="calendar-week"></box-icon>
          </li>
          <li className="item">
            Contact Us<box-icon name="phone" type="solid"></box-icon>
          </li>
          <li className="item">
            Info<box-icon name="info-circle" type="solid"></box-icon>
          </li>
        </ul>
        <div className="social">
          <li className="th">
            <box-icon name="instagram" type="logo"></box-icon>
          </li>
          <li className="th">
            {" "}
            <box-icon type="logo" name="twitter"></box-icon>{" "}
          </li>
          <li className="th">
            {" "}
            <box-icon name="telegram" type="logo"></box-icon>{" "}
          </li>{" "}
          <li className="th">
            <box-icon name="facebook-circle" type="logo"></box-icon>{" "}
          </li>
        </div>
      </div>
      <script
        src="https://kit.fontawesome.com/ea1326f9fb.js"
        crossorigin="anonymous"
      ></script>
    </div>
  );
}

export default Main;
