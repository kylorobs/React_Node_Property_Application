import React from 'react';

const Submit = (props) => {

  let button = <div></div>
  if(props.ready){
      button = <button onClick={props.submit}> Let's analyse the area </button>
  }

    return button

}

export default Submit
