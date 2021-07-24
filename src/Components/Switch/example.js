import React from "react";
import { Switch } from "test-vendor-2";

const SwitchExample = () => {
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  return (
    <div>
      <Switch defaultChecked onChange={onChange} />
    </div>
  );
};
export default SwitchExample;
