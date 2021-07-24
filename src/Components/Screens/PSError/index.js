import React from "react";
import ErrorMessage from "./component/ErrorMessage";
import { errors } from "./error";

const PSError = () => {

  return <ErrorMessage errors={errors} />;
};

export default PSError;
