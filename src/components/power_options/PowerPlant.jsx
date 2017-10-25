import React, {Component} from 'react';

class PowerPlant extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    let counter = 0;
    const powerPlant = this.props.powerPlant;
    powerPlant.map((item, index) => {
      if(item.selected){
        counter += item.count;
      }
    })
    return (
      <div className="option-row">
        <h3>{ `Power Plant - (${ counter }/5)` }</h3>
        {
          powerPlant && powerPlant.map((item, index) => {
            const className = item.selected ? 'selected' : counter >= 5 ? 'not-selected disabled' : 'not-selected'
            const decreaseDisabled = item.count === 0 ? ' disabled' : ''
            const increaseDisabled = item.count + (counter - item.count) === 5 ? ' disabled' : ''
            return(
              <div key={ index } id='parent-container' className={ "item " + className }>
                <div id='left' className={ 'remove' + decreaseDisabled } onClick={ () => this.props.removePowerPlant(item.name, index) }> - </div>
                <div id='center' className='item-name'>{ `${item.name} - (${ item.count })` }</div>
                <div id='right' className={'add' + increaseDisabled } onClick={ () => this.props.addPowerPlant(item.name, index)}> + </div>
              </div>
            )
          })
        }
      </div>
    );
  }
}
export default PowerPlant;
