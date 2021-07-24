import styled from "styled-components";
import { Card } from "../../Card";
import Button from "../../Button";
import { Collapse } from "antd";

export const AlertError = styled(Card)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 8px;
  width: 360px;
  height: 50px;
  animation-duration: 0.5s;
  animation-name: alertError;
  animation-fill-mode: forwards;

  @keyframes alertError {
    0% {
      position: fixed;
      transform: translateY(0);
      top: 0;
      right: 5%;
      z-index: 1;
    }
    50% {
      position: fixed;
      transform: translateY(-80px);
      top: 15%;
      right: 5%;
      z-index: 1;
    }
    100% {
      position: fixed;
      transform: translateY(-70px);
      top: 15%;
      right: 5%;
      z-index: 1;
    }
  }
`;
export const AlertErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const AlertErrorContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const AlertErrorButton = styled(Button)`
  margin-left: 80px;
`;

export const AlertErrorTitle = styled.p`
  padding: 0px;
  height: 100%;
  font-size: 16px;
  margin: 0px 0px 0px 10px;
`;

export const ErrorModal = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
`;

export const ErrorCard = styled(Card)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  height: 70vh;
  border-radius: 6px;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 60%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

export const IconClose = styled.div`
  position: absolute;
  top: 4%;
  right: 5%;
`;

export const ErrorListCollapse = styled(Collapse)`
  background-color: transparent;
  border: none;
  height: 400px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 8px;
    height: 10px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: white;
    box-shadow: inset 0 0 10px rgb(255, 77, 79, 0.3);
    border-radius: 5px;
  }

  .ant-collapse-item {
    border-bottom: 1px solid #ffccc7;
    color: #ffccc7;

    .ant-collapse-header {
      color: rgb(255, 77, 79);
      padding: 5px 16px;
    }
  }
`;

export const ErrorItemPanel = styled(Collapse.Panel)`
  background-color: transparent;
  border-bottom: none;

  .ant-collapse-content {
    background: white;
    border: 1px solid #ffe3e1;
    border-bottom: none;
  }
`;

export const WrapperErrorList = styled.div`
  overflow: hidden;
  height: 80%;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const ErrorTitle = styled.h2`
  margin: 0px 0px 0px 15px;
`;

export const ErrorWrapperIcon = styled.div`
  width: 100px;
  cursor: pointer;
`;

export const TextMassage = styled.p`
  white-space: ${(props) => (props.bool ? "normal" : "nowrap")};
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0px;
  max-height: 300px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0;
  }
`;

export const TextMassageWrapper = styled.div`
  display: flex;
`;


export const SyntaxHighlighter = styled.div`
  .ReactJsonSyntaxHighlighter {
    & pre {
      font-size: 14px;
      white-space: pre-wrap;
      white-space: -moz-pre-wrap;
      white-space: -pre-wrap;
      white-space: -o-pre-wrap;
      word-wrap: break-word;

      .string {
        color: green;
      }
      .number {
        color: blue;
      }
      .boolean {
        color: darkorange;
      }
      .null {
        color: magenta;
      }
      .key {
        color: rgba(0, 0, 0, 0.85);
      }
    }
  }
`;
