import React, {Component} from 'react';
import { Grid, Col, Row } from 'react-bootstrap';

class PowerPlant extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    let counter = 0;
    const powerPlant = this.props.powerPlantOptions;
    powerPlant.map((item, index) => {
      if(item.selected){
        counter += 1;
      }
    })
    return (
      <div className="option-row">
        <h3>{`Power Plant - (${ counter }/5)`}</h3>
        {
          powerPlant && powerPlant.map((item, index) => {
            const className = item.selected ? 'selected' : counter >= 5 ? 'not-selected disabled' : 'not-selected'
            return (
              <p key={ index } className={ className } onClick={ () => this.props.selectPowerPlant(item.name, index) }>{ item.name }</p>
            )
          })
        }
      </div>
    );
  }
}
export default PowerPlant;
