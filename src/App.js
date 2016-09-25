import React, { Component } from 'react';
import ImageList from './ImageList';
import SearchBar from './SearchBar';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <SearchBar />
        <ImageList />
      </div>
    )
  }
}
