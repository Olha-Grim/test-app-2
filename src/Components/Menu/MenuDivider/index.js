import React from "react";
import { Menu as AntdMenu } from "antd";

/**
 *
 * @param children
 * @return {JSX.Element}
 * @constructor
 */

const MenuDivider = ({ title, children }) => {
  const props = {
    title,
    children,
  };

  return <AntdMenu.Divider {...props}>{children}</AntdMenu.Divider>;
};
export default MenuDivider;
