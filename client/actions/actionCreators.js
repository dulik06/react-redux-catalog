export function addReview(productId, author, review, rating) {
  return {
    type: 'ADD_REVIEW',
    productId,
    author,
    review,
    rating
  };
}
