import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {updateBike, fetchBike} from '../store'
import {withStyles} from '@material-ui/core/styles'
import {TextField, Button, Typography} from '@material-ui/core'

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingTop: 20
  }
}
class UpdateBike extends React.Component {
  state = {
    name: '',
    description: '',
    price: '',
    inventory: '',
    availability: '',
    imageUrl: '',
    selectedBikeId: null,
    bikeAddedMsg: ''
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
          availability: this.state.availability
        }
      })
      console.log(res)
      if (res.status === 201) {
        this.setState({
          bikeAddedMsg: 'Bike successfully updated!'
        })
      } else {
        // TODO: is it redundant to have this here AND in a catch block?
        this.setState({
          bikeAddedMsg: 'Error updating the bike!' + res.status
        })
      }
    } catch (err) {
      this.setState({
        bikeAddedMsg: 'Error updating the bike: ' + err
      })
    }
  }

  render() {
    const {classes} = this.props
    return (
      <div className={classes.root}>
        <Typography variant="display1">Edit bike</Typography>
        <form onSubmit={this.handleSubmit}>
          {this.state.bikeAddedMsg.length > 0 && (
            <label htmlFor="bikeAddedMsg">{this.state.bikeAddedMsg}</label>
          )}

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

          <label htmlFor="availability">Availability</label>
          <select onChange={this.handleChange} name="availability">
            <option value="">--</option>
            <option value="available" name="available">
              available
            </option>
            <option value="discontinued" name="discontinued">
              discontinued
            </option>
          </select>

          <Button
            color="primary"
            size="small"
            variant="contained"
            type="submit"
          >
            Submit
          </Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(UpdateBike)
)
