import React, {Component} from 'react';
import {Route} from 'react-router';
import {Link} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';


import Skills from './Skills';
import Resume from './Resume';
import Title from './Title';
import Greeting from './Greeting';
import routing from './../reducers/routing';


class Content extends Component {
  render() {

    const store = createStore(routing);

    return (

     <Provider store={store}>
        <BrowserRouter>
          <main className="main-info" id="content">

            <Route component={Title}/>

            <nav className="content-menu">

              <ul>
                <li>
                  <Link to="/">
                    Greeting
                  </Link>
                </li>
                <li>
                  <Link to="/skills">
                    Skills
                  </Link>
                </li>
                <li>
                  <Link to="/resume">
                    Resume
                  </Link>
                </li>
              </ul>

            </nav>

            <section className="content">

              <Route
                exact
                path="/"
                component={Greeting}
              />
              <Route
                path="/skills"
                component={Skills}
              />
              <Route
                path="/resume"
                component={Resume}
              />

            </section>
          </main>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Content;
