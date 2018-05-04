import React, { Component } from 'react';
import Home from './components/Home';
import Allbum from './components/Gallery/allbum/Allbum';
import User from './components/user/User';

import {BrowserRouter as Router,Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div >

        <Router>
        <div>
<Route exact path="/" component={Home}></Route>
<Route path="/gallery/:id" component={Allbum}></Route>
<Route path="/user" component={User}></Route>

        </div>

          </Router>

      </div>
    );
  }
}

export default App;
