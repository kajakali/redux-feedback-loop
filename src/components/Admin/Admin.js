import React, {Component} from 'react';
import { connect } from 'react-redux';
import FeedbackTable from '../FeedbackTable/FeedbackTable';


class Admin extends Component {


    render() {
      return (
        <>
        <h2>Admin Page</h2>
        <FeedbackTable list={this.props.reduxStore.adminReducer} button='delete'/> 
        </>
      )
    }
}

const putReduxStoreOnProps = (reduxStore) => ({
    reduxStore
})

export default connect(putReduxStoreOnProps)(Admin);