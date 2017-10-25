import React, {Component} from 'react';

class LandChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    const landSum         = this.props.landSum;
    const landPercentage  = this.props.landPercentage;
    const statusMessage   = landSum <= 700 ? (<div className='passed'>Status: Passed</div>) : (<div className='exceeded'>Status: Exceeding</div>)
    return (
      <div className='chart-area'>
        <div className="status">
          { statusMessage }
          <div className='chart-title'>Land Use: { landSum }</div>
        </div>
        <div className="progress-bar">
          <div className="ticks-container">
            <div style={ { 'top': 0 + '%'} } className="ticks">1000</div>
            <div style={ { 'top': 25 + '%'} } className="ticks">750</div>
            <div style={ { 'top': 50 + '%'} } className="ticks">500</div>
            <div style={ { 'top': 75 + '%'} } className="ticks">250</div>
            <div style={ { 'top': 100 + '%'} } className="ticks">0</div>
          </div>
          <div className="progress-track">
            <div className="progress-fill" style={ { 'height': '100%', 'top': landPercentage < 0 ? 0 : landPercentage + '%'} }>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default LandChart;
