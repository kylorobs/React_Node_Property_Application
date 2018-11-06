import React from 'react';

class PostCodeCheck extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      types: []
    }
    this.selectType = this.selectType.bind(this)
    this.findType = this.findType.bind(this)
  }

  selectType(){
    console.log("this is coming");
  }

  findType(array, type){
    let currentTypes = this.state.type;
    let checkType =array.find(item => item.type === type);
    if (checkType) {
      switch(type) {
        case "D":
          type = 'detached'
        break;
        case "S":
          type = 'semi-detached'
        break;
        case "F":
          type = 'flat'
        break;
        case "O":
          type = 'bungalow'
        break;
        case "T":
          type = 'terraced'
        break;
        default:
        type="undefined"
      }
      currentTypes = currentTypes.push(type)
    }
    this.setState({types: currentTypes})
  }


  componentDidMount(){

    let url = `/api/property-types/bournemouth/${this.props.selectedPostCode}`;
    console.log("Post Code Checker url: " + url)

    fetch(url)
    .then(res=> res.json()).then(results => {
      // let checkType =results.data.map(item => item.type)
        console.log("found type is: ")
      console.log(results.data)
      // this.findType(array, 'D')
      // this.findType(array, 'S')
      // this.findType(array, 'F')
      // this.findType(array, 'O')
      // this.findType(array, 'T')
    })

  }


  render(){
    let currentTypes = this.state.types;
    let lis = currentTypes.map(item => {
      return <li onClick={this.selectType}> item </li>
    })

    return (
      <ul>
        {lis}
      </ul>
    )
  }

}

export default PostCodeCheck
