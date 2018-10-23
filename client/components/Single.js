import React, { Component } from 'react';

import Product from './Product';
import Reviews from './Reviews';

class Single extends Component {
  render() {
    const { products, reviews } = this.props;

    const { productId } = this.props.params;

    const i = products.findIndex((product) => product.id === productId);

    const product = products[i];

    const postReviews = reviews.filter((review) => review.product === product.id);

    return (
      <div className="single__product">
        <Product {...this.props} product={product} />
        <Reviews postReviews={postReviews} {...this.props} product={product} />
      </div>
    );
  }
}

export default Single;
