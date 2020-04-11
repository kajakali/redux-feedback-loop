import React, { Component } from 'react';
import NextButton from '../NextButton/NextButton';
import InputField from'../InputField/InputField';


class Feeling extends Component {
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
          <h1>How Good Are You Feeling Today?</h1>

          <InputField     
            type="number"        
            value={this.state.current}
            onChange={this.handleChange}
            label="I am feeling a..."
            placeholder="I am feeling a ..."/>

            <NextButton nextLocation='understanding' page='feeling' response={this.state.current} />
      </div>
    );
  }
}

export default Feeling;