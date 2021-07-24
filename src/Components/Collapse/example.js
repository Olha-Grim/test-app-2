import React from "react";
import Collapse from "./Collapse";
import CollapsePanel from "./CollapsePanel";

const CollapseExample = () => {
  const Callback = (key) => {
    // console.log(key);
  };

  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;
  return (
    <div>
      <Collapse defaultActiveKey={["1"]} onChange={Callback}>
        <CollapsePanel header="This is panel header 1" key="1">
          <p>{text}</p>
        </CollapsePanel>
        <CollapsePanel header="This is panel header 2" key="2">
          <p>{text}</p>
        </CollapsePanel>
        <CollapsePanel header="This is panel header 3" key="3">
          <p>{text}</p>
        </CollapsePanel>
      </Collapse>
    </div>
  );
};
export default CollapseExample;
