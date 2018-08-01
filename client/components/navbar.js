import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {withStyles} from '@material-ui/core/styles'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton
} from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  },
  link: {
    marginRight: 20
  }
}

const Navbar = ({handleClick, isLoggedIn, isAdmin, classes}) => (
  <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
        {isLoggedIn ? (
          <Fragment>
            {/* The navbar will show these links after you log in */}
            <Typography
              component={Link}
              to="/bikes"
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              Bike-Shop
            </Typography>
            {isAdmin && (
              <Button component={Link} to="/admin" color="inherit">
                admin-panel
              </Button>
            )}
            <Button component={Link} to="/bikes" color="inherit">
              Shop-Bikes
            </Button>
            <Button
              component={Link}
              to="/myorders/order-history"
              color="inherit"
            >
              My Orders
            </Button>
            <Button href="#" color="inherit" onClick={handleClick}>
              Logout
            </Button>
          </Fragment>
        ) : (
          <Fragment>
            <Typography
              component={Link}
              to="/bikes"
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              Bike-Shop
            </Typography>
            <Button component={Link} to="/bikes" color="inherit">
              Shop-Bikes
            </Button>
            <Button component={Link} to="/login" color="inherit">
              Login
            </Button>
            <Button component={Link} to="/signup" color="inherit">
              Sign Up
            </Button>
          </Fragment>
        )}
        <IconButton
          color="inherit"
          className={classes.button}
          aria-label="Add to shopping cart"
          component={Link}
          to="/cart"
        >
          <ShoppingCartIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    isAdmin: state.user.userType === 'admin'
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(withStyles(styles)(Navbar))

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired
}
