import React from 'react';

class CategoryButton extends React.Component {
  constructor(props){
    super(props)
    this.onClick = this.onClick.bind(this);
  }

  onClick(){
    this.props.onChange()
  }

  render(){
    return (
        <div onClick={this.onClick} className="button-container">
          <a onClick={this.onClick}> {this.props.buttonText} </a>
        </div>
    )
  }
}

export default CategoryButton;
