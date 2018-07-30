import React, {Fragment, Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../../store'
import {withStyles} from '@material-ui/core/styles'
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  Button,
  Table,
  TableBody
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import OrderCard from '../OrderCard'
import classNames from 'classnames'

const styles = theme => ({
  root: {
    width: '100%'
  },
  summary: {
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '100%'
  },
  column: {
    flexBasis: '50.00%'
  },
  helper: {
    borderRight: `2px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
  },
  overFlow: {
    height: 250,
    overflowX: 'auto'
  }
})

class Orders extends Component {
  state = {
    status: ''
  }
  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }
  render() {
    const {orders, classes} = this.props
    return (
      <div className={classes.root}>
        {orders.map(order => (
          <ExpansionPanel key={order.id}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <div className={classes.summary}>
                <div>Order Id: {order.id}</div>
                <div>Status: {order.state}</div>
                <div>Total Cost: {order.orderCost}</div>
              </div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div className={classNames(classes.column, classes.helper)}>
                <div>
                  <div>
                    <Typography variant="body2">Customer: </Typography>{' '}
                    {order.shippingName}
                  </div>
                  <div>
                    <Typography variant="body2">Address: </Typography>
                    {` ${order.shippingAddress} ${order.shippingCity} , ${
                      order.shippingState
                    } ${order.shippingZip}`}
                  </div>
                </div>
                <form>
                  <label htmlFor="status">
                    <Typography variant="body2">
                      Change order status:{' '}
                    </Typography>
                  </label>
                  <select
                    value={this.state.status}
                    onChange={this.handleChange}
                  >
                    <option value="created">Created</option>
                    <option value="processing">In Progress</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                  <Button>
                    {/* needs to be connected */}
                    Submit
                  </Button>
                </form>
              </div>
              <div className={classNames( classes.column, classes.overFlow)}>
                <Table >
                  <TableBody >
                    <OrderCard items={order.bikes} />
                  </TableBody>
                </Table>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))}
      </div>
    )
  }
}

/**
 * CONTAINER
 */

const mapState = state => {}

const mapDispatch = dispatch => {}

export default connect(mapState, mapDispatch)(withStyles(styles)(Orders))

/**
 * PROP TYPES
 */
Orders.propTypes = {
  classes: PropTypes.object.isRequired
}
