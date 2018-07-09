import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Set from "./Set";
import { withStyles } from "@material-ui/core/styles";
import AddExercise from "../AddExercise";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3
  })
});

class Main extends React.Component {
  render() {
    const { classes, selectedTrainingSet, exercises } = this.props;

    return (
      <React.Fragment>
        <Grid container direction="row">
          {selectedTrainingSet && (
            <Grid item xs={12} sm={9}>
              <Typography variant="title">
                {selectedTrainingSet.name}:
              </Typography>
            </Grid>
          )}
          {selectedTrainingSet && exercises
            ? exercises.map(exercise => {
                return (
                  <Grid item xs={12} key={exercise.uid}>
                    <Paper className={classes.root} elevation={4}>
                      <Grid container alignItems="center" direction="column">
                        <Grid item>
                          <Set
                            exercise={exercise}
                            selectedTrainingSet={selectedTrainingSet}
                          />
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                );
              })
            : null}
          <Grid item xs={12}>
            <Grid container justify="center">
              <Grid item>
                <AddExercise />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Main);
