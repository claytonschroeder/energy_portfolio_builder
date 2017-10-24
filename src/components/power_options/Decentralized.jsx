import React, {Component} from 'react';
import { Grid, Col, Row } from 'react-bootstrap';

class Decentralized extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  render() {
    let counter = 0
    const decentralized = this.props.decentralized;
    decentralized.map((item, index) => {
      if(item.selected){
        counter += 1;
      }
    })
    return (
      <div className="option-row">
        <h3>{ `Decentralized - (${ counter }/3)` }</h3>
        {
          decentralized && decentralized.map((item, index) => {
            const className = item.selected ? 'selected' : counter >= 3 ? 'not-selected disabled' : 'not-selected'
            return(
              <p key={ index } className={ className } onClick={ () => this.props.selectDecentralized(item.name, index) }>{ item.name }</p>
            )
          })
        }
      </div>
    );
  }
}
export default Decentralized;
