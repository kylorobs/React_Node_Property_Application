import React from 'react';


class AvSalePrice extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      priceArray : [],
      averagePrice: null,
      belowMV: null
    }
    this.getAverage = this.getAverage.bind(this);
    this.calculateBelowAv = this.calculateBelowAv.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  getAverage(array){
    if (array){
    return array.reduce(function(a, b){
        return a + b;
      })/ array.length;
    }
    else {
        console.log("empty array")
      }
  }

  calculateBelowAv(purchasePrice, averagePrice){
    if (!purchasePrice){
      return ""
    }
    else {
      let answer = 100 - (Math.floor((purchasePrice/averagePrice) * 100));
      return answer;
    }
  }

  fetchData(){
    let url = `/api/city-data/${this.props.city}/${this.props.type}/${this.props.postcode}`;
    console.log("AV sale URL: " + url)

    fetch(url)
    .then(res=> res.json()).then(results => {
      let prices = results.data.map((item, index) => {
        return item.price;
      })
      let averagePrice = this.getAverage(prices);
      let purchasePrice = this.props.purchasePrice;
      let belowMV = purchasePrice;

      this.setState({priceArray: prices, averagePrice: averagePrice, belowMV: belowMV})
    })

  }


  componentDidUpdate(prevProps, prevState){
    if (prevProps.city !== this.props.city || prevProps.postcode !== this.props.postcode || prevProps.type !== this.props.type || prevProps.purchasePrice !== this.props.purchasePrice){
    this.fetchData();
  }

  else {
    return;
  }
  }

  componentDidMount(prevProps, prevState){

    if (this.props.city){
      this.fetchData();
    }
      else {
        return;
      }
  }




  render(){
    let s = this.state.averagePrice;
    let p = decodeURIComponent(this.props.purchasePrice);
    let equityGain = Math.abs(this.calculateBelowAv(p, s));
    let finalAverage = Math.floor(this.state.averagePrice);


    let result;
    if (p > s){
      result = (
        <div>
        <p>Your margin is: </p>
        <p className="marginHigher"> {equityGain}% </p>
        </div>)}
    else if (p < s){
      result = (
        <div className="marginLower">
          <p>Your margin is less than the average for this area </p>
        </div> )
    }

    return (
      <div>
        <p> The <span className="priceAverage">average price </span>for properties of this type in post code:</p>
        <p className="priceAverage"> £{finalAverage}</p>
        <p><strong>{result}</strong> </p>
      </div>
    )
  }
}

export default AvSalePrice
