import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchTweet } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {searchTerm: ''};
  }

  handleChange(e) {
    this.setState({searchTerm: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch(searchTweet(this.state.searchTerm));
    this.setState({searchTerm: ''});
  }

  render() {
    return (
      <form className='searchBar' onSubmit={(e) => this.handleSubmit(e)}>
        <input
          type='text'
          placeholder='Search...'
          value={this.state.searchTerm}
          onChange={(e) => this.handleChange(e)}
        />
      </form>
    )
  }
}

export default connect()(SearchBar);
