import React from "react";
import { Drawer as AntdDrawer } from "antd";
/**
 *
 * @param {function(visible)} afterVisibleChange
 * @param {object} bodyStyle
 * @param {string} className
 * @param {boolean} closable
 * @param {ReactNode} closeIcon
 * @param {CSSProperties} contentWrapperStyle
 * @param {boolean} destroyOnClose
 * @param {object} drawerStyle
 * @param {ReactNode} footer
 * @param {CSSProperties} footerStyle
 * @param {boolean} forceRender
 * @param {HTMLElement | () => HTMLElement | Selectors | false	} getContainer
 * @param {object} headerStyle
 * @param {string | number	} height
 * @param {boolean} keyboard
 * @param {boolean} mask
 * @param {boolean} maskClosable
 * @param {CSSProperties} maskStyle
 * @param {top | right | bottom | left	} placement
 * @param {boolean | { distance: string | number }	} push
 * @param {CSSProperties	} style
 * @param {ReactNode} title
 * @param {boolean} visible
 * @param {string | number	} width
 * @param {number} zIndex
 * @param {function(e)	} onClose
 * @param children
 * @return {JSX.Element}
 * @constructor
 */

const Drawer = ({
  afterVisibleChange,
  bodyStyle,
  className,
  closable,
  closeIcon,
  contentWrapperStyle,
  destroyOnClose,
  drawerStyle,
  footer,
  footerStyle,
  forceRender,
  getContainer,
  headerStyle,
  height,
  keyboard,
  mask,
  maskClosable,
  maskStyle,
  placement,
  push,
  style,
  title,
  visible,
  width,
  zIndex,
  onClose,
  children,
}) => {
  const props = {
    afterVisibleChange,
    bodyStyle,
    className,
    closable,
    closeIcon,
    contentWrapperStyle,
    destroyOnClose,
    drawerStyle,
    footer,
    footerStyle,
    forceRender,
    getContainer,
    headerStyle,
    height,
    keyboard,
    mask,
    maskClosable,
    maskStyle,
    placement,
    push,
    style,
    title,
    visible,
    width,
    zIndex,
    onClose,
    children,
  };

  return <AntdDrawer {...props}>{children}</AntdDrawer>;
};
export default Drawer;
