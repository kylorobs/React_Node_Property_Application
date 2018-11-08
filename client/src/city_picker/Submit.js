import React from 'react';

const Submit = (props) => {

  let button = <div></div>
  if(props.ready){
      button = <a className="button" onClick={props.submit}> Let's analyse the area </a>
  }

    return button

}

export default Submit
