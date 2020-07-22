import React from 'react';
import './FullPost.scss';

import { Link } from 'react-router-dom';

function FullPost({ title, date, _id }) {
  return (

    <div className='full-post'>
      <div className='container'>
        <Link to='/'>
      <button type='button' className='btn btn-primary'>Back</button>
      </Link>
      <h2>{title}</h2>
      <p>
        <i>Posted on {date}</i>
      </p>
      <br />
      <p className='full-post__text'>
        fgdfgdfgfdgdfgdfgdfgdfgdfgdfgdfgdfg
        dfgdfgdfgdfgdfgdfg
      </p>
      </div>
    </div>

  );
}

export default FullPost;
