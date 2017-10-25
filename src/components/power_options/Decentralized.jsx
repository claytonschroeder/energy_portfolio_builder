import React, {Component} from 'react';

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
        counter += item.count;
      }
    })
    return (
      <div className="option-row">
        <h3>{ `Decentralized - (${ counter }/3)` }</h3>
        {
          decentralized && decentralized.map((item, index) => {
            const className = item.selected ? 'selected' : counter >= 3 ? 'not-selected disabled' : 'not-selected'
            const decreaseDisabled = item.count === 0 ? ' disabled' : ''
            const increaseDisabled = item.count + (counter - item.count) === 3 ? ' disabled' : ''
            return(
              <div key={ index } id='parent-container' className={ "item " + className }>
                <div id='left' className={ 'remove' + decreaseDisabled } onClick={ () => this.props.removeDecentralized(item.name, index) }> - </div>
                <div id='center' className='item-name'>{ `${item.name} - (${ item.count })` }</div>
                <div id='right' className={'add' + increaseDisabled } onClick={ () => this.props.addDecentralized(item.name, index)}> + </div>
              </div>
            )
          })
        }
      </div>
    );
  }
}
export default Decentralized;
