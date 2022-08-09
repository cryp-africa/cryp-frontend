import Image from "next/image";
import React, { useState } from "react";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import CustomModal from "@components/atoms/CustomModal/CustomModal";
import JoinWaitList from "@components/organisms/modals/JoinWaitList/JoinWaitList";
import ThankYou from "@components/organisms/modals/ThankYou/ThankYou";

import { ButtonProperties } from "@shared/libs/helpers";

import CrypLocator from "@images/crypLocator.png";

const Building = () => {
  const [joinWaitList, setJoinWaitList] = useState<boolean>(false);
  const [thankYou, setThankYou] = useState<boolean>(true);
  return (
    <>
      <div className="pt-32 bigLaptop:pt-48 pb-16 smallLaptop:pb-36 px-10 bigLaptop:px-4">
        <div className="">
          <p className="text-[1.255rem] leading-[1.763rem] font-semibold whitespace-nowrap bigLaptop:whitespace-normal tablet:leading-[4rem] smallLaptop:leading-[5rem] desktop:leading-[6.375rem] tablet:text-[2.5rem] smallLaptop:text-[2.813rem] desktop:text-[4rem]  tablet:font-medium">
            Building the operating system for
          </p>
          <p className="text-[1.255rem] leading-[1.763rem] font-bold tablet:leading-[4rem] tablet:whitespace-nowrap bigLaptop:whitespace-normal  smallLaptop:leading-[5rem] desktop:leading-[6.375rem] tablet:text-[2.5rem] smallLaptop:text-[2.813rem] desktop:text-[4rem] tablet:font-medium">
            <span className="text-crypGreen-500 font-extrabold">African Businesses</span> on the blockchain
          </p>
          <p className="text-14 tablet:text-16 smallLaptop:text-18 text-white opacity-60 smallLaptop:opacity-70 font-medium w-full tablet:w-[55%] mt-8 smallLaptop:mt-12">
            We help you seamlessly process business payments/collections and give you access to markets beyond your borders.
          </p>
          <CustomButton
            customClass="w-[10.25rem] h-[3.75] bigLaptop:h-[5rem] bigLaptop:w-[12rem] mt-12"
            handleClick={() => setJoinWaitList(true)}
            size={ButtonProperties.SIZES.small}
            title="JOIN WAITLIST"
            variant={ButtonProperties.VARIANT.primary.name}
          />
        </div>
        <div className="absolute top-40 right-0">
          <div className="">
            <Image height={409} src={CrypLocator} width={1051} />
          </div>
        </div>
      </div>
      <CustomModal toggleVisibility={setJoinWaitList} visibility={joinWaitList}>
        <JoinWaitList setJoinWaitList={setJoinWaitList} setThankYou={setThankYou} />
      </CustomModal>
      <CustomModal toggleVisibility={setThankYou} visibility={thankYou}>
        <ThankYou setThankYou={setThankYou} />
      </CustomModal>
    </>
  );
};

export default Building;
