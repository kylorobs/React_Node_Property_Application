import React from 'react';
import Filter from './Filter.js'
import SelectedCity from './SelectedCity.js'
import Submit from './Submit.js'

class CityPickerDashboard extends React.Component{
  constructor(props){
    super(props)
    this.state= {
      selectedCity: this.props.city,
      selectedPostCode : this.props.postcode,
      selectedType: this.props.type,
      filterBox: true,
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
    let info = {
      city: this.state.selectedCity,
      postcode: this.state.selectedPostCode,
      type : this.state.selectedType,
    }
    this.props.onChange(info)
  }

  cityPicker(e){
    console.log(e.target.id)
    let input = document.getElementById('postcode-input');
    input.value = ' ';
    let typeCurrentlySelected = document.querySelectorAll('li');
    typeCurrentlySelected.forEach(i => {
      i.classList.remove('typeSelected')
      i.style.display = 'none';
    })

let selectedCity = e.target.id
  this.setState({selectedCity: selectedCity,
                filterBox: true});
  }


  render(){
    return (<div className="flex flex-start">
            <Filter name="Dashboard" filter={this.state.filterBox} readyToSubmit={this.onReadyToSubmit} selectedCity={this.state.selectedCity} selectedPostCode={this.state.selectedPostCode} typeChange={this.onTypeChange} cityChange={this.onCityChange} postCodeChange={this.onPostCodeChange} />
            <Submit submit={this.submitChange} ready={this.state.readyToSubmit} />
            </div>
          )

  }
}

export default CityPickerDashboard;
