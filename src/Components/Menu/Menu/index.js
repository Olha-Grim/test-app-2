import React from "react";
import { Menu as AntdMenu } from "antd";

/**
 *
 * @param {string[]	} defaultOpenKeys
 * @param {string[]} defaultSelectedKeys
 * @param {ReactNode | (props: SubMenuProps & { isSubMenu: boolean }) => ReactNode	} expandIcon
 * @param {boolean} forceSubMenuRender
 * @param {boolean} inlineCollapsed
 * @param {number} inlineIndent
 * @param {vertical | horizontal | inline} mode
 * @param {boolean} multiple
 * @param {string[]	} openKeys
 * @param {ReactNode} overflowedIndicator
 * @param {boolean} selectable
 * @param {string[]	} selectedKeys
 * @param {CSSProperties}  style
 * @param {number} subMenuCloseDelay
 * @param {number} subMenuOpenDelay
 * @param {light | dark} theme
 * @param {hover | click} triggerSubMenuAction
 * @param {function({ item, key, keyPath, domEvent })} onClick
 * @param {function({ item, key, keyPath, selectedKeys, domEvent })	} onDeselect
 * @param {function(openKeys: string[])	} onOpenChange
 * @param {function({ item, key, keyPath, selectedKeys, domEvent })	} onSelect
 * @param children
 * @return {JSX.Element}
 * @constructor
 */

const Menu = ({
  defaultOpenKeys,
  defaultSelectedKeys,
  expandIcon,
  forceSubMenuRender,
  inlineCollapsed,
  inlineIndent,
  mode,
  multiple,
  openKeys,
  overflowedIndicator,
  selectable,
  selectedKeys,
  style,
  subMenuCloseDelay,
  subMenuOpenDelay,
  theme,
  triggerSubMenuAction,
  onClick,
  onDeselect,
  onOpenChange,
  onSelect,
  children,
}) => {
  const props = {
    defaultOpenKeys,
    defaultSelectedKeys,
    expandIcon,
    forceSubMenuRender,
    inlineCollapsed,
    inlineIndent,
    mode,
    multiple,
    openKeys,
    overflowedIndicator,
    selectable,
    selectedKeys,
    style,
    subMenuCloseDelay,
    subMenuOpenDelay,
    theme,
    triggerSubMenuAction,
    onClick,
    onDeselect,
    onOpenChange,
    onSelect,
    children,
  };

  return <AntdMenu {...props}>{children}</AntdMenu>;
};
export default Menu;
