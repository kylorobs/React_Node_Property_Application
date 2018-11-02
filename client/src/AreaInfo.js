import React from 'react';
import ChartDisplay from './ChartDisplay.js';


class AreaInfo extends React.Component{
  constructor(props){
    super(props)
      this.state = {
        city: 'bournemouth',
        type: null,
        postcode: null,
        street: null,
        chartData: null
      }

  }

componentDidMount(){
  fetch('/api/bournemouth')
  .then(res => res.json()).then(results => {
      console.log(results.data)
    this.setState({chartData: results.data})

  })
  }


  render(){
    return <ChartDisplay data={this.state.chartData}/>
  }

}

export default AreaInfo;
