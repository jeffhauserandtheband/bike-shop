import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchOneBike, fetchReview, incrementCart} from '../store'
import {withStyles} from '@material-ui/core/styles'
import {
  Grid,
  Paper,
  Button,
  Typography,
  Card,
  CardActions,
  CardMedia,
  ButtonBase
} from '@material-ui/core'
import {Link} from 'react-router-dom'

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 600,
    padding: theme.spacing.unit * 2
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%'
  }
})

class SingleBike extends Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.fetchOneBike(id)
    this.props.fetchReview(id)
  }

  handleClickAddToCart(bikeId) {
    let cartId = 0
    if (this.props.cart.cartId) {
      cartId = this.props.cart.cartId
    }
    this.props.incrementCart(cartId, bikeId)
  }

  render() {
    const {name, description, price, inventory} = this.props.singleBike
    const review = this.props.review
    const id = this.props.match.params.id
    console.log('render')
    console.log('single', this.props.singleBike)
    if (!this.props.singleBike || review === undefined) {
      return <Grid container>Loading..</Grid>
    }

    return (
      <Grid container>
        <Grid item sm={2} key={this.props.singleBike.id}>
          <Paper style={style.Paper}>
            <img
              src={
                this.props.singleBike.bikeimages[0] &&
                this.props.singleBike.bikeimages[0].imageUrl
              }
            />
            <label> Bike Name: </label>
            {name}
            <label> Description: </label>
            {description}
            <label> Price: </label>
            {price}
            <label> Inventory: </label>
            {inventory}

            <Button
              onClick={e => this.handleClickAddToCart(id)}
              size="small"
              color="primary"
            >
              Add to cart
            </Button>

            <Link to={`/bikes/${id}/reviewform`}>
              <Button> Add Review </Button>
            </Link>
          </Paper>

          {review.map(elem => {
            return (
              <Paper key={elem.id} style={style.Paper}>
                <label> Rating: </label>
                {elem.rating}
                <label> Comments: </label>
                {elem.comments}
              </Paper>
            )
          })}
          {review.length === 0 && (
            <Paper>
              <Typography variant="display1" align="center">
                No past reviews
              </Typography>
            </Paper>
          )}
        </Grid>
      </Grid>
    )
  }
}
const mapState = state => {
  return {
    singleBike: state.bikes.singleBike,
    review: state.review.review,
    cart: state.cart
  }
}

const mapDispatch = dispatch => {
  return {
    fetchOneBike: id => {
      dispatch(fetchOneBike(id))
    },
    fetchReview: id => {
      dispatch(fetchReview(id))
    },
    incrementCart: (cartId, bikeId) => {
      dispatch(incrementCart(cartId, bikeId))
    }
  }
}

export default connect(mapState, mapDispatch)(withStyles(styles)(SingleBike))
