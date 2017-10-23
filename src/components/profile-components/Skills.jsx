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
        <h2>Skills</h2>
        <ul>
          {
            skills && skills.map((data, index) => {
              return (
                <li className={data.category.toLowerCase()} key={index}>
                  <h3>{data.name}</h3>
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
