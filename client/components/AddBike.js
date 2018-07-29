import React from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import {fetchBikes} from '../store'

class AddBike extends React.Component {
  state = {
      name: '',
      description: '',
      price: '',
      inventory: '',
      availability: '',
      imageUrl: '',
      selectedBikeId: null,
      images: [],
      bikes: [],
      bikeAddedMsg: '', // TODO: Add message based on api response
      imageAddedMsg: '', // TODO: Add message based on api response
  }

  async componentDidMount() {
    await this.props.fetchBikes()
    await this.setState({
      bikes: this.props.bikes
    })
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
      const res = await axios.post('/api/bikes', {
        name: this.state.name,
        description: this.state.description,
        price: this.state.price,
        inventory: this.state.inventory,
        availability: this.state.availability,
      })
      // dispatch(fetchBikes())
      console.log('bike submitted!', res);
      if (res.status === 201) {
        this.setState({
          bikeAddedMsg: 'Bike successfully added!'
        })
      } else { // TODO: is it redundant to have this here AND in a catch block?
        this.setState({
          bikeAddedMsg: 'Error adding the bike!'
        })
      }
    }
    catch (err) {
      this.setState({
        bikeAddedMsg: 'bike not added: ' + err
      })
    }
  }

  imageSubmit = async event => {
    event.preventDefault()
    try {
      await axios.post(`/api/bikes/${this.state.selectedBikeId}/image`, {
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

            {this.state.bikeAddedMsg.length > 0 &&
                <label htmlFor="bikeAddedMsg">{this.state.bikeAddedMsg}</label>
            }

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
            <label htmlFor='imageUrl' >ImageUrl:</label>
            <input type='text' name='imageUrl' value={this.state.imageUrl} onChange={this.handleChange} />
          </div>

            {/* The below two lines are for eventual image upload capabilies */}
            {/* <input type="file" name="imageUpload" value="imageUpload" id="imageUpload" multiple onChange={this.addImageToState} />
            <label htmlFor="imageUpload">Select an image to upload</label> */}

            <div className="input-wrapper">
              <label htmlFor='selectedBikeId' >Select a bike</label>

              <select onChange={this.handleChange} name="selectedBikeId">
                <option value="">--</option>
                {
                  this.state.bikes.length > 0 &&
                  this.state.bikes.map(bike => {
                  return (
                    <option value="available" name="available" key={bike.id} value={bike.id}>{bike.name} -- {bike.id}</option>
                  )
                })}
              </select>
            </div>
            <div className="add-form-button-wrapper">
              <button type='submit'>Submit</button>
            </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  bikes: state.bikes.bikes
})

const mapDispatchToProps = dispatch => ({
  fetchBikes: () => dispatch(fetchBikes()),
})


export default connect(mapStateToProps, mapDispatchToProps)(AddBike)
