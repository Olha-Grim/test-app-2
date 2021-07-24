import React from "react";
import { Menu as AntdMenu } from "antd";

/**
 *
 * @param {ReactNode} title
 * @param {MenuItem[]} children
 * @return {JSX.Element}
 * @constructor
 */

const MenuItemGroup = ({ title, children }) => {
  const props = {
    title,
    children,
  };

  return <AntdMenu.ItemGroup {...props}>{children}</AntdMenu.ItemGroup>;
};
export default MenuItemGroup;
