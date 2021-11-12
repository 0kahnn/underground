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

    document.documentElement.style.setProperty("--cursorX", x + "px");
    document.documentElement.style.setProperty("--cursorY", y + "px");
  }

  useEffect(() => {
    window.addEventListener("mousemove", update);
    window.addEventListener("touchmove", update);
  }, []);

  const handleMove = (e) => {
    let x = e.x * 2;
    let y = -e.y * 2;
    console.log("move", x, y);
    document.documentElement.style.setProperty("--cursorX", x + "vw");
    document.documentElement.style.setProperty("--cursorY", y + "vh");
  };
  const handleStart = (e) => {
    console.log("start", e);
  };

  const handleStop = (e) => {
    document.documentElement.style.setProperty("--cursorX", "50vw");
    document.documentElement.style.setProperty("--cursorY", "50vh");
  };

  return (
    // <div className="row w-100 m-0 d-none d-md-flex">
    <div className="row w-100 m-0 d-md-flex">
      <div className="bg">
        {/* <img src="/assets/images/torch.png" id="torch" /> */}
        <div className="joystick">
          <Joystick
            throttle="10"
            size={70}
            baseColor="red"
            stickColor="#64649f"
            move={handleMove}
            start={handleStart}
            stop={handleStop}
            className="controller"
          ></Joystick>
        </div>
      </div>
    </div>
  );
};
export default PcLayout;
