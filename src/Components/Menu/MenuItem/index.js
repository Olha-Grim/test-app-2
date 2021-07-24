import React from "react";
import { Menu as AntdMenu } from "antd";

/**
 *
 * @param {boolean} danger
 * @param {boolean} disabled
 * @param {ReactNode} icon
 * @param {string} key
 * @param {string} title
 * @param children
 * @return {JSX.Element}
 * @constructor
 */

const MenuItem = ({ danger, disabled, icon, key, title, children }) => {
  const props = {
    danger,
    disabled,
    icon,
    key,
    title,
    children,
  };

  return <AntdMenu.Item {...props}>{children}</AntdMenu.Item>;
};
export default MenuItem;
