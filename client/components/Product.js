import React, { Component } from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

import ProductInfo from './ProductInfo';

class Product extends Component {
  render() {
    const { product, reviews } = this.props;

    const productReviews = reviews.filter(
      (review) => review.product === product.id
    );

    const numberOfReviews = productReviews.length;

    const redirectUrl = `/view/${product.id}`;

    return (
      <figure className="product__container">
        <div>
          <Link to={redirectUrl}>
            <img
              className="product__image"
              src={product.picture}
              alt={product.name}
            />
          </Link>
        </div>
        <figcaption>
          <p>
            <strong>{product.name}</strong>
          </p>
          <div className="product__info--container">
            <ProductInfo
              redirectUrl={redirectUrl}
              number={numberOfReviews}
              text="Numer of reviews:"
            />
          </div>
        </figcaption>
      </figure>
    );
  }
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
  reviews: PropTypes.array.isRequired
};

export default Product;
