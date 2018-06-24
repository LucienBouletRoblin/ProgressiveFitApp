import React from "react";
import Select from "react-select";

const ReactSelect = ({ input, ...rest }) => (
  <Select {...input} {...rest} searchable />
);

export default ReactSelect;
