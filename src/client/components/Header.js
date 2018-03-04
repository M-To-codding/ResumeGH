import React, {Component} from 'react';
import images from './../data/images';
import AnchorLink from 'react-anchor-link-smooth-scroll'


class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">

          <nav className="nav-menu -header">
            <div className="logo">
              <a href="/">
                <img src={images.logo} alt=""/>
              </a>
            </div>

            <ul className="menu-content">

              <li className="nav-item">
                <AnchorLink href="#content" id="content-anchor" className="anchor">
                  About
                </AnchorLink>
              </li>

              <li className="nav-item">
                <AnchorLink href="#contact" id="contact-anchor" className="anchor">
                  Contact me
                </AnchorLink>
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
