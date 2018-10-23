import { connect } from 'react-redux';

import App from './App';
import { mapStateToProps, mapDispatchToProps } from './App.map';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
