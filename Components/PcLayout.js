import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { Carousel } from "react-bootstrap";
import SliderCrossFade from "./SliderCrossFade";
import { Joystick } from "react-joystick-component";

const PcLayout = (props) => {
  function update(e) {
    // let x = e.clientX || e.touches[0].clientX;
    let x = e.clientX;
    let y = e.clientY;
    // let y = e.clientY || e.touches[0].clientY;
    // console.log(x, y);

    // document.documentElement.style.setProperty("--cursorX", x + "px");
    // document.documentElement.style.setProperty("--cursorY", y + "px");
  }

  useEffect(() => {
    window.addEventListener("mousemove", update);
    window.addEventListener("touchmove", update);
  }, []);

  const handleMove = (e) => {
    console.log("move", e);

    let x = e.x * 15;
    let y = -e.y * 25;
    if (e.type == "move") {
      console.log("still movinggggggggggg");
    }

    document.documentElement.style.setProperty("--cursorX", x + "px");
    document.documentElement.style.setProperty("--cursorY", y + "px");
  };
  const handleStart = (e) => {
    console.log("start", e);
  };

  const handleStop = (e) => {
    console.log("stop", e);
  };

  return (
    // <div className="row w-100 m-0 d-none d-md-flex">
    <div className="row w-100 m-0 d-md-flex">
      <div className="bg">
        {/* <img src="/assets/images/torch.png" id="torch" /> */}
        <Joystick
          throttle="80"
          size={70}
          baseColor="red"
          stickColor="#64649f"
          move={handleMove}
          start={handleStart}
          start={handleStop}
          className="controller"
          style={{ position: "relative" }}
        ></Joystick>
      </div>
    </div>
  );
};
export default PcLayout;
