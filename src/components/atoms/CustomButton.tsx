import React, { Fragment } from "react";
import { ImSpinner9 } from "react-icons/im";

import Icon from "@atoms/Icons";

interface ButtonProps {
  handleClick: Function;
  customClass?: string;
  background: string;
  hover: string;
  type?: "button" | "submit" | "reset" | undefined;
  isDisabled?: boolean;
  title?: string;
  isSubmitting?: boolean;
  value?: string;
  icon?: string;
  iconClass?: string;
}

/**
 * Renders the actual content of the Button
 * @param {any} title title or text of the button
 * @param {boolean} isSubmitting Loading state
 * @return {React.Component} Button component
 */
const renderContent = (title: any, isSubmitting: any) => <Fragment>{isSubmitting ? <ImSpinner9 /> : <Fragment>{title}</Fragment>}</Fragment>;

const CustomButton = ({ handleClick, isDisabled, customClass, hover, type, title, background, isSubmitting, value, icon, iconClass }: ButtonProps) => {
  /**
   * This displays the rendered content
   */
  const content = (
    <Fragment>
      {icon ? <Icon name={icon} /> : ""}
      {iconClass ? <i className={iconClass} /> : ""}
      {renderContent(title, isSubmitting)}
    </Fragment>
  );

  return isDisabled ? (
    <button
      className={`disabled:opacity-40 pointer-events-none text-white bg-${background} flex justify-center items-center px-8 py-4 capitalize cursor-pointer ${customClass}`}
      type={type}
      value={value}
    >
      {content}
    </button>
  ) : (
    <button
      className={`text-white bg-${background} hover:bg-${hover} flex justify-center items-center px-8 py-4  cursor-pointer ${customClass}`}
      onClick={() => handleClick()}
      type={type}
      value={value}
    >
      {content}
    </button>
  );
};

export default CustomButton;

CustomButton.defaultProps = {
  customClass: "",
  type: "button",
  isDisabled: false,
  title: "",
  isSubmitting: false,
  icon: "",
  iconClass: "",
  value: "",
};
