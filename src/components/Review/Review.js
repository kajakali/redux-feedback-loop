import React, { Component } from 'react';
import NextButton from '../NextButton/NextButton';
import { connect } from 'react-redux';


//TODO material ui table these results
//use material ui button


class Review extends Component {


  render() {
    return (
      <div>
          <h1>Review your feedback</h1>
          <p>here is the information from the reducer</p>
          {JSON.stringify(this.props.reduxStore)}
          
          <NextButton nextLocation='home' response='submit' />
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxStore) => ({
    reduxStore
})

export default connect(putReduxStateOnProps)(Review);