import React, { Component } from 'react';
import NextButton from '../NextButton/NextButton';

class Home extends Component {
  render() {
    return (
      <div className="App">
          <h1>Home</h1>
          <NextButton nextLocation='feeling' response='hi'/>
      </div>
    );
  }
}

export default Home;