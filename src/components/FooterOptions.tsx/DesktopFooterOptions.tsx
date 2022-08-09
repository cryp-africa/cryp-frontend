import React from "react";

import CustomLink from "@components/atoms/CustomLink/CustomLink";

import IDesktopFooterOption from "@dto/Footer/IDesktopFooterOption";

import Icon from "@atoms/Icons/index";

interface FooterOptionsProps {
  options: Array<IDesktopFooterOption>;
  title: string;
  hasIcons?: boolean;
}
const FooterOptions = ({ options, title, hasIcons }: FooterOptionsProps) => {
  return (
    <div className="mt-8 text-white opacity-95">
      <h4 className="font-semibold text-18 mb-8">{title}</h4>
      {hasIcons ? (
        <ul className="flex items-center mb-8">
          {options &&
            options.map((data) => (
              <li className="mr-4 my-4 font-normal text-sm" key={data.id}>
                <CustomLink destination={data.route}>
                  <Icon name={data.name} />
                </CustomLink>
              </li>
            ))}
        </ul>
      ) : (
        <ul>
          {options &&
            options.map((data) => (
              <li key={data.id}>
                <CustomLink customClass="text-14 font-medium my-4" destination={data.route}>
                  {data.name}
                </CustomLink>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default FooterOptions;

FooterOptions.defaultProps = {
  hasIcons: false,
};
