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
    this.fetchProperties = this.fetchProperties.bind(this);
  }

  changeCategory(text){
    let newCategory = text;
    console.log("The new category is: ");
    console.log(newCategory);
    this.setState({category: newCategory,  isLoading: true})

  }

  fetchProperties(){
    let city = this.props.city;
    let type = this.props.type;
    let postcode = this.props.postcode;
    let currentCategory = this.state.category;
    let endpoint = `/api/city-listings/${city}/${this.state.category}/${type}/${postcode}`;

console.log("fetching the following")
console.log(endpoint)
    fetch(endpoint)
    .then(res => res.json()).then((data)=> {
      let properties = data.results.map((property, i) => {
          if(currentCategory === 'for-sale'){
              return <SearchResult key={i} title={property.title} type={property.property_type} price={property.sale_price} image={property.image_url} src={property.redirect_url} category="for-sale" />
          }

          else if(currentCategory === 'to-rent'){
              return <SearchResult key={i} title={property.title} type={property.property_type} price={property.price_per_month} image={property.image_url} src={property.redirect_url} beds={property.beds} category="to-rent" />
          }

          else {
            return <p> No properties found! </p>
          }
      })
      this.setState({listingsData: properties, isLoading: false})
    })
  }


componentDidUpdate(prevProps, prevState){
  if (prevState.category !== this.state.category){
  this.fetchProperties();
}

else {
  return;
}
}

componentDidMount(prevProps, prevState){
  this.fetchProperties();
}





  render(){
    const listingsData = this.state.listingsData;

      if (!listingsData) {
      return <p>Loading ...</p>;
    }

    return (<div>
              <div className="flex">
                <CategoryButton onChange={this.changeCategory} buttonText='sale' />
                <CategoryButton onChange={this.changeCategory} buttonText='rent' />
              </div>
            {this.state.listingsData}
           </div>)
  }
}

export default PropertyListings;
