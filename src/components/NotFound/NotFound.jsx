import React from 'react';
import './NotFound.scss';

import { Link, Redirect } from 'react-router-dom';


function NotFound() {
  return (
    <div>
    <h1>Not Found</h1>
    <Link to='/'>
    <button type='button' className='btn btn-primary'>Back</button>
    </Link>
    <Redirect to='/'/>
    </div>
  );
}

export default NotFound;
