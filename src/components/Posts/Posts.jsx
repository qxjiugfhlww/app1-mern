import React from 'react';
import './Posts.scss';

import { Post } from './../components';

function Posts({ items }) {
  return (

    <div className='post-list'>
      {items ? items.map(post => (<Post {...post} /> )) : 'Loading...'}
    </div>

  );
}

export default Posts;
