import React from "react";
import {Pagination} from "test-vendor-2";

const PaginationExample = () => {
  return (
    <div>
      <Pagination defaultCurrent={1} total={50} pageSize={8} />
    </div>
  );
};
export default PaginationExample;
