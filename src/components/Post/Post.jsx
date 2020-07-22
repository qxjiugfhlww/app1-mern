import React from 'react';
import './Post.scss';

function Post({ title, date, _id }) {
  return (

    <div className='post-item'>
      <a href={`/post/${_id}`}><h2>{title}</h2></a>
      <p>
        <i>Posted on {date}</i>
        <a href={`/post/${_id}`}>Remove</a>
        <a href={`/post/${_id}`}>Edit</a>

      </p>
    </div>

  );
}

export default Post;
