import React from "react";

import Icon from "@components/atoms/Icons";
import { MediaData } from "@components/componentData/MediaData/MediaData";

const Media = () => {
  return (
    <div className="mt-28 px-20">
      <h3 className="font-semibold text-[47px] text-center">Media</h3>
      <div className="flex items-center justify-center">
        <p className="font-medium text-center text-18 w-[30%] mt-8">As mentioned in:</p>
      </div>
      <div className="grid grid-cols-6 gap-3 rounded-md my-24  align-center justify-center">
        {MediaData.map((media) => (
          <div className="mx-4 relative mb-8" key={media.id}>
            <Icon className="mx-auto" name={media.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Media;
