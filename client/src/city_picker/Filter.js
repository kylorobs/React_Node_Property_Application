import React from 'react';
import Input from '../buttons_inputs/Input.js'
import PostCodeCheck from './PostCodeCheck.js'

class Filter extends React.Component{
  constructor(props){
    super(props)
    this.onSelectorChange = this.onSelectorChange.bind(this)
    this.onPostCodeChange = this.onPostCodeChange.bind(this)
  }

  onSelectorChange(e){
    var target = e.target;
    console.log(target)
    var selected = target.options[target.selectedIndex].value;
    console.log(selected)
    selected.toLowerCase();
    this.props.cityChange(selected)
  }

  onPostCodeChange(newPostCode){
    this.props.postCodeChange(newPostCode)
  }



  render(){

      let result = (!this.props.filter) ? <div className="filterBoxOff"></div> :
      (<div className="filterBoxOn">
        <span className="heading"> Your chosen city </span>
        <select onChange={this.onSelectorChange}>
          <option value="bournmouth">Bournemouth</option>
          <option  value="london">London</option>
          <option value="ipswich">Ipswich</option>
          <option value="bristol">Bristol</option>
          <option value={this.props.selectedCity} selected>{this.props.selectedCity}</option>
        </select>
        <span className="heading"> Enter the postcode </span>
        <Input onChange={this.onPostCodeChange}  label="Post Code" placeholder="eg SW15 6BB"  type="text"/>
        <a className="submit"> Check postcode </a>
        <PostCodeCheck selectedCity ={this.props.selectedCity} selectedPostCode={this.props.selectedPostCode} />
      </div>
    )
      return result
  }
}




export default Filter;
