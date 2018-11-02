import React from 'react';
import Input from '../buttons_inputs/Input.js'
import AvSalePrice from './AvSalePrice.js'

class Calculations extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      city: 'bournemouth',
      type: 'flat',
      postcode: null,
      purchase_price: null
    }

    this.changePrice = this.changePrice.bind(this);
    this.changePostCode = this.changePostCode.bind(this);
  }

  changePrice(price){
    this.setState({purchase_price: price});
  }

  changePostCode(postcode){
    this.setState({postcode: postcode});
  }




  render(){
    return(
      <div className="calcs">
        <Input onChange={this.changePrice}  label="Deal Price" placeholder="eg 57000"  type="number"/>
        <Input onChange={this.changePostCode}  label="Post Code" placeholder="eg SW15 6BB"  type="text"/>
        <AvSalePrice city={this.state.city} postcode={this.state.postcode} purchasePrice = {this.state.purchase_price} />
      </div>


    )
  }
}

export default Calculations
