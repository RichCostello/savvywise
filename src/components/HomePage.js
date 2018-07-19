import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
      width: '90%',
    },
    button: {
      marginTop: theme.spacing.unit,
      marginRight: theme.spacing.unit,
    },
    actionsContainer: {
      marginBottom: theme.spacing.unit * 2,
    },
    resetContainer: {
      padding: theme.spacing.unit * 3,
    },
  });

  function getSteps() {
    return ['Click on any Hexagram', 'Detail Page', 'Search Portal'];
  }
  
  function getStepContent(step) {
    switch (step) {
      case 0:
        return `Select a Hexagram from the list on the right and click on it to go to the detail page. Toggle the Reverse Hexes or Random Hexes button to re-arrange the order`;
      case 1:
        return 'This Page give you details on the meanings of each Hexagram. Click on the Orange button on the top right to go to the Search Portal Page.';
      case 2:
        return `This page extracts keywords from the Details page and queries them on the Imgur API.  Click on a Label tag for each
        key word which returns meme content from Imgur.  Click on an image to get a close up of it. Click the orange Back button to return back to the details page.`;
      default:
        return 'Unknown step';
    }
  }

class HomePage extends React.Component {
   
    state = {
        activeStep: 0,
      };

      handleNext = () => {
        this.setState(state => ({
          activeStep: state.activeStep + 1,
        }));
      };
    
      handleBack = () => {
        this.setState(state => ({
          activeStep: state.activeStep - 1,
        }));
      };
    
      handleReset = () => {
        this.setState({
          activeStep: 0,
        });
      };
    
      render() {
        const { classes } = this.props;
        const steps = getSteps();
        const { activeStep } = this.state;
    
        return (
          <div className={classes.root}>
          <h1>How it works</h1>
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((label, index) => {
                return (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                    <StepContent>
                      <Typography>{getStepContent(index)}</Typography>
                      <div className={classes.actionsContainer}>
                        <div>
                          <Button
                            disabled={activeStep === 0}
                            onClick={this.handleBack}
                            className={classes.button}
                          >
                            Back
                          </Button>
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={this.handleNext}
                            className={classes.button}
                          >
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                          </Button>
                        </div>
                      </div>
                    </StepContent>
                  </Step>
                );
              })}
            </Stepper>
            {activeStep === steps.length && (
              <Paper square elevation={0} className={classes.resetContainer}>
                <Typography>All steps completed - you&quot;re finished</Typography>
                <Button onClick={this.handleReset} className={classes.button}>
                  Reset
                </Button>
              </Paper>
             
            )}
          </div>
        );
      }
}

HomePage.propTypes = {
    classes: PropTypes.object,
  };

export default withStyles(styles)(HomePage);