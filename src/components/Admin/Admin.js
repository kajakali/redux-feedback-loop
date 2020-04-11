import React, {Component} from 'react';
import { connect } from 'react-redux';



class Admin extends Component {


    render() {
      return (
        <>
        <h2>Admin Page</h2>
        {JSON.stringify(this.props.reduxStore)}
        </>
      )
    }
}

const putReduxStoreOnProps = ({
    reduxStore
})

export default connect(putReduxStoreOnProps)(Admin);