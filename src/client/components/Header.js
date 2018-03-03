import React, {Component} from 'react';
import images from './../data/images';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">

          <nav className="nav-menu -header">
            <div className="logo">
              <a href="#">
                <img src={images.logo} alt=""/>
              </a>
            </div>

            <ul className="menu-content">

              <li className="nav-item">
                <a href="#" id="content-anchor" className="anchor">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a href="#" id="contact-anchor" className="anchor">
                  Contact me
                </a>
              </li>

            </ul>
          </nav>

          <div className="header-caption">
            <div className="text-content">

              <h1 className="title">
                Lorem ipsum dolor sit amet
              </h1>

              <p className="subtitle">
                Lorem ipsum dolor sit amet
                Lorem ipsum dolor sit amet
                Lorem ipsum dolor sit amet
                Lorem ipsum dolor sit amet
              </p>

            </div>

            <div className="photo-content">
              <div className="photo">
                <img src={images.photo} alt=""/>
              </div>
            </div>

          </div>
        </div>
      </header>
    )
  }
}

export default Header;
