import React, { Component } from 'react';
import NextButton from '../NextButton/NextButton';

class Home extends Component {
  render() {
    return (
      <div className="App">
          <h1>Home</h1>
          <NextButton nextLocation='feeling'/>
      </div>
    );
  }
}

export default Home;