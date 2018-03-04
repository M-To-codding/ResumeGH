import React, {Component} from 'react';


class Footer extends Component {

  render() {

    return (
      <footer className="contacts">
        <div className="container contacts-content">
          <h5>If you want to contact me, fill and send contact form below</h5>
          <form className="contact-form">

            <div className="inputs">
              <label htmlFor="name">
                <input type="text" name="name" placeholder="Name" id="name"/>
              </label>
              <label htmlFor="email">
                <input type="email" name="email" placeholder="Email" id="email"/>
              </label>
            </div>
            <label htmlFor="message">
              <textarea id="message" placeholder="Message"/>
            </label>
            <input type="submit" className="btn" value="Send"/>

          </form>
        </div>
        <div className="copyright">
          ©copyright 2018
        </div>
      </footer>
    );
  }
}

export default Footer;
