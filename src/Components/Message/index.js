import React from "react";
import { message as AntdMessage } from "antd";
/**
 *
 * @param {string} className
 * @param {ReactNode} content
 * @param {number} duration
 * @param {ReactNode} icon
 * @param {string | number	} key
 * @param {CSSProperties} style
 * @param {function} onClick
 * @param {function} onClose
 * @return {JSX.Element}
 * @constructor
 */
const message = ({
  className,
  content,
  duration,
  icon,
  key,
  style,
  onClick,
  onClose,
}) => {
  const props = {
    className,
    content,
    duration,
    icon,
    key,
    style,
    onClick,
    onClose,
  };

  return <AntdMessage {...props} />;
};
export default message;
