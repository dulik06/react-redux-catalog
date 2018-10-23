import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import products from './productReducer';
import reviews from './reviewReducer';

const rootReducer = combineReducers({
  products,
  reviews,
  routing: routerReducer
});

export default rootReducer;
