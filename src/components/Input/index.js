import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  srcOutlineGray300: "bg-white_A700 border border-gray_300 border-solid",
  srcFillGray50: "bg-gray_50",
  srcOutlineGray3001_2: "border border-gray_300 border-solid",
  OutlineGray400: "border border-gray_400 border-solid",
  FillGray50: "bg-gray_50",
  OutlineGray4001_2: "border border-gray_400 border-solid",
};
const shapes = {
  srcRoundedBorder15: "rounded-radius15",
  srcRoundedBorder8: "rounded-radius8",
  RoundedBorder8: "rounded-radius8",
  RoundedBorder15: "rounded-radius15",
};
const sizes = {
  smSrc: "px-[11px] py-[12px]",
  mdSrc: "pb-[17px] pt-[21px] px-[17px]",
  sm: "p-[18px]",
  md: "pb-[14px] pt-[19px] px-[14px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf([
    "srcRoundedBorder15",
    "srcRoundedBorder8",
    "RoundedBorder8",
    "RoundedBorder15",
  ]),
  variant: PropTypes.oneOf([
    "srcOutlineGray300",
    "srcFillGray50",
    "srcOutlineGray3001_2",
    "OutlineGray400",
    "FillGray50",
    "OutlineGray4001_2",
  ]),
  size: PropTypes.oneOf(["smSrc", "mdSrc", "sm", "md"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "",
  variant: "",
  size: "",
};

export { Input };
