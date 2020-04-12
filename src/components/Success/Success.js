import React, { Component } from 'react';
import NextButton from '../NextButton/NextButton';
import { connect } from 'react-redux';

class Success extends Component {

  render() {
    return (
      <div>
          <h1>Successful Submission!</h1>
          <NextButton nextLocation='/' response='success' />
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxStore) => ({
    reduxStore
})

export default connect(putReduxStateOnProps)(Success);