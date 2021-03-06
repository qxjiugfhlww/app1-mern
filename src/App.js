import React from 'react';

import { Header, Add, FullPost, NotFound } from './components/components';

import { Posts } from './modules/index';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header title='Title' description='Description' imageUrl='https://i.ytimg.com/vi/fagwO2qXHQk/maxresdefault.jpg' />
      <div className='container'>
        <div className='content'>
          <button type='button' className='btn btn-primary'>Add post</button>
          <div className='content'>
            {/* <Add /> */}
            <Router>
              <div>
                <Switch>


                  <Route path='/' exact render={() => <Posts />} />
                  <Route path='/post/:id' exact render={() => <FullPost title='Title FullPost' date={'' + new Date()} />} />
                  <Route path='/post/:id/edit' exact render={() => <Add />} />
                  <Route path='*' render={() => <NotFound />} />
                </Switch>
              </div>
            </Router>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
