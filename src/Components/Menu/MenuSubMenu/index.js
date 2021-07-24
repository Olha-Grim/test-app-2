import React from "react";
import { Menu as AntdMenu } from "antd";

/**
 *
 * @param {boolean} disabled
 * @param {ReactNode} icon
 * @param {string} key
 * @param {string} popupClassName
 * @param {string} title
 * @param {[number, number]	} popupOffset
 * @param {function({ key, domEvent })	} onTitleClick
 * @param {Array<MenuItem | SubMenu>} children
 * @return {JSX.Element}
 * @constructor
 */

const SubMenu = ({
  disabled,
  icon,
  key,
  title,
  popupClassName,
  popupOffset,
  onTitleClick,
  children,
}) => {
  const props = {
    disabled,
    icon,
    key,
    title,
    popupClassName,
    popupOffset,
    onTitleClick,
    children,
  };

  return <AntdMenu.SubMenu {...props}>{children}</AntdMenu.SubMenu>;
};
export default SubMenu;