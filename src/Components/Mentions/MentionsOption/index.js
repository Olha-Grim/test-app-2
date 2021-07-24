import React from "react";
import { Mentions as AntdMentions } from "antd";
/**
 *
 * @param {(text: string, prefix: string) => void} value
 * @param {ReactNode} children
 * @return {JSX.Element}
 * @constructor
 */

const MentionsOption = ({ value, children }) => {
  const props = { value, children };

  return <AntdMentions.Option {...props}>{children}</AntdMentions.Option>;
};
export default MentionsOption;
