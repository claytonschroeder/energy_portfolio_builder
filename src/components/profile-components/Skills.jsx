import React, {Component} from 'react';

class Skills extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {

    const skills = this.props.skills ? this.props.skills : null;

    return (
      <div className="skills profile-component">
        <h1>Skills</h1>
        <ul>
          {
            skills && skills.map((data, index) => {
              return (
                <li className={data.category.toLowerCase()} key={index}>{data.name}
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}
export default Skills;
