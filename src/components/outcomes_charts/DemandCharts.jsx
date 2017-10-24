import React, {Component} from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import SteamChart         from './single_charts/SteamChart.jsx'
import ElectricityChart   from './single_charts/ElectricityChart.jsx'
import CostChart          from './single_charts/CostChart.jsx'
import GhgChart           from './single_charts/GhgChart.jsx'
import AirChart           from './single_charts/AirChart.jsx'
import JobsChart          from './single_charts/JobsChart.jsx'
import LandChart          from './single_charts/LandChart.jsx'
import InnovationChart    from './single_charts/InnovationChart.jsx'



class DemandCharts extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    const { steamSum, steamRequirement, electricitySum, electricityRequirement, costSum, ghgSum, airSum, jobsSum, landSum, innovationSum } = this.props;

    const steamDemandPercentage       = (1 - (steamSum / 2000)) * 100;
    const electricityDemandPercentage = (1 - (electricitySum / 200)) * 100;
    const costPercentage              = (1 - (costSum / 2000)) * 100;
    const jobsPercentage              = (1 - (jobsSum / 100)) * 100;
    const landPercentage              = (1 - (landSum / 1000)) * 100;
    const innovationPercentage        = (1 - (innovationSum / 4)) * 100;
    const ghgPercentage               = ((ghgSum / 100)) * 100;
    const airPercentage               = ((airSum / 100)) * 100;

    const steamRequirementPercentage       = (1 - (steamRequirement / 2000)) * 100;
    const electricityRequirementPercentage = (1 - (electricityRequirement / 200)) * 100;

    return (
      <div className="demand-performance-charts container vertical rounded">
        <div className='demand-container'>
          <h3>Demand Requirements</h3>
          <div className="flex-container">
            <SteamChart
              steamSum = { steamSum }
              steamRequirementPercentage = { steamRequirementPercentage }
              steamDemandPercentage = { steamDemandPercentage }  />

            <ElectricityChart
              electricitySum = { electricitySum }
              electricityRequirementPercentage = { electricityRequirementPercentage }
              electricityDemandPercentage = { electricityDemandPercentage }  />
          </div>
        </div>

        <div className="performance-container">
          <h3>Performance Indicators</h3>
          <div className="flex-container">
            <CostChart
              costSum        = { costSum }
              costPercentage = { costPercentage } />
            <GhgChart
              ghgSum        = { ghgSum }
              ghgPercentage = { ghgPercentage } />
            <AirChart
              airSum        = { airSum }
              airPercentage = { airPercentage } />
            <JobsChart
              jobsSum        = { jobsSum }
              jobsPercentage = { jobsPercentage } />
            <LandChart
              landSum        = { landSum }
              landPercentage = { landPercentage } />
            <InnovationChart
              innovationSum        = { innovationSum }
              innovationPercentage = { innovationPercentage } />
          </div>
        </div>
      </div>
    );
  }
}
export default DemandCharts;
