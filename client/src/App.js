import React, { Component } from 'react';
import './App.css';
import Banner from './banner/Banner.js'
import DealFetcher from './saved_deals/DealFetcher.js'
import PropertyListings from './property_listings/PropertyListings.js'
import Calculations from './calculations/Calculations.js'
// import Chart from './chart/Chart.js'
import AreaStats from './area_stats/AreaStats.js'
import CityPicker from './city_picker/CityPicker.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: "Investment Deal Checker",
      currentCity: 'bournemouth',
      type: 'flat',
      postcode: 'BH13QJ',
      testValue : 'test'
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(info){ //CITYPICKER WILL HAND IT AN OBJECT
    let city = info.city;
    let postcode = info.postcode;
    let type = info.type;

    this.setState(
      {
      currentCity: city,
      type: type,
      postcode: postcode,
    })
  }


  render() {
    return (
      <div className="App">
        <Banner title={this.state.title} />
          <div className="grid">
          <div className="map">
          <CityPicker onChange={this.handleChange} />
          </div>
            <div className="saved-deals">
              <p> All your <strong>saved searches</strong> will be here.</p>
            </div>
            <div className="search-inputs">
              <p> All the <strong>search inputs</strong> will be here.</p>
            </div>
            <div className="property-listings">
              <h3>Current property listings </h3>
              <PropertyListings city={this.state.currentCity} type={this.state.type} postcode={this.state.postcode}/>
            </div>
            <div className="calcs">
              <Calculations  city={this.state.currentCity} type={this.state.type} postcode={this.state.postcode} />
            </div>
            <div className="area-info">
              <AreaStats city={this.state.currentCity} type={this.state.type} postcode={this.state.postcode}/>
            </div>
            <div className="charts">

            </div>
          </div>
      </div>
    );
  }
}

export default App;
