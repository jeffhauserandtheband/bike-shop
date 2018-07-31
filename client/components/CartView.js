import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import {
  Paper,
  Typography,
  Button,
  IconButton,
  Grid,
  ButtonBase
} from '@material-ui/core'
import {connect} from 'react-redux'
import {
  incrementCart,
  decrementCart,
  deleteCartEntry,
  saveOrder
} from '../store'
import {Link} from 'react-router-dom'
import {Add, Remove} from '@material-ui/icons/'

const styles = theme => ({
  root: {
    display: 'flex',
    alignContent: 'center',
    flexDirection: 'column',
    paddingTop: 20,
  },
  root2: {
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
  },
  button: {
    margin: theme.spacing.unit
  }
})

class CartView extends Component {
  constructor() {
    super()
    this.handleClickIncrementCart = this.handleClickIncrementCart.bind(this)
    this.handleClickDecrementCart = this.handleClickDecrementCart.bind(this)
    this.handleClickDeleteCartEntry = this.handleClickDeleteCartEntry.bind(this)
    this.handleClickCheckout = this.handleClickCheckout.bind(this)

    this.mounted = false
  }

  componentDidMount() {}

  handleClickIncrementCart(bikeId) {
    const cartId = this.props.cart.cartId
    this.props.incrementCart(cartId, bikeId)
  }

  handleClickDecrementCart(bikeId) {
    const cartId = this.props.cart.cartId
    this.props.decrementCart(cartId, bikeId)
  }

  handleClickDeleteCartEntry(bikeId) {
    //delete an entire cart entry
    const cartId = this.props.cart.cartId
    this.props.deleteCartEntry(cartId, bikeId)
  }

  handleClickCheckout() {
    const cartId = this.props.cart.cartId
    this.props.saveOrder(cartId)
  }

  render() {
    // if (! this.props.cart.cartId) { return (<div>no cart available</div>)}

    // if (this.props.cart.cartId ===0) {return (<div>cart id is 0 -- error</div>)}

    const {classes, cart} = this.props

    return (
      <div className={classes.root}>
      <Typography>Shopping Cart</Typography>
        {cart.cartEntries.map(cartEntry => {
          return (
            <Paper className={classes.root2} key={cartEntry.id}>
              <Grid container spacing={16}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img
                      className={classes.img}
                      alt="complex"
                      src="/bike.jpeg"
                    />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={16}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subheading">
                        <Link to={`/bikes/${cartEntry.bikeId}`}>
                          {cartEntry.name}
                        </Link>
                      </Typography>

                      <Button
                        onClick={e =>
                          this.handleClickIncrementCart(cartEntry.bikeId)
                        }
                        color="inherit"
                        className={classes.button}
                      >
                        +
                      </Button>
                      <Typography gutterBottom>
                       {cartEntry.quantity}
                      </Typography>
                      <Button
                        onClick={e =>
                          this.handleClickDecrementCart(cartEntry.bikeId)
                        }
                        size="small"
                        className={classes.button}
                      >
                        -
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        variant="contained"
                        color="secondary"
                        size="medium"
                        onClick={e =>
                          this.handleClickDeleteCartEntry(cartEntry.bikeId)
                        }
                      >
                        Remove
                      </Button>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subheading">
                      ${cartEntry.price}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          )
        })}
        <div>
          <Typography>Subtotal ${cart.subtotal}</Typography>
          <Button onClick={this.handleClickCheckout}>Checkout</Button>
        </div>
        {!this.state && (
          <Typography variant="display1" align="center">
            {cart.quantity} items in your cart
          </Typography>
        )}
      </div>
    )
  }
}

CartView.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapDispatchToProps = dispatch => {
  return {
    incrementCart: (cartId, bikeId) => {
      dispatch(incrementCart(cartId, bikeId))
    },
    decrementCart: (cartId, bikeId) => {
      dispatch(decrementCart(cartId, bikeId))
    },
    deleteCartEntry: (cartId, bikeId) => {
      dispatch(deleteCartEntry(cartId, bikeId))
    },
    //saveOrder is temporary hookup to checkout
    //this will be a transition to checkout page
    saveOrder: cartId => {
      dispatch(saveOrder(cartId))
    }
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(CartView)
)
