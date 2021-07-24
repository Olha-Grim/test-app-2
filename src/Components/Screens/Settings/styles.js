import styled from "styled-components";
import { List } from "test-vendor-2";

export const AntdList = styled(List)`
  height: 230px;
  max-height: 100%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0;
  }
`;

export const SwitchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;
