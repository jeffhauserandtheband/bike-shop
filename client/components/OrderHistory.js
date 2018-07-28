import React, {Component, Fragment} from 'react'
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
import {connect} from 'react-redux'

const styles = theme => ({
  root: {
    width: 890,
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    paddingBottom: 10
  },
  picCell: {
    width: 90,
    height: 90
  },
  flexContainer: {
    flexDirection: 'row'
  },
  header: {
    width: 150
  },
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  }
})

class OrderHistory extends Component {
  componentDidMount() {
    const user = this.props.user
    if (user.id) this.props.fetchUserOrders(user.id)
  }
  render() {
    const {classes} = this.props

    console.log('hello', this.props.orders)

    return this.props.orders.length ? (
      <div>
        {this.props.orders.map(order => {
          return (
            <Paper className={classes.root} key={order.id}>
              <Table className={classes.table} key={order.id}>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Typography variant="body2">Order Placed</Typography>{' '}
                      <Typography variant="body1">${order.date}</Typography>
                    </TableCell>

                    <TableCell className={classes.header}>
                      <Typography variant="body2">Order Total</Typography>
                      <div>
                        <Typography variant="body1">
                          ${order.orderCost}
                        </Typography>
                      </div>
                    </TableCell>

                    <TableCell className={classes.header}>
                      <Typography variant="body2">Order Status</Typography>
                      <div>
                        <Typography variant="body1">{order.state}</Typography>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {order.bikes.map(bike => {
                    return (
                      <TableRow key={bike.id}>
                        <TableCell
                          component="th"
                          scope="row"
                          className={classes.picCell}
                        >
                          <Link to={`/bikes/${bike.id}`}>
                            <img
                              className={classes.picCell}
                              src="/bicycle-1296859_1280.png"
                            />
                          </Link>
                        </TableCell>
                        <TableCell>
                          <Link to={`/bikes/${bike.id}`}>{bike.name}</Link>
                          <div>${bike.orderEntries.price}</div>
                          <div>Quantity {bike.orderEntries.quantity}</div>
                        </TableCell>
                        <TableCell>
                          <Button>Write a review</Button>
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </Paper>
          )
        })}
      </div>
    ) : (
      <Paper>
        <Typography variant="display1" align="center">
          No past orders.
        </Typography>
      </Paper>
    )
  }
}

OrderHistory.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapState = state => {
  return {
    orders: state.orders.orders,
    user: state.user
  }
}
const mapDispatch = dispatch => {
  return {
    fetchUserOrders: userId => dispatch(fetchUserOrders(userId))
  }
}

export default connect(mapState, mapDispatch)(withStyles(styles)(OrderHistory))
