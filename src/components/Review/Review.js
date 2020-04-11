import React, { Component } from 'react';
import NextButton from '../NextButton/NextButton';
import { connect } from 'react-redux';




class Review extends Component {

  state = {
    current: ''
}

  handleChange = (event) => {
    this.setState({
        current: event.target.value
    });
    console.log('change', this.state.current);
 
}
  render() {
    return (
      <div>
          <h1>Review your feedback</h1>
          {/**display json of the feedback reducer here */}
          
          <NextButton nextLocation='home' page='review' response={this.state.current} />
      </div>
    );
  }
}

export default connect()(Review);