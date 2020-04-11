import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import axios from 'axios';
import Button from '@material-ui/core/Button';

//TODO material-ui this button
const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },

  });

class NextButton extends Component {

    fillAdminReducer = () => {
        axios.get('/admin').then( response => {
            this.props.dispatch({
                type: 'GET_ADMIN', payload: response.data
            })
        }).catch( error => {
            console.log('error getting feedback list', error)
        });
    }


    //requires next location to be passed down as props from parent
    // in the format '/feelings', and the response to the previous page to be
    //passed along using response
    handleClick = () => {
        //prevent blank responses on all pages but the comments page
        if(!(this.props.page === 'comments') && !this.props.response){
            alert('Response Required!');
            return false
        }
        //submit the feedback to the database
        if(this.props.response === 'submit'){
            console.log('submitting your feedback!', this.props.reduxStore.feedbackReducer);
            //send the stuff from the reducer to the database
            axios.post('/feedback', this.props.reduxStore.feedbackReducer).then(response => {
                //fill the admin reducer again since there's now new feedback
                this.fillAdminReducer()
                //clear the feedback reducer
                this.props.dispatch({ type: 'CLEAR_FEEDBACK'}); 
            }).catch( error => {
                console.log('unable to send feedback to database', error);
            })
 
 
 
        }
        //put the feeling in the reducer
        if(this.props.page === 'feeling' ){
          console.log("sending this feeling to the reducer",this.props.response);
          this.props.dispatch({ type: 'ADD_FEEDBACK', payload: {feeling : this.props.response}});  
        }
        //put the understanding in the reducer
        if(this.props.page === 'understanding'){
            console.log('sending the understanding level', this.props.response);
            this.props.dispatch({ type: 'ADD_FEEDBACK', payload: {understanding : this.props.response}});
        }
        //put the support in the reducer
        if(this.props.page === 'support'){
            console.log('sending the support level', this.props.response);
            this.props.dispatch({ type: 'ADD_FEEDBACK', payload: {support : this.props.response}});
        }
        //put the comment in the reducer
        if(this.props.page === 'comments'){
            console.log('sending the comment', this.props.response);
            this.props.dispatch({ type: 'ADD_FEEDBACK', payload: {comments : this.props.response}});
        }

      console.log("You are headed to", this.props.nextLocation);
      this.props.history.push(this.props.nextLocation);
    } 



    render() {
        const classes = this.props.classes;
      return (
          <>
          {/* JSON.stringify(this.props.reduxStore) */}
        <Button 
            variant="contained"
            color="secondary"
            onClick={this.handleClick}>Next</Button>
        </>
      )
    }
}

const putReduxStoreOnProps = (reduxStore) => ({
    reduxStore
})

export default withStyles(styles)(connect(putReduxStoreOnProps)(withRouter(NextButton)));