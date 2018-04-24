import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home';
import New from './components/New/New';
import Popular from './components/Popular/Popular';
const img='https://s.imgur.com/desktop-assets/desktop-assets/bg-home-2.f1df058d8494e2f402781cc93a7f4003.png';

class App extends Component {
  render() {
    return (
      <div style={{backgroundImage:`url(${img})`,height:'420px',backgroundSize:'cover'}}>
      <Header/>
        <div>
 <Home/>
 </div>
 
  
              </div>
    );
  }
}

export default App;
