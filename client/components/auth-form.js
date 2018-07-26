import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'
import {TextField, Button, Paper, Grid} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: 300,
    justifyContent: 'center'
  },
  grid: {
    flexGrow: 1
  },
  form: {
    paddingLeft: 50
  },
  google: {
    paddingLeft: 80
  }
})

const AuthForm = props => {
  const {name, displayName, handleSubmit, error, classes} = props

  return (
    <Grid className={classes.grid} container spacing={24}>
      <Grid item xs />
      <Grid item xs>
        <Paper className={classes.root} elevation={1}>
          <a href="/auth/google" className={classes.google}>
            {displayName} with Google
          </a>
          <form onSubmit={handleSubmit} name={name} className={classes.form}>
            <TextField htmlFor="email" id="email" label="Email" />
            <TextField
              htmlFor="password"
              id="password"
              label="Password"
              type="password"
            />
            <div>
              <Button type="submit" color="primary">
                {displayName}
              </Button>
            </div>
            {error && error.response && <div> {error.response.data} </div>}
          </form>
        </Paper>
      </Grid>
      <Grid item xs />
    </Grid>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(email, password, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(
  withStyles(styles)(AuthForm)
)
export const Signup = connect(mapSignup, mapDispatch)(
  withStyles(styles)(AuthForm)
)
/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
