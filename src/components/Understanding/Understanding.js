import React, { Component } from 'react';
import NextButton from '../NextButton/NextButton';
import InputField from '../InputField/InputField';

class Understanding extends Component {

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
          <h1>How Well Are You Understanding The Content?</h1>
          <InputField             
            value={this.state.current}
            onChange={this.handleChange}
            label="My understanding is at a ..."
            placeholder="My understanding is at a..."/>

          <NextButton nextLocation='support' page="understanding" response={this.state.current}/>
      </div>
    );
  }
}

export default Understanding;