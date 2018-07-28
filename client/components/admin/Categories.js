import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../../store'
import {withStyles} from '@material-ui/core/styles'
import {Paper, Typography} from '@material-ui/core'
//import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

const styles = {
  root: {
    flexGrow: 1
  }
}

const Categories = props => (
  <div className={props.classes.root}>
    <Typography variant="headline">Categories</Typography>
  </div>
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
