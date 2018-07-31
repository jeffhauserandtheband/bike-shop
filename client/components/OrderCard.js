import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {withStyles} from '@material-ui/core/styles'
import {TableCell, TableRow, Button, Typography} from '@material-ui/core'

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
    width: 120,
    height: 120
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
    console.log(item)
    return (
      
      <TableRow key={item.id}>
        <TableCell
          component="th"
          scope="row"
          className={classes.picCell}
          key={item.id}
        >
          <Link to={`/bikes/${item.id}`}>
            <img
              className={classes.picCell}
              src={item.bikeimages[0]}
            />
          </Link>
        </TableCell>
        <TableCell>
          <Link to={`/bikes/${item.id}`}>{item.name}</Link>
          <div><Typography variant="body2" gutterBottom>
          ${item.orderEntries.price}
        </Typography></div>
          <div><Typography variant="body2" gutterBottom>
          Quantity {item.orderEntries.quantity}
        </Typography></div>
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
