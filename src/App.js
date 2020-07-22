import React from 'react';

import { Header, Post } from './components/components';

function App() {
  return (
    <div className="App">
      {/* <Header title='Title' description='Description' imageUrl='https://i.ytimg.com/vi/fagwO2qXHQk/maxresdefault.jpg'/> */}
      <div className='container'>
        <div className='content'>
          <button type='button' className='btn btn-primary'>Add post</button>
          <div className='content'>
            {/* <div className='post_items'>
          <Post title='Post title' date={''+new Date()} id='1'/>
        </div> */}

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

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
