import React, {Component} from 'react';


class About extends Component {

  render() {

    return (
      <div>
        <p>
          I am programmer. Now i learn javascript on Geekhub course.
        </p>
        <br/>
        <div><b>Technologies that i use in my projects:</b>
          <ul>
            <li>
              javascript: <em>react-js, redux, angular 5, webpack, nodejs, express</em>
            </li>
            <li>
              web codding: <em>pure javascript, php, wordpress, gulp, html5/css3(flex, bootstrap 3/4, scss)</em>
            </li>
            <li>
              databases: <em>mysql, mongodb(library for js - mongoose)</em>
            </li>
            <li>
              VCS: <em>git</em>
            </li>
            <li>
              OS: <em>linux(ubuntu), windows</em>
            </li>
          </ul>
        </div>
        <br/>
        <p>Except programming i like create design, draw, ride a bicycle, travelling, play friesby, play on guitar.
          <br/>
          Interested in physics, mechanics, modern technologies, medicine, psychology.</p>
      </div>
    );
  }
}

export default About;
