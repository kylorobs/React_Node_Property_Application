// import React, { Component } from 'react';
// /* eslint-disable no-unused-vars */
// import d3 from 'd3';
// import nvd3 from 'nvd3';
// /* eslint-enable no-unused-vars */
// import NVD3Chart from "react-nvd3";
// import './../../node_modules/nvd3/build/nv.d3.css';
//
//
//
//
// class Chart extends React.Component{
//
//       state = {
//         city: 'bournemouth',
//         chartData: [{
//           key: "Cumulative Return",
//           values: [
//             {
//               "label" : "A" ,
//               "value" : -29.765957771107
//             } ,
//             {
//               "label" : "B" ,
//               "value" : 0
//             } ,
//             {
//               "label" : "C" ,
//               "value" : 32.807804682612
//             } ,
//             {
//               "label" : "D" ,
//               "value" : 196.45946739256
//             } ,
//             {
//               "label" : "E" ,
//               "value" : 0.19434030906893
//             } ,
//             {
//               "label" : "F" ,
//               "value" : -98.079782601442
//             } ,
//             {
//               "label" : "G" ,
//               "value" : -13.925743130903
//             } ,
//             {
//               "label" : "H" ,
//               "value" : -5.1387322875705
//             }
//           ]
//         }
//       ],
//     }
//
//
// // componentDidMount(){
// //   fetch('/api/city-data/bournemouth')
// //   .then(res => res.json()).then(results => {
// //     console.log(results.data)
// //
// //     //MAP RESULTS INTO AN ARRAY OF OBJECTS TO USE AS CHART DATA
// //     let newData = results.data;
// //     let chartData = newData.map(item => {
// //       return {
// //         label: item.date,
// //         value: item.price
// //       }
// //     })
// //
// //     console.log("updated chart data" + chartData)
// //
// //
// //     //CREATE NVD3 COMPONENT USING MAPPED DATA
// //   })
// //   .catch(err => {
// //     console.log("ERROR: " +  err);
// //   })
// //   }
//
//
// render(){
//
//   return (
//     <div className="App">
//       <NVD3Chart id="barChart" type="discreteBarChart" datum={this.state.chartData} x="label" y="value"/>
//     </div>
//   )
// }
//
// }
//
// export default Chart;
