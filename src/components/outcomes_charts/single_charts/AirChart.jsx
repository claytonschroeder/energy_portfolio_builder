import React, {Component} from 'react';

class AirChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    const airSum         = this.props.airSum;
    const airPercentage  = this.props.airPercentage;
    const statusMessage = airSum >= 35 ? (<span className='status passed'>Status: Passed</span>) : (<span className='status exceeded'>Status: Not Met</span>)
    return (
      <div className='chart-area'>
        { statusMessage }
        <span>Air Emissions: { airSum }%</span>
        <div className="progress-bar">
          <div className="ticks-container">
            <div style={ { 'top': 0 + '%'} } className="ticks">100%</div>
            <div style={ { 'top': 25 + '%'} } className="ticks">75%</div>
            <div style={ { 'top': 50 + '%'} } className="ticks">50%</div>
            <div style={ { 'top': 75 + '%'} } className="ticks">25%</div>
            <div style={ { 'top': 100 + '%'} } className="ticks">0%</div>
          </div>
          <div className="progress-track">
            <div className="progress-fill" style={ { 'height': '100%', 'top': airPercentage + '%'} }>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AirChart;
