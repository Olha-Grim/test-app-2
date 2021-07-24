import { useState } from "react";

const useQuery = (array) => {
  const [query, setQuery] = useState();
  const data = array;

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const newData = data?.filter(
    (option) => option?.name.toUpperCase().indexOf(query?.toUpperCase()) !== -1
  );

  const sortedData = newData.length === 0 ? data : newData;

  return {
    handleChange,
    query,
    sortedData,
  };
};
export default useQuery;
