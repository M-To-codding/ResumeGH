import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';


import '../styles/App.css';
import Content from './Content';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>

          <Header />

          <Content />

          <Footer />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
