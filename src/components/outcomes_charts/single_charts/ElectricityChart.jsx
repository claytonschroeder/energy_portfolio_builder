import React, {Component} from 'react';

class ElectricityChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    const electricitySum                    = this.props.electricitySum;
    const electricityRequirementPercentage  = this.props.electricityRequirementPercentage;
    const electricityDemandPercentage       = this.props.electricityDemandPercentage;

    const statusMessage = electricityDemandPercentage <= electricityRequirementPercentage - 10 ? (<span className='status exceeded'>Status: Exceeding</span>) : electricityDemandPercentage <= electricityRequirementPercentage ? (<span className='status passed'>Status: Passed</span>) : (<span className='status not-met'>Status: Not Met</span>)
    return (
      <div className='chart-area'>
        { statusMessage }
        <span>Electricity MW: { electricitySum }</span>
        <div className="progress-bar">
          <div className="ticks-container">
            <div style={ { 'top': 0 + '%'} } className="ticks">200</div>
            <div style={ { 'top': 25 + '%'} } className="ticks">150</div>
            <div style={ { 'top': 50 + '%'} } className="ticks">100</div>
            <div style={ { 'top': 75 + '%'} } className="ticks">50</div>
            <div style={ { 'top': 100 + '%'} } className="ticks">0</div>
          </div>
          <div className="progress-track">
            <div style={ { 'top': electricityRequirementPercentage + '%'} } className="break-even"></div>
            <div className="progress-fill" style={ { 'height': '100%', 'top': electricityDemandPercentage + '%'} }>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ElectricityChart;
