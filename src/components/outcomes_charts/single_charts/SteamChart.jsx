import React, {Component} from 'react';

class SteamChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    const steamSum                    = this.props.steamSum;
    const steamRequirementPercentage  = this.props.steamRequirementPercentage;
    const steamDemandPercentage       = this.props.steamDemandPercentage;
    const statusMessage = steamDemandPercentage <= steamRequirementPercentage - 10 ? (<div className='exceeded'>Status: Exceeding</div>) : steamDemandPercentage <= steamRequirementPercentage ? (<div className='passed'>Status: Passed</div>) : (<div className='not-met'>Status: Not Met</div>)
    return (
      <div className='chart-area'>
        <div className='status'>
          { statusMessage }
          <div className='chart-title'>Steam (000) lbs/hr: { steamSum }</div>
        </div>
        <div className="progress-bar">
          <div className="ticks-container">
            <div style={ { 'top': 0 + '%'} } className="ticks">2000</div>
            <div style={ { 'top': 25 + '%'} } className="ticks">1500</div>
            <div style={ { 'top': 50 + '%'} } className="ticks">1000</div>
            <div style={ { 'top': 75 + '%'} } className="ticks">500</div>
            <div style={ { 'top': 100 + '%'} } className="ticks">0</div>
          </div>
          <div className="progress-track">
            <div style={ { 'top': steamRequirementPercentage + '%'} } className="break-even"></div>
            <div className="progress-fill" style={ { 'height': '100%', 'top': steamDemandPercentage + '%' } }>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SteamChart;
