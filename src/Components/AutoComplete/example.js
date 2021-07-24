import React, { useState } from "react";
import { Input, AutoComplete } from "test-vendor-2";
import { UserOutlined } from "@ant-design/icons";
import { Highlight } from "./Highlight";
import data from "./bd";
import styled from "styled-components";



const AutoCompleteExample = () => {
  const [query, setQuery] = useState();

  const handleSearch = (value) => {};

  const onSelect = (value) => {};

  const handleChange = (e) => {
    setQuery(e);
  };

  const options = data.map(({ value, label }) => ({
    value: value,
    label: (
      <>
        <span>
          <b>{label}</b>
          <a
            style={{ float: "right" }}
            href="https://www.google.com/search?q=antd"
            target="_blank"
            rel="noopener noreferrer"
          >
            more
          </a>
        </span>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flexStart",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <UserOutlined style={{ marginRight: "10px" }} />
            <>
              <Highlight source={value} target={query}>
                {(s) => (
                  <HighlightWords className="highlight">{s}</HighlightWords>
                )}
              </Highlight>
            </>
          </div>
        </div>
      </>
    ),
  }));

  return (
    <AutoComplete
      dropdownClassName="certain-category-search-dropdown"
      dropdownMatchSelectWidth={500}
      style={{ width: 500 }}
      options={options}
      onChange={handleChange}
      handleSearch={handleSearch}
      onSelect={onSelect}
      filterOption={(inputValue, option) =>
        option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      }
    >
      {/* <Input.Search size="large" placeholder="input here"  /> */}
    </AutoComplete>
  );
};

export default AutoCompleteExample;

const HighlightWords = styled.span`
  display: flex;
  color: blue;
  font-weight: 700;
`;
