import React from "react";
import { Mentions as AntdMentions } from "antd";
/**
 *
 * @param {boolean} autoFocus
 * @param {boolean | object	} autoSize
 * @param {string} defaultValue
 * @param {false | (input: string, option: OptionProps) => boolean	} filterOption
 * @param {() => HTMLElement} getPopupContainer
 * @param { ReactNode} notFoundContent
 * @param {top | bottom	} placement
 * @param {string | string[]} prefix
 * @param {string} split
 * @param {(text: string, props: MentionsProps) => void	} validateSearch
 * @param {string} value
 * @param {() => void} onBlur
 * @param {(text: string) => void} onChange
 * @param {() => void} onFocus
 * @param {function({ width, height })} onResize
 * @param {(text: string, prefix: string) => void} onSearch
 * @param {(option: OptionProps, prefix: string) => void} onSelect
 * @param children
 * @return {JSX.Element}
 * @constructor
 */

const Mentions = ({
  autoFocus,
  autoSize,
  defaultValue,
  filterOption,
  getPopupContainer,
  notFoundContent,
  placement,
  prefix,
  split,
  validateSearch,
  value,
  onBlur,
  onChange,
  onFocus,
  onResize,
  onSearch,
  onSelect,
  children,
}) => {
  const props = {
    autoFocus,
    autoSize,
    defaultValue,
    filterOption,
    getPopupContainer,
    notFoundContent,
    placement,
    prefix,
    split,
    validateSearch,
    value,
    onBlur,
    onChange,
    onFocus,
    onResize,
    onSearch,
    onSelect,
    children,
  };

  return <AntdMentions {...props}>{children}</AntdMentions>;
};
export default Mentions;
