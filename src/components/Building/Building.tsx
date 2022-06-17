import React from "react";
import Icon from "@components/atoms/Icons";
import { Link } from "react-scroll";

const Building = ({ focusOnSubscribe }: any) => {
  return (
    <div className="mt-16 absolute top-[20%]">
      <h3 className="text-[30px] leading-[2.7rem] tablet:leading-[4rem] smallLaptop:leading-[5rem] desktop:leading-[6.375rem] tablet:text-[40px] smallLaptop:text-[45px] desktop:text-[4rem] tablet:w-full  tablet:font-medium">
        Building the operating system for <span className="text-crypGreen-500 font-extrabold">African Businesses</span> on the blockchain
      </h3>
      <div className="hidden tablet:block">
        <Link onSetInactive={focusOnSubscribe} smooth={true} spy={true} to="subscribe">
          <Icon className="mt-24 cursor-pointer hover:fill-crypGreen-500" name="desktopButtonContainer" text="Sign me up!" />
        </Link>
      </div>
      <div className="block tablet:hidden">
        <Link onSetInactive={focusOnSubscribe} smooth={true} spy={true} to="subscribe">
          <Icon className="mt-24 cursor-pointer hover:fill-crypGreen-500" name="mobileButtonContainer" text="Sign me up!" />
        </Link>
      </div>
    </div>
  );
};

export default Building;
