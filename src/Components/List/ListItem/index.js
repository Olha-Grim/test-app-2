import React from "react";
import { List as AntdList } from "antd";
/**
 *
 * @param {Array<ReactNode>	} actions
 * @param {ReactNode} extra
 * @param children
 * @return {JSX.Element}
 * @constructor
 */
const ListItem = ({ children, actions, extra }) => {
  const props = { children, actions, extra };

  return <AntdList.Item {...props}>{children}</AntdList.Item>;
};
export default ListItem;
