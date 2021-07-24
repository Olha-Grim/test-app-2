import React from "react";
import { Empty as AntdEmpty } from "antd";
/**
 *
 * @param {ReactNode}  description
 * @param {ReactNode}  image
 * @param {CSSProperties}  imageStyle
 * @param children
 * @return {JSX.Element}
 * @constructor
 */
const Empty = ({ description, image, imageStyle, children }) => {
  const props = {
    description,
    image,
    imageStyle,
    children,
  };

  return <AntdEmpty {...props}>{children}</AntdEmpty>;
};
export default Empty;
