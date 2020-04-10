import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class NextButton extends Component {
    //requires next location to be passed down as props from parent
    // in the format '/feelings'
    handleClick = () => {
      console.log("You are headed to", this.props.nextLocation);
      ///CHANGE LOCATION???
      this.props.history.push(this.props.nextLocation);
    } 


    render() {
      return (
        <button onClick={this.handleClick}>Next</button>
      )
    }
}

export default withRouter(NextButton);