import React from "react";
import { Typography as AntdTypography } from "antd";

/**
 *
 * @param {boolean} code
 * @param {boolean | copyable} copyable
 * @param {boolean} delete
 * @param {boolean} disabled
 * @param {boolean | editable} editable
 * @param {boolean | ellipsis} ellipsis
 * @param {number: 1, 2, 3, 4, 5} level
 * @param {boolean} mark
 * @param {(event) => void} onClick
 * @param {boolean} italic
 * @param {secondary | success | warning | danger} type
 * @param {underline} underline
 * @param children
 * @return {JSX.Element}
 * @constructor
 */

const Title = ({
  code,
  copyable,
  disabled,
  // delete,
  editable,
  ellipsis,
  level,
  mark,
  onClick,
  italic,
  type,
  underline,
  children,
}) => {
  const props = {
    code,
    copyable,
    disabled,
    // delete,
    editable,
    ellipsis,
    level,
    mark,
    onClick,
    italic,
    type,
    underline,
    children,
  };

  return <AntdTypography.Title {...props}>{children}</AntdTypography.Title>;
};
export default Title;
