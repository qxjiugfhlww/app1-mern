import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import rootReducer from './reducers';

function reducer(state, action) {
  console.log(state, action);
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = composeEnhancer(applyMiddleware(thunk));

const store = createStore(rootReducer, middleware);

export default store;