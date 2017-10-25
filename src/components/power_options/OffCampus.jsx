import React, {Component} from 'react';

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
        counter += item.count;
      }
    })
    return (
      <div className="option-row">
        <h3>{ `Off Campus - (${ counter }/2)` }</h3>
        {
          offCampus && offCampus.map((item, index) => {
            const className = item.selected ? 'selected' : counter >= 2 ? 'not-selected disabled' : 'not-selected'
            const decreaseDisabled = item.count === 0 ? ' disabled' : ''
            const increaseDisabled = item.count + (counter - item.count) === 2 ? ' disabled' : ''
            return(
              <div key={ index } id='parent-container' className={ "item " + className }>
                <div id='left' className={ 'remove' + decreaseDisabled } onClick={ () => this.props.removeOffCampus(item.name, index) }> - </div>
                <div id='center' className='item-name'>{ `${item.name} - (${ item.count })` }</div>
                <div id='right' className={'add' + increaseDisabled } onClick={ () => this.props.addOffCampus(item.name, index)}> + </div>
              </div>
            )
          })
        }
      </div>
    );
  }
}
export default OffCampus;
