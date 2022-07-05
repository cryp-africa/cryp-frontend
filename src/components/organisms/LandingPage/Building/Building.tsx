import React from "react";

import CustomButton from "@components/atoms/CustomButton";

import { ButtonProperties } from "@shared/libs/helpers";

const Building = () => {
  return (
    <div className="mt-16 tablet:mt-32 px-10 tablet:px-0">
      <p className="text-[30px] leading-[2.7rem] tablet:whitespace-normal tablet:leading-[4rem] smallLaptop:leading-[5rem] desktop:leading-[6.375rem] tablet:text-[40px] smallLaptop:text-[45px] desktop:text-[4rem]  tablet:font-medium">
        Building the operating system for
      </p>
      <p className="text-[30px] leading-[2.7rem]  tablet:leading-[4rem] smallLaptop:leading-[5rem] desktop:leading-[6.375rem] tablet:text-[40px] smallLaptop:text-[45px] desktop:text-[4rem] tablet:font-medium">
        <span className="text-crypGreen-500 font-extrabold">African Businesses</span> on the blockchain
      </p>
      <p className="text-18 font-medium w-full tablet:w-[55%] mt-12">
        Individual or Merchant, empower your business today with Cryp. We help you make sense of your everyday web payments
      </p>
      <CustomButton customClass="w-[70%] mt-12" handleClick={() => {}} size={ButtonProperties.SIZES.small} title="JOIN WAITLIST" variant={ButtonProperties.VARIANT.primary.name} />
    </div>
  );
};

export default Building;
