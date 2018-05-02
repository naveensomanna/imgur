import React, { Component } from 'react';
import Home from './components/Home';
import Allbum from './components/Gallery/allbum/Allbum';
import {BrowserRouter as Router,Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div >

        <Router>
        <div>


<Route exact path="/" component={Home}></Route>
<Route exact path="/gallery/:id" component={Allbum}></Route>

        </div>

          </Router>

      </div>
    );
  }
}

export default App;
