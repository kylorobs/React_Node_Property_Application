import React from 'react';

class Input extends React.Component{
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    let target;
    if (!e.target.value){
      return;
    }
    else if (e.target.id="postcode-input"){
     target = encodeURIComponent(e.target.value).substr(3);
    }

    else if(e.target.id="deal-price-input"){
      target = e.target.value;
    }

    else {
      console.log("error handling input value")
    }
    console.log("target and value:")
    console.log(e.target.id);
    console.log(e.target.value)
    console.log("input target after if statements")
    console.log(target);
   this.props.onChange(target);
  }

  render(){
    return (
    <div>
      <input id={this.props.id} placeholder={this.props.placeholder} type={this.props.type} onInput={this.handleChange} />
    </div>
  )}

}

export default Input
