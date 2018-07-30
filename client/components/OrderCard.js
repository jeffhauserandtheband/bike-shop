import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {withStyles} from '@material-ui/core/styles'
import {TableCell, TableRow} from '@material-ui/core'

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

const OrderCard = ({items, classes}) =>
  items.map(item => {
    return (
      <TableRow key={item.id}>
        <TableCell component="th" scope="row" className={classes.picCell}>
          <Link to={`/bikes/${item.id}`}>
            <img className={classes.picCell} src="/bicycle-1296859_1280.png" />
          </Link>
        </TableCell>
        <TableCell>
          <Link to={`/bikes/${item.id}`}>{item.name}</Link>
          <div>${item.orderEntries.price}</div>
          <div>Quantity {item.orderEntries.quantity}</div>
        </TableCell>
      </TableRow>
    )
  })

export default withStyles(styles)(OrderCard)

/**
 * PROP TYPES
 */
OrderCard.propTypes = {
  classes: PropTypes.object.isRequired
}
