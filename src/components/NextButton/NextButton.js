import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

//TODO material-ui this button

class NextButton extends Component {
    //requires next location to be passed down as props from parent
    // in the format '/feelings', and the response to the previous page to be
    //passed along using response
    handleClick = () => {
      console.log("You are headed to", this.props.nextLocation);
        if(!this.props.response){
            alert('Response Required!');
            return false
        }
        if(this.props.response === 'submit'){
            console.log('submitting your feedback!');
            //TODO actually send the stuff from the reducer to the database
            //TODO actually clear the reducer...
            this.props.dispatch({ type: 'CLEAR_FEEDBACK'});  
 
        }

        if(this.props.page === 'feeling' ){
          console.log("sending this feeling to the reducer",this.props.response);
          this.props.dispatch({ type: 'ADD_FEEDBACK', payload: {feeling : this.props.response}});  
        }
        if(this.props.page === 'understanding'){
            console.log('sending the understanding level', this.props.response);
            this.props.dispatch({ type: 'ADD_FEEDBACK', payload: {understanding : this.props.response}});
        }
        if(this.props.page === 'support'){
            console.log('sending the support level', this.props.response);
            this.props.dispatch({ type: 'ADD_FEEDBACK', payload: {support : this.props.response}});
        }
        if(this.props.page === 'comments'){
            console.log('sending the comment', this.props.response);
            this.props.dispatch({ type: 'ADD_FEEDBACK', payload: {comment : this.props.response}});
        }


      this.props.history.push(this.props.nextLocation);
    } 


    render() {
      return (
        <button onClick={this.handleClick}>Next</button>
      )
    }
}

export default connect()(withRouter(NextButton));