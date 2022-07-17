import Link from "next/link";
import React, { useState } from "react";

import Icon from "@components/atoms/Icons";

interface IMobileFooterOptions {
  options?: Array<IMobileFooterOption>;
  title: string;
  hasIcons?: boolean;
  activeIndex: number;
  setActiveIndex: Function;
  identifier: number;
  logo?: any;
}

interface IMobileFooterOption {
  id: number;
  icon?: any;
  name: string;
  route: string;
  hasIcons?: boolean;
}

const MobileFooterOptions = ({ options, logo, title, hasIcons, setActiveIndex, activeIndex, identifier }: IMobileFooterOptions) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const handleOpen = () => {
    setActiveIndex(identifier);
    setIsActive(true);
  };
  const handleClose = () => {
    setActiveIndex(0);
    setIsActive(false);
  };

  const handleClick = () => {
    if (!isClicked) {
      handleOpen();
      setIsClicked(!isClicked);
    } else {
      handleClose();
      setIsClicked(!isClicked);
    }
  };
  return (
    <div className="mb-4 mt-3">
      <div className="flex justify-between items-center" onClick={handleClick}>
        <h4 className="font-bold mb-3 text-base tablet:text-xl">{title}</h4>
        <div className="flex items-center">
          <Icon className="mr-4" name={logo} />
          {isActive && activeIndex === identifier ? <Icon className="cursor-pointer" name="dropDown" /> : <Icon className="cursor-pointer" name="dropDown" />}
        </div>
      </div>

      {hasIcons && activeIndex === identifier && isActive ? (
        <ul className="text-xs flex justify-between items-center w-1/3 laptop:w-2/4">
          {options &&
            options.map((data) => (
              <li key={data.id}>
                <Link href={data.route}>
                  <a className="text-2xl" href={data.route}>
                    {<data.icon />}
                  </a>
                </Link>
              </li>
            ))}
        </ul>
      ) : activeIndex === identifier && isActive ? (
        <ul className="text-xs">
          {options &&
            options.map((data) => (
              <li className="mb-8 mt-4 flex justify-between" key={data.id}>
                <Link href={data.route}>
                  <a href={data.route}>{data.name}</a>
                </Link>
              </li>
            ))}
        </ul>
      ) : null}
    </div>
  );
};

export default MobileFooterOptions;

MobileFooterOptions.defaultProps = {
  hasIcons: false,
  options: null,
  logo: "",
};
