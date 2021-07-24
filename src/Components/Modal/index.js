import React from "react";
import { Modal as AntdModal } from "antd";
/**
 *
 * @param {function} afterClose
 * @param {CSSProperties} bodyStyle
 * @param {ButtonProps} cancelButtonProps
 * @param {boolean} centered
 * @param {boolean} closable
 * @param {ReactNode} closeIcon
 * @param {boolean} confirmLoading
 * @param {boolean} destroyOnClose
 * @param {boolean} focusTriggerAfterClose
 * @param {ReactNode} footer
 * @param {boolean} forceRender
 * @param {HTMLElement | () => HTMLElement | Selectors | false	} getContainer
 * @param {boolean} keyboard
 * @param {boolean} mask
 * @param {boolean} maskClosable
 * @param {CSSProperties	} maskStyle
 * @param {(node: ReactNode) => ReactNode	} modalRender
 * @param {ButtonProps} okButtonProps
 * @param {ReactNode} okText
 * @param {string} okType
 * @param {CSSProperties} style
 * @param {ReactNode} title
 * @param {boolean} visible
 * @param {string | number	} width
 * @param {string} wrapClassName
 * @param {number} zIndex
 * @param {function(e)	} onCancel
 * @param {function(e)	} onOk
 * @param children
 * @return {JSX.Element}
 * @constructor
 */

const Modal = ({
  afterClose,
  bodyStyle,
  cancelButtonProps,
  centered,
  closable,
  confirmLoading,
  destroyOnClose,
  focusTriggerAfterClose,
  footer,
  forceRender,
  getContainer,
  keyboard,
  mask,
  maskClosable,
  maskStyle,
  modalRender,
  okButtonProps,
  okText,
  okType,
  style,
  title,
  width,
  wrapClassName,
  zIndex,
  onCancel,
  onOk,
  children,
}) => {
  const props = {
    afterClose,
    bodyStyle,
    cancelButtonProps,
    centered,
    closable,
    confirmLoading,
    destroyOnClose,
    focusTriggerAfterClose,
    footer,
    forceRender,
    getContainer,
    keyboard,
    mask,
    maskClosable,
    maskStyle,
    modalRender,
    okButtonProps,
    okText,
    okType,
    style,
    title,
    width,
    wrapClassName,
    zIndex,
    onCancel,
    onOk,
    children,
  };

  return <AntdModal {...props}>{children}</AntdModal>;
};
export default Modal;
