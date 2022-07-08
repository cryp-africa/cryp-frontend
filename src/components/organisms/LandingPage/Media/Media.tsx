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
      <div className="flex hide-scrollbar scroll-smooth flex-nowrap bigLaptop:grid grid-cols-6 gap-3 rounded-md smallLaptop:my-24 overflow-x-scroll  align-center bigLaptop:justify-center">
        {MediaData.map((media) => (
          <div className="mx-4 relative mb-8 shrink-0 grow-0 basis-auto" key={media.id}>
            <Icon className="mx-auto" name={media.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Media;
