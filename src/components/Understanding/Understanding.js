import React, { Component } from 'react';
import NextButton from '../NextButton/NextButton';

class Understanding extends Component {
  render() {
    return (
      <div className="App">
          <h1>Understanding</h1>
          <NextButton nextLocation='support'/>
      </div>
    );
  }
}

export default Understanding;