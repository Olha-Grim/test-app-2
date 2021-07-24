import React from "react";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import {Breadcrumb, BreadcrumbItem} from "test-vendor-2";


const BreadcrumbExample = () => {
  return (
    <Breadcrumb>
      <BreadcrumbItem href="">
        <HomeOutlined />
      </BreadcrumbItem>
      <BreadcrumbItem href="">
        <UserOutlined />
        <span>Application List</span>
      </BreadcrumbItem>
      <BreadcrumbItem>Application</BreadcrumbItem>
    </Breadcrumb>
  );
};
export default BreadcrumbExample;
