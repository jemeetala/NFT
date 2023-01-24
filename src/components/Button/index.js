import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder14: "rounded-radius14",
  RoundedBorder10: "rounded-radius10",
  CircleBorder18: "rounded-radius18",
  icbCircleBorder15: "rounded-radius15",
  icbCircleBorder25: "rounded-radius25",
  icbCircleBorder18: "rounded-radius18",
  icbRoundedBorder8: "rounded-radius8",
  icbCircleBorder21: "rounded-radius21",
};
const variants = {
  Outline: "bg-gray_900_26 text-white_A700",
  FillWhiteA700: "bg-white_A700 text-gray_902",
  OutlineGray100: "outline outline-[0.75px] outline-gray_100 text-black_900",
  FillGray902: "bg-gray_902 text-white_A700",
  FillBlack900: "bg-black_900",
  FillGray100: "bg-gray_100",
  FillGreen600: "bg-green_600",
  FillGray50: "bg-gray_50",
  OutlineGray902: "outline outline-[0.5px] outline-gray_902",
  OutlineWhiteA700: "outline outline-[0.75px] outline-white_A700",
  Outline1_2: "bg-gray_902",
  icbOutline: "bg-gray_900_26",
  icbOutlineGray5003f: "bg-white_A700 shadow-bs",
  icbFillWhiteA700: "bg-white_A700",
  icbOutlineGray100: "outline outline-[0.75px] outline-gray_100",
  icbFillGray50: "bg-gray_50",
  icbFillGray90067: "bg-gray_900_67",
  icbFillGray100: "bg-gray_100",
};
const sizes = {
  sm: "p-[7px]",
  md: "p-[12px]",
  lg: "p-[15px]",
  xl: "p-[18px]",
  smIcn: "p-[7px]",
  mdIcn: "p-[10px]",
  lgIcn: "p-[16px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder14",
    "RoundedBorder10",
    "CircleBorder18",
    "icbCircleBorder15",
    "icbCircleBorder25",
    "icbCircleBorder18",
    "icbRoundedBorder8",
    "icbCircleBorder21",
  ]),
  variant: PropTypes.oneOf([
    "Outline",
    "FillWhiteA700",
    "OutlineGray100",
    "FillGray902",
    "FillBlack900",
    "FillGray100",
    "FillGreen600",
    "FillGray50",
    "OutlineGray902",
    "OutlineWhiteA700",
    "Outline1_2",
    "icbOutline",
    "icbOutlineGray5003f",
    "icbFillWhiteA700",
    "icbOutlineGray100",
    "icbFillGray50",
    "icbFillGray90067",
    "icbFillGray100",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "smIcn", "mdIcn", "lgIcn"]),
};
Button.defaultProps = { className: "", shape: "", variant: "", size: "" };

export { Button };
