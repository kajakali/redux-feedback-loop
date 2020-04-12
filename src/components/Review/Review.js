import React, { Component } from 'react';
import { connect } from 'react-redux';
import FeedbackTable from '../FeedbackTable/FeedbackTable';
import NextButton from '../NextButton/NextButton';



class Review extends Component {


  render() {
    return (
      <div>
          <h1>Review your feedback</h1>
          <FeedbackTable list={[this.props.reduxStore.feedbackReducer]} button='edit'/> 
          <NextButton nextLocation='success' response='submit' />
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxStore) => ({
    reduxStore
})

export default connect(putReduxStateOnProps)(Review);