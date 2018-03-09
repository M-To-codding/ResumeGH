import React, {Component} from 'react';


class Resume extends Component {
  render() {
    return (
      <div className="resume">

        <p><b>Date of birth: </b>
        10.10.1995</p>
        <p><b>From: </b>
        Cherkasy</p>
        <br/>
        <hr/>
        <br/>

        <div>
          <p>
            <b><h3>Aducation</h3></b>
          </p>
          <p><b>Cherkasy State Technical University</b></p>
          <p>09.2015 - 06.2017</p>
          <p>Faculty of mechanical engineering and design</p>
          <br/>
          <p><b>Cherkasy Art Technical College</b></p>
          <p> 09.2011 - 02.2015 </p>
          <p>Advertising/design: text, graphic and figurative information processing</p>
        </div>
        <br/>
        <hr/>
        <br/>

        <div>
          <h3>Addition education</h3>
          <p>Fullstack-developer(java, angular2) (2016, 2 month)</p>
          <p>CMS-developer(wordpress) (2017 - 2 month)</p>
          <p>GeekHub-javascript (2017 - now)</p>
          <p>MOC-javascript(frontend) (2017 - now)</p>
          <p>Level up - english (2017)</p>
        </div>
        <br/>
        <hr/>
        <br/>

        <div>
          <h3>Work Experience</h3>
          <p><b>Consultant</b> in call centre Teleperformance(2013-2015), Cherkasy</p>
          <p><b>Books editor</b> in Cherkasy State Technical University(2016), Cherkasy</p>
          <p><b>Designer/frontend developer</b> in freelance(2016)</p>
          <p><b>Frontend developer</b>(2017), Cherkasy</p>
          <p><b>Frontend, CMS developer</b> (04.11.2017 - now), Cherkasy</p>
        </div>

      </div>
    );
  }
}

export default Resume;
