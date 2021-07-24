import React from "react";
import { Tabs, TabsTabPane } from "test-vendor-2";

const TabsExample = () => {
  const Callback = (key) => {
    console.log(key);
  };

  return (
    <div>
      <Tabs defaultActiveKey="1" onChange={Callback}>
        <TabsTabPane tab="Tab 1" key="1">
          Content of Tab Pane 1
        </TabsTabPane>
        <TabsTabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </TabsTabPane>
        <TabsTabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabsTabPane>
      </Tabs>
    </div>
  );
};
export default TabsExample;
