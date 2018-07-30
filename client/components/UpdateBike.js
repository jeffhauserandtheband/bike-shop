import React from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateBike, fetchBike } from '../store'

class UpdateBike extends React.Component {
  state = {
      name: '',
      description: '',
      price: '',
      inventory: '',
      availability: '',
      imageUrl: '',
      selectedBikeId: null,
      bikeAddedMsg: '',
  }

  async componentDidMount() {
    await this.props.fetchBike(this.props.match.params.id)
    this.setState(this.props.bike) // is this bad practice to just throw everything into state?
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // Submit bike handler
  handleSubmit = async event => {
    event.preventDefault()
    try {
      // const res = await this.props.updateBike(this.props.match.params.id, {
      //   name: this.state.name,
      //   description: this.state.description,
      //   price: this.state.price,
      //   inventory: this.state.inventory,
      //   availability: this.state.availability,
      // })
      const res = await axios({
        method: 'put',
        url: `/api/bikes/${this.props.match.params.id}`,
        data: {
          name: this.state.name,
          description: this.state.description,
          price: this.state.price,
          inventory: this.state.inventory,
          availability: this.state.availability,
        }
      })
      console.log(res);
      if (res.status === 201) {
        this.setState({
          bikeAddedMsg: 'Bike successfully updated!'
        })
      } else { // TODO: is it redundant to have this here AND in a catch block?
        this.setState({
          bikeAddedMsg: 'Error updating the bike!' + res.status
        })
      }
    }
    catch (err) {
      this.setState({
        bikeAddedMsg: 'Error updating the bike: ' + err
      })
    }
  }

  render() {
    return (
      <div>
        <h1>Add a bike</h1>
        <form onSubmit={this.handleSubmit}>

            {
              this.state.bikeAddedMsg.length > 0 &&
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
      </div>
    )
  }
}

const mapStateToProps = state => ({
  bike: state.bikes.singleBike
})

const mapDispatchToProps = dispatch => ({
  updateBike: (bikeId, bikeData) => dispatch(updateBike(bikeId, bikeData)),
  fetchBike: bikeId => dispatch(fetchBike(bikeId))
})


export default connect(mapStateToProps, mapDispatchToProps)(UpdateBike)
