import React, {Component} from 'react';
import {Router, Route} from 'react-router';
import {Link} from 'react-router-dom';
import Skills from './Skills';
import Resume from './Resume';
import Title from './Title';


class Content extends Component {
  render() {
    return (
        <main className="main-info">

          <Route component={Title} />

          <nav className="content-menu">

            <ul>
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
              path="/skills"
              component={Skills}
            />
            <Route
              path="/resume"
              component={Resume}
            />

          </section>
        </main>
    );
  }
}

export default Content;
