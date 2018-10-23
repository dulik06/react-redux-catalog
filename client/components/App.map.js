import { bindActionCreators } from 'redux';

import * as actionCreators from '../actions/actionCreators';

export function mapStateToProps(state) {
  return {
    products: state.products,
    reviews: state.reviews
  };
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
