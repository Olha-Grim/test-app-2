import React from "react";
import { Descriptions as AntdDescriptions } from "antd";
/**
 *
 * @param {boolean} bordered
 * @param {boolean} colon
 * @param {number} column
 * @param {CSSProperties} contentStyle
 * @param {ReactNode} extra
 * @param {CSSProperties} labelStyle
 * @param {horizontal | vertical	} layout
 * @param {default | middle | small	} size
 * @param {ReactNode} title
 * @param children
 * @return {JSX.Element}
 * @constructor
 */
const Descriptions = ({
  bordered,
  colon,
  children,
  column,
  contentStyle,
  extra,
  labelStyle,
  layout,
  size,
  title,
}) => {
  const props = {
    bordered,
    colon,
    children,
    column,
    contentStyle,
    extra,
    labelStyle,
    layout,
    size,
    title,
  };

  return <AntdDescriptions {...props}>{children}</AntdDescriptions>;
};
export default Descriptions;
