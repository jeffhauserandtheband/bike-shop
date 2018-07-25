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
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

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

const Navbar = ({handleClick, isLoggedIn, classes}) => (
  <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
        {isLoggedIn ? (
          <Fragment>
            {/* The navbar will show these links after you log in */}
            <Typography
              component={Link}
              to="/home"
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              Bike-Shop
            </Typography>
            <Typography
              component={Link}
              to="/bikes"
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              Bikes
            </Typography>
            <Button href="#" color="inherit" onClick={handleClick}>
              Logout
            </Button>
          </Fragment>
        ) : (
          <Fragment>
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              Bike-Shop
            </Typography>
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
    isLoggedIn: !!state.user.id
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
  classes: PropTypes.object.isRequired
}
