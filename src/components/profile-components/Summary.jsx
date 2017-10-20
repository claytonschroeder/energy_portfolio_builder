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
          <h1>Summary</h1>
        </div>
        <div className="section-content">
          <p>{summary.detail}</p>
        </div>
      </div>
    );
  }
}
export default Summary;
