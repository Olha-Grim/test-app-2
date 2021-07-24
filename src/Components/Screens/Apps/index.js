import React from "react";
import ListApps from "./components/ListApps";
import useQuery from "../hooks/useQuery";
import { user } from "../data";
import AutoCompleteBox from "../AutoCompleteBox";

const Apps = () => {
  const { apps } = user;
  const { handleChange, sortedData } = useQuery(apps);

  return (
    <AutoCompleteBox name="Apps" handleChange={handleChange}>
      <ListApps sortedData={sortedData} />
    </AutoCompleteBox>
  );
};

export default Apps;
