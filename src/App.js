import React from "react";
// import { Divider } from "test-vendor-2";
import AlertExample from "./Components/Alert";
import AvatarExample from "./Components/Avatar";
import ButtonExample from "./Components/Button";
import AffixExample from "./Components/Affix";
import AnchorExample from "./Components/Anchor";
import BackTopExample from "./Components/BackTop";

function App() {
  return (
    <div
      style={{
        padding: "2rem",
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "500px",
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
        }}
      >
        <Divider>Alert</Divider>
        <AlertExample />
        <Divider>Button</Divider>
        <ButtonExample />
        <Divider>Avatar/ Badge</Divider>
        <AvatarExample />
        <Divider>Affix</Divider>
        <AffixExample/>
        <Divider>Anchor</Divider>
        {/* <AnchorExample/> */}
        <Divider>BackTop</Divider>
        <BackTopExample/>
        <Divider>AutoComplete</Divider>
        <Divider>AutoComplete</Divider>
        <Divider>Breadcrumb</Divider>
        <Divider>Typography</Divider>

      </div>
    </div>
  );
}

export default App;
