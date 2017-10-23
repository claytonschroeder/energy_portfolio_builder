import React, {Component} from 'react';

class Awards extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {

    const awards = this.props.awards ? this.props.awards : null;

    return (
      <div className="awards profile-component">
        <h2>Awards</h2>
        <div className="portfolio-content">
          <ul>
            {
              awards.map((data, index) => {
                return (
                  <li key={index}>
                    <h3>{data.title}</h3>
                    <small>{data.date}</small>
                    <p>{data.detail}</p>
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
export default Awards;
