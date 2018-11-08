import React from 'react';
import Map from './Map.js';
import Filter from './Filter.js'
import SelectedCity from './SelectedCity.js'
import Submit from './Submit.js'

class CityPicker extends React.Component{
  constructor(props){
    super(props)
    this.state= {
      selectedCity: 'Choose a city',
      selectedPostCode : 'BH1%201QF',
      selectedType: 'flat',
      filterBox: false,
      readyToSubmit: false
    }

    this.onCityChange = this.onCityChange.bind(this);
    this.onTypeChange = this.onTypeChange.bind(this);
    this.onPostCodeChange = this.onPostCodeChange.bind(this);
    this.onReadyToSubmit = this.onReadyToSubmit.bind(this);
    this.submitChange = this.submitChange.bind(this);
    this.cityPicker = this.cityPicker.bind(this);
  }

  onTypeChange(type){
    this.setState({selectedType : type})
  }

  onCityChange(city){
    this.setState({selectedCity : city})
    console.log(this.state.selectedCity)
  }
  onPostCodeChange(postcode){
      this.setState({selectedPostCode : postcode})
  }

  onReadyToSubmit(boo){
      this.setState({readyToSubmit : boo})
  }

  submitChange(e){
      // let tempCode = 'BH1'
    let info = {
      city: this.state.selectedCity,
      postcode: this.state.selectedPostCode,
      type : this.state.selectedType,
    }
    this.props.onChange(info)
    e.target.parentNode.parentNode.classList.add('slide-up');
  }

  cityPicker(e){
console.log(e.target.id)
let allInputs = document.querySelectorAll('input');
allInputs.forEach(input => input.value =' ')

let typeCurrentlySelected = document.querySelectorAll('li');
typeCurrentlySelected.forEach(i => {
  i.classList.remove('typeSelected')
  i.style.display = 'none';
})


let selectedCity = e.target.id
  this.setState({selectedCity: selectedCity,
                filterBox: true});

  let citySelect = document.getElementById('citySelector');
  // console.log("city selected is: ")
  citySelect.value = selectedCity;
  console.log("city selected is" + citySelect.value)
  // citySelect.selectedIndex = selectedCity;
  }




  render(){
    return (<div className="relative">
            <Map changeTest={this.onTestChange} />
            <div onClick={this.cityPicker} className="circle heartbeat" id="bournemouth"></div>
            <div onClick={this.cityPicker} className="circle heartbeat" id="london"></div>
            <div onClick={this.cityPicker} className="circle heartbeat" id="bristol"></div>
            <div onClick={this.cityPicker} className="circle heartbeat" id="ipswich"></div>
            <div onClick={this.cityPicker} className="circle heartbeat" id="leeds"></div>
            <div onClick={this.cityPicker} className="circle heartbeat" id="middlesbrough"></div>
            <Filter name="Home" filter={this.state.filterBox} readyToSubmit={this.onReadyToSubmit} selectedCity={this.state.selectedCity} selectedPostCode={this.state.selectedPostCode} typeChange={this.onTypeChange} cityChange={this.onCityChange} postCodeChange={this.onPostCodeChange} />
            <SelectedCity selectedCity={this.state.selectedCity} />
            <Submit submit={this.submitChange} ready={this.state.readyToSubmit} />
            </div>
          )

  }
}

export default CityPicker;
