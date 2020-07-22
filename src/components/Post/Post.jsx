import React from 'react';
import './Post.scss';

import { Link } from 'react-router-dom';

function Post({ title, date, _id, onRemove }) {
  return (

    <div className='post-item'>
      <Link to={`/post/${_id}`}><h2>{title}</h2></Link>
      <p>
        <i>Posted on {date}</i>
        <a href='javascript://' onClick={onRemove}>Remove</a>
        <Link to={`/post/${_id}/edit`}>Edit</Link>

      </p>
    </div>

  );
}

export default Post;
