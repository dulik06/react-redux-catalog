function addReviews(state = [], action) {
  switch (action.type) {
    case 'ADD_REVIEW':
      return [
        {
          author: action.author,
          comment: action.review,
          product: action.productId,
          rating: action.rating
        },
        ...state
      ];
    default:
      return state;
  }
  return state;
}

function updateReviews(state = [], action) {
  switch (action.type) {
    case 'ADD_REVIEW':
      return {
        [action.productId]: addReviews(state[action.productId], action),
        ...state
      };
  }
  return state;
}

export default addReviews;
