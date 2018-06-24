import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Set from "./Set";
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
  componentDidMount() {
    if (
      this.props.selectedTrainingSet === "undefined" &&
      this.props.trainingSet &&
      this.props.trainingSet[0]
    ) {
      this.props.selectTrainingSet(this.props.trainingSet[0]);
    }
  }

  render() {
    const { classes, selectedTrainingSet } = this.props;

    return (
      <React.Fragment>
        <Grid container>
          {selectedTrainingSet.exercises
            ? selectedTrainingSet.exercises.map(exercise => {
                return (
                  <Grid item xs={12} sm={6} key={exercise.uid}>
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
        </Grid>
        <ActionButton />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Main);
