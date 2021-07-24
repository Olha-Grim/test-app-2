import React from "react";
import { List as AntdList } from "antd";

/**
 *
 * @param {boolean} bordered
 * @param {any[]} dataSource
 * @param {ReactNode} footer
 * @param {object} grid
 * @param {ReactNode} header
 * @param {horizontal | vertical} itemLayout
 * @param {boolean | SpinProps (more)} loading
 * @param {ReactNode} loadMore
 * @param {object} locale
 * @param {boolean | object	} pagination
 * @param {(item) => ReactNode	} renderItem
 * @param {string | Function(record): string	} rowKey
 * @param {default | large | small	} size
 * @param {boolean} split
 * @param {string} className
 * @param children
 * @return {JSX.Element}
 * @constructor
 */

const List = ({
  children,
  bordered,
  dataSource,
  footer,
  grid,
  header,
  itemLayout,
  loading,
  loadMore,
  locale,
  pagination,
  renderItem,
  rowKey,
  size,
  split,
  className,
}) => {
  const props = {
    children,
    bordered,
    dataSource,
    footer,
    grid,
    header,
    itemLayout,
    loading,
    loadMore,
    locale,
    pagination,
    renderItem,
    rowKey,
    size,
    split,
    className,
  };

  return <AntdList {...props}>{children}</AntdList>;
};
export default List;
