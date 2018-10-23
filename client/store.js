import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index';
import products from './data/products';
import reviews from './data/reviews';

const defaultState = {
  products,
  reviews
};

const store = createStore(rootReducer, defaultState);
export const history = syncHistoryWithStore(browserHistory, store);

export default store;
