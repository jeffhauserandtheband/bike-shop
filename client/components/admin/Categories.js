import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../../store'
import {withStyles} from '@material-ui/core/styles'
import {
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@material-ui/core'
//import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

const styles = {
  root: {
    flexGrow: 1,
    width: 200,
  },
  
}

const Categories = ({categories, classes}) => (
  categories.map(category=> (
    <Paper className={classes.root} key={category.id}>
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell>{category.name}</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {category.categoryvalues.map(value => {
          return (
            <TableRow key={value.id}>
              <TableCell>{value.name}</TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  </Paper>
  ))
  
)

/**
 * CONTAINER
 */

const mapState = state => {}

const mapDispatch = dispatch => {}

export default connect(mapState, mapDispatch)(withStyles(styles)(Categories))

/**
 * PROP TYPES
 */
Categories.propTypes = {
  classes: PropTypes.object.isRequired
}
