import React from "react";

import Icon from "@components/atoms/Icons";
import { MediaData } from "@components/componentData/MediaData/MediaData";

const Media = () => {
  return (
    <div className="smallLaptop:mt-28  smallLaptop:px-20">
      <h3 className="font-semibold text-20 smallLaptop:text-[2.938rem] text-center">Media</h3>
      <div className="flex items-center justify-center">
        <p className="font-medium text-center text-white opacity-70 text-18 bigLaptop:w-[30%] mt-8 whitespace-nowrap">As mentioned in:</p>
      </div>
      <div className="flex hide-scrollbar items-center scroll-smooth flex-nowrap rounded-md my-8 tablet:my-24 overflow-x-scroll justify-center">
        {MediaData.map((media) => (
          <div className="mx-4 tablet:mx-8 relative mb-8 shrink-0 grow-0 basis-auto" key={media.id}>
            <div className="block tablet:hidden">
              <Icon className="mx-auto h-[39.49px] w-[39.49px]" name={media.icon} />
            </div>
            <div className="hidden tablet:block">
              <Icon className="mx-auto" name={media.icon} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Media;
