import React, {Component} from 'react';
import { Grid, Col, Row } from 'react-bootstrap';

class OffCampus extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    let counter = 0;
    const offCampus = this.props.offCampus;
    offCampus.map((item, index) => {
      if(item.selected){
        counter += 1;
      }
    })
    return (
      <div className="option-row">
        <h3>{`Off Campus - (${ counter }/2)`}</h3>
        {
          offCampus && offCampus.map((item, index) => {
            const className = item.selected ? 'selected' : counter >= 2 ? 'not-selected disabled' : 'not-selected'
            return(
              <p className={ className } key={ index } onClick={ () => this.props.selectOffCampus(item.name, index) }>{ item.name }</p>
            )
          })
        }
      </div>
    );
  }
}
export default OffCampus;
