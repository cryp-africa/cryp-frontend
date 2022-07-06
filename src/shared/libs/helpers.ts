/**
 * Compose a number of styles together easily
 * @param {String} styles Classes/styles to be applied
 * @return {String} Combined classes
 */
export const composeClasses = (...styles: string[]): string => {
  let classes = "";

  styles.forEach((arg) => {
    if (arg) classes += `${arg} `;
  });

  return classes.trim();
};

// CURRENCIES
export const CURRENCIES = {
  NAIRA: "₦",
};

/**
 * Slide Left method
 * This is used to slide an element to the left of its current position
 * @param {string} idOfElement
 * @param {number} distance
 */
export const slideLeft = (idOfElement: string, distance: number) => {
  const slider: any = document.getElementById(idOfElement);
  slider.scrollLeft = slider?.scrollLeft - distance;
};

/**
 * Slide Right method
 * This is used to slide an element to the right of its current position
 * @param {string} idOfElement
 * @param {number} distance
 */
export const slideRight = (idOfElement: string, distance: number) => {
  const slider: any = document.getElementById(idOfElement);
  slider.scrollLeft = slider?.scrollLeft + distance;
};

/**
 * Button properties for the custom button
 */
export const ButtonProperties = {
  SIZES: {
    small: "small",
    medium: "medium",
    big: "big",
  },
  ICON_POSITION: {
    start: "start",
    end: "end",
  },
  VARIANT: {
    primary: {
      name: "primary",
      background: "crypGreen-800",
      hover: "crypGreen-600",
      disabled: "citiGreen-200",
      focused: "citiGreen-800",
    },
    secondary: {
      name: "secondary",
      background: "citiBlue-400",
      hover: "citiBlue-600",
      disabled: "citiBlue-100",
      focused: "citiBlue-400",
    },
  },
};

export const CheckBoxProperties = {
  LABEL_POSITION: {
    start: "start",
    end: "end",
  },
  SHAPE: {
    square: "square",
    rounded: "rounded",
  },
  SIZES: {
    small: "small",
    big: "big",
  },
};

export const RadioButtonProperties = {
  LABEL_POSITION: {
    start: "start",
    end: "end",
  },
  SIZES: {
    small: "small",
    big: "big",
  },
};

/**
 * Truncate text with ellipses method
 * This is used to cut short the length of a text and attach ellipses to the
 * end of the text to signify that some part of the text is missing.
 * @param {string} text
 * @param {number} limit
 * @return {string} truncated text
 */
export const truncateText = (text: string, limit: number = 20): string => {
  return text.length > limit ? `${text.slice(0, limit)}...` : text;
};

/**
 * Separate classes with space between
 * This is used to separate a list of classes that are separated by commas to a list
 * classes that are separated by space
 * @param {string[]} classes
 * @return {string} classNames
 */
export const classNames = (...classes: string[]): string => {
  return classes.filter(Boolean).join(" ");
};

/**
 * Status for various responses
 */
export const Status = {
  FAILED: "failed",
  SUCCESS: "success",
};
