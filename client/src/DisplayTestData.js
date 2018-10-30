import React from 'react';
import PropTypes from 'prop-types';

const DisplayTestData = (props) => {
  const commentNodes = props.data.map(comment =>(
    <li> {comment.author} has a comment: {comment.text} </li>
  ))

  return (
    <div>
      <ul>
        {commentNodes}
      </ul>
    </div>
  );
};


DisplayTestData.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string,
    text: PropTypes.string
  }))

}

DisplayTestData.defaultProps = {
  data:[],
}

export default DisplayTestData;
