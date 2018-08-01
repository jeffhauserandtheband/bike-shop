import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {fetchBikes} from '../store'
import {withStyles} from '@material-ui/core/styles'
import {TextField, Button, Typography} from '@material-ui/core'

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: 20
  },
  image: {
    display: 'flex',
    flexFlow: 'column wrap'
  }
}

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
    imgAddedMsg: '' // TODO: Add message based on api response
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
        availability: this.state.availability
      })
      // dispatch(fetchBikes())
      if (res.status === 201) {
        this.setState({
          bikeAddedMsg: 'Bike successfully added!'
        })
      } else {
        // TODO: is it redundant to have this here AND in a catch block?
        this.setState({
          bikeAddedMsg: 'Error adding the bike!' + res.status
        })
      }
    } catch (err) {
      this.setState({
        bikeAddedMsg: 'Error adding the bike: ' + err
      })
    }
  }

  imageSubmit = async event => {
    event.preventDefault()
    try {
      const res = await axios.post(
        `/api/bikes/${this.state.selectedBikeId}/image`,
        {
          imageUrl: this.state.imageUrl,
          bikeId: this.state.bikeId
        }
      )
      if (res.status === 201) {
        this.setState({
          imgAddedMsg: 'Image successfully added!'
        })
      } else {
        // TODO: is it redundant to have this here AND in a catch block?
        this.setState({
          imgAddedMsg: 'Error adding the image!' + res.status
        })
      }
    } catch (err) {
      this.setState({
        imgAddedMsg: 'Error adding the image: ' + err
      })
    }
  }

  render() {
    const {classes} = this.props
    return (
      <div className={classes.root}>
        <form onSubmit={this.bikeSubmit}>
          <Typography variant="display1">Add a bike</Typography>
          {this.state.bikeAddedMsg.length > 0 && (
            <label htmlFor="bikeAddedMsg">{this.state.bikeAddedMsg}</label>
          )}
          <br />
          <TextField
            label="Name"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <br />
          <TextField
            label="Description"
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
            multiline={true}
          />
          <br />
          <TextField
            label="Price"
            type="text"
            name="price"
            value={this.state.price}
            onChange={this.handleChange}
          />
          <br />
          <TextField
            label="Inventory"
            type="text"
            name="inventory"
            value={this.state.inventory}
            onChange={this.handleChange}
          />

          <br />
          <div className="input-wrapper">
            <label htmlFor="availability">Availability</label>
            <select
              onChange={this.handleChange}
              name="availability"
              value={this.state.availability}
            >
              <option value="">--</option>
              <option value="available" name="available">
                available
              </option>
              <option value="discontinued" name="discontinued">
                discontinued
              </option>
            </select>
          </div>
          <div className="add-form-button-wrapper">
            <Button
              color="primary"
              size="small"
              variant="contained"
              type="submit"
            >
              Submit
            </Button>
          </div>
        </form>

        <div className={classes.image}>
          <form onSubmit={this.imageSubmit}>
            <Typography variant="display1">Add a bike</Typography>
            {this.state.imgAddedMsg.length > 0 && (
              <label htmlFor="imgAddedMsg">{this.state.imgAddedMsg}</label>
            )}

            <TextField
              label="ImageUrl:"
              type="text"
              name="imageUrl"
              value={this.state.imageUrl}
              onChange={this.handleChange}
            />

            {/* The below two lines are for eventual image upload capabilies */}
            {/* <input type="file" name="imageUpload" value="imageUpload" id="imageUpload" multiple onChange={this.addImageToState} />
            <label htmlFor="imageUpload">Select an image to upload</label> */}

            <div className="input-wrapper">
              <label htmlFor="selectedBikeId">Select a bike</label>

              <select onChange={this.handleChange} name="selectedBikeId">
                <option value="">--</option>
                {this.state.bikes.length > 0 &&
                  this.state.bikes.map(bike => {
                    return (
                      <option
                        value="available"
                        name="available"
                        key={bike.id}
                        value={bike.id}
                      >
                        {bike.name} -- {bike.id}
                      </option>
                    )
                  })}
              </select>
            </div>
            <div className="add-form-button-wrapper">
              <Button
                color="primary"
                size="small"
                variant="contained"
                type="submit"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  bikes: state.bikes.bikes
})

const mapDispatchToProps = dispatch => ({
  fetchBikes: () => dispatch(fetchBikes())
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AddBike))
