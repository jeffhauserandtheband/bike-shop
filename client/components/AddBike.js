import React from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import fetchBikes from '../store/bikes'

class AddBike extends React.Component {
  state = {
      name: '',
      description: '',
      price: '',
      inventory: '',
      availability: '',
      imageUrl: '',
      bikeId: null,
      images: [],
      bikes: [],
  }

  componentDidMount() {
    // get all bikes for image select element
    // const bikes = this.props.fetchBikes()
    console.log(this.props.bikes)

  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  addImageToState = event => {
    // this function will be used to push uploaded images to state
    // so that they can be pushed to some sort of filesystem or something
  }

  // Submit bike handler
  bikeSubmit = async event => {
    event.preventDefault()
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

  imageSubmit = async event => {
    event.preventDefault()
    try {
      axios.post(`/api/bikes/:id/image`, {
        imageUrl: this.state.imageUrl,
        bikeId: this.state.bikeId,
      })
    } catch (err) {
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

          <div className="input-wrapper">
            <label htmlFor='name' >ImageUrl:</label>
            <input type='text' name='name' value={this.state.imageUrl} onChange={this.handleChange} />
          </div>

            {/* The below two lines are for eventual image upload capabilies */}
            {/* <input type="file" name="imageUpload" value="imageUpload" id="imageUpload" multiple onChange={this.addImageToState} />
            <label htmlFor="imageUpload">Select an image to upload</label> */}



            <div className="add-form-button-wrapper">
              <button type='submit'>Submit</button>
            </div>


        </form>

      </div>
    )
  }
}

const mapStateToProps = state => f({
  bikes: state.bikes
})

const mapDispatchToProps = dispatch => ({
  // fetchBikes: () => dispatch(fetchBikes()),
})


export default connect(mapStateToProps, mapDispatchToProps)(AddBike)
