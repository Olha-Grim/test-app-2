import React from "react";
import { Space } from "test-vendor-2";
import { AudioOutlined } from "@ant-design/icons";
import {InputSearch, Input} from "test-vendor-2";


const InputExample = () => {
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1890ff",
      }}
    />
  );
  const onSearch = (value) => console.log(value);

  return (

    <Space direction="vertical">

      <InputSearch
        placeholder="input search text"
        onSearch={onSearch}
        style={{ width: 200 }}
      />
      <InputSearch
        placeholder="input search text"
        allowClear
        onSearch={onSearch}
        style={{ width: 200 }}
      />
      <InputSearch
        placeholder="input search text"
        onSearch={onSearch}
        enterButton
      />
      <InputSearch
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
      <InputSearch
        placeholder="input search text"
        enterButton="Search"
        size="large"
        suffix={suffix}
        onSearch={onSearch}
      /> 
    </Space>
  );
};
export default InputExample;
