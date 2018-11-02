import React from 'react';

class Input extends React.Component{
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
      <h3> {this.props.label} </h3>
      <input label={this.props.label} placeholder={this.props.placeholder} type={this.props.type} onInput={this.handleChange} />
    </div>
  )}

}

export default Input
