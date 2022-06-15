import Icon from "@components/atoms/Icons";
import React from "react";

const ScrollDown = () => {
  return (
    <div className="absolute top-[80vh] left-[40vw] tablet:left-[45vw] flex flex-col items-center">
      <div className="cursor-pointer">
        <Icon name="scrollDown" />
      </div>
      <p className="text-crypGreen-500 mt-4">Scroll Down</p>
    </div>
  );
};

export default ScrollDown;
