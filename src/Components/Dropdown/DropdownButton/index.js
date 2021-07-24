import React from "react";
import { Dropdown as AntdDropdown } from "antd";

/**
 *
 * @param {(buttons: ReactNode[]) => ReactNode[]} buttonsRender
 * @param {boolean} disabled
 * @param {ReactNode} icon
 * @param {Menu} overlay
 * @param {string} placement
 * @param {string} size
 * @param {Array<click|hover|contextMenu>	} trigger
 * @param {string} type
 * @param {boolean} visible
 * @param {(event) => void} onClick
 * @param {(visible: boolean) => void	} onVisibleChange
 * @param children
 * @return {JSX.Element}
 * @constructor
 */

const DropdownButton = ({
  buttonsRender,
  disabled,
  icon,
  overlay,
  placement,
  size,
  trigger,
  type,
  visible,
  onClick,
  onVisibleChange,
  children,
}) => {
  const props = {
    buttonsRender,
    disabled,
    icon,
    overlay,
    placement,
    size,
    trigger,
    type,
    visible,
    onClick,
    onVisibleChange,
    children,
  };

  return <AntdDropdown.Button {...props}>{children}</AntdDropdown.Button>;
};
export default DropdownButton;
