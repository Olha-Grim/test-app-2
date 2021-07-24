import React from "react";
import { Carousel as AntdCarousel } from "antd";
/**
 *
 * @param {boolean} autoplay
 * @param {string} dotPosition
 * @param {boolean | { className?: string }	} dots
 * @param {string} easing
 * @param {scrollx | fade	} effect
 * @param {function(current)	} afterChange
 * @param {function(from, to)	} beforeChange
 * @param children
 * @return {JSX.Element}
 * @constructor
 */
const Carousel = ({
  autoplay,
  dotPosition,
  dots,
  easing,
  effect,
  afterChange,
  beforeChange,
  children,
}) => {
  const props = {
    autoplay,
    dotPosition,
    dots,
    easing,
    effect,
    afterChange,
    beforeChange,
    children,
  };

  return <AntdCarousel {...props}>{children}</AntdCarousel>;
};
export default Carousel;
