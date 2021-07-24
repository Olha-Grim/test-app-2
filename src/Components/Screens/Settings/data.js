import React from "react";
import {
  ChromeOutlined,
  AreaChartOutlined,
  BulbOutlined,
  ControlOutlined,
  FormOutlined,
  AppstoreAddOutlined,
} from "@ant-design/icons";

const data = [
  {
    label: <AppstoreAddOutlined />,
    name: "More",
  },
  {
    label: <FormOutlined />,
    name: "Notification",
  },
  {
    label: <ControlOutlined />,
    name: "System update",
  },

  {
    label: <BulbOutlined />,
    name: "Main status",
  },
  {
    label: <ChromeOutlined />,
    name: "All projects",
  },
  {
    label: <AreaChartOutlined />,
    name: "Statistic",
  },
];

export default data;
