import React from 'react';
import './Posts.scss';

import { Post } from './../components';

function Posts({ posts }) {
  return (

    <div className='post-list'>
      {
        posts.map(post => (
          <Post {...post} />
        ))
      }
    </div>

  );
}

export default Posts;
