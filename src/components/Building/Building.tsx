// import CustomButton from "@components/atoms/CustomButton";
import React from "react";
// import { useRouter } from "next/router";
import Icon from "@components/atoms/Icons";

const Building = () => {
  // const router = useRouter();
  return (
    <div className="mt-16">
      <h3 className="text-[30px] tablet:text-[50px] smallLaptop:text-64 tablet:w-3/4 tablet:font-medium">
        Building the operating system for <span className="text-crypGreen-500">African Businesses</span> on the blockchain
      </h3>
      {/* <CustomButton
        background="transparent"
        customClass="mt-8 border border-crypGreen-500 rounded-md capitalize px-8 py-4"
        handleClick={() => router.push("#")}
        hover="crypGreen-500"
        title="Sign me up"
      /> */}
      <div className="hidden tablet:block">
        <Icon className="mt-8 cursor-pointer hover:fill-crypGreen-500" name="desktopButtonContainer" text="Sign me up" />
      </div>
      <div className="block tablet:hidden">
        <Icon className="mt-8 cursor-pointer hover:fill-crypGreen-500" name="mobileButtonContainer" text="Sign me up" />
      </div>
    </div>
  );
};

export default Building;
