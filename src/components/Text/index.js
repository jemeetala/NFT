import React from "react";
const variantClasses = {
  h1: "font-semibold sm:text-[30px] md:text-[32px] text-[34px]",
  h2: "text-[18px]",
  h3: "font-semibold text-[16px]",
  h4: "text-[14px]",
  h5: "font-medium text-[12px]",
  h6: "font-normal text-[10px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
