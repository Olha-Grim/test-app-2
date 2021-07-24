import styled from "styled-components";
import { Text } from "../../Typography";
import { Row } from "../../Grid";


export const AntdRow = styled(Row)`
  height: 216px;
  max-height: 100%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0;
  }
`;

export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px;
  & :hover,
  :focus,
  :active {
    background: rgb(171, 166, 166, 0.1);
    border-radius: 8px;
  }
`;

export const AntdText = styled(Text)`
  margin-top: 12px;
  color: "#5f6368";
`;
