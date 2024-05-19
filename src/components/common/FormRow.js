import React from "react";

const FormRow = ({ children, numberCol = "2" }) => {
  return (
    <div className={`grid grid-cols-${numberCol} gap-x-[45px]`}>{children}</div>
  );
};

export default FormRow;
