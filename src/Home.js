import React, {Component} from 'react';
import './App.css';

class Home extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="logo">
          </div>

          <nav>
            <ul>
              <li>
                <a href="#" id="content-anchor" className="anchor">
                  About
                </a>
              </li>
              <li>
                <a href="#" id="contact-anchor" className="anchor">
                  Contact me
                </a>
              </li>
            </ul>
          </nav>

          <div className="header-caption">
            <div className="text-content">
              <h1>
                Lorem ipsum dolor sit amet
              </h1>

              <p>
                Lorem ipsum dolor sit amet
                Lorem ipsum dolor sit amet
                Lorem ipsum dolor sit amet
                Lorem ipsum dolor sit amet
              </p>
            </div>

            <div className="photo-content">
              <div className="photo">
                <img src="" alt=""/>
              </div>
            </div>
          </div>
        </header>

        <main>
          <nav className="content-menu">
            <ul>
              <li>
                <a>
                  Skills
                </a>
              </li>
              <li>
                <a>
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          content
        </main>

        <footer>
          form
        </footer>
      </div>
    );
  }
}

export default Home;
