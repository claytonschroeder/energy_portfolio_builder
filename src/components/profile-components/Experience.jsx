import React, {Component} from 'react';

class Experience extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {

  const experience = this.props.experience ? this.props.experience : null;


    return (
      <div className="experience profile-component">
        <h1>Experience</h1>
        <div className="experience-content">
          <ul>
          {
            experience && experience.map((data, index) => {
              return (
                <li key={index}>
                  <div className="experience-single">
                    <h3>{data.title}</h3>
                    <h4>{data.company}</h4>
                    <p className="experience-date">{data.startDate} - {data.endDate}</p>
                    <p className="experience-detail">{data.detail}</p>
                  </div>
                </li>
              )
            })
          }
          </ul>
        </div>
      </div>
    );
  }
}
export default Experience;
