import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Home from '../Home/Home';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Success from '../Success/Success';
import Admin from '../Admin/Admin';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {

  componentDidMount(){
    this.fillAdminReducer();
  }
  fillAdminReducer = () => {
    axios.get('/feedback').then( response => {
        this.props.dispatch({
            type: 'GET_ADMIN', payload: response.data
        })
    }).catch( error => {
        console.log('error getting feedback list', error)
    });
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        <Router>
          <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/feeling">Feeling</Link>
            </li>
            <li>
            <Link to="/understanding">Understanding</Link>
            </li>
            <li>
            <Link to="/support">Support</Link>
            </li>
            <li>
            <Link to="/comments">Comments</Link>
            </li>
            <li>
            <Link to="/review">Review</Link>
            </li>
            <li>
            <Link to="/success">Success</Link>
            </li>
            <li>
            <Link to="/admin">Admin</Link>
            </li>
          </ul>
          <Route exact path="/" component={Home} />
          <Route path="/feeling" component={Feeling} />
          <Route path="/understanding" component={Understanding} />
          <Route path="/support" component={Support} />
          <Route path="/comments" component={Comments} />
          <Route path="/review" component={Review} />
          <Route path="/success" component={Success} />
          <Route path="/admin" component={Admin} />
        </Router>


      </div>
    );
  }
}

const putReduxStoreOnProps = (reduxStore) => ({
  reduxStore
})
export default connect(putReduxStoreOnProps)(App);
