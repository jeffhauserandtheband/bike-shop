import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {withStyles} from '@material-ui/core/styles'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button
} from '@material-ui/core'

const styles = {
  root: {
    flexGrow: 1,
    width: 200,
    flexDirection: 'column'
  },
  container: {
    display: 'flex',
    justifyContent: 'center'
  }
}

const Categories = ({categories, classes}) => (
  <Fragment>
    <div className={classes.container}>
      {categories.map(category => (
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
      ))}
    </div>
  </Fragment>
)

export default withStyles(styles)(Categories)

/**
 * PROP TYPES
 */
Categories.propTypes = {
  classes: PropTypes.object.isRequired
}
