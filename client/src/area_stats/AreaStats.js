import React from 'react';

class AreaStats extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      sales : null,
      rents : null
    }
    this.fetchSales = this.fetchSales.bind(this)
    this.fetchRents = this.fetchRents.bind(this)
    this.findAverage = this.findAverage.bind(this)
    this.getAveragePrices = this.getAveragePrices.bind(this)
  }

  fetchSales(){
    let city = this.props.city;
    let type = this.props.type;
    let postcode = this.props.postcode;
    let endpoint = `/api/city-listings/${city}/for-sale/${type}/${postcode}`;
    fetch(endpoint)
    .then(res => res.json())
    .then(results => {
      let sales = results.results;
      this.setState({sales: sales})
      // console.log("Total sales in state: " + this.state.sales)
    })
    .catch(err => console.log("Error fetching" + err))
  }

  fetchRents(){
    this.setState({rents: null})
    let city = this.props.city;
      let type = this.props.type;
      let postcode = this.props.postcode;
    let endpoint = `/api/city-listings/${city}/to-rent/${type}/${postcode}`;
    fetch(endpoint)
    .then(res => res.json())
    .then(results => {
      let rents = results.results;
      this.setState({rents: rents})
      // console.log(this.state.rents)
    })
    .catch(err => console.log("Error fetching" + err))
  }

  findAverage(array){
    if (!array){
      console.log("No array provided");
      return
    }

    else if (array === 0){
      console.log("There is no data in array")
      return "No data"
    }

    else {
      // console.log("finding array: " + array)
    return array.reduce(function(a, b){
        return a + b;
      })/ array.length;
      }
  }

  getAveragePrices(data, beds){
    let bedsPrices = [];
    const findBeds = data.find(item => {
      return item.beds === beds;
    })

    if (!findBeds){
      return "No data!"
    }

    // console.log("av function received data: " + data);
    let bedsArray = data.filter(item => item.beds === beds)

    if (data === this.state.sales){
      bedsPrices = bedsArray.map((item, index) => {
        if (item.sale_price && typeof item.sale_price === 'number' &&  !Number.isNaN(item.sale_price))
        {
          return item.sale_price;}
      })
    }
    else if (data === this.state.rents){
      bedsPrices = bedsArray.map((item, index) => {
            return item.price_per_month
      })
    }

    else {
      console.log("Getaverageprices function not working")
    }

    bedsPrices = bedsPrices.filter(Boolean)  // REMOVE EMPTY ITEMS IN ARRAY
    return Math.floor(this.findAverage(bedsPrices));
  }



  componentDidUpdate(prevProps, prevState){
    if (prevProps.city !== this.props.city){
      this.fetchSales()
      this.fetchRents();
  }

  else {
    return;
  }
  }

  componentDidMount(prevProps, prevState){
    this.fetchSales()
    this.fetchRents()
  }


  render(){
    let sales = this.state.sales;
    let rents = this.state.rents;
    let message = "calculating...";
    let postcode = decodeURIComponent(this.props.postcode);
    console.log(this.props.postcode)
    console.log("and now decoded")
    console.log(postcode)

    let onebedsale = message;
    let onebedrent = message;
    let twobedsale = message;
    let twobedrent = message;
    let threebedsale = message;
    let threebedrent = message;
    let fourbedsale = message;
    let fourbedrent = message;
    let fivebedrent = message;
      let fivebedsale = message;


    if (rents && sales){
          onebedsale= this.getAveragePrices(sales, 1)
          onebedrent = this.getAveragePrices(rents, 1)
          twobedsale = this.getAveragePrices(sales, 2)
          twobedrent = this.getAveragePrices(rents, 2)
          threebedsale = this.getAveragePrices(sales, 3)
          threebedrent = this.getAveragePrices(rents,3)
          fourbedsale = this.getAveragePrices(sales, 4)
          fourbedrent = this.getAveragePrices(rents, 4)
          fivebedsale = this.getAveragePrices(sales, 5)
          fivebedrent = this.getAveragePrices(rents, 5)
    }

    return (
        <div>
          <h2 className="teal"> {this.props.city} </h2>
          <h4> <span className="teal"> Property type:</span> {this.props.type}</h4>
          <h4><span className="teal"> Postcode:</span> {postcode} </h4>
          <div className="info-table">
          <span className="pink"> Calcuated averages </span>
          <table>
          <tr>
            <th>Beds</th>
            <th>Rent p/m</th>
            <th>On Sale price</th>
          </tr>
            <tr>
              <td> 1 bed</td>
              <td> {onebedrent}</td>
              <td> {onebedsale} </td>
            </tr>
            <tr>
              <td> 2 bed</td>
              <td> {twobedrent}</td>
              <td> {twobedsale} </td>
            </tr>
            <tr>
              <td> 3 bed</td>
              <td> {threebedrent}</td>
              <td> {threebedsale} </td>
            </tr>
            <tr>
              <td> 4 bed</td>
              <td> {fourbedrent}</td>
              <td> {fourbedsale} </td>
            </tr>
            <tr>
              <td> 5 bed</td>
              <td> {fivebedrent}</td>
              <td> {fivebedsale} </td>
            </tr>
          </table>
          </div>
        </div>
    )
  }
}

export default AreaStats
