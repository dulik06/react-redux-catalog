import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

class ProductInfo extends Component {
  render() {
    return (
      <Link className="product__info--button" to={this.props.redirectUrl}>
        <span>
          <strong>{this.props.text} </strong>
          <p>{this.props.number}</p>
        </span>
      </Link>
    );
  }
}

ProductInfo.PropTypes = {
  redirectUrl: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
};

export default ProductInfo;
