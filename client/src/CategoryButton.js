import React from 'react';

class CategoryButton extends React.Component {
  constructor(props){
    super(props)
    this.state={
      buttonText: 'See properties for RENT',
      sale: true
    }
    this.onClick = this.onClick.bind(this);
  }

  onClick(e){
    let saleStatus = this.state.sale;
    if (!saleStatus){
      e.target.classList.remove('sale')
      e.target.classList.add('rent')
      this.setState({
        buttonText: 'See properties for SALE',
        sale: true
      })
    }
    else if (saleStatus){
      e.target.classList.remove('rent')
      e.target.classList.add('sale')
      this.setState({
        buttonText: 'See properties for RENT',
        sale: false
      })
    }
    else {
      console.log("error finding 'sale'")
    }

    this.props.onChange(this.state.sale)
  }

  render(){
    return (
        <div className="button-container">
          <a onClick={this.onClick}> {this.state.buttonText} </a>
        </div>
    )
  }
}

export default CategoryButton;
