import React from "react";
import { notification as AntdNotification } from "antd";
/**
 *
 * @param {number} bottom
 * @param {ReactNode} btn
 * @param {string} className
 * @param {ReactNode} closeIcon
 * @param {ReactNode} description
 * @param {number} duration
 * @param {() => HTMLNode	} getContainer
 * @param {ReactNode} icon
 * @param {string} key
 * @param {ReactNode} message
 * @param {string} placement
 * @param {	CSSProperties} style
 * @param {number} top
 * @param {function} onClick
 * @param {function} onClose
 * @return {JSX.Element}
 * @constructor
 */

const Notification = ({
  bottom,
  btn,
  className,
  closeIcon,
  description,
  duration,
  getContainer,
  icon,
  key,
  message,
  placement,
  style,
  top,
  onClick,
  onClose,
}) => {
  const props = {
    bottom,
    btn,
    className,
    closeIcon,
    description,
    duration,
    getContainer,
    icon,
    key,
    message,
    placement,
    style,
    top,
    onClick,
    onClose,
  };

  return <AntdNotification {...props} />;
};
export default Notification;
