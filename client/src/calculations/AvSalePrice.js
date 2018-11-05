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
    else{
      let answer = 100 - (Math.floor((purchasePrice/averagePrice) * 100));
      return(
        <div>
        <p>Your equity gain is: </p>
        <p> {answer}% </p>
        </div>
      )
    }
  }



  componentDidMount(){
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
      console.log(prices);

      this.setState({priceArray: prices, averagePrice: averagePrice, belowMV: belowMV})
    })
  }





  render(){
    let s = this.state.averagePrice;
    let p = this.props.purchasePrice;
    let equityGain = this.calculateBelowAv(p, s)




    return(
      <div>
        <p> The average price for propertis of this type in post code:</p>
        <p><strong> £{this.state.averagePrice}</strong> </p>
        <p><strong>{equityGain}</strong> </p>
      </div>


    )
  }
}

export default AvSalePrice
