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
        <Form
          onSubmit={this.onSubmit}
          mutators={{
            ...arrayMutators
          }}
          render={({
            handleSubmit,
            mutators: { push, pop }, // injected from final-form-arrays above
            pristine,
            reset,
            submitting,
            values
          }) => {
            return (
              <form onSubmit={handleSubmit}>
                <FieldArray name="sets">
                  {({ fields }) =>
                    fields.map((set, index) => (
                      <div key={set}>
                        <FieldArray name={`${set}_subsets`}>
                          {({ fields }) =>
                            fields.map((subset, index) => (
                              <div key={subset}>
                                <Grid item xs={4}>
                                  <Field
                                    name={`reps_${subset}`}
                                    component={TextField}
                                    type="number"
                                    label="Reps"
                                  />
                                </Grid>
                                <Grid item xs={4}>
                                  <Field
                                    name={`mass_${subset}`}
                                    component={TextField}
                                    type="number"
                                    label="Mass"
                                    onChange={() => fields.push(index)}
                                  />
                                </Grid>
                                <FieldArray name={`${set}_${subset}_superset`}>
                                  {({ fields }) =>
                                    fields.map((superset, index) => (
                                      <div key={superset}>
                                        <Grid item xs={4}>
                                          <Field
                                            name={`reps_${superset}`}
                                            component={TextField}
                                            type="number"
                                            label="Reps"
                                          />
                                        </Grid>
                                        <Grid item xs={4}>
                                          <Field
                                            name={`mass_${superset}`}
                                            component={TextField}
                                            type="number"
                                            label="Mass"
                                            onBlur={() => fields.push(index)}
                                          />
                                        </Grid>
                                      </div>
                                    ))
                                  }
                                </FieldArray>
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
                      onClick={() => push("sets", undefined)}
                    >
                      ><Add style={{ fontSize: 36 }} />
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
