import React from "react";
import { CloseOutlined, CheckOutlined, RightOutlined } from "@ant-design/icons";
import { ListItemMeta, ListItem, Avatar, Switch } from "test-vendor-2";
import { AntdList, SwitchWrapper } from "../../styles";

const ListSettings = ({ sortedData }) => {
  return (
    <>
      <AntdList
        itemLayout="horizontal"
        dataSource={sortedData}
        renderItem={(item, key) => (
          <ListItem key={key}>
            <ListItemMeta
              avatar={<Avatar icon={item.label} />}
              description={item.name}
            />
            <RightOutlined />
          </ListItem>
        )}
      />
      <SwitchWrapper>
        <p>Light/Dark Mode </p>
        <Switch
          checkedChildren={<CheckOutlined />}
          unCheckedChildren={<CloseOutlined />}
          defaultChecked
        />
      </SwitchWrapper>
    </>
  );
};
export default ListSettings;
