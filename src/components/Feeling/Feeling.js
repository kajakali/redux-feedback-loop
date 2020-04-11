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
          <h1>How Are You Feeling Today?</h1>

          <InputField             
            value={this.state.current}
            onChange={this.handleChange}
            label="I feel..."
            placeholder="I feel..."/>

            <NextButton nextLocation='understanding' page='feeling' response={this.state.current} />
      </div>
    );
  }
}

export default Feeling;