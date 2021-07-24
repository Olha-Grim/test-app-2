import React from "react";
import { Descriptions as AntdDescriptions } from "antd";
/**
 *
 * @param { CSSProperties} contentStyle
 * @param {ReactNode} label
 * @param {CSSProperties} labelStyle
 * @param {number} span
 * @param children
 * @return {JSX.Element}
 * @constructor
 */
const DescriptionsItem = ({
  contentStyle,
  label,
  labelStyle,
  span,
  children,
}) => {
  const props = { contentStyle, label, labelStyle, span, children };

  return <AntdDescriptions.Item {...props}>{children}</AntdDescriptions.Item>;
};
export default DescriptionsItem;
