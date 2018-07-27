import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button
} from '@material-ui/core'
import {Link} from 'react-router-dom'
import {fetchUserOrders} from '../store'
import { connect } from 'react-redux'

const styles = theme => ({
  root: {
    width: 918,
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    paddingBottom: 10,
  },
  picCell: {
    width: 90,
    height: 90
  },
  flexContainer: {
    flexDirection: 'row'
  },
  subtotal: {
    display: 'flex'
  }
})

class OrderHistory extends Component {
  componentDidMount() {
    const user = this.props.user
    console.log('user', user.Id)
    if(user.id) this.props.fetchUserOrders(user.id)
  }
  render() {
    const {classes} = this.props
    console.log('hello',this.props.orders)
    //console.log('user', this.props.user.Id)
    return (

      <Paper className={classes.root}>
        {this.props.orders.length && this.props.orders.map(order => {
          return (
            <Table className={classes.table} key={order.id}>
              <TableHead>
                <TableRow>
                  <TableCell>Product</TableCell>
                  <TableCell />
                  <TableCell>Quantity</TableCell>
                  <TableCell>{order.orderCost}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {order.orderEntries.map(item => {
                  return (
                    <TableRow key={item.id}>
                      <TableCell
                        component="th"
                        scope="row"
                        className={classes.picCell}
                      >
                        <Link to={`/bikes/${item.id}`}>
                          <img src="/bicycle-1296859_1280.png" />
                        </Link>
                      </TableCell>
                      <TableCell>
                        <Link to={`/bikes/${item.id}`}>{item.model}</Link>

                      </TableCell>
                      <TableCell>{item.quantity}</TableCell>
                      <TableCell>${item.price}</TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          )
        })}
        {!this.state && (
          <Typography variant="display1" align="center">
            No past orders.
          </Typography>
        )}
      </Paper>
    )
  }
}

OrderHistory.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapState = state => {
  return {
    orders: state.orders,
    user: state.user,
  };
};
const mapDispatch = (dispatch) => {
  return {
    fetchUserOrders: (userId) => dispatch(fetchUserOrders(userId)),
    
  };
};

export default connect(mapState, mapDispatch)(withStyles(styles)(OrderHistory))
