import React, {Component} from 'react';
import DemandCharts from './outcomes_charts/DemandCharts.jsx'

class Outcomes extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    const steamArray            = [];
    const electricityArray      = [];
    const costArray             = [];
    const ghgArray              = [];
    const airArray              = [];
    const jobsArray             = [];
    const landArray             = [];
    const innovationArray       = [];
    const decentralizedOptions  = this.props.decentralizedOptions;
    const powerPlantOptions     = this.props.powerPlantOptions;
    const offCampusOptions      = this.props.offCampusOptions;
    const efficiencyOptions     = this.props.efficiencyOptions;
    const selectedPowerOptions  = this.props.selectedPowerOptions;
    let steamRequirement        = 0;
    let electricityRequirement  = 0;

    efficiencyOptions.map((item, index) => {
      if(item.selected){
        steamRequirement = item.steamRequirements;
        electricityRequirement = item.electricityRequirements;
      }
    })

    selectedPowerOptions.map((item, index) => {
      if(item.selected){
        steamArray.push(item.steam);
        electricityArray.push(item.megawatts);
        costArray.push(item.cost);
        ghgArray.push(item.ghg);
        airArray.push(item.air);
        jobsArray.push(item.jobs);
        landArray.push(item.land);
        innovationArray.push(item.innovation)
      }
    })

    const steamSum        = steamArray.reduce((a, b) => a + b, 0)
    const electricitySum  = electricityArray.reduce((a, b) => a + b, 0)
    const costSum         = costArray.reduce((a, b) => a + b, 0)
    const ghgSum          = ghgArray.reduce((a, b) => a + b, 0)
    const airSum          = airArray.reduce((a, b) => a + b, 0)
    const jobsSum         = jobsArray.reduce((a, b) => a + b, 0)
    const landSum         = landArray.reduce((a, b) => a + b, 0)
    const innovationSum   = innovationArray.reduce((a, b) => a + b, 0)

    return (
      <div className="outcomes-container">
        <div className='demand-requirements'>
          <DemandCharts
            steamSum                = { steamSum }
            steamRequirement        = { steamRequirement }
            electricitySum          = { electricitySum }
            electricityRequirement  = { electricityRequirement }
            costSum                 = { costSum }
            ghgSum                  = { ghgSum }
            airSum                  = { airSum }
            jobsSum                 = { jobsSum }
            landSum                 = { landSum }
            innovationSum           = { innovationSum }  />
        </div>
      </div>
    );
  }
}
export default Outcomes;
