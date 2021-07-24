import React from "react";
import { UserOutlined, SettingOutlined } from "@ant-design/icons";
import { AvatarGroup, Divider, Tooltip } from "test-vendor-2";
import {
  AvatarGroupWrapper,
  AntdAvatar,
  ButtonSetting,
  AntdOrganizationAvatar,
  AntdUserOutlinedAvatar,
} from "../../styles";

const PreaOrganizations = ({ organizations, organization }) => {

  const coincidence = organizations.filter(
    (elem) => elem.label === organization.label && elem
  );
  const newData = [...new Set(coincidence.concat(organizations))];

  return (
    <>
      <Divider orientation="left" plain>
        <b>Organizations</b>
      </Divider>
      <AvatarGroupWrapper>
        <AvatarGroup
          maxCount={4}
          maxStyle={{
            color: "#fff",
            backgroundColor: "rgba(120, 120, 128, 0.8)",
          }}
        >
          {newData.map(
            ({
              id,
              image,
              label,
              short,
              isOwner,
              joinedAt,
              position,
              isCurrent,
            }) => (
              <AntdOrganizationAvatar
                key={id}
                src={image}
                size="large"
                currentOrganization={label === organization.label}
                style={{
                  background:
                    !image &&
                    "#" + Math.floor(Math.random() * 16777216).toString(16),
                }}
              >
                {short}
              </AntdOrganizationAvatar>
            )
          )}

          <Tooltip title="Ant User" placement="top">
            <AntdUserOutlinedAvatar size="large" icon={<UserOutlined />} />
          </Tooltip>
        </AvatarGroup>
        <ButtonSetting icon={<SettingOutlined />} size="large" />
      </AvatarGroupWrapper>
    </>
  );
};

export default PreaOrganizations;
