import React from 'react';
import './Add.scss';

function Add() {
  return (
    <form className='add-form'>
    <div className="form-group">
      <div className='add-form__row'>
        <h4>
          <label for="title">Title</label>
        </h4>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
      </div>

      <div className='add-form__row'>
        <h4>
          <label for="image">Image URL</label>
        </h4>
        <input type="text" className="form-control" id="image" aria-describedby="emailHelp" placeholder="Enter image url" />
      </div>

      <div className='add-form__row'>
        <h4>
          <label for="description">Description</label>
        </h4>
        <textarea className="form-control" id="description" aria-describedby="emailHelp" placeholder="Enter text" />
      </div>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
  );
}

export default Add;
