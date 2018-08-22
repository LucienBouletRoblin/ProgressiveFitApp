import React from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  textField: {
    width: "100%"
  }
});

const TextInput = ({
  input: { name, onChange, value },
  meta,
  inputProps,
  classes,
  ...rest
}) => (
  <TextField
    {...rest}
    name={name}
    helperText={meta.touched ? meta.error : undefined}
    error={meta.error && meta.touched}
    inputProps={inputProps}
    onChange={onChange}
    value={value}
    className={classes.textField}
  />
);

export default withStyles(styles)(TextInput);
