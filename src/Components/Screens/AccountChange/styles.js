
import styled from "styled-components";
import { Avatar, Card, Button } from "test-vendor-2";


export const AntdCard = styled(Card)`
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 8px;
  width: 360px;
  background: linear-gradient(
    to bottom,
    rgba(120, 120, 128, 0.16) 15%,
    transparent 15%
  );
`;

export const CardWrapper = styled.div`
  margin-bottom: 40px;
`;
export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const IconClose = styled.div`
  position: absolute;
  top: 3%;
  right: 5%;
`;

export const IconUploadWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 18%;
  left: 55%;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-color: white;
  box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.2);
  border: 2px solid white;
  z-index: 1;
`;

export const AntdAvatar = styled(Avatar)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  padding: 5px;
  margin: 10px 0px 25px 0px;
`;

export const UserName = styled.p`
  color: black;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  margin-bottom: 6px;
`;

export const UserEmail = styled.p`
  color: black;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
`;

export const ButtonSwitchWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin: 12px 0px 12px 0px;
`;

export const ButtonSwitch = styled(Button)`
  width: 80%;
  border-radius: 20px;
`;

export const ButtonLogoutWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin: 45px 0px 5px 0px;
`;

export const ButtonLogout = styled(Button)`
  border-radius: 6px;
`;

export const AvatarGroupWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AntdOrganizationAvatar = styled(Avatar)`
  border: ${(props) => props.currentOrganization && "1px solid #ba134e"};
  box-shadow: ${(props) => props.currentOrganization && "0px 0px 5px #ba134e"};
`;
export const AntdUserOutlinedAvatar = styled(Avatar)`
  background-color: "#87d068";
`;

export const ButtonSetting = styled(Button)`
  border-radius: 100% !important;
`;
