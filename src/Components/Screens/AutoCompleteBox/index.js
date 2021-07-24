import React from "react";
import {
  AntdCard,
  AntdDivider,
  TitleDivider,
  InputWrapper,
  AntdInput,
} from "./styles";

/**
 * @param {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */

const AutoCompleteBox = ({ name, handleChange, children }) => {
  
  return (
    <AntdCard hoverable="true">
      <AntdDivider>
        <TitleDivider>{name}</TitleDivider>
      </AntdDivider>
      <InputWrapper>
        <AntdInput
          placeholder={`Search for ${name}...`}
          onChange={handleChange}
        />
      </InputWrapper>
      {children}
    </AntdCard>
  );
};

export default AutoCompleteBox;
