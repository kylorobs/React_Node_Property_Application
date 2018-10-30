import React from 'react';

class DealFetcher extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      figures: null,
      error: null
    }
  }

  componentDidMount() {
    fetch('/api/deals')
    .then(response => response.json()).then((results) => {
      console.log(results)
     if(!results.success){
        this.setState({error: results.data.error})
      }
       else {
      console.log(results.data)
      var figures = results.data.map((item, i) => {
       return (
         <ul key={i}>
           <li> Post Code: {item.post_code}</li>
           <li> Price: £{item.price}</li>
           <li> Refurb: £{item.refurb}</li>
         </ul>
       )
     })
     this.setState({figures: figures})}
    });
  }

  render(){
    let state = this.state.figures
    console.log(state)
    return (
      <div>
        {this.state.figures}
        {this.state.error}
      </div>
    )
  }


}

export default DealFetcher
