import React from "react";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";

class Navbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Hidden xsDown>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item>
              <Typography variant="title" color="inherit">
                ProgressiveFitApp
              </Typography>
            </Grid>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item>
                <Typography variant="subheading" color="inherit">
                  Keep track of your training session!
                </Typography>
              </Grid>
            </Grid>{" "}
          </Grid>
        </Hidden>
      </React.Fragment>
    );
  }
}

export default Navbar;
