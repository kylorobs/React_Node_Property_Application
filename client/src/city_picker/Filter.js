import React from 'react';

class Filter extends React.Component{
  constructor(props){
    super(props)
    this.onSelectorChange = this.onSelectorChange.bind(this)
  }

  onSelectorChange(e){
    console.log("selected li is: " + e.target.innerHTML);
    let value = e.target.innerHTML
    value.toLowerCase();
    this.props.cityChange(value)
  }




  render(){

      let result = (!this.props.filter) ? <div className="filterBoxOff"></div> :
      (<div className="filterBoxOn">
        <ul>
          <li onClick={this.onSelectorChange}value="bournmouth">Bournemouth</li>
          <li onClick={this.onSelectorChange} value="london">London</li>
          <li onClick={this.onSelectorChange} value="ipswich">Ipswich</li>
          <li onClick={this.onSelectorChange} value="bristol">Bristol</li>
          <li value={this.props.selectedCity} onClick={this.onSelectorChange}>{this.props.selectedCity}</li>
        </ul>
      </div>
    )
      return result
  }
}




export default Filter;
