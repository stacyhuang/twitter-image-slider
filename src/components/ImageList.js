import React, { Component } from 'react';
import { connect } from 'react-redux';

class ImageList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { images } = this.props;
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

function mapStateToProps(state) {
  return {
    images: state.images
  }
}

export default connect(mapStateToProps)(ImageList);
