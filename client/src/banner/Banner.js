import React from 'react';

export const Banner = (props) => {
  return (
    <div className="banner">
      <h1> {props.title} </h1>
      <h3> A tool for analysing your property deals </h3>
    </div>
  )
}


export default Banner;
