import React from "react";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import {
  Layout,
  Header,
  Sider,
  Content,
  Menu,
  MenuItem,
  SubMenu,
  Breadcrumb,
  BreadcrumbItem,
} from "test-vendor-2";


const LayoutExample = () => {
  return (
    <Layout style={{ width: "700px" }}>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <MenuItem key="1">nav 1</MenuItem>
          <MenuItem key="2">nav 2</MenuItem>
          <MenuItem key="3">nav 3</MenuItem>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
              <MenuItem key="1">option1</MenuItem>
              <MenuItem key="2">option2</MenuItem>
              <MenuItem key="3">option3</MenuItem>
              <MenuItem key="4">option4</MenuItem>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
              <MenuItem key="5">option5</MenuItem>
              <MenuItem key="6">option6</MenuItem>
              <MenuItem key="7">option7</MenuItem>
              <MenuItem key="8">option8</MenuItem>
            </SubMenu>
            <SubMenu
              key="sub3"
              icon={<NotificationOutlined />}
              title="subnav 3"
            >
              <MenuItem key="9">option9</MenuItem>
              <MenuItem key="10">option10</MenuItem>
              <MenuItem key="11">option11</MenuItem>
              <MenuItem key="12">option12</MenuItem>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>List</BreadcrumbItem>
            <BreadcrumbItem>App</BreadcrumbItem>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default LayoutExample;
