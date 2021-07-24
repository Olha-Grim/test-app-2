import React from "react";
import { AntDesignOutlined } from "@ant-design/icons";
import { Avatar } from "../../../../Avatar";
import { Col } from "../../../../Grid";
import { AntdRow, AntdText, AvatarWrapper } from "../../styles";

const ListApps = ({ sortedData }) => {
  return (
    <AntdRow gutter={[16, 16]} justify="center">
      {sortedData.map(({ appId, name, short, image, category }) => (
        <Col key={appId} span={8}>
          <AvatarWrapper>
            <Avatar
              icon={!short && <AntDesignOutlined />}
              src={image}
              size="large"
              style={{
                background:
                  !image &&
                  "#" + Math.floor(Math.random() * 16777216).toString(16),
              }}
            >
              {short}
            </Avatar>
            <AntdText>{name}</AntdText>
          </AvatarWrapper>
        </Col>
      ))}
    </AntdRow>
  );
};

export default ListApps;
