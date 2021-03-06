import React from "react";
import { Tooltip, Button } from "test-vendor-2";

const TooltipExample = () => {
  return (
    <div>
      <Tooltip placement="topLeft" title="Prompt Text">
        <Button>Align edge / 边缘对齐</Button>
      </Tooltip>
      <Tooltip placement="topLeft" title="Prompt Text" arrowPointAtCenter>
        <Button>Arrow points to center / 箭头指向中心</Button>
      </Tooltip>
    </div>
  );
};
export default TooltipExample;
