import React from "react";
import PreaOrganizations from "./components/Organizations";
import PreaLogo from "./components/image/PreaLogo";
import PreaTeams from "./components/Teams";
import { user } from "../data";
import {
  AntdCard,
  CardWrapper,
  IconClose,
  AvatarWrapper,
  IconUploadWrapper,
  AntdAvatar,
  UserName,
  UserEmail,
  ButtonSwitchWrapper,
  ButtonSwitch,
  ButtonLogout,
  ButtonLogoutWrapper,
} from "./styles";
import {
  CloseOutlined,
  LogoutOutlined,
  TeamOutlined,
  UploadOutlined,
} from "@ant-design/icons";

const AccountChange = () => {
  const { name, email, image, short, organization, organizations, teams } =
    user;

  return (
    <AntdCard hoverable="true">
      <CardWrapper>
        <IconClose>
          <CloseOutlined />
        </IconClose>

        <AvatarWrapper>
          <IconUploadWrapper>
            <UploadOutlined />
          </IconUploadWrapper>
          <AntdAvatar icon={!image && <PreaLogo />} src={image} size={100}>
            {short}
          </AntdAvatar>
        </AvatarWrapper>

        <UserName>{name}</UserName>
        <UserEmail>{email}</UserEmail>
        <ButtonSwitchWrapper>
          <ButtonSwitch icon={<TeamOutlined />} size="large">
            Switch User
          </ButtonSwitch>
        </ButtonSwitchWrapper>
      </CardWrapper>
      <PreaOrganizations
        organizations={organizations}
        organization={organization}
      />
      <PreaTeams teams={teams} />
      <ButtonLogoutWrapper>
        <ButtonLogout type="ghost" icon={<LogoutOutlined />} size="large">
          Log out
        </ButtonLogout>
      </ButtonLogoutWrapper>
    </AntdCard>
  );
};
export default AccountChange;
