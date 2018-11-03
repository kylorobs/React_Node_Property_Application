import React from 'react';
import d3 from "d3";
import  nvd3 from 'nvd3';
import NVD3Chart from "react-nvd3";



class AreaInfo extends React.Component{
  constructor(props){
    super(props)
      this.state = {
        city: 'bournemouth',
        chartData:  [{
   label : "happy",
   value : 10
 },{
   label : "sad",
   value : 12
 },{
   label : "lazy",
   value : 55
}]
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
  })
  .catch(err => {
    console.log("ERROR: " +  err);
  })
  }


  render(){
    let content = <p>No data to display</p>;
   if (this.state.chartData) {
     content = <NVD3Chart id="barChart" type="multiBarChart" datum={this.state.chartData} x="label" y="value"/>
   }

   console.log("content:" + content)
   console.log("state:" + this.state.chartData);

   return (
         <div>
           {content}
         </div>
       );
   }

}

export default AreaInfo;
