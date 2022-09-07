import React, { useState, useEffect } from "react";
import "./Main.css";
import Routins from "../Routins/Routins";
import img from "../../img/p.svg";
import img2 from "../../img/p1.svg";
import img3 from "../../img/p2.svg";
import img4 from "../../img/p3.svg";
import wave1 from "../../img/wave1.svg";
import wave2 from "../../img/wave2.svg";
import wave3 from "../../img/wave3.svg";
import wave4 from "../../img/wave4.svg";
import logo from "../../img/PTM2.png";
import { TiThMenu } from "react-icons/ti";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiFillTwitterCircle,
  AiOutlineLinkedin,
} from "react-icons/ai";

function Main() {
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

  const [acm, setAcm] = useState(true);

  const showM = function () {
    setAcm((e) => !e);
    console.log(acm);
  };

  return (
    <div className="main-container">
      <div className="menu-icon">
        <TiThMenu className="menu-log" onClick={showM} />
      </div>

      <span>
        <div className="main-tasks">
          {data.map((e) => (
            <div className="card" style={{ border: `${e.border}` }}>
              <div className="flex">
                <h2>{e.title}</h2>
                <img className="icon" src={e.icon} />
              </div>
              <button className="mbtn">Let's see</button>
            </div>
          ))}
        </div>

        <Routins />

        <div
          className="menu"
          style={{ transform: `${acm ? "translate(0%)" : "translate(200%)"}` }}
        >
          <div className="header-m">
            <img
              src={logo}
              className="m-logo"
              style={{ borderRadius: "50%" }}
            />
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
              <AiOutlineInstagram
                type="logo"
                className="icons"
              ></AiOutlineInstagram>
            </li>
            <li className="th">
              {" "}
              <AiOutlineFacebook
                type="logo"
                className="icons"
              ></AiOutlineFacebook>{" "}
            </li>
            <li className="th">
              {" "}
              <AiOutlineLinkedin
                type="logo"
                className="icons"
              ></AiOutlineLinkedin>{" "}
            </li>{" "}
            <li className="th">
              <AiFillTwitterCircle
                className="icons"
                type="logo"
              ></AiFillTwitterCircle>{" "}
            </li>
          </div>
        </div>
      </span>
    </div>
  );
}

export default Main;
