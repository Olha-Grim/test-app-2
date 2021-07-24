import React from "react";
import moment from "moment";
import { TimePicker } from "test-vendor-2";

const TimePickerExample = () => {
  const onChange = (e) => {
    console.log(e.target);
  };
  return (
    <div>
      <TimePicker
        onChange={onChange}
        defaultOpenValue={moment("00:00:00", "HH:mm:ss")}
      />
    </div>
  );
};
export default TimePickerExample;
