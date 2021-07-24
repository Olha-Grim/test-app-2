import styled from "styled-components";
import { Input, Divider, List, Card } from "test-vendor-2";

export const AntdCard = styled(Card)`
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 8px;
  width: 360px;
`;

export const AntdDivider = styled(Divider)`
  margin: 0;
`;

export const TitleDivider = styled.h2`
  margin: 0;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const AntdInput = styled(Input)`
  background-color: rgba(120, 120, 128, 0.16);
  border-radius: 4px;
  border: none;
  margin: 10px 0px;
  width: 85%;
`;

export const AntdList = styled(List)`
  height: 230px;
  max-height: 100%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0;
  }
`;
