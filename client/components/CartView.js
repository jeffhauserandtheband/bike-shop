import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableFooter,
  Paper,
  Typography,
  Button,
  IconButton
} from '@material-ui/core'
import {connect} from 'react-redux'
import {incrementCart,decrementCart,deleteCartEntry,saveOrder} from '../store'
import {Link} from 'react-router-dom'
import {Add, Remove} from '@material-ui/icons/'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  },
  picCell: {
    width:100,
  },
  flexContainer: {
    flexDirection: 'row'
  },
  subtotal: {
    display: 'flex'
  },

})

class CartView extends Component {
  constructor() {
    super()
    this.handleClickIncrementCart = this.handleClickIncrementCart.bind(this)
    this.handleClickDecrementCart = this.handleClickDecrementCart.bind(this)
    this.handleClickDeleteCartEntry = this.handleClickDeleteCartEntry.bind(this)
    this.handleClickCheckout = this.handleClickCheckout.bind(this)

    this.mounted=false
  }

  componentDidMount() {

  }

  handleClickIncrementCart(bikeId) {
    const cartId=this.props.cart.cartId
    this.props.incrementCart(cartId,bikeId)
  }

  handleClickDecrementCart(bikeId) {
    const cartId=this.props.cart.cartId
    this.props.decrementCart(cartId,bikeId)
  }

  handleClickDeleteCartEntry(bikeId) {
    //delete an entire cart entry
    const cartId=this.props.cart.cartId
    this.props.deleteCartEntry(cartId,bikeId)
  }

  handleClickCheckout() {
    const cartId=this.props.cart.cartId
    this.props.saveOrder(cartId)
  }

  render() {
    // if (! this.props.cart.cartId) { return (<div>no cart available</div>)}

    // if (this.props.cart.cartId ===0) {return (<div>cart id is 0 -- error</div>)}

    const {classes,cart} = this.props

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell/>
              <TableCell>Quantity</TableCell>
              <TableCell>Price</TableCell>


            </TableRow>
          </TableHead>
          <TableBody>
            {cart.cartEntries.map(cartEntry => {
              return (
                <TableRow key={cartEntry.bikeId}>
                  <TableCell component="th" scope="row" className={classes.picCell}>
                    {/* <img src="/bicycle-1296859_1280.png" /> */}
                    <img src={cartEntry.image} />
                  </TableCell>
                  <TableCell >
                 <Link to={`/bikes/${cartEntry.bikeId}`} >{cartEntry.name}</Link>
                 <Button onClick={(e) => this.handleClickDeleteCartEntry(cartEntry.bikeId)}>Delete</Button>
                  </TableCell>
                  <TableCell>{cartEntry.quantity}
                  <IconButton onClick={(e) => this.handleClickIncrementCart(cartEntry.bikeId)}
                  color="inherit"
                  className={classes.button}

                >
                  <Add/>
                </IconButton>
                <IconButton onClick={(e) => this.handleClickDecrementCart(cartEntry.bikeId)}
                  color="inherit"
                  className={classes.button}

                >
                  <Remove />
                </IconButton>
                  </TableCell>
                  <TableCell>${cartEntry.price}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
          <TableFooter>
          <TableCell/>
          <TableCell/>
          <TableCell/>
          <TableCell>
            <Typography>Subtotal ${cart.subtotal}</Typography>
            <Button  onClick={this.handleClickCheckout}>Checkout</Button>
          </TableCell>
        </TableFooter>
        </Table>
        {!this.state && (
          <Typography variant="display1" align="center">
            {cart.quantity} items in your cart
          </Typography>
        )}
      </Paper>
    )
  }
}

CartView.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapDispatchToProps = dispatch => {
  return {
    incrementCart: (cartId,bikeId) => {
      dispatch(incrementCart(cartId,bikeId))},
    decrementCart: (cartId,bikeId) => {
      dispatch(decrementCart(cartId,bikeId))},
    deleteCartEntry: (cartId,bikeId) => {
      dispatch(deleteCartEntry(cartId,bikeId))},
    //saveOrder is temporary hookup to checkout
    //this will be a transition to checkout page
    saveOrder: (cartId) => {
      dispatch(saveOrder(cartId))}
    }
  }

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CartView))
