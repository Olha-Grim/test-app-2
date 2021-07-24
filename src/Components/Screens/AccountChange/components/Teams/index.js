import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Divider, AvatarGroup , Tooltip} from "test-vendor-2";
import { AntdUserOutlinedAvatar, AvatarGroupWrapper } from "../../styles";

const PreaTeams = ({ teams }) => {
  return (
    <>
      <Divider orientation="left" plain>
        <b>Team</b>
      </Divider>
      <AvatarGroupWrapper>
        <AvatarGroup
          maxCount={4}
          maxStyle={{
            color: "#fff",
            backgroundColor: "rgba(120, 120, 128, 0.8)",
          }}
        >
          {teams.map(({ id, image, label, short, isLeader }) => (
            <Avatar
              key={id}
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
          ))}

          <Tooltip title="Ant User" placement="top">
            <AntdUserOutlinedAvatar size="large" icon={<UserOutlined />} />
          </Tooltip>
        </AvatarGroup>
      </AvatarGroupWrapper>
    </>
  );
};

export default PreaTeams;
