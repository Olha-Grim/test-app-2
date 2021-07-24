import React from "react";
import { Timeline, TimelineItem } from "test-vendor-2";

const TimelineExample = () => {
  return (
    <div>
      <Timeline>
        <TimelineItem>Create a services site 2015-09-01</TimelineItem>
        <TimelineItem>Solve initial network problems 2015-09-01</TimelineItem>
        <TimelineItem>Technical testing 2015-09-01</TimelineItem>
        <TimelineItem>Network problems being solved 2015-09-01</TimelineItem>
      </Timeline>
    </div>
  );
};
export default TimelineExample;
