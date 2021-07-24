import React from "react";
import { PageHeader } from "test-vendor-2";

const PageHeaderExample = () => {
  return (
    <div>
      <PageHeader
        className="site-page-header"
        onBack={() => null}
        title="Title"
        subTitle="This is a subtitle"
      />
    </div>
  );
};

export default PageHeaderExample;
