import React, { useState } from "react";
import "./Main.css";
import Routins from "../Routins/Routins";

function Main(props) {
  const resived = props.resiveData;

  // const data = [
  //   {
  //     title: "Today",
  //     icon: `${img}`,
  //     border: "4px solid #2b4865",
  //     wave: `${wave1}`,
  //   },
  //   {
  //     title: "This Week",
  //     icon: `${img2}`,
  //     border: "4px solid #2b4865",
  //     wave: `${wave2}`,
  //   },
  //   {
  //     title: "This Month",
  //     icon: `${img3}`,
  //     border: "4px solid #2b4865",
  //     wave: `${wave3}`,
  //   },

  //   {
  //     title: "Preorities",
  //     icon: `${img4}`,
  //     border: "4px solid #2b4865",
  //     wave: `${wave4}`,
  //   },
  // ];

  // const [acm, setAcm] = useState(true);

  // const showM = function () {
  //   setAcm((e) => !e);
  // };

  const deleteFunc = function (e) {
    props.deletHandler(e);
  };

  return (
    <div className="main-container">
      <span>
        <Routins getData={resived} delete={deleteFunc} />
      </span>
    </div>
  );
}

export default Main;
