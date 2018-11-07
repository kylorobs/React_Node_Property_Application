import React from 'react'
import {Line} from 'react-chartjs-2';


class NewChart extends React.Component{
  constructor(props){
    super(props)
      this.state = {
        dataX: null,
        dataY: null
      }

  }

  componentDidMount(){

    let url = `/api/city-data/${this.props.city}/${this.props.type}/${this.props.postcode}`;
    console.log("Chart fetch URL: " + url)

    fetch(url)
    .then(res => res.json()).then(results => {
      console.log(results.data)

      //FILTER RESULTS INTO AN ARRAY OF OBJECTS TO USE AS CHART DATA
      let newData = results.data;
      let newX = [];
      let newY = [];
      let chartX = newData.map((item, index) => {
        return item.date;
      })
      let chartY = newData.map((item, index) => {
        return item.price;
      })

      for(let x =0; x<chartX.length; x++){
        newX.push(chartX[x]);
      }
      for(let y =0; y<chartY.length; y++){
        newY.push(chartY[y]);
      }

      console.log("And new new is: ")
      console.log(newY)

      this.setState({
        dataX: newY,
         dataY: newX
      })

        })
        .catch(err => {
          console.log("ERROR: " +  err);
        })
        }


  render(){

let x = this.state.dataX
console.log("x is:")
console.log(x)
let y = this.state.dataY
console.log("y is:")
console.log(y)

    const data = {
  labels: y,
  datasets: [
    {
      label: 'Property prices since 2010',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: x,
    }
  ]
};

    return <Line data={data} />
  }
}

export default NewChart;
