import React, { Component } from 'react';

const twitterImages = [
  'https://pbs.twimg.com/media/Cs0lwwhXgAA51ZW.jpg',
  'https://pbs.twimg.com/media/Csh059OWcAEbCA3.jpg',
  'https://pbs.twimg.com/media/CsdMvl1WIAAdape.jpg'
];

export default class ImageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: twitterImages
    }
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
