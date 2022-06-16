import CustomButton from "@components/atoms/CustomButton";
import React from "react";
import { useRouter } from "next/router";

const Building = () => {
  const router = useRouter();
  return (
    <div className="mt-16">
      <h3 className="text-[30px] tablet:text-[50px] smallLaptop:text-64 tablet:w-3/4 tablet:font-medium">
        Building the operating system for <span className="text-crypGreen-500">African Businesses</span> on the blockchain
      </h3>
      <CustomButton
        background="transparent"
        customClass="mt-8 border border-crypGreen-500 rounded-md capitalize px-8 py-4"
        handleClick={() => router.push("#")}
        hover="crypGreen-500"
        title="Sign me up"
      />
    </div>
  );
};

export default Building;
