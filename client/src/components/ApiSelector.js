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
import * as IchingTable from '../constants/lookup.js';


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

var options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' }
  ]

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

    // searchImgur {
    //     this.props.history.push(`/imgur/${hex.number}/${hex.name}` );

    // searchGiphy {
    //     this.props.history.push(`/giphy/${hex.number}/${hex.name}` );

    // }
        

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
        let hexNumber = Number( this.props.match.params.number );
    let hex  = IchingTable.getHexagram( hexNumber );
        return (
           <form autoComplete="off">
        
            <FormControl className={classes.formControl}>
            <InputLabel htmlFor="uncontrolled-native">Select an API</InputLabel>
            <NativeSelect input={<Input name="name" id="uncontrolled-native" />} onChange={this.onChange}>
                <option value=""></option>
                <option value={`/imgur/${hex.number}/${hex.name}`}>Imgur Memes</option>
                <option value={`/giphy/${hex.number}/${hex.name}`}>Giphy Gifs</option>
                <option value={`/twitter/${hex.number}/${hex.name}`}>Twitter Tweets</option>
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