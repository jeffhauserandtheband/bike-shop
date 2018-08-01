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
  TableBody,
  Select
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
    justifyContent: 'space-around',
    flexDirection: 'row',
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
    state: ''
  }
  handleChange = event => {
    this.setState({state: event.target.value})
  }
  render() {
    const {orders, classes, updateOrder} = this.props
    return (
      <div className={classes.root}>
        {orders.map(order => (
          <ExpansionPanel key={order.id}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <div className={classes.summary}>
                <div>Order Id: {order.id}</div>
                <div>Status: {order.state}</div>
                <div>Total Cost: {order.orderCost/100.00}</div>
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
                <div>
                  <Typography variant="body2">Change order status:</Typography>
                  <select value={this.state.state} onChange={this.handleChange}>
                    <option value="created">Created</option>
                    <option value="processing">Processing</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    type="submit"
                    onClick={event =>
                      updateOrder(event, this.state.state, order)
                    }
                  >
                    Submit
                  </Button>
                </div>
              </div>
              <div className={classNames(classes.column, classes.overFlow)}>
                <Table>
                  <TableBody>
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

export default withStyles(styles)(Orders)

Orders.propTypes = {
  classes: PropTypes.object.isRequired
}
