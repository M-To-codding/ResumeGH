import React, {Component} from 'react';


class Footer extends Component {

  handleForm(event) {

    event.preventDefault();

    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      msg: event.target.message.value
    }
    console.log(data);

    fetch('/submit', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }, function () {
      console.log(data);
    })

    event.target.name.value = '';
    event.target.email.value = '';
    event.target.message.value = '';

  }

  render() {

    return (
      <footer className="contacts" id="contact">
        <div className="container contacts-content">
          <h5>If you want to contact me, fill and send contact form below</h5>
          <form className="contact-form" onSubmit={this.handleForm}>

            <div className="inputs">
              <label htmlFor="name">
                <input type="text" name="name" placeholder="Name" id="name" required/>
              </label>
              <label htmlFor="email">
                <input type="email" name="email" placeholder="Email" id="email" required/>
              </label>
            </div>
            <label htmlFor="message">
              <textarea id="message" placeholder="Message" required/>
            </label>
            <input type="submit" className="btn" value="Send"/>

          </form>
        </div>
        <div className="copyright">
          ©Copyright 2018
        </div>
      </footer>
    );
  }
}

export default Footer;
