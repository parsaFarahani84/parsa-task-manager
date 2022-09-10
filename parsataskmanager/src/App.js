import "./App.css";
import React from "react";
import { useState } from "react";
import Hero from "./components/Hero/Hero";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Main from "./components/Main/Main";
import AddRoutin from "./components/AddRoutin/AddRoutin";
import { MdWork } from "react-icons/md";
import { FaBed } from "react-icons/fa";
import { GiWaterFlask, GiMeditation, GiPartyPopper } from "react-icons/gi";
import SwipeableBottomSheet from "react-swipeable-bottom-sheet";
import { AiFillInfoCircle } from "react-icons/ai";
import { FaBoxOpen } from "react-icons/fa";
import { MdAddBox, MdAddToPhotos } from "react-icons/md";
import { RiTodoFill } from "react-icons/ri";
import TodoForm from "./components/Todo/TodoForm";
import TodoList from "./components/Todo/TodoList";

function App() {
  const [datae, setData] = useState([
    {
      icon: <GiWaterFlask className="icons" />,
      iconTitle: "Glass of Water",
      time: 8,
      type: "plus-minus",
      id: Math.random() * 10000,
      complete: false,
      num: 0,
    },

    {
      icon: <GiMeditation className="icons" />,
      iconTitle: "Meditation",
      time: "10m a day",
      type: "timer",
      id: Math.random() * 10000,
      complete: false,
      activeTimer: false,
      houers: 0,
      minuts: 0,
      seconds: 0,
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

  const dataHandler = function (data) {
    // console.log(datae);
    setData((prevData) => {
      return [...prevData, data];
    });
  };

  const [bootomV, setBottomV] = useState(false);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Hero />}></Route>
        <Route path="/manager" element={<Main resiveData={datae} />}></Route>
        <Route
          path="/add-routin"
          element={<AddRoutin passData={dataHandler} />}
        ></Route>
        <Route path="/todo" element={<TodoList />}></Route>
      </Routes>

      <SwipeableBottomSheet
        style={{ zIndex: "2" }}
        overlay={true}
        overflowHeight={50}
        onChange={() => {
          setBottomV(false);
        }}
      >
        <div className="bottom-container">
          <span className="center">
            <div className="line"></div>
          </span>
          <div className="options">
            <h2>MENU</h2>
            <ul className="opti">
              <li>
                <Link to="/manager" className="links">
                  <FaBoxOpen />
                  Routins
                </Link>
              </li>
              <li>
                <Link to="/add-routin" className="links">
                  <MdAddBox />
                  Add Routin
                </Link>
              </li>
              <li>
                <Link to="/todo" className="links">
                  <MdAddToPhotos />
                  Todo List{" "}
                </Link>
              </li>

              <li>
                <AiFillInfoCircle />
                Info
              </li>
            </ul>
          </div>
        </div>
      </SwipeableBottomSheet>
    </div>
  );
}

export default App;
