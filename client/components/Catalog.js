import React, { Component } from 'react';
import Product from './Product';

class Catalog extends Component {
  render() {
    return (
      <div className="catalog__container">
        {this.props.products.map((product, i) => (
          <Product {...this.props} key={i} product={product} />
        ))}
      </div>
    );
  }
}

export default Catalog;
