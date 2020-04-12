import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
});

class InputField extends Component {


  render() {
      const classes = this.props.classes;
    return (
          <TextField 
            type={this.props.type}
            label={this.props.label}
            placeholder={this.props.placeholder}
            required
            className={classes.textField}
            onChange={this.props.onChange}
            value={this.props.value}
          />

    );
  }
}

export default withStyles(styles)(InputField);