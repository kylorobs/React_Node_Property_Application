import dotenv from 'dotenv'
import React from 'react';
import SearchResult from './SearchResult.js';
import CategoryButton from './CategoryButton.js';

// require('dotenv').config();
// const React = require('react');
// const SearchResult = require('./SearchResult.js');
// const CategoryButton = require('./CategoryButton.js')


class PropertyListings extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      listingsData : [],
      category:'for-sale',
      isLoading: false,
    }
    this.changeCategory = this.changeCategory.bind(this);
    this.fetchProperties = this.fetchProperties.bind(this);
  }

  changeCategory(sale){
    var category = (sale) ? "for-sale" : "to-rent";
    this.setState({category: category})
    this.fetchProperties();
  }

  fetchProperties(){
    this.setState({ isLoading: true })
    let currentCategory = this.state.category;
    // const URL = process.env.AZUNA_URL;
     const ID = process.env.AZUNA_ID;
     console.log("The ID is " + ID);
    // const KEY = process.env.AZUNA_KEY;
    const constructedURL = `http://api.adzuna.com/v1/api/property/gb/search/1/?category=${this.state.category}&app_id=2bf9897c&app_key=4319eeae9ae1d36f868e30a7efd416b8`;
    console.log("URL " + constructedURL);
    console.log("current category= " + currentCategory)

    fetch(constructedURL)
    .then(res => res.json()).then((data)=> {
      let properties = data.results.map((property, i) => {
        switch(property.category.tag){
          case 'for-sale':
            return <SearchResult key={i} title={property.title} type={property.property_type} price={property.sale_price} image={property.image_url} category={this.state.category} />
          break;
          case 'to-rent':
            return <SearchResult key={i} title={property.title} type={property.property_type} price={property.price_per_month} image={property.image_url} beds={property.beds} category={this.state.category} />
          break;
          default:
            return <p>No properties found </p>
        }
      })
      this.setState({listingsData: properties, isLoading: false})
    })
  }

  componentDidMount(){
    this.fetchProperties();
  }


  render(){
    return (<div>
            <CategoryButton onChange={this.changeCategory} />
            {this.state.listingsData}
           </div>)
  }
}

export default PropertyListings;
