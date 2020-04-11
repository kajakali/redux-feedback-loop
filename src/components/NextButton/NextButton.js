import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

//TODO material-ui this button

class NextButton extends Component {
    //requires next location to be passed down as props from parent
    // in the format '/feelings', and the response to the previous page to be
    //passed along using response
    handleClick = () => {
        //prevent blank responses
        if(!this.props.response){
            alert('Response Required!');
            return false
        }
        //submit the feedback to the database
        if(this.props.response === 'submit'){
            console.log('submitting your feedback!', this.props.reduxStore);
            //TODO actually send the stuff from the reducer to the database
            axios.post('/feedback', this.props.reduxStore).then(response => {
                //TODO here's where you'd fill out the admin reducer again
                //clear the feedback reducer
                this.props.dispatch({ type: 'CLEAR_FEEDBACK'}); 
            }).catch( error => {
                console.log('unable to send feedback to database', error);
            })
            //clear the reducer...
 
 
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
            this.props.dispatch({ type: 'ADD_FEEDBACK', payload: {comment : this.props.response}});
        }

      console.log("You are headed to", this.props.nextLocation);
      this.props.history.push(this.props.nextLocation);
    } 


    render() {
      return (
          <>
          {JSON.stringify(this.props.reduxStore)}
        <button onClick={this.handleClick}>Next</button>
        </>
      )
    }
}

const putReduxStoreOnProps = (reduxStore) => ({
    reduxStore
})

export default connect(putReduxStoreOnProps)(withRouter(NextButton));