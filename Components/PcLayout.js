import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { Carousel } from "react-bootstrap";
import SliderCrossFade from "./SliderCrossFade";
const PcLayout = (props) => {
  function update(e) {
    var x = e.clientX || e.touches[0].clientX;
    var y = e.clientY || e.touches[0].clientY;

    document.documentElement.style.setProperty("--cursorX", x + "px");
    document.documentElement.style.setProperty("--cursorY", y + "px");
  }

  useEffect(() => {
    window.addEventListener("mousemove", update);
    window.addEventListener("touchmove", update);
  }, []);
  return (
    // <div className="row w-100 m-0 d-none d-md-flex">
    <div className="row w-100 m-0 d-md-flex">
      <div className="bg"></div>
    </div>
  );
};
export default PcLayout;
