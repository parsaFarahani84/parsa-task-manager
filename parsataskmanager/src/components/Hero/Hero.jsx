import React from "react";
import "./Hero.css";
import logo from "../../img/PTM2.png";
import img from "../../img/o2.svg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="main-hero">
      <div className="header">
        <img className="hero-logo" src={logo}></img>
      </div>

      <div className="left">
        <h1>USE YOUR DAYS BETTER WHIT US</h1>
        <div>
          <Link to="/manager" className="none">
            {" "}
            <button className="btn">Start now for free</button>
          </Link>
        </div>
      </div>

      <div className="right">
        <img src={img} />
      </div>
    </div>
  );
}

export default Hero;
