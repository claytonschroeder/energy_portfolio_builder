import React, {Component} from 'react';

class Education extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {

    const education = this.props.education ? this.props.education : null;

    return (
      <div className="education profile-component">
        <h1>Education</h1>
        <div className="education-content">
          <ul>
          {
            education && education.map((data, index) => {
              return (
                <li key={index}>
                  <div className="education-single">
                    <h3>{data.school}</h3>
                    <h4>{data.program}</h4>
                    <p className="education-date">{data.startDate} - {data.endDate}</p>
                    <p className="education-detail">{education.detail}</p>
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
export default Education;
