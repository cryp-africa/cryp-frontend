import CustomButton from "@components/atoms/CustomButton";
import React from "react";
import { useRouter } from "next/router";

const Building = () => {
  const router = useRouter();
  return (
    <div className="px-48 mt-16">
      <h3 className="text-64 w-3/4 font-medium">
        Building the operating system for <span className="text-crypGreen-500">African Businesses</span> on the blockchain
      </h3>
      <CustomButton
        background="transparent"
        customClass="mt-8 border border-crypGreen-500 rounded-md"
        handleClick={() => router.push("#")}
        hover="crypGreen-500"
        title="Sign me up"
      />
    </div>
  );
};

export default Building;
