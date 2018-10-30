import React from 'react';

class DealFetcher extends React.Component{
  constructor(props){
    super(props);
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
       }
    });
  }

  render(){
    return (
      <div>
        {this.state.figures}
        {this.state.error}
      </div>
    )
  }


}

export default DealFetcher
