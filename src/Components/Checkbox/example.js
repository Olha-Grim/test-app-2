import React from "react";
import { Checkbox } from "test-vendor-2";

const CheckboxExample = () => {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return <Checkbox onChange={onChange}>Checkbox</Checkbox>;
};
export default CheckboxExample;
