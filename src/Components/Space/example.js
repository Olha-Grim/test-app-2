import React from "react";
import { UploadOutlined } from "@ant-design/icons";
import {Popconfirm, Button, Upload, Space} from "test-vendor-2";


const SpaceExample = () => {
  return (
    <div>
      <Space>
        Space
        <Button type="primary">Button</Button>
        <Upload>
          <Button>
            <UploadOutlined /> Click to Upload
          </Button>
        </Upload>
        <Popconfirm
          title="Are you sure delete this task?"
          okText="Yes"
          cancelText="No"
        >
          <Button>Confirm</Button>
        </Popconfirm>
      </Space>
    </div>
  );
};
export default SpaceExample;
