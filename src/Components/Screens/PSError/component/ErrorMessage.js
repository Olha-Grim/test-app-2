import React, { useCallback, useEffect, useState } from "react";
import ReactJsonSyntaxHighlighter from "react-json-syntax-highlighter";
import { Button } from "test-vendor-2";
import {
  ExclamationCircleOutlined,
  MailOutlined,
  RollbackOutlined,
} from "@ant-design/icons";
import {
  ErrorCard,
  TitleWrapper,
  ErrorTitle,
  ErrorModal,
  ErrorListCollapse,
  ErrorItemPanel,
  TextMassage,
  TextMassageWrapper,
  WrapperErrorList,
  SyntaxHighlighter,
  AlertError,
  AlertErrorWrapper,
  AlertErrorTitle,
  AlertErrorContainer,
  AlertErrorButton,
} from "../style";

const ErrorMessage = ({ errors, onDismiss, onReport }) => {
  const [openModal, handlerOpenModal] = useState(false);

  const errorLength = errors.map(
    (elem) => elem.networkError.result.errors.length
  );

  const controlBody = useCallback(() => {
    const refBody = document.querySelector("body");
    openModal
      ? (refBody.style.overflow = "hidden")
      : (refBody.style.overflow = "auto");
  }, [openModal]);

  const callAlertError = () => {
    handlerOpenModal(!openModal);
  };

  useEffect(() => {
    controlBody();
  }, [controlBody]);

  return (
    <>
      {errorLength >= 1 && !openModal && (
        <AlertError danger size="large">
          <AlertErrorWrapper>
            <AlertErrorContainer>
              <ExclamationCircleOutlined
                style={{ color: "#ff4d4f", fontSize: "24px" }}
              />
              <AlertErrorTitle>An error occurred</AlertErrorTitle>
            </AlertErrorContainer>
            <AlertErrorButton size="small" danger onClick={callAlertError}>
              Detail
            </AlertErrorButton>
          </AlertErrorWrapper>
        </AlertError>
      )}

      {openModal && (
        <ErrorModal>
          <ErrorCard hoverable="true">
            <TitleWrapper>
              <ExclamationCircleOutlined
                style={{ color: "#ff4d4f", fontSize: "24px" }}
              />
              <ErrorTitle>An error occurred</ErrorTitle>
            </TitleWrapper>
            <WrapperErrorList>
              <ErrorListCollapse>
                {errors.map((err) =>
                  err.networkError.result.errors.map((error, key) => (
                    <ErrorItemPanel
                      header={`Status error ${err.networkError.statusCode}`}
                      key={key}
                    >
                      <TextMassageWrapper key={key}>
                        <TextMassage>
                          <SyntaxHighlighter>
                            <ReactJsonSyntaxHighlighter obj={error} />
                          </SyntaxHighlighter>
                        </TextMassage>
                      </TextMassageWrapper>
                    </ErrorItemPanel>
                  ))
                )}
              </ErrorListCollapse>
            </WrapperErrorList>
            <div style={{ marginTop: "20px", display: "flex" }}>
              <Button
                onReport={onReport}
                danger
                style={{ marginRight: "20px" }}
                size="large"
                icon={<MailOutlined />}
              >
                Report
              </Button>
              <Button
                danger
                size="large"
                icon={<RollbackOutlined />}
                onClick={onDismiss}
              >
                Dismiss
              </Button>
            </div>
          </ErrorCard>
        </ErrorModal>
      )}
    </>
  );
};

export default ErrorMessage;
