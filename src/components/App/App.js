import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Home from '../Home/Home';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import { HashRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {

  
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
            <Link to="/">Feeling</Link>
            </li>
            <li>
            <Link to="/">Understanding</Link>
            </li>
            <li>
            <Link to="/">Support</Link>
            </li>
            <li>
            <Link to="/">Comments</Link>
            </li>
          </ul>
          <Route exact path="/" component={Home} />
          <Route path="/feeling" component={Feeling} />
          <Route path="/understanding" component={Understanding} />
          <Route path="/support" component={Support} />
          <Route path="/comments" component={Comments} />
        </Router>


      </div>
    );
  }
}

export default App;
