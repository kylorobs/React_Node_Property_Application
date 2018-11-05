import React from 'react';
import map from '../images/england.png'

class Map extends React.Component {
  constructor(props){
    super(props)
    this.onClick = this.onClick.bind(this)
  }

  onClick(e){
    let target = e.target.value;
    this.props.changeTest(target);
  }

  render(){return (
      <div className="image-container">
          <img src={map}></img>
        </div>


  )
}
}

export default Map;
