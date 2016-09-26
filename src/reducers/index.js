export default (state = {images: []}, action) => {
  switch(action.type) {
    case 'RECEIVE_TWEETS':
      return { ...state, images: action.images }

    default:
      return state
  }
}
