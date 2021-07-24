import React from "react";
import { Form as AntdForm } from "antd";
/**
 *
 * @param {boolean} colon
 * @param {ComponentType | false} component
 * @param {FieldData[]} fields
 * @param {FormInstance} form
 * @param {object} initialValues
 * @param {left | right} labelAlign
 * @param {object} labelCol
 * @param {horizontal | vertical | inline} layout
 * @param {string} name
 * @param {boolean} preserve
 * @param {boolean | optional} requiredMark
 * @param {boolean | Options} scrollToFirstError
 * @param {small | middle | large} size
 * @param {ValidateMessages} validateMessages
 * @param {string | string[]} validateTrigger
 * @param {object} wrapperCol
 * @param {function(changedFields, allFields)} onFieldsChange
 * @param {function(values)	} onFinish
 * @param {function({ values, errorFields, outOfDate })	} onFinishFailed
 * @param {function(changedValues, allValues)} onValuesChange
 * @param children
 * @return {JSX.Element}
 * @constructor
 */

const Form = ({
  colon,
  children,
  component,
  fields,
  form,
  initialValues,
  labelAlign,
  labelCol,
  layout,
  name,
  preserve,
  requiredMark,
  scrollToFirstError,
  size,
  validateMessages,
  validateTrigger,
  wrapperCol,
  onFieldsChange,
  onFinishFailed,
  onValuesChange,
}) => {
  const props = {
    colon,
    children,
    component,
    fields,
    form,
    initialValues,
    labelAlign,
    labelCol,
    layout,
    name,
    preserve,
    requiredMark,
    scrollToFirstError,
    size,
    validateMessages,
    validateTrigger,
    wrapperCol,
    onFieldsChange,
    onFinishFailed,
    onValuesChange,
  };

  return <AntdForm {...props}>{children}</AntdForm>;
};
export default Form;
