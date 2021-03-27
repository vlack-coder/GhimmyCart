import "./custom-icon.styles.scss";
import React from "react";

type CustomIconProps = {
  count?: number;
  children?: React.ReactNode;
  onClick?: (event?: any) => void;
};

const CustomIcon: React.FC<CustomIconProps> = ({
  count,
  children,
  ...otherProps
}: CustomIconProps) => (
  <div className="custom-icon" role={"button"} {...otherProps}>
    {children}
    {count === 0 || count ? (
      <div className="custom-icon__count">{count}</div>
    ) : null}
  </div>
);

export default CustomIcon;
