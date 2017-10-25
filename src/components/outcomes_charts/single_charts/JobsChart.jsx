import React, {Component} from 'react';

class JobsChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    const jobsSum         = this.props.jobsSum;
    const jobsPercentage  = this.props.jobsPercentage;
    const statusMessage   = jobsSum >= 15 ? (<div className='passed'>Status: Passed</div>) : (<div className='exceeded'>Status: Not Met</div>)
    return (
      <div className='chart-area'>
        <div className="status">
          { statusMessage }
          <div className='chart-title'>New Local Jobs:  { jobsSum }</div>
        </div>
        <div className="progress-bar">
          <div className="ticks-container">
            <div style={ { 'top': 0 + '%'} } className="ticks">100</div>
            <div style={ { 'top': 25 + '%'} } className="ticks">75</div>
            <div style={ { 'top': 50 + '%'} } className="ticks">50</div>
            <div style={ { 'top': 75 + '%'} } className="ticks">25</div>
            <div style={ { 'top': 100 + '%'} } className="ticks">0</div>
          </div>
          <div className="progress-track">
            <div className="progress-fill" style={ { 'height': '100%', 'top': jobsPercentage < 0 ? 0 : jobsPercentage + '%'} }>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default JobsChart;
