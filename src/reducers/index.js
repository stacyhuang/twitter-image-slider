import { RECEIVE_TWEETS } from '../constants/ActionTypes'

const initialState = {
  images: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_TWEETS:
      return { ...state, images: action.images }

    default:
      return state
  }
}
