import React, { Component } from 'react';
import NextButton from '../NextButton/NextButton';

class Support extends Component {
  render() {
    return (
      <div className="App">
          <h1>Support</h1>
          <NextButton nextLocation='comments'/>
      </div>
    );
  }
}

export default Support;