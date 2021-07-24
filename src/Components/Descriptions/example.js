import React from "react";
import { DescriptionsItem, Descriptions } from "test-vendor-2";

export const DescriptionsExample = () => {
  return (
    <div>
      <Descriptions title="User Info">
        <DescriptionsItem label="UserName">Zhou Maomao</DescriptionsItem>
        <DescriptionsItem label="Telephone">1810000000</DescriptionsItem>
        <DescriptionsItem label="Live">Hangzhou, Zhejiang</DescriptionsItem>
        <DescriptionsItem label="Remark">empty</DescriptionsItem>
        <DescriptionsItem label="Address">
          No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
        </DescriptionsItem>
      </Descriptions>
    </div>
  );
};
export default DescriptionsExample;
