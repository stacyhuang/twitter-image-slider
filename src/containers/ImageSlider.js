import React, { Component } from 'react'
import { connect } from 'react-redux'
import SingleSlider from '../components/SingleSlider'

class ImageSlider extends Component {
  render() {
    const { images } = this.props

    return (
      <div className='image-list'>
        {images.length ? <SingleSlider images={images} /> : <div></div>}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    images: state.images
  }
}

export default connect(mapStateToProps)(ImageSlider)
