import React, {Component} from 'react';

class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {

    const summary = this.props.summary ? this.props.summary : null;

    return (
      <div className="summary profile-component">
        <div className="section-title">
          <h2>Summary</h2>
        </div>
        <div className="section-content">
          <p>{summary.detail}</p>
        </div>
      </div>
    );
  }
}
export default Summary;
