import React from 'react';
import PriceInput from '../buttons_inputs/PriceInput.js'
import AvSalePrice from './AvSalePrice.js'

class Calculations extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      purchase_price: null
    }
    this.changePrice = this.changePrice.bind(this);
  }

  changePrice(price){
    this.setState({purchase_price: price});
  }



  render(){
    return(
      <div className="calcs">
        <h3 className="pink"> Enter the purchase price of your property </h3>
        <PriceInput onChange={this.changePrice} id="dealInput" placeholder="eg 57000"  type="number"/>
        <AvSalePrice city={this.props.city} type={this.props.type} postcode={this.props.postcode} purchasePrice = {this.state.purchase_price} />
      </div>


    )
  }
}

export default Calculations
