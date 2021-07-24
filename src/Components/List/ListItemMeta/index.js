import React from "react";
import { List as AntdList } from "antd";
/**
 *
 * @param {ReactNode} avatar
 * @param {ReactNode} description
 * @param {ReactNode} title
 * @param children
 * @return {JSX.Element}
 * @constructor
 */
const ListItemMeta = ({ avatar, description, title, children }) => {
  const props = { avatar, description, title, children };

  return <AntdList.Item.Meta {...props}>{children}</AntdList.Item.Meta>;
};
export default ListItemMeta;
