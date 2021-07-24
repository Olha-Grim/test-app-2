import React from "react";
import { Form as AntdForm } from "antd";
/**
 *
 * @param {boolean} colon
 * @param {NamePath[]} dependencies
 * @param {ReactNode} extra
 * @param {(..args: any[]) => any} getValueFromEvent
 * @param {(value: any) => any	} getValueProps
 * @param {boolean} hasFeedback
 * @param {ReactNode} help
 * @param {boolean} hidden
 * @param {string} htmlFor
 * @param {string} initialValue
 * @param {ReactNode} label
 * @param {left | right	} labelAlign
 * @param {object} labelCol
 * @param {Record<string, string>} messageVariables
 * @param {NamePath} name
 * @param {(value, prevValue, prevValues) => any} normalize
 * @param {boolean} noStyle
 * @param {boolean} preserve
 * @param {boolean} required
 * @param {Rule[]} rules
 * @param {boolean | (prevValue, curValue) => boolean} shouldUpdate
 * @param {ReactNode | TooltipProps & { icon: ReactNode }	} tooltip
 * @param {string} trigger
 * @param {boolean | parallel} validateFirst
 * @param {string} validateStatus
 * @param {string | string[]} validateTrigger
 * @param {string} valuePropName
 * @param {object} wrapperCol
 * @param children
 * @return {JSX.Element}
 * @constructor
 */

const FormItem = ({
  colon,
  dependencies,
  extra,
  getValueFromEvent,
  getValueProps,
  hasFeedback,
  help,
  hidden,
  htmlFor,
  initialValue,
  label,
  labelAlign,
  labelCol,
  messageVariables,
  name,
  normalize,
  noStyle,
  preserve,
  required,
  rules,
  shouldUpdate,
  tooltip,
  trigger,
  validateFirst,
  validateStatus,
  validateTrigger,
  valuePropName,
  wrapperCol,
  children,
}) => {
  const props = {
    colon,
    dependencies,
    extra,
    getValueFromEvent,
    getValueProps,
    hasFeedback,
    help,
    hidden,
    htmlFor,
    initialValue,
    label,
    labelAlign,
    labelCol,
    messageVariables,
    name,
    normalize,
    noStyle,
    preserve,
    required,
    rules,
    shouldUpdate,
    tooltip,
    trigger,
    validateFirst,
    validateStatus,
    validateTrigger,
    valuePropName,
    wrapperCol,
    children,
  };

  return <AntdForm.Item {...props}>{children}</AntdForm.Item>;
};
export default FormItem;
