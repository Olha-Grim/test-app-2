import React from "react";
import { Form as AntdForm } from "antd";
/**
 *
 * @param {function(formName: string, info: { changedFields, forms })	} onFormChange
 * @param {function(formName: string, info: { values, forms })	} onFormFinish
 * @param children
 * @return {JSX.Element}
 * @constructor
 */

const FormProvider = ({ onFormChange, onFormFinish, children }) => {
  const props = {
    onFormChange,
    onFormFinish,
    children,
  };

  return <AntdForm.Provider {...props}>{children}</AntdForm.Provider>;
};
export default FormProvider;
