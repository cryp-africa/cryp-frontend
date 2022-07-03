import React from "react";

import CustomLink from "@components/atoms/CustomLink";
import Icon from "@components/atoms/Icons";
import { DesktopNav } from "@components/componentData/Navigation/DesktopNav";

const DesktopNavigation = () => {
  return (
    <div className="px-16 w-full py-16 bigLaptop:px-20 flex justify-between items-center">
      <div className="flex justify-between w-[45%]">
        <CustomLink destination="/">
          <Icon name="logo" />
        </CustomLink>
        <ul className="flex items-center justify-between">
          {DesktopNav.map((data) => (
            <>
              <li className="mx-8 flex items-center " key={data.id}>
                <CustomLink customClass="capitalize text-16 font-semibold" destination={data.route}>
                  {data.name}
                </CustomLink>
                {data.hasOptions && <Icon className="ml-4 cursor-pointer" name="dropDown" />}
              </li>
            </>
          ))}
        </ul>
      </div>
      <div>
        <CustomLink customClass="uppercase text-16 font-bold text-crypYellow-200" destination="#">
          join waitlist
        </CustomLink>
      </div>
    </div>
  );
};

export default DesktopNavigation;
