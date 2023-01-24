import { Input } from "components";
export default {
  title: "nft/Input",
  component: Input,
};

export const SampleInput = (args) => <Input {...args} />;
SampleInput.args = {
  type: "text",
  shape: "srcRoundedBorder15",
  variant: "srcOutlineGray300",
  size: "mdSrc",
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};
