import React, {Component} from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import PowerPlant from './power_options/PowerPlant.jsx'
import Decentralized from './power_options/Decentralized.jsx'
import OffCampus from './power_options/OffCampus.jsx'
import Efficiency from './efficiency_options/Efficiency.jsx'

class Selections extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    const decentralized = this.props.decentralizedOptions;
    const powerPlant    = this.props.powerPlantOptions;
    const offCampus     = this.props.offCampusOptions;
    const efficiency    = this.props.efficiencyOptions;
    return (
      <div className='options-container'>
        <Efficiency
          selectEfficiency   = { this.props.selectEfficiency }
          efficiencyOptions = { efficiency }  />
        <PowerPlant
          selectPowerPlant   = { this.props.selectPowerPlant }
          powerPlantOptions = { powerPlant }  />
        <Decentralized
          selectDecentralized   = { this.props.selectDecentralized }
          decentralized     = { decentralized }  />
        <OffCampus
          selectOffCampus   = { this.props.selectOffCampus }
          offCampus         = { offCampus }  />
      </div>
    );
  }
}
export default Selections;
