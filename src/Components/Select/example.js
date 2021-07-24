import React from "react";
import { Select, SelectOption } from "test-vendor-2";

const SelectExample = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <>
      <Select
        defaultValue="lucy"
        style={{ width: 120 }}
        onChange={handleChange}
      >
        <SelectOption value="jack">Jack</SelectOption>
        <SelectOption value="lucy">Lucy</SelectOption>
        <SelectOption value="disabled" disabled>
          Disabled
        </SelectOption>
        <SelectOption value="Yiminghe">yiminghe</SelectOption>
      </Select>
      <Select defaultValue="lucy" style={{ width: 120 }} disabled>
        <SelectOption value="lucy">Lucy</SelectOption>
      </Select>
      <Select defaultValue="lucy" style={{ width: 120 }} loading>
        <SelectOption value="lucy">Lucy</SelectOption>
      </Select>
      <Select defaultValue="lucy" style={{ width: 120 }} allowClear>
        <SelectOption value="lucy">Lucy</SelectOption>
      </Select>
    </>
  );
};
export default SelectExample;
