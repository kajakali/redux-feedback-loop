import React, { Component } from 'react';
import NextButton from '../NextButton/NextButton';
import InputField from'../InputField/InputField';




class Comments extends Component {

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
          <h1>Any Comments?</h1>
          <InputField 
            type="text"            
            value={this.state.current}
            onChange={this.handleChange}
            label="My Comment is..."
            placeholder="My Comment is..."/>
          <NextButton nextLocation='review' page='comments' response={this.state.current} />
      </div>
    );
  }
}

export default Comments;