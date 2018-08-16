import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import { withRouter } from "react-router-dom";


const styles = theme => ({
    button: {
        display: 'block',
        marginTop: theme.spacing.unit * 2,
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    }
});

class ApiSelector extends React.Component {
  
    onChange = (event) => {
        this.props.history.push(`${event.target.value}`);
    }

    constructor(props) {
      super(props);
  
      this.state = {
        open: false,
      }
    }
        

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleClose = () => {
        this.setState({ open: false });
    }

    handleOpen = () => {
        this.setState({ open: true});
    }

    render() {
        const { classes} = this.props;
        return (
           <form autoComplete="off">
        
            <FormControl className={classes.formControl}>
            <InputLabel htmlFor="uncontrolled-native">Select an API</InputLabel>
            <NativeSelect input={<Input name="name" id="uncontrolled-native" />} onChange={this.onChange}>
                <option value=""></option>
                <option value="/imgur/1/Chien">Imgur Memes</option>
                <option value="/giphy/1/Chien">Giphy Gifs</option>
            </NativeSelect>
            </FormControl>
           </form>
        );
    }
}

ApiSelector.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(ApiSelector));