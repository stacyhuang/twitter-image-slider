import React, { Component } from 'react'
import ImageSlider from '../containers/ImageSlider'
import SearchBar from '../containers/SearchBar'

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <SearchBar />
        <ImageSlider />
      </div>
    )
  }
}
