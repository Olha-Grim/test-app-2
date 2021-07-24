import React from "react";
import { Form as AntdForm } from "antd";
/**
 *
 * @param {(fields: Field[], operation: { add, remove, move }, meta: { errors }) => React.ReactNode	} children
 * @param { any[]} initialValue
 * @param {NamePath} name
 * @param {{ validator, message }[]	} rules
 * @param {ReactNode[]} errors
 * * operation - Some operator functions in render form of Form.List.
 * @param {(defaultValue?: any, insertIndex?: number) => void	} add
 * @param {(from: number, to: number) => void	} move
 * @param {(index: number | number[]) => void	} remove
 * @param children
 * @return {JSX.Element}
 * @constructor
 */

const Form = ({ children, initialValue, name, rules, errors }) => {
  const props = {
    children,
    initialValue,
    name,
    rules,
    errors
  };

  return <AntdForm.ErrorList {...props}>{children}</AntdForm.ErrorList>;
};
export default Form;
