import React from "react";
import Select from "@material-ui/core/Select";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  select: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
});

const SelectInput = ({
  input: { name, label, onChange, value, children, ...restInput },
  meta,
  classes,
  ...rest
}) => (
  <Select
    {...rest}
    name={name}
    error={meta.error && meta.touched}
    inputProps={restInput}
    onChange={onChange}
    value={value}
    className={classes.select}
    children={children}
    placeholder={label}
    floatinglabeltext={label}
  />
);

export default withStyles(styles)(SelectInput);
