import React from 'react';

class PriceInput extends React.Component{
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    let target = e.target.value;
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

export default PriceInput
