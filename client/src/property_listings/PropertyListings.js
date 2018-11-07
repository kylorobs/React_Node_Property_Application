import dotenv from 'dotenv'
import React from 'react';
import SearchResult from './SearchResult.js';
import CategoryButton from './CategoryButton.js';



class PropertyListings extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      listingsData : [],
      category:'for-sale',
      isLoading: false,
    }
    this.changeCategory = this.changeCategory.bind(this);
  }

  changeCategory(){
    let current = this.state.category;
    let newCategory;

    switch(current){
      case 'for-sale':
        newCategory = 'to-rent'
      break;
      case 'to-rent':
        newCategory = 'for-sale';
      break;
      default:
        newCategory = 'for-sale';
    }

    this.setState({category: newCategory})
  }


componentDidMount(){

  let city = this.props.city;
  let type = this.props.type;
  let postcode = this.props.postcode;
  let endpoint = `/api/city-listings/${city}/${this.state.category}/${type}/${postcode}`;

  fetch(endpoint)
  .then(res => res.json()).then((data)=> {
    let properties = data.results.map((property, i) => {
      switch(this.state.category){
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


  render(){
    let saleButton = 'for sale';
    let rentButton = 'to rent'
    return (<div>
            <CategoryButton onChange={this.changeCategory} buttonText={saleButton} />
            <CategoryButton onChange={this.changeCategory} buttonText={rentButton} />
            {this.state.listingsData}
           </div>)
  }
}

export default PropertyListings;
