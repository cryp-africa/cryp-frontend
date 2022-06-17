import CustomButton from "@components/atoms/CustomButton";
import Icon from "@components/atoms/Icons";
import React from "react";

const PaymentGateway = () => {
  return (
    <div className="bg-black top-[100vh] -ml-[50vw] left-[50%]  absolute w-screen px-8 py-16 smallLaptop:px-48 smallLaptop:py-32 smallLaptop:bg-gradient bg-center bg-no-repeat">
      <h3 className="font-medium text-[30px] tablet:text-[40px] desktop:text-[60px] desktop:mt-24">Cryp Payment Gateway</h3>
      <div className="flex mt-8 items-center desktop:ml-36">
        <Icon name="horizontalDividerMobile" />
        <p className="capitalize tablet:text-[20px] desktop:text-[30px] ml-4 desktop:ml-8">coming soon</p>
      </div>
      <p className="capitalize text-gray-500 smallLaptop:text-white text-[30px] tablet:text-[40px] desktop:text-[60px] mt-32 smallLaptop:mt-24">get notified</p>
      <p className="capitalize text-gray-500 smallLaptop:text-white text-[30px] tablet:text-[40px] desktop:text-[60px]">when we launch</p>
      <div className="flex  bg-black smallLaptop:bg-white border border-gray-500 rounded-full smallLaptop:w-4/6 desktop:w-3/6 justify-between items-center mt-8 p-3">
        <input
          className="smallLaptop:ml-8 text-white w-full placeholder:text-gray-500 placeholder:text-12 smallLaptop:placeholder:text-14 focus:outline-none bg-black smallLaptop:bg-white smallLaptop:text-black"
          placeholder="Enter your email address..."
          type="text"
        />
        <CustomButton
          background="crypGreen-800"
          customClass="uppercase rounded-full desktop:mr-2 px-4 py-3 whitespace-nowrap smallLaptop:px-8 smallLaptop:py-4"
          handleClick={() => {}}
          hover="crypGreen-500"
          title="notify me"
        />
      </div>
      <p className="text-16 text-gray-500 mt-8">*Don’t worry, we won’t spam you</p>
    </div>
  );
};

export default PaymentGateway;
