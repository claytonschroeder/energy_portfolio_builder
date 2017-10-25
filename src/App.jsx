import React, {Component} from 'react';
import Selections         from './components/Selections.jsx';
import Outcomes           from './components/Outcomes.jsx';

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
          selected: false,
          count: 0
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
          selected: false,
          count: 0
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
          selected: false,
          count: 0
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
          selected: false,
          count: 0
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
          selected: false,
          count: 0
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
          selected: false,
          count: 0
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
          selected: false,
          count: 0
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
          selected: false,
          count: 0
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
          selected: false,
          count: 0
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
          selected: false,
          count: 0
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
          selected: false,
          count: 0
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
          selected: false,
          count: 0
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
          selected: false,
          count: 0
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
          selected: false,
          count: 0
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
          selected: false,
          count: 0
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
          selected: false,
          count: 0
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
          selected: false,
          count: 0
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
          selected: false,
          count: 0
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
          selected: false,
          count: 0
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
      ],
      selectedPowerOptions: []
    }
    this.addOffCampus = this.addOffCampus.bind(this);
    this.removeOffCampus = this.removeOffCampus.bind(this);

    this.addDecentralized = this.addDecentralized.bind(this);
    this.removeDecentralized = this.removeDecentralized.bind(this);

    this.addPowerPlant = this.addPowerPlant.bind(this);
    this.removePowerPlant = this.removePowerPlant.bind(this);

    this.selectEfficiency = this.selectEfficiency.bind(this);

  }

  addOffCampus(name, index){
    const newObject = this.state.offCampusOptions[index];
    const newPowerOptions = this.state.selectedPowerOptions;
    newPowerOptions.push(newObject);
    newObject.count += 1;
    newObject.count === 0 ? newObject.selected = false : newObject.selected = true;
    this.setState(prevState => {
      offCampusOptions: [ ...prevState.offCampusOptions, newObject ]
      selectedPowerOptions: [ ...prevState.selectedPowerOptions, newPowerOptions]
    })
  }

  removeOffCampus(name, index){
    function remove(array, name){
      const index = array.findIndex(i => i.name === name)
      console.log(index)
      if(index !== -1) {
        array.splice(index, 1)
      }
      return array
    }
    const newObject = this.state.offCampusOptions[index];
    const currentPowerOptions = this.state.selectedPowerOptions;
    console.log('old: ', currentPowerOptions)
    const newPowerOptions = remove(currentPowerOptions, name);
    console.log('new: ', newPowerOptions);
    newObject.count -= 1;
    newObject.count === 0 ? newObject.selected = false : newObject.selected = true;
    this.setState(prevState => {
      offCampusOptions: [ ...prevState.offCampusOptions, newObject ]
      selectedPowerOptions: [ ...prevState.selectedPowerOptions, newPowerOptions]
    })
  }

  addPowerPlant(name, index){
    const newObject = this.state.powerPlantOptions[index];
    const newPowerOptions = this.state.selectedPowerOptions;
    newPowerOptions.push(newObject);
    newObject.count += 1;
    newObject.count === 0 ? newObject.selected = false : newObject.selected = true;
    this.setState(prevState => {
      powerPlantOptions: [ ...prevState.powerPlantOptions, newObject ]
      selectedPowerOptions: [ ...prevState.selectedPowerOptions, newPowerOptions]
    })
  }

  removePowerPlant(name, index){
    function remove(array, name){
      const index = array.findIndex(i => i.name === name)
      console.log(index)
      if(index !== -1) {
        array.splice(index, 1)
      }
      return array
    }
    const newObject = this.state.powerPlantOptions[index];
    const currentPowerOptions = this.state.selectedPowerOptions;
    console.log('old: ', currentPowerOptions)
    const newPowerOptions = remove(currentPowerOptions, name);
    console.log('new: ', newPowerOptions);
    newObject.count -= 1;
    newObject.count === 0 ? newObject.selected = false : newObject.selected = true;
    this.setState(prevState => {
      powerPlantOptions: [ ...prevState.powerPlantOptions, newObject ]
      selectedPowerOptions: [ ...prevState.selectedPowerOptions, newPowerOptions]
    })
  }

  addDecentralized(name, index){
    const newObject = this.state.decentralizedOptions[index];
    const newPowerOptions = this.state.selectedPowerOptions;
    newPowerOptions.push(newObject);
    newObject.count += 1;
    newObject.count === 0 ? newObject.selected = false : newObject.selected = true;
    this.setState(prevState => {
      decentralizedOptions: [ ...prevState.decentralizedOptions, newObject ]
      selectedPowerOptions: [ ...prevState.selectedPowerOptions, newPowerOptions]
    })
  }

  removeDecentralized(name, index){
    function remove(array, name){
      const index = array.findIndex(i => i.name === name)
      console.log(index)
      if(index !== -1) {
        array.splice(index, 1)
      }
      return array
    }
    const newObject = this.state.decentralizedOptions[index];
    const currentPowerOptions = this.state.selectedPowerOptions;
    const newPowerOptions = remove(currentPowerOptions, name);
    newObject.count -= 1;
    newObject.count === 0 ? newObject.selected = false : newObject.selected = true;
    this.setState(prevState => {
      decentralizedOptions: [ ...prevState.decentralizedOptions, newObject ]
      selectedPowerOptions: [ ...prevState.selectedPowerOptions, newPowerOptions]
    })
  }

  selectEfficiency(name, index){
    const newObject = this.state.efficiencyOptions;
    newObject.map((option, index) => {
      if(name === option.name){
        option.selected = true
      } else {
        option.selected = false
      }
    })
    this.setState(prevState => {
      efficiencyOptions: [ ...prevState.efficiencyOptions, newObject ]
    })
  }

  render() {
    return (
      <div>
        <Selections
          decentralizedOptions  = { this.state.decentralizedOptions }
          powerPlantOptions     = { this.state.powerPlantOptions }
          offCampusOptions      = { this.state.offCampusOptions }
          efficiencyOptions     = { this.state.efficiencyOptions }
          addPowerPlant         = { this.addPowerPlant }
          removePowerPlant      = { this.removePowerPlant }
          addDecentralized      = { this.addDecentralized }
          removeDecentralized   = { this.removeDecentralized }
          addOffCampus          = { this.addOffCampus }
          removeOffCampus       = { this.removeOffCampus }
          selectEfficiency      = { this.selectEfficiency }  />
        <Outcomes
          selectedPowerOptions  = { this.state.selectedPowerOptions }
          decentralizedOptions  = { this.state.decentralizedOptions }
          powerPlantOptions     = { this.state.powerPlantOptions }
          offCampusOptions      = { this.state.offCampusOptions }
          efficiencyOptions     = { this.state.efficiencyOptions }  />
      </div>
    );
  }
}
export default App;
