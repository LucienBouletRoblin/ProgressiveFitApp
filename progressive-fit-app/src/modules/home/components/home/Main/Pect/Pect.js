import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

class Pect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { gets } = this.props;

    return (
      <Grid container justify="space-between">
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12} sm={9}>
              <Typography variant="title">Pect:</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Pect;
