import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Badge } from "test-vendor-2";

const AvatarExample = () => {
  return (
    <div>
      <span className="avatar-item" style={{marginRight: "30px"}}>
        <Badge count={1}>
          <Avatar shape="square" icon={<UserOutlined />} />
        </Badge>
      </span>
      <span>
        <Badge dot>
          <Avatar shape="square" icon={<UserOutlined />} />
        </Badge>
      </span>
    </div>
  );
};
export default AvatarExample;
