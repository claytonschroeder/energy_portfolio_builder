import React, {Component} from 'react';

class Efficiency extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    const efficiency = this.props.efficiencyOptions;
    return (
      <div className="option-row">
        <h3>Efficiency</h3>
        {
          efficiency && efficiency.map((item, index) => {
            const className = item.selected ? 'selected' : 'not-selected'
            return (
              <div key={ index } className={ className } onClick={ () => this.props.selectEfficiency(item.name, index) } >{ item.name }</div>
            )
          })
        }
      </div>
    );
  }
}
export default Efficiency;
