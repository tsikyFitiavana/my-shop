
import React from 'react';
import './comment.css'

const LireComment = props => (
  <div>
      
    {
      props.items.map((item, index) => <div id="comment" key={index}>{item}</div>)
    }
  </div>
);

export default LireComment;