import React from "react";
import {Space, Spin} from "test-vendor-2";


const SpinExample = () => {
  return (
    <div>
      <Space size="middle">
        <Spin size="small" />
        <Spin />
        <Spin size="large" />
      </Space>
      
    </div>
  );
};
export default SpinExample;
