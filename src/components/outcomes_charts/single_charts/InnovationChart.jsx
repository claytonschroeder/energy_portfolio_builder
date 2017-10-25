import React, {Component} from 'react';

class InnovationChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    const innovationSum         = this.props.innovationSum;
    const innovationPercentage  = this.props.innovationPercentage;
    const statusMessage         = innovationSum >= 2 ? (<span className='status passed'>Status: Passed</span>) : (<span className='status exceeded'>Status: Not Met</span>)
    return (
      <div className='chart-area'>
        { statusMessage }
        <span>Innovation: { innovationSum }</span>
        <div className="progress-bar">
          <div className="ticks-container">
            <div style={ { 'top': 0 + '%'} } className="ticks">4</div>
            <div style={ { 'top': 25 + '%'} } className="ticks">3</div>
            <div style={ { 'top': 50 + '%'} } className="ticks">2</div>
            <div style={ { 'top': 75 + '%'} } className="ticks">1</div>
            <div style={ { 'top': 100 + '%'} } className="ticks">0</div>
          </div>
          <div className="progress-track">
            <div className="progress-fill" style={ { 'height': '100%', 'top': innovationPercentage < 0 ? 0 : innovationPercentage + '%'} }>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default InnovationChart;
InnovationChart