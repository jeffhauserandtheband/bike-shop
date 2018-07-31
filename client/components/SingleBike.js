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
      padding: theme.spacing.unit * 2,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  });

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
    const {name, description, price, inventory, } = this.props.singleBike
    const {classes} = this.props
    const review = this.props.review
    const id = this.props.match.params.id
    console.log('render')
    console.log('single', this.props.singleBike)
    if (!this.props.singleBike || review === undefined) {
      return <Grid container>Loading..</Grid>
    }

    return (
       <Paper className={classes.root}>
        <Grid container spacing={16}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="/bike.jpeg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} xl container>
            <Grid item xs container direction="column" spacing={16}>
              <Grid item xs>
                <Typography gutterBottom variant="subheading">
                  Standard license
                </Typography>
                <Typography gutterBottom>Full resolution 1920x1080 • JPEG</Typography>
                <Typography color="textSecondary">ID: 1030114</Typography>
              </Grid>
              <Grid item>
                <Typography style={{ cursor: 'pointer' }}>Remove</Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subheading">$19.00</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>


       
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
