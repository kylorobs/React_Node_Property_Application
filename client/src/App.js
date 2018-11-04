import React, { Component } from 'react';
import './App.css';
import Banner from './banner/Banner.js'
import DealFetcher from './saved_deals/DealFetcher.js'
import PropertyListings from './property_listings/PropertyListings.js'
import Calculations from './calculations/Calculations.js'
import Chart from './chart/Chart.js'
import AreaStats from './area_stats/AreaStats.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: "Investment Deal Checker",
      currentCity: 'bournemouth',
      type: 'detached'
    }
  }
  render() {
    return (
      <div className="App">
        <Banner title={this.state.title} />
          <div className="grid">
            <div className="saved-deals">
              <p> All your <strong>saved searches</strong> will be here.</p>
            </div>
            <div className="search-inputs">
              <p> All the <strong>search inputs</strong> will be here.</p>
            </div>
            <div className="property-listings">
              <h3>Current property listings </h3>
              <PropertyListings city={this.state.currentCity} type={this.state.type}/>
            </div>
            <div className="calcs">
              <Calculations />
            </div>
            <div className="area-info">
              <AreaStats city={this.state.currentCity} type={this.state.type} />
            </div>
            <div className="charts">
              // <Chart  />
            </div>
          </div>
      </div>
    );
  }
}

export default App;
