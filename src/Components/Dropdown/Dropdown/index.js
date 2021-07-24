import React from "react";
import { Dropdown as AntdDropdown } from "antd";

/**
 *
 * @param {boolean} arrow
 * @param {boolean} disabled
 * @param {(triggerNode: HTMLElement) => HTMLElement} getPopupContainer
 * @param {Menu | () => Menu} overlay
 * @param {string} overlayClassName
 * @param {CSSProperties} overlayStyle
 * @param {string} placement
 * @param {Array<click|hover|contextMenu>} trigger
 * @param {boolean} visible
 * @param {(visible: boolean) => void} onVisibleChange
 * @param children
 * @return {JSX.Element}
 * @constructor
 */

const Dropdown = ({
  arrow,
  disabled,
  getPopupContainer,
  overlay,
  overlayClassName,
  overlayStyle,
  placement,
  trigger,
  visible,
  onVisibleChange,
  children,
}) => {
  const props = {
    arrow,
    disabled,
    getPopupContainer,
    overlay,
    overlayClassName,
    overlayStyle,
    placement,
    trigger,
    visible,
    onVisibleChange,
    children,
  };

  return <AntdDropdown {...props}>{children}</AntdDropdown>;
};
export default Dropdown;
