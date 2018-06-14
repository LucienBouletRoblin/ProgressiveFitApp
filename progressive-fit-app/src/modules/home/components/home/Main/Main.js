import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Pect from "./Pect";
import { withStyles } from "@material-ui/core/styles";
import ActionButton from "../ActionButton";

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3
  })
});

class Main extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.root} elevation={4}>
              <Grid container alignItems="center" direction="column">
                <Grid item>
                  <Pect />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        <ActionButton />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Main);
