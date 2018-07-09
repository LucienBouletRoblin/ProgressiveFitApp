import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Form, Field } from "react-final-form";
import TextField from "modules/common/components/formComponents/TextInput";
import SubdirectoryArrow from "@material-ui/icons/SubdirectoryArrowRight";
import Add from "@material-ui/icons/AddCircle";
import Check from "@material-ui/icons/Check";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import moment from "moment";

const styles = theme => ({
  icon: {
    margin: theme.spacing.unit * 0.5
  }
});

const ConditionRepNotEmpty = ({ when, isNot, children }) => (
  <Field name={when} subscription={{ value: true }}>
    {({ input: { value } }) => (value !== isNot ? children : null)}
  </Field>
);

const RepMassField = ({ set }) => (
  <React.Fragment>
    <Grid item xs={4}>
      <Field
        name={`reps_${set}`}
        component={TextField}
        type="number"
        label="Reps"
      />
    </Grid>
    <Grid item xs={4}>
      <Field
        name={`mass_${set}`}
        component={TextField}
        type="number"
        label="Mass"
      />
    </Grid>
  </React.Fragment>
);

class Pect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sets: 1
    };
  }

  onSubmit = async values => {
    values.created_date = new Date();
    this.props.addExercise(values, this.props.selectedTrainingSet.id);
    this.props.closeActionButton();
  };

  handleAddSets = () => {
    this.setState({
      sets: this.state.sets + 1
    });
    console.log(this.state.sets);
  };

  componentDidMount() {
    this.props.exercise &&
      this.props.exercise.sets &&
      this.setState({
        sets: this.props.exercise.sets
      });
  }

  render() {
    const { exercise, selectedTrainingSet, classes } = this.props;
    const { sets } = this.state;
    return (
      <Grid container>
        <Grid item xs={12}>
          <Grid container direction="row" justify="space-between">
            <Grid item xs={6}>
              <Typography variant="title">{exercise.name}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subheading">
                {"" + moment(exercise && exercise.created_date).fromNow()}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        {[...Array(sets)].map((e, i) => (
          <Grid item xs={12} key={i}>
            <Form
              onSubmit={this.onSubmit}
              initialValues={{
                trainingSetId: selectedTrainingSet && selectedTrainingSet.id
              }}
              render={({ handleSubmit, submitting, invalid }) => (
                <form onSubmit={handleSubmit}>
                  <Grid
                    container
                    direction="row"
                    spacing={8}
                    alignItems="flex-end"
                  >
                    <ConditionRepNotEmpty when="reps_0" isNot="">
                      <ConditionRepNotEmpty when="mass_0" isNot="">
                        <Grid item xs={1}>
                          <Check color="primary" />
                        </Grid>
                      </ConditionRepNotEmpty>
                    </ConditionRepNotEmpty>
                    <RepMassField set={0} />
                    <Grid item xs={3}>
                      <Typography variant="caption">
                        {"at " +
                          moment(exercise && exercise.created_date).format(
                            "H:mm:ss"
                          )}
                      </Typography>
                    </Grid>
                  </Grid>
                  <ConditionRepNotEmpty when="reps_0" isNot="">
                    <Grid
                      container
                      direction="row"
                      spacing={24}
                      alignItems="flex-end"
                    >
                      <Grid item xs={2}>
                        <SubdirectoryArrow className={classes.icon} />
                      </Grid>
                      <RepMassField set={1} />
                    </Grid>
                  </ConditionRepNotEmpty>
                  <ConditionRepNotEmpty when="reps_1" isNot="">
                    <Grid
                      container
                      direction="row"
                      spacing={24}
                      alignItems="center"
                    >
                      <Grid item xs={2}>
                        <SubdirectoryArrow className={classes.icon} />
                      </Grid>
                      <RepMassField set={2} />
                    </Grid>
                  </ConditionRepNotEmpty>
                  <ConditionRepNotEmpty when="reps_2" isNot="">
                    <Grid
                      container
                      direction="row"
                      spacing={24}
                      alignItems="center"
                    >
                      <Grid item xs={2}>
                        <SubdirectoryArrow className={classes.icon} />
                      </Grid>
                      <RepMassField set={3} />
                    </Grid>
                  </ConditionRepNotEmpty>
                </form>
              )}
            />
          </Grid>
        ))}

        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <IconButton color="secondary" onClick={this.handleAddSets}>
              <Add style={{ fontSize: 36 }} />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Pect);
