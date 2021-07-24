import React from "react";
import { Mentions, MentionsOption } from "test-vendor-2";

const MentionsExample = () => {
  const onChange = (value) => {
    console.log("Change:", value);
  };

  const onSelect = (option) => {
    console.log("select", option);
  };
  return (
    <Mentions
      style={{ width: "100%" }}
      onChange={onChange}
      onSelect={onSelect}
      defaultValue="@afc163"
    >
      <MentionsOption value="afc163">afc163</MentionsOption>
      <MentionsOption value="zombieJ">zombieJ</MentionsOption>
      <MentionsOption value="yesmeck">yesmeck</MentionsOption>
    </Mentions>
  );
};
export default MentionsExample;
