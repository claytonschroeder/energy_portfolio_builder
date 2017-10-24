import React, {Component} from 'react';
import { Grid, Col, Row } from 'react-bootstrap';

class Efficiency extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    let counter = 0;
    const efficiency = this.props.efficiencyOptions;
    efficiency.map((item, index) => {
      if(item.selected){
        counter += 1;
      }
    })
    return (
      <div className="option-row">
        <h3>{`Efficiency - (${ counter }/1)`}</h3>
        {
          efficiency && efficiency.map((item, index) => {
            const className = item.selected ? 'selected' : counter >= 1 ? 'not-selected disabled' : 'not-selected'
            return (
              <p key={ index } className={ className } onClick={ () => this.props.selectEfficiency(item.name, index) } >{ item.name }</p>
            )
          })
        }
      </div>
    );
  }
}
export default Efficiency;
