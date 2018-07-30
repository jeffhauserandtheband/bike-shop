import React, {Component} from 'react'
import {connect} from 'react-redux'

class SearchBar extends Component {
  state = {
    filteredBikes: [],
    query: '',
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = () => {

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor='query' >Search:</label>
            <input type='text' name='query' value={this.state.query} onChange={this.handleChange} />
          </div>
          <div className="add-form-button-wrapper">
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default connect(null, null)(SearchBar)
