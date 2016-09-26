export default function images(state = {images: []}, action) {
  switch(action.type) {
    case 'UPDATE_SEARCH':
      return state;

    case 'SEARCH_IMAGE_SUCCESS':
      return { ...state, images: action.images };

    case 'SEARCH_IMAGE_FAILURE':
      return state;

    default:
      return state;
  }
};
