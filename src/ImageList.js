import React, { Component } from 'react';

export default class ImageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    }
  }

  componentDidMount() {
    fetch('/api/search')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        const images = json.statuses
          .filter((result) => {
            return result.entities.media;
          })
          .map((result, index) => {
            return result.entities.media[0].media_url;
          })

        this.setState({images});
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    const { images } = this.state;
    return (
      <div className='image-list'>
        {images.map((image, index) =>
          <div key={index}>
            <img src={image} />
          </div>
        )}
      </div>
    )
  }
}
