import React from "react";
import ListSettings from "./components/ListSettings";
import AutoCompleteBox from "../AutoCompleteBox";
import useQuery from "../hooks/useQuery";
import data from "./data";

/**
 *
 * @return {JSX.Element}
 * @constructor
 */

const Settings = () => {
  const { handleChange, sortedData } = useQuery(data);

  return (
    <AutoCompleteBox name="Settings" handleChange={handleChange}>
      <ListSettings sortedData={sortedData} />
    </AutoCompleteBox>
  );
};

export default Settings;
