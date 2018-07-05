import React from "react";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";

const SelectInput = ({
  input: { name, value, onChange, ...restInput },
  meta,
  label,
  formControlProps,
  ...rest
}) => {
  const showError = (meta.submitError || meta.error) && meta.touched;

  return (
    <FormControl
      {...formControlProps}
      error={showError}
      style={{
        minWidth: "100%"
      }}
    >
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Select
        {...rest}
        name={name}
        onChange={onChange}
        inputProps={restInput}
        value={value}
      />
      {showError && <FormHelperText>{meta.error}</FormHelperText>}
    </FormControl>
  );
};

export default SelectInput;
