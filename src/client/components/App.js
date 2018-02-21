import React, {Component} from 'react';
import {Router, Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import Skills from './Skills';
import Resume from './Resume';


import '../styles/App.css';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Home/>

          <Route
            path="/skills"
            component={Skills}
          />
          <Route
            path="/resume"
            component={Resume}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
