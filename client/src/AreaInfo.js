import React from 'react';
import * as d3 from "d3";
import * as nvd3 from 'nvd3'
import NVD3Chart from "react-nvd3";



class AreaInfo extends React.Component{
  constructor(props){
    super(props)
      this.state = {
        city: 'bournemouth',
        chart: []
      }
  }

componentDidMount(){
  fetch('/api/bournemouth')
  .then(res => res.json()).then(results => {
    console.log(results.data)

    //MAP RESULTS INTO AN ARRAY OF OBJECTS TO USE AS CHART DATA
    let newData = results.data;
    let chartData = newData.map(item => {
      return {
        label: item.date,
        value: item.price
      }
    })

    console.log("updated chart data" + chartData)

    //CREATE NVD3 COMPONENT USING MAPPED DATA
    let chart = <NVD3Chart id="barChart" type="lineChart" datum={chartData} x="label" y="value"/>
    this.setState({chart: chart})
  })
  .catch(err => {
    console.log("ERROR: " +  err);
  })
  }


  render(){
    return (
      <div>
        <h3> Prices over last 10 years </h3>
        {this.state.chart}
      </div>
    )
  }

}

export default AreaInfo;
