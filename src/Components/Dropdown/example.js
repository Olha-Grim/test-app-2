import React from "react";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import {
  message,
  Dropdown,
  Button,
  Space,
  Tooltip,
  DropdownButton,
  Menu,
  MenuItem,
} from "test-vendor-2";

const DropdownExample = () => {
  const handleButtonClick = (e) => {
    message.info("Click on left button.");
    console.log("click left button", e);
  };

  const handleMenuClick = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <MenuItem key="1" icon={<UserOutlined />}>
        1st menu item
      </MenuItem>
      <MenuItem key="2" icon={<UserOutlined />}>
        2nd menu item
      </MenuItem>
      <MenuItem key="3" icon={<UserOutlined />}>
        3rd menu item
      </MenuItem>
    </Menu>
  );
  return (
    <Space wrap>
      <DropdownButton onClick={handleButtonClick} overlay={menu}>
        Dropdown
      </DropdownButton>
      <DropdownButton
        overlay={menu}
        placement="bottomCenter"
        icon={<UserOutlined />}
      >
        Dropdown
      </DropdownButton>
      <DropdownButton onClick={handleButtonClick} overlay={menu} disabled>
        Dropdown
      </DropdownButton>
      <DropdownButton
        overlay={menu}
        buttonsRender={([leftButton, rightButton]) => [
          <Tooltip title="tooltip" key="leftButton">
            {leftButton}
          </Tooltip>,
          React.cloneElement(rightButton, { loading: true }),
        ]}
      >
        With Tooltip
      </DropdownButton>
      <Dropdown overlay={menu} style={{ backgroundColor: "red" }}>
        <Button>
          Button <DownOutlined />
        </Button>
      </Dropdown>
    </Space>
  );
};
export default DropdownExample;
