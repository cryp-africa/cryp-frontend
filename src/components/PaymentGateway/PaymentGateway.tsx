import CustomButton from "@components/atoms/CustomButton";
import Icon from "@components/atoms/Icons";
import React from "react";

const PaymentGateway = () => {
  return (
    <div className="bg-black top-[100vh] -ml-[50vw] left-[50%]  absolute w-screen px-48 py-32 bg-gradient bg-center bg-no-repeat bg-cover">
      <h3 className="font-medium text-[60px] mt-24">Cryp Payment Gateway</h3>
      <div className="flex mt-8 items-center ml-16">
        <Icon name="horizontalDivider" />
        <p className="capitalize text-[30px] ml-8">coming soon</p>
      </div>
      <p className="capitalize text-[60px] mt-8 mb-4">get notified</p>
      <p className="capitalize text-[60px]">when we launch</p>
      <div className="flex bg-white rounded-full w-2/5 justify-between items-center mt-8 p-3">
        <input className="ml-8 text-black w-1/2 placeholder:text-gray-500 placeholder:text-14 focus:outline-none" placeholder="Enter your email address here..." type="text" />
        <CustomButton background="crypGreen-800" customClass="uppercase rounded-full mr-4" handleClick={() => {}} hover="crypGreen-500" title="notify me" />
      </div>
      <p className="capitalize text-16 text-gray-500 mt-8">*Don’t worry, we won’t spam you</p>
    </div>
  );
};

export default PaymentGateway;
