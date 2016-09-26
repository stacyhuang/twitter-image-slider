import React, { Component } from 'react'
import Slider from 'react-slick'

class SingleSlider extends Component {
  render() {
    const { images } = this.props

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }

    return (
      <Slider {...settings}>
        {images.map((image, index) =>
          <div key={index}>
           <img src={image} />
          </div>
        )}
      </Slider>
    )
  }
}

export default SingleSlider
