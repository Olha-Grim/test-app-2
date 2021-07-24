import React from "react";
import { Popconfirm, message } from "test-vendor-2";

const PopconfirmExample = () => {
  function confirm(e) {
    console.log(e);
    message.success("Click on Yes");
  }

  function cancel(e) {
    console.log(e);
    message.error("Click on No");
  }
  return (
    <div>
      <Popconfirm
        title="Are you sure to delete this task?"
        onConfirm={confirm}
        onCancel={cancel}
        okText="Yes"
        cancelText="No"
      >
        <a href="#">Delete</a>
      </Popconfirm>
    </div>
  );
};
export default PopconfirmExample;
