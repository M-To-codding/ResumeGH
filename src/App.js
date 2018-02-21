import React, {Component} from 'react';
import {Router, Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';

import './App.css';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
  }
}

export default App;
