import React, {Component} from 'react';
import skillsList from './../data/skillsList.json';


class Skills extends Component {

  constructor(props) {
    super(props);

    this.skills = skillsList.skills;
  }


  render() {

    const skillsList = this.skills.map((skill, index) =>
      <li key={index} id={index} className="skill-item">
        <div><p>{skill.name}</p></div>
        {/*<p>{skill.description}</p>*/}
      </li>
    );

    return (
      <div className="skills">
        <ul>
            {skillsList}
        </ul>
      </div>
    );
  }
}

export default Skills;

