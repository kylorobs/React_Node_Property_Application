import React from 'react';

class PostCodeCheck extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      types: []
    }
    this.selectType = this.selectType.bind(this)
    this.findType = this.findType.bind(this)
      this.checkPostCode = this.checkPostCode.bind(this)
  }

  selectType(e){
    let target = e.target;
    let targetValue = target.dataset.property;
    console.log("selected target:")
    console.log(target.dataset.property)


    let selected = document.querySelectorAll('li');
    selected.forEach(i => i.classList.remove('typeSelected'))
    target.classList.add('typeSelected');
    this.props.onReadyChange(true);
    this.props.changeType(targetValue)
  }

  findType(array, proposedType){
      let newType = proposedType;
      console.log("newType inserted is: " + newType)
    let currentTypes = this.state.types;
    let checkType =array.find(item => item.type === newType);
    if (checkType) {
      switch(newType) {
        case "D":
          newType = 'detached'
        break;
        case "S":
          newType = 'semi-detached'
        break;
        case "F":
          newType = 'flat'
        break;
        case "O":
          newType = 'bungalow'
        break;
        case "T":
          newType = 'terraced'
        break;
        default:
        newType="undefined"
      }
      currentTypes.push(newType)
      console.log("about to push: ");
      console.log(currentTypes)
      this.setState({types: currentTypes})
    }

    else {
      return;
    }
  }

  checkPostCode(){
    let url = `/api/property-types/${this.props.selectedCity}/${this.props.selectedPostCode}`;
    console.log("Post Code Checker url: " + url)

    fetch(url)
    .then(res=> res.json()).then(results => {
      // let checkType =results.data.map(item => item.type)
      let array = results.data;
        console.log("found type is: ")
      console.log("fetched data" + results.data)
      this.findType(array, 'D')
      this.findType(array, 'S')
      this.findType(array, 'F')
      this.findType(array, 'O')
      this.findType(array, 'T')
    })
  }



  render(){
    let currentTypes = this.state.types;
    let lis = <li> Looking for properties </li>;
    let chooseType;

    if (currentTypes.length > 0){
      lis = currentTypes.map((item, index) => {
        console.log("item to go into li");
        console.log(item)
      return <li data-property={item} className="typeOptions" onClick={this.selectType}> {item} </li>
    })

    chooseType = (
      <div>
        <p className="teal"> Select from the following </p>
         <ul>
          {lis}
         </ul>
      </div>
    )
  }

  else {
    chooseType = (
    <div>  </div>
  )
  }

    return (

      <div>
        <button onClick ={this.checkPostCode}> Check Post code </button>
        {chooseType}
      </div>
    )
  }

}

export default PostCodeCheck
