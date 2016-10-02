import * as types from '../constants/ActionTypes'

export const receiveTweets = images => ({
  type: types.RECEIVE_TWEETS,
  images: images
})

export const fetchTweets = searchTerm => dispatch => {
  const term = encodeURIComponent(searchTerm)
  return fetch(`/api/search?searchTerm=${term}`)
    .then((res) => res.json())
    .then((json) => {
      const images = json.statuses
        .filter((result) => result.entities.media)
        .map((result, index) => result.entities.media[0].media_url)

      dispatch(receiveTweets(images))
    })
}
