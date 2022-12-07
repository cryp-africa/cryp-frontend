import Image from "next/image";
import React from "react";

import CustomButton from "@components/atoms/CustomButton/CustomButton";

const GetComfortable = ({ staticFiles }: any) => {
  const url = process.env.NEXT_PUBLIC_GATEWAY_URL ? process.env.NEXT_PUBLIC_GATEWAY_URL : "https://app.cryp.africa";

  return (
    <div className="flex flex-col smallLaptop:flex-row pl-4 pr-[1.25rem] tablet:space-x-[11.5rem] smallLaptop:px-[3.125rem] pb-[7.25rem] justify-between tablet:items-center">
      <div>
        <h2 className="text-20 tablet:text-37 bigLaptop:text-47 font-medium bigLaptop:w-[70%]">Get Comfortable and Trade Easily Both On The Web and USSD</h2>
        <p className="text-14 my-[2.313rem] tablet:w-[30.75rem] font-medium opacity-70">
          Selvage post-ironic you probably haven&apos;t heard of them ut hoodie knausgaard. Normcore pitchfork subway tile glossier praxis, tempor hot chicken single-origin coffee
          occupy sint try-hard XOXO. Hot chicken health goth jianbing, glossier
        </p>
        <CustomButton customClass="" handleClick={() => window.open(`${url}/auth/sign-up`, "_blank")} isGhost={true} title="Learn More" />
      </div>
      <div className="hidden smallLaptop:block">
        <Image height={766} src={staticFiles.comfyImage} width={464} />
      </div>
      <div className="hidden tablet:block smallLaptop:hidden">
        <Image height={466} src={staticFiles.comfyImage} width={464} />
      </div>
      <div className="block tablet:hidden">
        <Image height={308} src={staticFiles.comfyImage} width={343} />
      </div>
    </div>
  );
};

export default GetComfortable;
