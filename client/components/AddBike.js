import React from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import postBike from '../store/bikes'

class AddBike extends React.Component {
  state = {
      name: '',
      description: '',
      price: '',
      inventory: '',
      availability: '',
  }

  componentDidMount() {
    // console.log('component did mount props dawg',this.props);
    // this.props.postBike({
    //   name: 'test this thing',
    //   description: 'a coooooolll bike',
    //   price: 200,
    //   inventory: 21,
    //   availability: 'available',
    // })
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // Submit bike handler
  bikeSubmit = async event => {
    event.preventDefault()
    console.log('the bike submit handler')
    // this.props.postBike({
    //   name: this.state.name,
    //   description: this.state.description,
    //   price: this.state.price,
    //   inventory: this.state.inventory,
    //   availability: this.state.availability,
    // })
    try {
      await axios.post('/api/bikes', {
        name: this.state.name,
        description: this.state.description,
        price: this.state.price,
        inventory: this.state.inventory,
        availability: this.state.availability,
      })
      // dispatch(fetchBikes())
      console.log('bike submitted!');
    }
    catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <div>
        <h1>Add a bike</h1>
        <form onSubmit={this.bikeSubmit}>
          <div className="input-wrapper">
            <label htmlFor='name' >Name:</label>
            <input type='text' name='name' value={this.state.name} onChange={this.handleChange} />
          </div>
          <div className="input-wrapper">
            <label htmlFor='description' >Description:</label>
            <input type='text' name='description' value={this.state.description} onChange={this.handleChange} />
          </div>
          <div className="input-wrapper">
            <label htmlFor='price' >Price:</label>
            <input type='text' name='price' value={this.state.price} onChange={this.handleChange} />
          </div>
          <div className="input-wrapper">
            <label htmlFor='inventory' >Inventory</label>
            <input type='text' name='inventory' value={this.state.inventory} onChange={this.handleChange} />
          </div>
          <div className="input-wrapper">
            <label htmlFor='availability' >Availability</label>
            <select onChange={this.handleChange} name="availability">
              <option value="">--</option>
              <option value="available" name="available">available</option>
              <option value="discontinued" name="discontinued">discontinued</option>
            </select>
          </div>
          <div className="add-form-button-wrapper">
            <button type='submit'>Submit</button>
          </div>
        </form>

        <form onSubmit={this.imageSubmit}>

          <div className="input-wrapper">
            <label htmlFor='name' >Name:</label>
            <input type='text' name='name' value={this.state.name} onChange={this.handleChange} />
          </div>

            <input type="file" name="imageUpload" value="imageUpload" id="imageUpload" multiple />
            <label for="imageUpload">Select an image to upload</label>
            {/* <input type="image" src="/wp-content/uploads/sendform.png" alt="Submit" width="100"> */}
            <div className="add-form-button-wrapper">
              <button type='submit'>Submit</button>
            </div>


        </form>

      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  postBike: bikeData => dispatch(postBike(bikeData))
})

export default connect(null, mapDispatchToProps)(AddBike)
