import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Form, Field } from "react-final-form";
import arrayMutators from "final-form-arrays";
import { FieldArray } from "react-final-form-arrays";
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

const initial = {
  sets: [
    { reps: 1, mass: 1, subsets: [{ reps: 3, mass: 3 }, { reps: 3, mass: 3 }] },
    { reps: 3, mass: 3 }
  ]
};

const ConditionRepNotEmpty = ({ when, isNot, children }) => (
  <Field name={when} subscription={{ value: true }}>
    {({ input: { value } }) => (value !== isNot ? children : null)}
  </Field>
);

class Pect extends React.Component {
  onSubmit = async values => {
    values.created_date = new Date();
    this.props.addExercise(values, this.props.selectedTrainingSet.id);
    this.props.closeActionButton();
  };

  componentDidMount() {
    this.props.exercise &&
      this.props.exercise.sets &&
      this.setState({
        sets: this.props.exercise.sets
      });
  }

  render() {
    const { exercise, classes } = this.props;
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
        <Form
          onSubmit={this.onSubmit}
          mutators={{
            ...arrayMutators
          }}
          initialValues={initial}
          render={({ handleSubmit, mutators: { push } }) => {
            return (
              <form onSubmit={handleSubmit}>
                <FieldArray name="sets">
                  {({ fields }) =>
                    fields.map((set, index) => (
                      <div key={set}>
                        <Grid container direction="row" alignItems="center">
                          <ConditionRepNotEmpty when={`${set}.reps`} isNot="">
                            <ConditionRepNotEmpty when={`${set}.mass`} isNot="">
                              <Grid item xs={1}>
                                <Check color="primary" />
                              </Grid>
                            </ConditionRepNotEmpty>
                          </ConditionRepNotEmpty>
                          <Grid item xs={4}>
                            <Field
                              name={`${set}.reps`}
                              component={TextField}
                              type="number"
                              label="Reps"
                              inputProps={{ min: 0 }}
                            />
                          </Grid>
                          <Grid item xs={4}>
                            <Field
                              name={`${set}.mass`}
                              component={TextField}
                              type="number"
                              label="Mass"
                              inputProps={{ min: 0 }}
                            />
                          </Grid>
                          <ConditionRepNotEmpty when={`${set}.reps`} isNot="">
                            <ConditionRepNotEmpty when={`${set}.mass`} isNot="">
                              <Grid item xs={2}>
                                <IconButton
                                  onClick={() => {
                                    push(`${set}.subsets`, undefined);
                                  }}
                                >
                                  <Add />
                                </IconButton>
                              </Grid>
                            </ConditionRepNotEmpty>
                          </ConditionRepNotEmpty>
                        </Grid>
                        <FieldArray name={`${set}.subsets`}>
                          {({ fields }) =>
                            fields.map((subset, index) => (
                              <div key={subset}>
                                <Grid container direction="row">
                                  <Grid item xs={2}>
                                    <SubdirectoryArrow
                                      className={classes.icon}
                                    />
                                  </Grid>

                                  <Grid item xs={4}>
                                    <Field
                                      name={`${subset}.reps`}
                                      component={TextField}
                                      type="number"
                                      label="Reps"
                                      inputProps={{ min: 0 }}
                                    />
                                  </Grid>
                                  <Grid item xs={4}>
                                    <Field
                                      name={`${subset}.mass`}
                                      component={TextField}
                                      type="number"
                                      label="Mass"
                                      inputProps={{ min: 0 }}
                                    />
                                  </Grid>
                                  <ConditionRepNotEmpty
                                    when={`${subset}.reps`}
                                    isNot=""
                                  >
                                    <ConditionRepNotEmpty
                                      when={`${subset}.mass`}
                                      isNot=""
                                    >
                                      <Grid item xs={1}>
                                        <Check color="primary" />
                                      </Grid>
                                    </ConditionRepNotEmpty>
                                  </ConditionRepNotEmpty>
                                </Grid>
                              </div>
                            ))
                          }
                        </FieldArray>
                      </div>
                    ))
                  }
                </FieldArray>
                <Grid container direction="column" alignItems="center">
                  <Grid item xs={12}>
                    <IconButton
                      color="secondary"
                      onClick={() => {
                        push("sets", undefined);
                      }}
                    >
                      <Add style={{ fontSize: 36 }} />
                    </IconButton>
                  </Grid>
                </Grid>
              </form>
            );
          }}
        />
      </Grid>
    );
  }
}

export default withStyles(styles)(Pect);
