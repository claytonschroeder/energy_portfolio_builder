import React, {Component} from 'react';

class CostChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    const costSum         = this.props.costSum;
    const costPercentage  = this.props.costPercentage;
    const statusMessage   = costSum >= 1500 ? (<div className='exceeded'>Status: Exceeding</div>) : (<div className='passed'>Status: Passed</div>)
    return (
      <div className='chart-area'>
        <div className="status">
          { statusMessage }
          <div className='chart-title'>Cost: ${ costSum }</div>
        </div>
        <div className="progress-bar">
          <div className="ticks-container">
            <div style={ { 'top': 0 + '%'} } className="ticks">$2000</div>
            <div style={ { 'top': 25 + '%'} } className="ticks">$1500</div>
            <div style={ { 'top': 50 + '%'} } className="ticks">$1000</div>
            <div style={ { 'top': 75 + '%'} } className="ticks">$500</div>
            <div style={ { 'top': 100 + '%'} } className="ticks">$0</div>
          </div>
          <div className="progress-track">
            <div className="progress-fill" style={ { 'height': '100%', 'top': costPercentage < 0 ? 0 : costPercentage + '%'} }>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CostChart;
