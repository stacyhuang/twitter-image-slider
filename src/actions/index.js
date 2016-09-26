export function searchTweet(searchTerm) {
  return (dispatch) => {
    var term = encodeURIComponent(searchTerm);
    fetch(`/api/search?searchTerm=${term}`)
      .then((res) => res.json())
      .then((json) => {
        const images = json.statuses
          .filter((result) => result.entities.media)
          .map((result, index) => result.entities.media[0].media_url)

        dispatch({
          type: 'SEARCH_IMAGE_SUCCESS',
          images: images
        });
      })
      .catch((err) => {
        dispatch({
          type: 'SEARCH_IMAGE_FAILURE',
          error: err
        });
      })
  }
};
