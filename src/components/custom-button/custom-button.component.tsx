import "./custom-button.styles.scss";
import React from "react";

type Props = {
  onClick: any;
  isDisabled?: boolean;
  children: React.ReactNode;
};

const CustomButton: React.FC<Props> = ({
  children,
  isDisabled,
  ...otherProps
}: Props) => (
  <button className="custom-button" disabled={isDisabled} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
