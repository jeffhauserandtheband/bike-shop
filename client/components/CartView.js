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
  state = {
    items: [
      {
        bikeId: 1,
        cartId: 1,
        model: 'All-City',
        price: 200.0,
        subtotal: 200.0,
        createdAt: '2018-07-25T20:44:30.825Z',
        id: 1,
        quantity: 1,
        updatedAt: '2018-07-25T20:44:30.825Z'
      },
      {
        bikeId: 1,
        cartId: 1,
        model: 'All-City',
        price: 200.0,
        subtotal: 200.0,
        quantity: 1,
        createdAt: '2018-07-25T20:44:30.825Z',
        id: 5,
        
        updatedAt: '2018-07-25T20:44:30.825Z'
      },
      {
        bikeId: 1,
        cartId: 1,
        model: 'All-City',
        price: 200.0,
        subtotal: 200.0,
        createdAt: '2018-07-25T20:44:30.825Z',
        id: 6,
        quantity: 1,
        updatedAt: '2018-07-25T20:44:30.825Z'
      }
    ]
  }
  render() {
    const {classes} = this.props

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
            {this.state.items.map(item => {
              return (
                <TableRow key={item.id}>
                  <TableCell component="th" scope="row" className={classes.picCell}>
                    <img src="/bicycle-1296859_1280.png" />
                  </TableCell>
                  <TableCell >
                 <Link to={`/bikes/${item.id}`} >{item.model}</Link>
                 <Button>Delete</Button> 
                  </TableCell>
                  <TableCell>{item.quantity}
                  <IconButton
                  color="inherit"
                  className={classes.button}
                  
                >
                  <Add/>
                </IconButton>
                <IconButton
                  color="inherit"
                  className={classes.button}
                  
                >
                  <Remove />
                </IconButton>
                  </TableCell>
                  <TableCell>${item.price}</TableCell>         
                </TableRow>
              )
            })}
          </TableBody>
          <TableFooter>
          <TableCell/>
          <TableCell/>
          <TableCell/>
          <TableCell>
            <Typography>Subtotal $600</Typography>
            <Button>Checkout</Button> 
          </TableCell>
        </TableFooter>
        </Table>
        {!this.state && (
          <Typography variant="display1" align="center">
            0 items in your cart
          </Typography>
        )}
      </Paper>
    )
  }
}

CartView.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(CartView)
