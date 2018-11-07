import React from 'react';

const SearchResult = (props) => {


    let category = props.category;
    let result;

    if (category === 'for-sale'){
    result = (
        <div className="search-result">
          <img src={props.image} alt={props.title}></img>
          <a href={props.src} target="_blank"><div className="search-result-info">
           <span className="title"><strong> {props.title}</strong></span>
            <span><strong>Price:</strong> £{props.price}</span>
            <span><strong>Type: </strong>{props.type}</span>
          </div></a>
        </div>
      )
    }
    else if(category === 'to-rent') {
      result = (
        <div className="search-result">
          <img src={props.image} alt={props.title}></img>
          <a href={props.src} target="_blank" ><div className="search-result-info">
           <span className="title"><strong> {props.title}</strong></span>
            <span><strong>Price:</strong> £{props.price}</span>
            <span><strong>Type: </strong>{props.type}</span>
            <span><strong>No. beds: </strong>{props.beds}</span>
          </div></a>
        </div>
      )
    }

    else {return <div></div>}

  return result


}

export default SearchResult;
