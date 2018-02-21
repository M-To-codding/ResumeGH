import React, {Component} from 'react';


class Skills extends Component {

  constructor(props){
    super(props);

    this.skills = ['skill1', 'skill2'];
  }


  render() {

    const skillsList = this.skills.map((skill, index) =>
      <li key={index} id={index}>
        {skill}
      </li>
    );

    return (
      <div className="skills">
        <ul>
          <li className="skill-item">
            {skillsList}
          </li>
        </ul>
      </div>
    );
  }
}

export default Skills;
