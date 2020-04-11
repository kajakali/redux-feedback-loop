import React, { Component } from 'react';
import NextButton from '../NextButton/NextButton';

class Home extends Component {
  render() {
    return (
      <div className="App">
          <h1>Start a New Survey</h1>
          <NextButton nextLocation='feeling' response='begin'/>
      </div>
    );
  }
}

export default Home;