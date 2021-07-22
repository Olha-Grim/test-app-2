import React from "react";
import { AutoComplete as AntdAutoComplete } from "antd";
/**
 *
 * @param {boolean} allowClear
 * @param {boolean} autoFocus
 * @param {boolean} backfill
 * @param {HTMLInputElement | HTMLTextAreaElement | React.ReactElement<InputProps>	} children (for customize input element)
 * @param {React.ReactElement<OptionProps> | Array<React.ReactElement<OptionProps>>	} children (for dataSource)
 * @param {boolean} defaultActiveFirstOption
 * @param {boolean} defaultOpen
 * @param {string} defaultValue
 * @param {boolean} disabled
 * @param {string} dropdownClassName
 * @param {boolean | number	} dropdownMatchSelectWidth
 * @param {boolean | function(inputValue, option)	} filterOption
 * @param {string} notFoundContent
 * @param {boolean}  open
 * @param {{ label, value }[]} options
 * @param {string} placeholder
 * @param {string} value
 * @param {function()} onBlur
 * @param {function(value)}  onChange
 * @param {function(open)	}  onDropdownVisibleChange
 * @param {function()} onFocus
 * @param {function(value)} onSearch
 * @param {function(value, option)} onSelect
 * @param {string} className
 * @param children
 * @return {JSX.Element}
 * @constructor
 */

//  *Methods
//  blur()	Remove focus
// focus()	Get focus

const AutoComplete = ({
  allowClear,
  className,
  autoFocus,
  backfill,
  children,
  defaultActiveFirstOption,
  defaultOpen,
  defaultValue,
  disabled,
  dropdownClassName,
  dropdownMatchSelectWidth,
  filterOption,
  notFoundContent,
  open,
  options,
  placeholder,
  value,
  onBlur,
  onChange,
  onDropdownVisibleChange,
  onFocus,
  onSearch,
  onSelect,
}) => {
  const props = {
    allowClear,
    className,
    autoFocus,
    backfill,
    children,
    defaultActiveFirstOption,
    defaultOpen,
    defaultValue,
    disabled,
    dropdownClassName,
    dropdownMatchSelectWidth,
    filterOption,
    notFoundContent,
    open,
    options,
    placeholder,
    value,
    onBlur,
    onChange,
    onDropdownVisibleChange,
    onFocus,
    onSearch,
    onSelect,
  };

  return <AntdAutoComplete {...props}>{children}</AntdAutoComplete>;
};
export default AutoComplete;
