import React, { Component } from 'react';
import './App.css';
import Banner from './Banner.js'
import DealFetcher from './DealFetcher.js'
import PropertyListings from './PropertyListings.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: "Investment Deal Checker"
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
              <PropertyListings />
            </div>
            <div className="calcs-graphs">
              <DealFetcher  />
            </div>
          </div>
      </div>
    );
  }
}

export default App;
