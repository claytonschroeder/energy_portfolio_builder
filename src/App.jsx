import React, {Component} from 'react';
import Selections from './components/Selections.jsx';
import Outcomes from './components/Outcomes.jsx';

import { Grid, Col, Row } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      powerPlantOptions: [
        {
          name: "Coal",
          steam: 100,
          megawatts: 15,
          cost: 200,
          ghg: 21,
          air: 21,
          jobs: 0,
          land: 0,
          innovation: 0,
          selected: false
        },
        {
          name: "Gas Co-firing",
          steam: 100,
          megawatts: 15,
          cost: 100,
          ghg: 16,
          air: 20,
          jobs: 0,
          land: 0,
          innovation: 0,
          selected: false
        },
        {
          name: "Bio. Co-firing",
          steam: 20,
          megawatts: 15,
          cost: 100,
          ghg: 16,
          air: 21,
          jobs: 0,
          land: 10,
          innovation: 2,
          selected: false
        },
        {
          name: "Natural Gas",
          steam: 300,
          megawatts: 15,
          cost: 200,
          ghg: 10,
          air: 18,
          jobs: 0,
          land: 0,
          innovation: 0,
          selected: false
        },
        {
          name: "New Coal",
          steam: 200,
          megawatts: 10,
          cost: 100,
          ghg: 21,
          air: 21,
          jobs: 5,
          land: 10,
          innovation: 3,
          selected: false
        },
        {
          name: "New Biomass",
          steam: 100,
          megawatts: 10,
          cost: 100,
          ghg: 20,
          air: 21,
          jobs: 6,
          land: 12,
          innovation: 2,
          selected: false
        },
        {
          name: "New Natural Gas",
          steam: 200,
          megawatts: 55,
          cost: 100,
          ghg: 10,
          air: 15,
          jobs: 5,
          land: 2,
          innovation: 2,
          selected: false
        },
        {
          name: "New Nuclear",
          steam: 250,
          megawatts: 45,
          cost: 100,
          ghg: 0,
          air: 0,
          jobs: 20,
          land: 7,
          innovation: 3,
          selected: false
        }
      ],
      decentralizedOptions: [
        {
          name: "Distributed Natural Gas",
          steam: 100,
          megawatts: 7,
          cost: 90,
          ghg: 10,
          air: 15,
          jobs: 0,
          land: 0,
          innovation: 2,
          selected: false
        },
        {
          name: "Central Solar Photovoltaic",
          steam: 300,
          megawatts: 0,
          cost: 900,
          ghg: 0,
          air: 0,
          jobs: 5,
          land: 38,
          innovation: 4,
          selected: false
        },
        {
          name: "Distributed Solar Photovoltaic",
          steam: 200,
          megawatts: 0,
          cost: 100,
          ghg: 0,
          air: 0,
          jobs: 5,
          land: 38,
          innovation: 4,
          selected: false
        },
        {
          name: "Distributed Wind",
          steam: 100,
          megawatts: 0,
          cost: 100,
          ghg: 0,
          air: 0,
          jobs: 5,
          land: 625,
          innovation: 4,
          selected: false
        },
        {
          name: "Fuel Cells",
          steam: 100,
          megawatts: 0,
          cost: 0,
          ghg: 0,
          air: 0,
          jobs: 0,
          land: 0,
          innovation: 4,
          selected: false
        },
        {
          name: "Microturbines",
          steam: 200,
          megawatts: 0,
          cost: 200,
          ghg: 0,
          air: 0,
          jobs: 0,
          land: 0,
          innovation: 4,
          selected: false
        },
        {
          name: "Small Hydro",
          steam: 100,
          megawatts: 0,
          cost: 100,
          ghg: 0,
          air: 0,
          jobs: 0,
          land: 0,
          innovation: 3,
          selected: false
        }
      ],
      offCampusOptions: [
        {
          name: "Grid",
          steam: 100,
          megawatts: 20,
          cost: 10,
          ghg: 0,
          air: 0,
          jobs: 0,
          land: 0,
          innovation: 0,
          selected: false
        },
        {
          name: "Green Grid",
          steam: 100,
          megawatts: 20,
          cost: 50,
          ghg: 0,
          air: 0,
          jobs: 0,
          land: 0,
          innovation: 2,
          selected: false
        },
        {
          name: "Offsite Wind",
          steam: 100,
          megawatts: 0,
          cost: 50,
          ghg: 0,
          air: 0,
          jobs: 0,
          land: 0,
          innovation: 3,
          selected: false
        },
        {
          name: "Offsite Solar",
          steam: 200,
          megawatts: 0,
          cost: 200,
          ghg: 0,
          air: 0,
          jobs: 0,
          land: 0,
          innovation: 4,
          selected: false
        }
      ],
      efficiencyOptions: [
        {
          name: "Ref Cases",
          steamRequirements: 1000,
          electricityRequirements: 75,
          selected: true
        },
        {
          name: "Energy Efficient Porgram 1",
          steamRequirements: 900,
          electricityRequirements: 70,
          selected: false
        },
        {
          name: "Energy Efficient Porgram 2",
          steamRequirements: 800,
          electricityRequirements: 60,
          selected: false
        },
        {
          name: "Energy Efficient Porgram 3",
          steamRequirements: 600,
          electricityRequirements: 55,
          selected: false
        }
      ]
    }
    this.selectOffCampus = this.selectOffCampus.bind(this);
    this.selectPowerPlant = this.selectPowerPlant.bind(this);
    this.selectDecentralized = this.selectDecentralized.bind(this);
    this.selectEfficiency = this.selectEfficiency.bind(this);
  }

  selectOffCampus(name, index){
    const newObject = this.state.offCampusOptions[index]
    newObject.selected = !newObject.selected;
    this.setState(prevState => {
      offCampusOptions: [ ...prevState.offCampusOptions, newObject ]
    })
  }

  selectPowerPlant(name, index){
    const newObject = this.state.powerPlantOptions[index]
    newObject.selected = !newObject.selected;
    this.setState(prevState => {
      powerPlantOptions: [ ...prevState.powerPlantOptions, newObject ]
    })
  }

  selectDecentralized(name, index){
    const newObject = this.state.decentralizedOptions[index]
    newObject.selected = !newObject.selected;
    this.setState(prevState => {
      decentralizedOptions: [ ...prevState.decentralizedOptions, newObject ]
    })
  }

  selectEfficiency(name, index){
    const newObject = this.state.efficiencyOptions[index]
    newObject.selected = !newObject.selected;
    this.setState(prevState => {
      efficiencyOptions: [ ...prevState.efficiencyOptions, newObject ]
    })
  }

  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Selections
              decentralizedOptions  = { this.state.decentralizedOptions }
              powerPlantOptions     = { this.state.powerPlantOptions }
              offCampusOptions      = { this.state.offCampusOptions }
              efficiencyOptions     = { this.state.efficiencyOptions }

              selectOffCampus       = { this.selectOffCampus }
              selectPowerPlant       = { this.selectPowerPlant }
              selectDecentralized       = { this.selectDecentralized }
              selectEfficiency       = { this.selectEfficiency }  />
            <Outcomes
              decentralizedOptions  = { this.state.decentralizedOptions }
              powerPlantOptions     = { this.state.powerPlantOptions }
              offCampusOptions      = { this.state.offCampusOptions }
              efficiencyOptions     = { this.state.efficiencyOptions }  />
          </Row>
        </Grid>
      </div>
    );
  }
}
export default App;
