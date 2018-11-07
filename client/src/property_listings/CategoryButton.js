import React from 'react';

class CategoryButton extends React.Component {
  constructor(props){
    super(props)
    this.onClick = this.onClick.bind(this);
  }

  onClick(){
    let buttonText = this.props.buttonText;

    if (buttonText === 'sale'){
      this.props.onChange('for-sale')
    }

    else if (buttonText === 'rent'){
      this.props.onChange('to-rent')
    }

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
