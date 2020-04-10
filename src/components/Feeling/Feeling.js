import React, { Component } from 'react';
import NextButton from '../NextButton/NextButton';

class Feeling extends Component {
  render() {
    return (
      <div className="App">
          <h1>feeling</h1>
          <NextButton nextLocation='understanding'/>
      </div>
    );
  }
}

export default Feeling;