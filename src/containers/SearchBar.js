import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTweets } from '../actions/index'

export class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = { searchTerm: '' }
  }

  handleChange(e) {
    this.setState({ searchTerm: e.target.value })
  }

  handleSubmit(e) {
    const text = e.target.value.trim()
    if (e.which === 13) {
      this.props.dispatch(fetchTweets(text))
      this.setState({ searchTerm: '' })
    }
  }

  render() {
    return (
      <input
        className='searchBar'
        type='text'
        placeholder='Search for a #hashtag'
        autoFocus='true'
        value={this.state.searchTerm}
        onChange={(e) => this.handleChange(e)}
        onKeyDown={(e) => this.handleSubmit(e)}
      />
    )
  }
}

export default connect()(SearchBar)
