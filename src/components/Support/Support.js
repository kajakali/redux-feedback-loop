import React, { Component } from 'react';
import NextButton from '../NextButton/NextButton';
import InputField from'../InputField/InputField';




class Support extends Component {
  
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
          <h1>How Well Are You Being Supported?</h1>
          <InputField           
            type="number"  
            value={this.state.current}
            onChange={this.handleChange}
            label="My Current Support is a ..."
            placeholder="My Current Support is a ..."/>
          <NextButton nextLocation='comments' page='support' response={this.state.current} />
      </div>
    );
  }
}

export default Support;