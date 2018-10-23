import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Reviews extends Component {
  showReviews(review, i) {
    return (
      <div className="reviews__list" key={i}>
        <p>
          <strong>{review.author}</strong> Raiting: {review.rating} out of 5
        </p>
        <p>
          <i>{review.comment}</i>
        </p>
      </div>
    );
  }
  handleSubmit(event) {
    event.preventDefault();
    const { productId } = this.props.params;
    const author = this.refs.author.value;
    const review = this.refs.review.value;
    const rating = this.refs.rating.value;
    this.props.addReview(productId, author, review, rating);
    this.refs.addReview.reset();
  }
  render() {
    return (
      <div className="reviews__container">
        <p>{this.props.product.description}</p>
        <h2>Add review</h2>
        <form
          ref="addReview"
          className="reviews__form"
          onSubmit={this.handleSubmit.bind(this)}
        >
          <input ref="author" placeholder="author" type="text" />
          <input ref="review" placeholder="review" type="text" />
          <input
            placeholder="rating"
            type="number"
            ref="rating"
            min="1"
            max="5"
          />
          <input hidden type="submit" />
        </form>
        {this.props.postReviews.map(this.showReviews)}
      </div>
    );
  }
}

Reviews.propTypes = {
  postReviews: PropTypes.array.isRequired,
  product: PropTypes.object.isRequired
};

export default Reviews;
